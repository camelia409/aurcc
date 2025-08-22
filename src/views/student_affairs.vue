<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <!-- Hero section -->
    <section
      class="bg-cover bg-center relative h-64 sm:h-72 md:h-80 lg:h-96"
      :style="'background-image: url(' + backgroundImage + ')'"
    >
      <div class="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-indigo-900/40"></div>
      <div class="container mx-auto h-full flex items-center relative z-10 px-3 sm:px-4 md:px-6 lg:px-9">
        <div class="max-w-2xl">
          <h1 class="mobile-text-xl sm:mobile-text-2xl lg:mobile-text-3xl xl:mobile-text-4xl font-bold mb-3 sm:mb-4 text-white">
            <span class="bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
              Student Affairs
            </span>
          </h1>
          <p class="mobile-text-sm sm:mobile-text-base lg:mobile-text-lg xl:mobile-text-xl mb-6 sm:mb-8 text-gray-100 leading-relaxed">
            The Office of Student Affairs is dedicated to students' academic and personal success.
          </p>
        </div>
      </div>
    </section>

    <!-- Navigation Tabs - Modern floating design -->
    <div class="sticky top-0 z-20">
      <div class="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div class="bg-white/95 backdrop-blur-sm shadow-lg rounded-full -mt-4 sm:-mt-6 py-1 px-2 flex justify-center overflow-x-auto no-scrollbar">
          <nav role="tablist" class="tabs flex space-x-1 md:space-x-2">
            <button
              v-for="section in sections"
              :key="section.key"
              @click="scrollToSection(section.key)"
              :class="[
                'font-medium px-3 sm:px-4 md:px-5 py-2 md:py-3 rounded-full mobile-text-xs sm:mobile-text-sm lg:mobile-text-base transition duration-300 whitespace-nowrap',
                currentSection === section.key
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              ]"
            >
              {{ section.name }}
            </button>
          </nav>
        </div>
      </div>
    </div>

    <!-- Content sections -->
    <section class="mx-auto" @scroll="handleScroll">
      <div class="w-full">
        <div
          v-for="section in sections"
          :key="section.key"
          :id="section.key"
          class="px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl mx-auto py-8 sm:py-10 lg:py-12 bg-gradient-to-b from-gray-50 to-white"
        >
          <div v-if="section.key === 'description'" class="grid grid-cols-1">
            <div class="mobile-card bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md">
              <div class="bg-gradient-to-r from-indigo-600 to-blue-500 py-4 sm:py-5 md:py-6">
                <h2 class="mobile-text-lg sm:mobile-text-xl lg:mobile-text-2xl xl:mobile-text-3xl text-white font-bold text-center">Description</h2>
              </div>
              <div class="p-4 sm:p-6 md:p-8">
                <ul class="list-disc ml-4 sm:ml-5 space-y-2 mobile-text-sm lg:mobile-text-base text-gray-700">
                  <li v-for="(item, index) in content.description" :key="index">{{ item }}</li>
                </ul>
              </div>
            </div>
          </div>
          <div v-else-if="section.key === 'reAdmission'" class="grid grid-cols-1">
            <div class="mobile-card bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md">
              <div class="bg-gradient-to-r from-indigo-600 to-blue-500 py-4 sm:py-5 md:py-6">
                <h2 class="mobile-text-lg sm:mobile-text-xl lg:mobile-text-2xl xl:mobile-text-3xl text-white font-bold text-center">Re-Admission</h2>
              </div>
              <div class="p-4 sm:p-6 md:p-8">
                <p class="mobile-text-sm lg:mobile-text-base text-gray-700 leading-relaxed whitespace-pre-line">{{ content['Re-Admission'] }}</p>
              </div>
            </div>
          </div>
          <div v-else-if="section.key === 'scholarships'" class="grid grid-cols-1">
            <div class="mobile-card bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md">
              <div class="bg-gradient-to-r from-indigo-600 to-blue-500 py-4 sm:py-5 md:py-6">
                <h2 class="mobile-text-lg sm:mobile-text-xl lg:mobile-text-2xl xl:mobile-text-3xl text-white font-bold text-center">Scholarships</h2>
              </div>
              <div class="p-4 sm:p-6 md:p-8">
                <p class="mb-3 sm:mb-4 mobile-text-sm lg:mobile-text-base text-gray-700">{{ content.Scholarship.description }}</p>
                <ul class="list-disc ml-4 sm:ml-6 space-y-2 mobile-text-sm lg:mobile-text-base text-gray-700">
                  <li v-for="(scholarship, index) in content.Scholarship['list of scholarships']" :key="index">{{ scholarship }}</li>
                </ul>
              </div>
            </div>
          </div>
          <div v-else-if="section.key === 'fees'" class="grid grid-cols-1">
            <div class="mobile-card bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md">
              <div class="bg-gradient-to-r from-indigo-600 to-blue-500 py-4 sm:py-5 md:py-6">
                <h2 class="mobile-text-lg sm:mobile-text-xl lg:mobile-text-2xl xl:mobile-text-3xl text-white font-bold text-center">Fees Details</h2>
              </div>
              <div class="p-4 sm:p-6 md:p-8">
                <a :href="content['fees details']" target="_blank" class="mobile-text-sm lg:mobile-text-base text-blue-600 underline">{{ content['fees details'] }}</a>
              </div>
            </div>
          </div>
          <div v-else-if="section.key === 'staff'" class="grid grid-cols-1">
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md">
              <div class="bg-gradient-to-r from-indigo-600 to-blue-500 py-6">
                <h2 class="text-2xl md:text-3xl text-white font-bold text-center">Administration Staff</h2>
              </div>
              <div class="p-6 md:p-8">
                <div class="grid md:grid-cols-3 gap-6">
                  <div
                    v-for="staff in content['Office bearers']['Administration staff']"
                    :key="staff['S.No']"
                    class="bg-white rounded-xl p-4 shadow border border-blue-100 flex flex-col items-center text-center"
                  >
                    <img
                      :src="staff.Image"
                      alt="staff image"
                      class="w-24 h-24 rounded-full object-cover mb-3 border-4 border-indigo-100 shadow-md"
                    />
                    <h3 class="font-semibold text-lg">{{ staff['Name of the Staff'] }}</h3>
                    <p class="text-sm text-gray-600">{{ staff['Name of the Post'] }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else-if="section.key === 'contact'" class="grid grid-cols-1">
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md">
              <div class="bg-gradient-to-r from-indigo-600 to-blue-500 py-6">
                <h2 class="text-2xl md:text-3xl text-white font-bold text-center">Contact Us</h2>
              </div>
              <div class="p-6 md:p-8">
                <p class="text-gray-700 whitespace-pre-line">{{ content['contact us'] }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import content from '../assets/student_affairs.json';
const backgroundImage = '/studentaffairs.webp';
const sections = [
  { key: 'description', name: 'Description' },
  { key: 'reAdmission', name: 'Re-Admission' },
  { key: 'scholarships', name: 'Scholarships' },
  { key: 'fees', name: 'Fees Details' },
  { key: 'staff', name: 'Administration Staff' },
  { key: 'contact', name: 'Contact Us' }
];
const currentSection = ref(sections[0].key);

function scrollToSection(key) {
  const el = document.getElementById(key);
  if (el) {
    const tabHeight = document.querySelector('.sticky').offsetHeight;
    const offset = el.offsetTop - tabHeight - 20;
    window.scrollTo({ top: offset, behavior: 'smooth' });
    currentSection.value = key;
  }
}

function handleScroll() {
  // Optionally, update currentSection based on scroll position
}
</script>
<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.animate-underline {
  animation: underlineGrow 1s cubic-bezier(0.4,0,0.2,1) forwards;
}
@keyframes underlineGrow {
  from { width: 0; }
  to { width: 6rem; }
}
</style>
