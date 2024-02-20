import { ExportSpecifier } from "../../../lib/types";
import { AngularExportSpecifierType } from '../angular-export-specifier-type';

/**
 * checks if the specifier is Angular Provider
 * @param specifier
 */
export const isProvider = (specifier: ExportSpecifier<AngularExportSpecifierType>) => {
  return specifier.types.includes(AngularExportSpecifierType.Provider);
}
