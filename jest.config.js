module.exports = {
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testMatch: ['**/*.test.ts{,x}'],
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', 'src'],
  transformIgnorePatterns: ['node_modules/(?!.*)'],
  modulePathIgnorePatterns: [
    'build/',
    '.ci',
  ],
  testTimeout: 5000,
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)(\\?inline)?$':
      'jest-transform-stub',
    '\\.svg$': 'svg-jest',
  },
  collectCoverageFrom: [
    '**/*.ts{,x}',
    '!**/index.ts{,x}',
    '!**/constants.ts',
    '!**/constants/**',
    '!**/styles.ts{,x}',
    '!**/styled.ts{,x}',
    '!**/types.ts',
    '!**/typings.ts',
    '!**/typings/**',
    '!src/**/typings/**',
    '!**/*.d.ts',
    '!**/tests/**',
    '!**/context/**',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: -1,
    },
  },
  coverageReporters: ['lcov', 'text', 'cobertura'],
  clearMocks: true,
};
