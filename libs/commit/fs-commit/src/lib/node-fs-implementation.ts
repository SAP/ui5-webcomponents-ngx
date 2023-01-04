import {FileSystemInterface} from "@ui5/webcomponents-wrapper";
import {existsSync, readFileSync, writeFileSync, unlinkSync, mkdirSync, renameSync} from "fs";
import {dirname} from "path";
import {sync as fastGlob} from "fast-glob";

export class NodeFsImplementation implements FileSystemInterface {
  delete(path: string): void {
    unlinkSync(path);
  }

  exists(path: string): boolean {
    return existsSync(path);
  }

  move(from: string, to: string): void {
    renameSync(from, to);
  }

  queryFiles(pattern: string, excludedFilesPatterns: string[]): string[] {
    return fastGlob(pattern, {ignore: excludedFilesPatterns});
  }

  read(path: string): string {
    return readFileSync(path, {encoding: 'utf-8'});
  }

  write(path: string, content: string): void {
    const dir = dirname(path);
    if (!this.exists(dir)) {
      mkdirSync(dir, {recursive: true});
    }
    writeFileSync(path, content, {encoding: 'utf-8'});
  }
}
