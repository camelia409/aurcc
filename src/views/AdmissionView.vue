<template>
  <main class="flex-grow">
    <!-- Hero section -->
    <section class="bg-cover bg-center relative -z-10" :style="'background-image: url(http://192.168.72.231:5173/src/assets/dgate-hero.jpg)'">
      <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div class="container mx-auto py-16 text-white p-9 relative z-10">
        <h1 class="text-4xl font-bold mb-4">{{ data.name }}</h1>
        <p class="text-xl mb-8">{{ data.description.Overview }}</p>
      </div>
    </section>

    <!-- Content sections -->
    <section class=" mx-auto py-8 p-4 space-y-8 bg-gray-300">
      <div class="bg-white  rounded-lg">
        <h2 class="text-3xl text-center bg-[#40E0D0] font-bold p-4 rounded-md">Overview</h2>
        <p class="p-5 text-xl font-medium">{{ data.description['Admissions at our Regional Campus'] }}</p>
      </div>
      <div class="bg-white rounded-lg">
        <h2 class="text-3xl text-center bg-[#C0C0C0] font-bold p-4 rounded-md">Courses Offered</h2>
        <p class="p-5 text-xl font-medium">{{ data.courses_offered }}</p>
      </div>
      <div class="bg-white rounded-lg">
        <h2 class="text-3xl text-center bg-yellow-400 font-bold p-4 rounded-md">Eligibility Criteria</h2>
        <ul class="p-8 text-xl font-medium list-disc  ">
          <li v-for="(criteria, category) in data.eligibility_criteria" :key="category">
            <strong>{{ category }}</strong>: {{ criteria }}
          </li>
        </ul>
      </div>
      <div class="bg-white rounded-lg">
        <h2 class="text-3xl text-center bg-[#ad8dc0] font-bold p-4 rounded-md">Contact Us</h2>
        <p class="p-5 text-xl font-medium">{{ data.contact_us['Admission Co-ordinator'] }}</p>
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
