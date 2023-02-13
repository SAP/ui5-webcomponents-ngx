export interface FileSystemInterface {
  exists(path: string): boolean;

  read(path: string): string;

  readDir(path: string): string[];

  write(path: string, content: string): void;

  move(from: string, to: string): void;

  delete(path: string): void;

  queryFiles(pattern: string, excludedFilesPatterns: string[]): string[];
}
