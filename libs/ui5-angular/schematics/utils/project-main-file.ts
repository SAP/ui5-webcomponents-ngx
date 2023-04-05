/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {JsonValue, Path} from '@angular-devkit/core';
import {ProjectDefinition} from '@angular-devkit/core/src/workspace';
import {SchematicsException} from '@angular-devkit/schematics';

/** Resolves the architect options for the build target of the given project. */
export function getProjectTargetOptions(
  project: ProjectDefinition,
  buildTarget: string,
): Record<string, JsonValue | undefined> {
  const options = project.targets?.get(buildTarget)?.options;

  if (!options) {
    throw new SchematicsException(
      `Cannot determine project target configuration for: ${buildTarget}.`,
    );
  }

  return options;
}

/** Looks for the main TypeScript file in the given project and returns its path. */
export function getProjectMainFile(project: ProjectDefinition): Path {
  const buildOptions = getProjectTargetOptions(project, 'build');

  if (!buildOptions['main']) {
    throw new SchematicsException(
      `Could not find the project main file inside of the ` +
      `workspace config (${project.sourceRoot})`,
    );
  }

  return buildOptions['main'] as Path;
}
