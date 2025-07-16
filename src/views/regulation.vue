<template>
  <div class="flex-grow bg-gradient-to-b from-indigo-100 to-blue-50 min-h-screen">
    <!-- Hero section -->
    <section 
      class="hero-section bg-cover relative w-full h-60 sm:h-80 md:h-94 animate-fadeIn" 
      :style="{ backgroundImage: `url(/regulation.webp)`, backgroundSize: 'cover', backgroundPosition: 'top center' }">
      <div class="absolute inset-0 bg-black opacity-70"></div>
      <div class="mx-10 md:py-28 py-20 text-white relative z-10 flex flex-col">
        <h1 class="md:text-4xl text-3xl font-extrabold text-center px-16 mb-4 animate-slideIn font-serif">Regulations</h1>
      </div>
    </section>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 class="text-3xl md:text-4xl font-bold text-blue-900 mb-10 relative inline-block group">
        Regulation Documents
        <span class="absolute -bottom-2 left-0 h-1 w-24 bg-yellow-500 animate-underline"></span>
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <RegulationCard
          v-for="reg in regulations"
          :key="reg['Regulation']"
          :title="reg['Regulation']"
          :pdf="reg.pdfUrl"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import regulationsData from '../assets/regulation.json';
import RegulationCard from '../components/RegulationCard.vue';
import ugPdf from '../assets/ug_regulations.pdf';
import pgPdf from '../assets/pg_regulations.pdf';

const pdfMap = {
  'UG Programmes': ugPdf,
  'PG Programmes': pgPdf
};

const regulations = regulationsData.regulations.map(reg => ({
  ...reg,
  pdfUrl: pdfMap[reg['Regulation']] || reg['PDF Link']
}));
</script>

<style scoped>
.animate-underline {
  animation: underlineGrow 1s cubic-bezier(0.4,0,0.2,1) forwards;
}
@keyframes underlineGrow {
  from { width: 0; }
  to { width: 6rem; }
}
</style>
