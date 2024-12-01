<template>
  <div :class="containerClass">
    <!-- 中文内容 -->
    <p :class="zhClass" class="mb-2">
      {{ zh }}
    </p>
    <!-- 英文内容 -->
    <p :class="enClass" style="font-size: 0.5em; opacity: 0.8">
      {{ en }}
    </p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

// 接收传入的参数
const props = defineProps({
  zh: {
    type: String,
    required: true, // 必须传入中文内容
  },
  en: {
    type: String,
    required: false, // 英文内容可以不传
    default: "",
  },
  containerClass: {
    type: String,
    required: false,
    default: "text-center", // 容器默认居中
  },
  zhClass: {
    type: String,
    required: false,
    default: "", // 默认中文样式
  },
  enClass: {
    type: String,
    required: false,
    default: "", // 默认英文样式
  },
});
</script>
