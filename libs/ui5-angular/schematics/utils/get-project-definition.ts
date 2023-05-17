import { ProjectDefinition, WorkspaceDefinition } from "@schematics/angular/utility";
import { SchematicsException } from "@angular-devkit/schematics";

export function getProjectDefinition(workspace: WorkspaceDefinition, projectName: string): ProjectDefinition {
  const projectDefinition = workspace.projects.get(projectName);

  if (!projectDefinition) {
    throw new SchematicsException('Project with such name not found.');
  }
  return projectDefinition;
}
