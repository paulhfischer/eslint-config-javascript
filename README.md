# eslint-config-javascript

ESLint-config for JavaScript projects. It uses ESLint's flat config and consists of

- the recommended rules of [`@eslint/js`](https://github.com/eslint/eslint/tree/main/packages/js)
  and [`eslint-plugin-import-x`](https://github.com/un-ts/eslint-plugin-import-x),
- the rules of the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript), ported
  to current ESLint versions (see [`rules.js`](rules.js)) and
- [`prettier-config`](https://github.com/paulhfischer/prettier-config) for formatting (via
  [`eslint-plugin-prettier`](https://github.com/prettier/eslint-plugin-prettier))

and uses

- [`eslint-plugin-html`](https://github.com/BenoitZugmeyer/eslint-plugin-html) and
- [`eslint-plugin-jinja2-processor`](https://github.com/paulhfischer/eslint-plugin-jinja2-processor)

to lint scripts in HTML-, PHP- and Jinja-files.

For TypeScript and React projects, use
[`eslint-config-typescript`](https://github.com/paulhfischer/eslint-config-typescript) or
[`eslint-config-typescript-react`](https://github.com/paulhfischer/eslint-config-typescript-react).

### Usage

#### pre-commit

1. Add the hook to your `.pre-commit-config.yaml`:

    ```yaml
    - repo: https://github.com/paulhfischer/eslint-config-javascript
      rev: v2.0.0
      hooks:
          - id: lint
    ```

2. Add the config to your `eslint.config.cjs`:

    ```js
    module.exports = require('@paulhfischer/eslint-config-javascript');
    ```

    or, to adjust it:

    ```js
    const config = require('@paulhfischer/eslint-config-javascript');

    module.exports = [...config, { rules: { 'no-console': 'off' } }];
    ```

    _Note: The config has to be a CommonJS-file using `require()`, as ES modules can't import
    packages from the environment pre-commit installs the hook into._

3. Add the prettier configuration to your `.prettierrc`:

    ```json
    "@paulhfischer/prettier-config"
    ```

#### npm

1. Install via `npm`:

    ```
    npm install --save-dev @paulhfischer/eslint-config-javascript
    ```

    _Note: Have a look at the `.pre-commit-hooks.yaml`-file for a list of all peer-dependencies._

2. Add the config to your `eslint.config.js`:

    ```js
    import config from '@paulhfischer/eslint-config-javascript';

    export default config;
    ```

3. Add the prettier configuration to your `.prettierrc` (or the `prettier`-key of your
   `package.json`):

    ```json
    "@paulhfischer/prettier-config"
    ```

### Migrating from version 1

- Version 2 requires ESLint 10 and flat configs. Replace your `.eslintrc`-file or the
  `eslintConfig`-key of your `package.json` with an `eslint.config.cjs`-file (see above).
- Rules of `eslint-plugin-import` are now provided by `eslint-plugin-import-x`, i.e. `import/…`
  becomes `import-x/…`.
- Compared to `eslint-config-airbnb-base`, formatting rules are left to prettier, rules of the
  recommended configs are enabled and some rules were modernized: `for…of`-loops and `void` as a
  statement are allowed, `++` is allowed in for-loops, named exports are no longer discouraged and
  file extensions in imports are no longer forbidden (as ES modules require them).
