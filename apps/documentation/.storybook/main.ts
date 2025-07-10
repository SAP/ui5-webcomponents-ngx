import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import { StorybookConfig } from '@storybook/angular';

const require = createRequire(import.meta.url);

const config: StorybookConfig = {
  staticDirs: [
    {
      from: '../src/assets',
      to: 'assets',
    },
  ],
  stories: ['../src/app/**/*.mdx', '../src/app/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [getAbsolutePath("@storybook/addon-docs")],
  framework: {
    name: getAbsolutePath("@storybook/angular"),
    options: {},
  },
  docs: {
    defaultName: 'Docs'
  },
};

export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
