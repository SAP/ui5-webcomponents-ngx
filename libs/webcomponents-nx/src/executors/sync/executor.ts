import {
  ExecutorContext,
  readProjectConfiguration,
  logger,
  workspaceRoot,
  formatFiles,
} from '@nx/devkit';
import { FsTree, flushChanges, printChanges } from 'nx/src/generators/tree';
import { fsCommit, NxFsImplementation } from '@ui5/webcomponents-transformer-fs-commit';
import { FileSystemInterface, transformer, TransformerConfig } from '@ui5/webcomponents-transformer';

type TransformerNxConfig<T> = Omit<TransformerConfig<T>, 'persist'>;

export type Ui5NxTransformerConfig<T = unknown> =
  TransformerNxConfig<T> |
  ((fs: FileSystemInterface) => TransformerNxConfig<T>);

const executeTransformation = async (options: {
  transformerConfig: Ui5NxTransformerConfig;
  basePath: string;
  fsAdapter: FileSystemInterface;
}) => {
  await transformer({
    persist: fsCommit(options.fsAdapter, options.basePath),
    ...(typeof options.transformerConfig === 'function' ? options.transformerConfig(options.fsAdapter) : options.transformerConfig),
  });
};

/**
 * The executor which is calling the wrapper in Nx environment.
 * @param schema
 * @param executorContext
 */
export default async function (
  schema: { configFile?: string; configFiles?: string[] },
  executorContext: ExecutorContext
): Promise<{ success: boolean }> {
  if (!schema.configFile && !schema.configFiles) {
    throw new Error('No config file specified.');
  }

  const host = new FsTree(workspaceRoot, executorContext.isVerbose);
  const configFiles = schema.configFile ? [schema.configFile] : schema.configFiles;
  const projectConfiguration = readProjectConfiguration(host, executorContext.projectName);
  const fsAdapter = new NxFsImplementation(host);

  // Process the output paths
  (executorContext.target.outputs || []).forEach((output) => {
    host.delete(output.replace('{projectRoot}', projectConfiguration.root).replace('{workspaceRoot}', workspaceRoot));
  });

  // Execute transformation
  for (const configFile of configFiles) {
    await executeTransformation({
      transformerConfig: await import(configFile).then((module) => module.default),
      basePath: projectConfiguration.sourceRoot,
      fsAdapter,
    });
  }

  const changes = host.listChanges();
  printChanges(changes);
  flushChanges(host.root, changes);  // Pass the base path (host.root)

  await formatFiles(host);

  return { success: true };
}
