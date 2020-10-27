// eslint ignore file:
//  ignore file is defined in "npm run lint" script as .gitignore.
//    If a custom is required, then add `.eslintignore` and remove `--ignore-path` in `npm run lint` command.
module.exports = {
    env: {
        node: true,
    },
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'prettier'],
    extends: [
        // 'airbnb-typescript/base',
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    rules: {
        'prettier/prettier': 'error',
        // As per "airbnb-typescript/base", they are triggered as "warning".
        'no-console': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
    },
    parserOptions: {
        ecmaVersion: 12, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
    },
};
