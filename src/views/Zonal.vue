<template>
  <main class="flex-grow">
    <!-- Hero section -->
    <section 
      class="bg-cover bg-center relative w-full h-40 sm:h-80 md:h-94 animate-fadeIn" 
      :style="{ 
        backgroundImage: `url(${backgroundImage})`
      }">
      <!-- Gradient Overlay -->
      <div class="absolute inset-0 bg-black opacity-20"></div>
      
      <!-- Content Container -->
      <div class="flex items-center justify-center h-full relative z-10 px-4">
        <h1 class="md:text-4xl text-xl font-extrabold text-white drop-shadow-lg font-serif text-center animate-slideIn">
          ZONAL OFFICE
        </h1>
      </div>
    </section>

    <!-- Vertical Tabs Section -->
    <section class="mx-auto py-6 md:py-12 md:px-10 bg-indigo-100 rounded-lg animate-popIn">
      <div class="relative flex flex-col md:px-8 px-4 md:flex-row">
        <!-- Vertical Tabs -->
        <div class="px-8 md:px-0">
        <div class="flex-shrink-0 w-full h-max md:w-64 bg-gradient-to-r from-[#21209c] to-blue-600 rounded-lg shadow-lg p-4 mb-4 md:mb-0 md:mr-4">
          <div class="relative p-4 rounded-lg">
            <h2 class="text-2xl font-serif text-center text-white font-semibold">Sections</h2>
          </div>
          <div class="space-y-2 font-serif mt-4">
            <button @click="activeTab = 'description'" :class="{'bg-yellow-400 text-[#23120b]': activeTab === 'description', 'bg-white text-gray-800': activeTab !== 'description'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b]">Description</button>
            <button @click="activeTab = 'zoneList'" :class="{'bg-yellow-400 text-[#23120b]': activeTab === 'zoneList', 'bg-white text-gray-800': activeTab !== 'zoneList'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b]">Zone List of Colleges</button>
            <button @click="activeTab = 'officeBearers'" :class="{'bg-yellow-400 text-[#23120b]': activeTab === 'officeBearers', 'bg-white text-gray-800': activeTab !== 'officeBearers'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b]">Office Bearers</button>
          </div>
        </div>
        </div>

        <!-- Tab Content -->
        <div class="w-full px-0 md:px-10  font-serif min-h-[400px] max-h-[600px] md:max-h-[800px] overflow-y-auto">
          <div v-if="activeTab === 'description'" class="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-16 animate-fadeIn">
            <h3 class="text-2xl md:text-3xl font-bold text-black mb-4">Description</h3>
            <ul class="text-lg md:text-xl font-medium text-gray-900 list-disc pl-6">
              <li v-for="(desc, index) in data.description" :key="index">{{ desc }}</li>
            </ul>
          </div>
          <div v-if="activeTab === 'zoneList'" class="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-16 animate-fadeIn">
            <h3 class="text-2xl md:text-3xl font-bold text-black mb-4">Zone List of Colleges</h3>
            <iframe :src="zonalListPDF" class="w-full h-[500px] sm:h-[700px] rounded-lg border-2 border-gray-300 shadow-sm" frameborder="0"></iframe>
          </div>
          <div v-if="activeTab === 'officeBearers'" class="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-16 animate-fadeIn">
            <h3 class="text-2xl md:text-3xl font-bold text-black mb-4">Office Bearers</h3>
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
import backgroundImage from '@/assets/offices.webp';  // Correct path for the image

export default {
  data() {
    return {
      data: data[0],
      backgroundImage: backgroundImage,
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
.font-sans {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.font-serif {
  font-family: 'Georgia', 'Times New Roman', Times, serif;
}


</style>
