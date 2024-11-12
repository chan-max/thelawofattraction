<template>
  <div
    v-if="visible"
    class="fixed inset-0 bg-black flex items-center justify-center z-50"
  >
    <iframe :src="url" frameborder="0" class="w-full h-full" @load="handleLoad"></iframe>
    <div
      v-if="loading"
      class="absolute inset-0 bg-black opacity-75 flex items-center justify-center"
    >
      <svg
        class="animate-spin h-8 w-8 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.963 7.963 0 014 12H0c0 3.313 1.344 6.315 3.514 8.485l2.486-2.194z"
        ></path>
      </svg>
    </div>
    <button
      @click="close"
      class="absolute top-4 right-4 text-white text-3xl p-2 rounded-full cursor-pointer z-10 transition-transform duration-300 hover:scale-110"
    >
      &times;
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
  url: String,
});

const emits = defineEmits(["close"]);

const visible = ref(false);
const loading = ref(true);

function open() {
  visible.value = true;
  loading.value = true;
}

function close() {
  visible.value = false;
  emits("close");
}

function handleLoad() {
  loading.value = false;
}

// 监听 Esc 键关闭 iframe
onMounted(() => {
  const handleEsc = (event) => {
    if (event.key === "Escape") {
      close();
    }
  };
  window.addEventListener("keydown", handleEsc);

  onUnmounted(() => {
    window.removeEventListener("keydown", handleEsc);
  });
});

defineExpose({ open, close });
</script>

<style scoped></style>
