import {PrepareOptions} from "./prepareOptions";
import {logger, ProjectConfiguration} from "@nrwl/devkit";
import {SchematicsOptions} from "./schematicsOptions";
import {exec} from "child_process";
import {copySync, pathExistsSync, readFileSync, writeFileSync} from "fs-extra";

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

export async function copySchematics(
  targetOptions: PrepareOptions,
  projectConfig: ProjectConfiguration,
  projectName?: string
): Promise<void> {
  logger.info(`=== Copying schematics of ${projectName} ===`);
  if (!projectName) {
    projectName = projectConfig.name;
  }
  const {distPath} = targetOptions;

  const {tsConfig, collection} =
    targetOptions.schematics as SchematicsOptions;
  const rootFolder = projectConfig.root;
  const tsConfigPath = `${rootFolder}/${tsConfig}`;
  const schematicsPath = `${rootFolder}/${collection}`;

  if (targetOptions.schematics?.defaultSchematics) {
    copySync(targetOptions.schematics.defaultSchematics, schematicsPath);
  }

  if (pathExistsSync(schematicsPath) && pathExistsSync(tsConfigPath)) {
    // Doing this, because tsc will overwrite the package.json with the one from the source folder
    const existingPackageJson = readFileSync(`${distPath}/package.json`, {encoding: 'utf-8'});
    await runTsc(tsConfigPath);
    copySync(schematicsPath, `${distPath}/schematics`, {
      filter: (src) => !src.endsWith('.ts')
    });
    writeFileSync(`${distPath}/package.json`, existingPackageJson);
    logger.info(`✅ Copied schematics for project ${projectName}`);
  } else {
    throw new Error(`No schematics found for project ${projectName}`);
  }
}
