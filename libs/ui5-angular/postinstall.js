const {fsTransformer} = require('@ui5/webcomponents-transformer');
const wrapperConf = require('./wrapper.conf');
const themingConf = require('./theming.conf');

fsTransformer({basePath: __dirname, conf: [wrapperConf, themingConf]})
  .then(() => {
    console.log('Schematics executed successfully');
  })
  .catch((error) => {
    console.error('Error executing schematics', error);
  });

