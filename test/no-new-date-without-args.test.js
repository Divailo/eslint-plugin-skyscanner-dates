const { RuleTester } = require('eslint');

const { rules } = require('../src');

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 6,
  },
});

ruleTester.run('no-new-date-without-args', rules['no-new-date-without-args'], {
  valid: [
    {
      code: 'const a = Date.now()',
    },
    {
      code: 'const date = new Date(1234);',
    },
    {
      code: 'const date = new Date("Fri Mar 08 2019 15:46:56 GMT+0000 (Greenwich Mean Time)");',
    },
    {
      code: 'const arg = 7; const date = new Date(arg);',
    },
  ],
  invalid: [
    {
      code: 'const date = new Date()',
      errors: [
        {
          message:
            'Deprecated new Date() expression, use saddlebag-date package instead.',
        },
      ],
    },
  ],
});
