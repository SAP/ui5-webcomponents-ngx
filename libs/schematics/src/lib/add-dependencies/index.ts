import { Rule } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { addPackageJsonDependency, NodeDependency } from "@schematics/angular/utility/dependencies";

export function addDependencies(dependencies: NodeDependency[]): Rule {
  return (tree, context) => {
    dependencies.forEach(dep => {
      addPackageJsonDependency(tree, dep)
    });

    context.addTask(new NodePackageInstallTask());
  };
}
