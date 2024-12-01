<template>
  <div id="fullpage" class="w-full">
    <!-- Section 1 -->
    <div class="section w-full h-full">
      <div
        class="text-white flex flex-col items-center justify-center w-full h-full section-1 bg-black text-5xl"
      >
        <p>"你的思想决定你的经历"</p>
        <p>Your thoughts shape your experiences.</p>
      </div>
    </div>

    <div class="section w-full h-full">
      <div
        class="text-white flex flex-col items-center justify-center w-full h-full section-1 bg-red-500"
      >
        <p>你的思想决定你的经历</p>
        <p>Your thoughts shape your experiences.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from "vue";

let fullpageInstance; // FullPage.js 实例

onMounted(() => {
  // 初始化 FullPage.js
  fullpageInstance = new fullpage("#fullpage", {
    navigation: true, // 显示右侧导航
    scrollBar: false, // 是否启用滚动条
    afterLoad: (origin, destination, direction) => {
      const sectionIndex = destination.index + 1; // 当前 section 索引
      const section = document.querySelector(`.section-${sectionIndex}`);

      if (section) {
        // 添加动画类
        section.classList.add("animate__animated", "animate__fadeIn");

        // 在动画完成后移除类，以便可以重复触发
        section.addEventListener(
          "animationend",
          () => {
            section.classList.remove("animate__animated", "animate__fadeIn");
          },
          { once: true } // 确保事件监听器只触发一次
        );
      }
    },
  });
});

onBeforeUnmount(() => {
  // 销毁 FullPage.js 实例
  if (fullpageInstance) {
    fullpageInstance.destroy("all");
    fullpageInstance = null;
  }
});
</script>

<style scoped>
/* 设置全屏样式 */
#fullpage {
  height: 100vh;
}

.section {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
}
</style>
