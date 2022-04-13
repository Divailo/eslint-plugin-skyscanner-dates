const { formattingDeprecated } = require('./messages');

module.exports = {
  create: (context) => ({
    CallExpression: (node) => {
      if (
        node.callee.name === 'require' &&
        node.arguments.length > 0 &&
        typeof node.arguments[0].value === 'string' &&
        node.arguments[0].value.match(RegExp(/date-fns\/(.*)?format/gi))
      ) {
        context.report(
          node,
          formattingDeprecated('using date-fns for formatting'),
        );
      }
    },
    ImportDeclaration: (node) => {
      if (node.source.value.indexOf('date-fns') >= 0) {
        if (node.source.value.match(RegExp(/format/gi))) {
          context.report(
            node,
            formattingDeprecated('using date-fns for formatting'),
          );
        } else if (node.specifiers) {
          node.specifiers.forEach((item) => {
            if (item.local.name.match(RegExp(/format/gi))) {
              context.report(
                node,
                formattingDeprecated('using date-fns for formatting'),
              );
            }
          });
        }
      }
    },
  }),
  meta: {
    docs: {
      description:
        'Stop using date-fns for formatting in favour of using saddlebag-localisation to do all formatting work',
    },
    type: 'problem',
  },
};
