module.exports = {
  deprecated: (issue) => `Deprecated ${issue}, use date-fns package instead.`,
  deprecatedImportAll: (issue) =>
    `Deprecated ${issue}, import/require the specific function`,
  formattingDeprecated: (issue) =>
    `Deprecated ${issue}, use saddlebag-localisation to do all formatting work.`,
  deprecatedTZ: (issue) =>
    `Deprecated ${issue}, use date-fns-tz to do timezone manipulation work instead`,
};
