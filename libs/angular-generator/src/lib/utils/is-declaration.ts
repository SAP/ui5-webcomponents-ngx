import {ExportSpecifier} from "@ui5/webcomponents-transformer";
import { AngularExportSpecifierType } from '../angular-export-specifier-type';

/**
 * checks if the specifier is Angular Declaration
 * @param specifier
 */
export const isDeclaration = (specifier: ExportSpecifier<AngularExportSpecifierType>) => {
  return specifier.types.includes(AngularExportSpecifierType.Declaration);
};
