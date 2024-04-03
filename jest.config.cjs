module.exports = {
  bail: true,
  roots: ['src'],
  testMatch: ['<rootDir>/src/renderer/src/**/*.{test,spec}.{ts,tsx}'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/renderer/src/$1',
    '\\.(css|less|scss|sass)$': 'jest-css-modules'
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true
}
