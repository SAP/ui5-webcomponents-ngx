const fs = require("fs");
const {join} = require("path");

module.exports = (() => {
  const pathToLernaJson = require.resolve(join(__dirname, '../../../lerna.json'));
  try {
    const contents = fs.readFileSync(pathToLernaJson, 'utf8');
    const {version} = JSON.parse(contents);
    return version;
  } catch (e) {
    throw new Error(`Could not read lerna.json from ${pathToLernaJson}`);
  }
})();
