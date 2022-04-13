const { deprecated } = require('./messages');

module.exports = {
  create: (context) => ({
    CallExpression: (node) => {
      if (node.callee.name === 'require'
          && node.arguments.length > 0
          && typeof node.arguments[0].value === 'string'
          && node.arguments[0].value.indexOf('dayjs') === 0
      ) {
        context.report(node, deprecated('require of dayjs package'));
      }
    },
    ImportDeclaration: (node) => {
      if (node.source.value.indexOf('dayjs') >= 0) {
        context.report(node, deprecated('import of dayjs package'));
      }
    },
  }),
  meta: {
    docs: {
      description: 'Deprecate the use of dayjs module in favour of date-fns npm package',
    },
    type: 'problem',
  },
};
