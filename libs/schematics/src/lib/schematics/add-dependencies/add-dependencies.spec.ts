import { SchematicTestRunner } from "@angular-devkit/schematics/testing";
import { Tree } from '@angular-devkit/schematics';
import path from "path";
import { addDependencies } from './index';
import { firstValueFrom } from "rxjs";
import { NodeDependencyType } from "../../third_party/utility/dependencies";
import { cleanApplicationName } from "../../testing-utils/create-clean-application";

const collectionPath = path.join(__dirname, '../../collection.json');

describe('add-dependencies', () => {
  let tree: Tree;
  let runner: SchematicTestRunner;

  beforeEach(() => {
    tree = Tree.empty();
    tree.create('package.json', JSON.stringify({
      dependencies: {
        '@angular/core': '^17.0.4'
      }
    }));
    runner = new SchematicTestRunner('schematics', collectionPath);
  });

  it('should not add dependencies if there are compatible ones', async () => {
    const rule = addDependencies({
      project: cleanApplicationName,
      dependencies: [
        {
          type: NodeDependencyType.Default,
          name: '@angular/core',
          version: '^17.0.4'
        }
      ]
    });
    tree = await firstValueFrom(runner.callRule(rule, tree));

    const packageJson = tree.readJson('package.json') as { dependencies: Record<string, string> };

    expect(packageJson.dependencies['@angular/core']).toEqual('^17.0.4');
  });

  it('should update deps with compatible ones', async () => {
    const rule = addDependencies({
      project: cleanApplicationName,
      dependencies: [
        {
          type: NodeDependencyType.Default,
          name: '@angular/core',
          version: '^18.0.4'
        }
      ]
    });
    tree = await firstValueFrom(runner.callRule(rule, tree));

    const packageJson = tree.readJson('package.json') as { dependencies: Record<string, string> };

    expect(packageJson.dependencies['@angular/core']).toEqual('^18.0.4');
  });

});
