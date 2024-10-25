export default {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'scope-case': [0, 'always', 'lower-case'],
        'subject-case': [0, 'always', 'sentence-case'],
        'subject-empty': [0, 'never'],
    },
};
