export interface BuildPartialExecutorSchema {
  includedFiles: string[];
  excludedFiles?: string[];
  distPath: string;
  pack?: boolean;
}
