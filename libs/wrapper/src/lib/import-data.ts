export interface ImportSpecifier {
  local: string | (() => string);
  imported: string | (() => string);
}

export interface ImportData {
  specifiers: ImportSpecifier[];
  path: string | ((caller: any) => string);
}

export function isImportSpecifier(data: any): data is ImportSpecifier {
  return typeof data === 'object' && data.local && data.imported;
}

export function isImportData(data: any): data is ImportData {
  return data && Array.isArray(data.specifiers) && data.path && data.specifiers.every(isImportSpecifier);
}
