<template>
  <main class="flex-grow">
    <!-- Hero section -->
    <section class="relative bg-cover bg-center h-64" :style="'background-image: url(http://192.168.72.231:5173/src/assets/dgate-hero.jpg)'">
      <div class="absolute inset-0 bg-black bg-opacity-60"></div>
      <div class="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
        <h1 class="text-4xl font-bold mb-2">{{ data.name }}</h1>
        <button class="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg">Learn More</button>
      </div>
    </section>

    <!-- Navigation bar -->
    <nav class="bg-gray-800 py-3 sticky top-0 z-20">
      <div class="container mx-auto flex justify-center space-x-6">
        <button v-for="(section, index) in sections" :key="index" @click="currentSection = section" :class="{'text-white border-b-2 border-blue-500': currentSection === section, 'text-gray-400': currentSection !== section}" class="font-semibold py-1 px-3 transition duration-300 ease-in-out">
          {{ section }}
        </button>
      </div>
    </nav>

    <!-- Content sections -->
    <section class="container mx-auto py-8 px-4">
      <div v-if="currentSection !== null" class="bg-white shadow-md rounded-lg p-6">
        <div v-if="currentSection === 'Description'">
          <h2 class="text-2xl font-bold mb-4">About Us</h2>
          <p class="text-base leading-relaxed whitespace-pre-line">{{ data.description }}</p>
        </div>
        <div v-else-if="currentSection === 'Activities'">
          <h2 class="text-2xl font-bold mb-4">Activities</h2>
          <ul class="list-disc pl-6 text-base space-y-2">
            <li v-for="activity in data.activities" :key="activity">
              {{ activity }}
            </li>
          </ul>
        </div>
        <div v-else-if="currentSection === 'NSS Coordinators'">
          <h2 class="text-2xl font-bold mb-4">NSS Coordinators</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div v-for="coordinator in data.nss_coordinator['Office Bearers']" :key="coordinator['Email id']" class="bg-gray-100 rounded-lg p-4 shadow-sm">
              <h3 class="text-lg font-semibold">{{ coordinator.Name }}</h3>
              <p class="text-gray-700">{{ coordinator.Designation }}</p>
              <p class="text-gray-700">{{ coordinator['Phone No'] !== '-' ? coordinator['Phone No'] : 'N/A' }}</p>
              <p class="text-gray-700">{{ coordinator['Email id'] }}</p>
            </div>
          </div>
        </div>
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
        'Description',
        'Activities',
        'NSS Coordinators'
      ],
      currentSection: 'Description'
    };
  }
};
</script>
