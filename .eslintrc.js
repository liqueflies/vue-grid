module.exports = {
  extends: ['plugin:vue-libs/recommended'],
  root: true,
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    'browser': true,
  },
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-unused-vars': 1,
    'camelcase': 0,
    'space-before-function-paren': 0,
  }
}