import {ExportSpecifier} from "@ui5/webcomponents-wrapper";
import { AngularExportSpecifierType } from '../angular-export-specifier-type';

export const isModule = (specifier: ExportSpecifier<AngularExportSpecifierType>) => {
  return specifier.types.includes(AngularExportSpecifierType.NgModule);
}
