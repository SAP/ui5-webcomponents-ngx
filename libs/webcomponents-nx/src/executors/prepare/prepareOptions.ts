import {SchematicsOptions} from "./schematicsOptions";

export interface PrepareOptions {
  schematics?: SchematicsOptions;
  packageJsonPath?: string;
  versionsOverrides?: {
    projectVersion?: string;
  };
  distPath: string;
}
