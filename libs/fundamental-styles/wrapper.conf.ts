import { WrapperConfig } from '@ui5/webcomponents-wrapper';
import {
  fundamentalGenerator
} from '@ui5/webcomponents-ngx-generator';
import { NodeFsImplementation } from '@ui5/webcomponents-wrapper-fs-commit';

export function getFundamentalStyles(): string[] {
  const fs = new NodeFsImplementation();

  const cssFiles = fs.queryFiles(
    'node_modules/fundamental-styles/dist/*.css',
    []
  );

  return cssFiles;
}

export default {
  getComponents: () => getFundamentalStyles(),
  generator: (styles) =>
    fundamentalGenerator(styles),
} as Partial<WrapperConfig<string>>;
