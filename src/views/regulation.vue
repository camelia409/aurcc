<template>
  <div class="flex-grow">
    <!-- Hero section -->
    <section class="bg-cover bg-center relative -z-10" :style="'background-image: url(http://192.168.72.231:5173/src/assets/student_affairs-hero.jpg)'">
      <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div class="container mx-auto py-16 text-white p-9 relative z-10">
        <h1 class="text-4xl font-bold mb-4 text-center ">Regulations</h1>
      </div>
    </section>

    <!-- Background section below the hero -->
    <div class="bg-indigo-100 py-8">
      <!-- UG Programmes section -->
      <section class="py-8 p-4">
        <div class="bg-white rounded-lg shadow-md">
          <h2 class="text-3xl text-center font-bold p-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-300">UG Programmes</h2>
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
          <h2 class="text-3xl text-center font-bold p-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-300">PG Programmes</h2>
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

export default {
  data() {
    return {
      ugPdfUrl: ugPdf,
      pgPdfUrl: pgPdf
    };
  }
};
</script>

<style scoped>
/* Add any custom styles if needed */
</style>
