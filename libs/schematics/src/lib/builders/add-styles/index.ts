import { callRule, Rule, SchematicsException } from '@angular-devkit/schematics';
import { getProjectBuildTarget, getProjectDefinition, updateProjectDefinition } from "../../utils/workspace";
import { AddStylesSchemaOptions } from "./schema";
import { CommonCssParts } from "./common-css-parts";
import { askChoices, askConfirmation } from "../../utils/prompt";
import { addDependencies } from "../add-dependencies";
import { NodeDependencyType } from "../../third_party/utility/dependencies";
import { firstValueFrom } from "rxjs";

async function askCommonCssDependency(): Promise<boolean> {
  return await askConfirmation('Would you like to add Common CSS into your application?', false);
}

async function askCommonCssParts(): Promise<string[]> {
  return (await askChoices('Please select desired Common CSS features', CommonCssParts, [])) || [];
}


export function addStyles(options: AddStylesSchemaOptions): Rule {
  return async (tree, schematicContext) => {
    const shouldInstallCommonCss = await askCommonCssDependency();
    if (!shouldInstallCommonCss) {
      return;
    }

    const addDependencyRule = addDependencies({
      project: options.project,
      dependencies: [{
        name: '@sap-ui/common-css',
        version: '^0.33.2',
        type: NodeDependencyType.Default
      }]
    });
    tree = await firstValueFrom(callRule(addDependencyRule, tree, schematicContext));
    const commonCssItems = await askCommonCssParts();

    const buildTarget = await getProjectBuildTarget(tree, options.project);
    const buildTargetOptions = buildTarget?.options;

    if (!buildTargetOptions) {
      throw new SchematicsException('Could not find build target options for defined project.');
    }

    let styles = (buildTargetOptions['styles'] || []) as (string | { input: string })[];

    styles = styles.filter(style => (typeof style === 'string' && !style.startsWith('node_modules/@sap-ui/common-css') ||
      typeof style !== 'string' && !style.input.startsWith('node_modules/@sap-ui/common-css')));

    commonCssItems.forEach((style) => {
      styles.push(`node_modules/@sap-ui/common-css/dist/${style}.css`);
    });

    buildTargetOptions['styles'] = styles;
    await updateProjectDefinition(tree, options.project, await getProjectDefinition(tree, options.project));
  };
}
