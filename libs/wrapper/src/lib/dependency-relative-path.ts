import {join, ParsedPath, relative} from "path";

export function dependencyRelativePath(from: ParsedPath, to: ParsedPath): string {
  const currentFolder = from.dir;
  const dependencyFile = join(to.dir, to.name) + (from.ext === to.ext ? '' : to.ext);
  const relativePath = relative(currentFolder, dependencyFile).split('\\').join('/');
  return relativePath.startsWith('.') ? relativePath : `./${relativePath}`;
}
