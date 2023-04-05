import {
  Rule,
  SchematicContext,
  Tree,
  chain,
  schematic
} from '@angular-devkit/schematics';
import { RunSchematicTask } from '@angular-devkit/schematics/tasks';
import { collectConfig } from '../get-config';
import { Schema } from '../schema';

export function ngAdd(options: Schema): Rule {
  return async (_: Tree, context: SchematicContext) => {
    const userConfig = await collectConfig();
    options = { ...options, ...userConfig };

    // First, queue dependency installation task.
    const dependenciesTaskId = context.addTask(new RunSchematicTask('add-dependencies', options));

    // Wait for dependencies to be installed and proceed with main schematics.
    context.addTask(new RunSchematicTask('proceed-with-schematics', options), [dependenciesTaskId]);

    return chain([]);
  };
}

export function proceedWithSchematics(options: Schema): Rule {
  return chain([
      schematic('add-styles', options),
      schematic('add-theming', options)
  ]);
}
