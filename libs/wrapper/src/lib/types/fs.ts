/**
 * File system interface
 */
export interface FileSystemInterface {
  /**
   * Checks if the file exists
   * @param path
   */
  exists(path: string): boolean;

  /**
   * Reads the file content
   * @param path
   */
  read(path: string): string;

  /**
   * Reads the directory content
   * @param path
   */
  readDir(path: string): string[];

  /**
   * Writes the file content
   * @param path
   * @param content
   */
  write(path: string, content: string): void;

  /**
   * Moves the file
   * @param from
   * @param to
   */
  move(from: string, to: string): void;

  /**
   * Deletes the file
   * @param path
   */
  delete(path: string): void;

  /**
   * Queries the files using the pattern and the excluded files patterns
   * @param pattern
   * @param excludedFilesPatterns
   */
  queryFiles(pattern: string, excludedFilesPatterns: string[]): string[];
}
