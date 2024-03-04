import { chain, externalSchematic, Rule, schematic, Tree } from '@angular-devkit/schematics';
import { NodeDependencyType } from "@schematics/angular/utility/dependencies";
import { projectPackageJson } from "../project-package-json";
import { NgAddSchemaOptions } from "./schema";
import { dirname, join, relative } from 'path';

const peerDependencies = projectPackageJson.peerDependencies;

export function ngAdd(options: NgAddSchemaOptions): Rule {
  return async () => {
    const dependencies = Object.keys(peerDependencies).map((packageName) => ({
      name: packageName,
      version: peerDependencies[packageName],
      type: NodeDependencyType.Default
    }));
    dependencies.push({
      name: 'ng-packagr',
      version: '>=15.0.0 && <18.0.0',
      type: NodeDependencyType.Dev,
    })
    return chain([
      externalSchematic('@ui5/webcomponents-ngx-schematics', 'add-dependencies', {
        project: options.project,
        dependencies
      }),
      externalSchematic('@ui5/webcomponents-ngx-schematics', 'add-styles', { project: options.project }),
      externalSchematic('@ui5/webcomponents-ngx-schematics', 'add-theming', { project: options.project }),
      schematic('add-i18n', { project: options.project }),
      (tree: Tree) => {
        const absPathToSync = join(__dirname, '..', '..', 'sync.js');
        const pkgJson = join(__dirname, '..', '..', '..', '..', '..', 'package.json').replace(process.cwd(), '.');
        const relativePathToSyncFromPackageJson = relative((dirname(pkgJson)), absPathToSync);
        const packageJson = tree.readJson(pkgJson) as any;
        packageJson.scripts = packageJson.scripts || {};
        packageJson.scripts.postinstall = `${packageJson.scripts.postinstall ? `${packageJson.scripts.postinstall} && ` : ''}node ${relativePathToSyncFromPackageJson}`;
        tree.overwrite('package.json', JSON.stringify(packageJson, null, 2));
      }
    ]);
  };
}
