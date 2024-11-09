<template>
  <div 
    class="p-9"
    :style="backgroundStyle"
  >
    <div class="text-center mb-8 py-5">
      <h1 class="text-3xl font-bold text-white text-shadow-lg">Cell Coordinators</h1>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="director in directors" :key="director.name" class="director-member bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center p-6">
        <div class="flex-grow flex flex-col justify-center text-center w-full">
          <h2 class="text-2xl font-bold text-blue-600">{{ director.name }}</h2>
          <p class="text-lg text-gray-800">{{ director.centre }}</p>
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
.text-shadow-lg {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

.director-member {
  @apply m-5 p-3 border border-gray-200 flex flex-col items-center;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}
</style>
