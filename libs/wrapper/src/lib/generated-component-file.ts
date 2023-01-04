import {ComponentData} from './types/component-data';
import {GeneratedFile} from "./generated-file";

export abstract class GeneratedComponentFile<ExportsType, OptionsType = any> extends GeneratedFile<ExportsType> {
  componentData: ComponentData;
  dependencies: Set<GeneratedComponentFile<ExportsType, OptionsType>> = new Set();
  dependents: Set<GeneratedComponentFile<ExportsType, OptionsType>> = new Set();

  protected options: OptionsType;

  protected constructor(
    componentData: ComponentData,
    componentFileCreator: (componentData: ComponentData) => GeneratedComponentFile<ExportsType, OptionsType>,
    options: OptionsType
  ) {
    super();
    this.componentData = componentData;
    this.dependencies = new Set(componentData.dependencies.map((dependency) => {
      const generatedComponentFile = componentFileCreator(dependency);
      generatedComponentFile.dependents.add(this);
      return generatedComponentFile;
    }));
    this.options = options;
  }

}
