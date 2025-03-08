module.exports = {
  root: true,
  env: { node: true, es6: true },
  extends: [
    'eslint:recommended',
    "prettier"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
}
