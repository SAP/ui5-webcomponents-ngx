import { Rule, SchematicsException, Tree } from "@angular-devkit/schematics";
import * as ts from "typescript";
import { updateWorkspace } from "@schematics/angular/utility/workspace";
import { Change, InsertChange } from "@schematics/angular/utility/change";
import { ProjectDefinition } from "@schematics/angular/utility";
import { SchematicContext } from "@angular-devkit/schematics/src/engine/interface";
import { getAppModulePath } from "@schematics/angular/utility/ng-ast-utils";
import { addImportToModule, insertImport } from "@schematics/angular/utility/ast-utils";
import { findBootstrapApplicationCall } from "@schematics/angular/utility/standalone/util";
import { getProjectDefinition } from "../utils/get-project-definition";
import { getProjectMainFile } from "../utils/project-main-file";
import { getModuleDeclaration } from "../utils/getModuleDeclaration";
import { getSourceFile } from "../utils/getSourceFile";
import { findProvidersLiteral } from "../utils/find-providers-literal";

interface I18nOptions {
  useI18n: boolean,
  project: string,
  defaultLanguage: string,
}

export function addI18n(options: I18nOptions): Rule {
  return async (tree: Tree, context: SchematicContext) => updateWorkspace(async (workspace) => {
    if (!options.useI18n) {
      return;
    }
    const projectDefinition = getProjectDefinition(workspace, options.project);
    const update: { changes: Change[], file: string } = addI18nModule(tree, projectDefinition, context, options);
    const exportRecorder = tree.beginUpdate(update.file);

    for (const change of update.changes) {
      if (change instanceof InsertChange) {
        exportRecorder.insertLeft(change.pos, change.toAdd);
      }
    }

    tree.commitUpdate(exportRecorder);
  });
}

function addI18nModule(tree: Tree, projectDefinition: ProjectDefinition, context: SchematicContext, options: I18nOptions): {
  changes: Change[];
  file: string
} {
  try {
    return addModuleToNonStandaloneApp(tree, projectDefinition, context, options);
  } catch (e) {
    if ((e as { message?: string }).message?.includes('Bootstrap call not found')) {
      return addModuleToStandaloneApp(tree, projectDefinition, context, options);
    } else {
      throw e;
    }
  }
}

function rootProviderConfig(options: I18nOptions) {
  return `{
      language: ${JSON.stringify(options.defaultLanguage)},
      fetchDefaultLanguage: true,
      bundle: {
        name: 'app-root-i18n-bundle',
        translations: {
            // You can add your translations here. For more information please refer to the documentation.
            [${JSON.stringify(options.defaultLanguage)}]: {
                'app-root-title': 'Hello World!'
            }
        }
      }
    }`
}

function addModuleToNonStandaloneApp(tree: Tree, projectDefinition: ProjectDefinition, context: SchematicContext, options: I18nOptions): {
  changes: Change[];
  file: string
} {
  const appModulePath = getAppModulePath(
    tree,
    getProjectMainFile(projectDefinition)
  );

  if (!appModulePath) {
    throw new SchematicsException(
      'Could not find root module for defined project.'
    );
  }
  const appModuleSource = getSourceFile(tree, appModulePath);

  const i18nModule = getModuleDeclaration(
    appModuleSource,
    'Ui5I18nModule'
  );
  const moduleConfig = `\nUi5I18nModule.forRoot(${rootProviderConfig(options)})`;
  if (i18nModule) {
    i18nModule.getChildren(appModuleSource);
    const i18nModuleDecl = i18nModule.getFullText();
    const appModuleContent = tree.readText(appModulePath).split(i18nModuleDecl).join(moduleConfig);
    tree.overwrite(appModulePath, appModuleContent);
    context.logger.info('Found previous Ui5I18nModule. Replaced with new one.');
    return {changes: [], file: appModulePath};
  }

  const changes: Change[] = [
    ...addImportToModule(
      appModuleSource,
      appModulePath,
      moduleConfig,
      null as unknown as string, // This is because of a bug in the angular schematics
    ),
    insertImport(appModuleSource, appModulePath, 'Ui5I18nModule', '@ui5/webcomponents-ngx/i18n')
  ];

  return {changes, file: appModulePath};
}

function addModuleToStandaloneApp(tree: Tree, projectDefinition: ProjectDefinition, context: SchematicContext, options: I18nOptions): {
  changes: Change[];
  file: string
} {
  const mainFile = getProjectMainFile(projectDefinition);
  const mainFileSource = getSourceFile(tree, mainFile);
  const bootstrapCall = findBootstrapApplicationCall(tree, mainFile);
  if (!bootstrapCall) {
    throw new SchematicsException('Could not find bootstrap call in main.ts');
  }
  const providersLiteral = findProvidersLiteral(bootstrapCall);
  const recorder = tree.beginUpdate(mainFile.toString());
  const printer = ts.createPrinter();
  const newProviderCall = ts.factory.createCallExpression(ts.factory.createIdentifier('i18nRootProviders'), undefined, [ts.factory.createObjectLiteralExpression([
    ts.factory.createPropertyAssignment('language', ts.factory.createStringLiteral(options.defaultLanguage)),
    ts.factory.createPropertyAssignment('fetchDefaultLanguage', ts.factory.createTrue()),
    ts.factory.createPropertyAssignment('bundle', ts.factory.createObjectLiteralExpression([
      ts.factory.createPropertyAssignment('name', ts.factory.createStringLiteral('app-root-i18n-bundle')),
      ts.factory.createPropertyAssignment('translations', ts.factory.createObjectLiteralExpression([
        ts.factory.createPropertyAssignment(ts.factory.createStringLiteral(options.defaultLanguage), ts.factory.createObjectLiteralExpression([
          ts.factory.createPropertyAssignment(ts.factory.createStringLiteral('app-root-title'), ts.factory.createStringLiteral('Hello World!')),
        ])),
      ])),
    ])),
  ], true)]);
  if (!providersLiteral) {
    const bootstrapCallParams = [...bootstrapCall.arguments];
    bootstrapCallParams[1] = ts.factory.createObjectLiteralExpression([createProvidersAssignment([newProviderCall])], true)
    const newCall = ts.factory.updateCallExpression(
      bootstrapCall,
      bootstrapCall.expression,
      bootstrapCall.typeArguments,
      bootstrapCallParams,
    );
    recorder.remove(bootstrapCall.getStart(), bootstrapCall.getWidth());
    recorder.insertRight(
      bootstrapCall.getStart(),
      printer.printNode(ts.EmitHint.Unspecified, newCall, mainFileSource),
    );
  } else {
    const existingUsageIndex = providersLiteral.elements.findIndex(el => ts.isCallExpression(el) && ts.isIdentifier(el.expression) && el.expression.escapedText === 'i18nRootProviders');
    const newProvidersLiteral = ts.factory.createArrayLiteralExpression(providersLiteral.elements.filter((_el, i) => i !== existingUsageIndex).concat(newProviderCall))
    if (existingUsageIndex !== -1) {
      context.logger.info('Found previous i18nRootProviders call. Replaced with new one.');
    }
    recorder.remove(providersLiteral.getStart(), providersLiteral.getWidth());
    recorder.insertRight(
      providersLiteral.getStart(),
      printer.printNode(ts.EmitHint.Unspecified, newProvidersLiteral, mainFileSource),
    );
  }
  const importChange = insertImport(mainFileSource, mainFile, 'i18nRootProviders', '@ui5/webcomponents-ngx/i18n');
  if (importChange instanceof InsertChange) {
    recorder.insertLeft(importChange.pos, importChange.toAdd);
  }
  tree.commitUpdate(recorder);
  return {changes: [], file: mainFile};
}

function createProvidersAssignment(elements: ts.Expression[] = []): ts.PropertyAssignment {
  return ts.factory.createPropertyAssignment(
    'providers',
    ts.factory.createArrayLiteralExpression(elements),
  );
}
