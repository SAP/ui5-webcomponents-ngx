const semver = require('semver');
const {exec} = require("child_process");

module.exports = (maxVersion = null, skipUnstable = false) => {
  return new Promise((resolve, reject) => {
    exec('git tag -l', {maxBuffer: Infinity}, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data.split('\n').filter((tag) => {
          const valid = semver.valid(tag);
          if (!valid) {
            return false;
          }
          if (skipUnstable && semver.prerelease(tag)) {
            return false;
          }
          return !(maxVersion && semver.gt(tag, maxVersion));

        }).sort(semver.rcompare));
      }
    })
  });
};
