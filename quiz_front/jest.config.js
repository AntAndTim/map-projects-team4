module.exports = {
    roots: ['<rootDir>/src'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
    moduleNameMapper: {
        '\\.(?:css)$': '<rootDir>/src/test/cssMock.js',
    },
    setupFiles: [
        '<rootDir>/src/test/setup.ts',
    ],
    snapshotSerializers: [
        'enzyme-to-json/serializer',
    ],
};