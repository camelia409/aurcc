<template>
  <main class="flex-grow">
    <!-- Hero section -->
    <section
      class="bg-cover bg-center relative -z-10"
      :style="'background-image: url(http://192.168.72.231:5173/src/assets/dgate-hero.jpg)'"
    >
      <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-blue-900 via-transparent to-blue-900 opacity-70"></div>
      <div class="container mx-auto py-16 text-center relative z-10 flex flex-col items-center text-white">
        <h1 class="text-5xl font-extrabold mb-4 drop-shadow-lg font-serif text-black">Zonal Office</h1>
        <p class="text-lg max-w-3xl mx-auto mb-8 leading-relaxed drop-shadow-lg font-sans text-black">Ensuring the seamless coordination between the University and Affiliated Colleges</p>
      </div>
    </section>

    <!-- Vertical Tabs Section -->
    <section class="container mx-auto py-8 px-4">
      <div class="relative flex">
        <!-- Vertical Tabs -->
        <div class="flex-shrink-0 w-64 bg-gradient-to-r from-purple-400 to-pink-300 rounded-lg shadow-lg p-4 overflow-hidden">
          <div class="relative bg-gradient-to-r from-purple-500 to-pink-400 p-4 rounded-lg mb-4">
            <svg class="absolute inset-0 w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="100" fill="url(#gradient)" />
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stop-color="rgba(255, 182, 193, 0.5)" />
                  <stop offset="100%" stop-color="rgba(255, 105, 180, 0.5)" />
                </linearGradient>
              </defs>
            </svg>
            <h2 class="text-2xl text-white font-bold">Tabs</h2>
          </div>
          <div class="space-y-4">
            <button @click="activeTab = 'description'" class="w-full py-2 px-4 bg-white text-gray-800 rounded-md font-semibold hover:bg-gray-200">Description</button>
            <button @click="activeTab = 'zoneList'" class="w-full py-2 px-4 bg-white text-gray-800 rounded-md font-semibold hover:bg-gray-200">Zone List of Colleges</button>
            <button @click="activeTab = 'officeBearers'" class="w-full py-2 px-4 bg-white text-gray-800 rounded-md font-semibold hover:bg-gray-200">Office Bearers</button>
          </div>
        </div>

        <!-- Tab Content -->
        <div class="flex-grow ml-8 p-4">
          <div v-if="activeTab === 'description'" class="bg-gradient-to-r from-indigo-500 to-indigo-300 rounded-lg shadow-lg p-6 relative -z-10">
            <h3 class="text-3xl text-white font-bold mb-4">Description</h3>
            <ul class="text-xl font-medium text-gray-900 list-disc pl-6">
              <li v-for="(desc, index) in data.description" :key="index">{{ desc }}</li>
            </ul>
          </div>
          <div v-if="activeTab === 'zoneList'" class="bg-gradient-to-r from-gray-500 to-gray-300 rounded-lg shadow-lg p-6 relative -z-10">
            <h3 class="text-3xl text-white font-bold mb-4">Zone List of Colleges</h3>
            <iframe :src="zonalListPDF" class="w-full h-[700px]" frameborder="0"></iframe>
          </div>
          <div v-if="activeTab === 'officeBearers'" class="bg-gradient-to-r from-teal-500 to-teal-300 rounded-lg shadow-lg p-6 relative -z-10">
            <h3 class="text-3xl text-white font-bold mb-4">Office Bearers</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div v-for="bearer in data['Office bearers']" :key="bearer.name" class="p-6 rounded-lg bg-white shadow-md">
                <h4 class="text-lg font-semibold">{{ bearer.name }}</h4>
                <p>{{ bearer.designation }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-4">
      <div class="container mx-auto text-center">
        <p>&copy; {{ currentYear }} Zonal Office. All rights reserved.</p>
      </div>
    </footer>
  </main>
</template>

<script>
import data from '../assets/zonaloffice.json';
import zonalListPDF from '../assets/zonal-list.pdf';

export default {
  data() {
    return {
      data: data[0],
      zonalListPDF,
      activeTab: 'description' // Default active tab
    };
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style>
/* Font Styles */
.font-sans {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.font-serif {
  font-family: 'Georgia', 'Times New Roman', Times, serif;
}

/* Hero section */
.hero-section {
  min-height: 50vh;
  position: relative;
  background-blend-mode: multiply;
}

/* Sections */
section {
  transition: transform 0.3s ease-in-out;
}

section:hover {
  transform: scale(1.01);
}

/* Gradient Background */
.bg-gradient-to-r {
  background: linear-gradient(90deg, var(--tw-gradient-stops));
}

/* Vertical Tabs */
.bg-gradient-to-r {
  position: relative;
}

button:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.flex-shrink-0 {
  flex-shrink: 0;
}
</style>
