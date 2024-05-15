<template>
    <div class="min-h-screen flex flex-col">
      <main class="flex-grow">
        <!-- Hero section -->
        <section class="bg-gradient-to-r from-custom-gradient-start to-custom-gradient-end text-white py-12">
          <div class="container mx-auto py-16 text-white p-9 relative z-10">
            <h1 class="text-4xl font-bold mb-4">{{ data.name }}</h1>
            <p class="text-xl mb-8">{{ data.description['ED cell'] }}</p>
            <button class="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded">Learn More</button>
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
              <div v-if="currentSection === 'Objectives'">
                <h2 class="text-2xl font-bold mb-4">Objectives</h2>
                <ul class="list-disc pl-4">
                  <li v-for="objective in data.description.objectives" :key="objective">{{ objective }}</li>
                </ul>
              </div>
              <div v-else-if="currentSection === 'Key Activities'">
                <h2 class="text-2xl font-bold mb-4">Key Activities</h2>
                <div v-for="activity in data.description.key_activities" :key="activity.name" class="bg-white shadow-md rounded-md p-4 mb-4">
                  <h3 class="text-lg font-semibold">{{ activity.name }}</h3>
                  <p><strong>Location:</strong> {{ activity.location }}</p>
                  <p><strong>Details:</strong> {{ activity.details }}</p>
                </div>
              </div>
              <div v-else-if="currentSection === 'MOU'">
                <h2 class="text-2xl font-bold mb-4">MOU</h2>
                <ul class="list-disc pl-4">
                  <li v-for="mou in data.MOU" :key="mou">{{ mou }}</li>
                </ul>
              </div>
              <div v-else-if="currentSection === 'Links'">
                <h2 class="text-2xl font-bold mb-4">Links</h2>
                <ul class="list-disc pl-4">
                  <li v-for="link in data.links" :key="link">
                    <a :href="'http://' + link" target="_blank" rel="noopener noreferrer">{{ link }}</a>
                  </li>
                </ul>
              </div>
              <div v-else-if="currentSection === 'Office Bearers'">
                <h2 class="text-2xl font-bold mb-4">Office Bearers</h2>
                <div v-for="member in data.office_bearers" :key="member.email" class="bg-white shadow-md rounded-md p-4 mb-4">
                  <h3 class="text-lg font-semibold">{{ member.name }}</h3>
                  <p><strong>Position:</strong> {{ member.position }}</p>
                  <p><strong>Email:</strong> <a :href="'mailto:' + member.email">{{ member.email }}</a></p>
                  <p><strong>Organization:</strong> {{ member.organization }}</p>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
      <footer class="bg-gray-800 text-white py-4">
        <div class="container mx-auto text-center">
          <p>&copy; {{ currentYear }} ED Cell. All rights reserved.</p>
        </div>
      </footer>
    </div>
  </template>
  
  <script>
  import data from '../assets/ED-cell.json';
  
  export default {
    data() {
      return {
        data: data,
        sections: [
          'Objectives',
          'Key Activities',
          'MOU',
          'Links',
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
    },
    computed: {
      currentYear() {
        return new Date().getFullYear();
      }
    }
  };
  </script>
  
  <style>
  /* Add custom styles if needed */
  </style>