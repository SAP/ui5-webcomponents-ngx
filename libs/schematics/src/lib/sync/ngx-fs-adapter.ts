import { FileSystemInterface } from "@ui5/webcomponents-transformer";
import { Tree } from "@angular-devkit/schematics";
import { basename, extname, normalize } from 'path';
import { sync as fastGlob } from "fast-glob";

export class NgxFsAdapter implements FileSystemInterface {
  constructor(
    private tree: Tree
  ) {
  }

  exists(path: string): boolean {
    return this.tree.exists(path);
  }

  read(path: string): string {
    return this.tree.readText(path);
  }

  readDir(path: string): string[] {
    return this.tree.getDir(path).subfiles?.map(f => f.toString()) || [];
  }

  write(path: string, content: string): void {
    if (this.tree.exists(path)) {
      this.tree.overwrite(path, content);
    } else {
      this.tree.create(path, content);
    }
  }

  move(from: string, to: string): void {
    this.tree.rename(from, to);
  }

  delete(path: string): void {
    this.tree.delete(path);
  }

  normalize(path: string): string {
    return normalize(path);
  }

  basename(path: string, ext?: string): string {
    return basename(path, ext);
  }

  extname(path: string): string {
    return extname(path);
  }

  queryFiles(pattern: string, excludedFilesPatterns: string[]): string[] {
    return fastGlob(pattern, { ignore: excludedFilesPatterns });
  }
}
