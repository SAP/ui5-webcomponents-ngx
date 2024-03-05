import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from "@angular-devkit/schematics/tasks";
import { updateWorkspace } from "@schematics/angular/utility/workspace";
import semver from "semver";
import { projectPackageJson } from "../../project-package-json";

const peerDependencies = projectPackageJson.peerDependencies;

export default function (): Rule {
  return (tree: Tree, context: SchematicContext) => updateWorkspace(async () => {
    const packageJsonContent = tree.read('package.json');
    if (!packageJsonContent) {
      throw new Error('Could not find package.json');
    }
    const packageJson = JSON.parse(packageJsonContent.toString('utf8'));
    const ui5Dependencies = Object.keys(peerDependencies as Record<string, string>)
      .filter(packageName => packageName.startsWith('@ui5/'))
      .map((peerDependency: string): [string, string] => ([peerDependency, peerDependencies[peerDependency]]));
    for (const [peerDependency, version] of ui5Dependencies) {
      const existingDependency = packageJson.dependencies[peerDependency];
      if (!existingDependency || !semver.satisfies(existingDependency, version)) {
        packageJson.dependencies[peerDependency] = version;
      }
    }
    tree.overwrite('package.json', JSON.stringify(packageJson, null, 2));
    context.logger.info('✅️ Updated @ui5/* dependencies in package.json');
    context.addTask(new NodePackageInstallTask());
  });
}
