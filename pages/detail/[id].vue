<template>
  <div class="max-w-4xl mx-auto py-6 my-6 px-6 lg:px-8 bg-white rounded-lg shadow-md">
    <!-- 内容布局 -->
    <div class="flex flex-col md:flex-row items-start gap-8">
      <!-- 左侧图片和相关内容 -->
      <div class="flex-shrink-0 w-full md:w-1/3">
        <img
          :src="data?.thumb"
          :alt="data?.title"
          class="w-full h-auto rounded-lg shadow-md mb-6"
        />

        <!-- 游戏标签 -->
        <div class="mb-4">
          <h2 class="text-lg font-semibold text-gray-800 mb-2">Tags</h2>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in data?.tags?.split(', ')"
              :key="tag"
              class="bg-custom-100 text-custom-800 px-3 py-1 rounded-lg text-sm font-medium"
            >
              {{ tag }}
            </span>
          </div>
        </div>

        <!-- 游戏分类和尺寸 -->
        <div>
          <h2 class="text-lg font-semibold text-gray-800 mb-2">Details</h2>
          <ul class="text-gray-700 leading-relaxed">
            <li><strong>Category:</strong> {{ data?.category }}</li>
            <li><strong>Width:</strong> {{ data?.width }} px</li>
            <li><strong>Height:</strong> {{ data?.height }} px</li>
          </ul>
        </div>
      </div>

      <!-- 右侧内容 -->
      <div class="flex-1">
        <!-- 游戏标题和 Play Now 按钮 -->
        <div class="text-left mb-6">
          <h1 class="text-3xl font-bold text-gray-800 mb-4">{{ data?.title }}</h1>
          <a
            target="_blank"
            class="inline-block px-6 py-2 bg-custom-500 text-white rounded-lg text-sm font-semibold hover:bg-custom-600 transition cursor-pointer"
            @click="playnow"
          >
            Play Now
          </a>
        </div>

        <!-- 游戏描述 -->
        <p class="text-gray-700 text-lg mb-6 leading-relaxed">{{ data?.description }}</p>

        <!-- 游戏说明 -->
        <div class="mb-6">
          <h2 class="text-xl font-semibold text-gray-800 mb-2">How to Play</h2>
          <p class="text-gray-700 leading-relaxed">{{ data?.instructions }}</p>
        </div>

        <!-- 联系方式或分享 -->
        <div>
          <h2 class="text-xl font-semibold text-gray-800 mb-2">Contact</h2>
          <SocialShareList />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import API from "@/common/api";
import SocialShareList from "@/components/SocialShareList.vue";
import { useGameModal } from "~/common/useGameModal";
import { useLoading } from "~/common/useLoading";

const route = useRoute();
const id = route.params.id;

// 获取游戏详情数据
const { data, pending } = API.getGamesById({ id: id as string });

const { openGameModal } = useGameModal();

const { startLoading, stopLoading } = useLoading();

watchEffect(() => {
  if (pending.value) {
    startLoading();
  } else {
    stopLoading();
  }
});

function playnow() {
  openGameModal(data.value);
}
</script>
