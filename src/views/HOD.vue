<template>
  <div class="mx-auto bg-gradient-to-br from-indigo-100 via-blue-50 to-white min-h-screen">
    <div class="text-center mb-6 sm:mb-8 py-3 md:py-6 bg-opacity-90 font-serif">
      <h1 class="mobile-text-xl sm:mobile-text-2xl lg:mobile-text-3xl xl:mobile-text-4xl font-bold text-blue-900 tracking-wide font-serif">Head of the Departments</h1>
      <div class="flex justify-center mt-2 mb-3 sm:mb-4">
        <span class="block w-24 sm:w-32 h-1 rounded-full bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-400 animate-glow-bar"></span>
      </div>
    </div>
    <div class="mobile-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 font-sans">
      <div
        v-for="hod in hods"
        :key="hod.name"
        class="hod-card mobile-card bg-white/60 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden flex flex-col items-center border border-blue-200 transition-all duration-300"
      >
        <div class="w-full flex justify-center pt-4 sm:pt-6">
          <div class="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg bg-white">
            <img
              :src="'/' + hod.photo"
              :alt="hod.name"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
        <div class="w-full bg-gradient-to-r from-blue-900 to-blue-500 py-2 sm:py-3 px-2 flex flex-col items-center">
          <h2 class="mobile-text-sm lg:mobile-text-base xl:mobile-text-xl font-bold text-white font-sans tracking-wide">{{ hod.name }}</h2>
          <p class="mobile-text-xs lg:mobile-text-sm xl:mobile-text-base text-blue-100 font-sans flex items-center gap-2 justify-center">
            <span v-html="getDeptIcon(hod.department)"></span>
            {{ hod.department }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import hodsData from '@/assets/HOD.json';

// Department icon mapping
const deptIcons = {
  'CSE': '💻',
  'EEE': '⚡',
  'ECE': '📡',
  'MECH': '🛠️',
  'MBA': '📈',
  'Science and Humanities': '🔬'
};

export default {
  name: 'HODs',
  data() {
    return {
      hods: hodsData.departments,
    };
  },
  methods: {
    getDeptIcon(dept) {
      return deptIcons[dept] || '🎓';
    }
  },
};
</script>

<style scoped>
.text-shadow-lg {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

.hod-card {
  transition: transform 0.18s cubic-bezier(.4,2,.6,1), box-shadow 0.18s cubic-bezier(.4,2,.6,1);
}
.hod-card:hover {
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
