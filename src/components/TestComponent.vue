<template>
  <el-row
    >Test d'icône:&nbsp;<el-icon><Finished /></el-icon
  ></el-row>

  <el-row>{{ $t("test_strings.localization_test") }}:&nbsp;<Upload v-model="file" /></el-row>

  <el-row>
    Test de bouton:&nbsp;<el-button type="primary" @click="onButtonClick">Pouet</el-button></el-row
  >
</template>

<script setup lang="ts">
import { ref } from "vue";

import { I18nService } from "@/services/I18nService";
const { $t } = I18nService.get();

import { Finished } from "@element-plus/icons-vue";

const emit = defineEmits<{
  // eslint-disable-next-line no-unused-vars
  (e: "newMessage", message: string): void;
}>();

const file = ref(null);

function onButtonClick() {
  emit("newMessage", $t("test_strings.button_message"));
}
</script>

<style scoped lang="scss"></style>
