<template>
  <div class="flex-grow">
    <!-- Hero Section -->
    <section 
      class="hero-section bg-cover py-20 md:py-32 relative -z-10"
      :style="{ 
        backgroundImage: `url(${backgroundImage})`, 
      }">
    </section>

    <!-- Content Sections with Vertical Tabs -->
    <section class="mx-auto py-6 px-4 md:py-10 md:px-8 lg:px-10 bg-gray-100 rounded-lg">
      <div class="flex flex-col md:flex-row">
        <!-- Vertical Tabs -->
        <div class="flex-shrink-0 w-full md:w-1/3 lg:w-64 bg-gradient-to-r from-[#21209c] to-blue-600 rounded-lg shadow-lg p-4 mb-4 md:mb-0">
          <div class="bg-gradient-to-r from-[#21209c] to-blue-600 p-4 rounded-lg text-center">
            <h2 class="text-lg md:text-2xl font-serif text-white font-bold">Sections</h2>
          </div>
          <div class="space-y-2 font-serif mt-4">
            <button @click="currentSection = 'Description'" :class="{'bg-yellow-400 text-[#23120b]': currentSection === 'Description', 'bg-gray-100': currentSection !== 'Description'}" class="w-full py-2 text-sm md:text-base px-2 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b]">Description</button>
            <button @click="currentSection = 'Recruitment Process'" :class="{'bg-yellow-400 text-[#23120b]': currentSection === 'Recruitment Process', 'bg-gray-100': currentSection !== 'Recruitment Process'}" class="w-full py-2 text-sm md:text-base px-2 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b]">Recruitment Process</button>
            <button @click="currentSection = 'CUIC'" :class="{'bg-yellow-400 text-[#23120b]': currentSection === 'CUIC', 'bg-gray-100': currentSection !== 'CUIC'}" class="w-full py-2 text-sm md:text-base px-2 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b]">CUIC</button>
            <button @click="currentSection = 'Our Recruiters'" :class="{'bg-yellow-400 text-[#23120b]': currentSection === 'Our Recruiters', 'bg-gray-100': currentSection !== 'Our Recruiters'}" class="w-full py-2 text-sm md:text-base px-2 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b]">Our Recruiters</button>
            <button @click="currentSection = 'Placed Students'" :class="{'bg-yellow-400 text-[#23120b]': currentSection === 'Placed Students', 'bg-gray-100': currentSection !== 'Placed Students'}" class="w-full py-2 text-sm md:text-base px-2 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b]">Placed Students</button>
            <button @click="currentSection = 'Staff Members'" :class="{'bg-yellow-400 text-[#23120b]': currentSection === 'Staff Members', 'bg-gray-100': currentSection !== 'Staff Members'}" class="w-full py-2 text-sm md:text-base px-2 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b]">Staff Members</button>
          </div>
        </div>

        <!-- Content -->
        <div class="w-full md:flex-grow px-2 md:px-6 lg:px-10 font-serif">
          <div v-if="currentSection === 'Description'">
            <h2 class="text-lg md:text-2xl font-bold mb-4 mt-5">Description</h2>
            <p class="text-sm md:text-lg mb-8 text-black">{{ data.description }}</p>
          </div>
          <div v-else-if="currentSection === 'Recruitment Process'">
            <h2 class="text-lg md:text-2xl font-bold mb-4 mt-5">Recruitment Process</h2>
            <p class="text-sm md:text-lg mb-8 text-black">{{ data.recruitment }}</p>
          </div>
          <div v-else-if="currentSection === 'CUIC'">
            <h2 class="text-lg md:text-2xl font-bold mb-4 mt-5">CUIC</h2>
            <p class="text-sm md:text-lg mb-8 text-black">{{ data.cuic }}</p>
          </div>
          <div v-else-if="currentSection === 'Our Recruiters'">
            <h2 class="text-lg md:text-2xl font-bold mb-4 mt-5">Our Recruiters</h2>
            <iframe :src="recruitersPDF" class="w-full h-[300px] md:h-[500px] rounded-md shadow-lg" frameborder="0"></iframe>
          </div>
          <div v-else-if="currentSection === 'Placed Students'">
            <h2 class="text-lg md:text-2xl font-bold mb-4 mt-5">Placed Students</h2>
            <img :src="placedStudentsImage" alt="Placed Students" class="w-full h-auto rounded-md shadow-lg" />
          </div>
          <div v-else-if="currentSection === 'Staff Members'">
            <h2 class="text-lg md:text-2xl font-bold mb-4 mt-5">Staff Members</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div v-for="member in data.staff_members" :key="member.emailid" class="bg-gray-200 shadow-md text-sm md:text-base rounded-md p-4">
                <h3 class="font-semibold">{{ member.name }}</h3>
                <p><strong>Designation:</strong> {{ member.designation }}</p>
                <p><strong>Email:</strong> <a :href="'mailto:' + member.emailid">{{ member.emailid }}</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import data from '../assets/placement-cell.json';
import recruitersPDF from '../assets/placementBrochure.pdf';
import placedStudentsImage from '../assets/Placedstudents.webp';
import backgroundImage from '@/assets/placement.webp';

export default {
  data() {
    return {
      data: data,
      backgroundImage: backgroundImage,
      currentSection: 'Recruitment Process', // Default to first section
      recruitersPDF,
      placedStudentsImage,
    };
  }
};
</script>

<style>
.hero-section {
  min-height: 20vh;
  background-blend-mode: multiply;
  background-size: cover;
  background-position: center;
}

@media (min-width: 768px) {
  .hero-section {
    min-height: 50vh;
  }
}

@media (max-width: 767px) {
  .hero-section {
    background-size: cover;
    background-position: center;
  }
  
  .text-lg {
    font-size: 1.125rem;
  }
  
  .px-2 {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  .mb-4 {
    margin-bottom: 1rem;
  }

  .mt-5 {
    margin-top: 1.25rem;
  }

  .space-y-2 > *:not(:last-child) {
    margin-bottom: 0.5rem;
  }

  /* Adjust font sizes and spacings for smaller screens */
  h2 {
    font-size: 1.5rem;
  }
  
  .text-sm {
    font-size: 0.875rem;
  }
}
</style>
