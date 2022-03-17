const { deprecated } = require('./messages');

module.exports = {
  create: context => ({
    CallExpression: (node) => {
      if (node.callee.name === 'require'
          && node.arguments.length > 0
          && typeof node.arguments[0].value === 'string'
          && node.arguments[0].value.indexOf('saddlebag-date') === 0
      ) {
        context.report(node, deprecated('require of saddlebag-date package'));
      }
    },
    ImportDeclaration: (node) => {
      if (node.source.value.indexOf('saddlebag-date') >= 0) {
        context.report(node, deprecated('import of saddlebag-date package'));
      }
    },
  }),
  meta: {
    docs: {
      description: 'Deprecate the use of saddlebag-date module in favour of date-fns npm package',
    },
    type: 'problem',
  },
};
