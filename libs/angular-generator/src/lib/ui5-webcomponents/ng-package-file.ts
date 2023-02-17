import {AngularGeneratedFile} from "../angular-generated-file";
import {GeneratedFile} from "@ui5/webcomponents-wrapper";

export class NgPackageFile extends AngularGeneratedFile {
  constructor(protected entryFile: GeneratedFile<any>, pathToNgPackage: string) {
    super();
    this.move(`${pathToNgPackage}/ng-package.json`);
  }

  override getCode(): string {
    return JSON.stringify({lib: {entryFile: this.entryFile.relativePathFrom(this.parsedPath)}});
  }
}
