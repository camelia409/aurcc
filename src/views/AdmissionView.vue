<template>
  <main class="flex-grow">
    <!-- Hero section -->
    <section class="bg-cover bg-center relative -z-10" :style="'background-image: url(http://192.168.72.231:5173/src/assets/dgate-hero.jpg)'">
      <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div class="container mx-auto py-16 text-white p-9 relative z-10">
        <h1 class="text-4xl font-bold mb-4">{{ data.name }}</h1>
        <p class="text-xl mb-8">{{ data.description.Overview }}</p>
        <button class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Learn More</button>
      </div>
    </section>

    <!-- Content sections -->
    <section class="container mx-auto py-8 p-9 space-y-8">
      <div class="bg-gray-200 p-6 rounded-lg">
        <h2 class="text-2xl font-bold mb-4">Overview</h2>
        <p>{{ data.description['Admissions at our Regional Campus'] }}</p>
      </div>
      <div class=" p-6 rounded-lg">
        <h2 class="text-2xl font-bold mb-4">Courses Offered</h2>
        <p>{{ data.courses_offered }}</p>
      </div>
      <div class="bg-gray-200 p-6 rounded-lg">
        <h2 class="text-2xl font-bold mb-4">Eligibility Criteria</h2>
        <ul class="list-disc pl-4">
          <li v-for="(criteria, category) in data.eligibility_criteria" :key="category">
            <strong>{{ category }}</strong>: {{ criteria }}
          </li>
        </ul>
      </div>
      <div class=" p-6 rounded-lg">
        <h2 class="text-2xl font-bold mb-4">Contact Us</h2>
        <p>{{ data.contact_us['Admission Co-ordinator'] }}</p>
      </div>
    </section>
  </main>
</template>

<script>
import admissionData from '../assets/admission.json';

export default {
  data() {
    return {
      data: admissionData[0]
    };
  }
};
</script>

<style>
/* You can add any additional custom styles here if needed */
</style>
