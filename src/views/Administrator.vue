<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-8 text-center">Administrator</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div v-for="member in administrator" :key="member.name" class="admin-member text-center p-4 bg-white rounded-lg shadow-md">
        <img :src="'http://localhost:5173/src/assets/' + member.image" :alt="member.name " class="admin-image w-32 h-32 object-cover mx-auto mb-4"/>
        <h2 class="text-xl font-semibold">{{ member.name }}</h2>
        <p class="text-gray-700">{{ member.position }}</p>
        <p class="text-gray-500">{{ member.university }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import administrationData from '../assets/administrator.json';

export default {
  name: 'Administration',
  data() {
    return {
      administrator: administrationData.administrator
    };
  }
};
</script>
