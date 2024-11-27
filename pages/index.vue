<template>
  <div class="min-h-screen bg-gradient-to-b from-blue-100 to-white">
    <!-- 英雄部分 -->
    <section
      class="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-20"
    >
      <div class="container mx-auto px-6 md:px-12 text-center">
        <h1 class="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          探索吸引力法则的力量
        </h1>
        <p class="text-lg md:text-2xl mb-8">
          改变你的思维，塑造你的现实。掌握吸引力法则，开启梦想生活。
        </p>
        <a
          href="#how-it-works"
          class="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          了解更多
        </a>
      </div>
      <!-- 背景渐变 -->
      <div
        class="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-900 opacity-30"
      ></div>
    </section>

    <!-- 什么是吸引力法则 -->
    <section class="py-16 px-6 text-center">
      <div class="container mx-auto max-w-3xl">
        <h2 class="text-3xl font-bold text-gray-800 mb-6">什么是吸引力法则？</h2>
        <p class="text-gray-600 text-lg leading-relaxed">
          吸引力法则是一种信念，认为你的思想和能量能够吸引结果到你的生活中。通过专注于你的渴望，你可以调整行动和心态，实现你的目标。
        </p>
      </div>
    </section>

    <!-- 工作原理 -->
    <section id="how-it-works" class="bg-gray-50 py-16 px-6">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold text-gray-800 mb-12">它是如何工作的？</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
            <h3 class="text-xl font-semibold text-indigo-600 mb-4">1. 请求</h3>
            <p class="text-gray-600">
              清楚定义你想要的目标，并用想象力描绘它已经实现的场景。
            </p>
          </div>
          <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
            <h3 class="text-xl font-semibold text-purple-600 mb-4">2. 相信</h3>
            <p class="text-gray-600">
              坚信自己有能力达成目标。用信念驱动行动，好像成功是注定的。
            </p>
          </div>
          <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
            <h3 class="text-xl font-semibold text-pink-600 mb-4">3. 接收</h3>
            <p class="text-gray-600">敞开心扉，抓住机会，用行动把梦想变成现实。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 成功案例 -->
    <section class="py-16 px-6">
      <div class="container mx-auto max-w-5xl text-center">
        <h2 class="text-3xl font-bold text-gray-800 mb-8">成功案例</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
            <p class="text-gray-600 mb-4">
              “吸引力法则改变了我的生活。我现在拥有梦想的职业和理想的关系。”
            </p>
            <p class="font-semibold text-gray-800">—— 李晓华</p>
          </div>
          <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
            <p class="text-gray-600 mb-4">
              “通过专注积极的思想和感恩，我吸引了生活中的丰富。效果令人惊叹。”
            </p>
            <p class="font-semibold text-gray-800">—— 王大为</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 行动号召 -->
    <section class="bg-indigo-600 text-white py-16">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold mb-6">准备好改变你的生活了吗？</h2>
        <p class="text-lg mb-8">踏出实现梦想的第一步，今天就加入我们的社区！</p>
        <a
          href="#"
          class="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          开始行动
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "吸引力法则 - 吸引成功与幸福的秘密",
  ogTitle: "吸引力法则 - 吸引成功与幸福的秘密",
  description:
    "探索吸引力法则，学习如何通过正向思维和意图吸引成功、幸福和丰盛的生活。了解宇宙的力量，改变你的命运！",
  ogDescription:
    "探索吸引力法则的奥秘，通过正念和意图实现你的人生目标，开启成功与幸福的新篇章！",
  ogImage: "https://example.com/law-of-attraction-image.png",
  twitterCard: "summary_large_image",
});
</script>

<style scoped>
/* 背景装饰 */
section.relative::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.7));
}
</style>
