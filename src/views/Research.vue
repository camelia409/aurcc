<template>
  <div class="flex-grow">
    <!-- Hero Section -->
    <section 
      class="bg-cover bg-center relative w-full h-60 sm:h-80 md:h-94 animate-fadeIn" 
      :style="{ 
        backgroundImage: `url(${backgroundImage})`
      }">
      <!-- Dark overlay -->
        <div class="absolute inset-0 bg-black opacity-20"></div>
        
        <!-- Centered text -->
        <div class="flex items-center justify-center h-full relative z-10 px-4">
          <h1 class="md:text-4xl text-xl font-extrabold text-white drop-shadow-lg font-serif text-center animate-slideIn">
            RESEARCH CELL
          </h1>
        </div>
    </section>

    <!-- Content Sections with Vertical Tabs -->
    <section class="mx-auto py-6 md:py-12 px-4 md:px-10 bg-indigo-100 rounded-lg animate-popIn">
      <div class="relative flex flex-col px-8 md:flex-row">
        <!-- Vertical Tabs -->
        <div class="flex-shrink-0 w-full h-max md:w-64 bg-gradient-to-r from-[#21209c] to-blue-600 rounded-lg shadow-lg p-4 overflow-hidden">
          <div class="relative p-4 rounded-lg ">
            <h2 class="text-2xl font-serif text-center text-white font-bold">Sections</h2>
          </div>
          <div class="space-y-2 font-serif">
            <button @click="currentSection = 'Description'" :class="{'bg-yellow-400 text-[#23120b]': currentSection === 'Description', 'bg-gray-100': currentSection !== 'Description'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b]">Description</button>
            <button @click="currentSection = 'Supervisors'" :class="{'bg-yellow-400 text-[#23120b]': currentSection === 'Supervisors', 'bg-gray-100': currentSection !== 'Supervisors'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b]">Supervisors</button>
            <button @click="currentSection = 'PhD Scholars'" :class="{'bg-yellow-400 text-[#23120b]': currentSection === 'PhD Scholars', 'bg-gray-100': currentSection !== 'PhD Scholars'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b]">PhD Scholars</button>
            <button @click="currentSection = 'PG Projects'" :class="{'bg-yellow-400 text-[#23120b]': currentSection === 'PG Projects', 'bg-gray-100': currentSection !== 'PG Projects'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b]">PG Projects</button>
            <button @click="currentSection = 'Stipend Details'" :class="{'bg-yellow-400 text-[#23120b]': currentSection === 'Stipend Details', 'bg-gray-100': currentSection !== 'Stipend Details'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b]">Stipend Details</button>
          </div>
        </div>

        <!-- Content -->
        <div class="w-full px-0 md:px-10  font-serif min-h-[400px] max-h-[600px] md:max-h-[800px] overflow-y-auto">
          <div v-if="currentSection === 'Description'" class="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-16 animate-fadeIn">
            <h2 class="text-2xl md:text-3xl font-bold text-black mb-4">Description</h2>
            <p class="text-base  text-lg md:text-xl rounded-b-lg mb-8 text-black">{{ data.description }}</p>
          </div>

          <div v-else-if="currentSection === 'Supervisors'" class="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-16 animate-fadeIn">
            <h2 class="text-2xl md:text-3xl font-bold text-black mb-4">Supervisors</h2>
            <ul class="list-disc pl-4 text-base md:text-xl">
              <li v-for="supervisor in data.supervisors" :key="supervisor">{{ supervisor }}</li>
            </ul>
          </div>

          <div v-else-if="currentSection === 'PhD Scholars'" class="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-16 animate-fadeIn">
            <h2 class="text-2xl md:text-3xl font-bold text-black mb-4">PhD Scholars</h2>
            <p class="text-base md:text-xl">Total PhD Scholars: {{ data.phd_scholars.total }}</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="bg-white shadow-md rounded-md p-4">
                <h3 class="text-lg font-semibold mb-4 mt-5">Faculty-wise</h3>
                <a :href="data.phd_scholars.faculty_wise" target="_blank" class="text-blue-500 hover:text-blue-700">View Faculty-wise PhD Scholars</a>
              </div>
              <div class="bg-white shadow-md rounded-md p-4">
                <h3 class="text-lg font-semibold mb-4 mt-5">Department-wise</h3>
                <a :href="data.phd_scholars.department_wise" target="_blank" class="text-blue-500 hover:text-blue-700">View Department-wise PhD Scholars</a>
              </div>
            </div>
          </div>

          <div v-else-if="currentSection === 'PG Projects'" class="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-16 animate-fadeIn"> 
            <h2 class="text-2xl md:text-3xl font-bold text-black mb-4">PG Projects</h2>
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

          <div v-else-if="currentSection === 'Stipend Details'" class="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-16 animate-fadeIn">
            <h2 class="text-2xl md:text-3xl font-bold text-black mb-4">Stipend Details</h2>
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
import backgroundImage from '@/assets/offices.webp';  // Correct path for the image

export default {
  data() {
    return {
      backgroundImage: backgroundImage,
      currentSection: "Description",
      data: data
    };
  }
};
</script>
