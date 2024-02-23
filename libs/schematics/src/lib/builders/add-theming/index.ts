import { Rule } from '@angular-devkit/schematics';
import { addRootImport } from "../../third_party";
import { AddThemingSchematicOptions } from "./schema";
import { AvailableThemes } from './available-themes';
import { askConfirmation, askQuestion } from "../../utils/prompt";

async function askThemingDependency(): Promise<boolean> {
  return await askConfirmation('Would you like to add Theming capabilities into your application?', true);
}

async function askDefaultTheme(): Promise<string> {
  return await askQuestion('Please select desired Common CSS features', AvailableThemes, 0, 'sap_horizon') || 'sap_horizon';
}

export function addTheming(options: AddThemingSchematicOptions): Rule {
  return async () => {
    const shouldAddTheming = await askThemingDependency();
    if (!shouldAddTheming) {
      return;
    }
    const defaultTheme = await askDefaultTheme();
    return addRootImport(options.project, ({ code, external }) => {
      return code`${external('Ui5ThemingModule', '@ui5/theming-ngx')}.forRoot({defaultTheme: '${defaultTheme}'})`;
    })
  }
}

export { AvailableThemes } from "./available-themes";
