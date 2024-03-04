import { SchematicTestRunner } from "@angular-devkit/schematics/testing";
import { Tree } from "@angular-devkit/schematics";
import {
  cleanApplicationName,
  createCleanApplication,
  createCleanWorkspace
} from "../../testing-utils/create-clean-application";
import path from "path";
import { addTheming } from './index';
import { firstValueFrom } from "rxjs";

const collectionPath = path.join(__dirname, '../collection.json');

describe('add-theming', () => {
  let runner: SchematicTestRunner;
  let tree: Tree;

  beforeEach(async () => {
    runner = new SchematicTestRunner('schematics', collectionPath);
  });

  describe('standalone', () => {
    beforeEach(async () => {
      tree = await createCleanApplication({ standalone: true }, await createCleanWorkspace())
    });
    it('should add to the standalone app', async () => {
      const rule = addTheming({
        theming: true,
        defaultTheme: 'sap_fiori_3',
        project: cleanApplicationName,
        commonCss: []
      });
      tree = await firstValueFrom(runner.callRule(rule, tree));
      const appConfigTs = tree.readText(`/${cleanApplicationName}/src/app/app.config.ts`);
      expect(appConfigTs).toContain('importProvidersFrom(Ui5ThemingModule.forRoot({defaultTheme: \'sap_fiori_3\'}))');
      expect(appConfigTs).toContain('import { Ui5ThemingModule } from \'@ui5/theming-ngx\'');
    });
  });
  describe('non-standalone', () => {
    beforeEach(async () => {
      tree = await createCleanApplication({ standalone: false }, await createCleanWorkspace())
    });
    it('should add to the non-standalone app', async () => {
      const rule = addTheming({
        theming: true,
        defaultTheme: 'sap_fiori_3',
        project: cleanApplicationName,
        commonCss: []
      });
      tree = await firstValueFrom(runner.callRule(rule, tree));
      const appModuleTs = tree.readText(`/${cleanApplicationName}/src/app/app.module.ts`);
      expect(appModuleTs).toContain('import { Ui5ThemingModule } from \'@ui5/theming-ngx\'');
      expect(appModuleTs).toContain('Ui5ThemingModule.forRoot({defaultTheme: \'sap_fiori_3\'})');
    });
  });
});
