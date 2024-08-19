<template>
  <div class="min-h-screen flex flex-col">
    <!-- Hero section -->
    <section class="bg-cover bg-center relative -z-10" :style="'background-image: url(http://192.168.72.231:5173/src/assets/research-cell-hero.jpg)'">
      <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div class=" mx-auto py-16 text-white p-9 relative z-10">
        <h1 class="text-4xl font-bold mb-4">{{ data.name }}</h1>
        <p class="text-xl mb-8">{{ data.description }}</p>
        <button class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Learn More</button>
      </div>
    </section>

    <!-- Content sections -->
    <main class="flex-grow bg-gray-200">
      <section id="Supervisors" class=" mx-auto py-8 px-4">
        <div class="bg-white font-medium rounded-lg shadow-md">
          <h2 class="text-3xl font-bold text-center text-white bg-blue-800 p-4 rounded-t-md">Supervisors</h2>
          <div class="p-4 text-xl">
            <ul class="list-disc pl-4">
              <li v-for="supervisor in data.supervisors" :key="supervisor">{{ supervisor }}</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="PhD Scholars" class=" mx-auto py-8 px-4">
        <div class="bg-white font-medium rounded-lg shadow-md">
          <h2 class="text-3xl font-bold text-center text-white bg-blue-800 p-4 rounded-t-md">PhD Scholars</h2>
          <div class="p-4 text-xl">
            <p>Total PhD Scholars: {{ data.phd_scholars.total }}</p>
            <div class=" ">
              <div class="bg-white shadow-md rounded-md p-4">
                <h3 class="text-2xl text-center font-semibold mb-2">Faculty-wise</h3>
                <div class="p-4">
                <iframe
                  :src="FacUrl"
                  class="w-full h-screen border-0"
                  title="Faculty wise PDF"
                ></iframe>
              </div>
              </div>
              <div class="bg-white shadow-md rounded-md p-4">
                <h3 class="text-2xl text-center font-semibold mb-2">Department-wise</h3>

          <div class="table-container">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-800">
                <!-- Main Headings -->
                <tr>
                  <th rowspan="2" class="px-6 py-3 text-left text-xl font-medium text-white uppercase tracking-wider">S.No</th>
                  <th rowspan="2" class="px-6 py-3 text-left text-xl font-medium text-white uppercase tracking-wider">Department</th>
                  <th colspan="2" class="px-6 py-3 text-left text-xl font-medium text-white uppercase tracking-wider">PhD Completed</th>
                  <th colspan="2" class="px-6 py-3 text-left text-xl font-medium text-white uppercase tracking-wider">PhD Registered</th>
                  <th rowspan="2" class="px-6 py-3 text-left text-xl font-medium text-white uppercase tracking-wider">Completed FT & PT</th>
                  <th rowspan="2" class="px-6 py-3 text-left text-xl font-medium text-white uppercase tracking-wider">Registered FT & PT</th>
                  <th rowspan="2" class="px-6 py-3 text-left text-xl font-medium text-white uppercase tracking-wider">OVERALL FT & PT</th>
                </tr>
                <!-- Sub-Headings -->
                <tr>
                  <th class="px-6 py-3 text-left text-xl font-medium text-white uppercase tracking-wider">Full Time</th>
                  <th class="px-6 py-3 text-left text-xl font-medium text-white uppercase tracking-wider">Part Time</th>
                  <th class="px-6 py-3 text-left text-xl font-medium text-white uppercase tracking-wider">Full Time</th>
                  <th class="px-6 py-3 text-left text-xl font-medium text-white uppercase tracking-wider">Part Time</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="(row, index) in data.phd_scholars.tableData" :key="index">
                  <td class="px-6 py-4 whitespace-nowrap">{{ row.sno }}</td>
                  <td class="px-6 py-4 whitespace-nowrap">{{ row.department }}</td>
                  <td class="px-6 py-4 whitespace-nowrap">{{ row.phdCompletedFullTime }}</td>
                  <td class="px-6 py-4 whitespace-nowrap">{{ row.phdCompletedPartTime }}</td>
                  <td class="px-6 py-4 whitespace-nowrap">{{ row.phdRegisteredFullTime }}</td>
                  <td class="px-6 py-4 whitespace-nowrap">{{ row.phdRegisteredPartTime }}</td>
                  <td class="px-6 py-4 whitespace-nowrap">{{ row.completedFTPT }}</td>
                  <td class="px-6 py-4 whitespace-nowrap">{{ row.registeredFTPT }}</td>
                  <td class="px-6 py-4 whitespace-nowrap">{{ row.overallFTPT }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
            </div>
          </div>
        </div>
      </section>

      <section id="PG Projects" class=" mx-auto py-8 px-4">
        <div class="bg-white rounded-lg font-medium shadow-md">
          <h2 class="text-3xl font-bold text-center text-white bg-blue-800 p-4 rounded-t-md">PG Projects</h2>
          <div class="p-4 text-xl">
            <p>Total PG Projects: {{ data.pg_projects.total }}</p>
            <table class="table-auto w-full bg-white shadow-md rounded-md mt-4">
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
        </div>
      </section>

      <section id="Stipend Details" class=" mx-auto py-8 px-4">
        <div class="bg-white rounded-lg font-medium shadow-md">
          <h2 class="text-3xl font-bold text-center text-white bg-blue-800 p-4 rounded-t-md">Stipend Details</h2>
          <div class="text-xl p-4">
            <div class="overflow-x-auto">
              <table class="table-auto w-full bg-white shadow-md rounded-md">
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
      </section>
    </main>
  </div>
</template>

<script>
import data from '../assets/research-cell.json';
import FacUrl from '@/assets/faculty-wise.pdf';
export default {
  data() {
    return {
      data: data,
      FacUrl
    };
  }
};
</script>

<style>
/* You can add any additional custom styles here if needed */
</style>
