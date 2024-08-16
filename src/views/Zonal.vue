<template>
  <main class="flex-grow">
    <!-- Hero section -->
    <section
      class="bg-cover bg-center relative -z-10"
      :style="'background-image: url(http://192.168.72.231:5173/src/assets/dgate-hero.jpg)'"
    >
      <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div class="container mx-auto py-16 text-white p-9 relative z-10 flex justify-center items-center flex-col text-center">
        <h1 class="text-5xl font-bold mb-4">Zonal Office</h1>
        <p class="text-xl mb-8">Ensuring the seamless coordination between the University and Affiliated Colleges</p>
        <button class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          Learn More
        </button>
      </div>
    </section>

    <!-- Content sections -->
    <section class="mx-auto py-8 px-4 space-y-8 bg-indigo-100">
      <!-- Description Section -->
      <div class="bg-white rounded-lg shadow-md">
        <h2 class="text-3xl text-center text-white font-bold p-4 bg-blue-800 rounded-t-lg">Description</h2>
        <div class="text-xl font-medium p-4 space-y-4">
          <ul class="list-disc pl-4">
            <li v-for="(desc, index) in data.description" :key="index">{{ desc }}</li>
          </ul>
        </div>
      </div>

      <!-- Zone List of Colleges Section -->
      <div class="bg-white rounded-lg shadow-md">
        <h2 class="text-3xl text-center text-white font-bold p-4 bg-blue-800 rounded-t-lg">Zone List of Colleges</h2>
        <div class="text-xl font-medium p-4 space-y-4">
          <iframe :src="zonalListPDF" class="w-full h-[700px]" frameborder="0"></iframe>
        </div>
      </div>

      <!-- Office Bearers Section -->
      <div class="bg-white rounded-lg shadow-md">
        <h2 class="text-3xl text-center text-white font-bold p-4 bg-blue-800 rounded-t-lg">Office Bearers</h2>
        <div class="text-xl font-medium p-4 space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div v-for="bearer in data['Office bearers']" :key="bearer.name" class="p-6 rounded-lg">
              <h3 class="text-lg font-semibold">{{ bearer.name }}</h3>
              <p>{{ bearer.designation }}</p>
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
/* Additional custom styles if needed */
</style>
