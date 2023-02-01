import {GeneratedFile} from "../generated-file";

type CanBePromise<T> = T | Promise<T>;

export interface WrapperConfig<T> {
  getComponents: () => CanBePromise<T[]>;
  generator: (component: T[]) => CanBePromise<Record<string, GeneratedFile>>;
  commit: (files: GeneratedFile[]) => CanBePromise<void>;
}