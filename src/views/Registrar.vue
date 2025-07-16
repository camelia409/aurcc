<template>
  <div class="bg-indigo-100 mx-auto py-14 px-2 md:px-9">
    <h1 class="text-xl sm:text-2xl md:text-3xl font-serif font-semibold mb-4 md:mb-8 text-center">University Administration</h1>
    <div class="max-w-7xl mx-auto flex flex-col gap-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-serif">
        <div 
          v-for="member in administrator" 
          :key="member.name" 
          class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center border-2 border-black">
          <div class="w-full flex justify-center pt-2 md:pt-4">
            <div class="w-40 sm:w-48 md:w-60 h-40 sm:h-48 md:h-60 overflow-hidden">
              <img 
                :src="getPhotoPath(member.image)" 
                :alt="member.name" 
                class="w-full h-full object-contain" />
            </div>
          </div>
          <div class="flex-grow flex flex-col justify-center p-3 sm:p-4 md:p-2 bg-indigo-800 text-center w-full">
            <h2 class="text-sm sm:text-lg md:text-2xl font-semibold text-white">{{ member.name }}</h2>
            <p class="text-xs sm:text-sm md:text-lg text-white">{{ member.position }}</p>
            <p class="text-xs sm:text-sm md:text-lg text-white">{{ member.university }}</p>
          </div>
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
      return photo ? `/${photo}` : '/default-image-path.jpg';
    }
  }
};
</script>

<style scoped>
/* Custom styles if needed */
</style>
