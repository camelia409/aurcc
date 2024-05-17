<template>
  <main class="flex-grow">
    <!-- Hero section -->
    <section class="bg-cover bg-center relative -z-10" :style="'background-image: url(http://192.168.72.231:5173/src/assets/dgate-hero.jpg)'">
      <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div class="container mx-auto py-16 text-white p-9 relative z-10">
        <h1 class="text-4xl font-bold mb-4">{{ data.name }}</h1>
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
          <div v-if="currentSection === 'About'">
            <h2 class="text-2xl font-bold mb-4">About</h2>
            <p>{{ data.description }}</p>
          </div>
          <div v-else-if="currentSection === 'Activities'">
            <h2 class="text-2xl font-bold mb-4">Activities</h2>
            <ul class="list-disc pl-4">
              <li v-for="activity in data.activities" :key="activity" class="mb-2">
                {{ activity }}
              </li>
            </ul>
          </div>
          <div v-else-if="currentSection === 'NSS Coordinators'">
            <h2 class="text-2xl font-bold mb-4">NSS Coordinators</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div v-for="coordinator in data.nss_coordinator['Office Bearers']" :key="coordinator.Name" class="bg-white shadow-md rounded-md p-4">
                <h3 class="text-lg font-semibold">{{ coordinator.Name }}</h3>
                <p>{{ coordinator.Designation }}</p>
                <p>{{ coordinator['Phone No'] !== '-' ? coordinator['Phone No'] : 'N/A' }}</p>
                <p>{{ coordinator['Email id'] }}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  </main>
</template>

<script>
import data from '../assets/NSS.json';

export default {
  data() {
    return {
      data: data,
      sections: [
        'About',
        'Activities',
        'NSS Coordinators'
      ],
      currentSection: null
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
