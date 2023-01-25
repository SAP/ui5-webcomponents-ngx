const semver = require('semver');
const fs = require('fs');
const gitSemverTags = require('git-semver-tags');

const {version: currentVersion} = JSON.parse(fs.readFileSync('./lerna.json', 'utf8'));

const semverTags = (maxVersion) => {
    return new Promise((resolve, reject) => {
        gitSemverTags({ tagPrefix: 'v', skipUnstable: false }, function (err, result) {
            if (err) {
                reject(err);
            } else {
                const firstLessIndex = result.findIndex((v) => semver.lt(v, maxVersion));
                resolve(result.slice(firstLessIndex, result.length));
            }
        });
    });
};

module.exports = async () => {
    const isPrerelease = !!semver.prerelease(currentVersion);
    const availableVersions = (await semverTags(currentVersion)).sort(semver.rcompare)
    let closestIndex = 0;
    if (!isPrerelease) {
        closestIndex = availableVersions.findIndex((v) => !semver.prerelease(v));
    }
    return {
        closest: availableVersions[closestIndex],
        tagsTillClosest: availableVersions.slice(0, closestIndex)
    };
};
