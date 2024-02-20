import { FileSystemInterface } from '@ui5/webcomponents-transformer';
import { fundamentalGenerator } from '@ui5/webcomponents-transformer';
import { join } from 'path';
import { Ui5NgxTransformerConfig } from "@ui5/webcomponents-ngx-schematics";

export function getFundamentalStyles(fs: FileSystemInterface): string[] {
  return fs.queryFiles(
    'node_modules/fundamental-styles/dist/js/*.mjs',
    []
  ).map(f => f.replace(/^node_modules\/(.*)/, '$1'));
}

const stylesComponentsGenerator = (styles: string[]) => fundamentalGenerator(styles, {
  modules: [
    {
      fileName: 'fundamental-styles-components.module.ts',
      included: () => true
    }
  ],
  exportFileNameFactory: (sourceFilePath) => {
    return sourceFilePath.replace(/^fundamental-styles\/dist\/js\/(.*)\.mjs$/g, 'directives/$1/index.ts');
  },
  apfPathFactory: (sourceFilePath) => {
    if (sourceFilePath.endsWith('.ts')) {
      const pathSegments = sourceFilePath.split('/').slice(0, -1);
      return join('@fundamental-styles/theming-ngx', ...pathSegments);
    }
    return join('@fundamental-styles/theming-ngx', sourceFilePath.replace(/^fundamental-styles\/dist\/js\/(.*)\.mjs$/, 'directives/$1'));
  }
});

export default ((fs) => ({
    gatherer: () => getFundamentalStyles(fs),
    transformers: [stylesComponentsGenerator]
  })
) as Ui5NgxTransformerConfig<string>;
