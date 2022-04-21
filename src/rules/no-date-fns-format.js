const { deprecatedImportAll, formattingDeprecated } = require('./messages');

module.exports = {
  create: (context) => ({
    CallExpression: (node) => {
      if (
        node.callee.name === 'require' &&
        node.arguments.length > 0 &&
        typeof node.arguments[0].value === 'string' &&
        node.arguments[0].value.indexOf('date-fns') === 0
      ) {
        // require the whole module
        if (
          ['date-fns', 'date-fns/fp'].includes(node.arguments[0].value) &&
          node.parent.id.name !== undefined
        ) {
          context.report(
            node,
            deprecatedImportAll('require of the whole date-fns package'),
          );
          // require format function
        } else if (node.arguments[0].value.match(RegExp(/format/gi))) {
          context.report(
            node,
            formattingDeprecated('require of date-fns for formatting'),
          );
        }
      }
    },
    ImportDeclaration: (node) => {
      if (node.source.value.indexOf('date-fns') === 0) {
        if (node.specifiers) {
          node.specifiers.forEach((item) => {
            // import the whole date-fns
            if (
              ['date-fns', 'date-fns/fp'].includes(node.source.value) &&
              item.type === 'ImportDefaultSpecifier'
            ) {
              context.report(
                node,
                deprecatedImportAll('import of the whole date-fns package'),
              );
              // import format function
            } else if (item.local.name.match(RegExp(/format/gi))) {
              context.report(
                node,
                formattingDeprecated('import of date-fns for formatting'),
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
        'Deprecated the use of date-fns for formatting in favour of using saddlebag-localisation to do all formatting work',
    },
    type: 'problem',
  },
};
