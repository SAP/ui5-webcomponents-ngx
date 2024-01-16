import {FileSystemInterface, GeneratedFile} from "@ui5/webcomponents-transformer";
import {join} from "path";

export function fsCommit(fsImplementation: FileSystemInterface, cwd: string): (files: GeneratedFile[]) => void {
  return (files: GeneratedFile[]): void => {
    // const receivedFiles = files.map((file) => file.path);
    // const receivedFilesSet = new Set(receivedFiles);
    //
    // const existingFiles = fsImplementation.queryFiles(join(cwd, '**/*'), []);
    //
    // const filesToDelete = existingFiles.filter((file) => !receivedFilesSet.has(file));
    // filesToDelete.forEach((file) => fsImplementation.delete(file));

    files.forEach((file) => {
      const path = join(cwd, file.path);
      fsImplementation.write(path, file.getCode());
    });
  }
}
