<template>
  <el-row>
    {{ $t("test_strings.icon_test") }}:&nbsp;<el-icon><Finished /></el-icon>
  </el-row>

  <el-row>
    {{ $t("test_strings.prop_test") }}:&nbsp;{{ props.title }}
  </el-row>

  <el-row>
    <el-button type="primary" @click="onButtonClick">{{ $t("test_strings.button_label") }}</el-button>
  </el-row>

  <el-row>
    <el-table :data="tableData">
      <el-table-column
        label="Description"
        property="description"
        :show-overflow-tooltip="true"
      />
      <el-table-column
        label="Montant"
        property="amount"
        :show-overflow-tooltip="true"
        :sortable="true"
      />
    </el-table>
  </el-row>
</template>

<script setup lang="ts">
import { ref, Ref } from "vue";

import { I18nService } from "@/services/I18nService";
const { $t } = I18nService.get();

import { Finished } from "@element-plus/icons-vue";
import { TestInterface } from "@/models/TestInterface";

const props = defineProps({
  title: {
    type: String,
    required: true
  }
});

const emit = defineEmits<{
  // eslint-disable-next-line no-unused-vars
  (e: "newMessage", message: string): void;
}>();

const tableData: Ref<TestInterface[]> = ref([]);

function onButtonClick() {
  const description = `
    ${randomItem([
      'Dépense',
      'Achat',
    ])}
    ${randomItem([
      'alimentaire',
      'sympa',
    ])}
  `;

  tableData.value.push({
    description,
    amount: Math.floor(Math.random() * 2000)
  });

  emit("newMessage", $t("test_strings.button_message"));
}

function randomItem(array: any[]): any {
  return array[Math.floor(Math.random() * array.length)];
}
</script>

<style scoped lang="scss"></style>
