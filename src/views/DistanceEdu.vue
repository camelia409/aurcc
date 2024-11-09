<template>
  <main class="flex-grow">
    <!-- Hero section -->
    <section 
      class="hero-section bg-cover py-24 md:py-32 relative -z-10" 
      :style="{ 
       backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center center' 
      }">
    </section>

    <!-- Details section -->
    <section class="container mx-auto py-6 px-4 sm:py-8 sm:px-6 md:px-9">
      <div class="bg-gradient-to-r from-[#21209c] to-blue-600 rounded-lg shadow-lg overflow-hidden">
        <h2 class="text-2xl sm:text-3xl text-center bg-yellow-300 text-blue-600 p-3 sm:p-4 font-bold rounded-t-lg">
          {{ details.description }}
        </h2>
        <div class="p-4 sm:p-6">
          <div class="space-y-4">
            <!-- Sets -->
            <div class="bg-white rounded-lg shadow-md p-3 sm:p-4">
              <h3 class="text-lg sm:text-xl font-semibold text-gray-900">Sets</h3>
              <p class="text-sm sm:text-base text-gray-700">{{ details.sets }}</p>
            </div>
            <!-- Coordinator -->
            <div class="bg-white rounded-lg shadow-md p-3 sm:p-4">
              <h3 class="text-lg sm:text-xl font-semibold text-gray-900">Coordinator</h3>
              <p class="text-sm sm:text-base text-gray-700">{{ details.coordinator.name }}</p>
              <p class="text-sm sm:text-base text-gray-700">{{ details.coordinator.position }}</p>
              <p class="text-sm sm:text-base text-gray-700">{{ details.coordinator.department }}</p>
              <p class="text-sm sm:text-base text-gray-700">{{ details.coordinator.university }}</p>
              <p class="text-sm sm:text-base text-gray-700">{{ details.coordinator.address }}</p>
            </div>
            <!-- Specializations -->
            <div class="bg-white rounded-lg shadow-md p-3 sm:p-4">
              <h3 class="text-lg sm:text-xl font-semibold text-gray-900">Specializations</h3>
              <ul class="list-disc pl-4 space-y-1">
                <li v-for="specialization in details.specialization" :key="specialization" class="text-sm sm:text-base text-gray-700">
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
import backgroundImage from '@/assets/distanceeducation.webp';

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
  max-width: 100%;
  padding: 0 1rem;
}
@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}
@media (min-width: 1024px) {
  .container {
    max-width: 900px;
  }
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
