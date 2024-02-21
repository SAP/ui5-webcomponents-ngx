import { Rule } from '@angular-devkit/schematics';
import { Ui5WebcomponentsNgxSchematicsSchema } from '../../ui5WebcomponentsNgxSchematicsSchema';
import { addRootImport } from "../../third_party";

export function addTheming(options: Ui5WebcomponentsNgxSchematicsSchema): Rule {
  return async () => {
    if (!options.theming) {
      return;
    }
    return addRootImport(options.project, ({code, external}) => {
      return code`${external('Ui5ThemingModule', '@ui5/theming-ngx')}.forRoot({defaultTheme: '${options.defaultTheme}'})`;
    })
  }
}

