const { deprecatedNewDate } = require('./messages');

module.exports = {
  create: (context) => ({
    NewExpression: (node) => {
      if (node.callee.name === 'Date' && node.arguments.length > 0) {
        context.report(node, deprecatedNewDate('new Date(args) expression'));
      }
    },
  }),
  meta: {
    docs: {
      description:
        'Deprecate new Date(args) expression, this can easily cause timezone issues. Use date-fns/parseISO instead.',
    },
    type: 'problem',
  },
};
