import { FileSystemInterface } from "./fs";
import { TransformerConfig } from "./transformer-config";

export type FsTransformerConfig<T> = Omit<TransformerConfig<T>, 'persist'> & { logOutputFileNames?: string };
export type Ui5FsTransformerConfig<T = unknown> =
  FsTransformerConfig<T>
  | ((fs: FileSystemInterface) => FsTransformerConfig<T>);
