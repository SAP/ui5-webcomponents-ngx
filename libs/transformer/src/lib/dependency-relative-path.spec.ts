import { dependencyRelativePath } from './dependency-relative-path';
import { ParsedPath } from 'path';

describe('dependencyRelativePath', () => {
  
  it('should return correct relative path for files with same extensions', () => {
    const from: ParsedPath = { dir: '/project/src', base: 'file.ts', ext: '.ts', name: 'file', root: '' };
    const to: ParsedPath = { dir: '/project/components', base: 'component.ts', ext: '.ts', name: 'component', root: '' };

    const result = dependencyRelativePath(from, to);
    expect(result).toBe('../components/component');  // ascends into components due to directory boundary cross
  });

  it('should return correct relative path for files with different extensions', () => {
    const from: ParsedPath = { dir: '/project/src', base: 'file.ts', ext: '.ts', name: 'file', root: '' };
    const to: ParsedPath = { dir: '/project/components', base: 'component.js', ext: '.js', name: 'component', root: '' };

    const result = dependencyRelativePath(from, to);
    expect(result).toBe('../components/component.js');  // Expect similar traversal behavior
  });

  it('should include ./ for paths within same directory', () => {
    const from: ParsedPath = { dir: '/project/src', base: 'file.ts', ext: '.ts', name: 'file', root: '' };
    const to: ParsedPath = { dir: '/project/src/components', base: 'component.ts', ext: '.ts', name: 'component', root: '' };

    const result = dependencyRelativePath(from, to);
    expect(result).toBe('./components/component');  // Relative within the same directory doesn't need ../ prefix
  });

  it('should handle paths deeper in directory structures', () => {
    const from: ParsedPath = { dir: '/project/src/util', base: 'util.ts', ext: '.ts', name: 'util', root: '' };
    const to: ParsedPath = { dir: '/project/src', base: 'index.ts', ext: '.ts', name: 'index', root: '' };

    const result = dependencyRelativePath(from, to);
    expect(result).toBe('../index');  // Ascends from util to the src main directory
  });

});