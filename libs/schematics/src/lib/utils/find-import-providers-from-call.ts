import * as ts from "typescript";
import {findProvidersLiteral} from "./find-providers-literal";
import {findImportLocalName} from "./find-import-local-name";

/** Find a call to `importProvidersFrom` within a `bootstrapApplication` call. */
export function findImportProvidersFromCall(bootstrapCall: ts.CallExpression): ts.CallExpression | null {
  const providersLiteral = findProvidersLiteral(bootstrapCall);
  const importProvidersName = findImportLocalName(
    bootstrapCall.getSourceFile(),
    'importProvidersFrom',
    '@angular/core',
  );

  if (providersLiteral && importProvidersName) {
    for (const element of providersLiteral.elements) {
      // Look for an array element that calls the `importProvidersFrom` function.
      if (
        ts.isCallExpression(element) &&
        ts.isIdentifier(element.expression) &&
        element.expression.text === importProvidersName
      ) {
        return element;
      }
    }
  }

  return null;
}
