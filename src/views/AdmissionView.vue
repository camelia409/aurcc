<template>
  <main class="flex-grow">
    <!-- Hero section -->
    <section 
    class="hero-section bg-cover py-4 relative -z-10" 
    :style="{ 
      backgroundImage: `url(${backgroundImage})`
    }">
      <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-blue-900 via-transparent to-blue-900 opacity-70"></div>
      <div class="container mx-auto py-24 text-center relative z-10 px-4">
        <h1 class="text-4xl font-extrabold text-black drop-shadow-lg font-serif">{{ data.name }}</h1>
      </div>
    </section>

    <!-- Content Sections with Vertical Tabs -->
    <section class="mx-auto py-12 px-10 bg-gray-100 rounded-lg">
      <div class="flex flex-col md:flex-row">
        <!-- Vertical Tabs -->
        <div class="flex-shrink-0 w-full h-max md:w-64 bg-gradient-to-r from-[#21209c] to-blue-600 rounded-lg shadow-lg p-4 mb-4 md:mb-0 md:mr-4">
          <div class="relative p-4 rounded-lg ">
            <h2 class="text-2xl font-serif text-center text-white font-semibold">Sections</h2>
          </div>
          <div class="space-y-2 font-serif">
            <button @click="currentSection = 'overview'" :class="{'bg-yellow-400 text-[#23120b]': currentSection === 'overview', 'bg-gray-100': currentSection !== 'overview'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b]">Overview</button>
            <button @click="currentSection = 'courses_offered'" :class="{'bg-yellow-400 text-[#23120b]': currentSection === 'courses_offered', 'bg-gray-100': currentSection !== 'courses_offered'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b]">Courses Offered</button>
            <button @click="currentSection = 'eligibility_criteria'" :class="{'bg-yellow-400 text-[#23120b]': currentSection === 'eligibility_criteria', 'bg-gray-100': currentSection !== 'eligibility_criteria'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b]">Eligibility Criteria</button>
            <button @click="currentSection = 'contact_us'" :class="{'bg-yellow-400 text-[#23120b]': currentSection === 'contact_us', 'bg-gray-100': currentSection !== 'contact_us'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b]">Contact Us</button>
          </div>
          </div>
        <!-- Tab Content -->
        <div class="w-full px-10 font-serif min-h-[400px] max-h-[400px] overflow-y-auto">
          <div v-if="currentSection === 'overview'">
            <h2 class="text-2xl md:text-4xl font-bold text-blue-800 mb-4">Overview</h2>
            <p class="text-base md:text-lg">{{ data.description.Overview }}</p>
          </div>
          <div v-if="currentSection === 'courses_offered'">
            <h2 class="text-2xl md:text-4xl font-bold text-blue-800 mb-4">Courses Offered</h2>
            <p class="text-base md:text-lg">{{ data.courses_offered }}</p>
          </div>
          <div v-if="currentSection === 'eligibility_criteria'">
            <h2 class="text-2xl md:text-4xl font-bold text-blue-800 mb-4">Eligibility Criteria</h2>
            <ul class="list-disc pl-5">
              <li v-for="(criteria, program) in data.eligibility_criteria" :key="program" class="text-base md:text-lg">
                <strong>{{ program }}:</strong> {{ criteria }}
              </li>
            </ul>
          </div>
          <div v-if="currentSection === 'contact_us'">
            <h2 class="text-2xl md:text-4xl font-bold text-blue-800 mb-4">Contact Us</h2>
            <p class="text-base md:text-lg">{{ data.contact_us['Admission Co-ordinator'] }}</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import data from '../assets/admission.json';
import backgroundImage from '@/assets/admissions.webp';  // Correct path for the image

export default {
  data() {
    return {
      data: data[0],
      backgroundImage: backgroundImage,
      currentSection: 'overview' // Default active tab
    };
  }
};
</script>

<style>
/* Additional custom styles if needed */
body {
  font-family: 'Arial', sans-serif;
}
</style>
