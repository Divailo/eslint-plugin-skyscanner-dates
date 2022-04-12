const { RuleTester } = require('eslint');

const { rules } = require('../src');

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
});

ruleTester.run('no-saddlebag-localisation-tz', rules['no-saddlebag-localisation-tz'], {
  valid: [{
    code: 'const test = require("test");',
  }, {
    code: 'const date = require("localisation/src/date");',
  }],
  invalid: [{
    code: 'const timezone = require("saddlebag-localisation/src/timezone");',
    errors: [{ message: 'Stop performing timezone manipulation in saddlebag-localisation, use date-fns-tz to do timezone manipulation work instead' }],
  }, {
    code: 'import "saddlebag-localisation/src/timezone";',
    errors: [{ message: 'Stop performing timezone manipulation in saddlebag-localisation, use date-fns-tz to do timezone manipulation work instead' }],
  }],
});
