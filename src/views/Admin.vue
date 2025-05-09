<template>
  <div class="bg-indigo-100">
    <div class="text-center md:py-6 py-3 bg-blue-700 bg-opacity-90">
      <h1 class="text-xl md:text-3xl font-semibold font-serif text-white">ADMINISTRATIVE STAFF</h1>
    </div>
   <div class="container mx-auto p-9 font-serif">
    <!-- Iterate over each general administration section -->
    <div v-for="(section, sectionName) in administrator" :key="sectionName" class="mb-12">
      <h2 class="text-xl md:text-3xl font-semibold mb-6 text-center">{{ sectionName }}</h2>
      
      <!-- Iterate over each subsection (e.g., establishment, purchase, student section) -->
      <div v-for="(subsection, subsectionName) in section" :key="subsectionName" class="mb-8">
        <h3 class="text-lg md:text-2xl font-semibold mb-4 text-center">{{ subsectionName.replace('_', ' ') }}</h3>
        
        <!-- Separate Deputy Manager and Staffs -->
        <div v-if="subsection.DEPUTY_MANAGER" class="mb-8">
          <h4 class="text-lg md:text-2xl font-semibold mb-2 text-center">Deputy Manager</h4>
          <div class="flex justify-center ">
            <div
              v-for="member in subsection.DEPUTY_MANAGER"
              :key="member.name"
              class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col m-8 sm:m-6 md:m-20 items-center border-4 border-black"
            >
              <div class="w-full flex justify-center px-5 md:px-8 pt-2 md:pt-4">
                <div class="w-40 sm:w-48 md:w-60 h-40 sm:h-48 md:h-60 overflow-hidden">
                  <img
                    :src="getPhotoPath(member.image)"
                    :alt="member.name"
                    class="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div class="flex-grow flex flex-col justify-center p-3 sm:p-4 md:p-6 bg-indigo-800 text-center w-full">
                <h2 class="text-sm sm:text-lg md:text-2xl font-semibold text-white">{{ member.name }}</h2>
                <p class="text-xs sm:text-sm md:text-lg text-white">{{ member.position || 'Position not available' }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Display Staffs -->
        <div v-if="subsection.STAFFS" class="mb-8">
          <h4 class="text-lg md:text-2xl font-semibold mb-2 text-center">Staff Members</h4>
          <div 
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4"
          >
            <div
              v-for="member in subsection.STAFFS"
              :key="member.name"
              class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col m-12 sm:m-6 md:m-20 items-center border-4 border-black"
            >
              <div class="w-full flex justify-center  pt-2 md:pt-4">
                <div class="w-40 sm:w-48 md:w-60 h-40 sm:h-48 md:h-60 overflow-hidden">
                  <img
                    :src="getPhotoPath(member.image)"
                    :alt="member.name"
                    class="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div class="flex-grow flex flex-col justify-center p-3 sm:p-4 md:p-6 bg-indigo-800 text-center w-full">
                <h2 class="text-sm sm:text-lg md:text-2xl font-semibold text-white">{{ member.name }}</h2>
                <p class="text-xs sm:text-sm md:text-lg text-white">{{ member.position || 'Position not available' }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  </div>
</template>

<script>
import administrationData from '@/assets/administration.json';

export default {
  name: 'Administration',
  data() {
    return {
      administrator: administrationData
    };
  },
  methods: {
    getPhotoPath(photo) {
      return photo ? new URL(`../assets/${photo}`, import.meta.url).href : 'default-image-path.jpg'; // Provide a default image path if the image is not available
    }
  }
};
</script>

<style scoped>
</style>
