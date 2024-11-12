<template>
  <FullScreenIframe
    :url="modalContent?.url"
    ref="iframeRef"
    @close="close"
  ></FullScreenIframe>
</template>

<script setup>
import { useGameModal } from "@/common/useGameModal";

const iframeRef = ref();

const { isModalOpen, modalContent, closeGameModal } = useGameModal();

watch(isModalOpen, (val) => {
  if (val) {
    iframeRef.value.open();
  }
});

function close() {
  closeGameModal();
}
</script>
