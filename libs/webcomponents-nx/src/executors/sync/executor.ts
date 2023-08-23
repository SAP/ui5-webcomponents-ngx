import { ExecutorContext } from "nx/src/config/misc-interfaces";
import { flushChanges, FsTree, printChanges } from "nx/src/generators/tree";
import { workspaceRoot } from "nx/src/utils/app-root";
import { formatFiles, readProjectConfiguration, Tree } from "@nx/devkit";
import { fsCommit, NxFsImplementation } from "@ui5/webcomponents-wrapper-fs-commit";
import { FileSystemInterface, wrapper, WrapperConfig } from "@ui5/webcomponents-wrapper";

type NxWrapperConfig<T> = Omit<WrapperConfig<T>, 'commit'>;

export type Ui5NxWrapperConfig<T = unknown> = NxWrapperConfig<T> | ((fs: FileSystemInterface) => NxWrapperConfig<T>);

const generateComponents = async (tree: Tree, options: { wrapperConfig: Ui5NxWrapperConfig; project: string }) => {
  const fsAdapter = new NxFsImplementation(tree);
  const projectConfiguration = readProjectConfiguration(tree, options.project);
  const basePath = projectConfiguration.sourceRoot;
  await wrapper({
    commit: fsCommit(fsAdapter, basePath),
    ...(typeof options.wrapperConfig === 'function' ? options.wrapperConfig(fsAdapter) : options.wrapperConfig)
  });
  await formatFiles(tree);
};

/**
 * The executor which is calling the wrapper in Nx environment
 * @param schema
 * @param executorContext
 */
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
  const projectConfiguration = readProjectConfiguration(host, executorContext.projectName);
  const outputs = executorContext.target.outputs;
  outputs.forEach(output => {
    host.delete(output.replace('{projectRoot}', projectConfiguration.root).replace('{workspaceRoot}', workspaceRoot))
  })
  for (const configFile of configFiles) {
    const {default: wrapperConfig} = await import(configFile);
    tasks.push(await generateComponents(host, { wrapperConfig, project: executorContext.projectName }));
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
