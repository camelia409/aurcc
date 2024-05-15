<template>
    <main class="flex-grow">
      <!-- Hero section -->
      <section class="bg-blue-500 text-white py-12">
        <div class="container mx-auto text-center">
          <h1 class="text-4xl font-bold">Exam Cell</h1>
        </div>
      </section>
      
      <!-- Content sections -->
      <section class="container mx-auto py-8 p-9">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- Sidebar -->
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
          <!-- Main content -->
          <section v-if="currentSection !== null" class="container mx-auto py-8 p-9 md:col-span-3">
            <transition name="fade" mode="out-in">
              <div :key="currentSection">
                <div v-if="currentSection === 'About the Exam Cell'">
                  <h2 class="text-2xl font-bold mb-4">About the Exam Cell</h2>
                  <p class="text-xl mb-8">{{ details.description }}</p>
                </div>
                <div v-else-if="currentSection === 'Services'">
                  <h2 class="text-2xl font-bold mb-4">Services</h2>
                  <ul class="list-disc pl-4 space-y-2">
                    <li v-for="service in details.services" :key="service">
                      {{ service }}
                    </li>
                  </ul>
                </div>
                <div v-else-if="currentSection === 'Office Bearers'">
                  <h2 class="text-2xl font-bold mb-4">Office Bearers</h2>
                  <ul class="space-y-4">
                    <li v-for="bearer in details.office_bearers" :key="bearer.name" class="text-lg">
                      <span class="font-medium">{{ bearer.name }}</span> - <span class="text-gray-700">{{ bearer.position }}</span>
                    </li>
                  </ul>
                </div>
                <!-- Add additional sections as needed -->
              </div>
            </transition>
          </section>
        </div>
      </section>
    </main>
  </template>
  
  <script>
  import details from '../assets/exam-cell.json';
  
  export default {
    name: 'ExamCell',
    data() {
      return {
        details: details,
        sections: [
          'About the Exam Cell',
          'Services',
          'Office Bearers'
          // Add additional section names as needed
        ],
        currentSection: null
      };
    },
    created() {
      // Default to first section
      if (this.sections.length > 0) {
        this.currentSection = this.sections[0];
      }
    },
    computed: {
      currentYear() {
        return new Date().getFullYear();
      }
    }
  };
  </script>
  
  <style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0;
  }
  </style>
  