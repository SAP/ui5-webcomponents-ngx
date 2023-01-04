import {ParsedPath} from "path";

export enum ExportSpecifierType {
  Type = 'type',
  Class = 'class',
  Variable = 'variable',
  Function = 'function',
  Enum = 'enum'
}

export interface ExportSpecifier<Type = void> {
  local: string | (() => string);
  exported: string | (() => string);
  types: Array<Type | ExportSpecifierType>
}

export interface ExportData<Type = ExportSpecifierType> {
  specifiers: ExportSpecifier<Type>[];
  path: string | ((callerParsedPath: ParsedPath) => string);
}

export function isExportSpecifier(data: any): data is ExportSpecifier {
  return data && data.local && data.exported;
}

export function isExportData(data: any): data is ExportData {
  return data && Array.isArray(data.specifiers) && data.path && data.specifiers.every(isExportSpecifier);
}
