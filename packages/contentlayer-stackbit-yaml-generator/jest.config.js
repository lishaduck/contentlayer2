/** @type { import('@jest/types').Config.InitialOptions } */
module.exports = {
  displayName: 'contentlayer-stackbit-yaml-generator',
  testEnvironment: 'node',
  testRegex: 'dist/cjs/.*spec.js',
  snapshotResolver: '<rootDir>/dist/cjs/__test__/__scripts__/snapshotResolver.js',
  resolver: '<rootDir>/dist/cjs/__test__/__scripts__/resolver.js',
}
