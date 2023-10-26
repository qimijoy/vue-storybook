# vue-storybook
My personal Storybook of Vue-components.

## Component Usage
In both cases you need to add this line in main.js:
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
import { QButton } '@qimijoy/vue-storybook/dist/style.css';
app.use(QButton);
```

## Storybook Installation for Development
```
npm ci
npx husky install
```

## Storybook Build
```
npm run build
```

## Run Storybook
```
npm run storybook
```

