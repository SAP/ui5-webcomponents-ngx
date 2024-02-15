import {SchematicContext, SchematicsException, Tree} from "@angular-devkit/schematics";
import {ProjectDefinition} from "@schematics/angular/utility";
import {Ui5WebcomponentsNgxSchematicsSchema} from '../ui5WebcomponentsNgxSchematicsSchema';
import {getAppModulePath} from "@schematics/angular/utility/ng-ast-utils";
import {Change} from "@schematics/angular/utility/change";
import {addImportToModule} from "@schematics/angular/utility/ast-utils";
import {getModuleDeclaration} from "../utils/getModuleDeclaration";
import {getProjectMainFile} from "../utils/project-main-file";
import {
  addModuleImportToStandaloneBootstrap,
  findBootstrapApplicationCall
} from "@schematics/angular/private/standalone";
import * as ts from "typescript";
import {findImportProvidersFromCall} from "../utils/find-import-providers-from-call";
import { getSourceFile } from "../utils/getSourceFile";

export function addThemingModule(host: Tree, project: ProjectDefinition, context: SchematicContext, options: Ui5WebcomponentsNgxSchematicsSchema): { changes: Change[]; file: string } {
  try {
    return addModuleToNonStandaloneApp(host, project, context, options);
  } catch (e) {
    if ((e as {message?: string}).message?.includes('Bootstrap call not found')) {
      return addModuleToStandaloneApp(host, project, context, options);
    } else {
      throw e;
    }
  }
}

function addModuleToNonStandaloneApp(host: Tree, project: ProjectDefinition, context: SchematicContext, options: Ui5WebcomponentsNgxSchematicsSchema): { changes: Change[]; file: string } {
  const appModulePath = getAppModulePath(
    host,
    getProjectMainFile(project)
  );

  if (!appModulePath) {
    throw new SchematicsException(
      'Could not find root module for defined project.'
    );
  }

  const appModuleSource = getSourceFile(host, appModulePath);

  const themingModule = getModuleDeclaration(
    appModuleSource,
    'Ui5ThemingModule'
  );

  if (themingModule) {
    themingModule.getChildren(appModuleSource);
    const themingModuleDecl = themingModule.getFullText();
    const appModuleContent = host.readText(appModulePath).split(themingModuleDecl).join(`\nUi5ThemingModule.forRoot({defaultTheme: '${options.defaultTheme}'})`);
    host.overwrite(appModulePath, appModuleContent);
    context.logger.info('Found previous Ui5ThemingModule. Replaced with new one.');
    return {changes: [], file: appModulePath};
  }

  const changes: Change[] = [
    ...addImportToModule(
      appModuleSource,
      appModulePath,
      `Ui5ThemingModule.forRoot({defaultTheme: '${options.defaultTheme}'})`,
      '@ui5/theming-ngx'
    )
  ];

  return {changes, file: appModulePath};
}

function addModuleToStandaloneApp(host: Tree, project: ProjectDefinition, context: SchematicContext, options: Ui5WebcomponentsNgxSchematicsSchema): { changes: Change[]; file: string } {
  const mainFile = getProjectMainFile(project);
  const mainFileSource = getSourceFile(host, mainFile);
  const bootstrapCall = findBootstrapApplicationCall(mainFileSource);
  if (!bootstrapCall) {
    throw new SchematicsException('Could not find bootstrap call in main.ts');
  }
  const themingModuleWithDefaultTheme = `Ui5ThemingModule.forRoot({ defaultTheme: '${options.defaultTheme}' })`;
  const imports = findImportProvidersFromCall(bootstrapCall);
  if (imports) {
    const themingModuleImport = imports.arguments.find(arg => ts.isCallExpression(arg) && ts.isPropertyAccessExpression(arg.expression) && ts.isIdentifier(arg.expression.expression) && arg.expression.expression.text === 'Ui5ThemingModule');
    if (themingModuleImport) {
      const oldContent = host.readText(mainFile);
      const newContent = oldContent.split(themingModuleImport.getFullText()).join(themingModuleWithDefaultTheme);
      host.overwrite(mainFile, newContent);
      context.logger.info('Found previous Ui5ThemingModule. Replaced with new one.');
      return {changes: [], file: mainFile};
    }
  }
  addModuleImportToStandaloneBootstrap(
    host,
    mainFile,
    themingModuleWithDefaultTheme,
    '@ui5/theming-ngx'
  );
  const oldContent = host.readText(mainFile);
  const newContent = oldContent.replace(themingModuleWithDefaultTheme, 'Ui5ThemingModule'); // This is fixing the incorrect import
  host.overwrite(mainFile, newContent);

  return {changes: [], file: mainFile};
}


