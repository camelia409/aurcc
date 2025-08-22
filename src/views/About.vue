<template>
  <main>
    <!-- Hero Section with Parallax Effect -->
    <section class="relative h-[45vh] flex items-center justify-center overflow-hidden bg-[#f0f6ff]">
      <!-- Animated Floating Dots Background -->
      <div class="absolute inset-0 pointer-events-none z-0">
        <svg width="100%" height="100%" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <circle v-for="i in 18" :key="i" :cx="Math.random()*1200" :cy="Math.random()*300" :r="Math.random()*2+1" fill="#b3c6ff" opacity="0.5" />
        </svg>
      </div>
      <!-- Dark, High-Contrast Tech Background Image -->
      <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80" alt="Tech Hero" class="absolute inset-0 w-full h-full object-cover object-center -z-10" />
      <!-- Dark Overlay for Readability -->
      <div class="absolute inset-0 -z-10 bg-black opacity-70"></div>
      <!-- Gradient Overlay for Depth -->
      <div class="absolute inset-0 -z-10 bg-gradient-to-br from-blue-900/80 via-indigo-700/60 to-purple-800/70"></div>
      <!-- Hero Content Directly on Background -->
      <div class="relative z-20 px-4 w-full max-w-2xl mx-auto animate-fade-in text-center">
        <h1 class="mobile-text-2xl lg:mobile-text-4xl xl:mobile-text-5xl font-extrabold text-white mb-3 sm:mb-4 tracking-tight relative" style="text-shadow: 0 4px 16px #000, 0 1px 2px #000;">
          Website <span style="color: #fff; text-shadow: 0 4px 16px #000, 0 1px 2px #000;">Development Team</span>
          <span class="block h-1 w-16 sm:w-20 lg:w-24 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full mx-auto mt-2 sm:mt-3 animate-underline"></span>
        </h1>
        <p class="mobile-text-base lg:mobile-text-lg xl:mobile-text-xl font-semibold mb-2" style="color: #fff; text-shadow: 0 2px 8px #000, 0 1px 2px #000;">Meet the creative minds behind our university website</p>
      </div>
    </section>

    <!-- Team Section with Modern Cards -->
    <section class="py-8 sm:py-12 lg:py-16 px-4 bg-gray-50">
      <div class="mobile-container max-w-6xl">
        <!-- Section Title with Animated Underline -->
        <div class="text-center mb-8 sm:mb-12">
          <h2 class="mobile-text-2xl lg:mobile-text-3xl xl:mobile-text-4xl font-bold text-blue-900 relative inline-block group">
            OUR TEAM
            <span class="absolute -bottom-2 sm:-bottom-3 left-0 h-1 w-full bg-yellow-500 transform origin-left transition-transform duration-300 group-hover:scale-x-110"></span>
          </h2>
        </div>

        <!-- Team Grid with Modern Cards -->
        <div class="mobile-grid gap-6 sm:gap-8">
          <!-- Team Member Card with Enhanced Styling -->
          <div
            v-for="member in teamMembers"
            :key="member.name"
            class="mobile-card bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100 transform hover:translate-y-[-5px] hover:shadow-xl transition-all duration-300"
          >
            <!-- Member Photo with Circular Crop and Gradient Border -->
            <div class="relative pt-6 sm:pt-8 pb-3 sm:pb-4 flex justify-center">
              <div class="absolute inset-0 h-1/2 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
              <div class="relative">
                <img
                  :src="'/' + member.photo"
                  alt="Profile"
                  class="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 object-cover rounded-full border-4 border-white shadow-md"
                />
              </div>
            </div>
            
            <!-- Member Info with Enhanced Typography -->
            <div class="p-4 sm:p-6 text-center">
              <h3 class="mobile-text-lg lg:mobile-text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">
                {{ member.name }}
              </h3>
              <p class="mobile-text-sm lg:mobile-text-base text-gray-600">{{ member.department }}</p>
              
              <!-- Social Media Icons: Only LinkedIn and GitHub if present -->
              <div class="flex justify-center space-x-2 sm:space-x-3 mt-3 sm:mt-4">
                <a v-if="member.linkedin" :href="member.linkedin" target="_blank" rel="noopener" class="text-blue-600 hover:text-blue-800 transition-colors duration-300">
                  <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a v-if="member.github" :href="member.github" target="_blank" rel="noopener" class="text-gray-800 hover:text-black transition-colors duration-300">
                  <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.984-.399 3.003-.404 1.018.005 2.046.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.218.694.825.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Development Process Section -->
    <section class="py-8 sm:py-12 lg:py-16 px-4 bg-white">
      <div class="mobile-container max-w-6xl">
        <div class="text-center mb-8 sm:mb-12">
          <h2 class="mobile-text-2xl lg:mobile-text-3xl xl:mobile-text-4xl font-bold text-blue-900 relative inline-block group">
            DEVELOPMENT PROCESS
            <span class="absolute -bottom-2 sm:-bottom-3 left-0 h-1 w-full bg-yellow-500 transform origin-left transition-transform duration-300 group-hover:scale-x-110"></span>
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

<style scoped>
@keyframes fade-in {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fade-in 1.2s cubic-bezier(0.4,0,0.2,1) both;
}
@keyframes underline {
  from { width: 0; }
  to { width: 6rem; }
}
.animate-underline {
  animation: underline 1.2s cubic-bezier(0.4,0,0.2,1) 0.5s both;
}
</style>

<script>
export default {
  data() {
    return {
      teamMembers: [
        { name: "Janarthanan G", department: "Dept of AI & DS", photo: "janarthanan.webp", linkedin: "https://www.linkedin.com/in/janarthanangm/", github: "https://github.com/Janarthanan-Gnanamurthy" },
        { name: "Subramaniyasiva S", department: "Dept of AI & DS", photo: "subramaniyasiva.webp", linkedin: "https://www.linkedin.com/in/subramaniyasiva-s-2202a6258/", github: "https://github.com/Subramaniyasiva002" },
        { name: "Abinandida R", department: "Dept of AI & DS", photo: "abinandida.webp", linkedin: "https://www.linkedin.com/in/abinandida-r-377128258/", github: "https://github.com/camelia409" },
        { name: "Ritik Naakendiran D", department: "Dept of AI & DS", photo: "ritik.webp", linkedin: "https://www.linkedin.com/in/ritik-naakendiran-d-b01198258/", github: "https://github.com/Ritik050105" },
      ],
    };
  },
};
</script>