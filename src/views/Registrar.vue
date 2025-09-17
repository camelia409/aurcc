<template>
  <div class="bg-indigo-100 mx-auto py-8 sm:py-12 lg:py-14 px-3 sm:px-4 md:px-6 lg:px-9">
    <h1 class="mobile-text-lg sm:mobile-text-xl lg:mobile-text-2xl xl:mobile-text-3xl font-serif font-semibold mb-3 sm:mb-4 md:mb-6 lg:mb-8 text-center">University Administration</h1>
    <div class="max-w-7xl mx-auto flex flex-col gap-8 sm:gap-10 lg:gap-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 font-serif">
        <div 
          v-for="member in administrator" 
          :key="member.name" 
          class="mobile-card bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center border-2 border-black">
          <div class="w-full flex justify-center pt-2 md:pt-4">
            <div class="w-32 sm:w-40 md:w-48 lg:w-60 h-32 sm:h-40 md:h-48 lg:h-60 overflow-hidden">
              <img 
                :src="getPhotoPath(member.image)" 
                :alt="member.name" 
                class="w-full h-full object-contain" />
            </div>
          </div>
          <div class="flex-grow flex flex-col justify-center p-3 sm:p-4 md:p-2 bg-indigo-800 text-center w-full">
            <h2 class="mobile-text-sm sm:mobile-text-base lg:mobile-text-lg xl:mobile-text-2xl font-semibold text-white">{{ member.name }}</h2>
            <p class="mobile-text-xs sm:mobile-text-sm lg:mobile-text-base xl:mobile-text-lg text-white">{{ member.position }}</p>
            <p class="mobile-text-xs sm:mobile-text-sm lg:mobile-text-base xl:mobile-text-lg text-white">{{ member.university }}</p>
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
