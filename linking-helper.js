const {sync} = require('fast-glob');
const publish = require('@jsdevtools/npm-publish');
const {execSync} = require("child_process");
const {readFileSync, writeFileSync} = require("fs");
const {dirname} = require("path");
// const {readFileSync} = require("fs");
const {version: projectVersion} = require('./lerna.json');
const sources = sync('dist/libs/*/package.json');

execSync('rm -rf ' + sources.map(pkgJsonPath => {
  const pkgJson = JSON.parse(readFileSync(pkgJsonPath, 'utf-8'));
  return `/Users/giorgicheishvili/.local/share/verdaccio/storage/${pkgJson.name}`;
}).join(' '));

console.log('Removed old packages');

sources.forEach(pkgJsonPath => {
  const dir = dirname(pkgJsonPath);
  const files = sync(`${dir}/**/*`, {dot: true, onlyFiles: true});
  files.forEach(file => {
    const content = readFileSync(file, 'utf-8');
    const newContent = content.replace(new RegExp(projectVersion, 'g'), '0.3.0');
    if (content !== newContent) {
      console.log(`Updating ${file}`);
      writeFileSync(file, newContent, 'utf-8');
    }
  })
})

const publishPromises = sources.map(
  pkgJsonPath => publish.npmPublish({
    token: 'fooBar',
    package: pkgJsonPath,
    registry: 'http://localhost:4873',
    access: 'public'
  }).then(({id}) => console.log(`Published ${id}`))
);

Promise.all(publishPromises).then(() => {
  console.log('All packages published');
});
