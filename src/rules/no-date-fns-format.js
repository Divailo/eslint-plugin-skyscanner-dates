const { deprecatedFormatting, deprecatedImportAll } = require('./messages');

module.exports = {
  create: (context) => ({
    CallExpression: (node) => {
      if (
        node.callee.name === 'require' &&
        node.arguments.length > 0 &&
        typeof node.arguments[0].value === 'string' &&
        node.arguments[0].value.indexOf('date-fns') === 0
      ) {
        // require the whole date-fns package,
        // like 'const DateFns = require("date-fns")' or 'const { format } = require("date-fns")'
        if (['date-fns', 'date-fns/fp'].includes(node.arguments[0].value)) {
          context.report(
            node,
            deprecatedImportAll('require of the whole date-fns package'),
          );
          // require format function, like 'const format = require("date-fns/format")'
        } else if (node.arguments[0].value.match(RegExp(/format/gi))) {
          context.report(
            node,
            deprecatedFormatting('require of date-fns for formatting'),
          );
        }
      }
    },
    ImportDeclaration: (node) => {
      if (node.source.value.indexOf('date-fns') === 0) {
        // import format function, like 'import format  from "date-fns/format"'
        if (node.source.value.match(RegExp(/format/gi))) {
          context.report(
            node,
            deprecatedFormatting('import of date-fns for formatting'),
          );
        } else if (node.specifiers) {
          node.specifiers.forEach((item) => {
            // import the whole date-fns package,like 'import dateFns from "date-fns"'
            if (
              ['date-fns', 'date-fns/fp'].includes(node.source.value) &&
              item.type === 'ImportDefaultSpecifier'
            ) {
              context.report(
                node,
                deprecatedImportAll('import of the whole date-fns package'),
              );
              // import format function, like 'import { format } from "date-fns"'
            } else if (item.local.name.match(RegExp(/format/gi))) {
              context.report(
                node,
                deprecatedFormatting('import of date-fns for formatting'),
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
