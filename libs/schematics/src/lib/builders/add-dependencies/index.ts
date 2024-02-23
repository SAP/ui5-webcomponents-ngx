import { Rule } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { addPackageJsonDependency, NodeDependency } from "../../third_party/utility/dependencies";
import { satisfies } from "semver";
import { askConfirmation } from "../../utils/prompt";
import { AddDependenciesSchematicOptions } from "./schema";
import { firstValueFrom } from "rxjs";
import { currentlyInstalledPackageVersion } from "./currently-installed-pkg-version";

export function addDependencies(options: AddDependenciesSchematicOptions): Rule {
  return async (tree, context) => {
    const mismatchedDependencies: Record<string, [string, NodeDependency]> = {};
    options.dependencies.forEach(dep => {
      const currentVersion = currentlyInstalledPackageVersion(dep.name);
      if (!currentVersion) {
        mismatchedDependencies[dep.name] = ['None', dep];
        return;
      }
      if (!satisfies(currentVersion, dep.version)) {
        mismatchedDependencies[dep.name] = [currentVersion, dep];
      }
    });
    if (Object.keys(mismatchedDependencies).length > 0) {
      context.logger.warn(
        `The following dependencies are not matching the expected version:`
      );
      Object.keys(mismatchedDependencies).forEach(dep => {
        context.logger.warn(
          `${dep}: ${mismatchedDependencies[dep][0]} (current) != ${mismatchedDependencies[dep][1].version} (expected)`
        );
      });
      const updateDeps = await askConfirmation("Do you want to update the versions to match the required ones?", true);
      if (updateDeps) {
        Object.values(mismatchedDependencies).forEach(([, dep]) => {
          addPackageJsonDependency(tree, { ...dep, overwrite: true });
        });
      }
      context.addTask(new NodePackageInstallTask());
      await firstValueFrom(context.engine.executePostTasks());
    }
  };
}
