<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>

    <div class="wrapper">
      <nav class="navbar bg-base-100 shadow-lg">
        <div class="flex-1">
          <a href="#" class="btn btn-ghost normal-case text-xl">College Name</a>
        </div>
        <div class="flex-none">
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Home</a></li>
              <li><a>About</a></li>
              <li>
                <details>
                  <summary>Departments</summary>
                  <ul class="p-2 bg-base-100 shadow-lg">
                    <li><a>Computer Science</a></li>
                    <li><a>Engineering</a></li>
                    <li><a>Business</a></li>
                    <li><a>Arts & Humanities</a></li>
                    <li><a>Sciences</a></li>
                    <li><a>Social Sciences</a></li>
                    <li><a>Education</a></li>
                  </ul>
                </details>
              </li>
              <li><a>Admissions</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div>
          <ul class="menu menu-horizontal p-0 hidden lg:flex">
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li>
              <details>
                <summary>Departments</summary>
                <ul class="p-2 bg-base-100 shadow-lg">
                  <li><a>Computer Science</a></li>
                  <li><a>Engineering</a></li>
                  <li><a>Business</a></li>
                  <li><a>Arts & Humanities</a></li>
                  <li><a>Sciences</a></li>
                  <li><a>Social Sciences</a></li>
                  <li><a>Education</a></li>
                </ul>
              </details>
            </li>
            <li><a>Admissions</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
  <RouterView />
  <footer class="footer footer-center p-4 bg-base-300 text-base-content">
    <div>
      <p>Copyright © {{ currentYear }} - College Name</p>
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

