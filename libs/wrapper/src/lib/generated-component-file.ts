import {ComponentData} from './types/component-data';
import {GeneratedFile} from "./generated-file";
import {ParsedPath} from "path";
import {dependencyRelativePath} from "./dependency-relative-path";

export abstract class GeneratedComponentFile<ExportsType, OptionsType = any> extends GeneratedFile<ExportsType> {
  relativePathFrom = (requester: ParsedPath) => dependencyRelativePath(requester, this.parsedPath);
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
