import {dependencyRelativePath, GeneratedFile} from "@ui5/webcomponents-wrapper";
import {AngularExportSpecifierType} from "./angular-export-specifier-type";
import {ParsedPath} from "path";

export abstract class AngularGeneratedFile extends GeneratedFile<AngularExportSpecifierType> {
  apfPath!: string;
  override get relativePathCaller(): AngularGeneratedFile {
    return this;
  }
  relativePathFrom = (requester: AngularGeneratedFile | GeneratedFile | ParsedPath): string => {
    if (requester instanceof AngularGeneratedFile) {
      if (requester.apfPath === this.apfPath) {
        return dependencyRelativePath(requester.parsedPath, this.parsedPath);
      }
      return this.apfPath;
    }
    if (requester instanceof GeneratedFile) {
      return dependencyRelativePath(requester.parsedPath, this.parsedPath);
    }
    return dependencyRelativePath(requester, this.parsedPath);
  }

}
