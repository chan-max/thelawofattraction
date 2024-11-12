<template>
  <div
    v-if="isLoading"
    class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
  >
    <div class="flex items-center space-x-4">
      <!-- Loading spinner -->
      <div
        class="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"
      ></div>
      <p class="text-white text-lg font-semibold">Loading...</p>
    </div>
  </div>
</template>

<script setup>
import { useLoading } from "~/common/useLoading";

const { isLoading } = useLoading();
</script>

<style scoped>
/* Loading spinner animation */
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
.animate-spin {
  animation: spin 1s linear infinite;
}
</style>
