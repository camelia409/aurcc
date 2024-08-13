<template>
  <div class="min-h-screen flex flex-col">
    <!-- Hero section -->
    <section
      class="bg-cover bg-center relative -z-10"
      :style="'background-image: url(http://192.168.72.231:5173/src/assets/dgate-hero.jpg)'"
    >
      <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div class="container mx-auto py-16 text-white p-9 relative z-10">
        <h1 class="text-4xl font-bold mb-4">Zonal Office</h1>
        <p class="text-xl mb-8">Ensuring the seamless coordination between the University and Affiliated Colleges</p>
        <button class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          Learn More
        </button>
      </div>
    </section>

    <!-- Content sections -->
    <div class="container mx-auto py-8 p-9 bg-gray-100">
      <section v-for="(section, index) in sections" :key="index" class="mb-16">
        <h2 class="text-3xl text-center font-bold mb-4 p-2 bg-gradient-to-r from-blue-500 to-cyan-300 rounded-lg">{{ section }}</h2>

        <!-- Description Section -->
        <div v-if="section === 'Description'" class="bg-white rounded-lg p-4">
          <ul class="list-disc pl-4">
            <li v-for="(desc, index) in data.description" :key="index">{{ desc }}</li>
          </ul>
        </div>

        <!-- Zone List of Colleges Section -->
        <div v-else-if="section === 'Zone List of Colleges'" class="bg-white rounded-lg p-4">
          <iframe :src="zonalListPDF" class="w-full h-[700px]" frameborder="0"></iframe>
        </div>

        <!-- Office Bearers Section -->
        <div v-else-if="section === 'Office Bearers'" class="bg-white rounded-lg p-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div v-for="bearer in data['Office bearers']" :key="bearer.name" class="bg-shadow p-6 text-xl font-medium rounded-lg">
              <h3 class="text-lg font-semibold">{{ bearer.name }}</h3>
              <p>{{ bearer.designation }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-4">
      <div class="container mx-auto text-center">
        <p>&copy; {{ currentYear }} Zonal Office. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
import data from '../assets/zonaloffice.json';
import zonalListPDF from '../assets/zonal-list.pdf';

export default {
  data() {
    return {
      data: data[0],
      sections: ['Description', 'Zone List of Colleges', 'Office Bearers'],
      zonalListPDF,
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
/* Custom styles here */
</style>
