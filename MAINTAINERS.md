# Project structure and general overview of functionality

## Project structure

Project is an NX based monorepo. We use yarn for package management.
The project is divided into 2 main parts:
- Publishable library - `ui5-angular`, aka `@ui5/webcomponents-ngx`
- Libraries for creating the publishable library.
  - `wrapper` - Contains core logic for wrapping the web components.
  - `ui5-schema-parser` - Contains logic for parsing the web components API JSONs into `ComponentData` structure
  - `angular-generator` - Contains logic for generating the Angular components and directives from `ComponentData` interface.
  - `fs-commit` - Contains logic for committing the generated files to the filesystem(or any other persistence layer).

There is also an application for seeing the generated components in action - `playground` and
storybook stories for the generated components and their documentation.

Project also contains `webcomponents-nx`, which contains executor and generator for creating
wrappers for web components. Currently `ui5-angular` uses them to generate the wrappers for the web components,
but they can be omitted and the wrappers can be generated without using them.

## General overview of functionality

### Wrapper - @ui5/webcomponents-transformer
Wrapper is a library that contains core logic for wrapping the web components. It is a simple generic function
which holds the logic and order of executing the methods for wrapping the web components.
Steps are:
- Parse (`getComponents()`)
- Generate (`generator()`)
- Commit (`commit()`)

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

### API JSON parser - @ui5/webcomponents-schema-parser

API JSON parser is a library that contains logic for parsing the web components API JSONs into `ComponentData` structure.
It expects that it will receive the paths to the API JSONs, which should be in the format of the `@ui5/webcomponents` export.
If there are multiple API JSONs, which depend on each other(e.g `@ui5/webcomponents` depends on `@ui5/webcomponents-base` for some types),
it will combine then and return the single `ComponentData` object per component. Additionally resulted `ComponentData` may have reference
to other `ComponentData` objects.

### Publishing a new version

Typically, we will want to rewrap the components and republish them whenever `@ui5/webcomponents` has a new release.

First, create a new branch.

Update this library's `package.json` to utilize the new version of `@ui5/webcomponents` that we would like to wrap. Then install the updated dependencies with `yarn install`.

After updating those dependencies, we want to run the `sync` script: `npx nx run ui5-angular:sync`. This runs the wrapper: parsing, generating and then committing.

Then run the tests with `npx nx run ui5-angular:test`. The test should fail as the snapshot comparisons should have changed due to the updated versioning. After viewing the changes, if you'd like to accept the differences and update the snapshot tests, run `npx nx run ui5-angular:test -u`.

Now, open a pull request against the `main` branch. When this branch is merged, we'll have a new release. More details on that below.

### Versioning

Versioning is done using Lerna and it is configured to use fixed versioning. This means that all packages will have the same version,
no matter if they have changed or not. This is done in order to avoid having different versions of the packages in the same project.
All the versioning is done by the CI, so you don't have to worry about it, but if you want to bump the version manually, you can do it
by running `lerna version` command, how you like it and push the changes to the main or create a PR with a version bump and title
`chore(release)`. CI will release that version when it is merged to the main.

Releasing RC is done automatically, after every push to the main(merges included).

Releasing stable versions is done manually from GitHub action workflow dispatch of workflow `Create Release` or by running `lerna version` command and pushing the changes.

Hotfixes are done in the same way, check out the tag version you want to bump, then add your changes and then just run
`create:hotfix` script. It will create a new branch, bump the version and push it to the remote. Then CI will release the new version.

**notes about the latest version after hotfixes**

When you create hotfix and if the version of that hotfix is higher than the latest version on main, then the latest version will be updated on main too,
but only in `lerna.json` and `package.json` files. This is done in order to make sure that the next release will be done with the correct version.
If the version is lower, it will not have any effect on the main branch contents.

