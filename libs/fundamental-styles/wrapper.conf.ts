import {WrapperConfig} from '@ui5/webcomponents-wrapper';
import {fundamentalGenerator} from '@ui5/webcomponents-ngx-generator';
import {NodeFsImplementation} from '@ui5/webcomponents-wrapper-fs-commit';
import {join} from 'path';

export function getFundamentalStyles(): string[] {
  const fs = new NodeFsImplementation();

  return fs.queryFiles(
    'node_modules/fundamental-styles/dist/js/*.mjs',
    []
  ).map(f => f.replace(/^node_modules\/(.*)/, '$1'));
}

export default {
  getComponents: () => getFundamentalStyles(),
  generator: (styles) =>
    fundamentalGenerator(styles, {
      modules: [
        {
          fileName: 'fundamental-styles-components.module.ts',
          included: () => true
        }
      ],
      exportFileNameFactory: (sourceFilePath) => {
        return sourceFilePath.replace(/^fundamental-styles\/dist\/js\/(.*)\.mjs$/g, 'components/$1/index.ts');
      },
      apfPathFactory: (sourceFilePath) => {
        if (sourceFilePath.endsWith('.ts')) {
          const pathSegments = sourceFilePath.split('/').slice(0, -1);
          return join('@fundamental-styles/theming-ngx', ...pathSegments);
        }
        return join('@fundamental-styles/theming-ngx', sourceFilePath.replace(/^fundamental-styles\/dist\/js\/(.*)\.mjs$/, 'components/$1'));
      }
    }),
} as Partial<WrapperConfig<string>>;
