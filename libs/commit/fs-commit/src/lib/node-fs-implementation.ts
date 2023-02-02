import {FileSystemInterface} from "@ui5/webcomponents-wrapper";
import {existsSync, readFileSync, writeFileSync, unlinkSync, mkdirSync, renameSync, readdirSync} from "fs";
import {basename, dirname, extname, normalize} from "path";
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

  readDir(path: string): string[] {
    return readdirSync(path);
  }

  write(path: string, content: string): void {
    const dir = dirname(path);
    if (!this.exists(dir)) {
      mkdirSync(dir, {recursive: true});
    }
    writeFileSync(path, content, {encoding: 'utf-8'});
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
}
