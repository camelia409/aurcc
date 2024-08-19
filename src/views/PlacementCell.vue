<template>
  <div class="min-h-screen flex flex-col">
    <!-- Hero Section -->
    <section class="hero-section bg-cover bg-center relative -z-10" :style="'background-image: url(http://192.168.72.231:5173/src/assets/dgate-hero.jpg)'">
      <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-blue-900 via-transparent to-blue-900 opacity-70"></div>
      <div class="container mx-auto py-16 text-center relative z-10">
        <h1 class="text-4xl font-extrabold mb-4 drop-shadow-lg font-serif text-black">Placement Cell</h1>
        <p class="text-lg max-w-3xl mx-auto mb-8 leading-relaxed drop-shadow-lg font-sans text-black">{{ data.description }}</p>
      </div>
    </section>

    <!-- Content Sections with Vertical Tabs -->
    <section class="container mx-auto py-12 px-4 bg-gray-100 rounded-lg">
      <div class="flex flex-col lg:flex-row">
        <!-- Vertical Tabs -->
        <div class="flex-shrink-0 w-full lg:w-64 bg-gradient-to-r from-purple-400 to-pink-300 rounded-lg shadow-lg p-4 overflow-hidden mb-4 lg:mb-0">
          <div class="relative bg-gradient-to-r from-purple-500 to-pink-400 p-4 rounded-lg mb-4">
            <svg class="absolute inset-0 w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="100" fill="url(#gradient)" />
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stop-color="rgba(255, 182, 193, 0.5)" />
                  <stop offset="100%" stop-color="rgba(255, 105, 180, 0.5)" />
                </linearGradient>
              </defs>
            </svg>
            <h2 class="text-2xl text-white font-bold">Tabs</h2>
          </div>
          <div class="space-y-2">
            <button @click="currentSection = 'Recruitment Process'" :class="{'bg-white': currentSection === 'Recruitment Process', 'bg-gray-200': currentSection !== 'Recruitment Process'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-gray-300">Recruitment Process</button>
            <button @click="currentSection = 'CUIC'" :class="{'bg-white': currentSection === 'CUIC', 'bg-gray-200': currentSection !== 'CUIC'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-gray-300">CUIC</button>
            <button @click="currentSection = 'Our Recruiters'" :class="{'bg-white': currentSection === 'Our Recruiters', 'bg-gray-200': currentSection !== 'Our Recruiters'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-gray-300">Our Recruiters</button>
            <button @click="currentSection = 'Placed Students'" :class="{'bg-white': currentSection === 'Placed Students', 'bg-gray-200': currentSection !== 'Placed Students'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-gray-300">Placed Students</button>
            <button @click="currentSection = 'Staff Members'" :class="{'bg-white': currentSection === 'Staff Members', 'bg-gray-200': currentSection !== 'Staff Members'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-gray-300">Staff Members</button>
          </div>
        </div>

        <!-- Content -->
        <div class="flex-1 ml-0 lg:ml-4 bg-white rounded-lg shadow-lg p-6">
          <div v-if="currentSection === 'Recruitment Process'">
            <h2 class="text-4xl font-bold mb-6">Recruitment Process</h2>
            <p class="text-xl">{{ data.recruitment }}</p>
          </div>
          
          <div v-else-if="currentSection === 'CUIC'">
            <h2 class="text-4xl font-bold mb-6">CUIC</h2>
            <p class="text-xl">{{ data.cuic }}</p>
          </div>
          
          <div v-else-if="currentSection === 'Our Recruiters'">
            <h2 class="text-4xl font-bold mb-6">Our Recruiters</h2>
            <iframe
              :src="recruitersPDF"
              class="w-full h-[700px] rounded-md shadow-lg"
              frameborder="0"
            ></iframe>
          </div>
          
          <div v-else-if="currentSection === 'Placed Students'">
            <h2 class="text-4xl font-bold mb-6">Placed Students</h2>
            <img
              :src="placedStudentsImage"
              alt="Placed Students"
              class="w-full h-auto rounded-md shadow-lg"
            />
          </div>
          
          <div v-else-if="currentSection === 'Staff Members'">
            <h2 class="text-4xl font-bold mb-6">Staff Members</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div
                v-for="member in data.staff_members"
                :key="member.emailid"
                class="bg-gray-200 shadow-md text-xl rounded-md p-4"
              >
                <h3 class="font-semibold">{{ member.name }}</h3>
                <p><strong>Designation:</strong> {{ member.designation }}</p>
                <p>
                  <strong>Email:</strong>
                  <a :href="'mailto:' + member.emailid">{{ member.emailid }}</a>
                </p>
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

export default {
  data() {
    return {
      data: data,
      currentSection: 'Recruitment Process', // Default to first section
      recruitersPDF,
      placedStudentsImage,
    };
  }
};
</script>

<style scoped>
.hero-section {
  min-height: 50vh;
  position: relative;
  background-blend-mode: multiply;
}
</style>
