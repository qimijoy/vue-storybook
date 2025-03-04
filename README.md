# vue-storybook
My personal Storybook of Vue-components.

## Component Usage
You need to add this line in main.js:
```
import '@qimijoy/vue-storybook/dist/style.css';
```

### Local Installation
In any .vue-file:
```
<template>
  ...
  <QButton>Sample text</QButton>
  ...
</template>

<script setup>
  ...
  import { QButton } from '@qimijoy/vue-storybook';
  ...
</script>
```

### Global Installation
Add this line in main.js:
```
import { QButton } from '@qimijoy/vue-storybook';
import '@qimijoy/vue-storybook/dist/style.css';
app.use(QButton);
```

## Storybook Installation for Development
```
npm ci
```

## Components Build
```
npm run build
```

## Run Storybook
```
npm run storybook
```

## Build Storybook
```
npm run build-storybook
```

### Lint with ESLint

```sh
npm run eslint
```

### Lint with Stylelint

```sh
npm run stylelint
```

### Lint with ESLint & Stylelint

```sh
npm run lint
```

