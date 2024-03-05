/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

// Workspace related rules and types
export {
  ProjectDefinition,
  TargetDefinition,
  WorkspaceDefinition,
  updateWorkspace,
  writeWorkspace,
} from './workspace';
export * from './standalone';
export * from './ng-ast-utils';

// Package dependency related rules and types
export { DependencyType, ExistingBehavior, InstallBehavior, addDependency } from './dependency';
