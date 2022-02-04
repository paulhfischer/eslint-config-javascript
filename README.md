# eslint-config-javascript

## Setup

```console
npm install --save-dev @paulhfischer/eslint-config-javascript
```

## Commands

Use `eslint.config.js` in an ESM project:

```js
import config from '@paulhfischer/eslint-config-javascript';

export default config;
```

For pre-commit, use `eslint.config.cjs` so Node can resolve packages from the hook environment:

```js
module.exports = require('@paulhfischer/eslint-config-javascript');
```

Put `"@paulhfischer/prettier-config"` in `.prettierrc`.

```console
npm exec -- eslint --fix <PATH>...
```

### pre-commit

```yaml
- repo: https://github.com/paulhfischer/eslint-config-javascript
  rev: v2.0.0
  hooks:
      - id: lint
```
