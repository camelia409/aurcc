<template>
    <div class="container mx-auto p-9">
      <h1 class="text-3xl font-bold mb-8 text-center">Directors of Centres</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="director in directors" :key="director.name" class="director-member bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center transform transition-transform hover:scale-105 p-6">
          <div class="flex-grow flex flex-col justify-center text-center w-full">
            <h2 class="text-2xl font-bold text-blue-600">{{ director.name }}</h2>
            <p class="text-lg text-gray-800">{{ director.centre }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import directorsData from '@/assets/COD.json';
  
  export default {
    name: 'Directors',
    data() {
      return {
        directors: directorsData.centres
      };
    }
  };
  </script>
  
  <style scoped>
  .director-member {
    margin: 20px;
    padding: 10px;
    border: 1px solid #ddd;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.3s ease;
  }
  
  .director-member:hover {
    transform: scale(1.05);
  }
  
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  </style>
  