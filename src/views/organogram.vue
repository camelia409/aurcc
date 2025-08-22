<template>
  <div class="organogram-section">
    <h2 class="mobile-text-lg sm:mobile-text-xl lg:mobile-text-2xl xl:mobile-text-3xl font-semibold font-serif text-white p-3 sm:p-4 bg-blue-700 text-center">
      ORGANGRAM
    </h2>
    <div class="pdf-container">
      <iframe :src="pdfUrl" class="w-full h-[80vh] sm:h-screen border rounded-lg shadow-md"></iframe>
    </div>
  </div>
</template>

<script>
import OrganogramPdf from '@/assets/Organogram.pdf';

export default {
  data() {
    return {
      pdfUrl: OrganogramPdf,
    };
  },
};
</script>

<style scoped>

.pdf-container {
  @apply overflow-auto border border-gray-300 p-2 bg-white;
}
</style>
