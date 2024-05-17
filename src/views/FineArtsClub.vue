<template>
    <main class="flex-grow">
      <!-- Hero section -->
      <section class="bg-blue-500 text-white py-12">
        <div class="container mx-auto text-center">
          <h1 class="text-4xl font-bold">Fine Arts Club</h1>
        </div>
      </section>
  
      <!-- Main content -->
      <div class="p-6">
        <h1 class="text-2xl font-bold mb-4">LAYAM AAM RHYTHM OF ARTS MUSIC & DANCE</h1>
        <p class="mb-6">
          {{ description }}
        </p>
        <h2 class="text-xl font-semibold mb-2">Office Bearers</h2>
        <table class="table-auto w-full mb-6">
          <thead>
            <tr class="bg-gray-200">
              <th class="px-4 py-2">SL.NO</th>
              <th class="px-4 py-2">Name</th>
              <th class="px-4 py-2">Designation</th>
              <th class="px-4 py-2">Department</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="bearer in officeBearers" :key="bearer['SL.NO']" class="bg-white odd:bg-gray-100">
              <td class="border px-4 py-2">{{ bearer['SL.NO'] }}</td>
              <td class="border px-4 py-2">{{ bearer.Name }}</td>
              <td class="border px-4 py-2">{{ bearer.Designation }}</td>
              <td class="border px-4 py-2">{{ bearer.Department }}</td>
            </tr>
          </tbody>
        </table>
        <h2 class="text-xl font-semibold mb-2">Coordinator</h2>
        <div class="bg-gray-100 p-4 rounded">
          <p><strong>Name:</strong> {{ coordinator.Name }}</p>
          <p><strong>Designation:</strong> {{ coordinator.Designation }}</p>
          <p><strong>Department:</strong> {{ coordinator.Department }}</p>
          <p><strong>University:</strong> {{ coordinator.University }}</p>
          <p><strong>Address:</strong> {{ coordinator.Address }}</p>
          <p><strong>Mobile:</strong> {{ coordinator.Mobile }}</p>
          <p><strong>Email:</strong> <a :href="`mailto:${coordinator.Email}`" class="text-blue-500">{{ coordinator.Email }}</a></p>
        </div>
      </div>
    </main>
  </template>
  
  <script>
  import data from '../assets/fine arts.json';
  
  export default {
    data() {
      return {
        description: data.description,
        officeBearers: data.office_bearers,
        coordinator: data.Coordinator
      };
    }
  };
  </script>
  
  <style scoped>
  /* Additional styles if necessary */
  </style>
  