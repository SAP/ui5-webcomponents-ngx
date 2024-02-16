import { ImportData, ImportSpecifier } from "../types";

/**
 * Checks if the data is an import specifier
 * @param data
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isImportSpecifier(data: any): data is ImportSpecifier {
  return typeof data === 'object' && data.local && data.imported;
}

/**
 * Checks if the data is an import data
 * @param data
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isImportData(data: any): data is ImportData {
  return data && Array.isArray(data.specifiers) && data.path && data.specifiers.every(isImportSpecifier);
}
