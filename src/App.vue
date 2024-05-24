<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header class="bg-blue-900 text-white">
    <div class="container mx-auto px-4 py-4">
      <nav class="flex items-center justify-between" style="font-family: 'Clash Grotesk';">
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
              <button class="px-4 py-2  hover:bg-blue-700 focus:outline-none focus:bg-blue-700 border-b-4 border-blue-900  hover:border-yellow-500">
                Academics
              </button>
              <ul
                class="absolute left-0 mt-2 p-0 w-48 bg-white text-black shadow-lg  opacity-0 invisible group-hover:visible group-hover:opacity-100"
              >
                <li><a href="/academics/Programs-Offered" class="block px-4 py-2 hover:bg-blue-800  hover:text-white transition-all duration-300 ease-in-out">Programs Offered</a></li>
                <li><a href="/academics/Curriculum-&-Syllabus" class="block px-4 py-2 hover:bg-blue-800  hover:text-white transition-all duration-300 ease-in-out ">Curriculum & Syllabus</a></li>
                <li><a href="/academics/Regulation" class="block px-4 py-2 hover:bg-blue-800  hover:text-white transition-all duration-300 ease-in-out ">Regulations</a></li>
                <li><a href="/academics/Student-Affairs" class="block px-4 py-2 hover:bg-blue-800  hover:text-white transition-all duration-300 ease-in-out ">Student Affairs</a></li>
              </ul>
        <div class="flex-none">
          <div class="dropdown dropdown-end bg-gray-800 relative z-30">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-800 rounded-box w-52">
              <li>
                <details>
                  <summary>Departments</summary>
                  <ul class="p-2 bg-base-100 shadow-lg rounded-md text-black">
                    <li><a href="/departments/cse">Computer Science Engg</a></li>
                    <li><a href="/departments/eee">Electrical and Electronics Engg</a></li>
                    <li><a href="/departments/ece">Electronics and Communications Engg</a></li>
                    <li><a href="/departments/mech">Mechanical Engg</a></li>
                    <li><a href="/departments/mba">MBA</a></li>
                    <li><a href="/departments/biotech">Bio-Technology</a></li>
                    <li><a href="/departments/nanotech">Nano-Technology</a></li>
                    <li><a href="/departments/s&h">Science & Humanities</a></li>
                  </ul>
                </details>
              </li>
              <li><a href="#">Hostel</a></li>
              <li class="relative">
                <details class="text-black">
                  <summary class="cursor-pointer">Offices</summary>
                  <ul class="p-2 bg-base-100 shadow-lg text-black">
                    <li><a href="/dgate">DGATE Cell</a></li>
                    <li><a href="/ed-cell">ED Cell</a></li>
                    <li><a href="/placement-cell">Placement Cell</a></li>
                    <li><a href="/research-cell">Research Cell</a></li>
                    <li><a href="/exam-cell">Exam cell</a></li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Life@aurcc</summary>
                  <ul class="p-2 bg-base-100 shadow-lg text-black">
                    <li><a href="/sports">Sports</a></li>
                    <li><a href="/">NSS</a></li>
                    <li><a href="/">Tamil Mandram</a></li>
                    <li><a href="/">Fine Arts Club</a></li>
                    <li><a href="/">Alumni</a></li>
                  </ul>
                </details>
              </li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <ul class="menu menu-horizontal p-0 hidden lg:flex">
            <li>
              <details>
                <summary>Administration</summary>
                <ul class="p-2 bg-base-100 shadow-lg text-black z-30">
                  <li><a href="/administrator">Administrator</a></li>
                  <li><a href="/administration">GA</a></li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Academics</summary>
                <ul class="p-2 bg-base-100 shadow-lg text-black z-30">
                  <li><a href="/academics/Programs-Offered">Programs Offered</a></li>
                  <li><a href="/academics/Curriculum-&-Syllabus">Curriculum & Syllabus</a></li>
                  <li><a href="/academics/Regulation">Regulations</a></li>
                  <li><a href="/academics/Student-Affairs">Student Affairs</a></li>
                </ul>
              </details>
            </li>
            <li class="relative group">
              <button class="px-4 py-2  hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
                Departments
              </button>
              <ul
                class="absolute left-0 mt-2 w-48 bg-blue-900 rounded-md shadow-lg p-2 transition-all duration-300 opacity-0 invisible group-hover:visible group-hover:opacity-100"
              >
                <li><a href="/departments/cse" class="block px-4 py-2 hover:bg-blue-800 rounded-md text-white transition-all duration-300 ease-in-out">Computer Science Engg</a></li>
                <li><a href="/departments/eee" class="block px-4 py-2 hover:bg-blue-800 rounded-md text-white">Electrical and Electronics Engg</a></li>
                <li><a href="/departments/ece" class="block px-4 py-2 hover:bg-blue-800 rounded-md text-white">Electronics and Communications Engg</a></li>
                <li><a href="/departments/mech" class="block px-4 py-2 hover:bg-blue-800 rounded-md text-white">Mechanical Engg</a></li>
                <li><a href="/departments/mba" class="block px-4 py-2 hover:bg-blue-800 rounded-md text-white">MBA</a></li>
                <li><a href="/departments/biotech" class="block px-4 py-2 hover:bg-blue-800 rounded-md text-white">Bio-Technology</a></li>
                <li><a href="/departments/nanotech" class="block px-4 py-2 hover:bg-blue-800 rounded-md text-white">Nano-Technology</a></li>
                <li><a href="/departments/s&h" class="block px-4 py-2 hover:bg-blue-800 rounded-md text-white">Science & Humanities</a></li>
              </ul>
            </li>
            <li class="relative group">
              <button class="px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
                Offices
              </button>
              <ul
                class="absolute left-0 mt-2 w-48 bg-blue-900 rounded-md shadow-lg p-2 transition-all duration-300 opacity-0 invisible group-hover:visible group-hover:opacity-100"
              >
                <li><a href="/admission" class="block px-4 py-2 hover:bg-blue-800 rounded-md text-white">Admission</a></li>
                <li><a href="/dgate" class="block px-4 py-2 hover:bg-blue-800 rounded-md text-white">DGATE Cell</a></li>
                <li><a href="/pace-cell" class="block px-4 py-2 hover:bg-blue-800 rounded-md text-white">PACE Cell</a></li>
                <li><a href="/administration" class="block px-4 py-2 hover:bg-blue-800 rounded-md text-white">Administration</a></li>
                <li><a href="/zonal" class="block px-4 py-2 hover:bg-blue-800 rounded-md text-white">Zonal Office</a></li>
                <li><a href="/office-affiliation" class="block px-4 py-2 hover:bg-blue-800 rounded-md text-white">Office of Affiliation</a></li>
                <li><a href="/distance-education" class="block px-4 py-2 hover:bg-blue-800 rounded-md text-white">Distance Education</a></li>
                <li><a href="/ed-cell" class="block px-4 py-2 hover:bg-blue-800 rounded-md text-white">ED Cell</a></li>
                <li><a href="/placement-cell" class="block px-4 py-2 hover:bg-blue-800 rounded-md text-white">Placement Cell</a></li>
                <li><a href="/research-cell" class="block px-4 py-2 hover:bg-blue-800 rounded-md text-white">Research Cell</a></li>
                <li><a href="/exam-cell" class="block px-4 py-2 hover:bg-blue-800 rounded-md text-white">Exam cell</a></li>
              </ul>
            </li>
            <li class="relative group">
              <button class="px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
                Life@aurcc
              </button>
              <ul
                class="absolute left-0 mt-2 w-48 bg-blue-900 rounded-md shadow-lg p-2 transition-all duration-300 opacity-0 invisible group-hover:visible group-hover:opacity-100"
              >
                <li><a href="/sports" class="block px-4 py-2 hover:bg-blue-800 rounded-md text-white">Sports</a></li>
                <li><a href="/nss" class="block px-4 py-2 hover:bg-blue-800 rounded-md text-white">NSS</a></li>
                <li><a href="/tamilmandram" class="block px-4 py-2 hover:bg-blue-800 rounded-md text-white">Tamil Mandram</a></li>
                <li><a href="/fine-arts" class="block px-4 py-2 hover:bg-blue-800 rounded-md text-white">Fine Arts Club</a></li>
                <li><a href="/alumni" class="block px-4 py-2 hover:bg-blue-800 rounded-md text-white">Alumni</a></li>
              </ul>
            </li>
            <li><a href="/library" class="px-4 py-2 rounded-md hover:bg-blue-700 text-white">Library</a></li>
            <li><a href="/hostel" class="px-4 py-2 rounded-md hover:bg-blue-700 text-white">Hostel</a></li>
            <li><a href="#" class="px-4 py-2 rounded-md hover:bg-blue-700 text-white">Contact</a></li>
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
          <p class="mb-2">Maruthamalai Main Road, somalayam,</p>
          <p class="mb-2">Coimbatore(Dt), Tamil Nadu 641046, India.</p>
          <p class="mb-2">Phone: </p>
          <p class="mb-4">Email: ucedean-kovai@annaunniv.edu</p>
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
        <div class="mb-8 md:mb-0">
          <div class="relative text-center">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.9484517524475!2d76.88349077443925!3d11.04249178912289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85910327ab1e3%3A0x9f7a2b4ef20fe07!2sAnna%20University%20RC%20Coimbatore!5e0!3m2!1sen!2sin!4v1715493035058!5m2!1sen!2sin" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div>
          <h2 class="text-lg font-bold mb-4 text-blue-300">UG Courses</h2>
          <ul class="space-y-2 text-blue-200">
            <li>B.E. Computer Science and Engineering</li>
            <li>B.E. Electrical and Electronics Engineering</li>
            <li>B.E. Electronics and Communications Engineering</li>
            <li>B.E. Mechanical Engineering</li>
            <li>B.Tech Artificial Intelligence and Data Science</li>
            <li>B.Tech Electrical Engg (VLSI ...)</li>
            <!-- Add more UG courses -->
          </ul>
          <h2 class="text-lg font-bold mb-2 mt-4 text-blue-300">PG Courses</h2>
          <ul class="space-y-2 text-blue-200">
            <li>MBA ( General Management )</li>
            <li>MBA [ Business Analytics ]</li>
            <!-- Add more PG courses -->
          </ul>
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