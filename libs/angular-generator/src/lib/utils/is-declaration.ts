import {ExportSpecifier} from "@ui5/webcomponents-wrapper";
import { AngularExportSpecifierType } from '../angular-export-specifier-type';

export const isDeclaration = (specifier: ExportSpecifier<AngularExportSpecifierType>) => {
  return specifier.types.includes(AngularExportSpecifierType.Declaration);
};
