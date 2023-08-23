# @ui5/webcomponents-wrapper

This package provides a base functionality for generating an output depending on a given input. 
This is a general purpose library, which can be used for generating different outputs, such as:
- Wrappers
- Documentation
- Code snippets
- etc.

Idea is that it has an ability to receive plugins, which can be used to extend the functionality of the library.
`@ui5/webcomponents-wrapper` has one function, called `wrapper`, which receives a configuration object, and returns
a promise, which resolves with the output of the wrapper.
```ts
export interface WrapperConfig<T> {
  getComponents: () => CanBePromise<T[]>;
  generator: (components: T[]) => CanBePromise<Record<string, GeneratedFile>>;
  commit: (files: GeneratedFile[]) => CanBePromise<void>;
}
```

The `getComponents` function is used to get the components, which will be used for generating the output. It can be
a promise, which resolves with the components, or it can be a synchronous function, which returns the components.
The term "component" is used here, but it can be anything, depending on the use case. For example, if the wrapper
is used for generating documentation, then the components will be the components, which will be documented. If the
wrapper is used for generating wrappers, then the components will be the components, which will be wrapped and those
components can be just a set of the names of the components, or the component metadatas, all depends on the generator
which is used with a given "component" gatherer.

The `generator` function is used to generate the output. It receives the components, which are returned from the
`getComponents` function, and returns a promise, which resolves with the output of the generator. The output of the
generator is an object, which contains the files, which will be committed to the file system instance. The keys of
the object are the paths of the files, and the values are the contents of the files. Values are `GeneratedFile` type,
which is a class with many faces. Any generator that returns the `GeneratedFile` type, can modify it in any way it
wants, and the changes will be reflected in the final output.

The `GeneratedFile` has a interface, which looks like this:

```ts
interface GeneratedFile<ExportsType = void> {
  readonly relativePathCaller: any;
  readonly parsedPath: ParsedPath;
  readonly path: string;
  readonly exports: ExportData<ExportsType>[];
  readonly imports: ImportData[];

  relativePathFrom(requester: GeneratedFile | ParsedPath): string;

  getCode(): string;

  move(newPath: string): void;

  addExport(
    exportData: CanBeArray<
      ExportData<ExportsType> | ExportSpecifier<ExportsType> | string
    >,
    path: ExportData['path']
  ): void;

  addImport(
    importData: CanBeArray<
      ImportData | ImportSpecifier | string | (() => string)
    >,
    path?: ImportData['path']
  ): void;

  getImportsCode(): string;

  getExportsCode(): string;

  getStr(getter: string | (() => string)): string;
}
```

This interface and the configuration of the wrapper, allows the plugins to modify the output of the wrapper in any
way they want. For example, if the wrapper is used for generating wrappers, then the plugins can be used to modify
the imports and exports of the generated files, so that the generated wrappers can be imported and exported in a
different way, than the default one.

The `commit` function is used to commit the files to the file system instance. It receives the files, which are
returned from the `generator` function, and returns a promise, which resolves with nothing. This function is used
to commit the files to the file system instance, so that they can be used later on. This step can be also abstracted
and the files can be committed not to the actual file system instance, but to the memory, or to the database, or
anywhere else, depending on the use case.
