export default ({entryFile, allowedNonPeerDependencies}) => {
  return {
    "$schema": "../../ng-packagr/ng-package.schema.json",
    "dest": "./dist",
    "lib": {
      entryFile
    },
    allowedNonPeerDependencies
  }
}
