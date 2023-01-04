import {FileSystemInterface} from "@ui5/webcomponents-wrapper";
import {Tree} from '@nrwl/devkit';
import {sync as fastGlob} from "fast-glob";

export class NxFsImplementation implements FileSystemInterface {
  constructor(private tree: Tree) {
  }

  exists(path: string): boolean {
    return this.tree.exists(path);
  }

  read(path: string): string {
    return this.tree.read(path, 'utf-8') as string;
  }

  write(path: string, content: string): void {
    this.tree.write(path, content);
  }

  move(from: string, to: string): void {
    this.tree.rename(from, to);
  }

  delete(path: string): void {
    this.tree.delete(path);
  }

  queryFiles(pattern: string, excludedFilesPatterns: string[]): string[] {
    return fastGlob(pattern, {ignore: excludedFilesPatterns});
  }
}
