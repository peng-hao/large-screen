module.exports = {
  parser: 'vue-eslint-parser',
  root: true,
  // 环境
  env: {
    browser: true,
    node: true,
  },
  extends: [
    // 插件中的配置
    'plugin:vue/vue3-essential',
    // 仅是配置方案
    'airbnb-base',
    'plugin:vue/vue3-recommended',
  ],
  // 插件——包含规则和配置方案 省略插件名称前缀eslint-plugin-
  plugins: [
    // vue插件
    'vue',
    // 支持ts的eslint插件
    '@typescript-eslint',
  ],
  // 自定义分析器
  parserOptions: {
    // 使用的ECMAScript语法的版本
    ecmaVersion: 12,
    // 解析 .ts 文件
    parser: '@typescript-eslint/parser',
    // 使用模块
    sourceType: 'module',
    strict: true,
  },
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'import/prefer-default-export': 'off', // Composition Function 不一定需要默认导出
    'max-len': ['error', { code: 160 }], // 单行最大160个字符
    'multiline-comment-style': ['error', 'starred-block'], // 格式化注释
    'object-curly-newline': 'off',
    'no-restricted-syntax': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error', { ignoreTypeValueShadow: true }],
    '@typescript-eslint/no-var-requires': 0,
    'prefer-template': 'off',
    'linebreak-style': [0, 'error', 'windows'],
    // 修改函数中的参数 仅限下列中的变量才可以修改（请求接口、vuex中的state）
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'el',
          'mods',
          'req', // axios requests
          'request', // axios requests
          'config', // axios requests
          'res', // axios responses
          'response', // axios responses
          'state', // vuex state
          'styleContainer',
          'father',
        ],
      },
    ],
    // 允许使用 ++ --
    'no-plusplus': [
      'off',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    /* 配置在插件中定义的规则，必须在规则ID前加上插件名称和 /  例如：'vue/' 'import/' */
    // 关闭省略扩展名时的报错
    'import/extensions': 0,
    // 关闭html文件末尾报错 正常应该是检测只能在template内部注释的问题
    'vue/comment-directive': 0,
    // 关闭未使用声明变量的报错
    'no-unused-vars': 0,
    'import/no-unresolved': 0,
    'vue/html-self-closing': 0,
    'vue/no-v-html': 0,
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 4,
      },
      multiline: {
        max: 1,
      },
    }],
  },
  settings: {
    // 模块解析
    'import/resolver': {
      // 配置alias
      alias: {
        // 多个别名设置
        map: [
          ['@', './src'],
          ['package', './package'],
        ],
        // 扩展名
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
      },
    },
  },
};
