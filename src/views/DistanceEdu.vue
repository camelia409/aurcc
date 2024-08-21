<template>
  <main class="flex-grow">
    <!-- Hero section -->
    <section class="bg-cover bg-center relative -z-10" :style="'background-image: url(http://192.168.72.231:5173/src/assets/dgate-hero.jpg)'">
      <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-blue-900 via-transparent to-blue-900 opacity-70"></div>
      <div class="container mx-auto py-10 text-center relative z-10 px-4">
        <h1 class="text-4xl font-extrabold text-black  drop-shadow-lg font-serif">{{ details.name }}</h1>
      </div>
    </section>

    <!-- Details section -->
    <section class="container mx-auto py-8 px-4 md:px-9">
      <div class="bg-gradient-to-r from-purple-100 via-pink-100 to-purple-200 rounded-lg shadow-lg overflow-hidden">
        <h2 class="text-3xl text-center bg-gradient-to-r from-purple-600 to-pink-500 text-white p-4 font-bold rounded-t-lg">
          {{ details.description }}
        </h2>
        <div class="p-6">
          <div class="space-y-4">
            <!-- Sets -->
            <div class="bg-white rounded-lg shadow-md p-4">
              <h3 class="text-xl font-semibold text-gray-900">Sets</h3>
              <p class="text-gray-700">{{ details.sets }}</p>
            </div>
            <!-- Coordinator -->
            <div class="bg-white rounded-lg shadow-md p-4">
              <h3 class="text-xl font-semibold text-gray-900">Coordinator</h3>
              <p class="text-gray-700">{{ details.coordinator.name }}</p>
              <p class="text-gray-700">{{ details.coordinator.position }}</p>
              <p class="text-gray-700">{{ details.coordinator.department }}</p>
              <p class="text-gray-700">{{ details.coordinator.university }}</p>
              <p class="text-gray-700">{{ details.coordinator.address }}</p>
            </div>
            <!-- Specializations -->
            <div class="bg-white rounded-lg shadow-md p-4">
              <h3 class="text-xl font-semibold text-gray-900">Specializations</h3>
              <ul class="list-disc pl-4 space-y-1">
                <li v-for="specialization in details.specialization" :key="specialization" class="text-gray-700">
                  {{ specialization }}
                </li>
              </ul>
            </div>
          </div>
        </div>
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
/* Scoped styles to ensure consistent styling */
.container {
  max-width: 900px;
}
.bg-gradient-to-t {
  background: linear-gradient(to top, var(--tw-gradient-stops));
}
.bg-gradient-to-r {
  background: linear-gradient(to right, var(--tw-gradient-stops));
}
.drop-shadow-lg {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
</style>
