<template>
  <main class="flex-grow">
    <!-- Hero section -->
    <section class="bg-cover bg-center relative -z-10" :style="'background-image: url(http://192.168.72.231:5173/src/assets/dgate-hero.jpg)'">
      <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div class="container mx-auto py-16 text-white p-9 relative z-10">
        <h1 class="text-4xl font-bold mb-4">AICTE & MOE Cell</h1>
        <button class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Learn More</button>
      </div>
    </section>

    <!-- Content sections -->
    <section class="container mx-auto py-8 p-9">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 class="text-2xl font-bold mb-4 flex items-center">
            <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
            </svg>
            Sections
          </h2>
          <div class="flex flex-col">
            <button v-for="(section, index) in sections" :key="index" @click="currentSection = section" :class="{'bg-blue-500 text-white': currentSection === section, 'bg-white hover:bg-gray-100 text-gray-800': currentSection !== section}" class="font-semibold py-2 px-4 border border-gray-400 rounded shadow flex items-center mb-2">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
              {{ section }}
            </button>
          </div>
        </div>
        <section v-if="currentSection !== null" class="container mx-auto py-8 p-9 md:col-span-3">
          <div v-if="currentSection === 'Objectives'">
            <h2 class="text-2xl font-bold mb-4">Objectives of AICTE & MOE Cell</h2>
            <ul class="list-disc pl-4">
              <li v-for="objective in data.home['Objectives of AICTE & MOE Cell']" :key="objective" class="mb-2">
                {{ objective }}
              </li>
            </ul>
          </div>
          <div v-else-if="currentSection === 'Important Links'">
            <h2 class="text-2xl font-bold mb-4">Important Links</h2>
            <ul class="list-disc pl-4">
              <li v-for="(link, key) in data.home['Important Links']" :key="key" class="mb-2">
                <a :href="link" target="_blank" class="text-blue-500 underline">{{ key }}</a>
              </li>
            </ul>
          </div>
          <div v-else-if="currentSection === 'Circulars & Notifications'">
            <h2 class="text-2xl font-bold mb-4">Circulars & Notifications</h2>
            <ul class="list-disc pl-4">
              <li v-for="(link, title) in data.Circulars_Notifications" :key="title" class="mb-2">
                <a :href="link" target="_blank" class="text-blue-500 underline">{{ title }}</a>
              </li>
            </ul>
          </div>
          <div v-else-if="currentSection === 'Approval Letters'">
            <h2 class="text-2xl font-bold mb-4">Approval Letters</h2>
            <ul class="list-disc pl-4">
              <li v-for="(link, title) in approvalLetters" :key="title" class="mb-2">
                <a :href="link" target="_blank" class="text-blue-500 underline">{{ title }}</a>
              </li>
            </ul>
          </div>
        </section>
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
        'Objectives',
        'Important Links',
        'Circulars & Notifications',
        'Approval Letters'
      ],
      currentSection: null,
      approvalLetters: {
        'LOA(2019-20)': data['LOA(2019-20)'],
        'EOA(2020-21)': data['EOA(2020-21)'],
        'EOA(2021-22)': data['EOA(2021-22)'],
        'EOA(2022-23)': data['EOA(2022-23)'],
        'EOA(2023-24)': data['EOA(2023-24)']
      }
    };
  },
  created() {
    // Default to first section
    if (this.sections.length > 0) {
      this.currentSection = this.sections[0];
    }
  }
};
</script>

<style scoped>
</style>
