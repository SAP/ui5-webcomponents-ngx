# Project structure and general overview of functionality

## Project structure

Project is an NX based monorepo. We use yarn for package management.
The project is divided into 2 main parts:
- Publishable library - `ui5-angular`, aka `@ui5/webcomponents-ngx`
- Libraries for creating the publishable library.
  - `wrapper` - Contains core logic for wrapping the web components.
  - `api-json-parser` - Contains logic for parsing the web components API JSONs into `ComponentData` structure
  - `angular-generator` - Contains logic for generating the Angular components and directives from `ComponentData` interface.
  - `fs-commit` - Contains logic for committing the generated files to the filesystem(or any other persistence layer).

There is also an application for seeing the generated components in action - `playground` and
storybook stories for the generated components and their documentation.

Project also contains `webcomponents-nx`, which contains executor and generator for creating
wrappers for web components. Currently `ui5-angular` uses them to generate the wrappers for the web components,
but they can be omitted and the wrappers can be generated without using them.

## General overview of functionality

### Wrapper - @ui5/webcomponents-wrapper
Wrapper is a library that contains core logic for wrapping the web components. It is a simple generic function
which holds the logic and order of executing the methods for wrapping the web components.
Steps are:
- Parse
- Generate
- Commit

All three can be customized to the individual needs of the project, only few key concepts are required to be
understood in order to customize the wrapper. In order to create your own parser you should bear in mind that
the parser should return `Record<string, ComponentData>` interface. Where string is the original path of the
web component js file and `ComponentData` is the interface that contains all the information about the web component.
For creating generator your generator function should accept `ComponentData[]` and return
`Record<string, GeneratedFile>` interface. The key of the returned object should be the file name and the value
should be the instance of the `GeneratedFile` class. The `GeneratedFile` class contains method called `getCode()`,
which gets called during the commit phase and should return the string that will be written to the file.
You can also customize the commit phase by providing your own commit function. The commit function should accept
`GeneratedFile[]` and return `Promise<void>`. During the commit phase the `GeneratedFile` instances are iterated
and the `getCode()` method is called on each of them and the returned string is written to the file, path of which
is provided by the `GeneratedFile`'s property `path`. Generated files can have dependencies on each other
and resolving the dependencies is done by it, so you don't have to worry about it, if you do not intend to change
the default behavior.

As every step is just pure function, you can easily write your own implementation of any step on top of the existing
one and use it in your wrapper configuration.

### API JSON parser - @ui5/webcomponents-api-json-parser

API JSON parser is a library that contains logic for parsing the web components API JSONs into `ComponentData` structure.
It expects that it will receive the paths to the API JSONs, which should be in the format of the `@ui5/webcomponents` export.
If there are multiple API JSONs, which depend on each other(e.g `@ui5/webcomponents` depends on `@ui5/webcomponents-base` for some types),
it will combine then and return the single `ComponentData` object per component. Additionally resulted `ComponentData` may have reference
to other `ComponentData` objects.
