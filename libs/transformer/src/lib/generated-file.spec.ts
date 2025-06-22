import { GeneratedFile } from './generated-file';
import { ParsedPath, parse } from 'path';
import { ExportData } from './export-data';
import { ImportData, ImportSpecifier } from './import-data';

// Mock data and types for testing purposes
const mockParsedPath: ParsedPath = {
  root: '',
  dir: 'test/dir',
  base: 'file.ts',
  ext: '.ts',
  name: 'file',
};

const mockExportData: ExportData[] = [
  {
    path: 'test/path',
    specifiers: [
      { local: 'localName', exported: 'exportedName', types: [] },
    ],
  },
];

const mockImportSpecifier: ImportSpecifier = {
  local: 'importedName',
  imported: 'importedName',
};

const mockImportData: ImportData = {
  path: 'test/path',  // Ensure this path matches the expected value within your test assertion
  specifiers: [mockImportSpecifier],
};

// Test subclass for GeneratedFile
class TestFile extends GeneratedFile<string> {
  getCode(): string {
    return 'test code';
  }
  relativePathFrom = (requester: any): string => {
    return 'relative/path/from/requester';
  }
}

describe('GeneratedFile', () => {
  let generatedFile: TestFile;

  beforeEach(() => {
    generatedFile = new TestFile();
    generatedFile['move']('test/file/path.ts');
  });

  it('should correctly move the file and update the path', () => {
    expect(generatedFile.path).toBe('test/file/path.ts');
    expect(generatedFile.parsedPath).toEqual(parse('test/file/path.ts'));
  });

  it('should add and normalize export data', () => {
    generatedFile.addExport(mockExportData[0]);
    expect(generatedFile.exports).toEqual([mockExportData[0]]);
  });

  it('should add and normalize import data', () => {
    const importData = { path: 'import/path', specifiers: [{ local: 'imported', imported: 'imported' }] };
    generatedFile.addImport(importData);
    expect(generatedFile.imports).toEqual([importData]);
  });

    it('should return correct import codes', () => {
    generatedFile.addImport(mockImportData);
    const importsCode = generatedFile.getImportsCode();
    expect(importsCode).toContain(`import { importedName } from 'test/path';`);
    });

  it('should add and normalize import data', () => {
    generatedFile.addImport(mockImportData);
    expect(generatedFile.imports).toEqual([mockImportData]);
});

  it('should return correct export codes', () => {
    generatedFile.addExport(mockExportData[0].specifiers[0], 'test/path');
    const exportsCode = generatedFile.getExportsCode();
    expect(exportsCode).toContain(`export { localName as exportedName } from 'test/path';`);
  });

  it('should handle self export and throw an error', () => {
    expect(() => {
      generatedFile.addExport({ path: () => 'relative/path/from/requester', specifiers: [] });
      generatedFile.getExportsCode();
    }).toThrow('Cannot export all from self. Use addExport to add named exports from self');
  });
});