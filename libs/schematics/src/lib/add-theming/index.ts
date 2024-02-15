import { updateWorkspace } from '@schematics/angular/utility/workspace';
import { Change, InsertChange } from '@schematics/angular/utility/change';
import { Rule } from '@angular-devkit/schematics';
import { Ui5WebcomponentsNgxSchematicsSchema } from '../ui5WebcomponentsNgxSchematicsSchema';
import { addThemingModule } from './add-theming-module';
import { getProjectDefinition } from "../utils/get-project-definition";

export function addTheming(options: Ui5WebcomponentsNgxSchematicsSchema): Rule {
  return (tree, context) =>
    updateWorkspace(async (workspace) => {
      if (!options.theming) {
        return;
      }

      const projectDefinition = getProjectDefinition(workspace, options.project);

      const update: { changes: Change[], file: string } = addThemingModule(tree, projectDefinition, context, options);
      const exportRecorder = tree.beginUpdate(update.file);

      for (const change of update.changes) {
        if (change instanceof InsertChange) {
          exportRecorder.insertLeft(change.pos, change.toAdd);
        }
      }

      tree.commitUpdate(exportRecorder);
    });
}

