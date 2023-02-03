// @filename executor.js
// @see https://github.com/nrwl/nx/issues/9823#issuecomment-1207397040
const { workspaceRoot } = require('nx/src/utils/workspace-root');
const { registerTsProject } = require('nx/src/utils/register');

registerTsProject(workspaceRoot, 'tsconfig.base.json');

module.exports = require('./executor.ts');
