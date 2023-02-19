import {ExportSpecifier} from "@ui5/webcomponents-wrapper";
import {AngularExportSpecifierType} from "@ui5/webcomponents-ngx-generator";

export const isModule = (specifier: ExportSpecifier<AngularExportSpecifierType>) => {
  return specifier.types.includes(AngularExportSpecifierType.NgModule);
}
