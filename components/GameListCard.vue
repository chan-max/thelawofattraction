<template>
  <div class="max-w-7xl mx-auto p-4">
    <!-- Top Section -->
    <div class="flex items-center justify-between mb-6">
      <!-- Title -->
      <h1 class="text-2xl sm:text-4xl font-bold flex items-end space-x-4">
        <span>{{ title }}</span>
        <!-- <a
          @click="viewMore"
          class="text-custom-600 text-base sm:text-lg underline hover:text-custom-800 cursor-pointer transition-colors"
        >
          View More
        </a> -->
      </h1>
    </div>

    <!-- Game Cards Grid -->
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      <GameCard
        v-for="game in games"
        :key="game.id"
        :game="game"
        @playnow="$emit('playnow', game)"
        @thumbClick="$emit('thumbClick', game)"
        @tagClick="$emit('tagClick')"
      />
    </div>
  </div>
</template>

<script setup>
import GameCard from "@/components/GameCard.vue";

defineProps({
  title: {
    type: String,
    required: true,
  },
  games: {
    type: Array,
    required: true,
  },
});

const viewMore = () => {
  alert("查看更多内容");
};
</script>
