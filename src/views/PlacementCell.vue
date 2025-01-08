<template>
  <div class="flex-grow">
    <!-- Hero Section -->
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
            PLACEMENT CELL
          </h1>
        </div>
    </section>


    <!-- Content Sections with Vertical Tabs -->
    <section class="mx-auto py-6 md:py-12 md:px-10 bg-indigo-100 rounded-lg animate-popIn">
      <div class="relative flex flex-col md:px-8 px-4 md:flex-row">
        <!-- Vertical Tabs -->
        <div class="px-8 md:px-0">
        <div class="flex-shrink-0 w-full h-max md:w-64 bg-gradient-to-r from-[#21209c] to-blue-600 rounded-lg shadow-lg p-4 mb-4 md:mb-0 md:mr-4">
          <div class="relative p-4 rounded-lg">
            <h2 class="text-2xl font-serif text-center text-white font-semibold">Sections</h2>
          </div>
          <div class="space-y-2 font-serif">
            <button @click="currentSection = 'Description'" :class="{'bg-yellow-400 text-[#23120b]': currentSection === 'Description', 'bg-gray-100': currentSection !== 'Description'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b]">Description</button>
            <button @click="currentSection = 'Recruitment Process'" :class="{'bg-yellow-400 text-[#23120b]': currentSection === 'Recruitment Process', 'bg-gray-100': currentSection !== 'Recruitment Process'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b]">Recruitment Process</button>
            <button @click="currentSection = 'CUIC'" :class="{'bg-yellow-400 text-[#23120b]': currentSection === 'CUIC', 'bg-gray-100': currentSection !== 'CUIC'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b]">CUIC</button>
            <button @click="currentSection = 'Our Recruiters'" :class="{'bg-yellow-400 text-[#23120b]': currentSection === 'Our Recruiters', 'bg-gray-100': currentSection !== 'Our Recruiters'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b]">Our Recruiters</button>
            <button @click="currentSection = 'Placed Students'" :class="{'bg-yellow-400 text-[#23120b]': currentSection === 'Placed Students', 'bg-gray-100': currentSection !== 'Placed Students'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b]">Placed Students</button>
            <button @click="currentSection = 'Staff Members'" :class="{'bg-yellow-400 text-[#23120b]': currentSection === 'Staff Members', 'bg-gray-100': currentSection !== 'Staff Members'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b]">Staff Members</button>
          </div>
        </div>
        </div>

        <!-- Content -->
        <div class="w-full px-0 md:px-10  font-serif min-h-[400px] max-h-[600px] md:max-h-[800px] overflow-y-auto ">
          <div v-if="currentSection === 'Description'" class="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-16 animate-fadeIn">
            <h2 class="text-2xl md:text-3xl font-bold text-black mb-4">Description</h2>
            <p class="text-base md:text-lg mb-8 text-black">{{ data.description }}</p>
          </div>
          <div v-else-if="currentSection === 'Recruitment Process'" class="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-16 animate-fadeIn">
            <h2 class="text-2xl md:text-3xl font-bold text-black mb-4">Recruitment Process</h2>
            <p class="text-base md:text-lg mb-8 text-black">{{ data.recruitment }}</p>
          </div>
          <div v-else-if="currentSection === 'CUIC'" class="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-16 animate-fadeIn">
            <h2 class="text-2xl md:text-3xl font-bold text-black mb-4">CUIC</h2>
            <p class="text-base md:text-lg mb-8 text-black">{{ data.cuic }}</p>
          </div>
          <div v-else-if="currentSection === 'Our Recruiters'" class="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-16 animate-fadeIn">
            <h2 class="text-2xl md:text-3xl font-bold text-black mb-4">Our Recruiters</h2>
            <iframe :src="recruitersPDF" class="w-full h-[700px] rounded-md shadow-lg" frameborder="0"></iframe>
          </div>
          <div v-else-if="currentSection === 'Placed Students'" class="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-16 animate-fadeIn">
            <h2 class="text-2xl md:text-3xl font-bold text-black mb-4">Placed Students</h2>
            <img :src="placedStudentsImage" alt="Placed Students" class="w-full h-auto rounded-md shadow-lg" />
          </div>
          <div v-else-if="currentSection === 'Staff Members'" class="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-16 animate-fadeIn">
            <h2 class="text-2xl md:text-3xl font-bold text-black mb-4">Staff Members</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div v-for="member in data.staff_members" :key="member.emailid" class="bg-gray-200 shadow-md text-xl rounded-md p-4">
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
import backgroundImage from '@/assets/offices.webp';


export default {
  data() {
    return {
      data: data,
      backgroundImage:backgroundImage,
      currentSection: 'Recruitment Process', // Default to first section
      recruitersPDF,
      placedStudentsImage,
    };
  }
};
</script>
