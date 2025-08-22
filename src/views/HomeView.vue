<template>
  <div class="">        
    <main class="">
   <!-- Hero Section - Modern Parallax Effect -->
   <section class="relative h-screen flex items-center justify-center overflow-hidden">
         <!-- Background Image -->
         <div class="absolute inset-0 ">
           <img 
             src="/Drone_shot.jpg" 
             alt="Campus" 
             class="h-full w-full object-cover scale-110 transform transition-transform duration-10000 animate-subtle-zoom"
           >
           <!-- Gradient Overlay -->
           <div class="absolute inset-0 opacity-35 bg-slate-950"></div>
         </div>
 
         <!-- Background sketch pattern -->
         <div class="absolute inset-0 overflow-hidden pointer-events-none opacity-5 mix-blend-overlay">
           <div class="absolute inset-0">
             <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
               <pattern id="circuit-pattern" width="200" height="200" patternUnits="userSpaceOnUse">
                 <path d="M50 0 L50 50 L100 50 M150 0 L150 50 L100 50 M100 50 L100 100 M0 100 L50 100 M50 100 L50 150 L100 150 M150 150 L200 150 M150 100 L150 200" fill="none" stroke="white" stroke-width="1.5"/>
                 <circle cx="50" cy="50" r="5" fill="white"/>
                 <circle cx="150" cy="50" r="5" fill="white"/>
                 <circle cx="100" cy="100" r="5" fill="white"/>
                 <circle cx="50" cy="150" r="5" fill="white"/>
                 <circle cx="150" cy="150" r="5" fill="white"/>
               </pattern>
               <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
             </svg>
           </div>
         </div>
 
         <!-- Ensure Text is Visible -->
         <div class="relative text-center px-4 sm:px-6 max-w-5xl mx-auto z-20">
           <h1 class="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
             <span class="block">Welcome to</span>
             <span class="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-200 mt-2">
               Anna University
             </span>
           </h1>
           <p class="text-lg sm:text-xl md:text-2xl text-blue-200 px-2">
             Shaping Tomorrow's Leaders Today
           </p>
           <div class="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
             <a href="#programs" class="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-900 rounded-full font-semibold 
               transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base">
               Explore Programs
             </a>
             <a href="#about" class="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white rounded-full font-semibold 
               transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base">
               Campus Tour
             </a>
           </div>
         </div>
       </section>


      <!-- Floating Stats Cards with 3D Effect -->
      <section class="mobile-container relative -mt-16 sm:-mt-20 md:-mt-24 lg:-mt-32 z-30 mb-12 sm:mb-16 lg:mb-20">
        <div class="mobile-container">
          <div class="mobile-grid">
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
                  <h3 class="stat-value">5,000+</h3>
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
                  <h3 class="stat-value">7th</h3>
                  <p class="stat-label">Rank in TNEA</p>
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
                  <h3 class="stat-value">20+ Years</h3>
                  <p class="stat-label">Of Excellence</p>
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
                  <h3 class="stat-value">100%</h3>
                  <p class="stat-label">Placement Record</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- About Section with Modern Design -->
      <section id="about" class="container mx-auto px-4 sm:px-8 lg:px-14 relative py-12 sm:py-16 lg:py-20 overflow-hidden">
        <!-- Background sketch pattern -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          <div class="absolute inset-0">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <pattern id="dots-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="#2563eb"/>
                <circle cx="20" cy="20" r="1" fill="#2563eb"/>
                <circle cx="38" cy="38" r="1" fill="#2563eb"/>
                <circle cx="2" cy="38" r="1" fill="#2563eb"/>
                <circle cx="38" cy="2" r="1" fill="#2563eb"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#dots-pattern)" />
            </svg>
          </div>
        </div>
        
        <div class="mobile-container">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
            <!-- Main Content Area - Takes 8 of 12 columns on large screens -->
            <div class="lg:col-span-8 space-y-10">
              <!-- Section Title with Animated Underline -->
              <h2 class="mobile-text-2xl lg:mobile-text-3xl font-bold text-blue-900 relative inline-block group">
                  ABOUT OUR CAMPUS
                  <span class="absolute -bottom-2 sm:-bottom-3 left-0 h-1 w-32 sm:w-40 lg:w-52 bg-yellow-500"></span>
              </h2>
              <!-- About Text Card with Subtle Animation -->
              <div class="mobile-card bg-white/80 backdrop-blur-sm shadow-xl border border-blue-200">
                <p class="mobile-text-base text-gray-700 leading-relaxed">
                  The Regional Campus Coimbatore of Anna University, established in 2012, offers world-class education in Engineering and Technology. Nestled in a serene environment away from the city's hustle, our campus boasts state-of-the-art infrastructure and a team of highly qualified faculty members dedicated to academic excellence.
                </p>
                <p class="mobile-text-base text-gray-700 leading-relaxed mt-4">
                  Our university is committed to holistic education with a focus on innovation, research, and industry collaboration. We provide an engaging learning environment where students can develop their technical skills, critical thinking abilities, and leadership qualities needed to excel in their chosen fields.
                </p>
                <p class="mobile-text-base text-gray-700 leading-relaxed mt-4">
                  The campus features modern laboratories, spacious classrooms, well-stocked libraries, and recreational facilities that enhance the overall student experience. Our commitment to excellence has earned us recognition as one of the top engineering institutions in the region.
                </p>
              </div>
              
              <!-- News and Events Cards with Modern Design -->
              <div class="mobile-grid">
                <!-- News/Admissions Card -->
                <div class="mobile-card bg-white/80 backdrop-blur-sm shadow-lg overflow-hidden border border-blue-200">
                  <div class="bg-gradient-to-r from-blue-600 to-indigo-600 py-3 sm:py-4 px-4 sm:px-6 flex items-center justify-between">
                    <h3 class="mobile-text-lg font-semibold text-white">News & Admissions</h3>
                    <div class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="max-h-[300px] overflow-hidden">
                    <ul class="events-scroll w-full divide-y divide-gray-100">
                      <li v-for="(item, index) in news" :key="index" class="flex font-bold items-center py-3 px-6 hover:bg-blue-50 transition-colors duration-200 group cursor-pointer">
                        <div class="mr-3 flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                        <a :href="item.url" class="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300 ease-out">{{ item.name }}</a>
                      </li>
                      <li class="flex items-center py-3 px-6 text-blue-600 font-medium group cursor-pointer hover:bg-blue-50">
                        <span class="flex items-center transform group-hover:translate-x-1 transition-transform duration-300">
                          <router-link to="/news" class="flex items-center">
                            View All Announcements
                            <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                              <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                          </router-link>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <!-- Events/Scholarships Card -->
                <div class="mobile-card bg-white/80 backdrop-blur-sm shadow-lg overflow-hidden border border-blue-200">
                  <div class="bg-gradient-to-r from-indigo-600 to-blue-600 py-3 sm:py-4 px-4 sm:px-6 flex items-center justify-between">
                    <h3 class="mobile-text-lg font-semibold text-white">Events & Scholarships</h3>
                    <div class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="max-h-[300px] overflow-hidden">
                    <ul class="events-scroll w-full divide-y divide-gray-100">
                      <li v-for="(item, index) in events" :key="index" class="flex font-bold items-center py-3 px-6 hover:bg-blue-50 transition-colors duration-200 group cursor-pointer">
                        <div class="mr-3 flex-shrink-0 w-2 h-2 bg-indigo-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                        <a :href="item.url" class="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300 ease-out">{{ item.name }}</a>
                      </li>
                      <li class="flex items-center py-3 px-6 text-indigo-600 font-medium group cursor-pointer hover:bg-blue-50">
                        <span class="flex items-center transform group-hover:translate-x-1 transition-transform duration-300">
                          <router-link to="/events" class="flex items-center">
                            View All Events
                            <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                              <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                          </router-link>
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
                <h3 class="mobile-text-2xl lg:mobile-text-3xl font-bold text-white mb-4 sm:mb-6 pb-2 sm:pb-3 border-b border-white/20 flex items-center">
                  <svg class="w-5 h-5 sm:w-6 sm:h-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
                  </svg>
                  Quick Links
                </h3>
                <div class="space-y-3">
                  <div class="group">
                    <router-link to="/aicte&moe" class="bg-white/10 hover:bg-white/20 rounded-lg p-3 sm:p-4 flex items-center space-x-2 sm:space-x-3 transition-all duration-300 transform hover:translate-x-2 cursor-pointer">
                      <div class="bg-blue-500/20 p-1.5 sm:p-2 rounded-full">
                        <svg class="h-4 w-4 sm:h-5 sm:w-5 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                      </div>
                      <h3 class="mobile-text-base lg:mobile-text-lg text-white font-medium">AICTE & MOE CELL</h3>
                    </router-link>
                  </div>
                  <div class="group">
                    <a href="https://drive.google.com/file/d/1z8ioKdQN0-fvahtIfneCPJI6i7j-YaFz/view" target="_blank" rel="noopener" class="bg-white/10 hover:bg-white/20 rounded-lg p-3 sm:p-4 flex items-center space-x-2 sm:space-x-3 transition-all duration-300 transform hover:translate-x-2 cursor-pointer">
                      <div class="bg-indigo-500/20 p-1.5 sm:p-2 rounded-full">
                        <svg class="h-4 w-4 sm:h-5 sm:w-5 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                      </div>
                      <h3 class="mobile-text-base lg:mobile-text-lg text-white font-medium">MANDATORY DISCLOSURE</h3>
                    </a>
                  </div>
                  <div class="group">
                    <router-link to="/downloads" class="bg-white/10 hover:bg-white/20 rounded-lg p-3 sm:p-4 flex items-center space-x-2 sm:space-x-3 transition-all duration-300 transform hover:translate-x-2 cursor-pointer">
                      <div class="bg-green-500/20 p-1.5 sm:p-2 rounded-full">
                        <svg class="h-4 w-4 sm:h-5 sm:w-5 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 20h9"></path><path d="M12 4v16m0 0l-4-4m4 4l4-4"></path></svg>
                      </div>
                      <h3 class="mobile-text-base lg:mobile-text-lg text-white font-medium">DOWNLOADS</h3>
                    </router-link>
                  </div>
                  <div class="group">
                    <router-link to="/antiragging" class="bg-white/10 hover:bg-white/20 rounded-lg p-3 sm:p-4 flex items-center space-x-2 sm:space-x-3 transition-all duration-300 transform hover:translate-x-2 cursor-pointer">
                      <div class="bg-red-500/20 p-1.5 sm:p-2 rounded-full">
                        <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                      </div>
                      <h3 class="mobile-text-base lg:mobile-text-lg text-white font-medium">ANTIRAGGING CELL</h3>
                    </router-link>
                  </div>
                  <div class="group">
                    <router-link to="/posh" class="bg-white/10 hover:bg-white/20 rounded-lg p-3 sm:p-4 flex items-center space-x-2 sm:space-x-3 transition-all duration-300 transform hover:translate-x-2 cursor-pointer">
                      <div class="bg-pink-500/20 p-1.5 sm:p-2 rounded-full">
                        <svg class="h-4 w-4 sm:h-5 sm:w-5 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M8 15s1.5-2 4-2 4 2 4 2"></path><path d="M9 9h.01"></path><path d="M15 9h.01"></path></svg>
                      </div>
                      <h3 class="mobile-text-base lg:mobile-text-lg text-white font-medium">POSH CELL</h3>
                    </router-link>
                  </div>
                  <div class="group">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSct1Nzh8zasrBf1pL8TQeDVLpNTckhwPYJw8L_JAL4-e-VRrA/viewform" target="_blank" rel="noopener" class="bg-white/10 hover:bg-white/20 rounded-lg p-3 sm:p-4 flex items-center space-x-2 sm:space-x-3 transition-all duration-300 transform hover:translate-x-2 cursor-pointer">
                      <div class="bg-yellow-500/20 p-1.5 sm:p-2 rounded-full">
                        <svg class="h-4 w-4 sm:h-5 sm:w-5 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
                      </div>
                      <h3 class="mobile-text-base lg:mobile-text-lg text-white font-medium">PREVENTION OF CASTE</h3>
                    </a>
                  </div>
                  <div class="group">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdCUoPQpO0ZUonxAatNpgkXzVTqiTW6tVsUSViTVjkNRasMkA/viewform" target="_blank" rel="noopener" class="bg-white/10 hover:bg-white/20 rounded-lg p-4 flex items-center space-x-3 transition-all duration-300 transform hover:translate-x-2 cursor-pointer">
                      <div class="bg-purple-500/20 p-2 rounded-full">
                        <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                      </div>
                      <h3 class="text-xl text-white font-medium">DIFFERENTLY ABLED PERSONS CELL</h3>
                    </a>
                  </div>
                  <div class="group">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSenLuIhWEHNtty-CA7a2hMufyxj1sFLd-ET4geM3VvwN3KoHg/viewform" target="_blank" rel="noopener" class="bg-white/10 hover:bg-white/20 rounded-lg p-3 sm:p-4 flex items-center space-x-2 sm:space-x-3 transition-all duration-300 transform hover:translate-x-2 cursor-pointer">
                      <div class="bg-green-500/20 p-1.5 sm:p-2 rounded-full">
                        <svg class="h-4 w-4 sm:h-5 sm:w-5 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11m16-11v11M8 14v3m4-3v3m4-3v3"></path></svg>
                      </div>
                      <h3 class="mobile-text-base lg:mobile-text-lg text-white font-medium">ANTI DRUGS</h3>
                    </a>
                  </div>
                  <div class="group">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSc5bsULXXnvfXgGnX9hJhNZrMJfeZfT8BLPGQ-Zz5rDc9q1pQ/viewform" target="_blank" rel="noopener" class="bg-white/10 hover:bg-white/20 rounded-lg p-3 sm:p-4 flex items-center space-x-2 sm:space-x-3 transition-all duration-300 transform hover:translate-x-2 cursor-pointer">
                      <div class="bg-blue-500/20 p-1.5 sm:p-2 rounded-full">
                        <svg class="h-4 w-4 sm:h-5 sm:w-5 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                      </div>
                      <h3 class="mobile-text-base lg:mobile-text-lg text-white font-medium">FEEDBACK FORM</h3>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Programs Showcase with Horizontal Scroll -->
      <section id="programs" class="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-blue-50/50 relative">
        <!-- Background sketch pattern -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          <div class="absolute inset-0">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <pattern id="hexagon-pattern" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M50 0 L87.5 25 L87.5 75 L50 100 L12.5 75 L12.5 25 Z" fill="none" stroke="#2563eb" stroke-width="1"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#hexagon-pattern)" />
            </svg>
          </div>
        </div>
        
        <div class="mobile-container relative z-10">
          <h2 class="mobile-text-2xl lg:mobile-text-3xl font-bold text-center mb-12 sm:mb-16 text-[#21209c] relative inline-block mx-auto">
            PROGRAMS OFFERED
            <span class="absolute -bottom-2 sm:-bottom-3 left-1/2 transform -translate-x-1/2 h-1 w-16 sm:w-20 lg:w-24 bg-yellow-500"></span>
          </h2>
          <div class="mt-16 relative">
            <div class="program-scroll-container">
              <div class="program-scroll-wrapper">
                <!-- UG Programs -->
                <div class="program-card">
                  <div class="program-icon bg-blue-500">💻</div>
                  <h3 class="program-title">B.E. (COMPUTER SCIENCE AND ENGINEERING)</h3>
                  <p class="program-description">Learn cutting-edge technologies and software development.</p>
                  <a href="/departments/cse" class="program-link">Learn More →</a>
                </div>
                <div class="program-card">
                  <div class="program-icon bg-green-500">📡</div>
                  <h3 class="program-title">B.E. (ELECTRONICS AND COMMUNICATION ENGINEERING)</h3>
                  <p class="program-description">Explore communication, embedded systems, and VLSI.</p>
                  <a href="/departments/ece" class="program-link">Learn More →</a>
                </div>
                <div class="program-card">
                  <div class="program-icon bg-yellow-500">⚡</div>
                  <h3 class="program-title">B.E. (ELECTRICAL AND ELECTRONICS ENGINEERING)</h3>
                  <p class="program-description">Power systems, control, and electrical machines.</p>
                  <a href="/departments/eee" class="program-link">Learn More →</a>
                </div>
                <div class="program-card">
                  <div class="program-icon bg-red-500">🛠️</div>
                  <h3 class="program-title">B.E. (MECHANICAL ENGINEERING)</h3>
                  <p class="program-description">Study mechanics, thermodynamics, and manufacturing.</p>
                  <a href="/departments/mech" class="program-link">Learn More →</a>
                </div>
                <div class="program-card">
                  <div class="program-icon bg-purple-500">🤖</div>
                  <h3 class="program-title">B.Tech. (ARTIFICIAL INTELLIGENCE AND DATA SCIENCE)</h3>
                  <p class="program-description">Machine learning, data analytics, and AI.</p>
                  <a href="/departments/cse" class="program-link">Learn More →</a>
                </div>
                <div class="program-card">
                  <div class="program-icon bg-pink-500">🔲</div>
                  <h3 class="program-title">B.E. Electronics Engineering (VLSI Design and Technology)</h3>
                  <p class="program-description">Specialized in chip design, microelectronics, and hardware innovation.</p>
                  <a href="/departments/ece" class="program-link">Learn More →</a>
                </div>
                <!-- PG Programs -->
                <div class="program-card">
                  <div class="program-icon bg-indigo-500">📈</div>
                  <h3 class="program-title">MASTER OF BUSINESS ADMINISTRATION</h3>
                  <p class="program-description">Master business administration and leadership.</p>
                  <a href="/departments/mba" class="program-link">Learn More →</a>
                </div>
                <div class="program-card">
                  <div class="program-icon bg-indigo-400">📊</div>
                  <h3 class="program-title">MASTER OF BUSINESS ADMINISTRATION (BUSINESS ANALYTICS)</h3>
                  <p class="program-description">Business intelligence, analytics, and data-driven management.</p>
                  <a href="/departments/mba" class="program-link">Learn More →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

            <!-- Dean's Message Section - Modern Glass Design -->
            <section id="deans-message" class="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-blue-900 to-indigo-900 text-white relative">
        <!-- Background sketch pattern -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          <div class="absolute inset-0">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <pattern id="wave-pattern" width="100" height="20" patternUnits="userSpaceOnUse">
                <path d="M0 10 Q 12.5 0, 25 10 T 50 10 T 75 10 T 100 10" fill="none" stroke="white" stroke-width="1"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#wave-pattern)" />
            </svg>
          </div>
        </div>
        
        <div class="mobile-container relative z-10">
          <h2 class="mobile-text-2xl lg:mobile-text-3xl font-bold text-center mb-8 sm:mb-12">From the Dean's Desk</h2>
          <div class="flex flex-col md:flex-row items-center bg-white bg-opacity-10 rounded-lg shadow-xl overflow-hidden backdrop-filter backdrop-blur-lg">
            <div class="md:w-1/3">
              <img src="/Dean.webp" alt="Dean's Photo" class="w-full h-full object-cover" />
            </div>
            <div class="md:w-2/3 p-4 sm:p-6 md:p-8">
              <h3 class="mobile-text-xl lg:mobile-text-2xl font-semibold mb-3 sm:mb-4">Dr. Saravanan Kumar</h3>
              <p class="mobile-text-base text-indigo-200 mb-4 sm:mb-6 italic">"Empowering the next generation of innovators and leaders."</p>
              <p class="mobile-text-base mb-3 sm:mb-4">
                Welcome to Anna University! Our institution stands at the forefront of technological education and research. We are committed to nurturing not just skilled professionals, but visionary leaders who will shape the future of our society.
              </p>
              <p class="mobile-text-base mb-3 sm:mb-4">
                Our world-class faculty, cutting-edge facilities, and industry partnerships provide an unparalleled learning environment. We encourage our students to push boundaries, think critically, and innovate fearlessly.
              </p>
              <p class="mobile-text-base">
                Join us in this exciting journey of discovery and growth. Together, let's build a brighter, more sustainable future through the power of education and technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Campus Life Section -->
      <section id="campus-life" class="py-12 sm:py-16 lg:py-24 bg-white relative">
        <!-- Background sketch pattern -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          <div class="absolute inset-0">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <pattern id="triangle-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M0 60 L30 0 L60 60 Z" fill="none" stroke="#2563eb" stroke-width="1"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#triangle-pattern)" />
            </svg>
          </div>
        </div>
        
        <div class="mobile-container relative z-10">
          <div class="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 class="mobile-text-2xl lg:mobile-text-3xl font-bold text-[#21209c] relative inline-block">
              CAMPUS LIFE
              <span class="absolute -bottom-2 sm:-bottom-3 left-1/2 transform -translate-x-1/2 h-1 w-16 sm:w-20 lg:w-24 bg-yellow-500"></span>
            </h2>
            <p class="mt-6 sm:mt-8 mobile-text-lg text-gray-700">
              LIVELY AND HAPPY CAMPUS!
            </p>
            <p class="mt-3 sm:mt-4 mobile-text-base text-gray-600">
              Buzzing with lively and vibrant activities, our campus is always a fun-filled and happy place. 
              After a rigorous day of learning, our students have a host of activities to indulge in and engage themselves.
              Be it their love of music and dance, sweating it out in the sports field, or getting together with peers through club activities, 
              the vibe around the campus is always <span class="font-bold">HAPPY AND UPBEAT!</span>
            </p>
          </div>
          
          <div class="mobile-grid">
            <!-- Campus Life Card 1 -->
            <div class="mobile-card rounded-xl overflow-hidden shadow-lg group">
              <div class="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <img 
                  src="/cse-girls-closeup.webp" 
                  alt="State-of-the-art Labs" 
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                >
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                <div class="absolute bottom-0 left-0 p-4 sm:p-6">
                  <h3 class="mobile-text-lg font-bold text-white">Advanced Labs</h3>
                  <p class="mobile-text-sm text-blue-200">Cutting-edge technology for hands-on learning</p>
                </div>
              </div>
            </div>
            
            <!-- Campus Life Card 2 -->
            <div class="mobile-card rounded-xl overflow-hidden shadow-lg group">
              <div class="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <img 
                  src="/annual_day_dance.webp" 
                  alt="Cultural Events" 
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                >
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                <div class="absolute bottom-0 left-0 p-4 sm:p-6">
                  <h3 class="mobile-text-lg font-bold text-white">Cultural Events</h3>
                  <p class="mobile-text-sm text-blue-200">Celebrating talent and creativity</p>
                </div>
              </div>
            </div>
            
            <!-- Campus Life Card 3 -->
            <div class="mobile-card rounded-xl overflow-hidden shadow-lg group">
              <div class="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <img 
                  src="/sports_day_parade.jpg" 
                  alt="Sports Activities" 
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                >
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                <div class="absolute bottom-0 left-0 p-4 sm:p-6">
                  <h3 class="mobile-text-lg font-bold text-white">Sports Excellence</h3>
                  <p class="mobile-text-sm text-blue-200">Promoting physical fitness and team spirit</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="flex flex-col sm:flex-row justify-center mt-8 sm:mt-12 gap-3 sm:gap-4">
            <a href="#campus-tour" class="mobile-btn inline-block bg-white border-2 border-blue-600 text-blue-600 rounded-full font-semibold 
               transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-center">
              CAMPUS TOUR
            </a>
            <a href="/admissions" class="mobile-btn inline-block bg-blue-600 text-white rounded-full font-semibold 
               transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-center">
              ADMISSIONS
            </a>
          </div>
        </div>
      </section>

      <!-- Hostel Section -->
      <section id="hostel" class="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-blue-900 to-indigo-900 text-white relative">
        <!-- Background sketch pattern -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          <div class="absolute inset-0">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <pattern id="square-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <rect x="1" y="1" width="38" height="38" fill="none" stroke="white" stroke-width="1"/>
                <line x1="0" y1="20" x2="40" y2="20" stroke="white" stroke-width="0.5"/>
                <line x1="20" y1="0" x2="20" y2="40" stroke="white" stroke-width="0.5"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#square-pattern)" />
            </svg>
          </div>
        </div>
        
        <div class="mobile-container relative z-10">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 class="mobile-text-2xl lg:mobile-text-3xl font-bold mb-4 sm:mb-6">HOSTEL</h2>
              <h3 class="mobile-text-lg lg:mobile-text-xl font-semibold mb-3 sm:mb-4 text-blue-200">CREATING MEMORIES FOR LIFETIME!</h3>
              <h4 class="mobile-text-base lg:mobile-text-lg font-semibold mb-4 sm:mb-6 text-blue-100">COZY ROOMS. COMFORTABLE STAY.</h4>
              <p class="mobile-text-base mb-4 sm:mb-6">
                Well designed airy rooms, clean and fully equipped kitchens, dining space with multi cuisine food options, 
                facilities like laundry, salon & supermarket, lots of greenery, unique seating spaces for friends to get together 
                and have casual conversations, extended lab facilities for students to work after college hours – forms a part of 
                our hostel experience.
              </p>
              <p class="mobile-text-base mb-6 sm:mb-8">
                Extended learning is a big part of hostel life. Our hostel at night, with beautiful lighting and the young 
                energetic vibe of students, is a must-see for all! In a nutshell, our hostel will provide the ambience to relax, 
                enjoy a variety of tasty food, and also to collaborate and grow in the company of peers.
              </p>
              <a href="#hostel-details" class="mobile-btn inline-block bg-white text-blue-900 rounded-full font-semibold 
                transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-center">
                KNOW MORE
              </a>
            </div>
            <div class="grid grid-cols-2 gap-3 sm:gap-4">
              <div class="rounded-xl overflow-hidden shadow-lg">
                <img src="/cse-girls-closeup.webp" alt="Hostel Room" class="w-full h-24 sm:h-32 md:h-40 object-cover">
              </div>
              <div class="rounded-xl overflow-hidden shadow-lg">
                <img src="/computer-lab.webp" alt="Hostel Dining" class="w-full h-24 sm:h-32 md:h-40 object-cover">
              </div>
              <div class="rounded-xl overflow-hidden shadow-lg">
                <img src="/1.webp" alt="Hostel Common Area" class="w-full h-24 sm:h-32 md:h-40 object-cover">
              </div>
              <div class="rounded-xl overflow-hidden shadow-lg">
                <img src="/4.webp" alt="Hostel Night View" class="w-full h-24 sm:h-32 md:h-40 object-cover">
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Gallery Section -->
      <section id="gallery" class="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden w-full relative">
        <!-- Background sketch pattern -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          <div class="absolute inset-0">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <pattern id="circle-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="15" fill="none" stroke="#2563eb" stroke-width="1"/>
                <circle cx="30" cy="30" r="5" fill="none" stroke="#2563eb" stroke-width="0.5"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#circle-pattern)" />
            </svg>
          </div>
        </div>
        
        <div class="mobile-container relative z-10">
          <h2 class="mobile-text-2xl lg:mobile-text-3xl font-bold text-center mb-12 sm:mb-16 text-[#21209c] relative inline-block mx-auto">
            Gallery of Memories
            <span class="absolute -bottom-2 sm:-bottom-3 left-1/2 transform -translate-x-1/2 h-1 w-16 sm:w-20 lg:w-24 bg-yellow-500"></span>
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

      <!-- Alumni Testimonials Section -->
      <section id="alumni" class="py-12 sm:py-16 lg:py-24 bg-gray-50 relative">
        <!-- Background sketch pattern -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          <div class="absolute inset-0">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <pattern id="zigzag-pattern" width="100" height="20" patternUnits="userSpaceOnUse">
                <path d="M0 0 L20 10 L0 20 L20 30 L0 40 L20 50 L0 60 L20 70 L0 80" fill="none" stroke="#2563eb" stroke-width="1"/>
                <path d="M50 0 L70 10 L50 20 L70 30 L50 40 L70 50 L50 60 L70 70 L50 80" fill="none" stroke="#2563eb" stroke-width="1"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#zigzag-pattern)" />
            </svg>
          </div>
        </div>
        
        <div class="mobile-container relative z-10">
          <h2 class="mobile-text-2xl lg:mobile-text-3xl font-bold text-center mb-12 sm:mb-16 text-[#21209c] relative inline-block mx-auto">
            ALUMNI SPEAK
            <span class="absolute -bottom-2 sm:-bottom-3 left-1/2 transform -translate-x-1/2 h-1 w-16 sm:w-20 lg:w-24 bg-yellow-500"></span>
          </h2>
          <p class="text-center mobile-text-lg mb-12 sm:mb-16">Here's what our successful Alumni have to say about Anna University!</p>

          <!-- Testimonial Slider -->
          <div class="relative">
            <div class="overflow-hidden">
              <div class="flex transition-transform duration-700 ease-in-out" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
                <div v-for="(testimonial, index) in testimonials" :key="index" class="flex-shrink-0 w-full">
                  <div class="bg-white rounded-xl shadow-xl overflow-hidden max-w-4xl mx-auto">
                    <div class="grid grid-cols-1 md:grid-cols-3">
                      <div class="md:col-span-1 bg-gradient-to-br from-blue-600 to-indigo-900 p-4 sm:p-6 md:p-8 flex flex-col justify-center">
                        <img 
                          :src="testimonial.image" 
                          :alt="testimonial.name" 
                          class="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-white mx-auto mb-3 sm:mb-4"
                        >
                        <h3 class="mobile-text-lg font-bold text-white text-center">{{ testimonial.name }}</h3>
                        <p class="mobile-text-sm text-blue-200 text-center">{{ testimonial.branch }}</p>
                        <p class="mobile-text-sm text-blue-200 text-center">{{ testimonial.batch }}</p>
                        <p class="mobile-text-sm text-white font-semibold text-center mt-2">Placed in <span class="text-yellow-300">{{ testimonial.company }}</span></p>
                      </div>
                      <div class="md:col-span-2 p-4 sm:p-6 md:p-8 flex items-center">
                        <div>
                          <svg class="w-12 h-12 text-blue-200 mb-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                          </svg>
                          <p class="text-gray-700 mobile-text-base mb-4 sm:mb-6 leading-relaxed">{{ testimonial.message }}</p>
                          <div class="flex space-x-1">
                            <svg v-for="star in 5" :key="star" class="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Navigation Buttons -->
            <button @click="prevSlide" class="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-[#21209c]/80 text-white p-2 sm:p-3 rounded-full cursor-pointer hover:bg-[#21209c] transition-colors z-30 focus:outline-none shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button @click="nextSlide" class="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-[#21209c]/80 text-white p-2 sm:p-3 rounded-full cursor-pointer hover:bg-[#21209c] transition-colors z-30 focus:outline-none shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            <!-- Dots -->
            <div class="flex justify-center mt-8">
              <div class="flex space-x-2">
                <button 
                  v-for="(_, index) in testimonials" 
                  :key="index" 
                  @click="goToSlide(index)" 
                  class="h-1 w-4 md:w-8 mx-1 focus:outline-none transition-colors rounded-full shadow-sm hover:shadow-md transform hover:scale-105 duration-300"
                  :class="index === currentIndex ? 'bg-indigo-600' : 'bg-indigo-300'"
                ></button>
              </div>
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
      <!-- Footer Section -->
      <footer class="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-6 sm:py-8 mt-12 sm:mt-16">
        <div class="mobile-container flex flex-col md:flex-row justify-between items-center">
          <div class="mb-4 md:mb-0 text-center md:text-left">
            <span class="mobile-text-sm font-semibold">© {{ new Date().getFullYear() }} Anna University Regional Campus, Coimbatore</span>
          </div>
          <div class="flex space-x-4 sm:space-x-6">
            <router-link to="/about" class="mobile-text-sm hover:underline text-blue-200">Website Development Team</router-link>
          </div>
        </div>
      </footer>
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
          image: "/pic1.webp",
        },
        {
          name: 'Pathi R',
          branch: 'CSE',
          batch: '2016 Batch',
          company: 'Google',
          message: 'My journey at Anna University was transformative. The rigorous curriculum and supportive faculty prepared me well for the challenges in the tech industry.',
          image: "/pic2.webp",
        },
        {
          name: 'Priya S',
          branch: 'Mechanical',
          batch: '2017 Batch',
          company: 'Tesla',
          message: 'The hands-on experience and industry exposure at Anna University were invaluable. It gave me the confidence to pursue my dreams and land a job at Tesla.',
          image: "/pic3.webp",
        },
      ],
      currentIndex: 0,
      galleryImages: [
        { src: '/1.webp', alt: 'College Event', description: 'Annual cultural festival celebrating diverse talents' },
        { src: '/cse-girls-closeup.webp', alt: 'Students in Lab', description: 'Students collaborating on innovative projects' },
        { src: '/4.webp', alt: 'Campus View', description: 'Our beautiful campus surrounded by greenery' },
        { src: '/computer-lab.webp', alt: 'Computer Lab', description: 'State-of-the-art computer lab with latest equipment' },
        { src: '/Drone_shot.jpg', alt: 'Aerial View', description: 'Aerial view of our sprawling campus facilities' },
      ],
      currentImageIndex: 0,
      news: [
        { name: "On Going Placement Drives and Drives Completed - 2025 Batch", url: "http://aurcc.ac.in/loginpage/loginpage/uploads/Placed%202025.jpg" },
        { name: "Engagement for Project Assistant(Pr.A1) CMRG project at Department of Mechanical Engineering - AURCC", url: "http://aurcc.ac.in/loginpage/loginpage/uploads/388.pdf" },
        { name: "Access to Anna University E-Resource Consortium", url: "http://aurcc.ac.in/loginpage/loginpage/uploads/382.pdf" },
        { name: "Fees for UG / PG Students - 2024 - 2025", url: "http://aurcc.ac.in/loginpage/loginpage/uploads/352.pdf" },
        { name: "UG / PG Hostel Fee Structure for New Admission - 2024 - 2025", url: "http://aurcc.ac.in/loginpage/loginpage/uploads/355.pdf" },
        { name: "SCOUT(Scholarship for Outstanding Undergraduate talent) Winners in Naan Mudhalvan Scheme", url: "http://aurcc.ac.in/loginpage/loginpage/uploads/374.jpeg" },
        { name: "QS WORLD UNIVERSITY RANKINGS - 2025 - ANNA UNIVERSITY 383rd RANK", url: "http://aurcc.ac.in/loginpage/loginpage/uploads/375.jpg" },
        { name: "Placement Statistics - 2020 Batch Students", url: "http://aurcc.ac.in/loginpage/loginpage/uploads/373.pdf" },
        { name: "Placed Students (Batch - 2020 - 2024 )", url: "http://aurcc.ac.in/loginpage/loginpage/uploads/Placed.jpeg" },
        { name: "JRF Application Form for MeitY Project", url: "http://aurcc.ac.in/loginpage/loginpage/uploads/370.pdf" },
      ],
      events: [
        { name: "FORSCH 25 - National Level TECHNO CULTURAL FEST by Dept. of Mechanical Engineering", url: "https://forsch25.com/" },
        { name: "International Womens Day Celebrations at AURCC", url: "http://aurcc.ac.in/loginpage/loginpage/uploads/387.pdf" },
        { name: "SC - ST Fresh Scholarship form - 2024-2025", url: "http://aurcc.ac.in/loginpage/loginpage/uploads/364.pdf" },
        { name: "SC - ST Renewal Scholarship form - 2024-2025", url: "http://aurcc.ac.in/loginpage/loginpage/uploads/365.pdf" },
        { name: "BC - MBC Fresh Scholarship form - 2024-2025", url: "http://aurcc.ac.in/loginpage/loginpage/uploads/362.pdf" },
        { name: "BC - MBC Renewal Scholarship form - 2024-2025", url: "http://aurcc.ac.in/loginpage/loginpage/uploads/363.pdf" },
        { name: "SC-ST Special Higher Education Scholarship 2022-23 (Hostelers)-UG", url: "http://aurcc.ac.in/loginpage/loginpage/uploads/347.pdf" },
        { name: "AICTE – SWANATH SCHOLARSHIP SCHEME FOR STUDENTS – 2021-22", url: "http://aurcc.ac.in/loginpage/loginpage/uploads/312.pdf" },
        { name: "AICTE – PRAGATI SCHOLARSHIP SCHEME FOR GIRL STUDENTS - Degree - 2020-21", url: "http://aurcc.ac.in/loginpage/loginpage/uploads/313.pdf" },
        { name: "AICTE – SAKSHAM SCHOLARSHIP SCHEME FOR SPECIALLY-ABLED STUDENT (DEGREE) - 2020-21", url: "http://aurcc.ac.in/loginpage/loginpage/uploads/314.pdf" },
        { name: "List of the Selected Students under AICTE-Pragati Scholarship Scheme(Degree) - 2020-21", url: "http://aurcc.ac.in/loginpage/loginpage/uploads/315.pdf" },
        { name: "Scholarship - List of Beneficiaries", url: "http://aurcc.ac.in/loginpage/loginpage/uploads/249.pdf" },
      ],
      touchStartX: 0,
      touchEndX: 0,
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
    touchStart(e) {
      this.touchStartX = e.changedTouches[0].screenX;
    },
    touchMove(e) {
      // Optional: could implement real-time dragging here
    },
    touchEnd(e) {
      this.touchEndX = e.changedTouches[0].screenX;
      if (this.touchStartX - this.touchEndX > 50) {
        // Swiped left
        this.nextImage();
      } else if (this.touchEndX - this.touchStartX > 50) {
        // Swiped right
        this.prevImage();
      }
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

@keyframes popIn {
  0% { transform: scale(0.8); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

.animate-subtle-zoom {
  animation: subtleZoom 10s ease-in-out infinite alternate;
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

.stat-value {
  @apply text-3xl font-bold text-gray-900 mb-2;
}

.stat-label {
  @apply text-gray-600;
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
  @apply bg-white rounded-xl p-8 shadow-lg transform hover:-translate-y-2 transition-all duration-300 w-72;
}

.program-icon {
  @apply p-4 rounded-full text-white inline-block mb-6;
}

.program-title {
  @apply text-xl font-bold text-gray-900 mb-4;
}

.program-description {
  @apply text-gray-600 mb-6 h-20;
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

/* Details animation for FAQs */
details summary::-webkit-details-marker {
  display: none;
}

@keyframes slideDown {
  from { opacity: 0; height: 0; padding-top: 0; padding-bottom: 0; }
  to { opacity: 1; height: var(--auto-height, auto); padding-top: 1rem; padding-bottom: 1rem; }
}

details[open] > *:not(summary) {
  animation: slideDown 0.3s ease-in-out;
}

details > summary {
  list-style: none;
  transition: all 0.3s;
}
</style>
