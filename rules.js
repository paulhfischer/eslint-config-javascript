/*
Rules ported from the Airbnb JavaScript Style Guide (https://github.com/airbnb/javascript),
based on eslint-config-airbnb-extended (https://github.com/eslint-config/airbnb-extended).

MIT License

Copyright (c) 2012 Airbnb
Copyright (c) 2026 Nisharg Shah

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

const confusingBrowserGlobals = [
    'addEventListener',
    'blur',
    'close',
    'closed',
    'confirm',
    'defaultStatus',
    'defaultstatus',
    'event',
    'external',
    'find',
    'focus',
    'frameElement',
    'frames',
    'history',
    'innerHeight',
    'innerWidth',
    'length',
    'location',
    'locationbar',
    'menubar',
    'moveBy',
    'moveTo',
    'name',
    'onblur',
    'onerror',
    'onfocus',
    'onload',
    'onresize',
    'onunload',
    'open',
    'opener',
    'opera',
    'outerHeight',
    'outerWidth',
    'pageXOffset',
    'pageYOffset',
    'parent',
    'print',
    'removeEventListener',
    'resizeBy',
    'resizeTo',
    'screen',
    'screenLeft',
    'screenTop',
    'screenX',
    'screenY',
    'scroll',
    'scrollbars',
    'scrollBy',
    'scrollTo',
    'scrollX',
    'scrollY',
    'self',
    'status',
    'statusbar',
    'stop',
    'toolbar',
    'top',
];

/** @satisfies {import('eslint').Linter.RulesRecord} */
export const bestPractices = {
    'array-callback-return': ['error', { allowImplicit: true }],
    'block-scoped-var': 'error',
    'class-methods-use-this': 'error',
    'consistent-return': 'error',
    'default-case': ['error', { commentPattern: '^no default$' }],
    'default-case-last': 'error',
    'default-param-last': 'error',
    'dot-notation': ['error', { allowKeywords: true }],
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'grouped-accessor-pairs': 'error',
    'guard-for-in': 'error',
    'max-classes-per-file': ['error', 1],
    'no-alert': 'warn',
    'no-caller': 'error',
    'no-constructor-return': 'error',
    'no-else-return': ['error', { allowElseIf: false }],
    'no-empty-function': ['error', { allow: ['arrowFunctions', 'functions', 'methods'] }],
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-implied-eval': 'error',
    'no-iterator': 'error',
    'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': [
        'error',
        {
            props: true,
            ignorePropertyModificationsFor: [
                'acc',
                'accumulator',
                'e',
                'ctx',
                'context',
                'req',
                'request',
                'res',
                'response',
            ],
        },
    ],
    'no-proto': 'error',
    'no-restricted-properties': [
        'error',
        { object: 'arguments', property: 'callee', message: 'arguments.callee is deprecated' },
        ...['global', 'globalThis', 'self', 'window'].flatMap((object) => [
            { object, property: 'isFinite', message: 'Please use Number.isFinite instead' },
            { object, property: 'isNaN', message: 'Please use Number.isNaN instead' },
        ]),
        { property: '__defineGetter__', message: 'Please use Object.defineProperty instead.' },
        { property: '__defineSetter__', message: 'Please use Object.defineProperty instead.' },
        {
            object: 'Math',
            property: 'pow',
            message: 'Use the exponentiation operator (**) instead.',
        },
    ],
    'no-return-assign': ['error', 'always'],
    'no-script-url': 'error',
    'no-self-assign': ['error', { props: true }],
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unused-expressions': [
        'error',
        { allowShortCircuit: false, allowTernary: false, allowTaggedTemplates: false },
    ],
    'no-useless-concat': 'error',
    'no-useless-return': 'error',
    'no-void': ['error', { allowAsStatement: true }],
    'prefer-object-has-own': 'error',
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
    'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
    radix: 'error',
    'vars-on-top': 'error',
    yoda: 'error',
};

/** @satisfies {import('eslint').Linter.RulesRecord} */
export const errors = {
    'getter-return': ['error', { allowImplicit: true }],
    'no-await-in-loop': 'error',
    'no-cond-assign': ['error', 'always'],
    'no-console': 'warn',
    'no-constant-condition': 'warn',
    'no-promise-executor-return': 'error',
    'no-template-curly-in-string': 'error',
    'no-unreachable-loop': 'error',
    'no-unsafe-optional-chaining': ['error', { disallowArithmeticOperators: true }],
    'valid-typeof': ['error', { requireStringLiterals: true }],
};

/** @satisfies {import('eslint').Linter.RulesRecord} */
export const es6 = {
    'no-restricted-exports': ['error', { restrictedNamedExports: ['default', 'then'] }],
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'object-shorthand': ['error', 'always', { ignoreConstructors: false, avoidQuotes: true }],
    'prefer-const': ['error', { destructuring: 'any', ignoreReadBeforeAssign: true }],
    'prefer-destructuring': [
        'error',
        {
            VariableDeclarator: { array: false, object: true },
            AssignmentExpression: { array: true, object: false },
        },
        { enforceForRenamedProperties: false },
    ],
    'prefer-numeric-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'symbol-description': 'error',
};

/** @satisfies {import('eslint').Linter.RulesRecord} */
export const imports = {
    'import-x/export': 'error',
    'import-x/first': 'error',
    'import-x/newline-after-import': 'error',
    'import-x/no-absolute-path': 'error',
    'import-x/no-amd': 'error',
    'import-x/no-cycle': ['error', { maxDepth: '∞' }],
    'import-x/no-duplicates': 'error',
    'import-x/no-dynamic-require': 'error',
    'import-x/no-empty-named-blocks': 'error',
    'import-x/no-extraneous-dependencies': [
        'error',
        {
            devDependencies: [
                '**/test/**',
                '**/tests/**',
                '**/spec/**',
                '**/__tests__/**',
                '**/__mocks__/**',
                '**/*{.,_}{test,spec}.*',
                '**/*.config.*',
            ],
            optionalDependencies: false,
            peerDependencies: true,
        },
    ],
    'import-x/no-import-module-exports': 'error',
    'import-x/no-mutable-exports': 'error',
    'import-x/no-named-as-default': 'error',
    'import-x/no-named-as-default-member': 'error',
    'import-x/no-named-default': 'error',
    'import-x/no-relative-packages': 'error',
    'import-x/no-self-import': 'error',
    'import-x/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],
    'import-x/no-useless-path-segments': ['error', { commonjs: true }],
    'import-x/no-webpack-loader-syntax': 'error',
    'import-x/order': ['error', { groups: [['builtin', 'external', 'internal']] }],
};

/** @satisfies {import('eslint').Linter.RulesRecord} */
export const strict = {
    strict: ['error', 'never'],
};

/** @satisfies {import('eslint').Linter.RulesRecord} */
export const style = {
    camelcase: ['error', { properties: 'never', ignoreDestructuring: false }],
    'func-names': 'warn',
    'logical-assignment-operators': ['error', 'always'],
    'new-cap': ['error', { newIsCap: true, capIsNew: false }],
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-continue': 'error',
    'no-lonely-if': 'error',
    'no-multi-assign': 'error',
    'no-nested-ternary': 'error',
    'no-object-constructor': 'error',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-restricted-syntax': [
        'error',
        {
            selector: 'ForInStatement',
            message:
                'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
        },
        {
            selector: 'LabeledStatement',
            message:
                'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
        },
        {
            selector: 'WithStatement',
            message:
                '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
        },
    ],
    'no-underscore-dangle': [
        'error',
        { allowAfterThis: false, allowAfterSuper: false, enforceInMethodNames: true },
    ],
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    'one-var': ['error', 'never'],
    'operator-assignment': ['error', 'always'],
    'prefer-exponentiation-operator': 'error',
    'prefer-object-spread': 'error',
    'unicode-bom': ['error', 'never'],
};

/** @satisfies {import('eslint').Linter.RulesRecord} */
export const variables = {
    'no-label-var': 'error',
    'no-restricted-globals': [
        'error',
        { name: 'isFinite', message: 'Use Number.isFinite instead.' },
        { name: 'isNaN', message: 'Use Number.isNaN instead.' },
        ...confusingBrowserGlobals.map((name) => ({
            name,
            message: `Use window.${name} instead.`,
        })),
    ],
    'no-shadow': 'error',
    'no-undef-init': 'error',
    'no-unused-vars': [
        'error',
        {
            ignoreRestSiblings: true,
            argsIgnorePattern: '^_',
            caughtErrorsIgnorePattern: '^_',
            destructuredArrayIgnorePattern: '^_',
        },
    ],
    'no-use-before-define': ['error', { functions: true, classes: true, variables: true }],
};

export default {
    ...bestPractices,
    ...errors,
    ...es6,
    ...imports,
    ...strict,
    ...style,
    ...variables,
};
