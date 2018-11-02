module.exports = {
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    './styles': '<rootDir>/__mocks__/styleMock.js'
  },
  collectCoverage: true, // Set to true for code coverage
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/config/*.js'
  ]
};
