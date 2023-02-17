import { updateWorkspace } from '@schematics/angular/utility/workspace';
import { Rule, SchematicsException } from '@angular-devkit/schematics';
import { Schema } from '../schema';

export function addStyles(options: Schema): Rule {
  return () => updateWorkspace(async (workspace) => {

    const currentWorkspace = workspace.projects.get(options.project);

    if (!currentWorkspace) {
      throw new SchematicsException('Project with such name not found.');
    }

    const buildTargetOptions = currentWorkspace.targets.get('build')?.options;

    if (!buildTargetOptions) {
      throw new SchematicsException('Could not find build target options for defined project.');
    }

    let styles = buildTargetOptions['styles'] as (string | { input: string })[];

    styles = styles.filter(style => (typeof style === 'string' && !style.startsWith('node_modules/@fundamental-styles/common-css') ||
    typeof style !== 'string' && !style.input.startsWith('node_modules/@fundamental-styles/common-css')));

    options.commonCss.forEach((style) => {
      styles.push(`node_modules/@fundamental-styles/common-css/dist/${style}.css`);
    });

    buildTargetOptions['styles'] = styles;
  });
}
