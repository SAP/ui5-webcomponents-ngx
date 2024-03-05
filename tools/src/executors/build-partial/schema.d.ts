import type { AssetGlob } from "./assets";

export interface BuildPartialExecutorSchema {
  sourcesPath: string;
  includedFiles: Array<AssetGlob | string>;
  excludedFiles?: string[];
  distPath: string;
  configurations: string[];
}
