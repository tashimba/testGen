<template>
  <div class="spinner"></div>
</template>

<style scoped>
.spinner {
  width: 15px;
  height: 15px;
  border: 5px solid #ccc;
  border-top: 5px solid #3498db;
  border-radius: 50%;
  animation: spin 1.5s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
