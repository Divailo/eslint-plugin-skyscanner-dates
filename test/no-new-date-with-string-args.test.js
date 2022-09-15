const { RuleTester } = require('eslint');

const { rules } = require('../src');

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 6,
  },
});

ruleTester.run(
  'no-new-date-with-string-args',
  rules['no-new-date-with-string-args'],
  {
    valid: [
      {
        code: 'const a = Date.now()',
      },
      {
        code: 'const date = new Date(1234);',
      },
      {
        code: 'const strDate = "Fri Mar 08 2019 15:46:56 GMT+0000 (Greenwich Mean Time)"; const date = new Date(strDate);',
      },
      {
        code: 'const arg = 7; const date = new Date(arg);',
      },
    ],
    invalid: [
      {
        code: 'const date = new Date("2022-05-30")',
        errors: [
          {
            message:
              'Deprecated new Date("some string") expression, this can easily cause timezone issues. Use date-fns/parseISO instead.',
          },
        ],
      },
    ],
  },
);
