import { AvailableThemes, CommonCssParts } from "./config";
import { Schema } from "./schema";
import { askQuestion } from './utils/promt';

export async function collectConfig(): Promise<Partial<Schema>> {
  const schema: Partial<Schema> = {
    commonCss: [],
    theming: true,
    defaultTheme: 'sap_horizon'
  };

  const includeCommonCss = await askCommonCssDependency();

  if (includeCommonCss) {
    schema.commonCss = await askCommonCssParts();
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

