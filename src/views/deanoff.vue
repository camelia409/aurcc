<template>
    <div class="container mx-auto p-9">
      <h1 class="text-3xl font-bold mb-8 text-center">Dean Office Staff</h1>
  
      <div class="flex justify-center">
        <div class="staff-member bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
          <div class="w-full flex justify-center pt-6">
            <div class="w-60 h-60 overflow-hidden border-4 border-gray-200">
              <img
                :src="getPhotoPath(staffMember.image)"
                :alt="staffMember.name"
                class="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div class="flex-grow flex flex-col justify-center bg-gray-100 text-center w-full">
            <h2 class="text-2xl font-bold text-black">{{ staffMember.name }}</h2>
            <p class="text-lg text-gray-800">{{ staffMember.position || 'Position not available' }}</p>
            <p class="text-md text-gray-600">{{ staffMember.email || 'Email not available' }}</p>
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
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .staff-member {
    margin: 20px;
    padding: 10px;
    border: 1px solid #ddd;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.3s ease;
  }
  
  .staff-member:hover {
    transform: scale(1.05);
  }
  
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .grid {
    max-width: 100%;
    margin: 0 auto;
  }
  
  @media (min-width: 1024px) {
    .grid {
      max-width: 900px;
    }
  }
  </style>
  