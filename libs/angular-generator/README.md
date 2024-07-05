# Angular Generator

This is a generator for generating Angular components, services, modules, etc. from the
list of the [ComponentData](/libs/wrapper/src/lib/types/component-data.ts) items and not only

## Usage

Lets say you have a list of the [ComponentData](/libs/wrapper/src/lib/types/component-data.ts) items:

```typescript
import {ComponentData, GeneratedFile, WrapperConfig} from "@ui5/webcomponents-transformer";
import apiJsonParser from "@ui5/webcomponents-schema-parser";
import {
  AngularExportSpecifierType,
  AngularGeneratedFile, AngularModuleFile,
  NgPackageFile,
  ui5componentsWrapper
} from "@ui5/webcomponents-ngx-generator";
import fs from "fs";

// The list of the ComponentData items, which will be used for generation
const components = await apiJsonParser({
  apiJsonPaths: [
    '@ui5/webcomponents-base/dist/api.json',
    '@ui5/webcomponents-fiori/dist/api.json',
    '@ui5/webcomponents/dist/api.json'
  ]
});

// The list of the GeneratedFiles, which can be used for generating the Angular components
const angularComponents = await ui5ComponentsWrapper(components);

const writeToFs = () => {
  Object.keys(angularComponents).forEach((path) => {
    fs.writeFileSync(path, angularComponents[path].getCode());
  });
}

// Now you can use the angularComponents for writing the files to the disk
writeToFs();

// Or, if you wanted to, you can manipulate the output, before writing it to the disk
const indexTs = angularComponents['index.ts'];
angularComponents['public_api.ts'] = indexTs;
indexTs.move('public_api.ts');
delete angularComponents['index.ts'];
angularComponents['ng-package.json'] = new NgPackageFile(angularComponents['index.ts']);
writeToFs();

```
The example above shows usage of the ui5 generator, but the package also includes the
generator for creating Fundamental-styles Angular directives
