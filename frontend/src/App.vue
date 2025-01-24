<template>
  <div class="app">
    <div v-if="!crmStore.isAuth" class="container">
      <div class="container__interface">
        <MySelect />
        <MyButton />
      </div>
      <ListItems />
    </div>
    <MySpinner v-else />
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { useCrmStore } from "./stores/CrmStore.ts";
import MyButton from "./components/MyButton.vue";
import ListItems from "./components/ListItems.vue";
import MySelect from "./components/MySelect.vue";
import MySpinner from "./components/MySpinner.vue";

const crmStore = useCrmStore();

onMounted(async () => {
  await crmStore.fetchAccessToken();
});
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  gap: 30px;
  height: 200px;
}

.container__interface {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 80%;
}
</style>
