import { updateWorkspace } from '@schematics/angular/utility/workspace';
import { Rule } from '@angular-devkit/schematics';
import { Ui5WebcomponentsNgxSchematicsSchema } from '../ui5WebcomponentsNgxSchematicsSchema';
import { addThemingModule } from './add-theming-module';

export function addTheming(options: Ui5WebcomponentsNgxSchematicsSchema): Rule {
  return async (tree, context) =>
    updateWorkspace(async () => {
      if (!options.theming) {
        return;
      }
      await addThemingModule(tree, context, options);
    });
}

