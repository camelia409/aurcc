<template>
  <main class="flex-grow">
    <!-- Hero section -->
    <section 
    class="bg-cover md:bg-center relative -z-10 w-full h-60 sm:h-80 md:h-94 animate-fadeIn" 
    :style="{ 
      backgroundImage: `url(${backgroundImage})`
    }">
      <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-blue-900 via-transparent to-blue-900 opacity-50"></div>
    </section>

    <!-- Content Sections with Vertical Tabs -->
    <section class="mx-auto py-6 md:py-12 px-4 md:px-10 bg-indigo-100 rounded-lg animate-popIn">
      <div class="relative flex flex-col px-8 md:flex-row">
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
        <div class="w-full px-0 md:px-10  font-serif min-h-[400px] max-h-[600px] md:max-h-[800px] overflow-y-auto">
          <div v-if="currentSection === 'overview'" class="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-16 animate-fadeIn">
            <h2 class="text-2xl md:text-3xl font-bold text-black mb-4">Overview</h2>
            <p class="text-base text-lg md:text-xl rounded-b-lg">{{ data.description.Overview }}</p>
          </div>
          <div v-if="currentSection === 'courses_offered'" class="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-16 animate-fadeIn">
            <h2 class="text-2xl md:text-3xl font-bold text-black mb-4">Courses Offered</h2>
            <p class="text-base text-lg md:text-xl rounded-b-lg">{{ data.courses_offered }}</p>
          </div>
          <div v-if="currentSection === 'eligibility_criteria'" class="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-16 animate-fadeIn">
            <h2 class="text-2xl md:text-3xl font-bold text-black mb-4">Eligibility Criteria</h2>
            <ul class="list-disc pl-5">
              <li v-for="(criteria, program) in data.eligibility_criteria" :key="program" class="text-base md:text-lg">
                <strong>{{ program }}:</strong> {{ criteria }}
              </li>
            </ul>
          </div>
          <div v-if="currentSection === 'contact_us'" class="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-16 animate-fadeIn">
            <h2 class="text-2xl md:text-3xl font-bold text-black mb-4">Contact Us</h2>
            <p class="text-base text-lg md:text-xl rounded-b-lg">{{ data.contact_us['Admission Co-ordinator'] }}</p>
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
