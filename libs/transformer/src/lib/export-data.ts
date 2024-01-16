import {ParsedPath} from "path";

/**
 * The type of the export specifier
 */
export enum ExportSpecifierType {
  Type = 'type',
  Class = 'class',
  Variable = 'variable',
  Function = 'function',
  Enum = 'enum'
}

/**
 * The type of the export specifier
 */
export interface ExportSpecifier<Type = void> {
  /** The local name of the export,
   *  or a function which returns the
   *  name of the exported symbol
   */
  local: string | (() => string);
  /**
   * The exported name of the export,
   * or a function which returns the
   * name of the exported symbol
   *
   * If the local name is changed for the export,
   * this is the place where it should be declared
   */
  exported: string | (() => string);
  /**
   *  The type of the export specifier
   *  Depending on a `GeneratedFile` implementation,
   *  this may be used to determine the type of the export
   *  specific to that implementation.
   *  For example, in `AngularGeneratedFile` this is used
   *  to mark some symbols to be exported as `NgModule`s,
   *  while others as `Component`s and so on.
   */
  types: Array<Type | ExportSpecifierType>
}

/**
 * The export data of a generated file
 */
export interface ExportData<Type = ExportSpecifierType> {
  /**
   * The list of the exported symbols
   */
  specifiers: ExportSpecifier<Type>[];
  /**
   * The path to export from, either string or the function which returns the path.
   * If not provided, the path of the generated file will be used.
   * This is used to determine the source of the specifiers, where are they exported from.
   */
  path: string | ((callerParsedPath: ParsedPath) => string);
}

/**
 * Checks if the data is an export specifier
 * @param data
 */
export function isExportSpecifier(data: any): data is ExportSpecifier {
  return data && data.local && data.exported;
}

/**
 * Checks if the data is an export data
 * @param data
 */
export function isExportData(data: any): data is ExportData {
  return data && Array.isArray(data.specifiers) && data.path && data.specifiers.every(isExportSpecifier);
}
