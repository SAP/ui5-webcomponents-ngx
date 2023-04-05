import { updateWorkspace } from '@schematics/angular/utility/workspace';
import { getAppModulePath } from '@schematics/angular/utility/ng-ast-utils';
import {
  getDecoratorMetadata,
  getMetadataField,
  addImportToModule,
} from '@schematics/angular/utility/ast-utils';
import { Change, InsertChange } from '@schematics/angular/utility/change';
import { Rule, SchematicsException, Tree } from '@angular-devkit/schematics';
import * as ts from 'typescript';
import { Schema } from '../schema';

export function addTheming(options: Schema): Rule {
  return (tree, context) =>
    updateWorkspace(async (workspace) => {
      if (!options.theming) {
        return;
      }

      const currentWorkspace = workspace.projects.get(options.project);

      if (!currentWorkspace) {
        throw new SchematicsException('Project with such name not found.');
      }

      const buildTargetOptions = currentWorkspace.targets.get('build')?.options;

      if (!buildTargetOptions) {
        throw new SchematicsException(
          'Could not find build target options for defined project.'
        );
      }

      if (!buildTargetOptions['main']) {
        throw new SchematicsException(
          'Could not find main entry file for defined project.'
        );
      }

      const rootModule = getAppModulePath(
        tree,
        buildTargetOptions['main'] as string
      );

      if (!rootModule) {
        throw new SchematicsException(
          'Could not find root module for defined project.'
        );
      }

      const appModuleSource = getSourceFile(tree, rootModule);

      const themingModule = getModuleDeclaration(
        appModuleSource,
        'Ui5ThemingModule'
      );

      if (themingModule) {
        themingModule.getChildren(appModuleSource);
        const themingModuleDecl = themingModule.getFullText();
        const appModuleContent = tree.readText(rootModule).split(themingModuleDecl).join(`\nUi5ThemingModule.forRoot({defaultTheme: '${options.defaultTheme}'})`);
        tree.overwrite(rootModule, appModuleContent);
        context.logger.info('Found previous Ui5ThemingModule. Replaced with new one.');
        return;
      }

      const changes: Change[] = [];
      changes.push(
        ...addImportToModule(
          appModuleSource,
          rootModule,
          `Ui5ThemingModule.forRoot({defaultTheme: '${options.defaultTheme}'})`,
          '@ui5/theming-ngx'
        )
      );
      const exportRecorder = tree.beginUpdate(rootModule);

      for (const change of changes) {
        if (change instanceof InsertChange) {
          exportRecorder.insertLeft(change.pos, change.toAdd);
        }
      }

      tree.commitUpdate(exportRecorder);
    });
}

// Gets the ts source file from a path
export function getSourceFile(host: Tree, path: string): ts.SourceFile {
  const buffer = host.read(path);
  if (!buffer) {
    throw new SchematicsException(`Could not find file for path: ${path}`);
  }

  const text = buffer.toString('utf-8');

  return ts.createSourceFile(path, text, ts.ScriptTarget.Latest, true);
}

/**
 * Returns the RouterModule declaration from NgModule metadata, if any.
 */
function getModuleDeclaration(source: ts.SourceFile, module: string): ts.Expression | undefined {
  const result = getDecoratorMetadata(source, 'NgModule', '@angular/core');
  const node = result[0];
  if (!node || !ts.isObjectLiteralExpression(node)) {
    return undefined;
  }
  const matchingProperties = getMetadataField(node, 'imports');
  if (!matchingProperties) {
    return;
  }
  const assignment = matchingProperties[0] as any;
  if (assignment.initializer.kind !== ts.SyntaxKind.ArrayLiteralExpression) {
    return;
  }
  const arrLiteral = assignment.initializer;
  return arrLiteral.elements
    .filter((el: any) => el.kind === ts.SyntaxKind.CallExpression)
    .find((el: any) => el.getText().startsWith(module));
}
