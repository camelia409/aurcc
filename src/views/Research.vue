<template>
  <div class="min-h-screen flex flex-col">
    <!-- Hero Section -->
    <section class="bg-cover bg-center relative -z-10" :style="'background-image: url(http://192.168.72.231:5173/src/assets/dgate-hero.jpg)'">
      <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-blue-900 via-transparent to-blue-900 opacity-70"></div>
      <div class="container mx-auto py-16 text-center text-white relative z-10">
        <h1 class="text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-lg text-black">{{ data.name }}</h1>
        <p class="text-base md:text-lg max-w-3xl mx-auto mb-8 leading-relaxed drop-shadow-lg text-black">{{ data.description }}</p>
      </div>
    </section>

    <!-- Content Sections with Vertical Tabs -->
    <section class="container mx-auto py-12 px-4 bg-gray-100 rounded-lg">
      <div class="flex flex-col md:flex-row">
        <!-- Vertical Tabs -->
        <div class="flex-shrink-0 w-full md:w-64 bg-gradient-to-r from-purple-400 to-pink-300 rounded-lg shadow-lg p-4 overflow-hidden">
          <div class="relative bg-gradient-to-r from-purple-500 to-pink-400 p-4 rounded-lg mb-4">
            <svg class="absolute inset-0 w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="100" fill="url(#gradient)" />
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stop-color="rgba(255, 182, 193, 0.5)" />
                  <stop offset="100%" stop-color="rgba(255, 105, 180, 0.5)" />
                </linearGradient>
              </defs>
            </svg>
            <h2 class="text-2xl text-white font-bold">Tabs</h2>
          </div>
          <div class="space-y-2">
            <button @click="currentSection = 'Supervisors'" :class="{'bg-white': currentSection === 'Supervisors', 'bg-gray-200': currentSection !== 'Supervisors'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-gray-300">Supervisors</button>
            <button @click="currentSection = 'PhD Scholars'" :class="{'bg-white': currentSection === 'PhD Scholars', 'bg-gray-200': currentSection !== 'PhD Scholars'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-gray-300">PhD Scholars</button>
            <button @click="currentSection = 'PG Projects'" :class="{'bg-white': currentSection === 'PG Projects', 'bg-gray-200': currentSection !== 'PG Projects'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-gray-300">PG Projects</button>
            <button @click="currentSection = 'Stipend Details'" :class="{'bg-white': currentSection === 'Stipend Details', 'bg-gray-200': currentSection !== 'Stipend Details'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-gray-300">Stipend Details</button>
          </div>
        </div>

        <!-- Content -->
        <div class="flex-1 mt-4 md:mt-0 md:ml-4 bg-white rounded-lg shadow-lg p-6">
          <div v-if="currentSection === 'Supervisors'">
            <h2 class="text-2xl md:text-4xl font-bold mb-6">Supervisors</h2>
            <ul class="list-disc pl-4 text-base md:text-xl">
              <li v-for="supervisor in data.supervisors" :key="supervisor">{{ supervisor }}</li>
            </ul>
          </div>
          
          <div v-else-if="currentSection === 'PhD Scholars'">
            <h2 class="text-2xl md:text-4xl font-bold mb-6">PhD Scholars</h2>
            <p class="text-base md:text-xl">Total PhD Scholars: {{ data.phd_scholars.total }}</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="bg-white shadow-md rounded-md p-4">
                <h3 class="text-lg font-semibold mb-2">Faculty-wise</h3>
                <a :href="data.phd_scholars.faculty_wise" target="_blank" class="text-blue-500 hover:text-blue-700">View Faculty-wise PhD Scholars</a>
              </div>
              <div class="bg-white shadow-md rounded-md p-4">
                <h3 class="text-lg font-semibold mb-2">Department-wise</h3>
                <a :href="data.phd_scholars.department_wise" target="_blank" class="text-blue-500 hover:text-blue-700">View Department-wise PhD Scholars</a>
              </div>
            </div>
          </div>
          
          <div v-else-if="currentSection === 'PG Projects'">
            <h2 class="text-2xl md:text-4xl font-bold mb-6">PG Projects</h2>
            <p class="text-base md:text-xl">Total PG Projects: {{ data.pg_projects.total }}</p>
            <table class="table-auto w-full bg-white shadow-md rounded-md mt-4 text-sm md:text-base">
              <thead>
                <tr class="bg-gray-200">
                  <th class="px-4 py-2">Department</th>
                  <th class="px-4 py-2">Number of Projects</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(projects, department) in data.pg_projects.departmentwise" :key="department">
                  <td class="border px-4 py-2">{{ department }}</td>
                  <td class="border px-4 py-2">{{ projects }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div v-else-if="currentSection === 'Stipend Details'">
            <h2 class="text-2xl md:text-4xl font-bold mb-6">Stipend Details</h2>
            <div class="overflow-x-auto">
              <table class="table-auto w-full bg-white shadow-md rounded-md text-sm md:text-base">
                <thead class="bg-gray-800 text-white">
                  <tr>
                    <th class="px-4 py-2">Supervisor Name</th>
                    <th class="px-4 py-2">Scholar Name</th>
                    <th class="px-4 py-2">Mode</th>
                    <th class="px-4 py-2">Batch</th>
                    <th class="px-4 py-2">Funding Agency</th>
                    <th class="px-4 py-2">Funding Scheme</th>
                    <th class="px-4 py-2">Stipend Amount</th>
                    <th class="px-4 py-2">Stipend Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="detail in data.stipend_details" :key="detail.scholar_name">
                    <td class="border px-4 py-2">{{ detail.supervisor_name }}</td>
                    <td class="border px-4 py-2">{{ detail.scholar_name }}</td>
                    <td class="border px-4 py-2">{{ detail.full_time_or_part_time }}</td>
                    <td class="border px-4 py-2">{{ detail.batch }}</td>
                    <td class="border px-4 py-2">{{ detail.funding_agency }}</td>
                    <td class="border px-4 py-2">{{ detail.funding_scheme }}</td>
                    <td class="border px-4 py-2">{{ detail.stipend_amount }}</td>
                    <td class="border px-4 py-2">{{ detail.stipend_duration }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import data from '../assets/research-cell.json';

export default {
  data() {
    return {
      data: data,
      currentSection: 'Supervisors' // Default to first section
    };
  }
};
</script>

<style scoped>
/* Add custom styles if needed to match the ADM Vue component */
</style>
