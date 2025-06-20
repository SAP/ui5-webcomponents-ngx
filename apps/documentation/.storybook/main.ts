import { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  staticDirs: [
    {
      from: '../src/assets',
      to: 'assets',
    },
  ],
  stories: ['../src/app/**/*.mdx', '../src/app/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-docs'],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  docs: {
    defaultName: 'Docs'
  },
};

export default config;
