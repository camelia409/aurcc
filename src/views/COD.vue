<template>
  <div
    class="p-9 bg-cover bg-center"
    :style="backgroundStyle"
  >
    <div class="text-center py-5">
      <h1 class="text-xl md:text-3xl font-semibold text-white drop-shadow-lg">
        Cell Coordinators
      </h1>
    </div>
    <div class="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="director in directors"
        :key="director.name"
        class="bg-white rounded-lg shadow-lg flex flex-col items-center md:p-6 p-4 hover:shadow-xl transition duration-300"
      >
        <div class="text-center">
          <h2 class="text-sm md:text-xl font-semibold text-blue-600">
            {{ director.name }}
          </h2>
          <p class="text-sm md:text-lg text-gray-800">
            {{ director.centre }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bgImage from '@/assets/bg.webp';
import directorsData from '@/assets/COD.json';

export default {
  name: 'Directors',
  data() {
    return {
      directors: directorsData.centres,
    };
  },
  computed: {
    backgroundStyle() {
      return {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
    },
  },
};
</script>

<style scoped>
/* Scoped styles are not needed as Tailwind CSS handles all styling */
</style>
