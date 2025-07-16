<template>
  <div class="bg-gradient-to-br from-indigo-100 via-blue-50 to-white min-h-screen">
    <div class="text-center md:py-6 py-3 bg-blue-700 bg-opacity-90">
      <h1 class="text-xl md:text-3xl font-semibold font-serif text-white tracking-wide">ADMINISTRATIVE STAFF</h1>
    </div>
    <div class="mx-auto py-14 px-2 md:px-9 font-serif">
      <div class="max-w-7xl mx-auto flex flex-col gap-16">
        <div v-for="(section, sectionName) in administrator" :key="sectionName" class="mb-12">
          <h2 class="text-2xl md:text-4xl font-bold mb-4 text-center font-serif tracking-wide">{{ sectionName }}</h2>
          <div class="flex justify-center mb-8">
            <span class="block w-32 h-1 rounded-full bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-400 animate-glow-bar"></span>
          </div>
          <div v-for="(subsection, subsectionName) in section" :key="subsectionName" class="mb-8">
            <h3 class="text-lg md:text-2xl font-semibold mb-4 text-center font-serif tracking-wide uppercase">{{ subsectionName.replace('_', ' ') }}</h3>
            <div v-if="subsection.DEPUTY_MANAGER" class="mb-8">
              <h4 class="text-lg md:text-2xl font-semibold mb-2 text-center font-serif tracking-wide">Deputy Manager</h4>
              <div class="flex justify-center">
                <div
                  v-for="member in subsection.DEPUTY_MANAGER"
                  :key="member.name"
                  class="admin-card bg-white/60 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden flex flex-col items-center border border-blue-200 transition-all duration-300 w-full max-w-[350px]"
                >
                  <div class="w-full flex justify-center pt-6">
                    <div class="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg bg-white flex items-center justify-center">
                      <img
                        v-if="member.image && member.image.trim() !== '' && !member.showDefault"
                        :src="'/' + member.image"
                        :alt="member.name"
                        class="w-full h-full object-cover"
                        @error="member.showDefault = true"
                      />
                      <span v-else class="text-5xl text-blue-300">👤</span>
                    </div>
                  </div>
                  <div class="w-full bg-gradient-to-r from-blue-900 to-blue-500 py-3 px-2 flex flex-col items-center">
                    <h2 class="text-base md:text-xl font-bold text-white font-sans tracking-wide">{{ member.name }}</h2>
                    <p class="text-xs md:text-base text-blue-100 font-sans">{{ member.position || 'Position not available' }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="subsection.STAFFS" class="mb-8">
              <h4 class="text-lg md:text-2xl font-semibold mb-2 text-center font-serif tracking-wide">Staff Members</h4>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div
                  v-for="member in subsection.STAFFS"
                  :key="member.name"
                  class="admin-card bg-white/60 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden flex flex-col items-center border border-blue-200 transition-all duration-300"
                >
                  <div class="w-full flex justify-center pt-6">
                    <div class="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg bg-white flex items-center justify-center">
                      <img
                        v-if="member.image && member.image.trim() !== '' && !member.showDefault"
                        :src="'/' + member.image"
                        :alt="member.name"
                        class="w-full h-full object-cover"
                        @error="member.showDefault = true"
                      />
                      <span v-else class="text-5xl text-blue-300">👤</span>
                    </div>
                  </div>
                  <div class="w-full bg-gradient-to-r from-blue-900 to-blue-500 py-3 px-2 flex flex-col items-center">
                    <h2 class="text-base md:text-xl font-bold text-white font-sans tracking-wide">{{ member.name }}</h2>
                    <p class="text-xs md:text-base text-blue-100 font-sans">{{ member.position || 'Position not available' }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import administrationData from '@/assets/administration.json';

export default {
  name: 'Administration',
  data() {
    return {
      administrator: administrationData
    };
  },
  methods: {
  }
};
</script>

<style scoped>
.admin-card {
  transition: transform 0.18s cubic-bezier(.4,2,.6,1), box-shadow 0.18s cubic-bezier(.4,2,.6,1);
}
.admin-card:hover {
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