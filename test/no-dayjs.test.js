const { RuleTester } = require('eslint');

const { rules } = require('../src');

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
});

ruleTester.run('no-dayjs', rules['no-dayjs'], {
  valid: [
    {
      code: 'const test = require("test");',
    },
    {
      code: 'const test = require("test-dayjs");',
    },
  ],
  invalid: [
    {
      code: 'const dayjs = require("dayjs");',
      errors: [
        {
          message:
            'Deprecated require of dayjs package, use date-fns package instead.',
        },
      ],
    },
    {
      code: 'import dayjs from "dayjs";',
      errors: [
        {
          message:
            'Deprecated import of dayjs package, use date-fns package instead.',
        },
      ],
    },
  ],
});
