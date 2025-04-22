<template>
  <main class="flex-grow">
    <!-- Hero section -->
    <section 
      class="bg-cover bg-center relative w-full h-40 sm:h-80 md:h-94 animate-fadeIn" 
      :style="{ 
        backgroundImage: `url(${backgroundImage})`
      }">
      <!-- Dark overlay -->
        <div class="absolute inset-0 bg-black opacity-20"></div>
        
        <!-- Centered text -->
        <div class="flex items-center justify-center h-full relative z-10 px-4">
          <h1 class="md:text-4xl text-xl font-extrabold text-white drop-shadow-lg font-serif text-center animate-slideIn">
            DISTANCE EDUCATION
          </h1>
        </div>
    </section>

    <!-- Details section -->
    <section class="bg-indigo-100 rounded-lg mx-auto py-8 px-4 md:px-60">
      <div class="bg-blue-300 rounded-lg shadow-lg overflow-hidden">
        <h2 class="text-xl md:text-3xl text-center bg-gradient-to-r from-[#21209c] to-blue-600 text-yellow-400 p-4 font-semibold rounded-t-lg">
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
import backgroundImage from '@/assets/offices.webp';

export default {
  data() {
    return {
      backgroundImage: backgroundImage,
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
