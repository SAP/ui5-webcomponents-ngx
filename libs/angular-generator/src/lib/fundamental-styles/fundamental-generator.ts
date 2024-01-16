import {IndexFile} from '../index-file';
import {AngularGeneratorOptions} from "../angular-generator-options";
import {FundamentalStylesDirectiveFile} from "./fundamental-styles-directive-file";
import {NgPackageFile} from "../ng-package-file";
import {AngularGeneratedFile} from "../angular-generated-file";
import {AngularModuleFile} from "../angular-module-file";

/**
 * Generates the fundamental styles angular directives library
 *
 * @param styles paths to the fundamental-styles js files. Every path is a path to a single component's js file, which contains the component's CSS styles
 * @param options options for the output files
 */
export function fundamentalGenerator(styles: string[], options: AngularGeneratorOptions) {
  const generatedFiles = styles.reduce((files: AngularGeneratedFile[], style) => {
    const componentFile = new FundamentalStylesDirectiveFile(style, options);
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

  return [
    ...generatedFiles,
    indexFile
  ];
}
