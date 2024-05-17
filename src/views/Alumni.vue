<template>
    <div class="p-6">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-3xl font-bold mb-6">Notable Alumni</h1>
        <p class="mb-6">{{ jsonData['notable alumni'] }}</p>
        <div v-for="(department, deptName) in jsonData.ALUMNI" :key="deptName">
          <div class="bg-gray-100 p-4 mb-6 rounded">
            <h2 class="text-2xl font-bold mb-2">{{ deptName }}</h2>
            <div v-for="(alumnus, index) in department" :key="index" class="mb-4">
              <div class="border border-gray-200 p-4 rounded">
                <h3 class="text-lg font-semibold">{{ alumnus.Name }}</h3>
                <p class="text-gray-600">{{ alumnus.Position }}</p>
                <p class="text-gray-600">{{ alumnus.Company }}</p>
                <p class="text-gray-600">{{ alumnus.Email }}</p>
                <p class="text-gray-600">Academic Year: {{ alumnus['Academic Year'] }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import jsonData from '../assets/alumni.json';
  
  export default {
    data() {
      return {
        jsonData: jsonData
      };
    }
  };
  </script>
  
  <style>
  </style>
  