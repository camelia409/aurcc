<template>
  <main class="flex-grow">
    <!-- Hero section -->
    <section class="bg-cover bg-center relative -z-10" :style="'background-image: url(http://192.168.72.231:5173/src/assets/dgate-hero.jpg)'">
      <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div class="container mx-auto py-16 text-white p-9 relative z-10 flex justify-center items-center">
        <h1 class="text-5xl font-bold mb-4 text-center">{{ details.name }}</h1>
      </div>
    </section>

    <!-- Details section -->
    <section class="container mx-auto py-8 px-4 md:px-9">
      <div class="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
        <h2 class="text-3xl text-center font-bold rounded-md">{{ details.description }}</h2>
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gradient-to-r from-blue-500 to-cyan-300">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Category</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Details</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <!-- Set -->
            <tr class="hover:bg-gray-50">
              <td class="px-6 py-4 font-medium text-gray-900">Set</td>
              <td class="px-6 py-4 text-gray-700">{{ details.sets }}</td>
            </tr>
            <!-- Coordinator -->
            <tr class="hover:bg-gray-50">
              <td class="px-6 py-4 font-medium text-gray-900">Coordinator</td>
              <td class="px-6 py-4 text-gray-700">
                <p>{{ details.coordinator.name }}</p>
                <p>{{ details.coordinator.position }}</p>
                <p>{{ details.coordinator.department }}</p>
                <p>{{ details.coordinator.university }}</p>
                <p>{{ details.coordinator.address }}</p>
              </td>
            </tr>
            <!-- Specializations -->
            <tr class="hover:bg-gray-50">
              <td class="px-6 py-4 font-medium text-gray-900">Specializations</td>
              <td class="px-6 py-4 text-gray-700">
                <ul class="list-disc pl-4 space-y-1">
                  <li v-for="specialization in details.specialization" :key="specialization">
                    {{ specialization }}
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </main>
</template>

<script>
import details from '../assets/distance education.json';

export default {
  data() {
    return {
      details: details
    };
  }
};
</script>

<style scoped>
.container {
  max-width: 800px;
}
</style>
