import { parse, ParsedPath } from 'path';
import { ExportData, ExportSpecifier, isExportData } from './export-data';
import {
  ImportData,
  ImportSpecifier,
  isImportData,
  isImportSpecifier,
} from './import-data';

type CanBeArray<T> = T | T[];

export abstract class GeneratedFile<ExportsType = void> {
  abstract getCode(): string;
  abstract relativePathFrom: (requester: any) => string;
  get relativePathCaller(): any {
    return this.parsedPath;
  }
  get parsedPath(): ParsedPath {
    return this._parsedPath;
  }

  get path(): string {
    return this._path;
  }

  get exports(): ExportData<ExportsType>[] {
    return Array.from(this._exports.entries()).map(([path, specifiers]) => ({
      path,
      specifiers,
    }));
  }

  get imports(): ImportData[] {
    return Array.from(this._imports.entries()).map(([path, specifiers]) => ({
      path,
      specifiers,
    }));
  }

  protected _exports: Map<ExportData['path'], ExportSpecifier<ExportsType>[]> =
    new Map();
  protected _imports: Map<ImportData['path'], ImportSpecifier[]> = new Map();
  protected _path!: string;
  protected _parsedPath!: ParsedPath;

  move(newPath: string) {
    this._exports[newPath] = this._exports[this._path];
    delete this._exports[this._path];
    this._path = newPath;
    this._parsedPath = parse(newPath);
  }

  addExport(
    exportData: CanBeArray<
      ExportData<ExportsType> | ExportSpecifier<ExportsType> | string
    >,
    path: ExportData['path'] = this.relativePathFrom
  ): void {
    if (Array.isArray(exportData)) {
      exportData.forEach((exportData) => this.addExport(exportData, path));
      return;
    }
    const normalizedExportData = this._normalizeExportData(exportData, path);
    const existingExportsFromPath =
      this._exports.get(normalizedExportData.path) || [];

    this._exports.set(
      normalizedExportData.path,
      existingExportsFromPath.concat(normalizedExportData.specifiers)
    );
  }

  addImport(
    importData: CanBeArray<
      ImportData | ImportSpecifier | string | (() => string)
    >,
    path?: ImportData['path']
  ): void {
    if (Array.isArray(importData)) {
      importData.forEach((importData) => this.addImport(importData, path));
      return;
    }
    const normalizedImportData = this._normalizeImportData(importData, path);
    const existingImportsFromPath =
      this._imports.get(normalizedImportData.path) || [];
    this._imports.set(
      normalizedImportData.path,
      existingImportsFromPath.concat(normalizedImportData.specifiers)
    );
  }

  getImportsCode(): string {
    return Array.from(this._imports.entries())
      .map(([path, specifiers]) => {
        const relativePath =
          typeof path === 'function' ? path(this.relativePathCaller) : path;
        const isSelfImport =
          relativePath === this.relativePathFrom(this.relativePathCaller);
        const uniqueSpecifiers = Object.values(
          specifiers.reduce(
            (
              acc: Record<string, { imported: string; local: string }>,
              specifier
            ) => {
              const importedName =
                typeof specifier.imported === 'string'
                  ? specifier.imported
                  : specifier.imported();
              const localName =
                typeof specifier.local === 'string'
                  ? specifier.local
                  : specifier.local();
              if (!acc[importedName]) {
                acc[importedName] = {
                  imported: importedName,
                  local: localName,
                };
              }
              return acc;
            },
            {}
          )
        );
        if (isSelfImport) {
          return '';
        }
        if (uniqueSpecifiers.length === 0) {
          return `import "${relativePath}";`;
        }
        if (uniqueSpecifiers.some((specifier) => specifier.local === '*')) {
          if (uniqueSpecifiers.length > 1) {
            throw new Error(`Cannot mix wildcard import with other imports`);
          }
          return `import * as ${uniqueSpecifiers[0].imported} from "${relativePath}";`;
        }
        if (
          uniqueSpecifiers.length === 1 &&
          uniqueSpecifiers[0].imported === 'default'
        ) {
          return `import ${specifiers[0].local} from "${relativePath}";`;
        }

        const importSpecifiers = uniqueSpecifiers
          .map(({ local, imported }) => {
            return imported === local ? local : `${imported} as ${local}`;
          })
          .join(', ');
        return `import { ${importSpecifiers} } from '${relativePath}';`;
      })
      .join('\n');
  }

  getExportsCode(): string {
    return Array.from(this._exports.entries())
      .map(([path, specifiers]) => {
        const relativePath =
          typeof path === 'function' ? path(this.relativePathCaller) : path;
        const isSelfExport =
          relativePath === this.relativePathFrom(this.relativePathCaller);
        const uniqueSpecifiers = Object.values(
          specifiers.reduce(
            (
              acc: Record<string, { exported: string; local: string }>,
              specifier
            ) => {
              const exportedName =
                typeof specifier.exported === 'string'
                  ? specifier.exported
                  : specifier.exported();
              const localName =
                typeof specifier.local === 'string'
                  ? specifier.local
                  : specifier.local();
              if (!acc[exportedName]) {
                acc[exportedName] = {
                  exported: exportedName,
                  local: localName,
                };
              }
              return acc;
            },
            {}
          )
        );
        if (uniqueSpecifiers.length === 0) {
          if (isSelfExport) {
            throw new Error(
              `Cannot export all from self. Use addExport to add named exports from self`
            );
          }
          return `export * from "${relativePath}";`;
        }
        if (uniqueSpecifiers.length === 1 && uniqueSpecifiers[0].exported === '*') {
          return `export * from "${relativePath}";`;
        }
        if (
          uniqueSpecifiers.length === 1 &&
          uniqueSpecifiers[0].exported === 'default'
        ) {
          const local = this.getStr(uniqueSpecifiers[0].local);
          if (isSelfExport) {
            return `export default ${local};`;
          }
          return `export { ${this.getStr(
            uniqueSpecifiers[0].local
          )} as default } from "${relativePath}";`;
        }
        const exportSpecifiers = uniqueSpecifiers
          .map(({ local, exported }) => {
            return this.getStr(exported) === this.getStr(local)
              ? this.getStr(local)
              : `${this.getStr(local)} as ${this.getStr(exported)}`;
          })
          .join(', ');
        if (isSelfExport) {
          return `export { ${exportSpecifiers} };`;
        }
        return `export { ${exportSpecifiers} } from '${relativePath}';`;
      })
      .join('\n');
  }

  private getStr(getter: string | (() => string)): string {
    return typeof getter === 'string' ? getter : getter();
  }

  protected _normalizeExportData(
    exportData: ExportData<ExportsType> | ExportSpecifier<ExportsType> | string,
    path: ExportData['path']
  ): ExportData<ExportsType> {
    if (typeof exportData === 'string') {
      return {
        path: path,
        specifiers: [
          {
            exported: exportData,
            local: exportData,
            types: []
          },
        ],
      };
    }
    if (isExportData(exportData)) {
      return exportData as ExportData<ExportsType>;
    }
    return {
      path: path,
      specifiers: [exportData as ExportSpecifier<ExportsType>],
    };
  }

  protected _normalizeImportData(
    importData: ImportData | ImportSpecifier | string | (() => string),
    path?: ImportData['path']
  ): ImportData {
    if (isImportData(importData)) {
      return importData;
    }
    if (!path) {
      throw new Error(
        `Import specifier ${JSON.stringify(importData)} requires a path`
      );
    }

    if (isImportSpecifier(importData)) {
      return {
        path: path,
        specifiers: [importData],
      };
    }
    return {
      path: path,
      specifiers: [
        {
          local: importData,
          imported: importData,
        },
      ],
    };
  }
}
