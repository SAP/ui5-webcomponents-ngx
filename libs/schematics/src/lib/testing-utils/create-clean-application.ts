import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import { Schema } from '@schematics/angular/application/schema';

export const cleanApplicationName = 'test';

export const angularSchematics = new SchematicTestRunner(
    '@schematics/angular',
    require.resolve('@schematics/angular/collection.json')
);

export const createCleanWorkspace = (tree?: Tree): Promise<Tree> =>
    angularSchematics.runSchematic(
        'workspace',
        {
            name: 'workspace',
            version: '1'
        },
        tree || Tree.empty()
    );

export const createCleanApplication = (options: Partial<Schema>, tree: Tree): Promise<Tree> =>
    angularSchematics.runSchematic(
        'application',
        {
            name: cleanApplicationName,
            standalone: true,
            strict: false,
            inlineStyle: true,
            inlineTemplate: true,
            routing: false,
            skipTests: true,
            minimal: true,
            ssr: false,
            ...options
        },
        tree
    );
