# node-app

[![Version](https://img.shields.io/npm/v/@donniean/node-app.svg)](https://www.npmjs.com/package/@donniean/node-app) [![License: MIT](https://img.shields.io/github/license/donniean/node-app)](https://github.com/donniean/node-app/blob/master/LICENSE) [![CI](https://github.com/donniean/node-app/actions/workflows/ci.yaml/badge.svg)](https://github.com/donniean/node-app/actions/workflows/ci.yaml) [![Release](https://github.com/donniean/node-app/actions/workflows/release.yaml/badge.svg)](https://github.com/donniean/node-app/actions/workflows/release.yaml)

## Table of Contents

- [Tools](#tools)
  - [Aggregate Lint](#aggregate-lint)
  - [AutoCorrect](#autocorrect)
  - [CSpell](#cspell)
  - [EditorConfig](#editorconfig)
  - [ESLint](#eslint)
  - [gitattributes](#gitattributes)
  - [gitignore](#gitignore)
  - [HTMLHint](#htmlhint)
  - [Knip](#knip)
  - [markdownlint](#markdownlint)
  - [npm-check-updates](#npm-check-updates)
  - [Prettier](#prettier)
  - [Sort Package.json](#sort-packagejson)
  - [Stylelint](#stylelint)
  - [tsc](#tsc)
  - [Vitest](#vitest)
  - [Husky](#husky)
  - [commitlint](#commitlint)
  - [lint-staged](#lint-staged)
- [All](#all)
  - [Setup](#setup)
  - [Clean](#clean)

## Tools

### Aggregate Lint

Setup

```shell
npm pkg set \
  scripts.lint='concurrently --group --timings --prefix-colors=auto "npm:lint:*(!:fix)"' \
  scripts.lint:fix='concurrently --max-processes=1 --group --timings --prefix-colors=auto "npm:lint:*:fix"'
```

Clean

```shell
npm pkg delete \
  scripts.lint \
  scripts.lint:fix
```

### [AutoCorrect](https://github.com/huacnlee/autocorrect)

Setup

```shell
npm pkg set devDependencies.autocorrect-node="^$(npm view autocorrect-node version)"

npm pkg set \
  scripts.lint:text='autocorrect --lint' \
  scripts.lint:text:fix='autocorrect --fix'

curl \
  --remote-name https://raw.githubusercontent.com/donniean/react-app/main/.autocorrectrc \
  --remote-name https://raw.githubusercontent.com/donniean/react-app/main/.autocorrectignore
```

Clean

```shell
npm pkg delete devDependencies.autocorrect-node

npm pkg delete \
  scripts.lint:text \
  scripts.lint:text:fix

rm \
  .autocorrectrc \
  .autocorrectignore
```

### [CSpell](https://github.com/streetsidesoftware/cspell)

Setup

```shell
npm pkg set devDependencies.cspell="^$(npm view cspell version)"

npm pkg set scripts.lint:spell='cspell lint --no-progress --no-must-find-files --dot --gitignore .'

curl --remote-name https://raw.githubusercontent.com/donniean/react-app/main/cspell.config.mjs
```

Clean

```shell
npm pkg delete devDependencies.cspell

npm pkg delete scripts.lint:spell

rm cspell.config.mjs
```

### [EditorConfig](https://editorconfig.org/)

Setup

```shell
curl --remote-name https://raw.githubusercontent.com/donniean/react-app/main/.editorconfig
```

Clean

```shell
rm .editorconfig
```

### [ESLint](https://github.com/eslint/eslint)

Setup

```shell
npm pkg set devDependencies.@eslint-community/eslint-plugin-eslint-comments="^$(npm view @eslint-community/eslint-plugin-eslint-comments version)"
npm pkg set devDependencies.@eslint/compat="^$(npm view @eslint/compat version)"
npm pkg set devDependencies.@eslint/js="^$(npm view @eslint/js version)"
npm pkg set devDependencies.@tanstack/eslint-plugin-query="^$(npm view @tanstack/eslint-plugin-query version)"
npm pkg set devDependencies.@vitest/eslint-plugin="^$(npm view @vitest/eslint-plugin version)"
npm pkg set devDependencies.eslint="^$(npm view eslint version)"
npm pkg set devDependencies.eslint-config-prettier="^$(npm view eslint-config-prettier version)"
npm pkg set devDependencies.eslint-import-resolver-typescript="^$(npm view eslint-import-resolver-typescript version)"
npm pkg set devDependencies.eslint-plugin-import-x="^$(npm view eslint-plugin-import-x version)"
npm pkg set devDependencies.eslint-plugin-jsx-a11y="^$(npm view eslint-plugin-jsx-a11y version)"
npm pkg set devDependencies.eslint-plugin-n="^$(npm view eslint-plugin-n version)"
npm pkg set devDependencies.eslint-plugin-promise="^$(npm view eslint-plugin-promise version)"
npm pkg set devDependencies.eslint-plugin-react="^$(npm view eslint-plugin-react version)"
npm pkg set devDependencies.eslint-plugin-react-hooks="^$(npm view eslint-plugin-react-hooks@rc version)"
npm pkg set devDependencies.eslint-plugin-react-refresh="^$(npm view eslint-plugin-react-refresh version)"
npm pkg set devDependencies.eslint-plugin-simple-import-sort="^$(npm view eslint-plugin-simple-import-sort version)"
npm pkg set devDependencies.eslint-plugin-sonarjs="^$(npm view eslint-plugin-sonarjs version)"
npm pkg set devDependencies.eslint-plugin-unicorn="^$(npm view eslint-plugin-unicorn version)"
npm pkg set devDependencies.eslint-plugin-unused-imports="^$(npm view eslint-plugin-unused-imports version)"
npm pkg set devDependencies.globals="^$(npm view globals version)"
npm pkg set devDependencies.typescript-eslint="^$(npm view typescript-eslint version)"

npm pkg set \
  scripts.lint:js='eslint' \
  scripts.lint:js:fix='npm run lint:js -- --fix'

curl --remote-name https://raw.githubusercontent.com/donniean/react-app/main/eslint.config.mjs
```

Clean

```shell
npm pkg delete \
  devDependencies.@eslint-community/eslint-plugin-eslint-comments \
  devDependencies.@eslint/compat \
  devDependencies.@eslint/js \
  devDependencies.@tanstack/eslint-plugin-query \
  devDependencies.@vitest/eslint-plugin \
  devDependencies.eslint \
  devDependencies.eslint-config-prettier \
  devDependencies.eslint-import-resolver-typescript \
  devDependencies.eslint-plugin-import-x \
  devDependencies.eslint-plugin-jsx-a11y \
  devDependencies.eslint-plugin-n \
  devDependencies.eslint-plugin-promise \
  devDependencies.eslint-plugin-react \
  devDependencies.eslint-plugin-react-hooks \
  devDependencies.eslint-plugin-react-refresh \
  devDependencies.eslint-plugin-simple-import-sort \
  devDependencies.eslint-plugin-sonarjs \
  devDependencies.eslint-plugin-unicorn \
  devDependencies.eslint-plugin-unused-imports \
  devDependencies.globals \
  devDependencies.typescript-eslint

npm pkg delete \
  scripts.lint:js \
  scripts.lint:js:fix

rm eslint.config.mjs
```

### [gitattributes](https://git-scm.com/docs/gitattributes)

Setup

```shell
curl --remote-name https://raw.githubusercontent.com/donniean/react-app/main/.gitattributes
```

Clean

```shell
rm .gitattributes
```

### [gitignore](https://git-scm.com/docs/gitignore)

Setup

```shell
curl --remote-name https://raw.githubusercontent.com/donniean/react-app/main/.gitignore
```

Clean

```shell
rm .gitignore
```

### [HTMLHint](https://github.com/htmlhint/HTMLHint)

Setup

```shell
npm pkg set devDependencies.htmlhint="^$(npm view htmlhint version)"

npm pkg set scripts.lint:html='htmlhint --ignore="**/coverage/**" "**/*.html"'

curl --remote-name https://raw.githubusercontent.com/donniean/react-app/main/.htmlhintrc
```

Clean

```shell
npm pkg delete devDependencies.htmlhint

npm pkg delete scripts.lint:html

rm .htmlhintrc
```

### [Knip](https://github.com/webpro-nl/knip)

Setup

```shell
npm pkg set devDependencies.knip="^$(npm view knip version)"

npm pkg set \
  scripts.knip='knip' \
  scripts.knip:fix='npm run knip -- --fix'
```

Clean

```shell
npm pkg delete devDependencies.knip

npm pkg delete \
  scripts.knip \
  scripts.knip:fix
```

### [markdownlint](https://github.com/DavidAnson/markdownlint)

Setup

```shell
npm pkg set devDependencies.markdownlint-cli="^$(npm view markdownlint-cli version)"

npm pkg set \
  scripts.lint:md='markdownlint --dot "**/*.md"' \
  scripts.lint:md:fix='npm run lint:md -- --fix'

curl \
  --remote-name https://raw.githubusercontent.com/donniean/react-app/main/.markdownlint.json \
  --remote-name https://raw.githubusercontent.com/donniean/react-app/main/.markdownlintignore
```

Clean

```shell
npm pkg delete devDependencies.markdownlint-cli

npm pkg delete \
  scripts.lint:md \
  scripts.lint:md:fix

rm \
  .markdownlint.json \
  .markdownlintignore
```

### [npm-check-updates](https://github.com/raineorshine/npm-check-updates)

Setup

```shell
npm pkg set \
  scripts.ncu='npx npm-check-updates --deep' \
  scripts.ncu:upgrade='npm run ncu -- --upgrade'
```

Clean

```shell
npm pkg delete \
  scripts.ncu \
  scripts.ncu:upgrade
```

### [Prettier](https://github.com/prettier/prettier)

Setup

```shell
npm pkg set devDependencies.prettier="^$(npm view prettier version)"
npm pkg set devDependencies.prettier-plugin-tailwindcss="^$(npm view prettier-plugin-tailwindcss version)"

npm pkg set \
  scripts.lint:format='prettier --check --ignore-unknown .' \
  scripts.lint:format:fix='prettier --write --ignore-unknown .'

curl \
  --remote-name https://raw.githubusercontent.com/donniean/react-app/main/prettier.config.mjs \
  --remote-name https://raw.githubusercontent.com/donniean/react-app/main/.prettierignore
```

Clean

```shell
npm pkg delete \
  devDependencies.prettier \
  devDependencies.prettier-plugin-tailwindcss

npm pkg delete \
  scripts.lint:format \
  scripts.lint:format:fix

rm \
  prettier.config.mjs \
  .prettierignore
```

### [Sort Package.json](https://github.com/keithamus/sort-package-json)

Setup

```shell
npm pkg set devDependencies.sort-package-json="^$(npm view sort-package-json version)"

npm pkg set \
  scripts.lint:package-json='npm run lint:package-json:fix -- --check' \
  scripts.lint:package-json:fix='sort-package-json "**/package.json" --ignore "**/node_modules/**/package.json" --ignore "**/dist/**/package.json"'
```

Clean

```shell
npm pkg delete devDependencies.sort-package-json

npm pkg delete \
  scripts.lint:package-json \
  scripts.lint:package-json:fix
```

### [Stylelint](https://github.com/stylelint/stylelint)

Setup

```shell
npm pkg set devDependencies.stylelint="^$(npm view stylelint version)"
npm pkg set devDependencies.stylelint-config-recess-order="^$(npm view stylelint-config-recess-order version)"
npm pkg set devDependencies.stylelint-config-standard="^$(npm view stylelint-config-standard version)"
npm pkg set devDependencies.stylelint-config-css-modules="^$(npm view stylelint-config-css-modules version)"

npm pkg set \
  scripts.lint:css='stylelint "**/*.css"' \
  scripts.lint:css:fix='npm run lint:css -- --fix'

curl \
  --remote-name https://raw.githubusercontent.com/donniean/react-app/main/stylelint.config.mjs \
  --remote-name https://raw.githubusercontent.com/donniean/react-app/main/.stylelintignore
```

Clean

```shell
npm pkg delete \
  devDependencies.stylelint \
  devDependencies.stylelint-config-recess-order \
  devDependencies.stylelint-config-standard \
  devDependencies.stylelint-config-css-modules

npm pkg delete \
  scripts.lint:css \
  scripts.lint:css:fix

rm \
  stylelint.config.mjs \
  .stylelintignore
```

### [tsc](https://github.com/microsoft/TypeScript)

Setup

```shell
npm pkg set devDependencies.typescript="^$(npm view typescript version)"

npm pkg set scripts.lint:types='tsc --noEmit'
```

Clean

```shell
npm pkg delete devDependencies.typescript

npm pkg delete scripts.lint:types
```

### [Vitest](https://github.com/vitest-dev/vitest)

Setup

```shell
npm pkg set devDependencies.@vitest/coverage-v8="^$(npm view @vitest/coverage-v8 version)"
npm pkg set devDependencies.@vitest/ui="^$(npm view @vitest/ui version)"
npm pkg set devDependencies.vitest="^$(npm view vitest version)"

npm pkg set \
  scripts.test='vitest run --passWithNoTests' \
  scripts.test:coverage='vitest run --coverage' \
  scripts.test:watch='vitest watch' \
  scripts.test:ui='vitest --ui'
```

Clean

```shell
npm pkg delete \
  devDependencies.@vitest/coverage-v8 \
  devDependencies.@vitest/ui \
  devDependencies.vitest

npm pkg delete \
  scripts.test \
  scripts.test:coverage \
  scripts.test:watch \
  scripts.test:ui
```

### [Husky](https://github.com/typicode/husky)

Setup

```shell
npm pkg set devDependencies.husky="^$(npm view husky version)"

npm pkg set scripts.prepare='husky'

npm run prepare
```

Clean

```shell
npm pkg delete devDependencies.husky

npm pkg delete scripts.prepare

rm -rf .husky/
```

### [commitlint](https://github.com/conventional-changelog/commitlint)

Setup

```shell
npm pkg set devDependencies.@commitlint/cli="^$(npm view @commitlint/cli version)"
npm pkg set devDependencies.@commitlint/config-conventional="^$(npm view @commitlint/config-conventional version)"

curl --remote-name https://raw.githubusercontent.com/donniean/react-app/main/commitlint.config.mjs

echo "npx --no -- commitlint --edit \$1" > .husky/commit-msg
```

Clean

```shell
npm pkg delete \
  devDependencies.@commitlint/cli \
  devDependencies.@commitlint/config-conventional

rm commitlint.config.mjs

rm .husky/commit-msg
```

### [lint-staged](https://github.com/lint-staged/lint-staged)

Setup

```shell
npm pkg set devDependencies.lint-staged="^$(npm view lint-staged version)"

curl --remote-name https://raw.githubusercontent.com/donniean/react-app/main/lint-staged.config.mjs

echo "npm run i18n:types
npm run i18n:check
npx lint-staged --concurrent false" > .husky/pre-commit
```

Clean

```shell
npm pkg delete devDependencies.lint-staged

rm lint-staged.config.mjs

rm .husky/pre-commit
```

## All

### Setup

```shell
# Aggregate Lint

npm pkg set \
  scripts.lint='concurrently --group --timings --prefix-colors=auto "npm:lint:*(!:fix)"' \
  scripts.lint:fix='concurrently --max-processes=1 --group --timings --prefix-colors=auto "npm:lint:*:fix"'

# AutoCorrect

npm pkg set devDependencies.autocorrect-node="^$(npm view autocorrect-node version)"

npm pkg set \
  scripts.lint:text='autocorrect --lint' \
  scripts.lint:text:fix='autocorrect --fix'

curl \
  --remote-name https://raw.githubusercontent.com/donniean/react-app/main/.autocorrectrc \
  --remote-name https://raw.githubusercontent.com/donniean/react-app/main/.autocorrectignore

# CSpell

npm pkg set devDependencies.cspell="^$(npm view cspell version)"

npm pkg set scripts.lint:spell='cspell lint --no-progress --no-must-find-files --dot --gitignore .'

curl --remote-name https://raw.githubusercontent.com/donniean/react-app/main/cspell.config.mjs

# EditorConfig

curl --remote-name https://raw.githubusercontent.com/donniean/react-app/main/.editorconfig

# ESLint

npm pkg set devDependencies.@eslint-community/eslint-plugin-eslint-comments="^$(npm view @eslint-community/eslint-plugin-eslint-comments version)"
npm pkg set devDependencies.@eslint/compat="^$(npm view @eslint/compat version)"
npm pkg set devDependencies.@eslint/js="^$(npm view @eslint/js version)"
npm pkg set devDependencies.@tanstack/eslint-plugin-query="^$(npm view @tanstack/eslint-plugin-query version)"
npm pkg set devDependencies.@vitest/eslint-plugin="^$(npm view @vitest/eslint-plugin version)"
npm pkg set devDependencies.eslint="^$(npm view eslint version)"
npm pkg set devDependencies.eslint-config-prettier="^$(npm view eslint-config-prettier version)"
npm pkg set devDependencies.eslint-import-resolver-typescript="^$(npm view eslint-import-resolver-typescript version)"
npm pkg set devDependencies.eslint-plugin-import-x="^$(npm view eslint-plugin-import-x version)"
npm pkg set devDependencies.eslint-plugin-jsx-a11y="^$(npm view eslint-plugin-jsx-a11y version)"
npm pkg set devDependencies.eslint-plugin-n="^$(npm view eslint-plugin-n version)"
npm pkg set devDependencies.eslint-plugin-promise="^$(npm view eslint-plugin-promise version)"
npm pkg set devDependencies.eslint-plugin-react="^$(npm view eslint-plugin-react version)"
npm pkg set devDependencies.eslint-plugin-react-hooks="^$(npm view eslint-plugin-react-hooks@rc version)"
npm pkg set devDependencies.eslint-plugin-react-refresh="^$(npm view eslint-plugin-react-refresh version)"
npm pkg set devDependencies.eslint-plugin-simple-import-sort="^$(npm view eslint-plugin-simple-import-sort version)"
npm pkg set devDependencies.eslint-plugin-sonarjs="^$(npm view eslint-plugin-sonarjs version)"
npm pkg set devDependencies.eslint-plugin-unicorn="^$(npm view eslint-plugin-unicorn version)"
npm pkg set devDependencies.eslint-plugin-unused-imports="^$(npm view eslint-plugin-unused-imports version)"
npm pkg set devDependencies.globals="^$(npm view globals version)"
npm pkg set devDependencies.typescript-eslint="^$(npm view typescript-eslint version)"

npm pkg set \
  scripts.lint:js='eslint' \
  scripts.lint:js:fix='npm run lint:js -- --fix'

curl --remote-name https://raw.githubusercontent.com/donniean/react-app/main/eslint.config.mjs

# gitattributes

curl --remote-name https://raw.githubusercontent.com/donniean/react-app/main/.gitattributes

# gitignore

curl --remote-name https://raw.githubusercontent.com/donniean/react-app/main/.gitignore

# HTMLHint

npm pkg set devDependencies.htmlhint="^$(npm view htmlhint version)"

npm pkg set scripts.lint:html='htmlhint --ignore="**/coverage/**" "**/*.html"'

curl --remote-name https://raw.githubusercontent.com/donniean/react-app/main/.htmlhintrc

# Knip

npm pkg set devDependencies.knip="^$(npm view knip version)"

npm pkg set \
  scripts.knip='knip' \
  scripts.knip:fix='npm run knip -- --fix'

# markdownlint

npm pkg set devDependencies.markdownlint-cli="^$(npm view markdownlint-cli version)"

npm pkg set \
  scripts.lint:md='markdownlint --dot "**/*.md"' \
  scripts.lint:md:fix='npm run lint:md -- --fix'

curl \
  --remote-name https://raw.githubusercontent.com/donniean/react-app/main/.markdownlint.json \
  --remote-name https://raw.githubusercontent.com/donniean/react-app/main/.markdownlintignore

# npm-check-updates

npm pkg set \
  scripts.ncu='npx npm-check-updates --deep' \
  scripts.ncu:upgrade='npm run ncu -- --upgrade'

# Prettier

npm pkg set devDependencies.prettier="^$(npm view prettier version)"
npm pkg set devDependencies.prettier-plugin-tailwindcss="^$(npm view prettier-plugin-tailwindcss version)"

npm pkg set \
  scripts.lint:format='prettier --check --ignore-unknown .' \
  scripts.lint:format:fix='prettier --write --ignore-unknown .'

curl \
  --remote-name https://raw.githubusercontent.com/donniean/react-app/main/prettier.config.mjs \
  --remote-name https://raw.githubusercontent.com/donniean/react-app/main/.prettierignore

# Sort Package.json

npm pkg set devDependencies.sort-package-json="^$(npm view sort-package-json version)"

npm pkg set \
  scripts.lint:package-json='npm run lint:package-json:fix -- --check' \
  scripts.lint:package-json:fix='sort-package-json "**/package.json" --ignore "**/node_modules/**/package.json" --ignore "**/dist/**/package.json"'

# Stylelint

npm pkg set devDependencies.stylelint="^$(npm view stylelint version)"
npm pkg set devDependencies.stylelint-config-recess-order="^$(npm view stylelint-config-recess-order version)"
npm pkg set devDependencies.stylelint-config-standard="^$(npm view stylelint-config-standard version)"
npm pkg set devDependencies.stylelint-config-css-modules="^$(npm view stylelint-config-css-modules version)"

npm pkg set \
  scripts.lint:css='stylelint "**/*.css"' \
  scripts.lint:css:fix='npm run lint:css -- --fix'

curl \
  --remote-name https://raw.githubusercontent.com/donniean/react-app/main/stylelint.config.mjs \
  --remote-name https://raw.githubusercontent.com/donniean/react-app/main/.stylelintignore

# tsc

npm pkg set devDependencies.typescript="^$(npm view typescript version)"

npm pkg set scripts.lint:types='tsc --noEmit'

# Vitest

npm pkg set devDependencies.@vitest/coverage-v8="^$(npm view @vitest/coverage-v8 version)"
npm pkg set devDependencies.@vitest/ui="^$(npm view @vitest/ui version)"
npm pkg set devDependencies.vitest="^$(npm view vitest version)"

npm pkg set \
  scripts.test='vitest run --passWithNoTests' \
  scripts.test:coverage='vitest run --coverage' \
  scripts.test:watch='vitest watch' \
  scripts.test:ui='vitest --ui'

# Husky

npm pkg set devDependencies.husky="^$(npm view husky version)"

npm pkg set scripts.prepare='husky'

npm run prepare

# commitlint

npm pkg set devDependencies.@commitlint/cli="^$(npm view @commitlint/cli version)"
npm pkg set devDependencies.@commitlint/config-conventional="^$(npm view @commitlint/config-conventional version)"

curl --remote-name https://raw.githubusercontent.com/donniean/react-app/main/commitlint.config.mjs

echo "npx --no -- commitlint --edit \$1" > .husky/commit-msg

# lint-staged

npm pkg set devDependencies.lint-staged="^$(npm view lint-staged version)"

curl --remote-name https://raw.githubusercontent.com/donniean/react-app/main/lint-staged.config.mjs

echo "npm run i18n:types
npm run i18n:check
npx lint-staged --concurrent false" > .husky/pre-commit
```

### Clean

```shell
# Aggregate Lint

npm pkg delete \
  scripts.lint \
  scripts.lint:fix

# AutoCorrect

npm pkg delete devDependencies.autocorrect-node

npm pkg delete \
  scripts.lint:text \
  scripts.lint:text:fix

rm \
  .autocorrectrc \
  .autocorrectignore

# CSpell

npm pkg delete devDependencies.cspell

npm pkg delete scripts.lint:spell

rm cspell.config.mjs

# EditorConfig

rm .editorconfig

# ESLint

npm pkg delete \
  devDependencies.@eslint-community/eslint-plugin-eslint-comments \
  devDependencies.@eslint/compat \
  devDependencies.@eslint/js \
  devDependencies.@tanstack/eslint-plugin-query \
  devDependencies.@vitest/eslint-plugin \
  devDependencies.eslint \
  devDependencies.eslint-config-prettier \
  devDependencies.eslint-import-resolver-typescript \
  devDependencies.eslint-plugin-import-x \
  devDependencies.eslint-plugin-jsx-a11y \
  devDependencies.eslint-plugin-n \
  devDependencies.eslint-plugin-promise \
  devDependencies.eslint-plugin-react \
  devDependencies.eslint-plugin-react-hooks \
  devDependencies.eslint-plugin-react-refresh \
  devDependencies.eslint-plugin-simple-import-sort \
  devDependencies.eslint-plugin-sonarjs \
  devDependencies.eslint-plugin-unicorn \
  devDependencies.eslint-plugin-unused-imports \
  devDependencies.globals \
  devDependencies.typescript-eslint

npm pkg delete \
  scripts.lint:js \
  scripts.lint:js:fix

rm eslint.config.mjs

# gitattributes

rm .gitattributes

# gitignore

rm .gitignore

# HTMLHint

npm pkg delete devDependencies.htmlhint

npm pkg delete scripts.lint:html

rm .htmlhintrc

# Knip

npm pkg delete devDependencies.knip

npm pkg delete \
  scripts.knip \
  scripts.knip:fix

# markdownlint

npm pkg delete devDependencies.markdownlint-cli

npm pkg delete \
  scripts.lint:md \
  scripts.lint:md:fix

rm \
  .markdownlint.json \
  .markdownlintignore

# npm-check-updates

npm pkg delete \
  scripts.ncu \
  scripts.ncu:upgrade

# Prettier

npm pkg delete \
  devDependencies.prettier \
  devDependencies.prettier-plugin-tailwindcss

npm pkg delete \
  scripts.lint:format \
  scripts.lint:format:fix

rm \
  prettier.config.mjs \
  .prettierignore

# Sort Package.json

npm pkg delete devDependencies.sort-package-json

npm pkg delete \
  scripts.lint:package-json \
  scripts.lint:package-json:fix

# Stylelint

npm pkg delete \
  devDependencies.stylelint \
  devDependencies.stylelint-config-recess-order \
  devDependencies.stylelint-config-standard \
  devDependencies.stylelint-config-css-modules

npm pkg delete \
  scripts.lint:css \
  scripts.lint:css:fix

rm \
  stylelint.config.mjs \
  .stylelintignore

# tsc

npm pkg delete devDependencies.typescript

npm pkg delete scripts.lint:types

# Vitest

npm pkg delete \
  devDependencies.@vitest/coverage-v8 \
  devDependencies.@vitest/ui \
  devDependencies.vitest

npm pkg delete \
  scripts.test \
  scripts.test:coverage \
  scripts.test:watch \
  scripts.test:ui

# Husky

npm pkg delete devDependencies.husky

npm pkg delete scripts.prepare

rm -rf .husky/

# commitlint

npm pkg delete \
  devDependencies.@commitlint/cli \
  devDependencies.@commitlint/config-conventional

rm commitlint.config.mjs

rm .husky/commit-msg

# lint-staged

npm pkg delete devDependencies.lint-staged

rm lint-staged.config.mjs

rm .husky/pre-commit
```
