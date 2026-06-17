# Configs

## Table of Contents

- [Tools](#tools)
  - [Aggregate Lint](#aggregate-lint)
  - [AutoCorrect](#autocorrect)
  - [CSpell](#cspell)
  - [EditorConfig](#editorconfig)
  - [ESLint](#eslint)
  - [gitattributes](#gitattributes)
  - [gitignore](#gitignore)
  - [HTML-validate](#html-validate)
  - [Knip](#knip)
  - [markdownlint](#markdownlint)
  - [npm-check-updates](#npm-check-updates)
  - [Oxlint](#oxlint)
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

```bash
pnpm pkg set \
  'scripts["lint"]'='concurrently --group --timings "pnpm:lint:*(!:fix|^lint:knip$)" "pnpm:format:*:check" "pnpm:typecheck"' \
  'scripts["lint:fix"]'='concurrently --max-processes=1 --group --timings "pnpm:lint:*:fix(!^lint:knip:fix$)" "pnpm:format:*(!:check)"'
```

Clean

```bash
pnpm pkg delete \
  'scripts["lint"]' \
  'scripts["lint:fix"]'
```

### [AutoCorrect](https://github.com/huacnlee/autocorrect)

Setup

```bash
pnpm pkg set 'devDependencies["autocorrect-node"]'="$(pnpm view autocorrect-node version)"

pnpm pkg set \
  'scripts["lint:autocorrect"]'='autocorrect --lint' \
  'scripts["lint:autocorrect:fix"]'='autocorrect --fix'

curl --create-dirs \
  --output .autocorrectrc https://raw.githubusercontent.com/donniean/react-app/main/.autocorrectrc \
  --output .autocorrectignore https://raw.githubusercontent.com/donniean/react-app/main/.autocorrectignore
```

Clean

```bash
pnpm pkg delete 'devDependencies["autocorrect-node"]'

pnpm pkg delete \
  'scripts["lint:autocorrect"]' \
  'scripts["lint:autocorrect:fix"]'

rm \
  .autocorrectrc \
  .autocorrectignore
```

### [CSpell](https://github.com/streetsidesoftware/cspell)

Setup

```bash
pnpm pkg set 'devDependencies["cspell"]'="$(pnpm view cspell version)"

pnpm pkg set 'scripts["lint:spellcheck"]'='cspell lint --no-progress --no-must-find-files --dot --gitignore .'

curl --create-dirs --output cspell.config.mjs https://raw.githubusercontent.com/donniean/react-app/main/cspell.config.mjs
```

Clean

```bash
pnpm pkg delete 'devDependencies["cspell"]'

pnpm pkg delete 'scripts["lint:spellcheck"]'

rm cspell.config.mjs
```

### [EditorConfig](https://editorconfig.org/)

Setup

```bash
curl --create-dirs --output .editorconfig https://raw.githubusercontent.com/donniean/react-app/main/.editorconfig
```

Clean

```bash
rm .editorconfig
```

### [ESLint](https://github.com/eslint/eslint)

Setup

```bash

```

Clean

```bash
pnpm pkg delete \
  'devDependencies["@eslint-community/eslint-plugin-eslint-comments"]' \
  'devDependencies["@eslint/compat"]' \
  'devDependencies["@eslint/js"]' \
  'devDependencies["@tanstack/eslint-plugin-query"]' \
  'devDependencies["@vitest/eslint-plugin"]' \
  'devDependencies["eslint"]' \
  'devDependencies["eslint-config-prettier"]' \
  'devDependencies["eslint-import-resolver-typescript"]' \
  'devDependencies["eslint-plugin-i18next"]' \
  'devDependencies["eslint-plugin-import-x"]' \
  'devDependencies["eslint-plugin-jsx-a11y"]' \
  'devDependencies["eslint-plugin-n"]' \
  'devDependencies["eslint-plugin-promise"]' \
  'devDependencies["eslint-plugin-react"]' \
  'devDependencies["eslint-plugin-react-hooks"]' \
  'devDependencies["eslint-plugin-react-refresh"]' \
  'devDependencies["eslint-plugin-simple-import-sort"]' \
  'devDependencies["eslint-plugin-sonarjs"]' \
  'devDependencies["eslint-plugin-unicorn"]' \
  'devDependencies["eslint-plugin-unused-imports"]' \
  'devDependencies["globals"]' \
  'devDependencies["typescript-eslint"]'

pnpm pkg delete \
  'scripts["lint:eslint"]' \
  'scripts["lint:eslint:fix"]'

rm eslint.config.mjs
```

### [gitattributes](https://git-scm.com/docs/gitattributes)

Setup

```bash
curl --create-dirs --output .gitattributes https://raw.githubusercontent.com/donniean/react-app/main/.gitattributes
```

Clean

```bash
rm .gitattributes
```

### [gitignore](https://git-scm.com/docs/gitignore)

Setup

```bash
curl --create-dirs --output .gitignore https://raw.githubusercontent.com/donniean/react-app/main/.gitignore
```

Clean

```bash
rm .gitignore
```

### [HTML-validate](https://html-validate.org)

Setup

```bash
pnpm pkg set 'devDependencies["html-validate"]'="$(pnpm view html-validate version)"

pnpm pkg set 'scripts["lint:html"]'='html-validate "**/*.html"'

curl --create-dirs \
  --output .htmlvalidate.mjs https://raw.githubusercontent.com/donniean/react-app/main/.htmlvalidate.mjs \
  --output .htmlvalidateignore https://raw.githubusercontent.com/donniean/react-app/main/.htmlvalidateignore
```

Clean

```bash
pnpm pkg delete 'devDependencies["html-validate"]'

pnpm pkg delete 'scripts["lint:html"]'

rm \
  .htmlvalidate.mjs \
  .htmlvalidateignore
```

### [Knip](https://github.com/webpro-nl/knip)

Setup

```bash
pnpm pkg set 'devDependencies["knip"]'="$(pnpm view knip version)"

pnpm pkg set \
  'scripts["lint:knip"]'='knip' \
  'scripts["lint:knip:fix"]'='knip --fix'
```

Clean

```bash
pnpm pkg delete 'devDependencies["knip"]'

pnpm pkg delete \
  'scripts["lint:knip"]' \
  'scripts["lint:knip:fix"]'
```

### [markdownlint](https://github.com/DavidAnson/markdownlint)

Setup

```bash
pnpm pkg set 'devDependencies["markdownlint-cli"]'="$(pnpm view markdownlint-cli version)"

pnpm pkg set \
  'scripts["lint:markdown"]'='markdownlint --dot "**/*.md"' \
  'scripts["lint:markdown:fix"]'='pnpm run lint:markdown --fix'

curl --create-dirs \
  --output .markdownlint.json https://raw.githubusercontent.com/donniean/react-app/main/.markdownlint.json \
  --output .markdownlintignore https://raw.githubusercontent.com/donniean/react-app/main/.markdownlintignore
```

Clean

```bash
pnpm pkg delete 'devDependencies["markdownlint-cli"]'

pnpm pkg delete \
  'scripts["lint:markdown"]' \
  'scripts["lint:markdown:fix"]'

rm \
  .markdownlint.json \
  .markdownlintignore
```

### [npm-check-updates](https://github.com/raineorshine/npm-check-updates)

Setup

```bash
pnpm pkg set 'devDependencies["npm-check-updates"]'="$(pnpm view npm-check-updates version)"

pnpm pkg set \
  'scripts["ncu"]'='ncu --deep --format cooldown' \
  'scripts["ncu:upgrade"]'='pnpm run ncu --upgrade'

curl --create-dirs --output .ncurc.mjs https://raw.githubusercontent.com/donniean/react-app/main/.ncurc.mjs
```

Clean

```bash
pnpm pkg delete 'devDependencies["npm-check-updates"]'

pnpm pkg delete \
  'scripts["ncu"]' \
  'scripts["ncu:upgrade"]'

rm .ncurc.mjs
```

### [Oxlint](https://github.com/oxc-project/oxc)

Setup

```bash
pnpm pkg set 'devDependencies["oxlint"]'="$(pnpm view oxlint version)"
pnpm pkg set 'devDependencies["oxlint-tsgolint"]'="$(pnpm view oxlint-tsgolint version)"

pnpm pkg set \
  'scripts["lint:oxlint"]'='oxlint' \
  'scripts["lint:oxlint:fix"]'='oxlint --fix'

curl --create-dirs --output oxlint.config.ts https://raw.githubusercontent.com/donniean/react-app/main/oxlint.config.ts
```

Clean

```bash
pnpm pkg delete \
  'devDependencies["oxlint"]' \
  'devDependencies["oxlint-tsgolint"]'

pnpm pkg delete \
  'scripts["lint:oxlint"]' \
  'scripts["lint:oxlint:fix"]'

rm oxlint.config.ts
```

### [Prettier](https://github.com/prettier/prettier)

Setup

```bash
pnpm pkg set 'devDependencies["prettier"]'="$(pnpm view prettier version)"
pnpm pkg set 'devDependencies["prettier-plugin-tailwindcss"]'="$(pnpm view prettier-plugin-tailwindcss version)"

pnpm pkg set \
  'scripts["format:prettier"]'='prettier --write --ignore-unknown .' \
  'scripts["format:prettier:check"]'='prettier --check --ignore-unknown .'

curl --create-dirs \
  --output prettier.config.mjs https://raw.githubusercontent.com/donniean/react-app/main/prettier.config.mjs \
  --output .prettierignore https://raw.githubusercontent.com/donniean/react-app/main/.prettierignore
```

Clean

```bash
pnpm pkg delete \
  'devDependencies["prettier"]' \
  'devDependencies["prettier-plugin-tailwindcss"]'

pnpm pkg delete \
  'scripts["format:prettier"]' \
  'scripts["format:prettier:check"]'

rm \
  prettier.config.mjs \
  .prettierignore
```

### [Sort Package.json](https://github.com/keithamus/sort-package-json)

Setup

```bash
pnpm pkg set 'devDependencies["sort-package-json"]'="$(pnpm view sort-package-json version)"

pnpm pkg set \
  'scripts["format:package-json"]'='sort-package-json "**/package.json" --ignore "**/node_modules/**/package.json" --ignore "**/dist/**/package.json"' \
  'scripts["format:package-json:check"]'='pnpm run format:package-json --check'
```

Clean

```bash
pnpm pkg delete 'devDependencies["sort-package-json"]'

pnpm pkg delete \
  'scripts["format:package-json"]' \
  'scripts["format:package-json:check"]'
```

### [Stylelint](https://github.com/stylelint/stylelint)

Setup

```bash
pnpm pkg set 'devDependencies["stylelint"]'="$(pnpm view stylelint version)"
pnpm pkg set 'devDependencies["stylelint-config-recess-order"]'="$(pnpm view stylelint-config-recess-order version)"
pnpm pkg set 'devDependencies["stylelint-config-standard"]'="$(pnpm view stylelint-config-standard version)"
pnpm pkg set 'devDependencies["stylelint-config-css-modules"]'="$(pnpm view stylelint-config-css-modules version)"

pnpm pkg set \
  'scripts["lint:styles"]'='stylelint "**/*.css"' \
  'scripts["lint:styles:fix"]'='pnpm run lint:styles --fix'

curl --create-dirs \
  --output stylelint.config.mjs https://raw.githubusercontent.com/donniean/react-app/main/stylelint.config.mjs \
  --output .stylelintignore https://raw.githubusercontent.com/donniean/react-app/main/.stylelintignore
```

Clean

```bash
pnpm pkg delete \
  'devDependencies["stylelint"]' \
  'devDependencies["stylelint-config-recess-order"]' \
  'devDependencies["stylelint-config-standard"]' \
  'devDependencies["stylelint-config-css-modules"]'

pnpm pkg delete \
  'scripts["lint:styles"]' \
  'scripts["lint:styles:fix"]'

rm \
  stylelint.config.mjs \
  .stylelintignore
```

### [tsc](https://github.com/microsoft/TypeScript)

Setup

```bash
pnpm pkg set 'devDependencies["typescript"]'="$(pnpm view typescript version)"

pnpm pkg set 'scripts["typecheck"]'='tsc --noEmit'
```

Clean

```bash
pnpm pkg delete 'devDependencies["typescript"]'

pnpm pkg delete 'scripts["typecheck"]'
```

### [Vitest](https://github.com/vitest-dev/vitest)

Setup

```bash
pnpm pkg set 'devDependencies["@vitest/coverage-v8"]'="$(pnpm view @vitest/coverage-v8 version)"
pnpm pkg set 'devDependencies["@vitest/ui"]'="$(pnpm view @vitest/ui version)"
pnpm pkg set 'devDependencies["vitest"]'="$(pnpm view vitest version)"

pnpm pkg set \
  'scripts["test"]'='pnpm run test:unit' \
  'scripts["test:unit"]'='vitest run --pass-with-no-tests' \
  'scripts["test:unit:coverage"]'='vitest run --coverage' \
  'scripts["test:unit:watch"]'='vitest watch' \
  'scripts["test:unit:ui"]'='vitest --ui'
```

Clean

```bash
pnpm pkg delete \
  'devDependencies["@vitest/coverage-v8"]' \
  'devDependencies["@vitest/ui"]' \
  'devDependencies["vitest"]'

pnpm pkg delete \
  'scripts["test"]' \
  'scripts["test:unit"]' \
  'scripts["test:unit:coverage"]' \
  'scripts["test:unit:watch"]' \
  'scripts["test:unit:ui"]'
```

### [Husky](https://github.com/typicode/husky)

Setup

```bash
pnpm pkg set 'devDependencies["husky"]'="$(pnpm view husky version)"

pnpm pkg set 'scripts["prepare"]'='husky'

pnpm dlx husky@$(pnpm view husky version)
```

Clean

```bash
pnpm pkg delete 'devDependencies["husky"]'

pnpm pkg delete 'scripts["prepare"]'

rm -rf .husky/
```

### [commitlint](https://github.com/conventional-changelog/commitlint)

Setup

```bash
pnpm pkg set 'devDependencies["@commitlint/cli"]'="$(pnpm view @commitlint/cli version)"
pnpm pkg set 'devDependencies["@commitlint/config-conventional"]'="$(pnpm view @commitlint/config-conventional version)"
pnpm pkg set 'devDependencies["@commitlint/types"]'="$(pnpm view @commitlint/types version)"

curl --create-dirs \
  --output .husky/commit-msg https://raw.githubusercontent.com/donniean/react-app/main/.husky/commit-msg \
  --output commitlint.config.ts https://raw.githubusercontent.com/donniean/react-app/main/commitlint.config.ts
```

Clean

```bash
pnpm pkg delete \
  'devDependencies["@commitlint/cli"]' \
  'devDependencies["@commitlint/config-conventional"]' \
  'devDependencies["@commitlint/types"]'

rm \
  .husky/commit-msg \
  commitlint.config.ts
```

### [lint-staged](https://github.com/lint-staged/lint-staged)

Setup

```bash
pnpm pkg set 'devDependencies["lint-staged"]'="$(pnpm view lint-staged version)"

curl --create-dirs \
  --output .husky/pre-commit https://raw.githubusercontent.com/donniean/react-app/main/.husky/pre-commit \
  --output lint-staged.config.mjs https://raw.githubusercontent.com/donniean/react-app/main/lint-staged.config.mjs
```

Clean

```bash
pnpm pkg delete 'devDependencies["lint-staged"]'

rm \
  .husky/pre-commit \
  lint-staged.config.mjs
```

## All

### Setup

```bash
# Aggregate Lint

pnpm pkg set \
  'scripts["lint"]'='concurrently --group --timings "pnpm:lint:*(!:fix|^lint:knip$)" "pnpm:format:*:check" "pnpm:typecheck"' \
  'scripts["lint:fix"]'='concurrently --max-processes=1 --group --timings "pnpm:lint:*:fix(!^lint:knip:fix$)" "pnpm:format:*(!:check)"'

# AutoCorrect

pnpm pkg set 'devDependencies["autocorrect-node"]'="$(pnpm view autocorrect-node version)"

pnpm pkg set \
  'scripts["lint:autocorrect"]'='autocorrect --lint' \
  'scripts["lint:autocorrect:fix"]'='autocorrect --fix'

curl --create-dirs \
  --output .autocorrectrc https://raw.githubusercontent.com/donniean/react-app/main/.autocorrectrc \
  --output .autocorrectignore https://raw.githubusercontent.com/donniean/react-app/main/.autocorrectignore

# CSpell

pnpm pkg set 'devDependencies["cspell"]'="$(pnpm view cspell version)"

pnpm pkg set 'scripts["lint:spellcheck"]'='cspell lint --no-progress --no-must-find-files --dot --gitignore .'

curl --create-dirs --output cspell.config.mjs https://raw.githubusercontent.com/donniean/react-app/main/cspell.config.mjs

# EditorConfig

curl --create-dirs --output .editorconfig https://raw.githubusercontent.com/donniean/react-app/main/.editorconfig

# ESLint

# gitattributes

curl --create-dirs --output .gitattributes https://raw.githubusercontent.com/donniean/react-app/main/.gitattributes

# gitignore

curl --create-dirs --output .gitignore https://raw.githubusercontent.com/donniean/react-app/main/.gitignore

# HTML-validate

pnpm pkg set 'devDependencies["html-validate"]'="$(pnpm view html-validate version)"

pnpm pkg set 'scripts["lint:html"]'='html-validate "**/*.html"'

curl --create-dirs \
  --output .htmlvalidate.mjs https://raw.githubusercontent.com/donniean/react-app/main/.htmlvalidate.mjs \
  --output .htmlvalidateignore https://raw.githubusercontent.com/donniean/react-app/main/.htmlvalidateignore

# Knip

pnpm pkg set 'devDependencies["knip"]'="$(pnpm view knip version)"

pnpm pkg set \
  'scripts["lint:knip"]'='knip' \
  'scripts["lint:knip:fix"]'='knip --fix'

# markdownlint

pnpm pkg set 'devDependencies["markdownlint-cli"]'="$(pnpm view markdownlint-cli version)"

pnpm pkg set \
  'scripts["lint:markdown"]'='markdownlint --dot "**/*.md"' \
  'scripts["lint:markdown:fix"]'='pnpm run lint:markdown --fix'

curl --create-dirs \
  --output .markdownlint.json https://raw.githubusercontent.com/donniean/react-app/main/.markdownlint.json \
  --output .markdownlintignore https://raw.githubusercontent.com/donniean/react-app/main/.markdownlintignore

# npm-check-updates

pnpm pkg set 'devDependencies["npm-check-updates"]'="$(pnpm view npm-check-updates version)"

pnpm pkg set \
  'scripts["ncu"]'='ncu --deep --format cooldown' \
  'scripts["ncu:upgrade"]'='pnpm run ncu --upgrade'

curl --create-dirs --output .ncurc.mjs https://raw.githubusercontent.com/donniean/react-app/main/.ncurc.mjs

# Oxlint

pnpm pkg set 'devDependencies["oxlint"]'="$(pnpm view oxlint version)"
pnpm pkg set 'devDependencies["oxlint-tsgolint"]'="$(pnpm view oxlint-tsgolint version)"

pnpm pkg set \
  'scripts["lint:oxlint"]'='oxlint' \
  'scripts["lint:oxlint:fix"]'='oxlint --fix'

curl --create-dirs --output oxlint.config.ts https://raw.githubusercontent.com/donniean/react-app/main/oxlint.config.ts

# Prettier

pnpm pkg set 'devDependencies["prettier"]'="$(pnpm view prettier version)"
pnpm pkg set 'devDependencies["prettier-plugin-tailwindcss"]'="$(pnpm view prettier-plugin-tailwindcss version)"

pnpm pkg set \
  'scripts["format:prettier"]'='prettier --write --ignore-unknown .' \
  'scripts["format:prettier:check"]'='prettier --check --ignore-unknown .'

curl --create-dirs \
  --output prettier.config.mjs https://raw.githubusercontent.com/donniean/react-app/main/prettier.config.mjs \
  --output .prettierignore https://raw.githubusercontent.com/donniean/react-app/main/.prettierignore

# Sort Package.json

pnpm pkg set 'devDependencies["sort-package-json"]'="$(pnpm view sort-package-json version)"

pnpm pkg set \
  'scripts["format:package-json"]'='sort-package-json "**/package.json" --ignore "**/node_modules/**/package.json" --ignore "**/dist/**/package.json"' \
  'scripts["format:package-json:check"]'='pnpm run format:package-json --check'

# Stylelint

pnpm pkg set 'devDependencies["stylelint"]'="$(pnpm view stylelint version)"
pnpm pkg set 'devDependencies["stylelint-config-recess-order"]'="$(pnpm view stylelint-config-recess-order version)"
pnpm pkg set 'devDependencies["stylelint-config-standard"]'="$(pnpm view stylelint-config-standard version)"
pnpm pkg set 'devDependencies["stylelint-config-css-modules"]'="$(pnpm view stylelint-config-css-modules version)"

pnpm pkg set \
  'scripts["lint:styles"]'='stylelint "**/*.css"' \
  'scripts["lint:styles:fix"]'='pnpm run lint:styles --fix'

curl --create-dirs \
  --output stylelint.config.mjs https://raw.githubusercontent.com/donniean/react-app/main/stylelint.config.mjs \
  --output .stylelintignore https://raw.githubusercontent.com/donniean/react-app/main/.stylelintignore

# tsc

pnpm pkg set 'devDependencies["typescript"]'="$(pnpm view typescript version)"

pnpm pkg set 'scripts["typecheck"]'='tsc --noEmit'

# Vitest

pnpm pkg set 'devDependencies["@vitest/coverage-v8"]'="$(pnpm view @vitest/coverage-v8 version)"
pnpm pkg set 'devDependencies["@vitest/ui"]'="$(pnpm view @vitest/ui version)"
pnpm pkg set 'devDependencies["vitest"]'="$(pnpm view vitest version)"

pnpm pkg set \
  'scripts["test"]'='pnpm run test:unit' \
  'scripts["test:unit"]'='vitest run --pass-with-no-tests' \
  'scripts["test:unit:coverage"]'='vitest run --coverage' \
  'scripts["test:unit:watch"]'='vitest watch' \
  'scripts["test:unit:ui"]'='vitest --ui'

# Husky

pnpm pkg set 'devDependencies["husky"]'="$(pnpm view husky version)"

pnpm pkg set 'scripts["prepare"]'='husky'

pnpm dlx husky@$(pnpm view husky version)

# commitlint

pnpm pkg set 'devDependencies["@commitlint/cli"]'="$(pnpm view @commitlint/cli version)"
pnpm pkg set 'devDependencies["@commitlint/config-conventional"]'="$(pnpm view @commitlint/config-conventional version)"
pnpm pkg set 'devDependencies["@commitlint/types"]'="$(pnpm view @commitlint/types version)"

curl --create-dirs \
  --output .husky/commit-msg https://raw.githubusercontent.com/donniean/react-app/main/.husky/commit-msg \
  --output commitlint.config.ts https://raw.githubusercontent.com/donniean/react-app/main/commitlint.config.ts

# lint-staged

pnpm pkg set 'devDependencies["lint-staged"]'="$(pnpm view lint-staged version)"

curl --create-dirs \
  --output .husky/pre-commit https://raw.githubusercontent.com/donniean/react-app/main/.husky/pre-commit \
  --output lint-staged.config.mjs https://raw.githubusercontent.com/donniean/react-app/main/lint-staged.config.mjs
```

### Clean

```bash
# Aggregate Lint

pnpm pkg delete \
  'scripts["lint"]' \
  'scripts["lint:fix"]'

# AutoCorrect

pnpm pkg delete 'devDependencies["autocorrect-node"]'

pnpm pkg delete \
  'scripts["lint:autocorrect"]' \
  'scripts["lint:autocorrect:fix"]'

rm \
  .autocorrectrc \
  .autocorrectignore

# CSpell

pnpm pkg delete 'devDependencies["cspell"]'

pnpm pkg delete 'scripts["lint:spellcheck"]'

rm cspell.config.mjs

# EditorConfig

rm .editorconfig

# ESLint

pnpm pkg delete \
  'devDependencies["@eslint-community/eslint-plugin-eslint-comments"]' \
  'devDependencies["@eslint/compat"]' \
  'devDependencies["@eslint/js"]' \
  'devDependencies["@tanstack/eslint-plugin-query"]' \
  'devDependencies["@vitest/eslint-plugin"]' \
  'devDependencies["eslint"]' \
  'devDependencies["eslint-config-prettier"]' \
  'devDependencies["eslint-import-resolver-typescript"]' \
  'devDependencies["eslint-plugin-i18next"]' \
  'devDependencies["eslint-plugin-import-x"]' \
  'devDependencies["eslint-plugin-jsx-a11y"]' \
  'devDependencies["eslint-plugin-n"]' \
  'devDependencies["eslint-plugin-promise"]' \
  'devDependencies["eslint-plugin-react"]' \
  'devDependencies["eslint-plugin-react-hooks"]' \
  'devDependencies["eslint-plugin-react-refresh"]' \
  'devDependencies["eslint-plugin-simple-import-sort"]' \
  'devDependencies["eslint-plugin-sonarjs"]' \
  'devDependencies["eslint-plugin-unicorn"]' \
  'devDependencies["eslint-plugin-unused-imports"]' \
  'devDependencies["globals"]' \
  'devDependencies["typescript-eslint"]'

pnpm pkg delete \
  'scripts["lint:eslint"]' \
  'scripts["lint:eslint:fix"]'

rm eslint.config.mjs

# gitattributes

rm .gitattributes

# gitignore

rm .gitignore

# HTML-validate

pnpm pkg delete 'devDependencies["html-validate"]'

pnpm pkg delete 'scripts["lint:html"]'

rm \
  .htmlvalidate.mjs \
  .htmlvalidateignore

# Knip

pnpm pkg delete 'devDependencies["knip"]'

pnpm pkg delete \
  'scripts["lint:knip"]' \
  'scripts["lint:knip:fix"]'

# markdownlint

pnpm pkg delete 'devDependencies["markdownlint-cli"]'

pnpm pkg delete \
  'scripts["lint:markdown"]' \
  'scripts["lint:markdown:fix"]'

rm \
  .markdownlint.json \
  .markdownlintignore

# npm-check-updates

pnpm pkg delete 'devDependencies["npm-check-updates"]'

pnpm pkg delete \
  'scripts["ncu"]' \
  'scripts["ncu:upgrade"]'

rm .ncurc.mjs

# Oxlint

pnpm pkg delete \
  'devDependencies["oxlint"]' \
  'devDependencies["oxlint-tsgolint"]'

pnpm pkg delete \
  'scripts["lint:oxlint"]' \
  'scripts["lint:oxlint:fix"]'

rm oxlint.config.ts

# Prettier

pnpm pkg delete \
  'devDependencies["prettier"]' \
  'devDependencies["prettier-plugin-tailwindcss"]'

pnpm pkg delete \
  'scripts["format:prettier"]' \
  'scripts["format:prettier:check"]'

rm \
  prettier.config.mjs \
  .prettierignore

# Sort Package.json

pnpm pkg delete 'devDependencies["sort-package-json"]'

pnpm pkg delete \
  'scripts["format:package-json"]' \
  'scripts["format:package-json:check"]'

# Stylelint

pnpm pkg delete \
  'devDependencies["stylelint"]' \
  'devDependencies["stylelint-config-recess-order"]' \
  'devDependencies["stylelint-config-standard"]' \
  'devDependencies["stylelint-config-css-modules"]'

pnpm pkg delete \
  'scripts["lint:styles"]' \
  'scripts["lint:styles:fix"]'

rm \
  stylelint.config.mjs \
  .stylelintignore

# tsc

pnpm pkg delete 'devDependencies["typescript"]'

pnpm pkg delete 'scripts["typecheck"]'

# Vitest

pnpm pkg delete \
  'devDependencies["@vitest/coverage-v8"]' \
  'devDependencies["@vitest/ui"]' \
  'devDependencies["vitest"]'

pnpm pkg delete \
  'scripts["test"]' \
  'scripts["test:unit"]' \
  'scripts["test:unit:coverage"]' \
  'scripts["test:unit:watch"]' \
  'scripts["test:unit:ui"]'

# Husky

pnpm pkg delete 'devDependencies["husky"]'

pnpm pkg delete 'scripts["prepare"]'

rm -rf .husky/

# commitlint

pnpm pkg delete \
  'devDependencies["@commitlint/cli"]' \
  'devDependencies["@commitlint/config-conventional"]' \
  'devDependencies["@commitlint/types"]'

rm \
  .husky/commit-msg \
  commitlint.config.ts

# lint-staged

pnpm pkg delete 'devDependencies["lint-staged"]'

rm \
  .husky/pre-commit \
  lint-staged.config.mjs
```
