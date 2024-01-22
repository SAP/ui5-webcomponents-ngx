import {GeneratedFile} from "../generated-file";

export type CanBePromise<T> = T | Promise<T>;

export interface TransformerConfig<T> {
  gatherer: () => CanBePromise<T[]>;
  transformers: Transformers<T>;
  persist: (files: GeneratedFile[]) => CanBePromise<void>;
}

export type Transformers<T> = TransformerFn<T>[];

export type TransformerFn<T> = (gatheredItems: T[], files: GeneratedFile[]) => CanBePromise<GeneratedFile[]>;
