import {ComponentData, GeneratedFile} from "@ui5/webcomponents-wrapper";
import {GeneratedAngularComponentFile, generatedFileCreator} from "./generated-angular-component-file";
import {AngularGeneratorOptions} from "./angular-generator-options";
import {GeneratedAngularModuleFile} from "./generated-angular-module-file";
import {IndexFile} from "./index_file";
import {genericCva} from "./generic-cva";

export function angularGenerator(components: ComponentData[], options: AngularGeneratorOptions): Record<string, GeneratedFile> {
  const generatedComponents = components.reduce((acc, component) => {
    acc[component.path] = generatedFileCreator(component, options);
    return acc;
  }, {});
  const generatedComponentsArr: GeneratedAngularComponentFile[] = Object.values(generatedComponents);
  const secondaryModules = options.modules.filter(module => !module.primary);
  const primaryModules = options.modules.filter(module => module.primary);
  const modules = secondaryModules.map(m => new GeneratedAngularModuleFile(m, generatedComponentsArr, options));
  const pModules = primaryModules.map(m => new GeneratedAngularModuleFile(m, modules, options));
  const indexFile = new IndexFile([...generatedComponentsArr, ...modules, ...pModules]);

  return {
    ...generatedComponents,
    ...modules.reduce((acc, module) => {
      acc[module.path] = module;
      return acc;
    }, {}),
    ...pModules.reduce((acc, module) => {
      acc[module.path] = module;
      return acc;
    }, {}),
    'index.ts': indexFile,
    [genericCva.path]: genericCva
  };
}
