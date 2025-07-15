<template>
  <div class="flex-grow bg-gradient-to-b from-indigo-100 to-blue-50 min-h-screen">
    <!-- Hero section -->
    <section 
      class="bg-cover bg-center relative w-full h-60 sm:h-80 md:h-94 animate-fadeIn" 
      :style="{ backgroundImage: `url(/syllabus.webp)` }">
      <div class="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
      <div class="mx-10 md:py-20 py-16 text-white relative z-10 flex flex-col ">
        <h1 class="md:text-4xl text-xl font-serif font-bold mb-4 animate-slideIn">Curriculum & Syllabus</h1>
        <p class="md:text-xl text-sm font-serif mb-8 mt-6 animate-fadeIn delay-1s">Explore the detailed curriculum and syllabus for our undergraduate and postgraduate programs.</p>
      </div>
    </section>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <!-- UG Programmes section -->
      <section class="mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-blue-900 mb-10 relative inline-block group">
          UG Programmes
          <span class="absolute -bottom-2 left-0 h-1 w-24 bg-yellow-500 animate-underline"></span>
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <SyllabusCard
            v-for="(programme, idx) in data['UG programmes']"
            :key="'ug-' + idx"
            :title="programme['Curriculum & Syllabus']"
            :link="programme['Link']"
            :index="programme['S.No']"
          />
        </div>
      </section>

      <!-- PG Programmes section -->
      <section>
        <h2 class="text-3xl md:text-4xl font-bold text-blue-900 mb-10 relative inline-block group">
          PG Programmes
          <span class="absolute -bottom-2 left-0 h-1 w-24 bg-yellow-500 animate-underline"></span>
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <SyllabusCard
            v-for="(programme, idx) in data['PG programmes']"
            :key="'pg-' + idx"
            :title="programme['Curriculum & Syllabus']"
            :link="programme['Link']"
            :index="programme['S.No']"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import data from '../assets/curriculum_syllabus.json';
import { ref } from 'vue';
import SyllabusCard from '../components/SyllabusCard.vue';

const activeCourse = ref(null);

function openSyllabus(link) {
  window.open(link, '_blank');
}
</script>

<style scoped>
.syllabus-card {
  @apply bg-white/90 backdrop-blur-lg border border-blue-100 rounded-2xl shadow-xl transition-all duration-300 px-8 py-8 flex flex-col items-center min-h-[240px];
}
.icon-circle {
  @apply flex items-center justify-center rounded-full shadow-lg bg-gradient-to-br from-blue-500 to-indigo-400;
  width: 64px;
  height: 64px;
  margin-bottom: 1rem;
}
.hover-lift {
  @apply transition-all duration-300 ease-out;
}
.hover-lift:hover {
  transform: translateY(-10px) scale(1.04);
  box-shadow: 0 24px 48px rgba(0,0,0,0.13);
}
.animate-fade-scale {
  animation: fadeScale 0.6s ease-out forwards;
}
@keyframes fadeScale {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
.syllabus-title {
  @apply text-lg md:text-xl font-extrabold text-gray-900 mb-2;
}
.syllabus-link {
  @apply text-blue-100 font-semibold hover:text-yellow-300 transition-colors;
}
@media (max-width: 640px) {
  .syllabus-card {
    @apply px-4 py-6 min-h-[180px];
  }
  .icon-circle {
    width: 48px;
    height: 48px;
  }
}
.animate-underline {
  animation: underlineGrow 1s cubic-bezier(0.4,0,0.2,1) forwards;
}
@keyframes underlineGrow {
  from { width: 0; }
  to { width: 6rem; }
}
</style>
