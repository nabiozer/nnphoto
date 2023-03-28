module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
        jest: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommend',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:prettier/recommended',
    ],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {jsx:true},
        ecmaVersion: 'latest',
        sourceType: 'module',
    },

    plugins: ['react', '@typescript-eslint', 'autofix', 'react-hooks'],
    ignorePatterns: ['/node_modules**'],
    rules: {
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'object', 'type'],
                pathGroups: [
                    {
                        pattern: '@/**/**',
                        group: 'parent',
                        position: 'before',
                    },
                ],
                alphabetize: { order: 'asc' },
            },
        ],
        'arrow-body-style': ['error', 'as-needed'],
        'react/self-closing-comp': [
            'error',
            {
                component: true,
                html: true,
            },
        ],
        'autofix/no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^_',
                ignoreRestSiblings: true,
                destructuredArrayIgnorePattern: '^_',
            },
        ],
        '@typescript-eslint/consistent-type-imports': [
            'error',
            {
                prefer: 'type-imports',
            },
        ],
        'no-restricted-imports': [
            'error',
            {
                patterns: ['../'],
            },
        ],
        'no-console': 'warn',
        '@typescript-eslint/ban-types' :'off',
        'react/jsx-uses-react' :'off',
        'react/react-in-jsx-scope' :'off', //import react : disable for new jsx transform
        'react/jsx-key':'off',
        'react/display-name' :'off',
        'typescript-eslint/no-explicit-any':'off',
        'typescript-eslint/no-unused-vars':'off',
        'no-use-before-define':['error',{variables:false}],
        'typescript-eslint/no-use-before-define':'off',
        'typescript-eslint/no-empty-interface':'off',
        'typescript-eslint/explicit-function-return-type':'off',
        'typescript-eslint/no-empty-function':'off',
        'typescript-eslint/explicit-module-boundary-types':'off',
        'typescript-eslint/interface-name-prefix':'off',
        'react-hooks/rules-of-hooks':'error',
        'react-hooks/exhaustive-deps':'warn',


    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};