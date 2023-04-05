import {updateWorkspace} from '@schematics/angular/utility/workspace';
import {Rule} from '@angular-devkit/schematics';
import {NodePackageInstallTask} from '@angular-devkit/schematics/tasks';
import {Schema} from '../schema';
import {addPackageToPackageJson, getPackageVersionFromPackageJson} from '../utils/package-config';
import packageJson from "../../package.json";

const commonCssPackageName = '@fundamental-styles/common-css';
const themingNgxPackageName = '@ui5/theming-ngx';

export function addDependencies(options: Schema): Rule {
  return (tree, context) => updateWorkspace(async () => {

    if (!options.theming && options.commonCss.length === 0) {
      return;
    }

    if (options.commonCss.length && !getPackageVersionFromPackageJson(tree, commonCssPackageName)) {
      addPackageToPackageJson(tree, commonCssPackageName, 'latest');
    }

    if (options.theming && !getPackageVersionFromPackageJson(tree, themingNgxPackageName)) {
      addPackageToPackageJson(tree, themingNgxPackageName, packageJson.version);
    }

    const peerDependencies = Object.keys(packageJson.peerDependencies as Record<string, string>).map((peerDependency: string): [string, string] => ([peerDependency, packageJson.peerDependencies[peerDependency]]));

    for (const [peerDependency, version] of peerDependencies) {
      if (!getPackageVersionFromPackageJson(tree, peerDependency)) {
        addPackageToPackageJson(tree, peerDependency, version);
      }
    }

    context.addTask(new NodePackageInstallTask());
  });
}
