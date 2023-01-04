import {GeneratedFile} from "@ui5/webcomponents-wrapper";

export class IndexFile extends GeneratedFile {
  constructor(exportedFiles: GeneratedFile<any>[]) {
    super();
    this.move('index.ts');
    exportedFiles.forEach(({exports}) => {
      this.addExport(exports);
    })
  }

  getCode() {
    return this.getExportsCode();
  }
}
