import {ComponentData, GeneratedFile} from "@ui5/webcomponents-wrapper";
import {AngularGeneratorOptions} from "../angular-generator-options";
import {ComponentFile} from "./component-file";
import {AngularGeneratedFile} from "../angular-generated-file";
import {NgPackageFile} from "../ng-package-file";
import {AngularExportSpecifierType} from "../angular-export-specifier-type";
import {genericCva} from "./generic-cva";
import {IndexFile} from "../index-file";
import {join} from "path";
import {AngularModuleFile} from "../angular-module-file";

function getComponentFile(componentData: ComponentData, options: AngularGeneratorOptions, cache: Map<ComponentData, ComponentFile>): ComponentFile {
  const cached = cache.get(componentData);
  if (cached) {
    return cached;
  }
  if (componentData.dependencies.length > 0) {
    componentData.dependencies.forEach(d => getComponentFile(d, options, cache));
  }
  const componentFile = new ComponentFile(componentData, options, cache);
  cache.set(componentData, componentFile);
  return componentFile;
}

export const ui5componentsWrapper = (components: ComponentData[], options: AngularGeneratorOptions): Record<string, GeneratedFile<AngularExportSpecifierType>> => {
  const cache = new Map<ComponentData, ComponentFile>;
  const files: Record<string, AngularGeneratedFile> = {};
  let needsCva = false;
  for (const componentData of components) {
    if (!needsCva && componentData.formData.length > 0) {
      needsCva = true;
    }
    const componentFile = getComponentFile(componentData, options, cache);
    files[componentFile.path] = componentFile;
    const ngPackageFile = new NgPackageFile(componentFile, componentFile.parsedPath.dir);
    files[ngPackageFile.path] = ngPackageFile;
  }
  if (needsCva) {
    files[genericCva.path] = genericCva;
    const ngPackageFile = new NgPackageFile(genericCva, genericCva.parsedPath.dir);
    files[ngPackageFile.path] = ngPackageFile;
    genericCva.apfPath = options.apfPathFactory(genericCva.path);
  }
  options.modules.forEach(moduleDescription => {
    const moduleFile = new AngularModuleFile(Object.values(files), moduleDescription);
    moduleFile.apfPath = options.apfPathFactory(moduleDescription.fileName);
    files[moduleFile.path] = moduleFile;
    const moduleIndexFile = new IndexFile([moduleFile], options, join(moduleFile.parsedPath.dir, 'index.ts'));
    files[moduleIndexFile.path] = moduleIndexFile;
    const moduleNgPackageFile = new NgPackageFile(moduleIndexFile, moduleIndexFile.parsedPath.dir);
    files[moduleNgPackageFile.path] = moduleNgPackageFile;
  });
  const indexFile = new IndexFile(Object.values(files), options);
  files[indexFile.path] = indexFile;
  // const generatedComponents = components.reduce((acc, component) => {
  //   acc[component.path] = generatedFileCreator(component, options);
  //   return acc;
  // }, {});
  // const generatedComponentsArr: GeneratedAngularComponentFile[] = Object.values(generatedComponents);
  // const secondaryModules = options.modules.filter(module => !module.primary);
  // const primaryModules = options.modules.filter(module => module.primary);
  // const themingModuleGenerator = new WebcomponentsThemingGenerator();
  // const modules = secondaryModules.map(m => new GeneratedAngularModuleFile(m, generatedComponentsArr, options));
  // const pModules = primaryModules.map(m => new GeneratedAngularModuleFile(m, [...modules, themingModuleGenerator.module], options));
  // const indexFile = new IndexFile([...generatedComponentsArr, ...modules, ...pModules, themingModuleGenerator.module, themingModuleGenerator.service]);
  //
  // return {
  //   ...generatedComponents,
  //   ...modules.reduce((acc, module) => {
  //     acc[module.path] = module;
  //     return acc;
  //   }, {}),
  //   ...pModules.reduce((acc, module) => {
  //     acc[module.path] = module;
  //     return acc;
  //   }, {}),
  //   'index.ts': indexFile,
  //   [genericCva.path]: genericCva,
  //   [themingModuleGenerator.module.path]: themingModuleGenerator.module,
  //   [themingModuleGenerator.service.path]: themingModuleGenerator.service
  // };
  return files;
}
