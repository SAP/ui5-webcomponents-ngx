import { FileSystemInterface, TransformerConfig } from "@ui5/webcomponents-transformer";

export type NgxTransformerConfig<T> = Omit<TransformerConfig<T>, 'persist'> & { logOutputFileNames?: string };
export type Ui5NgxTransformerConfig<T = unknown> =
  NgxTransformerConfig<T>
  | ((fs: FileSystemInterface) => NgxTransformerConfig<T>);
