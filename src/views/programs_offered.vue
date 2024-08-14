<template>
    <div class="flex-grow">
      <!-- Hero section -->
      <section class="bg-cover bg-center relative -z-10" :style="'background-image: url(http://192.168.72.231:5173/src/assets/student_affairs-hero.jpg)'">
        <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div class="container mx-auto py-16 text-white p-9 relative z-10">
          <h1 class="text-4xl font-bold mb-4">Programs Offered</h1>
          <p class="text-xl mb-8">Explore the programs we offer for undergraduate and postgraduate studies.</p>
        </div>
      </section>
  
      <!-- Background section below the hero -->
      <div class="bg-indigo-100 py-8">
        <!-- UG Programmes section -->
        <section class="py-8 p-4">
          <div class="bg-white rounded-lg shadow-md">
            <h2 class="text-3xl text-center font-bold p-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-300">UG Programmes</h2>
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S.No</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Courses Offered</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Intake</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="(programme, index) in data['UG programmes']" :key="index">
                  <td class="px-6 py-4 whitespace-nowrap">{{ programme['S.No'] }}</td>
                  <td class="px-6 py-4 whitespace-nowrap">{{ programme['Courses Offered'] }}</td>
                  <td class="px-6 py-4 whitespace-nowrap">{{ programme['Intake'] }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
  
        <!-- PG Programmes section -->
        <section class="py-8 p-4">
          <div class="bg-white rounded-lg shadow-md">
            <h2 class="text-3xl text-center font-bold p-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-300">PG Programmes</h2>
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S.No</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Courses Offered</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Intake</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="(programme, index) in data['PG programmes']" :key="index">
                  <td class="px-6 py-4 whitespace-nowrap">{{ programme['S.No'] }}</td>
                  <td class="px-6 py-4 whitespace-nowrap">{{ programme['Department'] }}</td>
                  <td class="px-6 py-4 whitespace-nowrap">{{ programme['Courses Offered'] }}</td>
                  <td class="px-6 py-4 whitespace-nowrap">{{ programme['Intake'] }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  </template>
  
  <script>
  import data from '../assets/programs_offered.json';
  
  export default {
    data() {
      return {
        data: data,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add any custom styles here if needed */
  </style>
  