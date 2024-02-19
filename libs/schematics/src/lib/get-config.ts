import { AvailableThemes, CommonCssParts } from "./config";
import { Ui5WebcomponentsNgxSchematicsSchema } from "./ui5WebcomponentsNgxSchematicsSchema";
import { askChoices, askConfirmation, askQuestion } from "@angular/cli/src/utilities/prompt";

export async function collectConfig(): Promise<Partial<Ui5WebcomponentsNgxSchematicsSchema>> {
  const schema: Partial<Ui5WebcomponentsNgxSchematicsSchema> = {
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
  return await askConfirmation('Would you like to add Common CSS into your application?', false);
}

async function askCommonCssParts(): Promise<string[]> {
  return (await askChoices('Please select desired Common CSS features', CommonCssParts, [])) || [];
}

async function askThemingDependency(): Promise<boolean> {
  return await askConfirmation('Would you like to add Theming capabilities into your application?', true);
}

async function askDefaultTheme(): Promise<string> {
  return await askQuestion('Please select desired Common CSS features', AvailableThemes, 0, 'sap_horizon') || 'sap_horizon';
}
