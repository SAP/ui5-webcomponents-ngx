const {input, error, info} = require('@actions/core');
const { readdirSync } = require('fs');
const {npmPublish} = require('@jsdevtools/npm-publish');
const token = input('token');
const tag = input('tag');

const publish = async () => {
  for (const lib of readdirSync('dist/libs')) {
    const pkgJsonPath = `dist/libs/${lib}/package.json`;
    try {
      const result = await npmPublish({
        package: pkgJsonPath,
        access: 'public',
        tag,
        token,
      });
      info(`Published ${pkgJsonPath} with tag ${tag}. ${result.id}`);
    } catch (e) {
      error(e);
    }
  }
};

publish();
