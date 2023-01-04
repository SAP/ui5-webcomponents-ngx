import {ExecutorContext} from "nx/src/config/misc-interfaces";
import generateComponents from "../../generators/sync";
import {flushChanges, FsTree, printChanges} from "nx/src/generators/tree";
import {workspaceRoot} from "nx/src/utils/app-root";

export default async function (
  schema: { configFile: string },
  executorContext: ExecutorContext
): Promise<{ success: boolean }> {
  const {default: wrapperConfig} = await import(schema.configFile);
  const host = new FsTree(workspaceRoot, executorContext.isVerbose);
  const task = await generateComponents(host, {...wrapperConfig, project: executorContext.projectName});
  const changes = host.listChanges();
  printChanges(changes);

  flushChanges(workspaceRoot, changes);
  if (task) {
    await task();
  }
  return {success: true};
}
