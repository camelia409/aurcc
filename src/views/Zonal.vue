<template>
  <main class="flex-grow">
    <!-- Hero section -->
    <section class="bg-cover bg-center relative -z-10" :style="'background-image: url(http://192.168.72.231:5173/src/assets/dgate-hero.jpg)'">
      <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-blue-900 via-transparent to-blue-900 opacity-70"></div>
      <div class="container mx-auto py-10 text-center relative z-10 px-4">
        <h1 class="text-4xl font-extrabold text-black drop-shadow-lg font-serif">Zonal Office</h1>
      </div>
    </section>

    <!-- Vertical Tabs Section -->
    <section class="mx-auto py-12 px-10 bg-gray-100 rounded-lg">
      <div class="flex flex-col lg:flex-row">
        <!-- Vertical Tabs -->
        <div class="flex-shrink-0 w-full h-max lg:w-64 bg-gradient-to-r from-[#21209c] to-blue-600 rounded-lg shadow-lg p-4 overflow-hidden mb-4 lg:mb-0">
          <div class="relative bg-gradient-to-r from-[#21209c] to-blue-600 p-4 rounded-lg">
            <h2 class="text-2xl font-serif text-white font-bold text-center">Sections</h2>
          </div>
          <div class="space-y-2 font-serif">
            <button @click="activeTab = 'description'" :class="{'bg-yellow-400 text-[#23120b]': activeTab === 'description', 'bg-white text-gray-800': activeTab !== 'description'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b]">Description</button>
            <button @click="activeTab = 'zoneList'" :class="{'bg-yellow-400 text-[#23120b]': activeTab === 'zoneList', 'bg-white text-gray-800': activeTab !== 'zoneList'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b]">Zone List of Colleges</button>
            <button @click="activeTab = 'officeBearers'" :class="{'bg-yellow-400 text-[#23120b]': activeTab === 'officeBearers', 'bg-white text-gray-800': activeTab !== 'officeBearers'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b]">Office Bearers</button>
          </div>
        </div>

        <!-- Tab Content -->
        <div class="w-full lg:pl-10 font-serif min-h-[400px] max-h-[450px] ">
          <div v-if="activeTab === 'description'">
            <h3 class="text-2xl md:text-4xl font-bold text-black mb-4">Description</h3>
            <ul class="text-lg sm:text-xl font-medium text-gray-900 list-disc pl-6">
              <li v-for="(desc, index) in data.description" :key="index">{{ desc }}</li>
            </ul>
          </div>
          <div v-if="activeTab === 'zoneList'">
            <h3 class="text-2xl sm:text-3xl text-black font-bold mb-4">Zone List of Colleges</h3>
            <iframe :src="zonalListPDF" class="w-full h-[500px] sm:h-[700px] rounded-lg border-2 border-gray-300 shadow-sm" frameborder="0"></iframe>
          </div>
          <div v-if="activeTab === 'officeBearers'">
            <h3 class="text-2xl md:text-4xl font-bold text-black mb-4">Office Bearers</h3>
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
      activeTab: 'description', // Default active tab
    };
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style scoped>
/* Font Styles */

/* Hero section */

/* Sections */

/* Gradient Background */

/* Vertical Tabs */

</style>
