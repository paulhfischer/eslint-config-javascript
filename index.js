import js from '@eslint/js';
import html from 'eslint-plugin-html';
import { flatConfigs as importXConfigs } from 'eslint-plugin-import-x';
import jinja2 from 'eslint-plugin-jinja2-processor';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';

import rules from './rules.js';

export { rules };

export const markupFiles = ['**/*.html', '**/*.php'];

/** @satisfies {import('eslint').Linter.Config[]} */
export const base = [
    {
        name: '@paulhfischer/javascript/ignores',
        ignores: ['**/*.min.js'],
    },
    {
        name: '@paulhfischer/javascript/setup',
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
    },
    {
        name: '@paulhfischer/javascript/markup',
        files: markupFiles,
        plugins: { html },
        settings: {
            'html/report-bad-indent': 'error',
        },
    },
    { ...jinja2.configs.recommended, files: markupFiles },
    js.configs.recommended,
    importXConfigs.recommended,
    {
        name: '@paulhfischer/javascript/rules',
        rules,
    },
    {
        name: '@paulhfischer/javascript/eslint-config',
        files: ['**/eslint.config.{js,mjs,cjs,ts,mts,cts}'],
        rules: {
            'import-x/no-extraneous-dependencies': 'off',
        },
    },
];

export const prettier = [prettierRecommended];

const config = [...base, ...prettier];

export default config;
export { config as 'module.exports' };
