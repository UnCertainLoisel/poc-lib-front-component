<template>
  <el-button type="primary" @click="onButtonClick">Pouet</el-button>
  <ul>
    <li v-for="message in messages">
      {{ message }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { Ref, ref } from "vue";

const emit = defineEmits<{
  // eslint-disable-next-line no-unused-vars
  (e: "newMessage", message: string): void;
}>();

const messages: Ref<string[]> = ref([]);

function onButtonClick() {
  const num = messages.value.length + 1;
  const message = `${num}${num === 1 ? 'er' : 'ème'} message`
  messages.value.push(message);
  emit("newMessage", message);
}
</script>

<style scoped lang="scss"></style>
