import { ExportData, ExportSpecifier } from "../types";

/**
 * Checks if the data is an export specifier
 * @param data
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isExportSpecifier(data: any): data is ExportSpecifier {
  return data && data.local && data.exported;
}

/**
 * Checks if the data is an export data
 * @param data
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isExportData(data: any): data is ExportData {
  return data && Array.isArray(data.specifiers) && data.path && data.specifiers.every(isExportSpecifier);
}
