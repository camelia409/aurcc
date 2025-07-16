<template>
  <main class="bg-gradient-to-br from-indigo-100 via-blue-50 to-white min-h-screen font-sans text-gray-800">
    <!-- Hero Section -->
    <section class="relative w-full min-h-[40vh] md:min-h-[60vh] overflow-hidden flex items-center justify-center animate-fadeIn">
      <img src="/offices.webp" alt="Downloads" class="absolute inset-0 w-full h-full object-cover object-center" />
      <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>
      <div class="absolute inset-0 flex flex-col items-center justify-center z-10 px-2">
        <div class="backdrop-blur-md bg-white/30 rounded-2xl shadow-lg px-4 py-4 sm:px-8 sm:py-6 md:px-12 md:py-10 flex flex-col items-center w-full max-w-2xl border border-white/30">
          <h1 class="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg tracking-wide text-center mb-2 leading-tight">Downloads</h1>
          <p class="text-base sm:text-lg md:text-2xl text-white drop-shadow text-center font-medium">All important forms and applications for students and staff</p>
        </div>
      </div>
    </section>

    <!-- Navigation Tabs -->
    <div class="sticky top-0 z-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white/95 backdrop-blur-sm shadow-lg rounded-full -mt-6 py-1 px-2 flex justify-center overflow-x-auto no-scrollbar">
          <nav role="tablist" class="tabs flex space-x-1 md:space-x-2">
            <button
              v-for="(section, index) in sections"
              :key="index"
              @click="scrollToSection(section.key)"
              :class="[
                'font-medium px-4 md:px-5 py-2 md:py-3 rounded-full text-sm md:text-base transition duration-300 whitespace-nowrap',
                currentSection === section.key
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              ]"
            >
              {{ section.label }}
            </button>
          </nav>
        </div>
      </div>
    </div>

    <!-- Content Sections -->
    <section class="max-w-7xl mx-auto py-14 px-2 md:px-9 flex flex-col gap-12">
      <!-- Various Forms Download -->
      <div :id="'various_forms'" ref="various_forms" class="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg animate-fadeIn border border-gray-100">
        <div class="bg-gradient-to-r from-blue-900 to-blue-500 py-5 flex items-center justify-center gap-3 rounded-t-2xl">
          <span class="text-2xl">📄</span>
          <h2 class="text-2xl md:text-3xl font-bold text-white text-center">Various Forms Download</h2>
        </div>
        <div class="p-8 md:p-10">
          <ul class="list-disc pl-4 space-y-2">
            <li>
              <a href="http://www.aurcc.ac.in/downloads/Mail/Email%20Id%20Creation%20form.pdf" target="_blank" class="text-blue-600 underline hover:text-indigo-700 transition">Email Id Creation Form</a>
            </li>
            <li>
              <a href="http://www.aurcc.ac.in/downloads/Mail/Email%20Id%20Creation%20form.pdf" target="_blank" class="text-blue-600 underline hover:text-indigo-700 transition">New Email Id Registration Form</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Wifi Registration Forms -->
      <div :id="'wifi_forms'" ref="wifi_forms" class="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg animate-fadeIn border border-gray-100">
        <div class="bg-gradient-to-r from-blue-900 to-blue-500 py-5 flex items-center justify-center gap-3 rounded-t-2xl">
          <span class="text-2xl">📶</span>
          <h2 class="text-2xl md:text-3xl font-bold text-white text-center">Wifi Registration Forms</h2>
        </div>
        <div class="p-8 md:p-10">
          <ul class="list-disc pl-4 space-y-2">
            <li>
              <a href="http://www.aurcc.ac.in/downloads/wifi/StaffWifiRegistrationform.pdf" target="_blank" class="text-blue-600 underline hover:text-indigo-700 transition">Staff Wifi Registration form</a>
            </li>
            <li>
              <a href="http://www.aurcc.ac.in/downloads/wifi/StudentWIFIRegistrationform.pdf" target="_blank" class="text-blue-600 underline hover:text-indigo-700 transition">Student Wifi Registration form</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Scholarship Forms -->
      <div :id="'scholarship_forms'" ref="scholarship_forms" class="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg animate-fadeIn border border-gray-100">
        <div class="bg-gradient-to-r from-blue-900 to-blue-500 py-5 flex items-center justify-center gap-3 rounded-t-2xl">
          <span class="text-2xl">🎓</span>
          <h2 class="text-2xl md:text-3xl font-bold text-white text-center">Scholarship Forms</h2>
        </div>
        <div class="p-8 md:p-10">
          <ul class="list-disc pl-4 space-y-2">
            <li>
              <a href="http://www.aurcc.ac.in/downloads/Scholarships%20Forms/BC-MBC%20FRESH%202023-24.pdf" target="_blank" class="text-blue-600 underline hover:text-indigo-700 transition">BC - MBC Fresh Scholarship form - 2024-2025</a>
            </li>
            <li>
              <a href="http://www.aurcc.ac.in/downloads/Scholarships%20Forms/BC-MBC%20RENEWAL%202023-24.pdf" target="_blank" class="text-blue-600 underline hover:text-indigo-700 transition">BC - MBC Renewal Scholarship form - 2024-2025</a>
            </li>
            <li>
              <a href="http://www.aurcc.ac.in/downloads/Scholarships%20Forms/SC&ST%20Application.pdf" target="_blank" class="text-blue-600 underline hover:text-indigo-700 transition">SC - ST Fresh Scholarship form - 2024 - 2025</a>
            </li>
            <li>
              <a href="http://www.aurcc.ac.in/downloads/Scholarships%20Forms/RENEWAL%20SC&ST.pdf" target="_blank" class="text-blue-600 underline hover:text-indigo-700 transition">SC - ST Renewal Scholarship form - 2024-2025</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Application Forms -->
      <div :id="'application_forms'" ref="application_forms" class="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg animate-fadeIn border border-gray-100">
        <div class="bg-gradient-to-r from-blue-900 to-blue-500 py-5 flex items-center justify-center gap-3 rounded-t-2xl">
          <span class="text-2xl">📝</span>
          <h2 class="text-2xl md:text-3xl font-bold text-white text-center">Application Forms</h2>
        </div>
        <div class="p-8 md:p-10">
          <ul class="list-disc pl-4 space-y-2">
            <li>
              <a href="http://www.aurcc.ac.in/downloads/Application%20Forms/bonafide%20format.pdf" target="_blank" class="text-blue-600 underline hover:text-indigo-700 transition">Bonafide Form</a>
            </li>
            <li>
              <a href="http://www.aurcc.ac.in/downloads/Application%20Forms/DISCONT%20FORMAT.pdf" target="_blank" class="text-blue-600 underline hover:text-indigo-700 transition">Discontinue Form</a>
            </li>
            <li>
              <a href="http://www.aurcc.ac.in/downloads/Application%20Forms/On%20duty.pdf" target="_blank" class="text-blue-600 underline hover:text-indigo-700 transition">Students On duty Application Form</a>
            </li>
            <li>
              <a href="http://www.aurcc.ac.in/downloads/Application%20Forms/INTERNSHIP.pdf" target="_blank" class="text-blue-600 underline hover:text-indigo-700 transition">Student Internship Application Form</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      sections: [
        { key: 'various_forms', label: 'Various Forms' },
        { key: 'wifi_forms', label: 'Wifi Registration' },
        { key: 'scholarship_forms', label: 'Scholarship Forms' },
        { key: 'application_forms', label: 'Application Forms' }
      ],
      currentSection: 'various_forms',
    };
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    scrollToSection(id) {
      const section = this.$refs[id];
      if (section?.scrollIntoView) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    },
    onScroll() {
      for (const section of this.sections) {
        const el = this.$refs[section.key];
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom > 200) {
            this.currentSection = section.key;
            break;
          }
        }
      }
    },
  },
};
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style> 