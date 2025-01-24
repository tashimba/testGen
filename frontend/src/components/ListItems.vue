<template>
  <div class="items">
    <div class="items__content">
      <h3>Результаты</h3>
      <div
        class="items__row"
        v-for="item in crmStore.createdItems"
        :key="item.id"
      >
        <span class="items__name">{{ item.name }}</span>
        <span class="items__id">id: {{ item.id }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCrmStore } from "../stores/CrmStore";

const crmStore = useCrmStore();
</script>

<style scoped>
h3 {
  margin: 0;
}
.items {
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 12px;
}
.items__content {
  text-align: center;
  height: 200px;
  width: 500px;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-gutter: stable;
}

.items__row {
  padding: 0px 70px;
  display: flex;
  justify-content: space-around;
}

.items__name {
  flex: 1;
  text-align: left;
}

.items__id {
  flex: 1;
  text-align: right;
}
</style>
