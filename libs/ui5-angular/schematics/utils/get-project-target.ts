import { ProjectDefinition, TargetDefinition } from "@schematics/angular/utility";
import { SchematicsException } from "@angular-devkit/schematics";

export function getProjectTarget(projectDefinition: ProjectDefinition, targetName: string, projectName?: string): TargetDefinition {
  const target = projectDefinition.targets.get(targetName)
  if (!target) {
    throw new SchematicsException(`Target ${targetName} not found in project ${projectName || ''}`);
  }
  return target;
}
