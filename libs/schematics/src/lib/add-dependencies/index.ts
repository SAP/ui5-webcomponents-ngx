import { Rule } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import {
  addPackageJsonDependency,
  getPackageJsonDependency,
  NodeDependency
} from "@schematics/angular/utility/dependencies";
import { satisfies } from "semver";
import { askConfirmation } from "@angular/cli/src/utilities/prompt";

export function addDependencies(dependencies: NodeDependency[]): Rule {
  return async (tree, context) => {
    const mismatchedDependencies: Record<string, [string, string]> = {};
    dependencies.forEach(dep => {
      const currentDep = getPackageJsonDependency(tree, dep.name);
      const currentVersion = currentDep?.version;
      if (!currentVersion) {
        mismatchedDependencies[dep.name] = ['None', dep.version];
        return;
      }
      if (!satisfies(currentVersion, dep.version)) {
        mismatchedDependencies[dep.name] = [currentVersion, dep.version];
      }
    });
    if (Object.keys(mismatchedDependencies).length > 0) {
      context.logger.warn(
        `The following dependencies are not matching the expected version:`
      );
      Object.keys(mismatchedDependencies).forEach(dep => {
        context.logger.warn(
          `${dep}: ${mismatchedDependencies[dep][0]} (current) != ${mismatchedDependencies[dep][1]} (expected)`
        );
      });
      const updateDeps = await askConfirmation("Do you want to update the versions to match the required ones?", true);
      if (updateDeps) {
        dependencies.forEach(dep => {
          addPackageJsonDependency(tree, dep);
        });
      }
      context.addTask(new NodePackageInstallTask());
    }
  };
}
