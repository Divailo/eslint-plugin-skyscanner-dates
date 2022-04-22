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
      code: 'const add = require("date-fns/fp/add");',
    },
    {
      code: 'const { add } = require("xxx-date-fns-xxx/add");',
    },
    {
      code: 'const dateFnsTZ = require("date-fns-tz");',
    },
    {
      code: 'const { zonedTimeToUtc } = require("date-fns-tz");',
    },
    {
      code: 'const test = require("test-date-fns");',
    },
    {
      code: 'import { add } from "date-fns";',
    },
    {
      code: 'import add from "date-fns/add";',
    },
    {
      code: 'import { add } from "date-fns/fp";',
    },
    {
      code: 'import add from "date-fns/fp/add";',
    },
    {
      code: 'import dateFnsTZ from "date-fns-tz";',
    },
    {
      code: 'import { zonedTimeToUtc } from "date-fns-tz";',
    },
    {
      code: 'import { test } from "test-date-fns";',
    },
    {
      code: 'import add from "xxx-date-fns-xxs/add";',
    },
  ],
  invalid: [
    {
      code: 'const format = require("date-fns/format");',
      errors: [
        {
          message:
            'Deprecated require of date-fns for formatting, use saddlebag-localisation to do all formatting work.',
        },
      ],
    },
    {
      code: 'const { format } = require("date-fns");',
      errors: [
        {
          message:
            'Deprecated require of the whole date-fns package, in favour of import/require the specific function',
        },
      ],
    },
    {
      code: 'const format = require("date-fns/fp/format");',
      errors: [
        {
          message:
            'Deprecated require of date-fns for formatting, use saddlebag-localisation to do all formatting work.',
        },
      ],
    },
    {
      code: 'const { format } = require("date-fns/fp");',
      errors: [
        {
          message:
            'Deprecated require of the whole date-fns package, in favour of import/require the specific function',
        },
      ],
    },
    {
      code: 'const date = require("date-fns/format");',
      errors: [
        {
          message:
            'Deprecated require of date-fns for formatting, use saddlebag-localisation to do all formatting work.',
        },
      ],
    },
    {
      code: 'const formatDistance = require("date-fns/formatDistance");',
      errors: [
        {
          message:
            'Deprecated require of date-fns for formatting, use saddlebag-localisation to do all formatting work.',
        },
      ],
    },
    {
      code: 'const intlFormat = require("date-fns/intlFormat");',
      errors: [
        {
          message:
            'Deprecated require of date-fns for formatting, use saddlebag-localisation to do all formatting work.',
        },
      ],
    },
    {
      code: 'import { intlFormat } from "date-fns";',
      errors: [
        {
          message:
            'Deprecated import of date-fns for formatting, use saddlebag-localisation to do all formatting work.',
        },
      ],
    },
    {
      code: 'import { intlFormat } from "date-fns/fp";',
      errors: [
        {
          message:
            'Deprecated import of date-fns for formatting, use saddlebag-localisation to do all formatting work.',
        },
      ],
    },
    {
      code: 'import { format } from "date-fns";',
      errors: [
        {
          message:
            'Deprecated import of date-fns for formatting, use saddlebag-localisation to do all formatting work.',
        },
      ],
    },
    {
      code: 'import { format } from "date-fns-tz";',
      errors: [
        {
          message:
            'Deprecated import of date-fns for formatting, use saddlebag-localisation to do all formatting work.',
        },
      ],
    },
    {
      code: 'import { formatDistance } from "date-fns";',
      errors: [
        {
          message:
            'Deprecated import of date-fns for formatting, use saddlebag-localisation to do all formatting work.',
        },
      ],
    },
    {
      code: 'import intlFormat from "date-fns/intlFormat";',
      errors: [
        {
          message:
            'Deprecated import of date-fns for formatting, use saddlebag-localisation to do all formatting work.',
        },
      ],
    },
    {
      code: 'import intlFormat from "date-fns/intlFormat/pf";',
      errors: [
        {
          message:
            'Deprecated import of date-fns for formatting, use saddlebag-localisation to do all formatting work.',
        },
      ],
    },
    {
      code: 'import format from "date-fns/format";',
      errors: [
        {
          message:
            'Deprecated import of date-fns for formatting, use saddlebag-localisation to do all formatting work.',
        },
      ],
    },
    {
      code: 'import formatDistance from "date-fns/formatDistance";',
      errors: [
        {
          message:
            'Deprecated import of date-fns for formatting, use saddlebag-localisation to do all formatting work.',
        },
      ],
    },
    {
      code: 'import dateFns from "date-fns";',
      errors: [
        {
          message:
            'Deprecated import of the whole date-fns package, in favour of import/require the specific function',
        },
      ],
    },
    {
      code: 'import dateFns from "date-fns/fp";',
      errors: [
        {
          message:
            'Deprecated import of the whole date-fns package, in favour of import/require the specific function',
        },
      ],
    },
    {
      code: 'const dateFns = require("date-fns");',
      errors: [
        {
          message:
            'Deprecated require of the whole date-fns package, in favour of import/require the specific function',
        },
      ],
    },
    {
      code: 'const dateFns = require("date-fns/fp");',
      errors: [
        {
          message:
            'Deprecated require of the whole date-fns package, in favour of import/require the specific function',
        },
      ],
    },
  ],
});
