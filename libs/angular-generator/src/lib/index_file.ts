import {GeneratedFile} from "@ui5/webcomponents-wrapper";

export class IndexFile extends GeneratedFile {
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
