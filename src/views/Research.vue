<template>
  <main class="bg-gradient-to-br from-indigo-100 via-blue-50 to-white min-h-screen font-sans text-gray-800">
    <!-- Hero Section -->
    <section class="relative w-full min-h-[40vh] md:min-h-[60vh] overflow-hidden flex items-center justify-center animate-fadeIn">
      <img :src="backgroundImage" alt="Research Cell" class="absolute inset-0 w-full h-full object-cover object-center" />
      <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>
      <div class="absolute inset-0 flex flex-col items-center justify-center z-10 px-2">
        <div class="backdrop-blur-md bg-white/30 rounded-2xl shadow-lg px-4 py-4 sm:px-8 sm:py-6 md:px-12 md:py-10 flex flex-col items-center w-full max-w-2xl border border-white/30">
          <h1 class="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg tracking-wide text-center mb-2 leading-tight">RESEARCH CELL</h1>
          <p class="text-base sm:text-lg md:text-2xl text-white drop-shadow text-center font-medium">Fostering research and innovation across disciplines</p>
        </div>
      </div>
    </section>

    <!-- Sticky Tabs -->
    <div class="sticky top-0 z-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white/95 backdrop-blur-sm shadow-lg rounded-full -mt-6 py-1 px-2 flex justify-center overflow-x-auto no-scrollbar">
          <nav role="tablist" class="tabs flex space-x-1 md:space-x-2">
            <button
              v-for="(section, index) in sections"
              :key="section.key"
              @click="scrollToSection(section.key)"
              :class="[
                'font-medium px-4 md:px-5 py-2 md:py-3 rounded-full text-sm md:text-base transition duration-300 whitespace-nowrap',
                currentSection === section.key
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              ]"
            >
              {{ section.label }}
            </button>
          </nav>
        </div>
      </div>
    </div>

    <!-- Content Sections -->
    <section class="max-w-7xl mx-auto py-14 px-2 md:px-9 flex flex-col gap-12">
      <!-- Description -->
      <div :ref="'description'" class="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg animate-fadeIn border border-gray-100 scroll-mt-28">
        <div class="bg-gradient-to-r from-blue-900 to-blue-500 py-5 flex items-center justify-center gap-3 rounded-t-2xl">
          <span class="text-2xl">ℹ️</span>
          <h2 class="text-2xl md:text-3xl font-bold text-white text-center">About the Research Cell</h2>
        </div>
        <div class="p-8 md:p-10">
          <ul class="list-disc pl-6 text-gray-800 text-lg space-y-2 leading-relaxed break-words">
            <li
              v-for="(desc, index) in researchData.description"
              :key="index"
              class="whitespace-pre-wrap break-words"
            >
              {{ desc }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Supervisors Section -->
      <div :ref="'supervisors'" class="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg animate-fadeIn border border-gray-100 scroll-mt-28">
        <div class="bg-gradient-to-r from-blue-900 to-blue-500 py-5 flex items-center justify-center gap-3 rounded-t-2xl">
          <span class="text-2xl">🎓</span>
          <h2 class="text-2xl md:text-3xl font-bold text-white text-center">Scholars Details by Department</h2>
        </div>
        <div class="p-8 md:p-10">
          <div class="overflow-x-auto">
            <table class="table-auto w-full border border-gray-300 text-left mb-4 rounded-xl overflow-hidden">
              <thead class="bg-gray-200">
                <tr>
                  <th class="border px-4 py-2">Department</th>
                  <th class="border px-4 py-2">PhD Completed (FT)</th>
                  <th class="border px-4 py-2">PhD Completed (PT)</th>
                  <th class="border px-4 py-2">PhD Registered (FT)</th>
                  <th class="border px-4 py-2">PhD Registered (PT)</th>
                  <th class="border px-4 py-2">Completed FT+PT</th>
                  <th class="border px-4 py-2">Registered FT+PT</th>
                  <th class="border px-4 py-2">Overall FT+PT</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(dept, index) in researchData.supervisors"
                  :key="index"
                  class="hover:bg-gray-50"
                >
                  <td class="border px-4 py-2">{{ dept.department }}</td>
                  <td class="border px-4 py-2 text-center">{{ dept.phdCompletedFullTime }}</td>
                  <td class="border px-4 py-2 text-center">{{ dept.phdCompletedPartTime }}</td>
                  <td class="border px-4 py-2 text-center">{{ dept.phdRegisteredFullTime }}</td>
                  <td class="border px-4 py-2 text-center">{{ dept.phdRegisteredPartTime }}</td>
                  <td class="border px-4 py-2 text-center">{{ dept.completedFTPT }}</td>
                  <td class="border px-4 py-2 text-center">{{ dept.registeredFTPT }}</td>
                  <td class="border px-4 py-2 text-center">{{ dept.completedFTPT + dept.registeredFTPT }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import researchData from '@/assets/research-cell.json';

export default {
  data() {
    return {
      researchData,
      backgroundImage: '/offices.webp',
      currentSection: 'description',
      sections: [
        { label: 'Description', key: 'description' },
        { label: 'Supervisors', key: 'supervisors' }
      ]
    };
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    scrollToSection(id) {
      const section = this.$refs[id];
      if (section && section.scrollIntoView) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    },
    onScroll() {
      for (const section of this.sections) {
        const el = this.$refs[section.key];
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            this.currentSection = section.key;
            break;
          }
        }
      }
    }
  }
};
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.section-box {
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  scroll-margin-top: 6rem;
}
.section-title {
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
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
