<template>
  <div
    class="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
  >
    <!-- Game Thumbnail -->
    <div class="relative">
      <a :href="`/detail/${game.id}`">
        <img
          :src="game.thumb"
          :alt="game.title"
          class="w-full h-36 object-cover cursor-pointer"
        />
      </a>
      <a
        @click.stop="playnow"
        target="_blank"
        class="absolute bottom-2 right-2 bg-custom-500 text-white px-2 py-1 rounded-full text-xs font-semibold hover:bg-custom-600 transition-colors cursor-pointer"
      >
        Play Now
      </a>
    </div>
    <!-- Game Details -->
    <div class="p-3 flex flex-col space-y-2">
      <h2 class="text-sm font-semibold">{{ game.title }}</h2>
      <p
        class="text-xs text-gray-600 overflow-hidden overflow-ellipsis"
        style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical"
      >
        {{ game.description }}
      </p>
      <div class="flex flex-wrap gap-1">
        <template v-for="tag in formatTags(game.tags)" :key="tag">
          <span
            @click="tagClick(tag)"
            class="bg-gray-200 text-gray-800 px-2 py-1 rounded text-xs cursor-pointer hover:bg-gray-300 transition"
            :title="getTagTitle(tag)"
          >
            {{ tag }}
          </span>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { searchClickEventBus } from "~/common/eventBus";
import { searchContent, searchType, SearchTypes } from "~/common/search";

defineProps({
  game: {
    type: Object,
    required: true,
  },
});

const router = useRouter();
const emits = defineEmits(["playnow"]);

function playnow(game) {
  emits("playnow", game);
}

// 格式化标签，最多显示8个标签
function formatTags(tags) {
  return tags.split(",").slice(0, 8);
}

function tagClick(tag) {
  searchType.value = SearchTypes.Tags;
  searchContent.value = tag;
  router.push({ path: "/search" });
  searchClickEventBus.emit(tag);
}

// 动态生成标签的title，假设我们希望显示 "Browse games with [tag]"
function getTagTitle(tag) {
  return `Browse games with the "${tag}" tag.`;
}
</script>
