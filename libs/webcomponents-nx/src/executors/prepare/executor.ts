import { ExecutorContext, ProjectConfiguration } from '@nx/devkit';
import { execSync } from 'child_process';
import { PrepareOptions } from './prepareOptions';
import { copySchematics } from './copySchematics';
import { interpolate } from "nx/src/tasks-runner/utils";

export default async function (
  options: PrepareOptions,
  context: ExecutorContext
): Promise<{ success: boolean }> {
  const projectConfig: ProjectConfiguration = context.projectsConfigurations.projects[context.projectName as string];
  if (options.schematics) {
    await copySchematics(options, projectConfig, context.projectName as string);
  }
  const outputPath =
    interpolate(context.projectsConfigurations.projects[context.projectName].targets.build.outputs[0], {
      projectRoot: projectConfig.root,
      projectName: projectConfig.name,
      project: projectConfig,
      options: { ...options }
    });
  execSync('npm pack', {
    cwd: outputPath,
    stdio: 'inherit',
  });
  return { success: true };
}
