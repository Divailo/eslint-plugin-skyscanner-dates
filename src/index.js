const noSaddlebagDate = require('./rules/no-saddlebag-date');
const noMoment = require('./rules/no-moment');
const noNewDateWithArgs = require('./rules/no-new-date-with-args');
const noNewDateWithStringArgs = require('./rules/no-new-date-with-string-args');
const noDayJS = require('./rules/no-dayjs');
const noDateFnsFormat = require('./rules/no-date-fns-format');
const noSaddlebagLocalisationTZ = require('./rules/no-saddlebag-localisation-tz');

module.exports = {
  configs: {
    error: {
      plugins: ['skyscanner-dates'],
      rules: {
        'skyscanner-dates/no-saddlebag-date': 'error',
        'skyscanner-dates/no-moment': 'error',
        'skyscanner-dates/no-dayjs': 'error',
        'skyscanner-dates/no-new-date-with-args': 'error',
        'skyscanner-dates/no-new-date-with-string-args': 'error',
        'skyscanner-dates/no-date-fns-format': 'error',
        'skyscanner-dates/no-saddlebag-localisation-tz': 'error',
      },
    },
    recommended: {
      plugins: ['skyscanner-dates'],
      rules: {
        'skyscanner-dates/no-saddlebag-date': 'warn',
        'skyscanner-dates/no-moment': 'error',
        'skyscanner-dates/no-dayjs': 'warn',
        'skyscanner-dates/no-new-date-with-args': 'warn',
        'skyscanner-dates/no-new-date-with-string-args': 'error',
        'skyscanner-dates/no-date-fns-format': 'warn',
        'skyscanner-dates/no-saddlebag-localisation-tz': 'warn',
      },
    },
    warn: {
      plugins: ['skyscanner-dates'],
      rules: {
        'skyscanner-dates/no-saddlebag-date': 'warn',
        'skyscanner-dates/no-moment': 'warn',
        'skyscanner-dates/no-dayjs': 'warn',
        'skyscanner-dates/no-new-date-with-args': 'warn',
        'skyscanner-dates/no-new-date-with-string-args': 'warn',
        'skyscanner-dates/no-date-fns-format': 'warn',
        'skyscanner-dates/no-saddlebag-localisation-tz': 'warn',
      },
    },
  },
  rules: {
    'no-saddlebag-date': noSaddlebagDate,
    'no-moment': noMoment,
    'no-new-date-with-args': noNewDateWithArgs,
    'no-new-date-with-string-args': noNewDateWithStringArgs,
    'no-dayjs': noDayJS,
    'no-date-fns-format': noDateFnsFormat,
    'no-saddlebag-localisation-tz': noSaddlebagLocalisationTZ,
  },
};
