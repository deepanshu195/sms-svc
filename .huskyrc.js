module.exports = {
    hooks: {
        'pre-commit': 'lint-staged -c ./.lintstaged.js',
        'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
    },
};
