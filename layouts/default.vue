<template>
  <div class="min-h-screen bg-black text-white flex flex-col">
    <!-- Header -->
    <div class="fixed inset-x-0 top-0 z-50">
      <!-- Header Section -->
      <header
        class="flex items-center h-24 px-4 bg-transparent bg-opacity-80 relative max-w-screen-xl w-full mx-auto"
      >
        <!-- Logo (Centered) -->
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="flex flex-col items-center hover:scale-105 transition">
            <div class="text-xs font-bold">吸引力法则</div>
            <div class="text-xs font-bold">The law of attraction</div>
          </div>
        </div>
      </header>
    </div>

    <!-- Main Content -->
    <main
      class="flex-1 flex shrink-0 flex-col items-center justify-center text-center h-screen"
    >
      <slot></slot>
    </main>

    <!-- Footer -->
    <!-- <footer class="text-center py-4 bg-black text-gray-500">
      &copy; {{ new Date().getFullYear() }} Your Project. All rights reserved.
    </footer> -->
  </div>
</template>

<script setup>
// 如果需要其他逻辑，可以在此定义
</script>

<style scoped>
img {
  display: block;
}
</style>
