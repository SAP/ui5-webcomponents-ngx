import { sync as fastGlobSync } from 'fast-glob';
import { basename, join } from "path";
import { workspaceRoot } from "@nx/devkit";

export type FileInputOutput = {
  input: string;
  output: string;
};
export type AssetGlob = FileInputOutput & {
  glob: string;
  ignore?: string[];
  dot?: boolean;
};

export function assetGlobsToFiles(
  assets: Array<AssetGlob | string>,
  ignored: string[] = [],
  outDir: string
): FileInputOutput[] {
  const rootDir = workspaceRoot;
  const files: FileInputOutput[] = [];

  const globbedFiles = (
    pattern: string,
    input = '',
    ignore: string[] = [],
    dot: boolean = false
  ) => {
    return fastGlobSync(pattern, {
      cwd: input,
      onlyFiles: true,
      dot,
      ignore,
    });
  };

  assets.forEach((asset) => {
    if (typeof asset === 'string') {
      globbedFiles(asset, rootDir, ignored).forEach((globbedFile) => {
        files.push({
          input: join(rootDir, globbedFile),
          output: join(outDir, basename(globbedFile)),
        });
      });
    } else {
      globbedFiles(
        asset.glob,
        join(rootDir, asset.input),
        [...(asset.ignore || []), ...ignored],
        asset.dot ?? false
      ).forEach((globbedFile) => {
        files.push({
          input: join(rootDir, asset.input, globbedFile),
          output: join(outDir, asset.output, globbedFile),
        });
      });
    }
  });

  return files;
}
