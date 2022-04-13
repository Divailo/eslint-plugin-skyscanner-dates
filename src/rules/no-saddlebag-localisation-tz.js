const { tzDrecated } = require('./messages');

module.exports = {
  create: (context) => ({
    CallExpression: (node) => {
      if (
        node.callee.name === 'require' &&
        node.arguments.length > 0 &&
        typeof node.arguments[0].value === 'string' &&
        node.arguments[0].value.indexOf(
          'saddlebag-localisation/src/timezone',
        ) === 0
      ) {
        context.report(
          node,
          tzDrecated(
            'performing timezone manipulation in saddlebag-localisation',
          ),
        );
      }
    },
    ImportDeclaration: (node) => {
      if (
        node.source.value.indexOf('saddlebag-localisation/src/timezone') >= 0
      ) {
        context.report(
          node,
          tzDrecated(
            'performing timezone manipulation in saddlebag-localisation',
          ),
        );
      }
    },
  }),
  meta: {
    docs: {
      description:
        'Stop performing timezone manipulation in saddlebag-localisation in favour of using date-fns-tz to do timezone manipulation work',
    },
    type: 'problem',
  },
};
