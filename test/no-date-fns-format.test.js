const { RuleTester } = require('eslint');

const { rules } = require('../src');

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
});

ruleTester.run('no-date-fns-format', rules['no-date-fns-format'], {
  valid: [
    {
      code: 'const add = require("date-fns/add");',
    },
    {
      code: 'import { add } from "date-fns";',
    },
    {
      code: 'import add from "date-fns/add";',
    },
    {
      code: 'const test = require("test-date-fns");',
    },
    {
      code: 'import { test } from "date-fns-test";',
    },
    {
      code: 'import test from "test-date-fns/add";',
    },
  ],
  invalid: [
    {
      code: 'const format = require("date-fns/format");',
      errors: [
        {
          message:
            'Stop using date-fns for formatting, use saddlebag-localisation to do all formatting work.',
        },
      ],
    },
    {
      code: 'const formatDistance = require("date-fns/formatDistance");',
      errors: [
        {
          message:
            'Stop using date-fns for formatting, use saddlebag-localisation to do all formatting work.',
        },
      ],
    },
    {
      code: 'const intlFormat = require("date-fns/intlFormat");',
      errors: [
        {
          message:
            'Stop using date-fns for formatting, use saddlebag-localisation to do all formatting work.',
        },
      ],
    },
    {
      code: 'import { intlFormat } from "date-fns";',
      errors: [
        {
          message:
            'Stop using date-fns for formatting, use saddlebag-localisation to do all formatting work.',
        },
      ],
    },
    {
      code: 'import { format } from "date-fns";',
      errors: [
        {
          message:
            'Stop using date-fns for formatting, use saddlebag-localisation to do all formatting work.',
        },
      ],
    },
    {
      code: 'import { formatDistance } from "date-fns";',
      errors: [
        {
          message:
            'Stop using date-fns for formatting, use saddlebag-localisation to do all formatting work.',
        },
      ],
    },
    {
      code: 'import intlFormat from "date-fns/intlFormat";',
      errors: [
        {
          message:
            'Stop using date-fns for formatting, use saddlebag-localisation to do all formatting work.',
        },
      ],
    },
    {
      code: 'import format from "date-fns/format";',
      errors: [
        {
          message:
            'Stop using date-fns for formatting, use saddlebag-localisation to do all formatting work.',
        },
      ],
    },
    {
      code: 'import formatDistance from "date-fns/formatDistance";',
      errors: [
        {
          message:
            'Stop using date-fns for formatting, use saddlebag-localisation to do all formatting work.',
        },
      ],
    },
    {
      code: 'import dateFns from "date-fns"; dateFns.formatDistance();',
      errors: [
        {
          message:
            'Stop using date-fns for formatting, use saddlebag-localisation to do all formatting work.',
        },
      ],
    },
    {
      code: 'import dateFns from "date-fns"; dateFns.intlFormat();',
      errors: [
        {
          message:
            'Stop using date-fns for formatting, use saddlebag-localisation to do all formatting work.',
        },
      ],
    },
    {
      code: 'const dateFns = require("date-fns"); dateFns.formatDistance();',
      errors: [
        {
          message:
            'Stop using date-fns for formatting, use saddlebag-localisation to do all formatting work.',
        },
      ],
    },
    {
      code: 'const dateFns = require("date-fns"); dateFns.intlFormat();',
      errors: [
        {
          message:
            'Stop using date-fns for formatting, use saddlebag-localisation to do all formatting work.',
        },
      ],
    },
  ],
});
