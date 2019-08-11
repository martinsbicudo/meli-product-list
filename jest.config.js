module.exports = {
  verbose: true,
  testURL: 'http://localhost/',
  collectCoverage: true,
  moduleNameMapper: {
    '\\.(scss|css)$': 'identity-obj-proxy',
  },
  unmockedModulePathPatterns: [
    'react',
  ],
  setupFilesAfterEnv: ['<rootDir>/test/setup.js'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  testPathIgnorePatterns: ['<rootDir>/client/.next/'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
