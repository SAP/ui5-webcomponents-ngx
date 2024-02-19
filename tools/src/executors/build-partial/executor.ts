import { BuildPartialExecutorSchema } from './schema';
import { ExecutorContext } from "@nx/devkit";
import { sync as fastGlobSync } from 'fast-glob';
import { cpSync, writeFileSync, mkdirSync, existsSync, rmSync, readFileSync } from "fs";
import { dirname } from "path";
const lernaJson = JSON.parse(readFileSync('lerna.json', 'utf-8'));

const version = lernaJson.version;

const replacementVersions = {
  VERSION_PLACEHOLDER: version,
}

export default async function runExecutor(options: BuildPartialExecutorSchema, executorContext: ExecutorContext) {
  const projectRoot = executorContext.projectsConfigurations.projects[executorContext.projectName].root;
  const files = fastGlobSync(options.includedFiles, { ignore: options.excludedFiles || [] });
  rmSync(options.distPath, { recursive: true, force: true });
  files.forEach(file => {
    const newDest = file.replace(projectRoot, options.distPath);
    const newDestDir = dirname(newDest);
    if (!existsSync(newDestDir)) {
      mkdirSync(newDestDir, { recursive: true });
    }
    const fileContent = readFileSync(file, 'utf-8');
    const newFileContent = Object.keys(replacementVersions).reduce((acc, key) => {
      return acc.replace(new RegExp(key, 'g'), replacementVersions[key]);
    }, fileContent);
    writeFileSync(newDest, newFileContent);
  });
  return {
    success: true,
  };
}
