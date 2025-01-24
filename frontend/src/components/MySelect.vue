<template>
  <select v-model="crmStore.selectedValue" name="select">
    <option value="" disabled selected>Не выбрано</option>
    <option
      v-for="(item, index) in crmStore.selectValues"
      :key="index"
      :value="item.value"
    >
      {{ item.label }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { useCrmStore } from "../stores/CrmStore";

const crmStore = useCrmStore();
</script>

<style>
select {
  height: 40px;
  width: 250px;
  background-color: rgba(0, 0, 0, 0.03);
  border-radius: 4px;
}
</style>
