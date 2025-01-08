<template>
  <main class="flex-grow">
    <!-- Hero section -->
<section 
  class="bg-cover bg-center relative w-full h-40 sm:h-80 md:h-94 animate-fadeIn" 
  :style="{ 
    backgroundImage: `url(${backgroundImage})`
  }">
  <!-- Dark overlay -->
    <div class="absolute inset-0 bg-black opacity-20"></div>
    
    <!-- Centered text -->
    <div class="flex items-center justify-center h-full relative z-10 px-4">
      <h1 class="md:text-4xl text-xl font-extrabold text-white drop-shadow-lg font-serif text-center animate-slideIn">
        ADMISSION
      </h1>
    </div>
</section>

    <!-- Content Sections with Vertical Tabs -->
    <section class="mx-auto py-6 md:py-12  md:px-10 bg-indigo-100 rounded-lg animate-popIn">
      <div class="relative flex flex-col md:px-8 px-4 md:flex-row">
        <!-- Vertical Tabs -->
        <div class="px-8 md:px-0">
        <div class="flex-shrink-0 w-full h-max md:w-64 bg-gradient-to-r from-[#21209c] to-blue-600 rounded-lg shadow-lg p-4 mb-4 md:mb-0 ">
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
import backgroundImage from '@/assets/offices.webp';  // Correct path for the image

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
/* Add keyframes for animations */
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes popIn {
  0% { opacity: 0; transform: scale(0.8); }
  100% { opacity: 1; transform: scale(1); }
}

@keyframes slideIn {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(0); }
}

.animate-fadeIn {
  animation: fadeIn 1.5s ease-out forwards;
}

.animate-popIn {
  animation: popIn 1.2s ease-out forwards;
}

.animate-fadeInUp {
  animation: fadeInUp 1.5s ease-out forwards;
}

.animate-slideIn {
  animation: slideIn 1s ease-out forwards;
}


</style>
