<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="navbar bg-gray-800 text-white shadow-lg relative z-20 px-0">
        <div class="flex-1 mx-2">
          <img src="./assets/logo.svg" alt="Logo" class="h-16" />
          <RouterLink to="/" class="btn btn-ghost normal-case text-2xl font-bold">
            ANNA UNIVERSITY REGIONAL CAMPUS 
            <p class="hidden lg:block text-2xl font-bold">COIMBATORE</p>
          </RouterLink>
        </div>
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
                <summary>Academics</summary>
                <ul class="p-2 bg-base-100 shadow-lg text-black z-30">
                  <li><a href="/academics/Programs-Offered">Programs Offered</a></li>
                  <li><a href="/academics/Curriculum-&-Syllabus">Curriculum & Syllabus</a></li>
                  <li><a href="/academics/Regulation">Regulations</a></li>
                  <li><a href="/academics/Student-Affairs">Student Affairs</a></li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Departments</summary>
                <ul class="p-2 bg-base-100 shadow-lg text-black z-30">
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
            <li>
              <details>
                <summary>Offices</summary>
                <ul class="p-2 bg-base-100 shadow-lg text-black z-30">
                  <li><a href="/admission">Admission</a></li>
                  <li><a href="/dgate">DGATE Cell</a></li>
                  <li><a href="/pace-cell">PACE Cell</a></li>
                  <li><a href="/administration">Administration</a></li>
                  <li><a href="/zonal">Zonal Office</a></li>
                  <li><a href="/office-affiliation">Office of Affiliation</a></li>
                  <li><a href="/distance-education">Distance Education</a></li>
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
                <ul class="p-2 bg-base-100 shadow-lg text-black z-30">
                  <li><a href="/sports">Sports</a></li>
                  <li><a href="/nss">NSS</a></li>
                  <li><a href="/tamilmandram">Tamil Mandram</a></li>
                  <li><a href="/fine-arts">Fine Arts Club</a></li>
                  <li><a href="/alumni">Alumni</a></li>
                </ul>
              </details>
            </li>
            <li><a href="/library">Library</a></li>
            <li><a href="/hostel">Hostel</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </nav>
    </div>
    <div class="notice absolute top-0 w-full text-center bg-white text-black z-10">
      This is a running notice text...
    </div>
  </header>

  <RouterView />

  <footer class="bg-gray-900 text-white py-8">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 class="text-2xl font-bold mb-2">Anna University Regional campus Coimbatore</h2>
          <p>Campus Office:</p>
          <p>Maruthamalai Main Road, Navavoor,</p>
          <p>Coimbatore(Dt), Tamil Nadu 641046, India.</p>
          <p>Phone: +91 44 7111 9111</p>
          <p class="mb-4">Email: dummy@mail.com</p>
          <p class="text-xl font-bold">Important Links:</p>
          <div class="flex items-center p-2 gap-1">
            <a href="https://www.annauniv.edu/" class="rounded-full bg-gray-100 shadow-md overflow-hidden">
              <img src="./assets/AN-logo.png" alt="an-logo" class="w-12 h-12" width="35" height="35">
            </a>
            <a href="https://www.tn.gov.in/" class="rounded-full bg-gray-100 shadow-md overflow-hidden">
              <img src="./assets/2000px-TamilNadu_Logo.svg.png" alt="tn-logo" class="w-12 h-12" width="35" height="35">
            </a>
            <a href="http://india.gov.in" class="rounded-full bg-gray-100 shadow-md overflow-hidden">
              <img src="./assets/india.png" alt="india-logo" class="w-12 h-12" width="35" height="35">
            </a>
            <a href="#" class="rounded-full bg-gray-100 shadow-md overflow-hidden">
              <img src="./assets/mhrd.png" alt="mhrd-logo" class="w-12 h-12" width="35" height="35">
            </a>
            <a href="https://www.aicte-india.org/" class="rounded-full bg-gray-100 shadow-md overflow-hidden">
              <img src="./assets/aicte.png" alt="aicte-logo" class="w-12 h-12" width="35" height="35">
            </a>
            <a href="https://www.ugc.gov.in/" class="rounded-full bg-gray-100 shadow-md overflow-hidden">
              <img src="./assets/ugc.png" alt="ugc-logo" class="w-12 h-12" width="35" height="35">
            </a>
          </div>
        </div>
        <div class="mb-8 md:mb-0">
          <div style="position:relative;text-align:center;">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.9484517524475!2d76.88349077443925!3d11.04249178912289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85910327ab1e3%3A0x9f7a2b4ef20fe07!2sAnna%20University%20RC%20Coimbatore!5e0!3m2!1sen!2sin!4v1715493035058!5m2!1sen!2sin" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div>
          <h2 class="text-lg font-bold mb-2">UG Courses</h2>
          <ul>
            <li class="mb-1">B.E. Computer Science and Engineering</li>
            <li class="mb-1">B.E. Electrical and Electronics Engineering</li>
            <li class="mb-1">B.E. Electronics and Communications Engineering</li>
            <li class="mb-1">B.E. Mechanical Engineering</li>
            <li class="mb-1">B.Tech Artificial Intelligence and Data Science</li>
            <!-- Add more UG courses -->
          </ul>
          <h2 class="text-lg font-bold mb-1 mt-4">PG Courses</h2>
          <ul>
            <li class="mb-2">MBA</li>
            <!-- Add more PG courses -->
          </ul>
          <a href="/about" class="text-lg font-bold mb-1 mt-4">Website Development Team</a>
        </div>
      </div>
      <hr class="my-8 border-gray-700">
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
.navbar {
  position: relative;
  z-index: 20;
}

.dropdown-content {
  position: absolute;
  z-index: 30;
}

.notice {
  position: absolute;
  top: 0;
  width: 100%;
  text-align: center;
  background-color: #fff;
  color: #000;
  white-space: nowrap;
  overflow: hidden;
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
