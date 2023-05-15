import {ExportSpecifier} from "@ui5/webcomponents-wrapper";
import { AngularExportSpecifierType } from '../angular-export-specifier-type';

export const isProvider = (specifier: ExportSpecifier<AngularExportSpecifierType>) => {
  return specifier.types.includes(AngularExportSpecifierType.Provider);
}
