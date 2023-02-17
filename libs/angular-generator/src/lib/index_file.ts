import {dependencyRelativePath, GeneratedFile} from "@ui5/webcomponents-wrapper";

export class IndexFile extends GeneratedFile {
  relativePathFrom = (path) => dependencyRelativePath(path, this.parsedPath);

  constructor(exportedFiles: GeneratedFile<any>[], location = 'index.ts') {
    super();
    this.move(location);
    exportedFiles.forEach(({exports}) => {
      this.addExport(exports);
    })
  }

  getCode() {
    return this.getExportsCode();
  }
}
