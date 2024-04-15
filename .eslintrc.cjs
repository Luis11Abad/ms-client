module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
    },
    extends: ['@nuxt/eslint-config', 'plugin:prettier/recommended'],
    plugins: [],
    rules: {
        'vue/multi-word-component-names': 'off',
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
                tabWidth: 4,
                singleQuote: true,
                semi: false,
            },
        ],
    },
}
