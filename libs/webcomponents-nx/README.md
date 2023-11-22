# webcomponents-nx

The library provides executors and generators for running the `@ui5/webcomponents-wrapper`
functionality in Nx monorepos.

The main executor is the `sync` executor, which is a direct call to the `@ui5/webcomponents-wrapper` `wrapper`
function, but it adds the ability to run it with a partial `WrapperConfig`. `commit` is provided by the
executor. Executor provides `NxFsImplementation` as the default `fs` implementation.
