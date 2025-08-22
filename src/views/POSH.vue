<template>
  <main class="bg-gradient-to-br from-indigo-100 via-blue-50 to-white min-h-screen font-sans text-gray-800">
    <!-- Hero Section -->
    <section class="relative w-full min-h-[35vh] sm:min-h-[40vh] md:min-h-[50vh] lg:min-h-[60vh] overflow-hidden flex items-center justify-center animate-fadeIn">
      <img src="/offices.webp" alt="POSH Cell" class="absolute inset-0 w-full h-full object-cover object-center" />
      <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>
      <div class="absolute inset-0 flex flex-col items-center justify-center z-10 px-2">
        <div class="backdrop-blur-md bg-white/30 rounded-2xl shadow-lg px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-3 sm:py-4 md:py-6 lg:py-8 xl:py-10 flex flex-col items-center w-full max-w-2xl border border-white/30">
          <h1 class="mobile-text-xl sm:mobile-text-2xl lg:mobile-text-3xl xl:mobile-text-4xl font-extrabold text-white drop-shadow-lg tracking-wide text-center mb-2 leading-tight">Prevention of Sexual Harassment Cell (POSH)</h1>
          <p class="mobile-text-sm sm:mobile-text-base lg:mobile-text-lg xl:mobile-text-xl text-white drop-shadow text-center font-medium">Resources, guidelines, and contact for POSH Cell</p>
        </div>
      </div>
    </section>

    <!-- Content Section -->
    <section class="max-w-7xl mx-auto py-8 sm:py-12 lg:py-14 px-2 md:px-9 flex flex-col gap-8 sm:gap-10 lg:gap-12">
      <div class="mobile-card bg-white/70 backdrop-blur-md rounded-2xl shadow-lg animate-fadeIn border border-gray-100">
        <div class="bg-gradient-to-r from-blue-900 to-blue-500 py-4 sm:py-5 flex items-center justify-center gap-2 sm:gap-3 rounded-t-2xl">
          <span class="mobile-text-lg lg:mobile-text-xl">👩‍⚖️</span>
          <h2 class="mobile-text-lg sm:mobile-text-xl lg:mobile-text-2xl xl:mobile-text-3xl font-bold text-white text-center">POSH Resources & Guidelines</h2>
        </div>
        <div class="p-4 sm:p-6 md:p-8 lg:p-10">
          <ul class="list-disc pl-3 sm:pl-4 space-y-2">
            <li class="mobile-text-sm lg:mobile-text-base">
              <a class="text-blue-600 underline hover:text-indigo-700 transition" href="https://docs.google.com/forms/d/e/1FAIpQLScKl-8gkctBfoE_E0wYdYM6lhZ_GOUVKErLfBXQQLx7jfkPJQ/viewform" target="_blank">Provision of Online Complaint Form</a>
            </li>
            <li class="mobile-text-sm lg:mobile-text-base">
              <a class="text-blue-600 underline hover:text-indigo-700 transition" href="http://www.aurcc.ac.in/downloads/Guidelines%20for%20prevention.pdf" target="_blank">Guidelines for prevention and redressal of harassment in Higher Educational institutions in TamilNadu</a>
            </li>
            <li class="mobile-text-sm lg:mobile-text-base">
              <a class="text-blue-600 underline hover:text-indigo-700 transition" href="http://www.aurcc.ac.in/downloads/Guidelines%20on%20safety%20of%20students.pdf" target="_blank">Guidelines on safety of students on and off campus in HEIs</a>
            </li>
            <li class="mobile-text-sm lg:mobile-text-base">
              <a class="text-blue-600 underline hover:text-indigo-700 transition" href="http://www.aurcc.ac.in/downloads/UGC%20Regulations%202015.pdf" target="_blank">Handbook on Sexual Harassment of Women employees and students in higher educational institutions Published by UGC, Regulations 2015</a>
            </li>
            <li class="mobile-text-sm lg:mobile-text-base">
              <a class="text-blue-600 underline hover:text-indigo-700 transition" href="http://www.aurcc.ac.in/downloads/Saksham%20Measures.pdf" target="_blank">Saksham: Measures for Ensuring the Safety of Women and Programmes for Gender Sensitisation on Campuses: 2013</a>
            </li>
            <li class="mobile-text-sm lg:mobile-text-base">
              <a class="text-blue-600 underline hover:text-indigo-700 transition" href="http://www.aurcc.ac.in/downloads/Handbook.pdf" target="_blank">Handbook on Sexual Harassment of Women at Workplace published by UGC, Act 2013</a>
            </li>
            <li class="mobile-text-sm lg:mobile-text-base">
              <a class="text-blue-600 underline hover:text-indigo-700 transition" href="http://www.aurcc.ac.in/downloads/ICC%20committee.pdf" target="_blank">Internal Complaint Committee Members</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="mobile-card bg-white/70 backdrop-blur-md rounded-2xl shadow-lg animate-fadeIn border border-gray-100">
        <div class="bg-gradient-to-r from-blue-900 to-blue-500 py-4 sm:py-5 flex items-center justify-center gap-2 sm:gap-3 rounded-t-2xl">
          <span class="mobile-text-lg lg:mobile-text-xl">📞</span>
          <h2 class="mobile-text-lg sm:mobile-text-xl lg:mobile-text-2xl xl:mobile-text-3xl font-bold text-white text-center">Contact Us</h2>
        </div>
        <div class="p-4 sm:p-6 md:p-8 lg:p-10 mobile-text-sm lg:mobile-text-base xl:mobile-text-lg text-gray-800 space-y-2">
          <p><span class="font-semibold">The Coordinator,</span><br>
          POSH CELL,<br>
          Anna University Regional Campus,<br>
          Maruthamalai Main Road,<br>
          Coimbatore(Dt), Pin - 641 046.</p>
          <p><span class="font-semibold">Phone:</span> 0422-2984001</p>
          <p><span class="font-semibold">E-Mail:</span> <a href="mailto:poshcell@aurcc.ac.in" class="text-blue-600 underline hover:text-indigo-700 transition">poshcell@aurcc.ac.in</a></p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'POSH',
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