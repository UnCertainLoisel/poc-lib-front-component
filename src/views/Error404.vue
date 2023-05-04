<script setup lang="ts">
import { I18nService } from "@/services/I18nService";
const { $t } = I18nService.get();
</script>

<template>
  <el-main>
    <el-card>
      <h1>{{ $t('error404.title') }}</h1>
      <el-row>
        {{ $t('error404.message') }}
      </el-row>
    </el-card>
  </el-main>
</template>

<style scoped lang="scss">
el-card {
  width: fit-content;
  height: fit-content;
}
</style>
