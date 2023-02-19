import {join} from "path";
import {readdirSync, readFileSync} from "fs";
import {startCase} from "lodash";

describe('Snapshot test Fiori', () => {
  const basePath = 'libs/ui5-angular/fiori';
  const fioriFolders = readdirSync(basePath, {withFileTypes: true});
  fioriFolders.forEach((folder) => {
    const fileName = folder.isDirectory() ? join(basePath, folder.name,'index.ts') : join(basePath, folder.name);
    describe(startCase(folder.name), () => {
      it('should match the snapshot', function () {
        const fileContents = readFileSync(fileName, 'utf8');
        expect(fileContents).toMatchSnapshot();
      });
    });
  });
});
