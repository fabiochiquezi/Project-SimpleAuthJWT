/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    collectCoverageFrom: ['./src/**/*.ts'],
    verbose: false,
    bail: 1,
    roots: ['src'],
    coverageThreshold: {
      global: {
        branches: 0,
        functions: 0,
        lines: 0,
        statements: 0
      }
    },
    resetMocks: true,
    clearMocks: true,
    testMatch: [
        '**/**/*.test.ts'
    ],
    moduleDirectories: ['node_modules', 'src']
  }
