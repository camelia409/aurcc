<template>
  <div class="flex-grow bg-gradient-to-b from-gray-100 to-blue-100 min-h-screen">
    <!-- Hero Section -->
    <section 
      class="bg-cover bg-center relative w-full h-60 sm:h-80 md:h-94 animate-fadeIn" 
      :style="{ backgroundImage: `url(/programsoffered.webp)` }">
      <div class="absolute inset-0 bg-black opacity-80"></div>
      <div class="mx-auto py-24 text-white relative z-10 flex flex-col items-center text-center">
        <h1 class="md:text-4xl text-xl font-extrabold mb-4 animate-slideIn font-serif tracking-tight">
          Programs Offered
        </h1>
        <p class="md:text-2xl text-sm mb-8 animate-fadeIn delay-1s font-serif max-w-2xl">
          Explore the programs we offer for undergraduate and postgraduate studies.
        </p>
      </div>
    </section>

    <!-- UG Programs -->
    <section class="container mx-auto px-4 md:px-10 py-16">
      <h2 class="text-3xl md:text-4xl font-bold text-blue-900 mb-10 relative inline-block group">
        UG Programmes
        <span class="absolute -bottom-2 left-0 h-1 w-24 bg-yellow-500 animate-underline"></span>
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <ProgramCard
          v-for="(programme, idx) in data['UG programmes']"
          :key="'ug-' + idx"
          :title="programme['Courses Offered']"
          :intake="programme['Intake']"
          :icon="getIcon(programme['Courses Offered'])"
          :description="getDescription(programme['Courses Offered'])"
          :learnMoreLink="getLearnMoreLink(programme['Courses Offered'])"
        />
      </div>
    </section>

    <!-- PG Programs -->
    <section class="container mx-auto px-4 md:px-10 py-16">
      <h2 class="text-3xl md:text-4xl font-bold text-blue-900 mb-10 relative inline-block group">
        PG Programmes
        <span class="absolute -bottom-2 left-0 h-1 w-24 bg-yellow-500 animate-underline"></span>
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <ProgramCard
          v-for="(programme, idx) in data['PG programmes']"
          :key="'pg-' + idx"
          :title="programme['Courses Offered']"
          :intake="programme['Intake']"
          :icon="getIcon(programme['Courses Offered'])"
          :description="getDescription(programme['Courses Offered'])"
          :learnMoreLink="getLearnMoreLink(programme['Courses Offered'])"
          :department="programme['Department']"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import ProgramCard from '../components/ProgramCard.vue';
import data from '../assets/programs_offered.json';

const iconMap = {
  'COMPUTER SCIENCE': '💻',
  'ELECTRONICS': '📡',
  'ELECTRICAL': '⚡',
  'MECHANICAL': '🛠️',
  'ARTIFICIAL INTELLIGENCE': '🤖',
  'VLSI': '🔲',
  'MBA': '📈',
  'BUSINESS ANALYTICS': '📊',
};

function getIcon(course) {
  if (course.includes('VLSI')) return iconMap['VLSI'];
  if (course.includes('COMPUTER')) return iconMap['COMPUTER SCIENCE'];
  if (course.includes('ELECTRONICS') && !course.includes('ELECTRICAL')) return iconMap['ELECTRONICS'];
  if (course.includes('ELECTRICAL')) return iconMap['ELECTRICAL'];
  if (course.includes('MECHANICAL')) return iconMap['MECHANICAL'];
  if (course.includes('ARTIFICIAL INTELLIGENCE')) return iconMap['ARTIFICIAL INTELLIGENCE'];
  if (course.includes('BUSINESS ANALYTICS')) return iconMap['BUSINESS ANALYTICS'];
  if (course.includes('MBA')) return iconMap['MBA'];
  return '🎓';
}

function getDescription(course) {
  if (course.includes('VLSI')) return 'Specialized in chip design, microelectronics, and hardware innovation.';
  if (course.includes('COMPUTER')) return 'Learn cutting-edge technologies and software development.';
  if (course.includes('ELECTRONICS') && !course.includes('ELECTRICAL')) return 'Explore communication, embedded systems, and VLSI.';
  if (course.includes('ELECTRICAL')) return 'Power systems, control, and electrical machines.';
  if (course.includes('MECHANICAL')) return 'Study mechanics, thermodynamics, and manufacturing.';
  if (course.includes('ARTIFICIAL INTELLIGENCE')) return 'Machine learning, data analytics, and AI.';
  if (course.includes('BUSINESS ANALYTICS')) return 'Business intelligence, analytics, and data-driven management.';
  if (course.includes('MBA')) return 'Master business administration and leadership.';
  return 'A comprehensive program for future leaders.';
}

function getLearnMoreLink(course) {
  if (course.includes('VLSI')) return '/departments/ece';
  if (course.includes('COMPUTER')) return '/departments/cse';
  if (course.includes('ELECTRONICS')) return '/departments/ece';
  if (course.includes('ELECTRICAL')) return '/departments/eee';
  if (course.includes('MECHANICAL')) return '/departments/mech';
  if (course.includes('ARTIFICIAL INTELLIGENCE')) return '/departments/cse';
  if (course.includes('MBA')) return '/departments/mba';
  return '/departments';
}
</script>

<style scoped>
.program-scroll-container {
  @apply overflow-x-auto;
  -webkit-overflow-scrolling: touch;
}
.program-scroll-wrapper {
  @apply flex space-x-6 py-4;
  width: max-content;
}
.glass-card {
  @apply bg-white/80 backdrop-blur-lg border border-blue-100 rounded-2xl shadow-xl transition-all duration-300;
}
.hover-lift {
  @apply transition-all duration-300 ease-out;
}
.hover-lift:hover {
  transform: translateY(-8px) scale(1.03);
  box-shadow: 0 20px 40px rgba(0,0,0,0.10);
}
.animate-fade-scale {
  animation: fadeScale 0.6s ease-out forwards;
}
@keyframes fadeScale {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
.program-icon {
  @apply p-4 rounded-full text-white inline-block mb-2 shadow-lg;
  font-size: 2.5rem;
}
.program-title {
  @apply text-xl font-bold text-gray-900 mb-2;
}
.program-description {
  @apply text-gray-600 mb-4 h-16;
}
.program-link {
  @apply text-blue-100 font-semibold hover:text-yellow-300 transition-colors;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.animate-underline {
  animation: underlineGrow 1s cubic-bezier(0.4,0,0.2,1) forwards;
}
@keyframes underlineGrow {
  from { width: 0; }
  to { width: 6rem; }
}
</style>
