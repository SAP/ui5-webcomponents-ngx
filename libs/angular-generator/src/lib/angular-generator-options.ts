import {ComponentData, GeneratedFile, InputType} from "@ui5/webcomponents-wrapper";

export interface ModuleDescription {
  fileName: string;
  className: string;
  primary?: boolean;
  included: (file: GeneratedFile<any>) => boolean;
}

export interface AngularGeneratorOptions {
  exportFileNameFactory: (sourceFilePath: string) => string;
  modules: ModuleDescription[];
  selectorPostfix?: string;
  selectorFactory?: (componentData: ComponentData) => string;

  /**
   * Returned input should have different reference than the original input.
   * */
  inputModifier?: (input: InputType, componentData: ComponentData) => ({
    valueMapper?: [any, any][]; // [from, to][]
    input: InputType;
  });
}
