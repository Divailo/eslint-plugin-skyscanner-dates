# eslint-plugin-skyscanner-dates

[![Build Status](https://travis-ci.org/Skyscanner/eslint-plugin-skyscanner-dates.svg?branch=master)](https://travis-ci.org/Skyscanner/eslint-plugin-skyscanner-dates)


eslint plugin to handle safely dates.

## Features

This eslint plugin is meant to be used to avoid explicit usage/manupulation of date in JS, so to avoid issues with timezones.

## Installation

```bash
npm install --save-dev eslint-plugin-skyscanner-dates
```
## Rules

* rules **no-moment**, **no-dayjs**, **no-saddlebag-date** for stopping the use of [moment](https://github.com/moment/moment), [moment-timezone](https://github.com/moment/moment-timezone), [dayjs](https://github.com/iamkun/dayjs), [saddlebag-date](https://github.skyscannertools.net/web-engineering/saddlebag/tree/master/packages/saddlebag-date) date libraries.
* rule **no-date-fns-format** for stopping using the date formatting in [date-fns](https://github.com/date-fns/date-fns/) and stop using date formatting in [date-fns-tz](https://github.com/marnusw/date-fns-tz/).
* rule **no-saddlebag-localisation-tz** for stopping performing timezone manipulation in [saddlebag-localisation](https://github.skyscannertools.net/web-engineering/saddlebag/tree/master/packages/saddlebag-localisation/)
* rule **no-new-date-with-args** for stopping using `new Date("some string")`.

## Usage

Add to the `.eslintrc.json` file inside the root folder of a linted project:

All the rules will raise an error except `skyscanner-dates/no-new-date-without-args` which will be just a warning.
```
{
  "extends": "plugin:skyscanner-dates/recommended",
  "plugins": ["skyscanner-dates"]
}
```

Any rule failing will raise a blocking error.
```
{
  "extends": "plugin:skyscanner-dates/error",
  "plugins": ["skyscanner-dates"]
}
```

Any rule failing will just raise a warning.
```
{
  "extends": "plugin:skyscanner-dates/warn",
  "plugins": ["skyscanner-dates"]
}
```


Each rule can be configured on its own following `eslint` conventions:
```
{
  "plugins": ["skyscanner-dates"],
  "rules": {
    "skyscanner-dates/no-moment": "warn",
    "skyscanner-dates/no-dayjs": "warn",
    "skyscanner-dates/no-saddlebag-date": "warn",
    "skyscanner-dates/no-date-fns-format": "warn",
    "skyscanner-dates/no-saddlebag-localisation-tz": "warn"
    "skyscanner-dates/no-new-date-with-args": "warn",
    "skyscanner-dates/no-new-date-without-args": "warn"
  }
}
```

## API

Your favourite code editor should provide information about API using code completion.

API docs can be generated by cloning the project and running:

```bash
npm install
npm run build-docs
```

API docs will now be generated in `docs/api.md`.

## Developing

* `npm install` - installs dependencies
* `npm run lint` - runs linter
* `npm run build-docs` - produces API documentation in Markdown format in `docs/api.md`
* `npm test` - runs linter and tests

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) if you want to contribute.
