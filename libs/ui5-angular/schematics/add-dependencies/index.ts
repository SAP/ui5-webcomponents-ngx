import {updateWorkspace} from '@schematics/angular/utility/workspace';
import {Rule} from '@angular-devkit/schematics';
import {NodePackageInstallTask} from '@angular-devkit/schematics/tasks';
import {Schema} from '../schema';
import {addPackageToPackageJson, getPackageVersionFromPackageJson} from '../utils/package-config';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore is needed because the package.json is not available at build time
import packageJson from "../../package.json";

const commonCssPackageName = '@sap-ui/common-css';
const themingNgxPackageName = '@ui5/theming-ngx';

export function addDependencies(options: Schema): Rule {
  return (tree, context) => updateWorkspace(async () => {
    if (options.commonCss.length && !getPackageVersionFromPackageJson(tree, commonCssPackageName)) {
      addPackageToPackageJson(tree, commonCssPackageName, 'latest');
    }

    if (!getPackageVersionFromPackageJson(tree, themingNgxPackageName)) {
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
