<template>
  <main class="flex-grow">
    <!-- Hero section -->
    <section 
  class="bg-cover bg-center relative w-full h-40 sm:h-80 md:h-94 animate-fadeIn" 
  :style="{ 
    backgroundImage: `url(${backgroundImage})`
  }">
  <!-- Gradient Overlay -->
  <div class="absolute inset-0 bg-black opacity-20"></div>
  
  <!-- Content Container -->
  <div class="flex items-center justify-center h-full relative z-10 px-4">
    <h1 class="md:text-4xl text-xl font-extrabold text-white drop-shadow-lg font-serif text-center animate-slideIn">
      PACE CELL
    </h1>
  </div>
</section>
      
    <!-- Vertical Tabs Section -->
    <section class="mx-auto py-6 md:py-12 md:px-10 bg-indigo-100 rounded-lg">
      <div class="relative flex flex-col md:px-8 px-4 md:flex-row">
        <!-- Vertical Tabs -->
        <div class="px-8 md:px-0">
        <div class="flex-shrink-0 w-full h-max md:w-64 bg-gradient-to-r from-[#21209c] to-blue-600 rounded-lg shadow-lg p-4 mb-4 md:mb-0 md:mr-4">
          <div class="relative p-4 rounded-lg">
            <h2 class="text-2xl font-serif text-center text-white font-semibold">Sections</h2>
          </div>
          <div class="space-y-2 font-serif">
            <button @click="currentSection = 'coordinators'" :class="{'bg-yellow-400 text-[#23120b]': currentSection === 'coordinators', 'bg-gray-100': currentSection !== 'coordinators'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b]">Coordinators</button>
            
            <button @click="currentSection = 'support_staff'" v-if="paceData.support_staff.length" :class="{'bg-yellow-400 text-[#23120b]': currentSection === 'support_staff', 'bg-gray-100': currentSection !== 'support_staff'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b]">Support Staff</button>
            
          </div>
        </div>
        </div>

        <!-- Tab Content -->
        <div class="w-full px-0 md:px-10  font-serif min-h-[400px] max-h-[600px] md:max-h-[800px] overflow-y-auto">
          <div v-if="currentSection === 'coordinators'"  class="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-16 animate-fadeIn">
            <h2 class="text-2xl md:text-3xl font-bold text-black mb-4">Coordinators</h2>
            <div class="space-y-4">
              <div v-for="(coordinator, index) in paceData.coordinators" :key="index" class="bg-white rounded-lg shadow-lg p-6">
                <p class="text-xl font-semibold"><strong>Name:</strong> {{ coordinator.name }}</p>
                <p class="text-xl"><strong>Position:</strong> {{ coordinator.position }}</p>
              </div>
            </div>
          </div>
          <div v-if="currentSection === 'support_staff'"  class="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-16 animate-fadeIn">
            <h2 class="text-2xl md:text-3xl font-bold text-black mb-4">Support Staff</h2>
            <ul class="list-disc pl-5 text-base md:text-xl text-gray-900">
              <li v-for="(staff, index) in paceData.support_staff" :key="index">{{ staff }}</li>
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import paceData from '../assets/pace.json';
import backgroundImage from '@/assets/offices.webp';  // Correct path for the image

export default {
  data() {
    return {
      paceData,
      backgroundImage: backgroundImage,
      currentSection: 'coordinators', // Default active section
      showFull: false, // To toggle full description
    };
  },
  computed: {
    truncatedDescription() {
      if (this.showFull || !this.isDescriptionLong) {
        return this.paceData.description;
      }
      const firstFullStop = this.paceData.description.indexOf('.');
      return this.paceData.description.slice(0, firstFullStop + 1);
    },
    isDescriptionLong() {
      return this.paceData.description.length > 100; // Adjust the length as needed
    },
  },
  methods: {
    showFullDescription() {
      this.showFull = true; // Show the full description when the button is clicked
    },
  },
};
</script>

<style scoped>
/* Font Styles */
.font-serif {
  font-family: 'Georgia', 'Times New Roman', Times, serif;
}

/* Hero section */



/* Learn More Button Styling */


/* Responsive Styles */

</style>
