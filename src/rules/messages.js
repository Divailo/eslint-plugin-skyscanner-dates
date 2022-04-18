module.exports = {
  deprecated: (issue) => `Deprecated ${issue}, use date-fns package instead.`,
  formattingDeprecated: (issue) =>
    `Stop ${issue}, use saddlebag-localisation to do all formatting work.`,
  tzDeprecated: (issue) =>
    `Stop ${issue}, use date-fns-tz to do timezone manipulation work instead`,
};
