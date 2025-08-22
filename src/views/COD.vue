<template>
  <div class="p-4 sm:p-6 md:p-9 bg-gradient-to-br from-indigo-100 via-blue-50 to-white min-h-screen">
    <div class="text-center py-4 sm:py-5">
      <h1 class="mobile-text-xl sm:mobile-text-2xl lg:mobile-text-3xl xl:mobile-text-4xl font-bold text-blue-900 tracking-wide font-serif">Cell Coordinators</h1>
      <div class="flex justify-center mt-2 mb-3 sm:mb-4">
        <span class="block w-24 sm:w-32 h-1 rounded-full bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-400 animate-glow-bar"></span>
      </div>
    </div>
    <div class="mobile-container grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 font-sans">
      <div
        v-for="director in directors"
        :key="director.name"
        class="cod-card mobile-card bg-white/60 backdrop-blur-md rounded-2xl shadow-xl flex flex-col items-center border border-blue-200 transition-all duration-300 py-6 sm:py-8 px-3 sm:px-4"
      >
        <div class="text-center">
          <h2 class="mobile-text-sm lg:mobile-text-base xl:mobile-text-xl font-bold text-blue-900 font-sans mb-2">{{ director.name }}</h2>
          <p class="mobile-text-xs lg:mobile-text-sm xl:mobile-text-base text-blue-700 font-sans flex items-center gap-2 justify-center">
            <span v-html="getCentreIcon(director.centre)"></span>
            {{ director.centre }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import directorsData from '@/assets/COD.json';

// Centre icon mapping
const centreIcons = {
  'Zonal Office': '🗺️', // map for zone/region
  'Academics': '📚', // books for academics
  'DGATE': '🔑', // key for gateway
  'PACE Cell': '🧭', // compass for guidance
  'AICTE': '🏛️', // classical building for council
  'Alumni': '🎓', // graduation cap for alumni
  'Fine Arts Club': '🎭', // performing arts mask
  'Research': '🔬', // microscope for research
  'Tamil Mandram': '📜', // scroll for language/literature
  'Admission cell': '📝', // memo for admission
  'Naan Mudhalvan': '🌟', // star for achiever
  'Office of Affiliation': '🔗', // link for affiliation
  'Distant Education': '🖥️', // desktop computer for online learning
  'NSS': '🌱', // seedling for service/growth
  'Placement Cell': '💼', // briefcase for placement
  'Exam Cell': '🗂️', // card index for exam organization
};

export default {
  name: 'Directors',
  data() {
    return {
      directors: directorsData.centres,
    };
  },
  methods: {
    getCentreIcon(centre) {
      return centreIcons[centre] || '🎓';
    }
  },
};
</script>

<style scoped>
.cod-card {
  transition: transform 0.18s cubic-bezier(.4,2,.6,1), box-shadow 0.18s cubic-bezier(.4,2,.6,1);
}
.cod-card:hover {
  transform: translateY(-8px) scale(1.025);
  box-shadow: 0 8px 32px 0 rgba(59,130,246,0.18), 0 2px 8px 0 rgba(59,130,246,0.10);
  border-color: #2563eb;
}
.animate-glow-bar {
  box-shadow: 0 0 16px 4px #60a5fa, 0 0 32px 8px #3b82f6;
  animation: glowBar 2.5s ease-in-out infinite alternate;
}
@keyframes glowBar {
  0% { box-shadow: 0 0 16px 4px #60a5fa, 0 0 32px 8px #3b82f6; }
  100% { box-shadow: 0 0 32px 8px #3b82f6, 0 0 48px 12px #60a5fa; }
}
</style>
