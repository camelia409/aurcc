<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header class="bg-[#21209c] text-white">
    <div class="container-fluid mx-auto px-4 py-4">
      <nav class="flex items-center justify-between" style="font-family: 'Clash Grotesk', sans-serif;" >
        <div class="flex items-center">
          <img src="./assets/logo.svg" alt="Logo" class="h-10 mr-4" />
          <RouterLink to="/" class="text-2xl font-bold">
            ANNA UNIVERSITY REGIONAL CAMPUS
            <span class="hidden lg:inline text-2xl font-bold">COIMBATORE</span>
          </RouterLink>
        </div>
        <div class="hidden lg:flex">
          <ul class="flex space-x-4">
            <li class="relative group">
              <button class="px-4 py-2  hover:bg-blue-700 focus:outline-none focus:bg-blue-700 border-b-4 border-[#21209c] hover:border-[#fdb827]">
                Academics
              </button>
              <ul
                class="absolute left-0 mt-2 w-48 bg-white  shadow-lg  p-0 transition-all duration-300 opacity-0 invisible group-hover:visible group-hover:opacity-100 text-black"
              >
                <li><a href="/academics/Programs-Offered" class="block px-4 py-2 hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out">Programs Offered</a></li>
                <li><a href="/academics/Curriculum-&-Syllabus" class="block px-4 py-2 hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out">Curriculum & Syllabus</a></li>
                <li><a href="/academics/Regulation" class="block px-4 py-2 hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out">Regulations</a></li>
                <li><a href="/academics/Student-Affairs" class="block px-4 py-2 hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out">Student Affairs</a></li>
              </ul>
            </li>
            <li class="relative group">
            <button class=" px-4 py-2 border-b-4 border-[#21209c] hover:border-[#fdb827] hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
                Departments
              </button>
              <ul
                class="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg  opacity-0 invisible group-hover:visible group-hover:opacity-100"
              >
                <li><a href="/departments/cse" class="block px-4 py-2 hover:bg-blue-800  hover:text-white transition-all duration-300 ease-in-out">Computer Science Engg</a></li>
                <li><a href="/departments/eee" class="block px-4 py-2 hover:bg-blue-800  hover:text-white transition-all duration-300 ease-in-out">Electrical and Electronics Engg</a></li>
                <li><a href="/departments/ece" class="block px-4 py-2 hover:bg-blue-800  hover:text-white transition-all duration-300 ease-in-out">Electronics and Communications Engg</a></li>
                <li><a href="/departments/mech" class="block px-4 py-2 hover:bg-blue-800  hover:text-white transition-all duration-300 ease-in-out">Mechanical Engg</a></li>
                <li><a href="/departments/mba" class="block px-4 py-2 hover:bg-blue-800  hover:text-white transition-all duration-300 ease-in-out">MBA</a></li>
                <li><a href="/departments/biotech" class="block px-4 py-2 hover:bg-blue-800  hover:text-white transition-all duration-300 ease-in-out">Bio-Technology</a></li>
                <li><a href="/departments/nanotech" class="block px-4 py-2 hover:bg-blue-800  hover:text-white transition-all duration-300 ease-in-out">Nano-Technology</a></li>
                <li><a href="/departments/s&h" class="block px-4 py-2 hover:bg-blue-800  hover:text-white transition-all duration-300 ease-in-out">Science & Humanities</a></li>
              </ul>
            </li>
            <li class="relative group">
              <button class="px-4 py-2 border-b-4 border-blue-900 hover:border-[#fdb827] hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
                Offices
              </button>
              <ul
                class="absolute left-0 mt-2 w-48 bg-white shadow-lg transition-all duration-300 opacity-0 invisible group-hover:visible group-hover:opacity-100"
              >
                <li><a href="/admission" class="block px-4 py-2 hover:bg-blue-800 transition-all duration-300 ease-in-out text-black hover:text-white">Admission</a></li>
                <li><a href="/dgate" class="block px-4 py-2 hover:bg-blue-800 transition-all duration-300 ease-in-out text-black hover:text-white">DGATE Cell</a></li>
                <li><a href="/pace-cell" class="block px-4 py-2 hover:bg-blue-800 transition-all duration-300 ease-in-out text-black hover:text-white">PACE Cell</a></li>
                <li><a href="/administration" class="block px-4 py-2 hover:bg-blue-800 transition-all duration-300 ease-in-out text-black hover:text-white">Administration</a></li>
                <li><a href="/zonal" class="block px-4 py-2 hover:bg-blue-800 transition-all duration-300 ease-in-out text-black hover:text-white">Zonal Office</a></li>
                <li><a href="/office-affiliation" class="block px-4 py-2 hover:bg-blue-800 transition-all duration-300 ease-in-out text-black hover:text-white">Office of Affiliation</a></li>
                <li><a href="/distance-education" class="block px-4 py-2 hover:bg-blue-800 transition-all duration-300 ease-in-out text-black hover:text-white">Distance Education</a></li>
                <li><a href="/ed-cell" class="block px-4 py-2 hover:bg-blue-800 transition-all duration-300 ease-in-out text-black hover:text-white">ED Cell</a></li>
                <li><a href="/placement-cell" class="block px-4 py-2 hover:bg-blue-800 transition-all duration-300 ease-in-out text-black hover:text-white">Placement Cell</a></li>
                <li><a href="/research-cell" class="block px-4 py-2 hover:bg-blue-800 transition-all duration-300 ease-in-out text-black hover:text-white">Research Cell</a></li>
                <li><a href="/exam-cell" class="block px-4 py-2 hover:bg-blue-800 transition-all duration-300 ease-in-out text-black hover:text-white">Exam cell</a></li>
              </ul>
            </li>
            <li class="relative group">
              <button class="px-4 py-2 border-b-4 border-blue-900 hover:border-yellow-300 hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
                Life@aurcc
              </button>
              <ul
                class="absolute left-0 mt-2 w-48 bg-white shadow-lg transition-all duration-300 opacity-0 invisible group-hover:visible group-hover:opacity-100"
              >
                <li><a href="/sports" class="block px-4 py-2 hover:bg-blue-800 transition-all duration-300 ease-in-out text-black hover:text-white">Sports</a></li>
                <li><a href="/nss" class="block px-4 py-2 hover:bg-blue-800 transition-all duration-300 ease-in-out text-black hover:text-white">NSS</a></li>
                <li><a href="/tamilmandram" class="block px-4 py-2 hover:bg-blue-800 transition-all duration-300 ease-in-out text-black hover:text-white">Tamil Mandram</a></li>
                <li><a href="/fine-arts" class="block px-4 py-2 hover:bg-blue-800 transition-all duration-300 ease-in-out text-black hover:text-white">Fine Arts Club</a></li>
                <li><a href="/alumni" class="block px-4 py-2 hover:bg-blue-800 transition-all duration-300 ease-in-out text-black hover:text-white">Alumni</a></li>
              </ul>
            </li>
            <div class="flex items-center justify-between">
              <li><a href="/library" class="px-4 py-2 border-b-4 border-blue-900 hover:border-yellow-300 hover:bg-blue-700 text-white">Library</a></li>
              <li><a href="/hostel" class="px-4 py-2 border-b-4 border-blue-900 hover:border-yellow-300 hover:bg-blue-700 text-white">Hostel</a></li>
              <li><a href="#" class="px-4 py-2 border-b-4 border-blue-900 hover:border-yellow-300 hover:bg-blue-700 text-white">Contact</a></li>
            </div>
          </ul>
        </div>
        <div class="lg:hidden">
          <button class="btn btn-square btn-ghost text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />

  <footer class="bg-blue-900 text-white py-8">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 class="text-2xl font-bold mb-4">Anna University Regional campus Coimbatore</h2>
          <p class="mb-2">Campus Office:</p>
          <p class="mb-2">Maruthamalai Main Road, somayampalayam,</p>
          <p class="mb-2">Coimbatore(Dt), Tamil Nadu 641046, India.</p>
          <p class="mb-4">Email: ucedean-kovai@gmail.com</p>
          <p class="text-xl font-bold mb-2">Important Links:</p>
          <div class="flex items-center space-x-2">
            <a href="https://www.annauniv.edu/" class="rounded-full bg-blue-500 shadow-md overflow-hidden">
              <img src="./assets/AN-logo.png" alt="an-logo" class="w-10 h-10" width="35" height="35">
            </a>
            <a href="https://www.tn.gov.in/" class="rounded-full bg-blue-500 shadow-md overflow-hidden">
              <img src="./assets/2000px-TamilNadu_Logo.svg.png" alt="tn-logo" class="w-10 h-10" width="35" height="35">
            </a>
            <a href="http://india.gov.in" class="rounded-full bg-blue-500 shadow-md overflow-hidden">
              <img src="./assets/india.png" alt="india-logo" class="w-10 h-10" width="35" height="35">
            </a>
            <a href="#" class="rounded-full bg-blue-500 shadow-md overflow-hidden">
              <img src="./assets/mhrd.png" alt="mhrd-logo" class="w-10 h-10" width="35" height="35">
            </a>
            <a href="https://www.aicte-india.org/" class="rounded-full bg-blue-500 shadow-md overflow-hidden">
              <img src="./assets/aicte.png" alt="aicte-logo" class="w-10 h-10" width="35" height="35">
            </a>
            <a href="https://www.ugc.gov.in/" class="rounded-full bg-blue-500 shadow-md overflow-hidden">
              <img src="./assets/ugc.png" alt="ugc-logo" class="w-10 h-10" width="35" height="35">
            </a>
          </div>
        </div>
        <div>
          <a href="/about" class="text-lg font-bold mt-4 block text-blue-300">Website Development Team</a>
        </div>
      </div>
      <hr class="my-8 border-blue-700">
      <div class="flex flex-wrap justify-between items-center">
        <div class="w-full md:w-auto mb-4 md:mb-0">
          <p>Copyright &copy; Anna University Regional campus Coimbatore {{ currentYear }}. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style>
.notice {
  animation: scroll 10s linear infinite;
}

@keyframes scroll {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
}
</style>