<template>
  <div class="organogram-section">
    <h2 class="text-xl md:text-3xl font-bold p-4 bg-yellow-400 text-center">
      ORGANGRAM
    </h2>
    <div class="pdf-container">
      <iframe :src="pdfUrl" class="w-full h-screen border rounded-lg shadow-md"></iframe>
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
