import {
  Rule,
  SchematicContext,
  Tree,
  chain,
  schematic
} from '@angular-devkit/schematics';
import { RunSchematicTask } from '@angular-devkit/schematics/tasks';
import { Schema } from '../schema';
import { askQuestion } from '../utils/promt';
import { AvailableThemes } from './available-themes';
import { CommonCssParts } from './common-css-parts';

export function ngAdd(options: Schema): Rule {
  return async (_: Tree, context: SchematicContext) => {
    const userConfig = await collectConfig();
    options = { ...options, ...userConfig };

    console.log(options);
    // First, queue dependency installation task.
    const dependenciesTaskId = context.addTask(new RunSchematicTask('add-dependencies', options));

    // Wait for dependencies to be installed and proceed with main schematics.
    context.addTask(new RunSchematicTask('proceed-with-schematics', options), [dependenciesTaskId]);

    return chain([]);

    // return tree;
  };
}

async function collectConfig(): Promise<Partial<Schema>> {
  const schema: Partial<Schema> = {
    commonCss: [],
    defaultTheme: 'sap_horizon'
  };

  const includeCommonCss = await askCommonCssDependency();

  if (includeCommonCss) {
    schema.commonCss = await askCommonCssParts();
  }

  schema.theming = await askThemingDependency();

  if (schema.theming) {
    schema.defaultTheme = await askDefaultTheme();
  }

  return schema;
}

async function askCommonCssDependency(): Promise<boolean> {
  return await askQuestion({
    type: 'confirm',
    message: 'Would you like to add Common CSS into your application?',
    default: false,
  });
}

async function askCommonCssParts(): Promise<string[]> {
  return await askQuestion({
    type: 'checkbox',
    message: 'Please select desired Common CSS features',
    choices: CommonCssParts,
  });
}

async function askThemingDependency(): Promise<boolean> {
  return await askQuestion({
    type: 'confirm',
    message:
      'Would you like to add Theming capabilities into your application?',
    default: true,
  });
}

async function askDefaultTheme(): Promise<string> {
  return await askQuestion({
    type: 'list',
    message: 'Please select desired Common CSS features',
    default: 'sap_horizon',
    choices: AvailableThemes,
  });
}

export function proceedWithSchematics(options: Schema): Rule {
    return chain([
        schematic('add-styles', options),
        schematic('add-theming', options)
    ]);
}
