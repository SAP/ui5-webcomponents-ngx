import { Rule, Tree } from "@angular-devkit/schematics";
import { SyncSchema } from "./schema";
import { FileSystemInterface, fsCommit, transformer, TransformerConfig } from "@ui5/webcomponents-transformer";
import { NgxFsAdapter } from "./ngx-fs-adapter";

type NgxTransformerConfig<T> = Omit<TransformerConfig<T>, 'persist'>;

export type Ui5NgxTransformerConfig<T = unknown> =
  NgxTransformerConfig<T>
  | ((fs: FileSystemInterface) => NgxTransformerConfig<T>);

const executeTransformation = async (options: {
  transformerConfig: Ui5NgxTransformerConfig;
  basePath: string,
  fsAdapter: FileSystemInterface
}) => {
  await transformer({
    persist: fsCommit(options.fsAdapter, options.basePath),
    ...(typeof options.transformerConfig === 'function' ? options.transformerConfig(options.fsAdapter) : options.transformerConfig)
  });
};

export function sync(schema: SyncSchema): Rule {
  return async (tree: Tree) => {
    const configFiles = schema.conf;

    for (const configFile of configFiles) {
      await executeTransformation({
        transformerConfig: await import(configFile).then((module) => module.default),
        basePath: schema.basePath,
        fsAdapter: new NgxFsAdapter(tree)
      });
    }
  };
}
