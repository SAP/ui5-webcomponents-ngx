/* eslint-disable */
export default {
  displayName: 'schematics',
  preset: '../../jest.preset.js',
  testEnvironment: 'node',
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest'
  },
  transformIgnorePatterns: [
    "node_modules/(?!(inquirer)/)"
  ],
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/libs/schematics',
};
