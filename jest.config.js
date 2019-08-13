module.exports = {
  verbose: true,
  testURL: 'http://localhost/',
  collectCoverage: true,
  moduleNameMapper: {
    '\\.(scss|css)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/test/assets-transformer.js',
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
