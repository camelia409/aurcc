<template>
  <div class="flex-grow">
    <!-- Hero section -->
    <section 
      class="hero-section bg-cover relative w-full h-60 sm:h-80 md:h-94 animate-fadeIn" 
      :style="{ 
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'top center' 
      }">
      <div class="absolute inset-0 bg-black opacity-70"></div>
      <div class="mx-10 md:py-28 py-20 text-white relative z-10 flex flex-col">
        <h1 class="md:text-4xl text-3xl font-extrabold text-center px-16 mb-4 animate-slideIn font-serif">Regulations</h1>
      </div>
    </section>

    <!-- Background section below the hero -->
    <div class="bg-indigo-100 py-8 animate-fadeIn">
      <!-- UG Programmes section -->
      <section class="py-8 p-4 animate-popIn">
        <div class="bg-white rounded-lg shadow-md">
          <h2 class="text-xl md:text-3xl text-center font-serif font-bold p-3 rounded-t-lg bg-gradient-to-r from-blue-500 to-cyan-300 animate-fadeInUp">UG Programmes</h2>
          <div class="p-4 animate-fadeIn delay-1s">
            <iframe
              :src="ugPdfUrl"
              class="w-full h-screen border-0"
              title="UG Programmes PDF"
            ></iframe>
          </div>
        </div>
      </section>

      <!-- PG Programmes section -->
      <section class="py-8 p-4 animate-popIn">
        <div class="bg-white rounded-lg shadow-md">
          <h2 class="text-xl md:text-3xl text-center font-serif font-bold p-3 rounded-t-lg bg-gradient-to-r from-blue-500 to-cyan-300 animate-fadeInUp">PG Programmes</h2>
          <div class="p-4 animate-fadeIn delay-1s">
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
/* Add keyframes for animations */
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes slideIn {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(0); }
}

@keyframes popIn {
  0% { opacity: 0; transform: scale(0.8); }
  100% { opacity: 1; transform: scale(1); }
}
h1.animate-slideIn {
  animation: slideIn 1s ease-out forwards;
}

section.animate-popIn {
  animation: popIn 1.2s ease-out forwards;
}

h2.animate-fadeInUp {
  animation: fadeInUp 1.5s ease-out forwards;
}

.p-4.animate-fadeIn {
  animation: fadeIn 2s ease-out forwards;
}

/* Add delay utility class */

</style>