<template>
    <div class="mx-auto p-9">
      <h1 class="text-xl md:text-3xl font-semibold mb-8 text-center">Dean Office Staff</h1>
  
      <div class="flex justify-center">
        <div class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col  items-center border-4 border-black">
          <div class="w-full flex justify-center pt-6 mx-8">
            <div class="w-60 h-60 overflow-hidden">
              <img
                :src="getPhotoPath(staffMember.image)"
                :alt="staffMember.name"
                class="w-60 h-60 object-contain"
              />
            </div>
          </div>
          <div class="flex-grow flex flex-col justify-center p-6 bg-yellow-300 text-center w-full">
            <h2 class="text-xl md:text-2xl font-semibold text-black">{{ staffMember.name }}</h2>
            <p class="text-lg text-gray-800">{{ staffMember.position || 'Position not available' }}</p>
            <p class="text-md text-gray-800">{{ staffMember.email || 'Email not available' }}</p>
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
  