import { Rule, SchematicsException } from '@angular-devkit/schematics';
import { Ui5WebcomponentsNgxSchematicsSchema } from '../ui5WebcomponentsNgxSchematicsSchema';
import {
  getProjectBuildTarget,
  getProjectDefinition,
  updateProjectDefinition
} from "../utils/workspace";

export function addStyles(options: Ui5WebcomponentsNgxSchematicsSchema): Rule {
  return async (tree) => {
    const buildTarget = await getProjectBuildTarget(tree, options.project);
    const buildTargetOptions = buildTarget?.options;

    if (!buildTargetOptions) {
      throw new SchematicsException('Could not find build target options for defined project.');
    }

    let styles = (buildTargetOptions['styles'] || []) as (string | { input: string })[];

    styles = styles.filter(style => (typeof style === 'string' && !style.startsWith('node_modules/@fundamental-styles/common-css') ||
      typeof style !== 'string' && !style.input.startsWith('node_modules/@fundamental-styles/common-css')));

    options.commonCss.forEach((style) => {
      styles.push(`node_modules/@fundamental-styles/common-css/dist/${style}.css`);
    });

    buildTargetOptions['styles'] = styles;
    await updateProjectDefinition(tree, options.project, await getProjectDefinition(tree, options.project));
  };
}
