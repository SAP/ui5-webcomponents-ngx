import { IndexFile } from "../../index-file";
import { proxyUtilsFile } from "./proxy-utils-file";
import { ui5LifecyclesServiceFile } from "./ui5-lifecycles-service-file";
import { AngularGeneratorOptions } from "../../angular-generator-options";

export class UtilsEntryFile extends IndexFile {
  constructor(options: AngularGeneratorOptions) {
    super(
      [proxyUtilsFile, ui5LifecyclesServiceFile],
      options,
      'utils/index.ts'
    );
    this.apfPath = options.apfPathFactory(this.path);
  }
}
