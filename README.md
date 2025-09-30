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
pnpm pkg set \
  scripts.lint='concurrently --group --timings --prefix-colors=auto "pnpm:lint:*(!:fix)"' \
  scripts.lint:fix='concurrently --max-processes=1 --group --timings --prefix-colors=auto "pnpm:lint:*:fix"'
```

Clean

```shell
pnpm pkg delete \
  scripts.lint \
  scripts.lint:fix
```

### [AutoCorrect](https://github.com/huacnlee/autocorrect)

Setup

```shell
pnpm pkg set devDependencies.autocorrect-node="$(pnpm view autocorrect-node version)"

pnpm pkg set \
  scripts.lint:text='autocorrect --lint' \
  scripts.lint:text:fix='autocorrect --fix'

curl \
  --remote-name https://raw.githubusercontent.com/donniean/react-app/main/.autocorrectrc \
  --remote-name https://raw.githubusercontent.com/donniean/react-app/main/.autocorrectignore
```

Clean

```shell
pnpm pkg delete devDependencies.autocorrect-node

pnpm pkg delete \
  scripts.lint:text \
  scripts.lint:text:fix

rm \
  .autocorrectrc \
  .autocorrectignore
```

### [CSpell](https://github.com/streetsidesoftware/cspell)

Setup

```shell
pnpm pkg set devDependencies.cspell="$(pnpm view cspell version)"

pnpm pkg set scripts.lint:spell='cspell lint --no-progress --no-must-find-files --dot --gitignore .'

curl --remote-name https://raw.githubusercontent.com/donniean/react-app/main/cspell.config.mjs
```

Clean

```shell
pnpm pkg delete devDependencies.cspell

pnpm pkg delete scripts.lint:spell

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
pnpm pkg set devDependencies.@eslint-community/eslint-plugin-eslint-comments="$(pnpm view @eslint-community/eslint-plugin-eslint-comments version)"
pnpm pkg set devDependencies.@eslint/compat="$(pnpm view @eslint/compat version)"
pnpm pkg set devDependencies.@eslint/js="$(pnpm view @eslint/js version)"
pnpm pkg set devDependencies.@tanstack/eslint-plugin-query="$(pnpm view @tanstack/eslint-plugin-query version)"
pnpm pkg set devDependencies.@vitest/eslint-plugin="$(pnpm view @vitest/eslint-plugin version)"
pnpm pkg set devDependencies.eslint="$(pnpm view eslint version)"
pnpm pkg set devDependencies.eslint-config-prettier="$(pnpm view eslint-config-prettier version)"
pnpm pkg set devDependencies.eslint-import-resolver-typescript="$(pnpm view eslint-import-resolver-typescript version)"
pnpm pkg set devDependencies.eslint-plugin-import-x="$(pnpm view eslint-plugin-import-x version)"
pnpm pkg set devDependencies.eslint-plugin-jsx-a11y="$(pnpm view eslint-plugin-jsx-a11y version)"
pnpm pkg set devDependencies.eslint-plugin-n="$(pnpm view eslint-plugin-n version)"
pnpm pkg set devDependencies.eslint-plugin-promise="$(pnpm view eslint-plugin-promise version)"
pnpm pkg set devDependencies.eslint-plugin-react="$(pnpm view eslint-plugin-react version)"
pnpm pkg set devDependencies.eslint-plugin-react-hooks="$(pnpm view eslint-plugin-react-hooks@rc version)"
pnpm pkg set devDependencies.eslint-plugin-react-refresh="$(pnpm view eslint-plugin-react-refresh version)"
pnpm pkg set devDependencies.eslint-plugin-simple-import-sort="$(pnpm view eslint-plugin-simple-import-sort version)"
pnpm pkg set devDependencies.eslint-plugin-sonarjs="$(pnpm view eslint-plugin-sonarjs version)"
pnpm pkg set devDependencies.eslint-plugin-unicorn="$(pnpm view eslint-plugin-unicorn version)"
pnpm pkg set devDependencies.eslint-plugin-unused-imports="$(pnpm view eslint-plugin-unused-imports version)"
pnpm pkg set devDependencies.globals="$(pnpm view globals version)"
pnpm pkg set devDependencies.typescript-eslint="$(pnpm view typescript-eslint version)"

pnpm pkg set \
  scripts.lint:js='eslint' \
  scripts.lint:js:fix='pnpm run lint:js --fix'

curl --remote-name https://raw.githubusercontent.com/donniean/react-app/main/eslint.config.mjs
```

Clean

```shell
pnpm pkg delete \
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

pnpm pkg delete \
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
pnpm pkg set devDependencies.htmlhint="$(pnpm view htmlhint version)"

pnpm pkg set scripts.lint:html='htmlhint --ignore="**/coverage/**" "**/*.html"'

curl --remote-name https://raw.githubusercontent.com/donniean/react-app/main/.htmlhintrc
```

Clean

```shell
pnpm pkg delete devDependencies.htmlhint

pnpm pkg delete scripts.lint:html

rm .htmlhintrc
```

### [Knip](https://github.com/webpro-nl/knip)

Setup

```shell
pnpm pkg set devDependencies.knip="$(pnpm view knip version)"

pnpm pkg set \
  scripts.knip='knip' \
  scripts.knip:fix='pnpm run knip --fix'
```

Clean

```shell
pnpm pkg delete devDependencies.knip

pnpm pkg delete \
  scripts.knip \
  scripts.knip:fix
```

### [markdownlint](https://github.com/DavidAnson/markdownlint)

Setup

```shell
pnpm pkg set devDependencies.markdownlint-cli="$(pnpm view markdownlint-cli version)"

pnpm pkg set \
  scripts.lint:md='markdownlint --dot "**/*.md"' \
  scripts.lint:md:fix='pnpm run lint:md --fix'

curl \
  --remote-name https://raw.githubusercontent.com/donniean/react-app/main/.markdownlint.json \
  --remote-name https://raw.githubusercontent.com/donniean/react-app/main/.markdownlintignore
```

Clean

```shell
pnpm pkg delete devDependencies.markdownlint-cli

pnpm pkg delete \
  scripts.lint:md \
  scripts.lint:md:fix

rm \
  .markdownlint.json \
  .markdownlintignore
```

### [npm-check-updates](https://github.com/raineorshine/npm-check-updates)

Setup

```shell
pnpm pkg set \
  scripts.ncu='pnpm dlx npm-check-updates --deep' \
  scripts.ncu:upgrade='pnpm run ncu --upgrade'
```

Clean

```shell
pnpm pkg delete \
  scripts.ncu \
  scripts.ncu:upgrade
```

### [Prettier](https://github.com/prettier/prettier)

Setup

```shell
pnpm pkg set devDependencies.prettier="$(pnpm view prettier version)"
pnpm pkg set devDependencies.prettier-plugin-tailwindcss="$(pnpm view prettier-plugin-tailwindcss version)"

pnpm pkg set \
  scripts.lint:format='prettier --check --ignore-unknown .' \
  scripts.lint:format:fix='prettier --write --ignore-unknown .'

curl \
  --remote-name https://raw.githubusercontent.com/donniean/react-app/main/prettier.config.mjs \
  --remote-name https://raw.githubusercontent.com/donniean/react-app/main/.prettierignore
```

Clean

```shell
pnpm pkg delete \
  devDependencies.prettier \
  devDependencies.prettier-plugin-tailwindcss

pnpm pkg delete \
  scripts.lint:format \
  scripts.lint:format:fix

rm \
  prettier.config.mjs \
  .prettierignore
```

### [Sort Package.json](https://github.com/keithamus/sort-package-json)

Setup

```shell
pnpm pkg set devDependencies.sort-package-json="$(pnpm view sort-package-json version)"

pnpm pkg set \
  scripts.lint:package-json='pnpm run lint:package-json:fix --check' \
  scripts.lint:package-json:fix='sort-package-json "**/package.json" --ignore "**/node_modules/**/package.json" --ignore "**/dist/**/package.json"'
```

Clean

```shell
pnpm pkg delete devDependencies.sort-package-json

pnpm pkg delete \
  scripts.lint:package-json \
  scripts.lint:package-json:fix
```

### [Stylelint](https://github.com/stylelint/stylelint)

Setup

```shell
pnpm pkg set devDependencies.stylelint="$(pnpm view stylelint version)"
pnpm pkg set devDependencies.stylelint-config-recess-order="$(pnpm view stylelint-config-recess-order version)"
pnpm pkg set devDependencies.stylelint-config-standard="$(pnpm view stylelint-config-standard version)"
pnpm pkg set devDependencies.stylelint-config-css-modules="$(pnpm view stylelint-config-css-modules version)"

pnpm pkg set \
  scripts.lint:css='stylelint "**/*.css"' \
  scripts.lint:css:fix='pnpm run lint:css --fix'

curl \
  --remote-name https://raw.githubusercontent.com/donniean/react-app/main/stylelint.config.mjs \
  --remote-name https://raw.githubusercontent.com/donniean/react-app/main/.stylelintignore
```

Clean

```shell
pnpm pkg delete \
  devDependencies.stylelint \
  devDependencies.stylelint-config-recess-order \
  devDependencies.stylelint-config-standard \
  devDependencies.stylelint-config-css-modules

pnpm pkg delete \
  scripts.lint:css \
  scripts.lint:css:fix

rm \
  stylelint.config.mjs \
  .stylelintignore
```

### [tsc](https://github.com/microsoft/TypeScript)

Setup

```shell
pnpm pkg set devDependencies.typescript="$(pnpm view typescript version)"

pnpm pkg set scripts.lint:types='tsc --noEmit'
```

Clean

```shell
pnpm pkg delete devDependencies.typescript

pnpm pkg delete scripts.lint:types
```

### [Vitest](https://github.com/vitest-dev/vitest)

Setup

```shell
pnpm pkg set devDependencies.@vitest/coverage-v8="$(pnpm view @vitest/coverage-v8 version)"
pnpm pkg set devDependencies.@vitest/ui="$(pnpm view @vitest/ui version)"
pnpm pkg set devDependencies.vitest="$(pnpm view vitest version)"

pnpm pkg set \
  scripts.test='vitest run --passWithNoTests' \
  scripts.test:coverage='vitest run --coverage' \
  scripts.test:watch='vitest watch' \
  scripts.test:ui='vitest --ui'
```

Clean

```shell
pnpm pkg delete \
  devDependencies.@vitest/coverage-v8 \
  devDependencies.@vitest/ui \
  devDependencies.vitest

pnpm pkg delete \
  scripts.test \
  scripts.test:coverage \
  scripts.test:watch \
  scripts.test:ui
```

### [Husky](https://github.com/typicode/husky)

Setup

```shell
pnpm pkg set devDependencies.husky="$(pnpm view husky version)"

pnpm pkg set scripts.prepare='husky'

pnpm run prepare
```

Clean

```shell
pnpm pkg delete devDependencies.husky

pnpm pkg delete scripts.prepare

rm -rf .husky/
```

### [commitlint](https://github.com/conventional-changelog/commitlint)

Setup

```shell
pnpm pkg set devDependencies.@commitlint/cli="$(pnpm view @commitlint/cli version)"
pnpm pkg set devDependencies.@commitlint/config-conventional="$(pnpm view @commitlint/config-conventional version)"

curl --remote-name https://raw.githubusercontent.com/donniean/react-app/main/commitlint.config.mjs

echo '#!/usr/bin/env sh\n\npnpm exec commitlint --edit "$1"' > .husky/commit-msg
```

Clean

```shell
pnpm pkg delete \
  devDependencies.@commitlint/cli \
  devDependencies.@commitlint/config-conventional

rm commitlint.config.mjs

rm .husky/commit-msg
```

### [lint-staged](https://github.com/lint-staged/lint-staged)

Setup

```shell
pnpm pkg set devDependencies.lint-staged="$(pnpm view lint-staged version)"

curl --remote-name https://raw.githubusercontent.com/donniean/react-app/main/lint-staged.config.mjs

echo "#!/usr/bin/env sh

pnpm run i18n:types
pnpm run i18n:check
pnpm exec lint-staged --concurrent false" > .husky/pre-commit
```

Clean

```shell
pnpm pkg delete devDependencies.lint-staged

rm lint-staged.config.mjs

rm .husky/pre-commit
```

## All

### Setup

```shell
# Aggregate Lint

pnpm pkg set \
  scripts.lint='concurrently --group --timings --prefix-colors=auto "pnpm:lint:*(!:fix)"' \
  scripts.lint:fix='concurrently --max-processes=1 --group --timings --prefix-colors=auto "pnpm:lint:*:fix"'

# AutoCorrect

pnpm pkg set devDependencies.autocorrect-node="$(pnpm view autocorrect-node version)"

pnpm pkg set \
  scripts.lint:text='autocorrect --lint' \
  scripts.lint:text:fix='autocorrect --fix'

curl \
  --remote-name https://raw.githubusercontent.com/donniean/react-app/main/.autocorrectrc \
  --remote-name https://raw.githubusercontent.com/donniean/react-app/main/.autocorrectignore

# CSpell

pnpm pkg set devDependencies.cspell="$(pnpm view cspell version)"

pnpm pkg set scripts.lint:spell='cspell lint --no-progress --no-must-find-files --dot --gitignore .'

curl --remote-name https://raw.githubusercontent.com/donniean/react-app/main/cspell.config.mjs

# EditorConfig

curl --remote-name https://raw.githubusercontent.com/donniean/react-app/main/.editorconfig

# ESLint

pnpm pkg set devDependencies.@eslint-community/eslint-plugin-eslint-comments="$(pnpm view @eslint-community/eslint-plugin-eslint-comments version)"
pnpm pkg set devDependencies.@eslint/compat="$(pnpm view @eslint/compat version)"
pnpm pkg set devDependencies.@eslint/js="$(pnpm view @eslint/js version)"
pnpm pkg set devDependencies.@tanstack/eslint-plugin-query="$(pnpm view @tanstack/eslint-plugin-query version)"
pnpm pkg set devDependencies.@vitest/eslint-plugin="$(pnpm view @vitest/eslint-plugin version)"
pnpm pkg set devDependencies.eslint="$(pnpm view eslint version)"
pnpm pkg set devDependencies.eslint-config-prettier="$(pnpm view eslint-config-prettier version)"
pnpm pkg set devDependencies.eslint-import-resolver-typescript="$(pnpm view eslint-import-resolver-typescript version)"
pnpm pkg set devDependencies.eslint-plugin-import-x="$(pnpm view eslint-plugin-import-x version)"
pnpm pkg set devDependencies.eslint-plugin-jsx-a11y="$(pnpm view eslint-plugin-jsx-a11y version)"
pnpm pkg set devDependencies.eslint-plugin-n="$(pnpm view eslint-plugin-n version)"
pnpm pkg set devDependencies.eslint-plugin-promise="$(pnpm view eslint-plugin-promise version)"
pnpm pkg set devDependencies.eslint-plugin-react="$(pnpm view eslint-plugin-react version)"
pnpm pkg set devDependencies.eslint-plugin-react-hooks="$(pnpm view eslint-plugin-react-hooks@rc version)"
pnpm pkg set devDependencies.eslint-plugin-react-refresh="$(pnpm view eslint-plugin-react-refresh version)"
pnpm pkg set devDependencies.eslint-plugin-simple-import-sort="$(pnpm view eslint-plugin-simple-import-sort version)"
pnpm pkg set devDependencies.eslint-plugin-sonarjs="$(pnpm view eslint-plugin-sonarjs version)"
pnpm pkg set devDependencies.eslint-plugin-unicorn="$(pnpm view eslint-plugin-unicorn version)"
pnpm pkg set devDependencies.eslint-plugin-unused-imports="$(pnpm view eslint-plugin-unused-imports version)"
pnpm pkg set devDependencies.globals="$(pnpm view globals version)"
pnpm pkg set devDependencies.typescript-eslint="$(pnpm view typescript-eslint version)"

pnpm pkg set \
  scripts.lint:js='eslint' \
  scripts.lint:js:fix='pnpm run lint:js --fix'

curl --remote-name https://raw.githubusercontent.com/donniean/react-app/main/eslint.config.mjs

# gitattributes

curl --remote-name https://raw.githubusercontent.com/donniean/react-app/main/.gitattributes

# gitignore

curl --remote-name https://raw.githubusercontent.com/donniean/react-app/main/.gitignore

# HTMLHint

pnpm pkg set devDependencies.htmlhint="$(pnpm view htmlhint version)"

pnpm pkg set scripts.lint:html='htmlhint --ignore="**/coverage/**" "**/*.html"'

curl --remote-name https://raw.githubusercontent.com/donniean/react-app/main/.htmlhintrc

# Knip

pnpm pkg set devDependencies.knip="$(pnpm view knip version)"

pnpm pkg set \
  scripts.knip='knip' \
  scripts.knip:fix='pnpm run knip --fix'

# markdownlint

pnpm pkg set devDependencies.markdownlint-cli="$(pnpm view markdownlint-cli version)"

pnpm pkg set \
  scripts.lint:md='markdownlint --dot "**/*.md"' \
  scripts.lint:md:fix='pnpm run lint:md --fix'

curl \
  --remote-name https://raw.githubusercontent.com/donniean/react-app/main/.markdownlint.json \
  --remote-name https://raw.githubusercontent.com/donniean/react-app/main/.markdownlintignore

# npm-check-updates

pnpm pkg set \
  scripts.ncu='pnpm dlx npm-check-updates --deep' \
  scripts.ncu:upgrade='pnpm run ncu --upgrade'

# Prettier

pnpm pkg set devDependencies.prettier="$(pnpm view prettier version)"
pnpm pkg set devDependencies.prettier-plugin-tailwindcss="$(pnpm view prettier-plugin-tailwindcss version)"

pnpm pkg set \
  scripts.lint:format='prettier --check --ignore-unknown .' \
  scripts.lint:format:fix='prettier --write --ignore-unknown .'

curl \
  --remote-name https://raw.githubusercontent.com/donniean/react-app/main/prettier.config.mjs \
  --remote-name https://raw.githubusercontent.com/donniean/react-app/main/.prettierignore

# Sort Package.json

pnpm pkg set devDependencies.sort-package-json="$(pnpm view sort-package-json version)"

pnpm pkg set \
  scripts.lint:package-json='pnpm run lint:package-json:fix --check' \
  scripts.lint:package-json:fix='sort-package-json "**/package.json" --ignore "**/node_modules/**/package.json" --ignore "**/dist/**/package.json"'

# Stylelint

pnpm pkg set devDependencies.stylelint="$(pnpm view stylelint version)"
pnpm pkg set devDependencies.stylelint-config-recess-order="$(pnpm view stylelint-config-recess-order version)"
pnpm pkg set devDependencies.stylelint-config-standard="$(pnpm view stylelint-config-standard version)"
pnpm pkg set devDependencies.stylelint-config-css-modules="$(pnpm view stylelint-config-css-modules version)"

pnpm pkg set \
  scripts.lint:css='stylelint "**/*.css"' \
  scripts.lint:css:fix='pnpm run lint:css --fix'

curl \
  --remote-name https://raw.githubusercontent.com/donniean/react-app/main/stylelint.config.mjs \
  --remote-name https://raw.githubusercontent.com/donniean/react-app/main/.stylelintignore

# tsc

pnpm pkg set devDependencies.typescript="$(pnpm view typescript version)"

pnpm pkg set scripts.lint:types='tsc --noEmit'

# Vitest

pnpm pkg set devDependencies.@vitest/coverage-v8="$(pnpm view @vitest/coverage-v8 version)"
pnpm pkg set devDependencies.@vitest/ui="$(pnpm view @vitest/ui version)"
pnpm pkg set devDependencies.vitest="$(pnpm view vitest version)"

pnpm pkg set \
  scripts.test='vitest run --passWithNoTests' \
  scripts.test:coverage='vitest run --coverage' \
  scripts.test:watch='vitest watch' \
  scripts.test:ui='vitest --ui'

# Husky

pnpm pkg set devDependencies.husky="$(pnpm view husky version)"

pnpm pkg set scripts.prepare='husky'

pnpm run prepare

# commitlint

pnpm pkg set devDependencies.@commitlint/cli="$(pnpm view @commitlint/cli version)"
pnpm pkg set devDependencies.@commitlint/config-conventional="$(pnpm view @commitlint/config-conventional version)"

curl --remote-name https://raw.githubusercontent.com/donniean/react-app/main/commitlint.config.mjs

echo '#!/usr/bin/env sh\n\npnpm exec commitlint --edit "$1"' > .husky/commit-msg

# lint-staged

pnpm pkg set devDependencies.lint-staged="$(pnpm view lint-staged version)"

curl --remote-name https://raw.githubusercontent.com/donniean/react-app/main/lint-staged.config.mjs

echo "#!/usr/bin/env sh

pnpm run i18n:types
pnpm run i18n:check
pnpm exec lint-staged --concurrent false" > .husky/pre-commit
```

### Clean

```shell
# Aggregate Lint

pnpm pkg delete \
  scripts.lint \
  scripts.lint:fix

# AutoCorrect

pnpm pkg delete devDependencies.autocorrect-node

pnpm pkg delete \
  scripts.lint:text \
  scripts.lint:text:fix

rm \
  .autocorrectrc \
  .autocorrectignore

# CSpell

pnpm pkg delete devDependencies.cspell

pnpm pkg delete scripts.lint:spell

rm cspell.config.mjs

# EditorConfig

rm .editorconfig

# ESLint

pnpm pkg delete \
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

pnpm pkg delete \
  scripts.lint:js \
  scripts.lint:js:fix

rm eslint.config.mjs

# gitattributes

rm .gitattributes

# gitignore

rm .gitignore

# HTMLHint

pnpm pkg delete devDependencies.htmlhint

pnpm pkg delete scripts.lint:html

rm .htmlhintrc

# Knip

pnpm pkg delete devDependencies.knip

pnpm pkg delete \
  scripts.knip \
  scripts.knip:fix

# markdownlint

pnpm pkg delete devDependencies.markdownlint-cli

pnpm pkg delete \
  scripts.lint:md \
  scripts.lint:md:fix

rm \
  .markdownlint.json \
  .markdownlintignore

# npm-check-updates

pnpm pkg delete \
  scripts.ncu \
  scripts.ncu:upgrade

# Prettier

pnpm pkg delete \
  devDependencies.prettier \
  devDependencies.prettier-plugin-tailwindcss

pnpm pkg delete \
  scripts.lint:format \
  scripts.lint:format:fix

rm \
  prettier.config.mjs \
  .prettierignore

# Sort Package.json

pnpm pkg delete devDependencies.sort-package-json

pnpm pkg delete \
  scripts.lint:package-json \
  scripts.lint:package-json:fix

# Stylelint

pnpm pkg delete \
  devDependencies.stylelint \
  devDependencies.stylelint-config-recess-order \
  devDependencies.stylelint-config-standard \
  devDependencies.stylelint-config-css-modules

pnpm pkg delete \
  scripts.lint:css \
  scripts.lint:css:fix

rm \
  stylelint.config.mjs \
  .stylelintignore

# tsc

pnpm pkg delete devDependencies.typescript

pnpm pkg delete scripts.lint:types

# Vitest

pnpm pkg delete \
  devDependencies.@vitest/coverage-v8 \
  devDependencies.@vitest/ui \
  devDependencies.vitest

pnpm pkg delete \
  scripts.test \
  scripts.test:coverage \
  scripts.test:watch \
  scripts.test:ui

# Husky

pnpm pkg delete devDependencies.husky

pnpm pkg delete scripts.prepare

rm -rf .husky/

# commitlint

pnpm pkg delete \
  devDependencies.@commitlint/cli \
  devDependencies.@commitlint/config-conventional

rm commitlint.config.mjs

rm .husky/commit-msg

# lint-staged

pnpm pkg delete devDependencies.lint-staged

rm lint-staged.config.mjs

rm .husky/pre-commit
```
