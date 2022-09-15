const { deprecatedNewDate } = require('./messages');

module.exports = {
  create: (context) => ({
    NewExpression: (node) => {
      if (
        node.callee.name === 'Date' &&
        node.arguments.length > 0 &&
        typeof node.arguments[0].value === 'string'
      ) {
        context.report(
          node,
          deprecatedNewDate('new Date("some string") expression'),
        );
      }
    },
  }),
  meta: {
    docs: {
      description:
        'Deprecate new Date("some string") expression, this can easily cause timezone issues. Use date-fns/parseISO instead.',
    },
    type: 'problem',
  },
};
