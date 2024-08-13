<template>
    <main class="flex-grow">
      <!-- Hero section -->
      <section class="bg-cover bg-center relative -z-10" :style="'background-image: url(http://192.168.72.231:5173/src/assets/dgate-hero.jpg)'">
        <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div class="container mx-auto py-16 text-white p-9 relative z-10">
          <h1 class="text-4xl font-bold mb-4">Administration</h1>
          <p class="text-xl mb-8">Managing various departments and responsibilities efficiently</p>
          <button class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Learn More</button>
        </div>
      </section>
  
      <!-- Content sections -->
      <section class="container mx-auto py-8 p-9">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <section v-if="currentSection !== null" class="container mx-auto py-8 p-9 md:col-span-3">
            <div>
              <h2 class="text-2xl font-bold mb-4">Administration 1</h2>
              <div v-for="(activity, index) in administration.administration_1" :key="index" class="administration-item bg-white p-6 rounded-lg shadow-lg">
                <h3 class="text-xl font-semibold mb-2">{{ activity.Department }}</h3>
                <p><strong>Head:</strong> {{ activity.Head }}</p>
                <p><strong>Email:</strong> {{ activity.Email }}</p>
                <p><strong>Responsibilities:</strong> {{ activity.Responsibilities }}</p>
                <p><strong>Additional Details:</strong> {{ activity.Additional_Details }}</p>
                <p><strong>Other Info:</strong> {{ activity.Other_Info }}</p>
                <p><strong>Contact Email:</strong> {{ activity.Contact_Email }}</p>
                <p><strong>Contact Number:</strong> {{ activity.Contact_Number }}</p>
                <p><strong>Assistants:</strong></p>
                <ul class="list-disc list-inside ml-4">
                  <li v-for="(assistant, i) in activity.Assistants" :key="i">{{ assistant }}</li>
                </ul>
              </div>
            </div>
            <div>
              <h2 class="text-2xl font-bold mb-4">Administration 2</h2>
              <div v-for="(activity, index) in administration.administration_2" :key="index" class="administration-item bg-white p-6 rounded-lg shadow-lg">
                <h3 class="text-xl font-semibold mb-2">{{ activity.Department }}</h3>
                <p><strong>Head:</strong> {{ activity.Head }}</p>
                <p><strong>Email:</strong> {{ activity.Email }}</p>
                <p><strong>Responsibilities:</strong> {{ activity.Responsibilities }}</p>
                <p><strong>Additional Details:</strong> {{ activity.Additional_Details }}</p>
                <p><strong>Other Info:</strong> {{ activity.Other_Info }}</p>
                <p><strong>Contact Email:</strong> {{ activity.Contact_Email }}</p>
                <p><strong>Contact Number:</strong> {{ activity.Contact_Number }}</p>
                <p><strong>Assistants:</strong></p>
                <ul class="list-disc list-inside ml-4">
                  <li v-for="(assistant, i) in activity.Assistants" :key="i">{{ assistant }}</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  </template>
  
  <script>
  import administrationData from '../assets/administration.json';
  
  export default {
    data() {
      return {
        administration: administrationData.administration,
        sections: [
          'Administration 1',
          'Administration 2'
        ],
        currentSection: null
      };
    },
    created() {
      // Default to first section
      if (this.sections.length > 0) {
        this.currentSection = this.sections[0];
      }
    }
  };
  </script>
  
  <style scoped>
  .administration-item {
    margin-bottom: 20px;
  }
  </style>
  