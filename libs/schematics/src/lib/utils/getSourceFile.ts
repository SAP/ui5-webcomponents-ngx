// Gets the ts source file from a path
import {SchematicsException, Tree} from "@angular-devkit/schematics";
import * as ts from "typescript";

export function getSourceFile(host: Tree, path: string): ts.SourceFile {
  const buffer = host.read(path);
  if (!buffer) {
    throw new SchematicsException(`Could not find file for path: ${path}`);
  }

  const text = buffer.toString('utf-8');

  return ts.createSourceFile(path, text, ts.ScriptTarget.Latest, true);
}
