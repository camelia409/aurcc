<template>
  <main class="flex-grow">
    <!-- Hero section -->
    <section
      class="bg-cover bg-center relative -z-10"
      :style="'background-image: url(http://192.168.72.231:5173/src/assets/dgate-hero.jpg)'"
    >
      <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div class="container mx-auto py-16 text-white p-9 relative z-10">
        <h1 class="text-4xl font-bold mb-4">{{ data.name }}</h1>
        <button class="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded">
          Learn More
        </button>
      </div>
    </section>

    <!-- Content sections -->
    <section class="container mx-auto py-8 p-4 space-y-8 bg-gray-100">
      <!-- About Section -->
      <div class="bg-white rounded-lg shadow-md">
        <h2 class="text-3xl text-center bg-navy-blue font-bold p-4 rounded-t-md text-white">
          About
        </h2>
        <p class="p-5 text-xl font-medium">{{ data.description }}</p>
      </div>

      <!-- Activities Section -->
      <div class="bg-white rounded-lg shadow-md">
        <h2 class="text-3xl text-center bg-navy-blue font-bold p-4 rounded-t-md text-white">
          Activities
        </h2>
        <ul class="list-disc pl-8 p-5 text-xl font-medium">
          <li v-for="activity in data.activities" :key="activity" class="mb-2">
            {{ activity }}
          </li>
        </ul>
      </div>

      <!-- NSS Coordinators Section -->
      <div class="bg-white rounded-lg shadow-md">
        <h2 class="text-3xl text-center bg-navy-blue font-bold p-4 rounded-t-md text-white">
          NSS Coordinators
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-5">
          <div
            v-for="coordinator in data.nss_coordinator['Office Bearers']"
            :key="coordinator.Name"
            class="bg-gray-50 shadow-inner rounded-md p-4"
          >
            <h3 class="text-lg font-semibold">{{ coordinator.Name }}</h3>
            <p>{{ coordinator.Designation }}</p>
            <p>{{ coordinator['Phone No'] !== '-' ? coordinator['Phone No'] : 'N/A' }}</p>
            <p>{{ coordinator['Email id'] }}</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import data from '../assets/NSS.json';

export default {
  data() {
    return {
      data: data,
    };
  },
};
</script>

<style scoped>
.bg-navy-blue {
  background-color: #002147; /* Navy blue color for NSS theme */
}
</style>
