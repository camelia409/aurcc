<template>
  <div class="bg-indigo-100 mx-auto p-4 md:p-9">
    <h1 class="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 md:mb-8 text-center">University Administration</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
      <div 
        v-for="member in administrator" 
        :key="member.name" 
        class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col m-8 sm:m-6 md:m-20 items-center border-4 border-black">
        <div class="w-full flex justify-center px-2 md:px-6 pt-2 md:pt-4">
          <div class="w-40 sm:w-48 md:w-60 h-40 sm:h-48 md:h-60 overflow-hidden">
            <img 
              :src="getPhotoPath(member.image)" 
              :alt="member.name" 
              class="w-full h-full object-contain" />
          </div>
        </div>
        <div class="flex-grow flex flex-col justify-center p-2 sm:p-4 md:p-6 bg-yellow-300 text-center w-full">
          <h2 class="text-sm sm:text-lg md:text-2xl font-semibold text-black">{{ member.name }}</h2>
          <p class="text-xs sm:text-sm md:text-lg text-gray-800">{{ member.position }}</p>
          <p class="text-xs sm:text-sm md:text-lg text-gray-800">{{ member.university }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import administrationData from '@/assets/administrator.json';

export default {
  name: 'Administration',
  data() {
    return {
      administrator: administrationData.administrator
    };
  },
  methods: {
    getPhotoPath(photo) {
      return new URL(`../assets/${photo}`, import.meta.url).href;
    }
  }
};
</script>

<style scoped>
/* Custom styles if needed */
</style>
