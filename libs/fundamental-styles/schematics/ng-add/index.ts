import { chain, Rule } from '@angular-devkit/schematics';
import { addDependencies, addStyles, addTheming, Ui5WebcomponentsNgxSchematicsSchema, collectConfig } from "@ui5/webcomponents-ngx-schematics";
import packageJson from '../../package.json';
import { NodeDependency, NodeDependencyType } from "@schematics/angular/utility/dependencies";

export function ngAdd(options: Ui5WebcomponentsNgxSchematicsSchema): Rule {
  return async () => {
    const userConfig = await collectConfig();
    options = { ...options, ...userConfig };
    const dependencies: NodeDependency[] = Object.keys(packageJson.peerDependencies).map(
      (packageName) => ({
        name: packageName,
        version: packageJson.peerDependencies[packageName],
        type: NodeDependencyType.Default
      }),
      []
    );

    return chain([
      addDependencies(dependencies),
      addStyles(options),
      addTheming(options)
    ]);
  };
}
