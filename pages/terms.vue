<template>
  <div class="min-h-screen bg-gray-100 py-10">
    <main class="container mx-auto px-6 py-10 bg-white shadow-lg rounded-lg">
      <h1 class="text-4xl text-center font-bold text-gray-800 mb-6">Terms of Service</h1>

      <section class="mb-8">
        <p class="text-gray-700">
          Welcome to <span class="font-semibold">ShadowForge</span>! These terms and conditions outline the rules and regulations for the use of ShadowForge's website.
          If you do not agree to these terms, please discontinue using this website.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Terminology</h2>
        <p class="text-gray-700">
          The following terminology applies to these Terms and Conditions, Privacy Policy, and Disclaimer Notice, and all Agreements:
        </p>
        <ul class="list-disc list-inside text-gray-700 mt-4 space-y-2">
          <li>"Client," "You," and "Your" refer to you, the user of this website.</li>
          <li>"The Company," "We," "Our," and "Us" refer to ShadowForge.</li>
          <li>"Party," "Parties," or "Us" refers to both the Client and ShadowForge collectively.</li>
        </ul>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Cookies</h2>
        <p class="text-gray-700">
          We use cookies to improve your experience on ShadowForge. By using our website, you consent to the use of cookies in accordance with our
          <a href="#" class="text-blue-600 hover:underline">Privacy Policy</a>.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">License</h2>
        <p class="text-gray-700">
          Unless otherwise stated, ShadowForge and its licensors own the intellectual property rights for all material on this website. All rights are reserved.
        </p>
        <ul class="list-disc list-inside text-gray-700 mt-4 space-y-2">
          <li>Republish material from ShadowForge without permission.</li>
          <li>Sell, rent, or sub-license material from ShadowForge.</li>
          <li>Reproduce, duplicate, or copy material from ShadowForge.</li>
          <li>Redistribute content from ShadowForge without explicit permission.</li>
        </ul>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Hyperlinking to Our Content</h2>
        <p class="text-gray-700">
          Certain organizations may link to our website without prior approval, including government agencies, search engines, and news organizations. However, links must not falsely imply sponsorship or endorsement.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Content Liability</h2>
        <p class="text-gray-700">
          We are not responsible for content on your website. You agree to protect and defend us against any claims arising from your website. Links must not promote unlawful activities or violate third-party rights.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Disclaimer</h2>
        <p class="text-gray-700">
          To the fullest extent permitted by law, ShadowForge excludes all warranties and is not responsible for any loss or damage resulting from the use of this website.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Contact</h2>
        <p class="text-gray-700">
          If you have any questions about these terms, feel free to <a href="#" class="text-blue-600 hover:underline">contact us</a>.
        </p>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Terms of Service - ShadowForge",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Learn about the Terms of Service of ShadowForge and your responsibilities when using our website.",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Add custom styles if needed */
</style>
