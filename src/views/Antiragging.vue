<template>
  <main class="bg-gradient-to-br from-indigo-100 via-blue-50 to-white min-h-screen font-sans text-gray-800">
    <!-- Hero Section -->
    <section class="relative w-full min-h-[35vh] sm:min-h-[40vh] md:min-h-[50vh] lg:min-h-[60vh] overflow-hidden flex items-center justify-center animate-fadeIn">
      <img src="/offices.webp" alt="Anti Ragging Cell" class="absolute inset-0 w-full h-full object-cover object-center" />
      <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>
      <div class="absolute inset-0 flex flex-col items-center justify-center z-10 px-2">
        <div class="backdrop-blur-md bg-white/30 rounded-2xl shadow-lg px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-3 sm:py-4 md:py-6 lg:py-8 xl:py-10 flex flex-col items-center w-full max-w-2xl border border-white/30">
          <h1 class="mobile-text-xl sm:mobile-text-2xl lg:mobile-text-3xl xl:mobile-text-4xl font-extrabold text-white drop-shadow-lg tracking-wide text-center mb-2 leading-tight">Anti Ragging Cell</h1>
          <p class="mobile-text-sm sm:mobile-text-base lg:mobile-text-lg xl:mobile-text-xl text-white drop-shadow text-center font-medium">Resources, forms, and committee information for anti-ragging</p>
        </div>
      </div>
    </section>

    <!-- Content Section -->
    <section class="max-w-7xl mx-auto py-8 sm:py-12 lg:py-14 px-2 md:px-9 flex flex-col gap-8 sm:gap-10 lg:gap-12">
      <div class="mobile-card bg-white/70 backdrop-blur-md rounded-2xl shadow-lg animate-fadeIn border border-gray-100">
        <div class="bg-gradient-to-r from-blue-900 to-blue-500 py-4 sm:py-5 flex items-center justify-center gap-2 sm:gap-3 rounded-t-2xl">
          <span class="mobile-text-lg lg:mobile-text-xl">🛡️</span>
          <h2 class="mobile-text-lg sm:mobile-text-xl lg:mobile-text-2xl xl:mobile-text-3xl font-bold text-white text-center">Anti Ragging Resources</h2>
        </div>
        <div class="p-4 sm:p-6 md:p-8 lg:p-10">
          <ul class="list-disc pl-3 sm:pl-4 space-y-2">
            <li class="mobile-text-sm lg:mobile-text-base">
              <a class="text-blue-600 underline hover:text-indigo-700 transition" :href="jsonData['Online Anti Ragging Affidavit Form']" target="_blank">
                Online Anti Ragging Affidavit Form
              </a>
            </li>
            <li class="mobile-text-sm lg:mobile-text-base">
              <a class="text-blue-600 underline hover:text-indigo-700 transition" :href="jsonData['Step by Step Guide on How to Fill An Online Anti Ragging Affidavit']" target="_blank">
                Step by Step Guide on How to Fill An Online Anti Ragging Affidavit
              </a>
            </li>
            <li class="mobile-text-sm lg:mobile-text-base">
              <a class="text-blue-600 underline hover:text-indigo-700 transition" :href="jsonData['Anti Ragging Committe Members']" target="_blank">
                Anti Ragging Committee Members
              </a>
            </li>
            <li class="mobile-text-sm lg:mobile-text-base">
              <a class="text-blue-600 underline hover:text-indigo-700 transition" :href="jsonData['Anti Ragging Squad Committe Members']" target="_blank">
                Anti Ragging Squad Committee Members
              </a>
            </li>
            <li class="mobile-text-sm lg:mobile-text-base">
              <a class="text-blue-600 underline hover:text-indigo-700 transition" :href="jsonData['Online Complaint Form']" target="_blank">
                Online Complaint Form
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import jsonData from '../assets/antiragging.json';

export default {
  data() {
    return {
      jsonData: jsonData
    };
  }
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
