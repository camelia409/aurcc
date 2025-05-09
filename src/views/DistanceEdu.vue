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
            Distance Education
          </h1>
        </div>
    </section>
    <!-- Vertical Tabs Section -->
    <section class="mx-auto py-6 md:py-12 md:px-10 bg-indigo-100 rounded-lg">
      <div class="relative flex flex-col md:px-8 px-4 md:flex-row font-serif">
        <!-- Vertical Tabs -->
        <div class="px-8 md:px-0">
          <div class="flex-shrink-0 w-full h-max md:w-64 bg-gradient-to-r from-[#21209c] to-blue-600 rounded-lg shadow-lg p-4 mb-4 md:mb-0 md:mr-4">
            <div class="relative p-4 rounded-lg">
              <h2 class="text-2xl font-serif text-center text-white font-semibold">Sections</h2>
            </div>
            <div class="space-y-2 font-serif">
              <button 
                v-for="tab in tabs" 
                :key="tab" 
                @click="currentTab = tab" 
                :class="{
                  'bg-yellow-400 text-[#23120b]': currentTab === tab, 
                  'bg-gray-100': currentTab !== tab
                }"
                class="w-full py-2 px-4 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b]"
              >
                {{ tab }}
              </button>
            </div>
          </div>
        </div>

        <!-- Tab Content -->
        <div class="w-full px-0 md:px-10 min-h-[400px] max-h-[600px] md:max-h-[800px] overflow-y-auto font-serif">
          <!-- Programmes Offered -->
          <div v-if="currentTab === 'Programmes Offered'" class="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-16 animate-fadeIn">
            <h2 class="text-2xl md:text-3xl font-bold text-black mb-4">Programmes Offered</h2>
            <ul class="list-disc pl-5 text-base md:text-xl text-gray-900">
              <li v-for="program in details.programs" :key="program">{{ program }}</li>
            </ul>
          </div>

          <!-- Specializations -->
          <div v-if="currentTab === 'Specializations'" class="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-16 animate-fadeIn">
            <h2 class="text-2xl md:text-3xl font-bold text-black mb-4">Specializations</h2>
            <ul class="list-disc pl-5 text-base md:text-xl text-gray-900">
              <li v-for="spec in details.specialization" :key="spec">{{ spec }}</li>
            </ul>
          </div>

          <!-- Staff -->
          <div v-if="currentTab === 'Staff'" class="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-16 animate-fadeIn">
            <h2 class="text-2xl md:text-3xl font-bold text-black mb-4">Staff</h2>
            <div v-for="member in details.staff" :key="member.name" class="bg-white rounded-lg shadow-lg p-6 mb-4">
              <p class="text-xl font-semibold"><strong>Name:</strong> {{ member.name }}</p>
              <p class="text-xl"><strong>Position:</strong> {{ member.position }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import details from '../assets/distance education.json';
import backgroundImage from '@/assets/offices.webp';  // Correct path for the image


export default {
  data() {
    return {
      details,
      backgroundImage: backgroundImage,
      tabs: ['Programmes Offered', 'Specializations', 'Staff'],
      currentTab: 'Programmes Offered'
    };
  }
};
</script>

<style scoped>
/* Hero section */
.hero-section {
  min-height: 50vh;
  position: relative;
  background-blend-mode: multiply;
}
/* Gradient Background */
.bg-gradient-to-r {
  background: linear-gradient(90deg, var(--tw-gradient-stops));
}
.font-serif {
  font-family: 'Georgia', 'Times New Roman', Times, serif;
}
</style>
