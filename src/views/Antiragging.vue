<template>
  <main class="bg-gradient-to-br from-indigo-100 via-blue-50 to-white min-h-screen font-sans text-gray-800">
    <!-- Hero Section -->
    <section class="relative w-full min-h-[40vh] md:min-h-[60vh] overflow-hidden flex items-center justify-center animate-fadeIn">
      <img src="/offices.webp" alt="Anti Ragging Cell" class="absolute inset-0 w-full h-full object-cover object-center" />
      <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>
      <div class="absolute inset-0 flex flex-col items-center justify-center z-10 px-2">
        <div class="backdrop-blur-md bg-white/30 rounded-2xl shadow-lg px-4 py-4 sm:px-8 sm:py-6 md:px-12 md:py-10 flex flex-col items-center w-full max-w-2xl border border-white/30">
          <h1 class="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg tracking-wide text-center mb-2 leading-tight">Anti Ragging Cell</h1>
          <p class="text-base sm:text-lg md:text-2xl text-white drop-shadow text-center font-medium">Resources, forms, and committee information for anti-ragging</p>
        </div>
      </div>
    </section>

    <!-- Content Section -->
    <section class="max-w-7xl mx-auto py-14 px-2 md:px-9 flex flex-col gap-12">
      <div class="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg animate-fadeIn border border-gray-100">
        <div class="bg-gradient-to-r from-blue-900 to-blue-500 py-5 flex items-center justify-center gap-3 rounded-t-2xl">
          <span class="text-2xl">🛡️</span>
          <h2 class="text-2xl md:text-3xl font-bold text-white text-center">Anti Ragging Resources</h2>
        </div>
        <div class="p-8 md:p-10">
          <ul class="list-disc pl-4 space-y-2">
            <li>
              <a class="text-blue-600 underline hover:text-indigo-700 transition" :href="jsonData['Online Anti Ragging Affidavit Form']" target="_blank">
                Online Anti Ragging Affidavit Form
              </a>
            </li>
            <li>
              <a class="text-blue-600 underline hover:text-indigo-700 transition" :href="jsonData['Step by Step Guide on How to Fill An Online Anti Ragging Affidavit']" target="_blank">
                Step by Step Guide on How to Fill An Online Anti Ragging Affidavit
              </a>
            </li>
            <li>
              <a class="text-blue-600 underline hover:text-indigo-700 transition" :href="jsonData['Anti Ragging Committe Members']" target="_blank">
                Anti Ragging Committee Members
              </a>
            </li>
            <li>
              <a class="text-blue-600 underline hover:text-indigo-700 transition" :href="jsonData['Anti Ragging Squad Committe Members']" target="_blank">
                Anti Ragging Squad Committee Members
              </a>
            </li>
            <li>
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
