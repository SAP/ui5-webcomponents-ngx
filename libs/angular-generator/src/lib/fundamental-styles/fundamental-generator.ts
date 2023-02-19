import {IndexFile} from '../index-file';
import {AngularGeneratorOptions} from "../angular-generator-options";
import {FundamentalStylesComponentFile} from "./fundamental-styles-component-file";
import {NgPackageFile} from "../ng-package-file";
import {AngularGeneratedFile} from "../angular-generated-file";
import {AngularModuleFile} from "../angular-module-file";

export function fundamentalGenerator(styles: string[], options: AngularGeneratorOptions) {
  const generatedFiles = styles.reduce((files: AngularGeneratedFile[], style) => {
    const componentFile = new FundamentalStylesComponentFile(style, options);
    const ngPackageFile = new NgPackageFile(componentFile, componentFile.parsedPath.dir);
    files.push(componentFile, ngPackageFile);
    return files;
  }, []);
  options.modules.forEach((module) => {
    const moduleFile = new AngularModuleFile(generatedFiles.filter(c => c.path.endsWith('.ts')), module);
    moduleFile.apfPath = options.apfPathFactory(moduleFile.path);
    generatedFiles.push(moduleFile);
  })
  const indexFile = new IndexFile(generatedFiles.filter(c => c.path.endsWith('.ts')), options);

  return {
    ...generatedFiles.reduce((f, g) => {
      f[g.path] = g;
      return f;
    }, {}),
    [indexFile.path]: indexFile
  };
}
