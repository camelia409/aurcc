<template>
    <main class="flex-grow">
      <!-- Hero section -->
      <section class="bg-cover bg-center relative -z-10" :style="'background-image: url(http://192.168.72.231:5173/src/assets/dgate-hero.jpg)'">
        <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div class="container mx-auto py-16 text-white p-9 relative z-10">
          <h1 class="text-4xl font-bold mb-4">{{ paceData.name }}</h1>
          <p class="text-xl mb-8">{{ paceData.description }}</p>
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
            <div v-if="currentSection === 'Description'">
              <h2 class="text-2xl font-bold mb-4">Description</h2>
              <p>{{ paceData.description }}</p>
            </div>
            <div v-else-if="currentSection === 'Coordinators'">
              <h2 class="text-2xl font-bold mb-4">Coordinators</h2>
              <div v-for="(coordinator, index) in paceData.coordinators" :key="index" class="bg-white p-6 rounded-lg shadow-lg mb-4">
                <p><strong>Name:</strong> {{ coordinator.name }}</p>
                <p><strong>Position:</strong> {{ coordinator.position }}</p>
              </div>
              <div v-if="paceData.support_staff.length">
                <h3 class="text-xl font-bold mt-4">Support Staff</h3>
                <ul class="list-disc list-inside ml-4">
                  <li v-for="(staff, index) in paceData.support_staff" :key="index">{{ staff }}</li>
                </ul>
              </div>
              <div v-if="paceData.student_volunteers.length">
                <h3 class="text-xl font-bold mt-4">Student Volunteers</h3>
                <ul class="list-disc list-inside ml-4">
                  <li v-for="(volunteer, index) in paceData.student_volunteers" :key="index">{{ volunteer }}</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  </template>
  
  <script>
  import paceData from '../assets/pace.json';
  
  export default {
    data() {
      return {
        paceData,
        sections: [
          'Description',
          'Coordinators'
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
  .description-item {
    display: flex;
    flex-wrap: wrap;
  }
  </style>
  