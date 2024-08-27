<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div>
  <header class="bg-[#21209c] text-white">
    <div class=" bg-[#aae0ed] text-black">
      <div  class="container mx-auto px-4 text-sm" style="font-family: 'Clash Grotesk', sans-serif;">
        <div class="p-2 flex items-center justify-between font-family: 'Algerian'">
          <strong class="text-xl">Counselling Code: <strong>2025</strong> </strong>
          <ul class="flex items-center justify-between">
            <li class="relative group">
              <button class="px-4 py-2">
                Life@aurcc
              </button>
              <ul
                class="absolute z-20 left-0 mt-2 w-48 bg-white shadow-lg transition-all duration-300 opacity-0 invisible group-hover:visible group-hover:opacity-100"
              >
                <li><RouterLink to="/sports" class="block px-4 py-2  hover:bg-blue-800 transition-all duration-300 ease-in-out text-black hover:text-white">Sports</RouterLink></li>
                <li><RouterLink to="/nss" class="block px-4 py-2  hover:bg-blue-800 transition-all duration-300 ease-in-out text-black hover:text-white">NSS</RouterLink></li>
                <li><RouterLink to="/tamilmandram" class="block px-4 py-2  hover:bg-blue-800 transition-all duration-300 ease-in-out text-black hover:text-white">kani thamizh paravai</RouterLink></li>
                <li><RouterLink to="/fine-arts" class="block px-4 py-2  hover:bg-blue-800 transition-all duration-300 ease-in-out text-black hover:text-white">Fine Arts Club</RouterLink></li>
                <li><RouterLink to="/alumni" class="block px-4 py-2  hover:bg-blue-800 transition-all duration-300 ease-in-out text-black hover:text-white">Alumni</RouterLink></li>
              </ul>
            </li>
            <li><RouterLink to="/library" class="px-4 py-2  text-black">Library</RouterLink></li>
            <li><RouterLink to="/hostel" class="px-4 py-2  text-black">Hostel</RouterLink></li>
            <li><RouterLink to="/contact" class="px-4 py-2  text-black">Contact</RouterLink></li>
          </ul>
        </div>

      </div>

    </div>
    
    <div class="sticky top-0 container mx-auto px-4 py-4">
      <nav class="flex items-center justify-between" style="font-family: 'Clash Grotesk', sans-serif;" >
        <div class="flex items-center">
          <img src="./assets/logo.svg" alt="Logo" class="h-20 mr-4" />
          <RouterLink to="/" class="" activeClass="border-yellow-600">
            <p class="text-5xl font-bold font-serif">ANNA UNIVERSITY</p>
            <span class="hidden lg:inline text-2xl font-bold font-serif"> REGIONAL CAMPUS COIMBATORE</span>
          </RouterLink>
        </div>
        <div class="hidden lg:flex font-serif">
          <ul class="flex space-x-2">
            <li class="relative group">
              <button class="px-4 py-2  hover:bg-blue-700 focus:outline-none focus:bg-blue-700 border-b-4 border-[#21209c] hover:border-[#fdb827]">
                Administration
              </button>
              <ul
                class="absolute z-20 left-0 mt-2 w-48 bg-white  shadow-lg  p-0 transition-all duration-300 opacity-0 invisible group-hover:visible group-hover:opacity-100 text-black"
              >
                <li><RouterLink to="/organogram" class="block px-4 py-2 hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out">Organogram</RouterLink ></li>
                <li><RouterLink to="/VC" class="block px-4 py-2 hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out">Vice Chancellor</RouterLink ></li>
                <li><RouterLink to="/Registrar" class="block px-4 py-2 hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out">University Administration</RouterLink ></li>
                <li><RouterLink to="administration" class="block px-4 py-2 hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out">Administrative staff</RouterLink ></li>
                <li><RouterLink to="/HOD" class="block px-4 py-2 hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out">Head of the Departments</RouterLink ></li>
                <li><RouterLink to="/COD" class="block px-4 py-2 hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out">Cell coordinators</RouterLink ></li>
                <li><RouterLink to="/dean_office" class="block px-4 py-2 hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out">Dean Office Staff</RouterLink ></li>

              </ul>
            </li>
            <li class="relative group">
              <button class="px-4 py-2  hover:bg-blue-700 focus:outline-none focus:bg-blue-700 border-b-4 border-[#21209c] hover:border-[#fdb827]">
                Academics
              </button>
              <ul
                class="absolute z-50 left-0 mt-2 w-48 bg-white  shadow-lg  p-0 transition-all duration-300 opacity-0 invisible group-hover:visible group-hover:opacity-100 text-black"
              >
                <li><RouterLink to="/programs_offered" class="block px-4 py-2 hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out">Programs Offered</RouterLink ></li>
                <li><RouterLink to="/curriculum_syllabus" class="block px-4 py-2 hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out">Curriculum & Syllabus</RouterLink ></li>
                <li><RouterLink to="/regulation" class="block px-4 py-2 hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out">Regulations</RouterLink ></li>
                <li><RouterLink to="/student_affairs" class="block px-4 py-2 hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out">Student Affairs</RouterLink ></li>
              </ul>
            </li>
            <li class="relative group">
            <button class=" px-4 py-2 border-b-4 border-[#21209c] hover:border-[#fdb827] hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
                Departments
              </button>
              <ul
                class="absolute z-20 left-0 mt-2 w-48 bg-white text-black shadow-lg  opacity-0 invisible group-hover:visible group-hover:opacity-100"
              >
                <li><RouterLink to="/departments/cse" class="block px-4 py-2 hover:bg-blue-800  hover:text-white transition-all duration-300 ease-in-out">Computer Science Engg</RouterLink ></li>
                <li><RouterLink to="/departments/eee" class="block px-4 py-2 hover:bg-blue-800  hover:text-white transition-all duration-300 ease-in-out">Electrical and Electronics Engg</RouterLink ></li>
                <li><RouterLink to="/departments/ece" class="block px-4 py-2 hover:bg-blue-800  hover:text-white transition-all duration-300 ease-in-out">Electronics and Communications Engg</RouterLink ></li>
                <li><RouterLink to="/departments/mech" class="block px-4 py-2 hover:bg-blue-800  hover:text-white transition-all duration-300 ease-in-out">Mechanical Engg</RouterLink ></li>
                <li><RouterLink to="/departments/mba" class="block px-4 py-2 hover:bg-blue-800  hover:text-white transition-all duration-300 ease-in-out">MBA</RouterLink ></li>
                <li><RouterLink to="/s&h" class="block px-4 py-2 hover:bg-blue-800  hover:text-white transition-all duration-300 ease-in-out">Science & Humanities</RouterLink ></li>
              </ul>
            </li>
            <li class="relative group">
              <button class="px-4 py-2 border-b-4 border-[#21209c] hover:border-[#fdb827] hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
                Offices
              </button>
              <ul
                class="absolute z-20 left-0 mt-2 w-48 bg-white shadow-lg transition-all duration-300 opacity-0 invisible group-hover:visible group-hover:opacity-100"
              >
                <li><RouterLink to="/admission" class="block px-4 py-2 hover:bg-blue-800 transition-all duration-300 ease-in-out text-black hover:text-white">Admission</RouterLink ></li>
                <li><RouterLink to="/dgate" class="block px-4 py-2 hover:bg-blue-800 transition-all duration-300 ease-in-out text-black hover:text-white">DGATE Cell</RouterLink ></li>
                <li><RouterLink to="/pace-cell" class="block px-4 py-2 hover:bg-blue-800 transition-all duration-300 ease-in-out text-black hover:text-white">PACE Cell</RouterLink ></li>
                <li><RouterLink to="/zonal" class="block px-4 py-2 hover:bg-blue-800 transition-all duration-300 ease-in-out text-black hover:text-white">Zonal Office</RouterLink ></li>
                <li><RouterLink to="/office-affiliation" class="block px-4 py-2 hover:bg-blue-800 transition-all duration-300 ease-in-out text-black hover:text-white">Office of Affiliation</RouterLink ></li>
                <li><RouterLink to="/distance-education" class="block px-4 py-2 hover:bg-blue-800 transition-all duration-300 ease-in-out text-black hover:text-white">Distance Education</RouterLink ></li>
                <li><RouterLink to="/ed-cell" class="block px-4 py-2 hover:bg-blue-800 transition-all duration-300 ease-in-out text-black hover:text-white">ED Cell</RouterLink ></li>
                <li><RouterLink to="/placement-cell" class="block px-4 py-2 hover:bg-blue-800 transition-all duration-300 ease-in-out text-black hover:text-white">Placement Cell</RouterLink ></li>
                <li><RouterLink to="/research-cell" class="block px-4 py-2 hover:bg-blue-800 transition-all duration-300 ease-in-out text-black hover:text-white">Research Cell</RouterLink ></li>
                <li><RouterLink to="/exam-cell" class="block px-4 py-2 hover:bg-blue-800 transition-all duration-300 ease-in-out text-black hover:text-white">Exam cell</RouterLink ></li>
                <li><RouterLink to="/EstateOff" class="block px-4 py-2 hover:bg-blue-800 transition-all duration-300 ease-in-out text-black hover:text-white">Estate Office</RouterLink ></li>
              </ul>
            </li>


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
  <RouterView style="font-family: 'Clash Grotesk', sans-serif;" />

  <footer class="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-12 font-serif">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-blue-700">
      <div class="space-y-4 pb-6 md:pb-0 md:pr-6">
        <h2 class="text-3xl font-extrabold mb-4">Anna University Regional Campus Coimbatore</h2>
        <p class="text-lg">
          Maruthamalai Main Road, Somayampalayam,<br>
          Coimbatore(Dt), Tamil Nadu 641046, India
        </p>
        <p class="text-lg font-semibold">Email: ucedean-kovai@gmail.com</p>
        <h3 class="text-2xl font-bold mb-4">Social media</h3>
        <div class="flex flex-wrap gap-2">
          <RouterLink to="https://www.annauniv.edu/" class="transition-transform hover:scale-110">
            <img src="./assets/AN-logo.png" alt="AN logo" class="w-10 h-10 rounded-full bg-white p-1">
          </RouterLink >
          <RouterLink to="https://www.tn.gov.in/" class="transition-transform hover:scale-110">
            <img src="./assets/2000px-TamilNadu_Logo.svg.png" alt="TN logo" class="w-10 h-10 rounded-full bg-white p-1">
          </RouterLink >
          <RouterLink to="http://india.gov.in" class="transition-transform hover:scale-110">
            <img src="./assets/india.png" alt="India logo" class="w-10 h-10 rounded-full bg-white p-1">
          </RouterLink >
          <RouterLink to="https://www.annauniv.edu/" class="transition-transform hover:scale-110">
            <img src="./assets/AN-logo.png" alt="AN logo" class="w-10 h-10 rounded-full bg-white p-1">
          </RouterLink>
          <a to="https://www.tn.gov.in/" class="transition-transform hover:scale-110">
            <img src="./assets/2000px-TamilNadu_Logo.svg.png" alt="TN logo" class="w-10 h-10 rounded-full bg-white p-1">
          </a>
        </div>
      </div>
      
      
      <div class="space-y-4 py-6 md:py-0 md:px-6">
        <h3 class="text-2xl font-bold mb-4">Important Links</h3>
        <div class="flex flex-wrap gap-2">
          <a to="https://www.annauniv.edu/" class="transition-transform hover:scale-110">
            <img src="./assets/AN-logo.png" alt="AN logo" class="w-11 h-11 rounded-full bg-white p-1">
          </a>
          <a to="https://www.tn.gov.in/" class="transition-transform hover:scale-110">
            <img src="./assets/2000px-TamilNadu_Logo.svg.png" alt="TN logo" class="w-11 h-11 rounded-full bg-white p-1">
          </a>
          <a to="http://india.gov.in" class="transition-transform hover:scale-110">
            <img src="./assets/india.png" alt="India logo" class="w-11 h-11 rounded-full bg-white p-1">
          </a>
          <a to="#" class="transition-transform hover:scale-110">
            <img src="./assets/mhrd.png" alt="MHRD logo" class="w-11 h-11 rounded-full bg-white p-1">
          </a>
          <a to="https://www.aicte-india.org/" class="transition-transform hover:scale-110">
            <img src="./assets/aicte.png" alt="AICTE logo" class="w-11 h-11 rounded-full bg-white p-1">
          </a>
          <a to="https://www.ugc.gov.in/" class="transition-transform hover:scale-110">
            <img src="./assets/ugc.png" alt="UGC logo" class="w-11 h-11 rounded-full bg-white p-1">
          </a>
        </div>

      </div>
      
      <div class="space-y-6 pt-6 md:pt-0 md:pl-6">
        <div>
          <h3 class="text-2xl font-bold mb-2">UG Courses</h3>
          <ul class="list-disc list-inside space-y-1">
            <li>Computer Science Engineering</li>
            <li>Artificial Intelligence and Data Science</li>
            <li>Electrical and Electronics Engineering</li>
            <li>Electronics and Communication Engineering</li>
            <li>Mechanical Engineering</li>
            <li>Artificial Intelligence and Data Science</li>
          </ul>
        </div>
        <div class="border-t border-blue-700 pt-4">
          <h3 class="text-2xl font-bold mb-2">MBA Courses</h3>
          <ul class="list-disc list-inside space-y-1">
            <li>Computer Science Engineering</li>
            <li>Artificial Intelligence and Data Science</li>
            <li>Artificial Intelligence and Data Science</li>
          </ul>
        </div>
      </div>
    </div>
    
    <hr class="my-8 border-blue-700">
    
    <div class="flex justify-between items-center">
      <div class="py-2 text-center">
        <p class="text-lg">&copy; {{new Date().getFullYear()}} Anna University Regional Campus Coimbatore. All rights reserved.</p>
      </div>
      <a href="/about" class="text-xl font-bold text-blue-300 hover:text-blue-100 transition-colors">Website Development Team</a> 
    </div>
  </div>
</footer>
</div>RouterLink </template>

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
[v-cloak] {
  display: none;
}

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