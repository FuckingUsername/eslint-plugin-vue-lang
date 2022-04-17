const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  root: true,
  env: {
    node: true,
    es2021: true,
  },
  extends: ['eslint:recommended'],
  rules: {
    /** ----Possible Problems---- */
    // 数组方法（`forEach` 除外）必须有返回值
    'array-callback-return': 'error',

    // 禁止重复模块导入
    'no-duplicate-imports': 'error',

    // 禁止和自身比较
    'no-self-compare': 'error',

    // 禁止不变的循环控制条件
    'no-unmodified-loop-condition': 'error',

    // 禁止变量声明前使用变量（`function` 除外）
    'no-use-before-define': ['error', {
      functions: false,
    }],

    /** ----Suggestions---- */
    // 强制所有控制语句使用一致的括号风格
    curly: 'error',

    // 强制 `default` 语句放置在最后
    'default-case-last': 'error',

    // 强制缺省参数放置在最后
    'default-param-last': 'error',

    // 强制使用 `===` 和 `!==`
    eqeqeq: 'error',

    // 按需要求函数具名，提高错误调用栈可读性
    'func-names': ['warn', 'as-needed'],

    // `getter` 和 `setter` 写在一起，且 `getter` 在前
    'grouped-accessor-pairs': ['error', 'getBeforeSet'],

    // 限制函数入参不超过 4 个
    'max-params': ['error', { max: 4 }],

    // 禁用 `alert`、`confirm`、`prompt`
    'no-alert': 'error',

    // 禁用 `Array` 构造函数，单参数有歧义
    'no-array-constructor': 'error',

    // 禁用 `callee` 和 `caller`
    'no-caller': 'error',

    // 警告 `console` 使用
    'no-console': 'warn',

    // 禁止在可能与比较操作符相混淆的地方使用箭头函数
    'no-confusing-arrow': ['error', { allowParens: true }],

    // 警告空函数使用，建议使用 `lodash-es` 的 `noop`，语义更清晰
    'no-empty-function': 'warn',

    // 禁用 `eval`
    'no-eval': 'error',

    // 禁止扩展原生对象
    'no-extend-native': 'error',

    // 禁止不必要的 `.bind()` 调用
    'no-extra-bind': 'error',

    // 禁止数字字面量中使用前导和末尾小数点
    'no-floating-decimal': 'error',

    // 禁止使用短符号进行类型转换
    'no-implicit-coercion': 'error',

    // 禁止在 `setTimeout` 中使用字符串参数
    'no-implied-eval': 'error',

    // 禁止无意义代码块
    'no-lone-blocks': 'error',

    // 禁止 `else` 中仅存在 `if` 语句
    'no-lonely-if': 'error',

    // 禁止连续赋值
    'no-multi-assign': 'error',

    // 禁止 `new` 调用 `Function`
    'no-new-func': 'error',

    // 禁止 `new` 调用 `Object`
    'no-new-object': 'error',

    // 禁止 `new` 调用 `String`
    'no-new-wrappers': 'error',

    // 禁止返回赋值语句
    'no-return-assign': 'error',

    // 禁止不必要的 `return await`
    'no-return-await': 'error',

    // 禁用逗号操作符
    'no-sequences': ['error', { allowInParentheses: false }],

    // 禁止覆盖外部作用域声明的变量
    'no-shadow': 'error',

    // 禁止异常抛出原始值
    'no-throw-literal': 'error',

    // 删除冗余的初始赋值 `undefined`
    'no-undef-init': 'error',

    // 优化三元表达式
    'no-unneeded-ternary': 'warn',

    // 禁止未使用的表达式
    'no-unused-expressions': 'error',

    // 禁止不必要的 `.call()` 和 `.apply()`
    'no-useless-call': 'error',

    // 删除不必要的字面量 key 的方括号
    'no-useless-computed-key': 'warn',

    // 禁止不必要的字符串字面量拼接
    'no-useless-concat': 'error',

    // 删除不必要的同名的导出或解构重命名
    'no-useless-rename': 'error',

    // 删除不必要的 `return` 语句
    'no-useless-return': 'error',

    // 禁止使用 `var` 声明变量
    'no-var': 'error',

    // 对象字面量属性和方法使用简写
    'object-shorthand': 'warn',

    // 禁止单语句声明多个变量
    'one-var': ['error', 'never'],

    // 优化赋值操作
    'operator-assignment': 'warn',

    // 优化 `Object.assign` 为对象展开
    'prefer-object-spread': 'warn',

    // 强制 Promise reject 使用 `Error` 实例
    'prefer-promise-reject-errors': 'error',

    // 禁用 `arguments`，使用剩余参数代替
    'prefer-rest-params': 'error',

    // 禁止不必要的 `.apply()`，而是使用扩展运算符代替
    'prefer-spread': 'error',

    // 删除不必要的对象 key 的引号
    'quote-props': ['warn', 'as-needed'],

    // 强制 `parseInt` 使用进制参数
    radix: 'error',

    // 使用 `Symbol` 必须传描述参数
    'symbol-description': 'error',

    /** ----Layout & Formatting---- */
    // 优化数组两侧括号报纸一致的换行或不换行
    'array-bracket-newline': ['warn', 'consistent'],

    // 删除数组括号内侧空格
    'array-bracket-spacing': 'warn',

    // 优化数组元素保持一致的换行或不换行
    'array-element-newline': ['warn', 'consistent'],

    // 自动在箭头函数的箭头前后加空格
    'arrow-spacing': 'warn',

    // 强制使用一致的大括号风格（one true 风格）
    'brace-style': 'warn',

    // 多行情况下，强制加尾逗号
    'comma-dangle': ['warn', 'always-multiline'],

    // 逗号后加空格
    'comma-spacing': 'warn',

    // 逗号加至行尾
    'comma-style': 'warn',

    // 删除对象使用方括号访问属性时，方括号内侧的空格
    'computed-property-spacing': 'warn',

    // 换行情况下，点号置于行首
    'dot-location': ['warn', 'property'],

    // 文件末尾保留一行空行
    'eol-last': 'warn',

    // 删除函数标识符和调用之间的空格
    'func-call-spacing': 'warn',

    // 保持函数调用入参换行分割一致
    'function-call-argument-newline': ['warn', 'consistent'],

    // 保持函数声明参数换行风格一致
    'function-paren-newline': ['warn', 'consistent'],

    // 缩进为 2 个空格
    indent: ['warn', 2, {
      SwitchCase: 1,
      ignoredNodes: ['JSXAttribute'],
    }],

    // 对象声明中，冒号前面无空格，冒号后面一个空格
    'key-spacing': 'warn',

    // 关键字前后加空格
    'keyword-spacing': 'warn',

    // 使用 Unix 风格换行
    'linebreak-style': 'warn',

    // 注释顶部加空行
    'lines-around-comment': ['warn', {
      beforeLineComment: true,
      allowArrayStart: true,
      allowBlockStart: true,
      allowClassStart: true,
      allowObjectStart: true,
    }],

    // 限制单行最大长度 120
    'max-len': ['error', {
      code: 120,
      ignoreComments: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
      ignoreUrls: true,
    }],

    // 禁止单行出现多个语句
    'max-statements-per-line': 'error',

    // 为 `new` 调用补全括号
    'new-parens': 'warn',

    // 链式调用超过 2 个，则使用换行风格
    'newline-per-chained-call': 'warn',

    // 删除多余空格
    'no-multi-spaces': 'warn',

    // 删除多余空行
    'no-multiple-empty-lines': ['warn', {
      max: 1,
      maxEOF: 1,
      maxBOF: 0,
    }],

    // 删除行尾空格
    'no-trailing-spaces': 'warn',

    // 删除点号前后空格
    'no-whitespace-before-property': 'warn',

    // 自动在 `if` 等结构换行时添加花括号
    'nonblock-statement-body-position': 'warn',

    // 保持对象字面量和解构的括号风格一致
    'object-curly-newline': ['warn', { consistent: true }],

    // 对象字面量和解构的花括号两侧加空格
    'object-curly-spacing': ['warn', 'always'],

    // 保持对象属性换行风格一致
    'object-property-newline': ['warn', { allowAllPropertiesOnSameLine: true }],

    // 优化操作符换行，置于行末
    'operator-linebreak': 'warn',

    // 字符串字面量使用单引号
    quotes: ['warn', 'single', {
      avoidEscape: true,
      allowTemplateLiterals: true,
    }],

    // 删除扩展运算符后面空格
    'rest-spread-spacing': 'warn',

    // 自动加分号
    semi: 'warn',

    // 分号前禁止空格，分号后加空格
    'semi-spacing': 'warn',

    // 分号置于行尾
    'semi-style': 'warn',

    // 强制代码块之前使用空格
    'space-before-blocks': 'warn',

    // 删除函数名和括号之间空格（asyncArrow 函数除外）
    'space-before-function-paren': ['warn', {
      named: 'never',
      anonymous: 'never',
      asyncArrow: 'always',
    }],

    // 删除括号内侧空格
    'space-in-parens': 'warn',

    // 多元操作符前后加空格
    'space-infix-ops': 'warn',

    // 删除一元操作符后空格，一元关键字后加空格
    'space-unary-ops': 'warn',

    // `case` 语句，冒号前禁止空格，冒号后强制空格
    'switch-colon-spacing': 'warn',

    // 删除模板字符串插值花括号内侧空格
    'template-curly-spacing': 'warn',

    // 删除模板标记和它们的字面量之间的空格
    'template-tag-spacing': 'warn',

    // 为立即执行函数添加括号
    'wrap-iife': ['warn', 'outside', { functionPrototypeMethods: true }],
  },
});
