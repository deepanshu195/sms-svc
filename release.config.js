module.exports = {
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        [
            '@semantic-release/changelog',
            {
                changelogFile: 'docs/CHANGELOG.md',
                changelogTitle:
                    '# Changelog\n\nAll notable changes to this project will be documented in this file. See\n[Conventional Commits](https://conventionalcommits.org) for commit guidelines.',
            },
        ],
        [
            '@semantic-release/npm',
            {
                pkgRoot: 'dist',
                tarballDir: 'pack',
            },
        ],
        [
            '@semantic-release/github',
            {
                assets: ['pack/*.tgz'],
            },
        ],
        [
            '@semantic-release/git',
            {
                message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
            },
        ],
    ],
};
