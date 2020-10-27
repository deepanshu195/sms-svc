module.exports = {
    'src/**/*.{js,ts}': [
        // Run linters and fix files
        'npm run lint',
        // Add the update file again in the git
        'git add',

        "echo 'Lint Staged ran successfuly!",
    ],
};
