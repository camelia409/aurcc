<template>
  <div class="organogram-section">
    <h2 class="text-2xl font-bold mb-4 p-2 bg-gradient-to-r from-blue-500 to-cyan-300 text-center animate-slideIn">
      Organogram
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
.organogram-section {
  @apply p-4 bg-gray-100;
}

.pdf-container {
  @apply overflow-auto border border-gray-300 p-2 bg-white;
}


@keyframes slideIn {
  from {
    transform: translateX(-20px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.animate-slideIn {
  animation: slideIn 1s ease-out;
}

</style>
