# Prepare executor

The `prepare` executor prepares your library output for publishing to npm.
The steps include compilation of the library schematics and tarball creation.
It is required to make this executor dependent on the `build` executor, so that
the dist folder is populated with the compiled schematics and the tarball is
created with compiled library.

The configuration looks like this:
```
{
  // Other project.json information
  "targets": {
    // Other targets
    "prepare": {
      "executor": "@ui5/webcomponents-nx:prepare",
        "options": {
          "distPath": "path/to/dist/folder/from/workspace-root",
          "schematics": {
            "defaultSchematics": "path/to/schematics/folder/from/workspace-root",
            "tsConfig": "path/to/tsconfig.json/from/workspace-root/for/schematics compilation",
            "collection": "schematics"
          }
      },
      "dependsOn": ["build"] // This can be configured in `nx.json` file
    }
  }
}
```

In the example above, the `options.schematics.defaultSchematics` folder contents will be copied to
`{projectRoot}/{options.schematics.collection}` and then compiled into the dist folder. This allows to 
have a separate place for commonly used schematics, which can be used in multiple
projects.
