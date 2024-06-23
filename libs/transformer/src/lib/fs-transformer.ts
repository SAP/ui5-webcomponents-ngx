import { join } from "path";
import { CanBePromise, FileSystemInterface } from "./types";
import { GeneratedFile } from "./generated-file";
import { fsCommit, NodeFsImplementation } from "./fs-commit";
import { transformer } from "./transformer";
import { Ui5FsTransformerConfig } from "./types/fs-transformer-config";

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
  transformerConfig: Ui5FsTransformerConfig;
  basePath: string,
  fsAdapter: FileSystemInterface
}) => {
  const config = (typeof options.transformerConfig === 'function' ? options.transformerConfig(options.fsAdapter) : options.transformerConfig);
  await transformer({
    persist: persistFn(options.fsAdapter, options.basePath, config.logOutputFileNames),
    ...config
  });
};

export interface FsTransformerOptions {
  conf: Ui5FsTransformerConfig[];
  basePath: string;
}

export async function fsTransformer(schema: FsTransformerOptions): Promise<void> {
  for (const config of schema.conf) {
    await executeTransformation({
      transformerConfig: config,
      basePath: schema.basePath,
      fsAdapter: new NodeFsImplementation()
    });
  }
}
