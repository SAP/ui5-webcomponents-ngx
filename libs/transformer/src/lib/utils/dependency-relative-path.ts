import {join, ParsedPath, relative} from "path";

/**
 * Returns the relative path from the requester to the requested file
 * @param from
 * @param to
 */
export function dependencyRelativePath(from: ParsedPath, to: ParsedPath): string {
  const currentFolder = from.dir;
  const dependencyFile = join(to.dir, to.name) + (from.ext === to.ext ? '' : to.ext);
  const relativePath = relative(currentFolder, dependencyFile);
  return relativePath.startsWith('.') ? relativePath : `./${relativePath}`;
}
