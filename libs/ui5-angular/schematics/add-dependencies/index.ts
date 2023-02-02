import { updateWorkspace } from '@schematics/angular/utility/workspace';
import { Rule } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { Schema } from '../schema';
import { addPackageToPackageJson, getPackageVersionFromPackageJson } from '../utils/package-config';

export function addDependencies(options: Schema): Rule {
  return (tree, context) => updateWorkspace(async () => {

    if (!options.theming && options.commonCss.length === 0) {
      return;
    }

    if (options.commonCss.length && !getPackageVersionFromPackageJson(tree, '@fundamental-styles/common-css')) {
      addPackageToPackageJson(tree, '@fundamental-styles/common-css', 'latest');
    }

    // TODO: Change n1xus-ui5-theming-ngx to @ui5/theming-ngx when it becomes available
    if (options.theming && !getPackageVersionFromPackageJson(tree, 'n1xus-ui5-theming-ngx')) {
      addPackageToPackageJson(tree, 'n1xus-ui5-theming-ngx', 'latest');
    }

    context.addTask(new NodePackageInstallTask());
  });
}
