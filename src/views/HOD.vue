<template>
    <div class="container mx-auto p-9">
      <h1 class="text-3xl font-bold mb-8 text-center">Head of the Departments</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="hod in hods" :key="hod.name" class="hod-member bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center transform transition-transform hover:scale-105">
          <div class="w-full flex justify-center pt-6">
            <div class="w-60 h-60 overflow-hidden border-4 border-gray-200">
              <img :src="getPhotoPath(hod.photo)" :alt="hod.name" class="w-full h-full object-cover" />
            </div>
          </div>
          <div class="flex-grow flex flex-col justify-center p-6 bg-gray-100 text-center w-full">
            <h2 class="text-2xl font-bold text-blue-600">{{ hod.name }}</h2>
            <p class="text-lg text-gray-800">{{ hod.department }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import hodsData from '@/assets/HOD.json';
  
  export default {
    name: 'HODs',
    data() {
      return {
        hods: hodsData.departments
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
  .hod-member {
    margin: 20px;
    padding: 10px;
    border: 1px solid #ddd;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.3s ease;
  }
  
  .hod-member:hover {
    transform: scale(1.05);
  }
  
  .hod-photo {
    width: 150px;
    height: 150px;
    object-fit: cover;
  }
  
  .hod-details {
    text-align: center;
    margin-top: 10px;
  }
  
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  </style>
  