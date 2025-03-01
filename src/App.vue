<template>
  <div>
    <!-- Modern Top Bar with Gradient -->
    <div class="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between py-3 text-sm">
          <span class="font-semibold">Counselling Code: <span class="text-yellow-300">2025</span></span>
          <div class="hidden md:flex items-center space-x-6">
            <RouterLink to="/library" class="hover:text-yellow-300 transition-colors duration-300">Library</RouterLink>
            <RouterLink to="/hostel" class="hover:text-yellow-300 transition-colors duration-300">Hostel</RouterLink>
            <RouterLink to="/contact" class="hover:text-yellow-300 transition-colors duration-300">Contact</RouterLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Header with Modern Design -->
    <header class="sticky top-0 z-40 bg-white shadow-md">
      <div class="container mx-auto px-4">
        <nav class="flex items-center justify-between py-4">
          <!-- Logo and University Name -->
          <div class="flex items-center space-x-4 cursor-pointer transform hover:scale-105 transition-transform duration-300" @click="$router.push('/')">
            <img src="./assets/logo.svg" alt="Logo" class="h-16 w-auto"/>
            <div class="flex flex-col">
              <span class="text-2xl font-bold text-gray-800">ANNA UNIVERSITY</span>
              <span class="text-lg text-gray-600">Regional Campus Coimbatore</span>
            </div>
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden lg:flex items-center space-x-1">
            <!-- Life@aurcc Dropdown -->
            <div class="relative group">
              <button class="px-4 py-2 text-gray-700 hover:text-blue-600 group-hover:text-blue-600 transition-colors duration-300">
                Life@aurcc
                <span class="inline-block ml-1 transform group-hover:rotate-180 transition-transform duration-300">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <button class="px-4 py-2 text-gray-700 hover:text-blue-600 group-hover:text-blue-600 transition-colors duration-300">
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
              <button class="px-4 py-2 text-gray-700 hover:text-blue-600 group-hover:text-blue-600 transition-colors duration-300">
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
              <button class="px-4 py-2 text-gray-700 hover:text-blue-600 group-hover:text-blue-600 transition-colors duration-300">
                Departments
                <span class="inline-block ml-1 transform group-hover:rotate-180 transition-transform duration-300">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </span>
              </button>
              <div class="dropdown-menu w-56">
                <RouterLink v-for="link in mobileSections[3].links" 
                          :key="link.route" 
                          :to="link.route"
                          class="dropdown-item">
                  {{ link.name }}
                </RouterLink>
              </div>
            </div>

            <!-- Offices Dropdown -->
            <div class="relative group">
              <button class="px-4 py-2 text-gray-700 hover:text-blue-600 group-hover:text-blue-600 transition-colors duration-300">
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
                  class="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-300">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
           class="lg:hidden fixed inset-0 z-50 bg-gray-900/50 backdrop-blur-sm"
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
              <span class="font-semibold text-lg">Menu</span>
              <button @click="isMobileMenuOpen = false" 
                      class="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>

            <!-- Navigation Links -->
            <nav class="overflow-y-auto h-[calc(100vh-5rem)] py-2">
              <div class="p-4 space-y-2">
                <div v-for="(section, index) in mobileSections" :key="section.name" class="border-b border-gray-100 last:border-0 pb-2">
                  <button @click="section.isOpen = !section.isOpen"
                          class="w-full flex items-center justify-between py-3 text-gray-700 hover:text-blue-600 transition-colors duration-300">
                    <span class="font-medium">{{ section.name }}</span>
                    <svg class="w-5 h-5 transform transition-transform duration-300"
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
                                class="block py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                                @click="isMobileMenuOpen = false">
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

    <RouterView />

    <!-- Modern Footer -->
    <footer class="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
          <!-- University Info -->
          <div class="space-y-4">
            <h3 class="text-xl font-bold">Anna University</h3>
            <p class="text-gray-300">Regional Campus Coimbatore</p>
            <address class="text-gray-300 not-italic">
              Maruthamalai Main Road<br>
              Somayampalayam<br>
              Coimbatore - 641046<br>
              Tamil Nadu, India
            </address>
          </div>

          <!-- Quick Links -->
          <div class="space-y-4">
            <h3 class="text-xl font-bold">Quick Links</h3>
            <ul class="space-y-2">
              <li><RouterLink to="/academics" class="text-gray-300 hover:text-white transition-colors duration-300">Academics</RouterLink></li>
              <li><RouterLink to="/admissions" class="text-gray-300 hover:text-white transition-colors duration-300">Admissions</RouterLink></li>
              <li><RouterLink to="/research" class="text-gray-300 hover:text-white transition-colors duration-300">Research</RouterLink></li>
            </ul>
          </div>

          <!-- Resources -->
          <div class="space-y-4">
            <h3 class="text-xl font-bold">Resources</h3>
            <ul class="space-y-2">
              <li><RouterLink to="/library" class="text-gray-300 hover:text-white transition-colors duration-300">Library</RouterLink></li>
              <li><RouterLink to="/careers" class="text-gray-300 hover:text-white transition-colors duration-300">Careers</RouterLink></li>
              <li><RouterLink to="/events" class="text-gray-300 hover:text-white transition-colors duration-300">Events</RouterLink></li>
            </ul>
          </div>

          <!-- Social Links -->
          <div class="space-y-4">
            <h3 class="text-xl font-bold">Connect With Us</h3>
            <div class="flex space-x-4">
              <RouterLink v-for="(img, index) in ['AN-logo.png', '2000px-TamilNadu_Logo.svg.png', 'india.png']"
                       :key="index"
                       to="#"
                       class="transition-transform hover:scale-110 duration-300">
                <img :src="`./assets/${img}`" :alt="`Logo ${index + 1}`" class="w-10 h-10 rounded-full bg-white p-1"/>
              </RouterLink>
            </div>
          </div>
        </div>

        <!-- Copyright -->
        <div class="mt-12 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; {{ new Date().getFullYear() }} Anna University Regional Campus Coimbatore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
/* Additional styling for enhanced animations */
.router-link-active {
  @apply text-blue-600 font-medium;
}

/* Smooth scroll behavior for the whole page */
html {
  scroll-behavior: smooth;
}

/* Desktop dropdown styling */
.dropdown-menu {
  @apply absolute z-50 left-0 mt-1 w-48 bg-white rounded-md shadow-lg 
         opacity-0 invisible transform -translate-y-2 
         group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 
         transition-all duration-300 ease-in-out;
}

.dropdown-item {
  @apply block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 
         hover:text-blue-600 transition-colors duration-200;
}

/* Mobile menu animations */
.mobile-menu-closed {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
}

.mobile-menu-open {
  max-height: 500px;
  opacity: 1;
  overflow: hidden;
}

.mobile-menu-container {
  padding-left: 1rem;
  padding-bottom: 0.75rem;
  overflow: hidden;
}

/* Prevent transition flicker */
.transition-gpu {
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}

/* Apply smooth transitions to all interactive elements */
button, a {
  transition-property: all;
  transition-duration: 300ms;
}

/* Fix for mobile menu transition */
@media (max-width: 1023px) {
  body.menu-open {
    overflow: hidden;
  }
}
</style>

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
            { name: "Curriculam & Syllabus", route: "/curriculam_syllabus" },
            { name: "Regulation", route: "/regulation" },
            { name: "Student Affairs", route: "/student_affairs" },
          ],
        },
        {
          name: "Departments",
          isOpen: false,
          links: [
            { name: "Computer Science", route: "/departments/cse" },
            { name: "Electrical & Electronics", route: "/departments/eee" },
            { name: "Electronics & communication", route: "/departments/ece" },
            { name: "Mechanical", route: "/departments/mech" },
            { name: "MBA", route: "/departments/mba" },
            { name: "Science & Humanities", route: "/s&h" },
          ],
        },
        {
          name: "Offices",
          isOpen: false,
          links: [
            { name: "Admission", route: "/admission" },
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