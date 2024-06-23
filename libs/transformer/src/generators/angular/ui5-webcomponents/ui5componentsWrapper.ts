import { ComponentData } from "../../../lib/types";
import { AngularGeneratorOptions } from "../angular-generator-options";
import { AngularGeneratedFile } from "../angular-generated-file";
import { NgPackageFile } from "../ng-package-file";
import { genericCva } from "./generic-cva";
import { IndexFile } from "../index-file";
import { join } from "path";
import { AngularModuleFile } from "../angular-module-file";
import { utilsFile } from "./utils";
import { ComponentFile } from "./component-file";
import { normalizeOptions } from "./normalize-options";

function getComponentFile(componentData: ComponentData, _options: AngularGeneratorOptions, cache: Map<ComponentData, AngularGeneratedFile>): AngularGeneratedFile {
  const options = normalizeOptions(_options);
  const cached = cache.get(componentData);
  if (cached) {
    return cached;
  }
  if (componentData.dependencies.length > 0) {
    componentData.dependencies.forEach(d => getComponentFile(d, options, cache));
  }
  const componentFile: AngularGeneratedFile = new ComponentFile(componentData, options, cache);
  if (componentData.imports.length > 0) {
    componentData.imports.forEach(i => {
      componentFile.addImport(i);
    });
  }
  cache.set(componentData, componentFile);
  return componentFile;
}

export const ui5componentsWrapper = (components: ComponentData[], options: AngularGeneratorOptions): AngularGeneratedFile[] => {
  const cache = new Map<ComponentData, AngularGeneratedFile>;
  const files: AngularGeneratedFile[] = [];
  let needsCva = false;
  for (const componentData of components) {
    if (!needsCva && componentData.formData.length > 0) {
      needsCva = true;
    }
    const componentFile = getComponentFile(componentData, options, cache);
    files.push(componentFile);
    files.push(new NgPackageFile(componentFile, componentFile.parsedPath.dir));
  }

  if (needsCva) {
    files.push(genericCva);
    const ngPackageFile = new NgPackageFile(genericCva, genericCva.parsedPath.dir);
    genericCva.apfPath = options.apfPathFactory(genericCva.path);
    files.push(ngPackageFile);
  }

  (() => {
    files.push(utilsFile);
    utilsFile.apfPath = options.apfPathFactory(utilsFile.path);
    files.push(new NgPackageFile(utilsFile, utilsFile.parsedPath.dir))
  })();

  options.modules.forEach(moduleDescription => {
    const moduleFile = new AngularModuleFile(Object.values(files), moduleDescription);
    moduleFile.apfPath = options.apfPathFactory(moduleDescription.fileName);
    files.push(moduleFile);
    const moduleIndexFile = new IndexFile([moduleFile], options, join(moduleFile.parsedPath.dir, 'index.ts'));
    files.push(moduleIndexFile);
    const isPrimary = moduleFile.apfPath === options.apfPathFactory('index.ts');
    if (!isPrimary) {
      const moduleNgPackageFile = new NgPackageFile(moduleIndexFile, moduleIndexFile.parsedPath.dir);
      files.push(moduleNgPackageFile);
    }
  });
  const indexFile = new IndexFile(Object.values(files), options);
  files.push(indexFile);
  return files;
}
