<template>
    <div class="p-6">
      <div class="bg-white shadow-md z-10">
        <div class="px-9">
          <h1 class="text-3xl font-bold mb-6">{{ data.name }}</h1>
  
          <div class="bg-gray-100 p-4 mb-6 rounded">
            <h2 class="text-2xl font-bold mb-2">Description</h2>
            <p>{{ data.description }}</p>
          </div>
  
          <div class="bg-gray-100 p-4 mb-6 rounded">
            <h2 class="text-2xl font-bold mb-2">Facilities</h2>
            <div>
              <h3 class="text-xl font-semibold mt-2">Indoor Games</h3>
              <ul class="list-disc list-inside">
                <li v-for="(game, index) in data.facilities.IndoorGames" :key="index">{{ game }}</li>
              </ul>
              <h3 class="text-xl font-semibold mt-4">Outdoor Games</h3>
              <ul class="list-disc list-inside">
                <li v-for="(game, index) in data.facilities.OutdoorGames" :key="index">{{ game }}</li>
              </ul>
            </div>
          </div>
  
          <div class="bg-gray-100 p-4 rounded">
            <h2 class="text-2xl font-bold mb-2">Contact Us</h2>
            <address v-html="formattedAddress" class="not-italic"></address>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import data from '../assets/sports.json';
  
  export default {
    data() {
      return {
        data: data
      };
    },
    computed: {
      formattedAddress() {
        return this.data.contact_us.Address.replace(/, /g, ',<br>');
      }
    }
  };
  </script>
  
  <style>
  </style>
  