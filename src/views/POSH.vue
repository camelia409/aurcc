<template>
  <main class="bg-gradient-to-br from-indigo-100 via-blue-50 to-white min-h-screen font-sans text-gray-800">
    <!-- Hero Section -->
    <section class="relative w-full min-h-[40vh] md:min-h-[60vh] overflow-hidden flex items-center justify-center animate-fadeIn">
      <img src="/offices.webp" alt="POSH Cell" class="absolute inset-0 w-full h-full object-cover object-center" />
      <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>
      <div class="absolute inset-0 flex flex-col items-center justify-center z-10 px-2">
        <div class="backdrop-blur-md bg-white/30 rounded-2xl shadow-lg px-4 py-4 sm:px-8 sm:py-6 md:px-12 md:py-10 flex flex-col items-center w-full max-w-2xl border border-white/30">
          <h1 class="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg tracking-wide text-center mb-2 leading-tight">Prevention of Sexual Harassment Cell (POSH)</h1>
          <p class="text-base sm:text-lg md:text-2xl text-white drop-shadow text-center font-medium">Resources, guidelines, and contact for POSH Cell</p>
        </div>
      </div>
    </section>

    <!-- Content Section -->
    <section class="max-w-7xl mx-auto py-14 px-2 md:px-9 flex flex-col gap-12">
      <div class="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg animate-fadeIn border border-gray-100">
        <div class="bg-gradient-to-r from-blue-900 to-blue-500 py-5 flex items-center justify-center gap-3 rounded-t-2xl">
          <span class="text-2xl">👩‍⚖️</span>
          <h2 class="text-2xl md:text-3xl font-bold text-white text-center">POSH Resources & Guidelines</h2>
        </div>
        <div class="p-8 md:p-10">
          <ul class="list-disc pl-4 space-y-2">
            <li>
              <a class="text-blue-600 underline hover:text-indigo-700 transition" href="https://docs.google.com/forms/d/e/1FAIpQLScKl-8gkctBfoE_E0wYdYM6lhZ_GOUVKErLfBXQQLx7jfkPJQ/viewform" target="_blank">Provision of Online Complaint Form</a>
            </li>
            <li>
              <a class="text-blue-600 underline hover:text-indigo-700 transition" href="http://www.aurcc.ac.in/downloads/Guidelines%20for%20prevention.pdf" target="_blank">Guidelines for prevention and redressal of harassment in Higher Educational institutions in TamilNadu</a>
            </li>
            <li>
              <a class="text-blue-600 underline hover:text-indigo-700 transition" href="http://www.aurcc.ac.in/downloads/Guidelines%20on%20safety%20of%20students.pdf" target="_blank">Guidelines on safety of students on and off campus in HEIs</a>
            </li>
            <li>
              <a class="text-blue-600 underline hover:text-indigo-700 transition" href="http://www.aurcc.ac.in/downloads/UGC%20Regulations%202015.pdf" target="_blank">Handbook on Sexual Harassment of Women employees and students in higher educational institutions Published by UGC, Regulations 2015</a>
            </li>
            <li>
              <a class="text-blue-600 underline hover:text-indigo-700 transition" href="http://www.aurcc.ac.in/downloads/Saksham%20Measures.pdf" target="_blank">Saksham: Measures for Ensuring the Safety of Women and Programmes for Gender Sensitisation on Campuses: 2013</a>
            </li>
            <li>
              <a class="text-blue-600 underline hover:text-indigo-700 transition" href="http://www.aurcc.ac.in/downloads/Handbook.pdf" target="_blank">Handbook on Sexual Harassment of Women at Workplace published by UGC, Act 2013</a>
            </li>
            <li>
              <a class="text-blue-600 underline hover:text-indigo-700 transition" href="http://www.aurcc.ac.in/downloads/ICC%20committee.pdf" target="_blank">Internal Complaint Committee Members</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg animate-fadeIn border border-gray-100">
        <div class="bg-gradient-to-r from-blue-900 to-blue-500 py-5 flex items-center justify-center gap-3 rounded-t-2xl">
          <span class="text-2xl">📞</span>
          <h2 class="text-2xl md:text-3xl font-bold text-white text-center">Contact Us</h2>
        </div>
        <div class="p-8 md:p-10 text-lg text-gray-800 space-y-2">
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