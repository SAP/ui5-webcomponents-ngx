import {updateWorkspace} from '@schematics/angular/utility/workspace';
import {Change, InsertChange} from '@schematics/angular/utility/change';
import {Rule, SchematicsException} from '@angular-devkit/schematics';
import {Schema} from '../schema';
import {addThemingModule} from './add-theming-module';

export function addTheming(options: Schema): Rule {
  return (tree, context) =>
    updateWorkspace(async (workspace) => {
      if (!options.theming) {
        return;
      }

      const currentWorkspace = workspace.projects.get(options.project);

      if (!currentWorkspace) {
        throw new SchematicsException('Project with such name not found.');
      }

      const buildTargetOptions = currentWorkspace.targets.get('build')?.options;

      if (!buildTargetOptions) {
        throw new SchematicsException(
          'Could not find build target options for defined project.'
        );
      }

      const update: { changes: Change[], file: string } = addThemingModule(tree, currentWorkspace, context, options);
      const exportRecorder = tree.beginUpdate(update.file);

      for (const change of update.changes) {
        if (change instanceof InsertChange) {
          exportRecorder.insertLeft(change.pos, change.toAdd);
        }
      }

      tree.commitUpdate(exportRecorder);
    });
}

