const { RuleTester } = require('eslint');

const { rules } = require('../src');

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
});

ruleTester.run('no-saddlebag-date', rules['no-saddlebag-date'], {
  valid: [{
    code: 'const test = require("test");',
  }, {
    code: 'const test = require("test-saddlebag-date");',
  }],
  invalid: [{
    code: 'const date = require("saddlebag-date");',
    errors: [{ message: 'Deprecated require of saddlebag-date package, use date-fns package instead.' }],
  }, {
    code: 'import date from "saddlebag-date";',
    errors: [{ message: 'Deprecated import of saddlebag-date package, use date-fns package instead.' }],
  }],
});
