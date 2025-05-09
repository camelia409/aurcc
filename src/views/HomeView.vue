<template>
  <div class="">        
    <main class="">
   <!-- Hero Section - Modern Parallax Effect -->
   <section class="relative h-screen flex items-center justify-center overflow-hidden">
         <!-- Background Image -->
         <div class="absolute inset-0 ">
           <img 
             src="/src/assets/Drone_shot.jpg" 
             alt="Campus" 
             class="h-full w-full object-cover scale-110 transform transition-transform duration-10000 animate-subtle-zoom"
           >
           <!-- Gradient Overlay -->
           <div class="absolute inset-0 opacity-35 bg-slate-950"></div>
         </div>
 
         <!-- Ensure Text is Visible -->
         <div class="relative text-center px-4 max-w-5xl mx-auto z-20">
           <h1 class="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight">
             <span class="block">Welcome to</span>
             <span class="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-200 mt-2">
               Anna University
             </span>
           </h1>
           <p class="text-xl md:text-2xl text-blue-200">
             Shaping Tomorrow's Leaders Today
           </p>
           <div class="mt-10">
             <a href="#programs" class="inline-block px-8 py-4 bg-white text-blue-900 rounded-full font-semibold 
               transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
               Explore Programs
             </a>
           </div>
         </div>
       </section>


      <!-- Floating Stats Cards with 3D Effect -->
      <section class="container mx-auto px-14 relative -mt-32 z-30 px-4 mb-20">
        <div class="container mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="group perspective">
              <div class="stat-card-3d transform transition-transform duration-500 preserve-3d group-hover:rotate-y-12">
                <div class="stat-front">
                  <div class="stat-icon-wrapper">
                    <div class="stat-icon-circle">
                      <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <svg class=" mb-2 w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                      </svg>
                      </svg>
                    </div>
                  </div>
                  <h3 class="stat-value">X,000+</h3>
                  <p class="stat-label">Global Alumni</p>
                </div>
              </div>
            </div>
            <div class="group perspective">
              <div class="stat-card-3d transform transition-transform duration-500 preserve-3d group-hover:rotate-y-12">
                <div class="stat-front">
                  <div class="stat-icon-wrapper">
                    <div class="stat-icon-circle">
                      <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <svg class=" mb-2 w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                          <path d="M4 22h16"></path>
                          <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                          <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                          <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                        </svg>
                      </svg>
                    </div>
                  </div>
                  <h3 class="stat-value">7 th </h3>
                  <p class="stat-label">Rank in Coimbatore For TNEA </p>
                </div>
              </div>
            </div>
            <div class="group perspective">
              <div class="stat-card-3d transform transition-transform duration-500 preserve-3d group-hover:rotate-y-12">
                <div class="stat-front">
                  <div class="stat-icon-wrapper">
                    <div class="stat-icon-circle">
                      <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <svg class=" mb-2 w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                          <polyline points="17 6 23 6 23 12"></polyline>
                        </svg>
                      </svg>
                    </div>
                  </div>
                  <h3 class="stat-value">17 Years</h3>
                  <p class="stat-label">Of delivering quality education</p>
                </div>
              </div>
            </div>
            <div class="group perspective">
              <div class="stat-card-3d transform transition-transform duration-500 preserve-3d group-hover:rotate-y-12">
                <div class="stat-front">
                  <div class="stat-icon-wrapper">
                    <div class="stat-icon-circle">
                      <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <svg class=" mb-2 w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <circle cx="12" cy="8" r="7"></circle>
                          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                        </svg>
                      </svg>
                    </div>
                  </div>
                  <h3 class="stat-value">Anna Univ</h3>
                  <p class="stat-label">Reginal Campus</p>
                </div>
              </div>
            </div>
            <!-- Add other stat cards -->
          </div>
        </div>
      </section>

      <!-- About Section with Modern Design -->
      <section id="about" class="container mx-auto px-14 relative py-20  overflow-hidden">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <!-- Main Content Area - Takes 8 of 12 columns on large screens -->
            <div class="lg:col-span-8 space-y-10">
              <!-- Section Title with Animated Underline -->
              <h2 class="text-4xl md:text-5xl font-bold text-blue-900 relative  group">
                  ABOUT OUR CAMPUS
                  <span class="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-1 w-52 bg-yellow-500"></span>
              </h2>
              <!-- About Text Card with Subtle Animation -->
              <div class="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-8 border border-blue-200">
                <p class="text-lg text-gray-700 leading-relaxed">
                  The Regional Campus Coimbatore of Anna University, established in 2012, offers world-class education in Engineering and Technology. Nestled in a serene environment away from the city's hustle, our campus boasts state-of-the-art infrastructure and a team of highly qualified faculty members. The Department of Computer Science and Engineering aims at producing technically competent professionals who can excel in today's age of technology. Recognizing its role in engineering education, generation, and dissemination, the department is equipped with state-of-the-art facilities and relevant technologies. Computer Science or Computing Science is the scientific and mathematical approach to computation, specifically referring to the design of computing machines and processes.
                </p>
              </div>

              <!-- News and Events Cards with Modern Design -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- News/Admissions Card -->
                <div class="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-blue-200">
                  <div class="bg-gradient-to-r from-blue-600 to-indigo-600 py-4 px-6 flex items-center justify-between">
                    <h3 class="text-xl font-semibold text-white">News & Admissions</h3>
                    <div class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="max-h-[300px] overflow-hidden">
                    <ul class="events-scroll w-full divide-y divide-gray-100">
                      <li v-for="(item, index) in news" :key="index" class="flex items-center py-3 px-6 hover:bg-blue-50 transition-colors duration-200 group cursor-pointer">
                        <div class="mr-3 flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                        <span class="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300 ease-out">{{ item }}</span>
                      </li>
                      <li class="flex items-center py-3 px-6 text-blue-600 font-medium group cursor-pointer hover:bg-blue-50">
                        <span class="flex items-center transform group-hover:translate-x-1 transition-transform duration-300">
                          View All Announcements
                          <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                          </svg>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <!-- Events/Scholarships Card -->
                <div class="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-blue-200">
                  <div class="bg-gradient-to-r from-indigo-600 to-blue-600 py-4 px-6 flex items-center justify-between">
                    <h3 class="text-xl font-semibold text-white">Events & Scholarships</h3>
                    <div class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="max-h-[300px] overflow-hidden">
                    <ul class="events-scroll w-full divide-y divide-gray-100">
                      <li v-for="(str, index) in events" :key="index" class="py-3 px-6 hover:bg-blue-50 transition-colors duration-200 group cursor-pointer">
                        <div class="flex items-center">
                          <div class="mr-3 flex-shrink-0 w-2 h-2 bg-indigo-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                          <span class="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300 ease-out">{{ str }}</span>
                        </div>
                      </li>
                      <li class="flex items-center py-3 px-6 text-indigo-600 font-medium group cursor-pointer hover:bg-blue-50">
                        <span class="flex items-center transform group-hover:translate-x-1 transition-transform duration-300">
                          View All Events
                          <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                          </svg>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <!-- Quick Links Section - Takes 4 of 12 columns on large screens -->
            <div class="lg:col-span-4">
              <div class="bg-gradient-to-br from-blue-900 to-indigo-900 backdrop-blur-md rounded-xl shadow-xl p-6 sticky">
                <h3 class="text-4xl font-bold text-white mb-6 pb-3 border-b border-white/20 flex items-center">
                  <svg class="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
                  </svg>
                  Quick Links
                </h3>
                
                <div class="space-y-3">
                  <!-- Online Grievance -->
                  <div class="group">
                    <div class="bg-white/10 hover:bg-white/20 rounded-lg p-4 flex items-center space-x-3 transition-all duration-300 transform hover:translate-x-2 cursor-pointer">
                      <div class="bg-blue-500/20 p-2 rounded-full">
                        <svg class="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-4l-4 4z"></path>
                        </svg> 
                      </div>
                      <h3 class="text-xl text-white font-medium">Help Desk</h3>
                    </div>
                  </div>
                  <!-- AICTE & MOE Cell -->
                  <div class="group">
                    <div class="bg-white/10 hover:bg-white/20 rounded-lg p-4 flex items-center space-x-3 transition-all duration-300 transform hover:translate-x-2 cursor-pointer">
                      <div class="bg-blue-500/20 p-2 rounded-full">
                        <svg class="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                        </svg>
                      </div>
                      <h3 class="text-xl text-white font-medium">AICTE & MOE CELL</h3>
                    </div>
                  </div>

                  <!-- Mandatory Disclosure -->
                  <a href="https://drive.google.com/file/d/1z8ioKdQN0-fvahtIfneCPJI6i7j-YaFz/view" target="_blank" class="block group">
                    <div class="bg-white/10 hover:bg-white/20 rounded-lg p-4 flex items-center space-x-3 transition-all duration-300 transform hover:translate-x-2">
                      <div class="bg-indigo-500/20 p-2 rounded-full">
                        <svg class="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                      </div>
                      <h3 class="text-xl text-white font-medium">Mandatory Disclosure</h3>
                    </div>
                  </a>

                  <!-- Anti Ragging Cell -->
                  <div class="group">
                    <div class="bg-white/10 hover:bg-white/20 rounded-lg p-4 flex items-center space-x-3 transition-all duration-300 transform hover:translate-x-2 cursor-pointer">
                      <div class="bg-red-500/20 p-2 rounded-full">
                        <svg class="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                        </svg>
                      </div>
                      <h3 class="text-xl text-white font-medium">Anti Ragging Cell</h3>
                    </div>
                  </div>

                  <!-- POSH CELL -->
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLScKl-8gkctBfoE_E0wYdYM6lhZ_GOUVKErLfBXQQLx7jfkPJQ/viewform" target="_blank" class="block group">
                    <div class="bg-white/10 hover:bg-white/20 rounded-lg p-4 flex items-center space-x-3 transition-all duration-300 transform hover:translate-x-2">
                      <div class="bg-purple-500/20 p-2 rounded-full">
                        <svg class="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                      </div>
                      <h3 class="text-xl text-white font-medium">POSH CELL</h3>
                    </div>
                  </a>

                  <!-- Differently Abled Cell -->
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSdCUoPQpO0ZUonxAatNpgkXzVTqiTW6tVsUSViTVjkNRasMkA/viewform" target="_blank" class="block group">
                    <div class="bg-white/10 hover:bg-white/20 rounded-lg p-4 flex items-center space-x-3 transition-all duration-300 transform hover:translate-x-2">
                      <div class="bg-blue-400/20 p-2 rounded-full">
                        <svg class="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                      <h3 class="text-xl text-white font-medium">Differently Abled Cell</h3>
                    </div>
                  </a>

                  <!-- Prevention of Caste -->
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSct1Nzh8zasrBf1pL8TQeDVLpNTckhwPYJw8L_JAL4-e-VRrA/viewform" target="_blank" class="block group">
                    <div class="bg-white/10 hover:bg-white/20 rounded-lg p-4 flex items-center space-x-3 transition-all duration-300 transform hover:translate-x-2">
                      <div class="bg-green-500/20 p-2 rounded-full">
                        <svg class="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                        </svg>
                      </div>
                      <h3 class="text-xl text-white font-medium">Prevention of Caste</h3>
                    </div>
                  </a>

                  <!-- Anti-Drugs -->
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSenLuIhWEHNtty-CA7a2hMufyxj1sFLd-ET4geM3VvwN3KoHg/viewform" target="_blank" class="block group">
                    <div class="bg-white/10 hover:bg-white/20 rounded-lg p-4 flex items-center space-x-3 transition-all duration-300 transform hover:translate-x-2">
                      <div class="bg-orange-500/20 p-2 rounded-full">
                        <svg class="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                        </svg>
                      </div>
                      <h3 class="text-xl text-white font-medium">Anti-Drugs</h3>
                    </div>
                  </a>

                  <!-- Online Grievance -->
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLScNS4VLaepGgelMcCyQXkE0KyPLKUws4YQQeTmdvZDQKFFjJg/viewform" target="_blank" class="block group">
                    <div class="bg-white/10 hover:bg-white/20 rounded-lg p-4 flex items-center space-x-3 transition-all duration-300 transform hover:translate-x-2">
                      <div class="bg-teal-500/20 p-2 rounded-full">
                        <svg class="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-4l-4 4z"></path>
                        </svg>
                      </div>
                      <h3 class="text-xl text-white font-medium">Online Grievance</h3>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Programs Showcase with Horizontal Scroll -->
      <section id="programs" class="py-20 bg-gradient-to-b from-white to-blue-50/50">
        <div class="container mx-auto px-20">
          <h2 class="text-4xl font-bold text-center mb-16 text-[#21209c] relative inline-block mx-auto">
            PROGRAMS OFFERED
            <span class="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-yellow-500"></span>
          </h2>
          <div class="mt-16 relative">
            <div class="program-scroll-container scrollbar-hide">
              <div class="program-scroll-wrapper">
                <!-- Program Cards -->
                <div class="program-card">
                  <div class="program-icon bg-blue-500">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 class="program-title">Computer Science</h3>
                  <p class="program-description">
                    Advanced computing, AI, and software engineering
                  </p>
                  <a href="departments/cse" class="program-link">Learn More →</a>
                </div>

                <!-- Electrical -->
                <div class="program-card">
                  <div class="program-icon bg-yellow-500">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 class="program-title">Electrical Engineering</h3>
                  <p class="program-description">
                    Power systems, control systems, and electrical machines
                  </p>
                  <a href="departments/eee" class="program-link">Learn More →</a>
                </div>

                <!-- ECE -->
                <div class="program-card">
                  <div class="program-icon bg-green-500">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <h3 class="program-title">Electronics & Communication</h3>
                  <p class="program-description">
                    Digital electronics, communication systems, and signal processing
                  </p>
                  <a href="departments/ece" class="program-link">Learn More →</a>
                </div>

                <!-- Mechanical -->
                <div class="program-card">
                  <div class="program-icon bg-red-500">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 class="program-title">Mechanical Engineering</h3>
                  <p class="program-description">
                    Design, manufacturing, and thermal engineering
                  </p>
                  <a href="departments/mech" class="program-link">Learn More →</a>
                </div>

                <!-- MBA -->
                <div class="program-card">
                  <div class="program-icon bg-purple-500">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 class="program-title">MBA</h3>
                  <p class="program-description">
                    Business administration, management, and leadership
                  </p>
                  <a href="departments/mba" class="program-link">Learn More →</a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

            <!-- Dean's Message Section - Modern Glass Design -->
            <section id="deans-message" class="py-24 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <div class="container mx-auto px-6">
          <h2 class="text-4xl font-bold text-center mb-12">From the Dean's Desk</h2>
          <div class="flex flex-col md:flex-row items-center bg-white bg-opacity-10 rounded-lg shadow-xl overflow-hidden backdrop-filter backdrop-blur-lg">
            <div class="md:w-1/3">
              <img src="../assets/Dean.webp" alt="Dean's Photo" class="w-full h-full object-cover" />
            </div>
            <div class="md:w-2/3 p-8">
              <h3 class="text-3xl font-semibold mb-4">Dr. Saravanan Kumar</h3>
              <p class="text-indigo-200 mb-6 italic">"Empowering the next generation of innovators and leaders."</p>
              <p class="mb-4">
                Welcome to Anna University! Our institution stands at the forefront of technological education and research. We are committed to nurturing not just skilled professionals, but visionary leaders who will shape the future of our society.
              </p>
              <p class="mb-4">
                Our world-class faculty, cutting-edge facilities, and industry partnerships provide an unparalleled learning environment. We encourage our students to push boundaries, think critically, and innovate fearlessly.
              </p>
              <p>
                Join us in this exciting journey of discovery and growth. Together, let's build a brighter, more sustainable future through the power of education and technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" class="py-20 bg-white overflow-hidden w-full">
        <div class="container mx-auto px-20">
          <h2 class="text-4xl font-bold text-center mb-16 text-[#21209c] relative inline-block mx-auto">
            Gallery of Memories
            <span class="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-yellow-500"></span>
          </h2>
          
          <div class="relative flex items-center justify-center">
            <button @click="prevImage" class="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-[#21209c]/80 text-white p-3 rounded-full cursor-pointer hover:bg-[#21209c] transition-colors z-30 focus:outline-none shadow-lg">
              <!-- Left arrow SVG -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div class="w-full md:w-3/4 lg:w-3/5" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
              <div class="flex transition-transform duration-700 ease-in-out" :style="{ transform: `translateX(-${currentImageIndex * 100}%)` }">
                <div v-for="(image, index) in galleryImages" :key="index" class="flex-shrink-0 w-full px-4">
                  <div class="relative group overflow-hidden rounded-xl shadow-2xl">
                    <img :src="image.src" :alt="image.alt" class="w-full h-64 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                      <p class="text-white text-lg md:text-xl p-6 transform transition-transform duration-300 translate-y-0 group-hover:translate-y-0">{{ image.description }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <button @click="nextImage" class="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 bg-[#21209c]/80 text-white p-3 rounded-full cursor-pointer hover:bg-[#21209c] transition-colors z-30 focus:outline-none shadow-lg">
              <!-- Right arrow SVG -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          <div class="flex justify-center mt-8">
            <!-- Improved gallery navigation dots -->
            <div class="flex space-x-2">
              <button 
                v-for="(image, index) in galleryImages" 
                :key="index" 
                @click="goToImage(index)" 
                class="h-1 w-4 md:w-8 mx-1 focus:outline-none transition-colors rounded-full shadow-sm hover:shadow-md transform hover:scale-105 duration-300"
                :class="index === currentImageIndex ? 'bg-indigo-600' : 'bg-indigo-300'"
              ></button>
            </div>
          </div>
        </div>
      </section>




      <!-- Chatbot button -->
      <button
        onclick="document.getElementById('my_modal_5').showModal()"
        class="btn fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg z-50"
      >
        💬 Help Desk
      </button>

      <!-- Chatbot Interface -->
      <dialog id="my_modal_5" class="modal">
        <div class="modal-box p-0 w-80 shadow-lg rounded-lg fixed bottom-20 right-4 md:right-10">
          <!-- Modal Header -->
          <div class="flex justify-between items-center bg-blue-600 p-4 rounded-t-lg text-white">
            <h2 class="text-lg font-semibold">Support Chatbot</h2>
            <button
              onclick="document.getElementById('my_modal_5').close()"
              class="btn btn-sm btn-circle btn-ghost text-white"
              aria-label="Close"
            >
              ✖
            </button>
          </div>
          <!-- Chat Log -->
          <div class="p-4 h-64 overflow-y-auto bg-gray-50" ref="chatContainer">
            <div
              v-for="(chat, index) in chatLog"
              :key="index"
              class="mb-4"
              :class="chat.sender === 'user' ? 'chat chat-end' : 'chat chat-start'"
            >
              <div
                class="chat-bubble chat-bubble-accent"
                v-if="chat.sender === 'user'"
                :style="{ animation: 'popIn 0.4s ease-out' }"
              >
                {{ chat.message }}
              </div>
              <div
                class="chat-bubble chat-bubble-primary"
                v-if="chat.sender === 'bot'"
                :style="{ animation: 'popIn 0.4s ease-out' }"
              >
                {{ chat.message }}
              </div>
            </div>
            <div v-if="loading" class="loading loading-dots loading-lg mx-auto"></div>
          </div>

          <!-- Input Area -->
          <div class="p-4 bg-gray-100 rounded-b-lg">
            <input
              v-model="userMessage"
              type="text"
              class="input input-bordered w-full"
              placeholder="Type your message..."
              @keyup.enter="sendMessage"
            />
            <button @click="sendMessage" class="btn btn-primary w-full mt-2">Send</button>
          </div>
        </div>
      </dialog>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: ['About', 'Programs', 'Testimonials', 'Contact'],
      mobileMenuOpen: false,
      showChatbot: false, // Controls visibility of chatbot
      chatLog: [], // Stores chat messages
      userMessage: "",
      sessionId: null,
      loading: false,
      programs: [
        { name: 'Computer Science Engineering', image: '../assets/cse.jpg', description: 'Learn cutting-edge technologies and software development.' },
        { name: 'Electrical Engineering', image: '../assets/ee.jpg', description: 'Explore power systems, control, and electrical machines.' },
        { name: 'Mechanical Engineering', image: '../assets/me.jpg', description: 'Study mechanics, thermodynamics, and manufacturing processes.' },
      ],
      form: {
        name: '',
        email: '',
        message: '',
      },
      testimonials: [
        {
          name: 'Adithya M',
          branch: 'EEE',
          batch: '2015 Batch',
          company: 'SIEMENS',
          message: 'I am truly proud to have graduated from Anna University. The exceptional opportunities provided here enabled me to excel in every aspect, leading to my employment at Siemens, Bangalore.',
          image: "../assets/pic1.webp",
        },
        {
          name: 'Pathi R',
          branch: 'CSE',
          batch: '2016 Batch',
          company: 'Google',
          message: 'My journey at Anna University was transformative. The rigorous curriculum and supportive faculty prepared me well for the challenges in the tech industry.',
          image: "../assets/pic2.webp",
        },
        {
          name: 'Priya S',
          branch: 'Mechanical',
          batch: '2017 Batch',
          company: 'Tesla',
          message: 'The hands-on experience and industry exposure at Anna University were invaluable. It gave me the confidence to pursue my dreams and land a job at Tesla.',
          image: "../assets/pic3.webp",
        },
      ],
      currentIndex: 0,
      galleryImages: [
        { src: 'src/assets/1.webp', alt: 'Gallery Image 1', description: 'This is a dummy event description, lykky means like you know you know' },
        { src: 'src/assets/cse-girls-closeup.webp', alt: 'Gallery Image 2', description: 'This is a dummy event description, lykky means like you know you know' },
        { src: 'src/assets/4.webp', alt: 'Gallery Image 2', description: 'This is a dummy event description, lykky means like you know you know' },
        { src: 'src/assets/computer-lab.webp', alt: 'Gallery Image 3', description: 'This is a dummy event description, lykky means like you know you know' },
        { src: 'src/assets/4.webp', alt: 'Gallery Image 2', description: 'This is a dummy event description, lykky means like you know you know' },
        { src: 'src/assets/cse-girls-closeup.webp', alt: 'Gallery Image 2', description: 'This is a dummy event description, lykky means like you know you know' },
      ],
      currentImageIndex: 1,
      news:[
        "This is news one just made testing purpose, and this has to be reasonably long you right and i thing this is enough",
        "List of the Selected Students under AICTE-Pragati Scholarship Scheme(Degree) - 2020-21",
        "Fees payment procedures for Admission - 2023",
        "Campus Placement Drive (2021 - 2025) - Batch Students - 'E-CON SYSTEMS'",
        "AICTE – SAKSHAM SCHOLARSHIP SCHEME FOR SPECIALLY-ABLED STUDENT (DEGREE) - 2020-21",
      ],
      events: [
        "This is events one just made testing purpose, and this has to be reasonably long you right and i thing this is enough",
        "Annd I will younk this a lot of times and then i will consider this is as a absolute win for me and you as well, but who are u btw.",
        "This is events one just made testing purpose, and this has to be reasonably long you right and i thing this is enough",
        "This is events one just made testing purpose, and this has to be reasonably long you right and i thing this is enough",
        "This is events one just made testing purpose, and this has to be reasonably long you right and i thing this is enough",
      ]
    };
  },
  computed: {
    prevImageSrc() {
      const prevIndex = (this.currentImageIndex - 1 + this.galleryImages.length) % this.galleryImages.length;
      return this.galleryImages[prevIndex].src;
    },
    nextImageSrc() {
      const nextIndex = (this.currentImageIndex + 1) % this.galleryImages.length;
      return this.galleryImages[nextIndex].src;
    }
  },
  created() {
    // Generate a session ID when the component is created
    this.sessionId = this.generateSessionId();
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
    goToSlide(index) {
      this.currentIndex = index;
    },
    goToImage(index){
      this.currentImageIndex = index;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex === 0) ? this.testimonials.length - 1 : this.currentIndex - 1;
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex === this.testimonials.length - 1) ? 0 : this.currentIndex + 1;
    },
    prevImage() {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.galleryImages.length) % this.galleryImages.length;
    },
    nextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.galleryImages.length;
    },
    toggleChatbot() {
      this.showChatbot = !this.showChatbot;
      console.log("clicked show chatbot")
    },
    async sendMessage() {
      this.loading = true;
      if (this.userMessage.trim() === "") return;

      // Add the user's message to the chat log
      this.chatLog.push({ sender: "user", message: this.userMessage });

      const userInput = this.userMessage;
      this.userMessage = ""; // Clear the input field

      // Scroll the chat container to the bottom after rendering the new message
      this.$nextTick(() => {
        const chatContainer = this.$refs.chatContainer;
        if (chatContainer) {
          chatContainer.scrollTop = chatContainer.scrollHeight;
        }
      });

      try {
        // Send the message to the backend, including the sessionId for context
        const response = await fetch("https://aurcc.onrender.com/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message: userInput,
            session_id: this.sessionId, // Send the session ID for context
          }),
        });

        if (!response.ok) {
          throw new Error(`Server error: ${response.status}`);
        }

        const data = await response.json();

        // Add the bot's response to the chat log
        this.chatLog.push({ sender: "bot", message: data.response });

        // Scroll to the bottom again after rendering the bot's response
        this.$nextTick(() => {
          const chatContainer = this.$refs.chatContainer;
          if (chatContainer) {
            chatContainer.scrollTop = chatContainer.scrollHeight;
          }
        });
      } catch (error) {
        console.error("Error while communicating with the chatbot:", error);
        this.chatLog.push({
          sender: "bot",
          message: "An error occurred. Please try again later.",
        });

        // Ensure scrolling works even in error scenarios
        this.$nextTick(() => {
          const chatContainer = this.$refs.chatContainer;
          if (chatContainer) {
            chatContainer.scrollTop = chatContainer.scrollHeight;
          }
        });
      } finally {
        this.loading = false;
      }
    },
    // Generate a simple unique session ID
    generateSessionId() {
      return "session-" + Math.random().toString(36).substr(2, 9);
    },
  },
};
</script>

<style scoped>
@keyframes slideUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes subtleZoom {
  from { transform: scale(1.1); }
  to { transform: scale(1.2); }
}

/* Modern Component Styles */
.perspective {
  perspective: 1000px;
}

.stat-card-3d {
  @apply bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-lg;
  transform-style: preserve-3d;
}

.stat-icon-wrapper {
  @apply mb-6 relative;
  transform: translateZ(20px);
}

.stat-icon-circle {
  @apply w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 
    flex items-center justify-center text-white;
}

.modern-section-title {
  @apply text-5xl font-bold text-center text-gray-900 relative;
  &::before {
    content: '';
    @apply absolute -bottom-4 left-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 
      transform -translate-x-1/2;
  }
}

.program-scroll-container {
  @apply overflow-x-auto;
  -webkit-overflow-scrolling: touch;
}

.program-scroll-wrapper {
  @apply flex space-x-6 py-4;
  width: max-content;
}

.program-card {
  @apply bg-white rounded-xl p-8 shadow-lg transform hover:-translate-y-2 transition-all duration-300;
}

.program-icon {
  @apply p-4 rounded-full text-white inline-block mb-6;
}

.program-title {
  @apply text-xl font-bold text-gray-900 mb-4;
}

.program-description {
  @apply text-gray-600 mb-6;
}

.program-link {
  @apply text-blue-500 font-semibold hover:text-blue-700 transition-colors;
}

/* Gradient Backgrounds */
.gradient-bg {
  @apply bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500;
  background-size: 200% 200%;
  animation: gradient 15s ease infinite;
}
/* Glass Card Effect */
.glass-card {
  @apply bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl;
}

/* Masonry Grid Layout */
.masonry-grid {
  @apply columns-1 md:columns-2 lg:columns-3 gap-6;
}

.masonry-item {
  @apply mb-6 break-inside-avoid;
}

/* Modern Hover Effects */
.hover-lift {
  @apply transition-all duration-300 ease-out;
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  }
}

/* Animation Keyframes */
@keyframes fadeScale {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Utility Classes */
.animate-fade-scale {
  animation: fadeScale 0.6s ease-out forwards;
}

/* Responsive Design Utilities */
@screen md {
  .masonry-grid {
    column-gap: 1.5rem;
  }
}

@screen lg {
  .masonry-grid {
    column-gap: 2rem;
  }
} 

/* Custom Scrollbar */
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
}

@keyframes scroll {
  0% { transform: translateY(0); }
  100% { transform: translateY(calc(-100% + 300px)); }
}

.news-scroll, .events-scroll {
  animation: scroll 20s linear infinite;
  padding-bottom: 300px;
}

.news-scroll:hover, .events-scroll:hover {
  animation-play-state: paused;
}

/* Animated List Styling */
.animated-list {
  list-style: none;
  padding-left: 0;
}

.animated-list li {
  position: relative;
  padding-left: 20px;
  transition: all 0.3s ease;
}

.animated-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 3px;
  height: 0;
  background-color: #3B82F6;
  transition: height 0.3s ease;
}

.animated-list li:hover::before {
  height: 80%;
}

/* Existing Hover Effects */
.hover-shadow:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.3s ease;
}
</style>
