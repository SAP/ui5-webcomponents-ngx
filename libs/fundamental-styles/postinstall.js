const {executeSyncSchematic} = require('@ui5/webcomponents-ngx-schematics');

const currentDir = __dirname;
const confFiles = [
  `${currentDir}/wrapper.conf.ts`,
  `${currentDir}/theming.conf.ts`
]

executeSyncSchematic(confFiles, currentDir)
  .then(() => {
    console.log('Schematics executed successfully');
  })
  .catch((error) => {
    console.error('Error executing schematics', error);
  });

