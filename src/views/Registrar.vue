<template>
  <div class="bg-indigo-100 mx-auto p-9">
    <h1 class="text-2xl md:text-3xl font-bold mb-8 text-center">University Administration</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div 
        v-for="member in administrator" 
        :key="member.name" 
        class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col m-10 items-center border-8 border-yellow-200">
        <div class="w-full flex justify-center pt-6">
          <div class="w-60 h-60 overflow-hidden">
            <img 
              :src="getPhotoPath(member.image)" 
              :alt="member.name" 
              class="w-60 h-60 object-contain" />
          </div>
        </div>
        <div class="flex-grow flex flex-col justify-center p-6 bg-yellow-200 text-center w-full">
          <h2 class="text-xl md:text-2xl font-bold text-black">{{ member.name }}</h2>
          <p class="text-lg text-gray-800">{{ member.position }}</p>
          <p class="text-md text-gray-600">{{ member.university }}</p>
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
