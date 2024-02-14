import {FileSystemInterface, GeneratedFile} from "@ui5/webcomponents-transformer";
import {join} from "path";

export function fsCommit(fsImplementation: FileSystemInterface, cwd: string): (files: GeneratedFile[]) => void {
  return async (files: GeneratedFile[]): Promise<void> => {
    // const receivedFiles = files.map((file) => file.path);
    // const receivedFilesSet = new Set(receivedFiles);
    //
    // const existingFiles = fsImplementation.queryFiles(join(cwd, '**/*'), []);
    //
    // const filesToDelete = existingFiles.filter((file) => !receivedFilesSet.has(file));
    // filesToDelete.forEach((file) => fsImplementation.delete(file));

    for (const file of files) {
      const path = join(cwd, file.path);
      const code = await file.getCode();
      fsImplementation.write(path, code);
    }
  }
}
