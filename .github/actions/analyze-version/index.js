const {setOutput} = require('@actions/core');
const {readFileSync} = require('fs');
const semver = require('semver');
const {version} = JSON.parse(readFileSync('./lerna.json', 'utf8'));

const run = async () => {
  const prerelease = !!semver.prerelease(version, undefined);
  setOutput('isPrerelease', prerelease);
  setOutput('version', version);
  setOutput('releaseTag', prerelease ? 'prerelease' : 'latest');
}

run();
