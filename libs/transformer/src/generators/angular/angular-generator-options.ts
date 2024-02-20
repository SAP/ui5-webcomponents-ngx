import { ComponentData, OutputType } from "../../lib/types";
import { AngularGeneratedFile } from "./angular-generated-file";

export interface ModuleDescription {
  fileName: string;
  included: (file: AngularGeneratedFile) => boolean;
}

/**
 * The options for the AngularGenerator.
 */
export interface AngularGeneratorOptions {
  /**
   * The factory for the generated files' names.
   * @param sourceFilePath
   */
  exportFileNameFactory: (sourceFilePath: string) => string;
  /**
   * The factory for the generated files' Angular Package Format paths
   * @param sourceFilePath
   */
  apfPathFactory: (sourceFilePath: string) => string;
  /**
   * The list of the modules that should be created and the files that should be included in them.
   */
  modules: ModuleDescription[];
  /**
   * The postfix for the generated selectors.
   */
  selectorPostfix?: string;
  /**
   * The factory for the generated selectors.
   * @param componentData
   */
  selectorFactory?: (componentData: ComponentData) => string;
  /**
   * The factory for the output names
   */
  componentOutputNameFactory?: (componentData: ComponentData, output: OutputType) => string;
}
