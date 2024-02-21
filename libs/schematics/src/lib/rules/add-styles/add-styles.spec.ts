/* eslint-disable @typescript-eslint/no-explicit-any */
import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from "@angular-devkit/schematics/testing";
import path from "path";
import {
  cleanApplicationName,
  createCleanApplication,
  createCleanWorkspace
} from "../../testing-utils/create-clean-application";
import { addStyles } from './index';
import { CommonCssParts } from '../../config';
import { firstValueFrom } from "rxjs";

const collectionPath = path.join(__dirname, '../collection.json');

const allCommonCss = CommonCssParts.map(part => part.value);
const firstThreeCommonCss = allCommonCss.slice(0, 3);

describe('add-styles', () => {
  let runner: SchematicTestRunner;
  let tree: Tree;

  beforeEach(async () => {
    runner = new SchematicTestRunner('schematics', collectionPath);
    tree = await createCleanApplication({ standalone: true }, await createCleanWorkspace())
  });

  it('should add needed styles', async () => {
    tree = await executeAddStyles(tree, runner, allCommonCss);
    const angularJson = tree.readJson('angular.json') as Record<'projects', any>;
    const styles = angularJson.projects.test.architect.build.options.styles;

    allCommonCss.forEach((value) => {
      expect(styles).toContain(`node_modules/@fundamental-styles/common-css/dist/${value}.css`)
    });
  });

  it('should replace existing imported styles according to the required inputs', async () => {
    tree = await executeAddStyles(tree, runner, allCommonCss)
      .then(
        (t) => executeAddStyles(t, runner, firstThreeCommonCss)
      );
    const angularJson = tree.readJson('angular.json') as Record<'projects', any>;
    const styles = angularJson.projects.test.architect.build.options.styles;
    allCommonCss.forEach((value) => {
      if (firstThreeCommonCss.includes(value)) {
        expect(styles).toContain(`node_modules/@fundamental-styles/common-css/dist/${value}.css`)
      } else {
        expect(styles).not.toContain(`node_modules/@fundamental-styles/common-css/dist/${value}.css`)
      }
    });
  });
});

const executeAddStyles = async (tree: Tree, runner: SchematicTestRunner, commonCss: string[]) => {
  const rule = addStyles({
    project: cleanApplicationName,
    commonCss,
  } as any);
  return await firstValueFrom(runner.callRule(rule, tree));
};
