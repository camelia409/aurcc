<template>
    <div class="mx-auto p-9">
      <h1 class="text-xl md:text-3xl font-semibold mb-8 text-center font-serif">Dean Office Staff</h1>
  
      <div class="flex justify-center font-serif">
        <div class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col m-8 sm:m-6 md:m-0 items-center border-4 border-black">
          <div class="w-full flex justify-center px-2 md:px-6 pt-2 md:pt-4">
            <div class="w-40 sm:w-48 md:w-60 h-40 sm:h-48 md:h-60 overflow-hidden">
              <img
                :src="getPhotoPath(staffMember.image)"
                :alt="staffMember.name"
                class="w-full h-full object-contain"
              />
            </div>
          </div>
          <div class="flex-grow flex flex-col justify-center p-2 sm:p-4 md:p-6 bg-yellow-300 text-center w-full">
            <h2 class="text-sm sm:text-lg md:text-2xl font-semibold text-black">{{ staffMember.name }}</h2>
            <p class="text-xs sm:text-sm md:text-lg text-gray-800">{{ staffMember.position || 'Position not available' }}</p>
            <p class="text-xs sm:text-sm md:text-lg text-gray-800">{{ staffMember.email || 'Email not available' }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import deanOfficeData from '@/assets/deanoff.json';
  
  export default {
    name: 'DeanOfficeSingle',
    data() {
      return {
        staffMember: deanOfficeData['DEAN OFFICE STAFF'][0] // Access the first staff member in the "DEAN OFFICE STAFF" category
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
  