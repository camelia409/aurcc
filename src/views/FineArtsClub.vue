<template>
  <main class="flex-grow">
    <!-- Hero section -->
    <section class="bg-yellow-300 text-black py-12">
      <div class="container mx-auto text-center">
        <h1 class="text-4xl font-bold">Fine Arts Club</h1>
      </div>
    </section>

    <!-- Main content -->
    <div class="p-6 container mx-auto space-y-8">
      <!-- Description Section -->
      <div class="bg-white shadow-lg rounded-lg ">
        <h1 class="text-3xl font-bold mb-4 bg-blue-900 text-white p-4 text-center rounded-lg">LAYAM AAM RHYTHM OF ARTS MUSIC & DANCE</h1>
        <p class="text-lg font-medium leading-relaxed p-4">{{ description }}</p>
      </div>

      <!-- Office Bearers Section -->
      <div class="bg-white shadow-lg rounded-lg">
        <h2 class="text-3xl font-bold mb-4 bg-blue-900 text-white p-4 text-center rounded-lg">Office Bearers</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 font-medium">
          <div v-for="bearer in officeBearers" :key="bearer['SL.NO']" class="bg-gray-100 rounded-lg p-4 shadow-md">
            <p><strong>Name:</strong> {{ bearer.Name }}</p>
            <p><strong>Designation:</strong> {{ bearer.Designation }}</p>
            <p><strong>Department:</strong> {{ bearer.Department }}</p>
          </div>
        </div>
      </div>

      <!-- Coordinator Section -->
      <div class="bg-white shadow-lg rounded-lg ">
        <h2 class="text-3xl font-bold mb-4 bg-blue-900 text-white p-4 text-center rounded-lg">Coordinator</h2>
        <div class="p-6  rounded-lg shadow-md font-medium">
          <p class="text-lg"><strong>Name:</strong> {{ coordinator.Name }}</p>
          <p class="text-lg"><strong>Designation:</strong> {{ coordinator.Designation }}</p>
          <p class="text-lg"><strong>Department:</strong> {{ coordinator.Department }}</p>
          <p class="text-lg"><strong>University:</strong> {{ coordinator.University }}</p>
          <p class="text-lg"><strong>Address:</strong> {{ coordinator.Address }}</p>
          <p class="text-lg"><strong>Mobile:</strong> {{ coordinator.Mobile }}</p>
          <p class="text-lg">
            <strong>Email:</strong> 
            <a :href="`mailto:${coordinator.Email}`" class="text-blue-500 underline">{{ coordinator.Email }}</a>
          </p>
        </div>
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
