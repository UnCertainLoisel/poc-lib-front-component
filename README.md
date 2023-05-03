# POC - lib - front-component

Proof of concept de lib Vue3 / Element-plus

Ajouter comme dépendence: `npm i git+https://github.com/UnCertainLoisel/poc-lib-front-component.git`

Le CSS n'est pas fournit par la lib.

Les components Element-plus de la lib respectent la localisation de l'app. Exemple d'`App.vue` pour le Français:
```html
<script setup lang="ts">
import { ElConfigProvider } from 'element-plus';
import fr from 'element-plus/dist/locale/fr.mjs';
const locale = fr;
</script>

<template>
  <el-config-provider :locale="locale">
    ...
  </el-config-provider>
</template>
```
