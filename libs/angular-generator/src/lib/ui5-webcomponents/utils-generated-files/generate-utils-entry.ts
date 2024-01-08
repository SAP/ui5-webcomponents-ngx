import { AngularGeneratorOptions } from "../../angular-generator-options";
import { AngularGeneratedFile } from '../../angular-generated-file';
import { proxyUtilsFile } from "./proxy-utils-file";
import { UtilsEntryFile } from "./entry-file";
import { NgPackageFile } from '../../ng-package-file';
import { ui5LifecyclesServiceFile } from "./ui5-lifecycles-service-file";

export function generateUtilsEntry(files: Record<string, AngularGeneratedFile>, options: AngularGeneratorOptions): void {
  files[proxyUtilsFile.path] = proxyUtilsFile;
  proxyUtilsFile.apfPath = options.apfPathFactory(proxyUtilsFile.path);

  files[ui5LifecyclesServiceFile.path] = ui5LifecyclesServiceFile;
  ui5LifecyclesServiceFile.apfPath = options.apfPathFactory(ui5LifecyclesServiceFile.path);

  const utilsEntryFile = new UtilsEntryFile(options);
  files[utilsEntryFile.path] = utilsEntryFile;

  const ngPackageFile = new NgPackageFile(utilsEntryFile, utilsEntryFile.parsedPath.dir);
  files[ngPackageFile.path] = ngPackageFile;
}
