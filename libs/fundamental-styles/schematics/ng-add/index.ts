/* eslint-disable */
import { chain, externalSchematic, Rule, Tree } from '@angular-devkit/schematics';
import { NodeDependency, NodeDependencyType } from "@schematics/angular/utility/dependencies";
import { projectPackageJson } from '../project-package-json';
import { NgAddSchemaOptions } from "./schema";

export function ngAdd(options: NgAddSchemaOptions): Rule {
  return async () => {
    const dependencies: NodeDependency[] = Object.keys(projectPackageJson.peerDependencies).map(
      (packageName) => ({
        name: packageName,
        version: projectPackageJson.peerDependencies[packageName],
        type: NodeDependencyType.Default
      }),
      []
    );

    return chain([
      externalSchematic('@ui5/webcomponents-ngx-schematics', 'add-dependencies', {
        project: options.project,
        dependencies
      }),
      externalSchematic('@ui5/webcomponents-ngx-schematics', 'add-styles', { project: options.project }),
      externalSchematic('@ui5/webcomponents-ngx-schematics', 'add-theming', { project: options.project }),
      (tree: Tree) => {
        const packageJson = tree.readJson('package.json') as any;
        packageJson.scripts = packageJson.scripts || {};
        packageJson.scripts.postinstall = `${packageJson.scripts.postinstall ? `${packageJson.scripts.postinstall} && ` : ''}node node_modules/@fundamental-styles/theming-ngx/sync.js`;
        tree.overwrite('package.json', JSON.stringify(packageJson, null, 2));
      }
    ]);
  };
}
