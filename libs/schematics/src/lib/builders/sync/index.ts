import { Rule } from "@angular-devkit/schematics";
import { SyncSchema } from "./schema";
import {
  CanBePromise,
  FileSystemInterface,
  fsCommit,
  GeneratedFile,
  NodeFsImplementation,
  transformer
} from "@ui5/webcomponents-transformer";
import { join } from "path";
import { Ui5NgxTransformerConfig } from "./ngx-transformer-config";

class NgxGenerationResultJsonFile extends GeneratedFile {
  override relativePathFrom = () => 'noop';
  private readonly filePaths: string[] = [];
  constructor(files: GeneratedFile[], outputFileName: string) {
    super();
    this.move(outputFileName);
    this.filePaths = files.map(f => f.path);
  }

  override getCode(): CanBePromise<string> {
    return JSON.stringify(this.filePaths, null, 2);
  }
}

const persistFn = (fsImplementation: FileSystemInterface, cwd: string, logFileName?: string) => {
  const persist = fsCommit(fsImplementation, cwd);
  return async (files: GeneratedFile[]): Promise<void> => {
    if (logFileName) {
      const logFilePath = join(cwd, logFileName);
      const logFileContent = fsImplementation.exists(logFilePath) ? fsImplementation.read(logFilePath) : null;
      if (logFileContent) {
        const existingPaths = JSON.parse(logFileContent);
        existingPaths.forEach((p: string) => {
          const actualPath = join(cwd, p);
          if (fsImplementation.exists(actualPath)) {
            fsImplementation.delete(join(cwd, p))
          }
        });
      }
      return await persist([...files, new NgxGenerationResultJsonFile(files, logFileName)]);
    }
    return await persist(files);
  };
}

const executeTransformation = async (options: {
  transformerConfig: Ui5NgxTransformerConfig;
  basePath: string,
  fsAdapter: FileSystemInterface
}) => {
  const config = (typeof options.transformerConfig === 'function' ? options.transformerConfig(options.fsAdapter) : options.transformerConfig);
  await transformer({
    persist: persistFn(options.fsAdapter, options.basePath, config.logOutputFileNames),
    ...config
  });
};

export function sync(schema: SyncSchema): Rule {
  return async () => {
    const configFiles = schema.conf;

    for (const configFile of configFiles) {
      const transformerConfig: Ui5NgxTransformerConfig = await import(configFile).then((module) => module.default);
      await executeTransformation({
        transformerConfig,
        basePath: schema.basePath,
        fsAdapter: new NodeFsImplementation()
      });
    }
  };
}
