import {
  Rule,
  chain,
  schematic
} from '@angular-devkit/schematics';

import { AvailableThemes, CommonCssParts } from "./config";
import { Schema } from "./schema";
import { askQuestion } from './utils/promt';

export async function collectConfig(): Promise<Partial<Schema>> {
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
