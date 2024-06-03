<template>
  <main class="flex-grow">
    <!-- Hero section -->
    <section class="bg-cover bg-center relative -z-10" :style="'background-image: url(http://192.168.72.231:5173/src/assets/dgate-hero.jpg)'">
      <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div class="container mx-auto py-16 text-white p-9 relative z-10">
        <h1 class="text-4xl font-bold mb-4">Zonal Office</h1>
        <p class="text-xl mb-8">Ensuring the seamless coordination between the University and Affiliated Colleges</p>
        <button class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Learn More</button>
      </div>
    </section>

    <!-- Horizontal Tabs -->
    <div class="sticky top-0 bg-[#fdb827] shadow-md z-10 hidden xl:block">
      <div class="flex justify-between px-9">
        <nav role="tablist" class="tabs">
          <button
            role="tab"
            v-for="(section, index) in sections"
            :key="index"
            @click="currentSection = section"
            :class="{
              'bg-[#21209C] text-white': currentSection === section,
              'text-black hover:bg-blue-700 hover:text-white': currentSection !== section
            }"
            class="font-semibold p-4 h-full transition duration-300 ease-in-out tab text-xl"
          >
            {{ section }}
          </button>
        </nav>
      </div>
    </div>

    <!-- Content sections -->
    <div class="container mx-auto py-8 p-9">
      <section v-if="currentSection !== null" class="py-8">
        <div v-if="currentSection === 'Description'">
          <h2 class="text-2xl font-bold mb-4">Description</h2>
          <ul class="list-disc pl-4">
            <li v-for="(desc, index) in data.description" :key="index">{{ desc }}</li>
          </ul>
        </div>
        <div v-else-if="currentSection === 'Zone List of Colleges'">
          <h2 class="text-2xl font-bold mb-4">Zone List of Colleges</h2>
          <a :href="data['zone list of colleges']" class="text-blue-500 hover:underline">Download the list of colleges</a>
        </div>
        <div v-else-if="currentSection === 'Office Bearers'">
          <h2 class="text-2xl font-bold mb-4">Office Bearers</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div v-for="bearer in data['Office bearers']" :key="bearer.name" class="bg-white shadow-md rounded-md p-4">
              <h3 class="text-lg font-semibold">{{ bearer.name }}</h3>
              <p>{{ bearer.designation }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import data from '../assets/zonaloffice.json';

export default {
  data() {
    return {
      data: data[0],
      sections: [
        'Description',
        'Zone List of Colleges',
        'Office Bearers'
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
/* Add your custom styles here */
</style>
