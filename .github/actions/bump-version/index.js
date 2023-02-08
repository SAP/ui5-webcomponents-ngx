const semver = require('semver');
const core = require('@actions/core');
const gitSemverTags = require('../helpers/git-semver-tags');
const {getInput} = require('@actions/core');
const currentVersion = require('../helpers/current-version');
const releaseType = core.getInput('isPrerelease') !== 'false' ? 'prerelease' : 'release';
const isHotfix = getInput('isHotfix') !== 'false';
const prereleaseRequested = releaseType === 'prerelease';
const isManual = getInput('isManual') !== 'false';
const bumpedRelease = require('../helpers/bumped-release');

const getReleaseTag = async (hotfix, preRelease, version) => {
  if (hotfix) {
    const latestVersion = (await gitSemverTags())[0];
    if (semver.lt(latestVersion, version)) {
      return 'latest';
    }
    return 'hotfix';
  }
  if (preRelease) {
    return 'prerelease';
  }
  return 'latest';
}

const run = async () => {
  if (isManual) {
    const isPrerelease = !!semver.prerelease(currentVersion, undefined)
    core.setOutput('newVersion', currentVersion);
    core.setOutput('isPrerelease', isPrerelease.toString());
    core.setOutput('releaseTag', await getReleaseTag(isHotfix, isPrerelease, currentVersion));
    core.info(`new version is ${currentVersion}`);
    return;
  }
  const release = await bumpedRelease({prereleaseRequested, currentVersion});
  core.info(`${release.reason}, therefore release type should be ${release.releaseType}`);

  const newVersion =
    semver.valid(release.releaseType, undefined) ||
    semver.inc(currentVersion, release.releaseType, prereleaseRequested, 'rc');

  core.info(`new version is ${newVersion}`);
  const isPrerelease = !!semver.prerelease(newVersion, undefined);
  core.setOutput('newVersion', newVersion);
  core.setOutput('isPrerelease', isPrerelease.toString());
  core.setOutput('releaseTag', await getReleaseTag(isHotfix, isPrerelease, newVersion));
};

run();
