import { AngularGeneratedFile } from "./angular-generated-file";
import { GeneratedFile } from '../../lib/generated-file';

/**
 * The ng-package.json file generator.
 * This file is used by the Angular Package Format to determine the entry file of the library.
 * This class is for creating the ng-package.json files
 */
export class NgPackageFile extends AngularGeneratedFile {
  constructor(protected entryFile: GeneratedFile<any>, pathToNgPackage: string) {
    super();
    this.move(`${pathToNgPackage}/ng-package.json`);
  }

  override getCode(): string {
    return JSON.stringify({ lib: { entryFile: this.entryFile.relativePathFrom(this.parsedPath) } });
  }
}
