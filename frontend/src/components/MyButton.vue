<template>
  <button :disabled="crmStore.isDisabled" @click="crmStore.createItem()">
    <span v-if="crmStore.isLoading"> <MySpinner /></span>
    <span v-else>{{ "Создать" }}</span>
  </button>
</template>

<script setup lang="ts">
import { useCrmStore } from "../stores/CrmStore";
import MySpinner from "./MySpinner.vue";

const crmStore = useCrmStore();
</script>

<style scoped>
button {
  height: 40px;
  width: 250px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
button:hover {
  background-color: #0069d9;
}
button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}
</style>
