<template>
  <main>
    <!-- Hero Section with Parallax Effect -->
    <section class="relative h-[40vh] flex items-center justify-center overflow-hidden">
      <!-- Background with Gradient Overlay -->
      <div class="absolute inset-0 -z-10 bg-gradient-to-r from-blue-700 to-indigo-800"></div>
      
      <!-- Content -->
      <div class="relative text-center px-4 max-w-4xl mx-auto z-20">
        <h1 class="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Website <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-200">Development Team</span>
        </h1>
        <p class="text-lg md:text-xl text-blue-200">
          Meet the creative minds behind our university website
        </p>
      </div>
    </section>

    <!-- Team Section with Modern Cards -->
    <section class="py-16 px-4 bg-gray-50">
      <div class="container mx-auto max-w-6xl">
        <!-- Section Title with Animated Underline -->
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-blue-900 relative inline-block group">
            OUR TEAM
            <span class="absolute -bottom-3 left-0 h-1 w-full bg-yellow-500 transform origin-left transition-transform duration-300 group-hover:scale-x-110"></span>
          </h2>
        </div>

        <!-- Team Grid with Modern Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Team Member Card with Enhanced Styling -->
          <div
            v-for="member in teamMembers"
            :key="member.name"
            class="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100 transform hover:translate-y-[-5px] hover:shadow-xl transition-all duration-300"
          >
            <!-- Member Photo with Circular Crop and Gradient Border -->
            <div class="relative pt-8 pb-4 flex justify-center">
              <div class="absolute inset-0 h-1/2 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
              <div class="relative">
                <img
                  :src="getImagePath(member.photo)"
                  alt="Profile"
                  class="w-32 h-32 object-cover rounded-full border-4 border-white shadow-md"
                />
              </div>
            </div>
            
            <!-- Member Info with Enhanced Typography -->
            <div class="p-6 text-center">
              <h3 class="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">
                {{ member.name }}
              </h3>
              <p class="text-gray-600">{{ member.department }}</p>
              
              <!-- Social Media Icons -->
              <div class="flex justify-center space-x-3 mt-4">
                <a href="#" class="text-gray-400 hover:text-blue-600 transition-colors duration-300">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.5 12.063c0-5.799-4.702-10.5-10.5-10.5s-10.5 4.701-10.5 10.5c0 5.244 3.839 9.598 8.958 10.378v-7.342h-2.696v-3.036h2.696v-2.31c0-2.663 1.587-4.13 4.013-4.13 1.16 0 2.37.215 2.37.215v2.609h-1.335c-1.318 0-1.728.815-1.728 1.653v1.962h2.944l-.471 3.036h-2.473v7.343c5.119-.781 8.957-5.134 8.957-10.379"></path>
                  </svg>
                </a>
                <a href="#" class="text-gray-400 hover:text-blue-500 transition-colors duration-300">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </svg>
                </a>
                <a href="#" class="text-gray-400 hover:text-indigo-600 transition-colors duration-300">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
                <a href="#" class="text-gray-400 hover:text-pink-500 transition-colors duration-300">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Development Process Section -->
    <section class="py-16 px-4 bg-white">
      <div class="container mx-auto max-w-6xl">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-blue-900 relative inline-block group">
            DEVELOPMENT PROCESS
            <span class="absolute -bottom-3 left-0 h-1 w-full bg-yellow-500 transform origin-left transition-transform duration-300 group-hover:scale-x-110"></span>
          </h2>
        </div>

        <!-- Process Steps with Timeline -->
        <div class="relative">
          <!-- Timeline Line -->
          <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-100"></div>
          
          <!-- Process Steps -->
          <div class="grid grid-cols-1 gap-12">
            <!-- Step 1 -->
            <div class="relative">
              <div class="flex items-center justify-center mb-4">
                <div class="z-10 flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full text-white font-bold text-lg">1</div>
              </div>
              <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100 max-w-xl mx-auto">
                <div class="bg-gradient-to-r from-blue-600 to-indigo-600 py-3 px-6">
                  <h3 class="text-lg font-semibold text-white">Planning & Design</h3>
                </div>
                <div class="p-6">
                  <p class="text-gray-600">We started by analyzing user needs and planning the website architecture. Our designers created wireframes and mockups to visualize the modern interface.</p>
                </div>
              </div>
            </div>
            
            <!-- Step 2 -->
            <div class="relative">
              <div class="flex items-center justify-center mb-4">
                <div class="z-10 flex items-center justify-center w-12 h-12 bg-indigo-600 rounded-full text-white font-bold text-lg">2</div>
              </div>
              <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100 max-w-xl mx-auto">
                <div class="bg-gradient-to-r from-indigo-600 to-blue-600 py-3 px-6">
                  <h3 class="text-lg font-semibold text-white">Development</h3>
                </div>
                <div class="p-6">
                  <p class="text-gray-600">Using Vue.js and Tailwind CSS, we built a responsive and modern website with attention to performance and user experience. We implemented component-based architecture for maintainability.</p>
                </div>
              </div>
            </div>
            
            <!-- Step 3 -->
            <div class="relative">
              <div class="flex items-center justify-center mb-4">
                <div class="z-10 flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full text-white font-bold text-lg">3</div>
              </div>
              <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100 max-w-xl mx-auto">
                <div class="bg-gradient-to-r from-blue-600 to-indigo-600 py-3 px-6">
                  <h3 class="text-lg font-semibold text-white">Testing & Deployment</h3>
                </div>
                <div class="p-6">
                  <p class="text-gray-600">Rigorous testing was performed across different devices and browsers to ensure compatibility. The website was then deployed with continuous integration for easy updates.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      teamMembers: [
        { name: "Janarthanan G", department: "Dept of AI & DS", photo: "janarthanan.webp" },
        { name: "Subramaniyasiva S", department: "Dept of AI & DS", photo: "subramaniyasiva.webp" },
        { name: "Abinandida R", department: "Dept of AI & DS", photo: "abinandida.webp" },
        { name: "Ritik Naakendiran D", department: "Dept of AI & DS", photo: "ritik.webp" },
      ],
    };
  },
  methods: {
    getImagePath(filename) {
      return new URL(`../assets/${filename}`, import.meta.url).href;
    },
  },
};
</script>

<style scoped>
/* Animation for team cards */
@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
</style>
