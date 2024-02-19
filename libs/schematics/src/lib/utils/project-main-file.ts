/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { SchematicsException, Tree } from '@angular-devkit/schematics';
import { getProjectBuildTarget } from "./workspace";

/** Looks for the main TypeScript file in the given project and returns its path. */
export async function getProjectMainFile(tree: Tree, projectName: string): Promise<string> {
  const buildTarget = await getProjectBuildTarget(tree, projectName);
  const buildOptions = buildTarget.options;
  const mainFilePath = buildOptions && buildOptions['main'] as string;

  if (!mainFilePath) {
    throw new SchematicsException(
      `Could not find the project main file inside of the ` +
      `workspace config (${projectName})`,
    );
  }

  return mainFilePath;
}
