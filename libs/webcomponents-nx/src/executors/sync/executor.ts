import {ExecutorContext} from "nx/src/config/misc-interfaces";
import generateComponents from "../../generators/sync";
import {flushChanges, FsTree, printChanges} from "nx/src/generators/tree";
import {workspaceRoot} from "nx/src/utils/app-root";

export default async function (
  schema: { configFile?: string, configFiles?: string[] },
  executorContext: ExecutorContext
): Promise<{ success: boolean }> {
  if (!schema.configFile && !schema.configFiles) {
    throw new Error('No config file specified');
  }
  const host = new FsTree(workspaceRoot, executorContext.isVerbose);
  const configFiles = schema.configFile ? [schema.configFile] : schema.configFiles;
  const tasks = [];
  for (const configFile of configFiles) {
    const {default: wrapperConfig} = await import(configFile);
    tasks.push(await generateComponents(host, {...wrapperConfig, project: executorContext.projectName}));
  }
  const changes = host.listChanges();
  printChanges(changes);

  flushChanges(workspaceRoot, changes);
  if (tasks.length > 0) {
    for (const task of tasks) {
      await task();
    }
  }
  return {success: true};
}
