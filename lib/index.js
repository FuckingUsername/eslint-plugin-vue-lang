const vueProcessor = require('eslint-plugin-vue/lib/processor');

const tsLangRegex = /<script\s+.*\s+lang\s*=\s*"(?<lang>tsx?)".*>/;

const processor = {
  ...vueProcessor,

  /**
   * Override vue-processor's `preprocess` hook.
   * @override
   */
  preprocess(text, filename) {
    const matches = text.match(tsLangRegex);
    const isTSLang = Boolean(matches);

    // If it's TS lang, we keep `.vue` ext.
    if (isTSLang) {
      return vueProcessor.preprocess(text);
    }

    // If it's JS lang, we modify ext to `.jsvue`, so that we can configrate ESLint for JS lang.
    return [{
      text,
      filename: filename.replace(/\.vue$/, '.jsvue'),
    }];
  },
};

module.exports = {
  processors: {
    '.vue': processor,
  },
};
