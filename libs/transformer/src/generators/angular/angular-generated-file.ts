import { GeneratedFile } from '../../lib/generated-file';
import { AngularExportSpecifierType } from "./angular-export-specifier-type";
import { ParsedPath } from "path";
import { dependencyRelativePath } from "../../lib/utils";

/**
 * The base class for all Angular generated files.
 */
export abstract class AngularGeneratedFile extends GeneratedFile<AngularExportSpecifierType> {
  /** Angular Package Format path */
  apfPath!: string;

  override get relativePathCaller(): AngularGeneratedFile {
    return this;
  }

  /**
   * The relative path from the requester to this file.
   * This ensures that if the requester's apf path is the same as this file's apf path,
   * the relative path will be relative to the requester's path,
   * otherwise it will be an APF path.
   * @param requester
   */
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
