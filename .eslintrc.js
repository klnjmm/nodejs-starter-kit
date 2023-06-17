module.exports = {
    extends: [
        'airbnb-base',
    ],
    rules: {
        indent: ['error', 4],
    },
    env: {
        jest: true,
    },
    ignorePatterns: ['jest.config.js'],
};
