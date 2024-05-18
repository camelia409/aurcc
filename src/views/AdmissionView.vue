<template>
    <main class="flex-grow">
      <!-- Hero section -->
      <section class="bg-cover bg-center relative -z-10" :style="'background-image: url(http://192.168.72.231:5173/src/assets/dgate-hero.jpg)'">
        <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div class="container mx-auto py-16 text-white p-9 relative z-10">
          <h1 class="text-4xl font-bold mb-4">{{ data.name }}</h1>
          <p class="text-xl mb-8">{{ data.description.Overview }}</p>
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
            <div v-if="currentSection === 'Overview'">
              <h2 class="text-2xl font-bold mb-4">Overview</h2>
              <p>{{ data.description['Admissions at our Regional Campus'] }}</p>
            </div>
            <div v-else-if="currentSection === 'Courses Offered'">
              <h2 class="text-2xl font-bold mb-4">Courses Offered</h2>
              <p>{{ data.courses_offered }}</p>
            </div>
            <div v-else-if="currentSection === 'Eligibility Criteria'">
              <h2 class="text-2xl font-bold mb-4">Eligibility Criteria</h2>
              <ul class="list-disc pl-4">
                <li v-for="(criteria, category) in data.eligibility_criteria" :key="category">
                  <strong>{{ category }}</strong>: {{ criteria }}
                </li>
              </ul>
            </div>
            <div v-else-if="currentSection === 'Contact Us'">
              <h2 class="text-2xl font-bold mb-4">Contact Us</h2>
              <p>{{ data.contact_us['Admission Co-ordinator'] }}</p>
            </div>
          </section>
        </div>
      </section>
    </main>
  </template>
  
  <script>
  import admissionData from '../assets/admission.json';
  
  export default {
    data() {
      return {
        data: admissionData[0],
        sections: [
          'Overview',
          'Courses Offered',
          'Eligibility Criteria',
          'Contact Us'
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
  