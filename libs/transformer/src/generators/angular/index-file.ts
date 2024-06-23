import { AngularGeneratedFile } from "./angular-generated-file";
import { GeneratedFile } from '../../lib/generated-file';
import { AngularGeneratorOptions } from "./angular-generator-options";

/**
 * The index file that exports all the generated files.
 */
export class IndexFile extends AngularGeneratedFile {
  constructor(files: GeneratedFile<any>[], options: AngularGeneratorOptions, location = 'index.ts') {
    super();
    this.move(location);
    this.apfPath = options.apfPathFactory(location);
    files.forEach(({ exports, relativePathFrom }) => {
      this.addExport(exports, relativePathFrom);
    });
  }

  getCode(): string {
    return this.getExportsCode();
  }
}
