const noSaddlebagDate = require('./rules/no-saddlebag-date');
const noMoment = require('./rules/no-moment');
const noNewDateWithArgs = require('./rules/no-new-date-with-args');
const noNewDateWithoutArgs = require('./rules/no-new-date-without-args');

module.exports = {
  configs: {
    error: {
      plugins: ['skyscanner-dates'],
      rules: {
        'skyscanner-dates/no-saddlebag-date': 'error',
        'skyscanner-dates/no-moment': 'error',
        'skyscanner-dates/no-new-date-with-args': 'error',
        'skyscanner-dates/no-new-date-without-args': 'error',
      },
    },
    recommended: {
      plugins: ['skyscanner-dates'],
      rules: {
        'skyscanner-dates/no-saddlebag-date': 'error',
        'skyscanner-dates/no-moment': 'error',
        'skyscanner-dates/no-new-date-with-args': 'error',
        'skyscanner-dates/no-new-date-without-args': 'warn',
      },
    },
    warn: {
      plugins: ['skyscanner-dates'],
      rules: {
        'skyscanner-dates/no-saddlebag-date': 'warn',
        'skyscanner-dates/no-moment': 'warn',
        'skyscanner-dates/no-new-date-with-args': 'warn',
        'skyscanner-dates/no-new-date-without-args': 'warn',
      },
    },
  },
  rules: {
    'no-saddlebag-date': noSaddlebagDate,
    'no-moment': noMoment,
    'no-new-date-with-args': noNewDateWithArgs,
    'no-new-date-without-args': noNewDateWithoutArgs,
  },
};
