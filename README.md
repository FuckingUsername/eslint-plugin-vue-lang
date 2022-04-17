![npm](https://img.shields.io/npm/v/eslint-plugin-vue-lang)
![npm](https://img.shields.io/npm/dw/eslint-plugin-vue-lang)

# eslint-plugin-vue-lang

> The plugin allows `ESLint` configuration of `Vue` based on the `lang` attribute.

## Why did I do this?

When our projects are migrating from JS to TS, we will have JS and TS languages at the same time, and some configurations of TS are not suitable for JS, so we need to distinguish languages ​​to deal with Vue.

## How to deal with it?

Because we are migrating from JS to TS, so we leave the `.vue` extension to Vue whose lang attribute is `ts` or `tsx` by default, and modify the extension of Vue whose lang attribute is `js` or `jsx` to `.jsvue`, so that they can be processed separately through the `overrides` option of ESLint.

## Table of Contents

2. [Installation](#installation)
3. [Configuration](#configuration)
4. [License](#license)

## <a name="installation"></a>Installation

With `npm`:

```sh
npm install eslint-plugin-vue-lang --save-dev
```

With `yarn`:

```sh
yarn add eslint-plugin-vue-lang -D
```

## <a name="configuration"></a>Configuration

You should have a `.eslintrc` file in your directory. In it, you can configurate options like this:

```js
module.exports = {
  // ...
  plugins: [
    /**
     * Use the `eslint-plugin-vue-lang` plugin instead of
     * the `eslint-plugin-vue` plugin.
     */
    "vue-lang",
  ],
  overrides: [
    {
      // Add the `**/*.jsvue` pattern to handle Vue with JS lang.
      files: ["**/*.js", "**/*.jsx", "**/*.jsvue"],
      parser: "vue-eslint-parser",

      // Specific configration for JS lang only.
      parserOptions: {
        parser: "espree",
      },
      extends: [],
      rules: {},
    },
    {
      files: ["**/*.ts", "**/*.tsx", "**/*.vue"],
      parser: "vue-eslint-parser",

      // Specific configration for TS lang only.
      parserOptions: {
        parser: "@typescript-eslint/parser",
        project: "./tsconfig.json",
        extraFileExtensions: [".vue"],
      },
      extends: [],
      rules: {},
    },
  ],
};
```

## <a name="license"></a>License

[MIT](./LICENSE)
