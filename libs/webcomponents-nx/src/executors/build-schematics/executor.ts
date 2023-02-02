import { ExecutorContext, logger, ProjectConfiguration } from '@nrwl/devkit';
import { copySync, pathExistsSync } from 'fs-extra';
import { exec } from 'child_process';

export interface SchematicsOptions {
  collection: string;
  tsConfig: string;
}

export interface PrepareOptions {
  schematics?: SchematicsOptions;
  packageJsonPath?: string;
  versionsOverrides?: {
    projectVersion?: string;
  };
  distPath: string;
}

export default async function runExecutor(
  options: PrepareOptions,
  context: ExecutorContext
) {
  console.log(options);
  const projectConfig: ProjectConfiguration =
    context.workspace.projects[context.projectName as string];
  await copySchematics(
    options,
    projectConfig,
    context.projectName as string
  );
  console.log('Executor ran for BuildSchematics', options);
  return {
    success: true,
  };
}

export async function copySchematics(
  targetOptions: PrepareOptions,
  projectConfig: ProjectConfiguration,
  projectName?: string
): Promise<void> {
  logger.info(`=== Copying schematics of ${projectName} ===`);
  if (!projectName) {
    projectName = projectConfig.name;
  }
  const { distPath } = targetOptions;

  const { tsConfig, collection } =
    targetOptions.schematics as SchematicsOptions;
  const rootFolder = projectConfig.root;
  const tsConfigPath = `${rootFolder}/${tsConfig}`;
  const schematicsPath = `${rootFolder}/${collection}`;
  if (pathExistsSync(schematicsPath) && pathExistsSync(tsConfigPath)) {
    await runTsc(tsConfigPath);
    copySync(schematicsPath, `${distPath}/schematics`);
    logger.info(`✅ Copied schematics for project ${projectName}`);
  } else {
    throw new Error(`No schematics found for project ${projectName}`);
  }
}

const runTsc = async (tsConfigPath: string) => {
  return new Promise((resolve, reject) => {
    const process = exec(`tsc -p ${tsConfigPath}`);
    process.stdout?.on('data', (data) => {
      logger.info(data);
    });
    process.stderr?.on('data', (data) => {
      logger.error(data);
    });
    process.on('close', (code) => {
      if (code === 0) {
        resolve(0);
      } else {
        reject(new Error(`tsc exited with code ${code}`));
      }
    });
  });
};
