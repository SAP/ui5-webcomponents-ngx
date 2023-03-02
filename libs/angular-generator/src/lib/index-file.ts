import {AngularGeneratedFile} from "./angular-generated-file";
import {GeneratedFile} from "@ui5/webcomponents-wrapper";
import {AngularGeneratorOptions} from "./angular-generator-options";

export class IndexFile extends AngularGeneratedFile {
  constructor(files: GeneratedFile<any>[], options: AngularGeneratorOptions, location = 'index.ts') {
    super();
    this.move(location);
    this.apfPath = options.apfPathFactory(location);
    files.forEach(({exports, relativePathFrom}) => {
      this.addExport(exports, relativePathFrom);
    });
  }

  getCode(): string {
    return this.getExportsCode();
  }
}
