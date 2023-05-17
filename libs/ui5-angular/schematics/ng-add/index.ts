import {
  Rule,
  SchematicContext,
  Tree,
  chain,
  schematic
} from '@angular-devkit/schematics';
import { RunSchematicTask } from '@angular-devkit/schematics/tasks';
import { collectConfig } from '../get-config';
import { getI18nConfig } from '../get-i18n-config'
import { NgAddSchema } from './schema';

export function ngAdd(options: NgAddSchema): Rule {
  return async (_: Tree, context: SchematicContext) => {
    const userConfig = await collectConfig();
    const i18nConfig = await getI18nConfig();
    options = {...options, ...userConfig, ...i18nConfig};

    // First, queue dependency installation task.
    const dependenciesTaskId = context.addTask(new RunSchematicTask('add-dependencies', options));

    // Wait for dependencies to be installed and proceed with main schematics.
    context.addTask(new RunSchematicTask('proceed-with-schematics', options), [dependenciesTaskId]);

    return chain([]);
  };
}

export function proceedWithSchematics(options: NgAddSchema): Rule {
  return chain([
    schematic('add-styles', options),
    schematic('add-theming', options),
    schematic('add-i18n', options),
  ]);
}
