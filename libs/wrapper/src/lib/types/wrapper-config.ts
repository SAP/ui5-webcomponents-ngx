import {ComponentData} from "./component-data";
import {GeneratedComponentFile} from "../generated-component-file";
import {GeneratedFile} from "../generated-file";

type CanBePromise<T> = T | Promise<T>;

export interface WrapperConfig {
  getComponents: () => CanBePromise<ComponentData[]>;
  generator: (component: ComponentData[]) => CanBePromise<Record<string, GeneratedFile>>;
  commit: (files: GeneratedFile[]) => CanBePromise<void>;
}
