import { parse, ParsedPath } from 'path';
import { isExportData, isImportData, isImportSpecifier } from './utils';
import { CanBePromise, ExportData, ExportSpecifier, ImportData, ImportSpecifier } from "./types";

type CanBeArray<T> = T | T[];


/**
 * Base class for generated files
 */
export abstract class GeneratedFile<ExportsType = unknown> {
  /**
   * Returns the code of the generated file,
   * including imports and exports.
   * This method should not cache the result,
   * otherwise the imports and exports will not be updated
   * when the file is moved, or any of the dependencies are moved
   */
  abstract getCode(): CanBePromise<string>;

  /**
   * Returns the relative path from the requester to this file
   */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  abstract relativePathFrom: (requester: any) => string;

  /**
   * Is used to get the relative paths from one instance of a generated file to another
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get relativePathCaller(): any {
    return this.parsedPath;
  }

  /**
   * Parsed path of the generated file
   */
  get parsedPath(): ParsedPath {
    return this._parsedPath;
  }

  get path(): string {
    return this._path;
  }

  /**
   * Returns the exports of the generated file
   */
  get exports(): ExportData<ExportsType>[] {
    return Array.from(this._exports.entries()).map(([path, specifiers]) => ({
      path,
      specifiers,
    }));
  }

  /**
   * Returns the imports of the generated file
   */
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

  /**
   * Moves the generated file to a new path and updates the imports and exports
   */
  move(newPath: string) {
    this._exports[newPath] = this._exports[this._path];
    delete this._exports[this._path];
    this._path = newPath;
    this._parsedPath = parse(newPath);
  }

  /**
   * Adds an export to the generated file
   *
   * @param exportData The export data to add to the generated file
   * @param path The path to export from. If not provided, the path of the generated file will be used.
   *      This is a function because the path of the generated file may change, but the path of the export should not
   */
  addExport(
    exportData: CanBeArray<
      ExportData<ExportsType> | ExportSpecifier<ExportsType> | string
    >,
    path: ExportData['path'] = this.relativePathFrom
  ): GeneratedFile<ExportsType> {
    if (Array.isArray(exportData)) {
      return exportData.reduce((acc: GeneratedFile<ExportsType>, exportData) => {
        return acc.addExport(exportData, path);
      }, this);
    }
    const normalizedExportData = this._normalizeExportData(exportData, path);
    const existingExportsFromPath =
      this._exports.get(normalizedExportData.path) || [];

    this._exports.set(
      normalizedExportData.path,
      existingExportsFromPath.concat(normalizedExportData.specifiers)
    );
    return this;
  }

  /**
   * Adds an import to the generated file
   */
  addImport(
    importData: CanBeArray<
      ImportData | ImportSpecifier | string | (() => string)
    >,
    path?: ImportData['path']
  ): GeneratedFile<ExportsType> {
    if (Array.isArray(importData)) {
      return importData.reduce((acc: GeneratedFile<ExportsType>, importData) => {
        return acc.addImport(importData, path);
      }, this);
    }
    const normalizedImportData = this._normalizeImportData(importData, path);
    const existingImportsFromPath =
      this._imports.get(normalizedImportData.path) || [];
    this._imports.set(
      normalizedImportData.path,
      existingImportsFromPath.concat(normalizedImportData.specifiers)
    );
    return this;
  }

  /**
   * Returns only the `imports` section of the generated file
   * e.g `import { Component } from '@angular/core';`
   */
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

  /**
   * Returns only the `exports` section of the generated file
   * e.g `export { Component };`
   */
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

  /**
   * Helper method to get the string value of a getter
   */
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
