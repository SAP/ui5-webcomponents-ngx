import { chain, externalSchematic, Rule, schematic, Tree } from '@angular-devkit/schematics';
import { NodeDependencyType } from "@schematics/angular/utility/dependencies";
import { projectPackageJson } from "../project-package-json";
import { NgAddSchemaOptions } from "./schema";

const peerDependencies = projectPackageJson.peerDependencies;

export function ngAdd(options: NgAddSchemaOptions): Rule {
  return async () => {
    const dependencies = Object.keys(peerDependencies).map((packageName) => ({
      name: packageName,
      version: peerDependencies[packageName],
      type: NodeDependencyType.Default
    }));
    return chain([
      externalSchematic('@ui5/webcomponents-ngx-schematics', 'add-dependencies', {
        project: options.project,
        dependencies
      }),
      externalSchematic('@ui5/webcomponents-ngx-schematics', 'add-styles', { project: options.project }),
      externalSchematic('@ui5/webcomponents-ngx-schematics', 'add-theming', { project: options.project }),
      schematic('add-i18n', { project: options.project }),
      (tree: Tree) => {
        const packageJson = tree.readJson('package.json') as any;
        packageJson.scripts.postinstall = `${packageJson.scripts.postinstall ? `${packageJson.scripts.postinstall} && ` : ''}node @ui5/webcomponents-ngx/postinstall.js`;
      }
    ]);
  };
}
