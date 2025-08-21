<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <!-- Modern Top Bar with Subtle Gradient -->
    <div class="bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
      <div class="container mx-auto px-3 sm:px-4">
        <div class="flex items-center justify-between py-2 text-xs sm:text-sm">
          <span class="font-medium truncate">Counselling Code: <span class="text-yellow-300 font-semibold">2025</span></span>
          <div class="hidden md:flex items-center space-x-4 lg:space-x-8">
            <RouterLink to="/library" class="hover:text-yellow-300 transition-colors duration-300 flex items-center space-x-1">
              <svg class="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
              </svg>
              <span class="hidden lg:inline">Library</span>
            </RouterLink>
            <RouterLink to="/hostel" class="hover:text-yellow-300 transition-colors duration-300 flex items-center space-x-1">
              <svg class="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              <span class="hidden lg:inline">Hostel</span>
            </RouterLink>
            <RouterLink to="/contact" class="hover:text-yellow-300 transition-colors duration-300 flex items-center space-x-1">
              <svg class="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span class="hidden lg:inline">Contact</span>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Enhanced Main Header with Modern Design -->
    <header class="sticky top-0 z-40 bg-white shadow-lg">
      <div class="container mx-auto px-3 sm:px-4">
        <nav class="flex items-center justify-between py-2 sm:py-3">
          <!-- Logo and University Name with Enhanced Styling -->
          <div class="flex items-center space-x-2 sm:space-x-4 cursor-pointer transform hover:scale-105 transition-transform duration-300" @click="$router.push('/')">
            <img src="/logo.svg" alt="Logo" class="h-10 w-auto sm:h-12 md:h-16"/>
            <div class="flex flex-col min-w-0">
              <span class="text-lg sm:text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-800 truncate">ANNA UNIVERSITY</span>
              <span class="text-xs sm:text-sm md:text-md text-gray-500 truncate">Regional Campus Coimbatore</span>
            </div>
          </div>

          <!-- Desktop Navigation with Modern Styling -->
          <div class="hidden lg:flex items-center space-x-1">
            <!-- Life@aurcc Dropdown -->
            <div class="relative group">
              <button class="px-3 sm:px-4 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 group-hover:text-blue-600 group-hover:bg-blue-50 transition-all duration-300 text-sm lg:text-base">
                Life@aurcc
                <span class="inline-block ml-1 transform group-hover:rotate-180 transition-transform duration-300">
                  <svg class="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </span>
              </button>
              <div class="dropdown-menu">
                <RouterLink v-for="link in mobileSections[0].links" 
                          :key="link.route" 
                          :to="link.route"
                          class="dropdown-item">
                  {{ link.name }}
                </RouterLink>
              </div>
            </div>

            <!-- Administration Dropdown -->
            <div class="relative group">
              <button class="px-4 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 group-hover:text-blue-600 group-hover:bg-blue-50 transition-all duration-300">
                Administration
                <span class="inline-block ml-1 transform group-hover:rotate-180 transition-transform duration-300">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </span>
              </button>
              <div class="dropdown-menu w-56">
                <RouterLink v-for="link in mobileSections[1].links" 
                          :key="link.route" 
                          :to="link.route"
                          class="dropdown-item">
                  {{ link.name }}
                </RouterLink>
              </div>
            </div>

            <!-- Academics Dropdown -->
            <div class="relative group">
              <button class="px-4 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 group-hover:text-blue-600 group-hover:bg-blue-50 transition-all duration-300">
                Academics
                <span class="inline-block ml-1 transform group-hover:rotate-180 transition-transform duration-300">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </span>
              </button>
              <div class="dropdown-menu">
                <RouterLink v-for="link in mobileSections[2].links" 
                          :key="link.route" 
                          :to="link.route"
                          class="dropdown-item">
                  {{ link.name }}
                </RouterLink>
              </div>
            </div>

            <!-- Departments Dropdown -->
            <div class="relative group">
              <button class="px-4 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 group-hover:text-blue-600 group-hover:bg-blue-50 transition-all duration-300">
                Departments
                <span class="inline-block ml-1 transform group-hover:rotate-180 transition-transform duration-300">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </span>
              </button>
              <div class="dropdown-menu w-56">
                <a v-for="link in mobileSections[3].links" 
                   :key="link.route" 
                   :href="link.route"
                   @click.prevent="$router.push(link.route)"
                   class="dropdown-item">
                  {{ link.name }}
                </a>
              </div>
            </div>

            <!-- Offices Dropdown -->
            <div class="relative group">
              <button class="px-4 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 group-hover:text-blue-600 group-hover:bg-blue-50 transition-all duration-300">
                Offices
                <span class="inline-block ml-1 transform group-hover:rotate-180 transition-transform duration-300">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </span>
              </button>
              <div class="dropdown-menu">
                <RouterLink v-for="link in mobileSections[4].links" 
                          :key="link.route" 
                          :to="link.route"
                          class="dropdown-item">
                  {{ link.name }}
                </RouterLink>
              </div>
            </div>
          </div>

          <!-- Mobile Menu Button with Animation -->
          <button @click="isMobileMenuOpen = !isMobileMenuOpen" 
                  class="mobile-menu-btn p-2 sm:p-3 rounded-md hover:bg-blue-50 transition-colors duration-300 touch-manipulation">
            <svg class="w-5 h-5 sm:w-6 sm:h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </nav>
      </div>
    </header>

    <!-- Mobile Menu with Improved Transitions -->
    <Transition 
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="isMobileMenuOpen" 
           class="fixed inset-0 z-50 bg-gray-900/70 backdrop-blur-sm"
           @click.self="isMobileMenuOpen = false">
        <Transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="translate-x-full"
          enter-to-class="translate-x-0"
          leave-active-class="transition-all duration-300 ease-in"
          leave-from-class="translate-x-0"
          leave-to-class="translate-x-full"
        >
          <div v-if="isMobileMenuOpen" class="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl overflow-hidden">
            <!-- Header -->
            <div class="flex items-center justify-between p-4 border-b">
              <span class="font-semibold text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-800">Menu</span>
              <button @click="isMobileMenuOpen = false" 
                      class="p-2 rounded-full hover:bg-blue-50 transition-colors duration-300 touch-manipulation">
                <svg class="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>

            <!-- Navigation Links -->
            <nav class="overflow-y-auto h-[calc(100vh-5rem)] py-2">
              <div class="p-4 space-y-2">
                <div v-for="(section, index) in mobileSections" :key="section.name" class="border-b border-gray-100 last:border-0 pb-2">
                  <button @click="section.isOpen = !section.isOpen"
                          class="w-full flex items-center justify-between py-3 px-2 text-gray-700 hover:text-blue-600 transition-colors duration-300 touch-manipulation">
                    <span class="font-medium text-left">{{ section.name }}</span>
                    <svg class="w-5 h-5 transform transition-transform duration-300 flex-shrink-0"
                         :class="{ 'rotate-180': section.isOpen }"
                         fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                    </svg>
                  </button>
                  
                  <Transition
                    enter-active-class="transition-all duration-300 ease-out"
                    enter-from-class="mobile-menu-closed"
                    enter-to-class="mobile-menu-open"
                    leave-active-class="transition-all duration-300 ease-in"
                    leave-from-class="mobile-menu-open"
                    leave-to-class="mobile-menu-closed"
                  >
                    <div v-if="section.isOpen" class="mobile-menu-container">
                      <RouterLink v-for="link in section.links"
                              :key="link.route"
                              :to="link.route"
                              @click="isMobileMenuOpen = false"
                              class="block pl-6 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors duration-200 touch-manipulation">
                        {{ link.name }}
                      </RouterLink>
                    </div>
                  </Transition>
                </div>
              </div>
            </nav>
          </div>
        </Transition>
      </div>
    </Transition>

    <!-- Main Content -->
    <div class="flex-grow">
      <RouterView />
    </div>

    <!-- Modern Footer with Improved Design -->
    <footer class="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-12 sm:py-16">
      <div class="container mx-auto px-4 sm:px-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <h2 class="text-xl font-semibold mb-4">Campus <span class="text-yellow-300">Location</span></h2>
            <p class="text-blue-200 mb-4">Maruthamalai Road,<br />Navavoor, Coimbatore - 641046</p>
            <div class="flex items-center space-x-2 text-blue-200">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>0422-2691123</span>
            </div>
          </div>
          
          <div>
            <h2 class="text-xl font-semibold mb-4">Quick <span class="text-yellow-300">Links</span></h2>
            <ul class="space-y-2">
              <li><a href="#" class="text-blue-200 hover:text-white transition-colors duration-300">Home</a></li>
              <li><a href="#" class="text-blue-200 hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="#" class="text-blue-200 hover:text-white transition-colors duration-300">Academics</a></li>
              <li><a href="/admission" class="text-blue-200 hover:text-white transition-colors duration-300">Admissions</a></li>
              <li><a href="#" class="text-blue-200 hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h2 class="text-xl font-semibold mb-4">Student <span class="text-yellow-300">Resources</span></h2>
            <ul class="space-y-2">
              <li><a href="#" class="text-blue-200 hover:text-white transition-colors duration-300">Library</a></li>
              <li><a href="#" class="text-blue-200 hover:text-white transition-colors duration-300">Hostel</a></li>
              <li><a href="#" class="text-blue-200 hover:text-white transition-colors duration-300">Placements</a></li>
              <li><a href="#" class="text-blue-200 hover:text-white transition-colors duration-300">Scholarships</a></li>
              <li><a href="#" class="text-blue-200 hover:text-white transition-colors duration-300">Anti-Ragging</a></li>
            </ul>
          </div>
          
          <div>
            <h2 class="text-xl font-semibold mb-4">Connect <span class="text-yellow-300">With Us</span></h2>
            <div class="flex space-x-4 mb-4">
              <a href="#" class="w-10 h-10 rounded-full bg-blue-800 hover:bg-blue-700 flex items-center justify-center transition-colors duration-300">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </a>
              <a href="#" class="w-10 h-10 rounded-full bg-blue-800 hover:bg-blue-700 flex items-center justify-center transition-colors duration-300">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.5 12.063c0-5.799-4.702-10.5-10.5-10.5s-10.5 4.701-10.5 10.5c0 5.244 3.839 9.598 8.958 10.378v-7.342h-2.696v-3.036h2.696v-2.31c0-2.663 1.587-4.13 4.013-4.13 1.16 0 2.37.215 2.37.215v2.609h-1.335c-1.318 0-1.728.815-1.728 1.653v1.962h2.944l-.471 3.036h-2.473v7.343c5.119-.781 8.957-5.134 8.957-10.379"></path>
                </svg>
              </a>
              <a href="#" class="w-10 h-10 rounded-full bg-blue-800 hover:bg-blue-700 flex items-center justify-center transition-colors duration-300">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                </svg>
              </a>
              <a href="#" class="w-10 h-10 rounded-full bg-blue-800 hover:bg-blue-700 flex items-center justify-center transition-colors duration-300">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
            </div>
            <p class="text-blue-200">&copy; 2023 Anna University Regional Campus Coimbatore. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
      isMobileMenuOpen: false,
      mobileSections: [
      {
          name: "Life@aurcc",
          isOpen: false,
          links: [
            { name: "Sports", route: "/sports" },
            { name: "NSS", route: "/nss" },
            { name: "Kani Tamil Peravai", route: "/tamilmandram" },
            { name: "Fine Arts Club", route: "/fine-arts" },
            { name: "Alumni", route: "/alumni" }
          ],
        },
        {
          name: "Administration",
          isOpen: false,
          links: [
            { name: "Organogram", route: "/organogram" },
            { name: "University Administration", route: "/Registrar" },
            { name: "Administrative Staff", route: "/administration" },
            { name: "Head of the Departments", route: "/HOD" },
            { name: "Cell Coordinators", route: "/COD" },
            { name: "Dean Office Staff", route: "/dean_office" },
          ],
        },
        {
          name: "Academics",
          isOpen: false,
          links: [
            { name: "Programs Offered", route: "/programs_offered" },
            { name: "Curriculam & Syllabus", route: "/curriculum_syllabus" },
            { name: "Regulation", route: "/regulation" },
            { name: "Student Affairs", route: "/student_affairs" },
          ],
        },
        {
          name: "Departments",
          isOpen: false,
          links: [
            { name: "Computer Science Engineering", route: "/departments/cse" },
            { name: "Electrical & Electronics Engineering", route: "/departments/eee" },
            { name: "Electronics & communication Engineering", route: "/departments/ece" },
            { name: "Mechanical Engineering", route: "/departments/mech" },
            { name: "MBA", route: "/departments/mba" },
            { name: "Science & Humanities Department", route: "/s&h" },
          ],
        },
        {
          name: "Offices",
          isOpen: false,
          links: [
            { name: "Admission", route: "/admissions" },
            { name: "DGATE Cell", route: "/dgate" },
            { name: "PACE Cell", route: "/pace-cell" },
            { name: "Zonal Office", route: "/zonal" },
            { name: "Office of Affiliation", route: "/office-affiliation" },
            { name: "Distance Education", route: "/distance-education" },
            { name: "ED Cell", route: "/ed-cell" },
            { name: "Placement Cell", route: "/placement-cell" },
            { name: "Research Cell", route: "/research-cell" },
            { name: "Exam Cell", route: "/exam-cell" },
            { name: "Estate Office", route: "/EstateOff" },
          ],
        },
      ],
    };
  },
  // Add in a watcher or in methods
  watch: {
    isMobileMenuOpen(newVal) {
      if (newVal) {
        document.body.classList.add('menu-open');
      } else {
        document.body.classList.remove('menu-open');
      }
    }
  },
  methods: {
    toggleMobileDropdown(section) {
      section.isOpen = !section.isOpen;
    },
    toggleChatbot() {
      this.showChatbot = !this.showChatbot;
    },
    async sendMessage() {
      if (this.userMessage.trim() === "") return;
      
      // Add the user's message to the chat log
      this.chatLog.push({ sender: "user", message: this.userMessage });

      const userInput = this.userMessage;
      this.userMessage = ""; // Clear the input field

      try {
        // Send the message to the backend (replace with your API)
        const response = await fetch("http://localhost:8000/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: userInput })
        });
        const data = await response.json();

        // Add the bot's response to the chat log
        this.chatLog.push({ sender: "bot", message: data.response });
      } catch (error) {
        console.error("Error while communicating with the chatbot:", error);
      }
    },
  },
};
</script>

<style scoped>
/* Modern dropdown menu styling */
.dropdown-menu {
  @apply absolute top-full right-0 mt-1 py-2 bg-white rounded-lg shadow-lg border border-gray-100
  opacity-0 invisible transform translate-y-2 transition-all duration-300 w-48 z-50;
}

.group:hover .dropdown-menu {
  @apply opacity-100 visible translate-y-0;
}

.dropdown-item {
  @apply block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200;
}

/* Mobile menu animation classes */
.mobile-menu-container {
  overflow: hidden;
}

.mobile-menu-open {
  max-height: 500px;
  opacity: 1;
  margin-top: 0.5rem;
}

.mobile-menu-closed {
  max-height: 0;
  opacity: 0;
  margin-top: 0;
}

/* 3D card effects for stats */
.perspective {
  perspective: 1000px;
}

.stat-card-3d {
  transform-style: preserve-3d;
}

.stat-front {
  @apply bg-white rounded-xl shadow-lg p-6 text-center border border-blue-100;
  backface-visibility: hidden;
}

.stat-icon-wrapper {
  @apply flex justify-center mb-3;
}

.stat-icon-circle {
  @apply w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center;
}

.stat-value {
  @apply text-2xl font-bold text-blue-700 mb-1;
}

.stat-label {
  @apply text-gray-600;
}

.rotate-y-12 {
  transform: rotateY(12deg);
}

/* Subtle zoom animation for hero section */
@keyframes subtle-zoom {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
}

.animate-subtle-zoom {
  animation: subtle-zoom 15s infinite alternate ease-in-out;
}


/* In your style block (scoped or global) */
.mobile-menu-btn {
    display: block; /* Default: show on mobile/tablet */
}
@media (min-width: 1024px) {
    .mobile-menu-btn {
        display: none; /* Hide on desktop (≥1024px) */
    }
}

</style>
