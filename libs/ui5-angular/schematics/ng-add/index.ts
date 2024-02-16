import { chain, Rule } from '@angular-devkit/schematics';
import { getI18nConfig } from '../get-i18n-config'
import { NgAddSchema } from './schema';
import { addDependencies, addStyles, addTheming, collectConfig } from "@ui5/webcomponents-ngx-schematics";
import { addI18n } from '../add-i18n/index';
import { NodeDependencyType } from "@schematics/angular/utility/dependencies";
import { projectPackageJson } from "../project-package-json";

const peerDependencies = projectPackageJson.peerDependencies;

export function ngAdd(options: NgAddSchema): Rule {
  return async () => {
    const userConfig = await collectConfig();
    const i18nConfig = await getI18nConfig();
    options = { ...options, ...userConfig, ...i18nConfig };

    return chain([
      addDependencies(Object.keys(peerDependencies).map((packageName) => ({
        name: packageName,
        version: peerDependencies[packageName],
        type: NodeDependencyType.Default
      }))),
      addStyles(options),
      addTheming(options),
      addI18n(options)
    ]);
  };
}
