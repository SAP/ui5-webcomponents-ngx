const {fundamentalGenerator} = require('@ui5/webcomponents-transformer');
const {join} = require('path');

function getFundamentalStyles(fs) {
  return fs.queryFiles(
    'node_modules/fundamental-styles/dist/js/*.mjs',
    []
  ).map(f => f.replace(/^node_modules\/(.*)/, '$1'));
}

const stylesComponentsGenerator = (styles) => fundamentalGenerator(styles, {
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

module.exports = (fs) => ({
  gatherer: () => getFundamentalStyles(fs),
  transformers: [stylesComponentsGenerator],
  logOutputFileNames: '.fd-components.json'
});
