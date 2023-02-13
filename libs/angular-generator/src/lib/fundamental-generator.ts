import { GeneratedFile } from '@ui5/webcomponents-wrapper';
import { FundamentalStylesLibraryGenerator } from './fundamental-styles/generator';
import { IndexFile } from './index_file';

export function fundamentalGenerator(styles: string[]) {
  const fundamentalStyes = new FundamentalStylesLibraryGenerator(styles);
  const directives: Record<string, GeneratedFile> = Object.values(fundamentalStyes.directives).reduce(
    (acc, current) => {
      acc[current.directive.path] = current.directive;
      acc[current.package.path] = current.package;
      return acc;
    },
    {}
  );
  const indexFile = new IndexFile([
    ...Object.values(fundamentalStyes.directives),
    fundamentalStyes.module,
    fundamentalStyes.theming,
    ...Object.values(directives)
  ]);

  return {
    indexFile,
    ...fundamentalStyes.directives,
    [fundamentalStyes.module.path]: fundamentalStyes.module,
    [fundamentalStyes.theming.path]: fundamentalStyes.theming,
    ...directives
  };
}
