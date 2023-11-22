# Sync executor

The `sync` executor is a direct call to the `@ui5/webcomponents-wrapper` `wrapper` function,
but it adds the ability to run it with a partial `WrapperConfig`. `commit` is provided by the executor.
Executor provides `NxFsImplementation` as the default `fs` implementation.

The options for the executor are:
```
{
  // Other project.json information
  "targets": {
    // Other targets
    "sync": {
      "executor": "@ui5/webcomponents-nx:sync",
        "options": {
        "configFiles": [
          // The list of the files, relative to the workspace root, which contain the configs
          // for the `wrapper` function
          "path/to/config/file.js",
          "path/to/config/file.ts"
        ]
      },
      "outputs": [
          // The list of the files and directories which are expected to be generated with config files
      ]
    }
  }
}
```

In the config above, the `path/to/config/file.js` and `path/to/config/file.ts` are expected to export
default object or a function which returns an object with configuration for the `wrapper` function.

If you choose to use the function, you gain the ability to get the `NxFileSystemImplementation`
as a parameter and use it to read the files from the workspace.

The executor will delete before writing the files in the `outputs` list, so that every 
time you run the executor, you will get the clean state of the files and directories, synced with
the config files.
