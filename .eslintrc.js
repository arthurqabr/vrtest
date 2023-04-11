module.exports = {
  root: true,

  env: {
    browser: true,
    es2021: true,
    node: true,
  },

  extends: [
    'prettier',
  ],

  globals: {
    cordova: 'readonly',
    process: 'readonly',
    Capacitor: 'readonly',
    chrome: 'readonly',
  },

  rules: {
    'prefer-promise-reject-errors': 'off',

    quotes: ['warn', 'single', { avoidEscape: true }],

    'no-unused-vars': 'off',

    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

  },
};
