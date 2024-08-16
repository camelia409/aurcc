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
    <main class="flex-grow">
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

export default {
  data() {
    return {
      data: data
    };
  }
};
</script>

<style>
/* You can add any additional custom styles here if needed */
</style>
