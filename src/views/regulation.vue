<template>
  <div class="flex-grow">
    <!-- Hero section -->
    <section 
    class="hero-section bg-cover relative -z-10" 
    :style="{ 
      backgroundImage: `url(${backgroundImage})`, 
      backgroundSize: 'cover',
      backgroundPosition: 'top center' 
    }">
      <div class="absolute inset-0 bg-black  opacity-50"></div>
      <div class="mx-auto py-24 text-white relative z-10 flex flex-col ">
        <h1 class="text-4xl font-extrabold px-20 mb-4 animate-slideIn font-serif">Regulations</h1>
      </div>
    </section>

    <!-- Background section below the hero -->
    <div class="bg-indigo-100 py-8">
      <!-- UG Programmes section -->
      <section class="py-8 p-4">
        <div class="bg-white rounded-lg shadow-md">
          <h2 class="text-3xl text-center font-serif font-bold p-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-300">UG Programmes</h2>
          <div class="p-4">
            <iframe
              :src="ugPdfUrl"
              class="w-full h-screen border-0"
              title="UG Programmes PDF"
            ></iframe>
          </div>
        </div>
      </section>

      <!-- PG Programmes section -->
      <section class="py-8 p-4">
        <div class="bg-white rounded-lg shadow-md">
          <h2 class="text-3xl text-center font-serif font-bold p-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-300">PG Programmes</h2>
          <div class="p-4">
            <iframe
              :src="pgPdfUrl"
              class="w-full h-screen border-0"
              title="PG Programmes PDF"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import ugPdf from '@/assets/ug_regulations.pdf';
import pgPdf from '@/assets/pg_regulations.pdf';
import backgroundImage from '@/assets/regulation.webp';  // Correct path for the image

export default {
  data() {
    return {
      ugPdfUrl: ugPdf,
      pgPdfUrl: pgPdf,
      backgroundImage: backgroundImage,
    };
  },
};
</script>

<style scoped>
/* Add any custom styles if needed */
</style>
