const { deprecated } = require('./messages');

module.exports = {
  create: (context) => ({
    NewExpression: (node) => {
      if (node.callee.name === 'Date' && node.arguments.length > 0) {
        context.report(node, deprecated('new Date(args) expression'));
      }
    },
  }),
  meta: {
    docs: {
      description:
        'Deprecate new Date(args) expression in favour of date-fns npm package',
    },
    type: 'problem',
  },
};
