<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>

    <div class="wrapper">
      <nav class="navbar bg-gray-800 text-white shadow-lg">
        <div class="flex-1">
          <img src="./assets/logo.svg" alt="Logo" class="h-12 " />
          <RouterLink to="/" class="btn btn-ghost normal-case text-xl font-bold ">Anna University Regional Campus <p class="hidden md:block text-xl font-bold">Coimbatore</p></RouterLink>
          <p class="hidden md:block text-xl font-semibold">Counselling Code: 2025</p>
        </div>
        <div class="flex-none">
          <div class="dropdown dropdown-end bg-gray-800">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-800 rounded-box w-52">
              <li><a>Home</a></li>
              <li><a>About</a></li>
              <li>
                <details>
                <summary>Departments</summary>
                <ul class="p-2 bg-base-100 shadow-lg rounded-md self-center text-black">
                  <li class="hover:opacity-60" ><a href="/departments/cse">CSE</a></li>
                  <li><a href="/departments/eee">EEE</a></li>
                  <li><a href="/departments/ece">ECE</a></li>
                  <li><a href="/departments/mech">MECH</a></li>
                  <li><a href="/departments/mba">MBA</a></li>
                </ul>
              </details>
              </li>
              <li><a>Admissions</a></li>
              <li>
                <details>
                  <summary>Offices</summary>
                  <ul class="p-2 bg-base-100 shadow-lg text-black">
                    <li class="hover:opacity-60" ><a href="/">DGATE Cell</a></li>
                    <li><a>ED Cell</a></li>
                    <li><a>IIC</a></li>
                    <li><a>UDI</a></li>
                  </ul>
                </details>
              </li>
              <li><a>Contact</a></li>
            </ul>
          </div>
          <ul class="menu menu-horizontal p-0 hidden lg:flex">
            <li><a href="/">Home</a></li>
            <li><a>About</a></li>
            <li>
              <details>
                <summary>Departments</summary>
                <ul class="p-2 bg-base-100 shadow-lg text-black">
                  <li class="hover:opacity-60" ><a href="/departments/cse">CSE</a></li>
                  <li><a href="/departments/eee">EEE</a></li>
                  <li><a href="/departments/ece">ECE</a></li>
                  <li><a href="/departments/mech">MECH</a></li>
                  <li><a href="/departments/mba">MBA</a></li>
                </ul>
              </details>
            </li>
            <li><a>Admissions</a></li>
            <li>
              <details>
                <summary>Offices</summary>
                <ul class="p-2 bg-base-100 shadow-lg text-black">
                  <li class="hover:opacity-60" ><a href="/">DGATE Cell</a></li>
                  <li><a>ED Cell</a></li>
                  <li><a>IIC</a></li>
                  <li><a>UDI</a></li>
                </ul>
              </details>
            </li>

            <li><a>Contact</a></li>
            <li><input type="checkbox" value="synthwave" class="toggle theme-controller"/></li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
  <RouterView />
  <footer class="bg-gray-900 text-white py-8">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 class="text-lg font-bold mb-4"></h2>Anna University Regional campus Coimbatore
          <p class="mb-2">Campus Office:</p>
          <p class="mb-2">Sarathy Nagar, Kundrathur,</p>
          <p class="mb-2">Chennai-600069, TamilNadu, India.</p>
          <p class="mb-2">Phone: +91 44 7111 9111</p>
          <p class="mb-4">Email: info@citchennai.net</p>
          <p class="mb-2">City Office:</p>
          <p>HIG-34, Rajajinagar Street, II Main Road, Nulambur,</p>
          <p>Chennai - 600057</p>
        </div>
        <div class="mb-8 md:mb-0">
          <h2 class="text-lg font-bold mb-4">UG Courses</h2>
          <ul>
            <li class="mb-2">NBA Accreditated Courses</li>
            <li class="mb-2">B.E. Mechanical Engineering</li>
            <li class="mb-2">B.E. Computer Science and Engineering</li>
            <!-- Add more UG courses -->
          </ul>
        </div>
        <div>
          <h2 class="text-lg font-bold mb-4">PG Courses</h2>
          <ul>
            <li class="mb-2">NBA Accrediated Courses</li>
            <li class="mb-2">M.E. CAD/CAM</li>
            <li class="mb-2">M.E. Computer Science and Engineering</li>
            <!-- Add more PG courses -->
          </ul>
        </div>
      </div>
      <hr class="my-8 border-gray-700">
      <div class="flex flex-wrap justify-between items-center">
        <div class="w-full md:w-auto mb-4 md:mb-0">
          <p>Copyright &copy; Anna University Regional campus Coimbatore 2024. All rights reserved.</p>
        </div>
        <div class="w-full md:w-auto mt-4 md:mt-0">
        <div class="flex items-center justify-center md:justify-start">
          <a href="#" class="text-white hover:text-gray-400 mr-4">
            <i class="fab fa-facebook fa-lg"></i>
          </a>
          <a href="#" class="text-white hover:text-gray-400 mr-4">
            <i class="fab fa-twitter fa-lg"></i>
          </a>
          <a href="#" class="text-white hover:text-gray-400 mr-4">
            <i class="fab fa-linkedin fa-lg"></i>
          </a>
          <a href="#" class="text-white hover:text-gray-400 mr-4">
            <i class="fab fa-google-plus fa-lg"></i>
          </a>
          <a href="#" class="text-white hover:text-gray-400 mr-4">
            <i class="fab fa-instagram fa-lg"></i>
          </a>
          <a href="#" class="text-white hover:text-gray-400 mr-4">
            <i class="fab fa-youtube fa-lg"></i>
          </a>
          <a href="#" class="text-white hover:text-gray-400">
            <i class="fab fa-whatsapp fa-lg"></i>
          </a>
        </div>
      </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data(){
    return {
      currentYear: new Date().getFullYear(),
    }
  }
}
</script>

