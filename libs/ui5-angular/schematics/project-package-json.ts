
// eslint-disable-next-line @typescript-eslint/no-var-requires
export const projectPackageJson = require(require.resolve('@ui5/webcomponents-ngx/package.json')) as {peerDependencies: Record<string, string>};
