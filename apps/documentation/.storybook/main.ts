import {StorybookConfig} from '@storybook/angular';
const config: StorybookConfig = {
  staticDirs: [{
    from: '../src/assets',
    to: 'assets'
  }],
  stories: ['../src/app/**/*.stories.mdx', '../src/app/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-mdx-gfm',
    '@chromatic-com/storybook'
  ],
  framework: '@storybook/angular',
  docs: {
    defaultName: 'Docs'
  }
};
module.exports = config;
