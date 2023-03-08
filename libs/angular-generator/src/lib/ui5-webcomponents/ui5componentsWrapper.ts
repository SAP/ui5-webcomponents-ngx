import {ComponentData} from "@ui5/webcomponents-wrapper";
import {AngularGeneratorOptions} from "../angular-generator-options";
import {AngularGeneratedFile} from "../angular-generated-file";
import {NgPackageFile} from "../ng-package-file";
import {genericCva} from "./generic-cva";
import {IndexFile} from "../index-file";
import {join} from "path";
import {AngularModuleFile} from "../angular-module-file";
import {TsComponentFile} from "./ts-component-file";
import {ComponentFile} from "./component-file";
import { utilsFile } from "./utils";

function getComponentFile(componentData: ComponentData, options: AngularGeneratorOptions, cache: Map<ComponentData, AngularGeneratedFile>): AngularGeneratedFile {
  const cached = cache.get(componentData);
  if (cached) {
    return cached;
  }
  if (componentData.dependencies.length > 0) {
    componentData.dependencies.forEach(d => getComponentFile(d, options, cache));
  }
  let componentFile: AngularGeneratedFile;
  try {
    require.resolve(componentData.path.replace(/\.js$/, '.d.ts'));
    componentFile = new TsComponentFile(componentData, options, cache);
  } catch (e) {
    componentFile = new ComponentFile(componentData, options, cache);
  }
  cache.set(componentData, componentFile);
  return componentFile;
}

export const ui5componentsWrapper = (components: ComponentData[], options: AngularGeneratorOptions): Record<string, AngularGeneratedFile> => {
  const cache = new Map<ComponentData, AngularGeneratedFile>;
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

  (() => {
    files[utilsFile.path] = utilsFile;
    const ngPackageFile = new NgPackageFile(utilsFile, utilsFile.parsedPath.dir);
    files[ngPackageFile.path] = utilsFile;
    utilsFile.apfPath = options.apfPathFactory(utilsFile.path);
  })();

  options.modules.forEach(moduleDescription => {
    const moduleFile = new AngularModuleFile(Object.values(files), moduleDescription);
    moduleFile.apfPath = options.apfPathFactory(moduleDescription.fileName);
    files[moduleFile.path] = moduleFile;
    const moduleIndexFile = new IndexFile([moduleFile], options, join(moduleFile.parsedPath.dir, 'index.ts'));
    files[moduleIndexFile.path] = moduleIndexFile;
    const isPrimary = moduleFile.apfPath === options.apfPathFactory('index.ts');
    if (!isPrimary) {
      const moduleNgPackageFile = new NgPackageFile(moduleIndexFile, moduleIndexFile.parsedPath.dir);
      files[moduleNgPackageFile.path] = moduleNgPackageFile;
    }
  });
  const indexFile = new IndexFile(Object.values(files), options);
  files[indexFile.path] = indexFile;
  return files;
}
