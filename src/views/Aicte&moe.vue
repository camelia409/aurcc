<template>
  <main class="bg-gradient-to-br from-indigo-100 via-blue-50 to-white min-h-screen font-sans text-gray-800">
    <!-- Hero Section -->
    <section class="relative w-full min-h-[35vh] sm:min-h-[40vh] md:min-h-[50vh] lg:min-h-[60vh] overflow-hidden flex items-center justify-center animate-fadeIn">
      <img src="/offices.webp" alt="AICTE & MOE Cell" class="absolute inset-0 w-full h-full object-cover object-center" />
      <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>
      <div class="absolute inset-0 flex flex-col items-center justify-center z-10 px-2">
        <div class="backdrop-blur-md bg-white/30 rounded-2xl shadow-lg px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-3 sm:py-4 md:py-6 lg:py-8 xl:py-10 flex flex-col items-center w-full max-w-2xl border border-white/30">
          <h1 class="mobile-text-xl sm:mobile-text-2xl lg:mobile-text-3xl xl:mobile-text-4xl font-extrabold text-white drop-shadow-lg tracking-wide text-center mb-2 leading-tight">AICTE & MOE Cell</h1>
          <p class="mobile-text-sm sm:mobile-text-base lg:mobile-text-lg xl:mobile-text-xl text-white drop-shadow text-center font-medium">All statutory and regulatory information for students and staff</p>
        </div>
      </div>
    </section>

    <!-- Navigation Tabs -->
    <div class="sticky top-0 z-20">
      <div class="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div class="bg-white/95 backdrop-blur-sm shadow-lg rounded-full -mt-4 sm:-mt-6 py-1 px-2 flex justify-center overflow-x-auto no-scrollbar">
          <nav role="tablist" class="tabs flex space-x-1 md:space-x-2">
            <button
              v-for="(section, index) in sections"
              :key="index"
              @click="scrollToSection(section.key)"
              :class="[
                'font-medium px-3 sm:px-4 md:px-5 py-2 md:py-3 rounded-full mobile-text-xs sm:mobile-text-sm lg:mobile-text-base transition duration-300 whitespace-nowrap',
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
    <section class="max-w-7xl mx-auto py-8 sm:py-12 lg:py-14 px-2 md:px-9 flex flex-col gap-8 sm:gap-10 lg:gap-12">
      <!-- Objectives -->
      <div :id="'objectives'" ref="objectives" class="mobile-card bg-white/70 backdrop-blur-md rounded-2xl shadow-lg animate-fadeIn border border-gray-100">
        <div class="bg-gradient-to-r from-blue-900 to-blue-500 py-4 sm:py-5 flex items-center justify-center gap-2 sm:gap-3 rounded-t-2xl">
          <span class="mobile-text-lg lg:mobile-text-xl">🎯</span>
          <h2 class="mobile-text-lg sm:mobile-text-xl lg:mobile-text-2xl xl:mobile-text-3xl font-bold text-white text-center">Objectives</h2>
        </div>
        <div class="p-4 sm:p-6 md:p-8 lg:p-10">
          <ul class="list-disc pl-3 sm:pl-4">
            <li v-for="objective in data.home['Objectives of AICTE & MOE Cell']" :key="objective" class="mb-2 mobile-text-base lg:mobile-text-lg xl:mobile-text-xl text-gray-800">
              {{ objective }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Important Links -->
      <div :id="'important_links'" ref="important_links" class="mobile-card bg-white/70 backdrop-blur-md rounded-2xl shadow-lg animate-fadeIn border border-gray-100">
        <div class="bg-gradient-to-r from-blue-900 to-blue-500 py-4 sm:py-5 flex items-center justify-center gap-2 sm:gap-3 rounded-t-2xl">
          <span class="mobile-text-lg lg:mobile-text-xl">🔗</span>
          <h2 class="mobile-text-lg sm:mobile-text-xl lg:mobile-text-2xl xl:mobile-text-3xl font-bold text-white text-center">Important Links</h2>
        </div>
        <div class="p-4 sm:p-6 md:p-8 lg:p-10">
          <ul class="list-disc pl-3 sm:pl-4">
            <li v-for="(link, key) in data.home['Important Links']" :key="key" class="mb-2 mobile-text-base lg:mobile-text-lg xl:mobile-text-xl">
              <a :href="link" target="_blank" class="text-blue-600 underline hover:text-indigo-700 transition">{{ key }}</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Circulars & Notifications -->
      <div :id="'circulars_notifications'" ref="circulars_notifications" class="mobile-card bg-white/70 backdrop-blur-md rounded-2xl shadow-lg animate-fadeIn border border-gray-100">
        <div class="bg-gradient-to-r from-blue-900 to-blue-500 py-4 sm:py-5 flex items-center justify-center gap-2 sm:gap-3 rounded-t-2xl">
          <span class="mobile-text-lg lg:mobile-text-xl">📢</span>
          <h2 class="mobile-text-lg sm:mobile-text-xl lg:mobile-text-2xl xl:mobile-text-3xl font-bold text-white text-center">Circulars & Notifications</h2>
        </div>
        <div class="p-4 sm:p-6 md:p-8 lg:p-10">
          <ul class="list-disc pl-3 sm:pl-4">
            <li v-for="(link, title) in data.Circulars_Notifications" :key="title" class="mb-2 mobile-text-base lg:mobile-text-lg xl:mobile-text-xl">
              <a :href="link" target="_blank" class="text-blue-600 underline hover:text-indigo-700 transition">{{ title }}</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Approval Letters -->
      <div :id="'approval_letters'" ref="approval_letters" class="mobile-card bg-white/70 backdrop-blur-md rounded-2xl shadow-lg animate-fadeIn border border-gray-100">
        <div class="bg-gradient-to-r from-blue-900 to-blue-500 py-4 sm:py-5 flex items-center justify-center gap-2 sm:gap-3 rounded-t-2xl">
          <span class="mobile-text-lg lg:mobile-text-xl">📄</span>
          <h2 class="mobile-text-lg sm:mobile-text-xl lg:mobile-text-2xl xl:mobile-text-3xl font-bold text-white text-center">Approval Letters</h2>
        </div>
        <div class="p-4 sm:p-6 md:p-8 lg:p-10">
          <ul class="list-disc pl-3 sm:pl-4">
            <li v-for="(link, title) in approvalLetters" :key="title" class="mb-2 mobile-text-base lg:mobile-text-lg xl:mobile-text-xl">
              <a :href="link" target="_blank" class="text-blue-600 underline hover:text-indigo-700 transition">{{ title }}</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import data from '../assets/aicte&moe.json';

export default {
  data() {
    return {
      data: data,
      sections: [
        { key: 'objectives', label: 'Objectives' },
        { key: 'important_links', label: 'Important Links' },
        { key: 'circulars_notifications', label: 'Circulars & Notifications' },
        { key: 'approval_letters', label: 'Approval Letters' }
      ],
      currentSection: 'objectives',
      approvalLetters: {
        'LOA(2019-20)': data['LOA(2019-20)'],
        'EOA(2020-21)': data['EOA(2020-21)'],
        'EOA(2021-22)': data['EOA(2021-22)'],
        'EOA(2022-23)': data['EOA(2022-23)'],
        'EOA(2023-24)': data['EOA(2023-24)']
      }
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
      if (section?.scrollIntoView) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    },
    onScroll() {
      for (const section of this.sections) {
        const el = this.$refs[section.key];
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom > 200) {
            this.currentSection = section.key;
            break;
          }
        }
      }
    },
  },
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
</style>
