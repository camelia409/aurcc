<template>
  <div class="">        
    <main class="">
       <!-- Hero Section -->
       <section class="hero min-h-screen relative overflow-hidden">
        <div class="absolute inset-0 bg-black opacity-50"></div>
        <!-- <video 
          autoplay 
          loop 
          muted 
          playsinline
          class=" w-full h-full object-cover -z-10"
        >
          <source src="../assets/videoplayback.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video> -->
        <div class="absolute z-10 top-0 left-0 w-full h-full bg-black opacity-55"></div>
        <img src="/src/assets/Drone_shot.jpg" alt="University Campus" class="absolute inset-0 w-full h-full object-cover">
        <div class="relative z-10 text-center text-white flex flex-col justify-center items-center h-full px-4">
          <h1 class="text-3xl md:text-5xl lg:text-7xl font-bold mb-4">Welcome to Anna University</h1>
          <p class="text-lg md:text-xl lg:text-2xl mb-8">Empowering Minds, Shaping Futures</p>
        </div>
      </section>

      <!-- About Section -->
      <section id="about" class="py-20 bg-gradient-to-b from-white to-gray-100 ">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch" >
            <div class="flex flex-col ">
              <h2 class="text-2xl md:text-5xl font-bold text-center mb-12 text-gray-800 hover-underline" >ABOUT OUR CAMPUS</h2>
              <div class="space-y-6"> 
                <p class="text-lg text-gray-700 leading-relaxed hover-brighten">
                  The Regional Campus Coimbatore of Anna University, established in 2012, offers world-class education in Engineering and Technology. Nestled in a serene environment away from the city's hustle, our campus boasts state-of-the-art infrastructure and a team of highly qualified faculty members. As usual this is the text for this sub para, i don’t know why thiz suddenly looks a shit lot more shorter than it used be, do you feel the same way as me The Department of Computer Science and Engineering aims at producing technically competent professionals who can excel in today’s age of technology. Recognizing its role in engineering education, generation, and dissemination, the department is equipped with state-of-the-art facilities and relevant technologies. Computer Science or Computing Science is the scientific and mathematical approach to computation, specifically referring to the design of computing machines and processes.
                </p>
                <p class="text-lg text-gray-700 leading-relaxed hover-brighten">
                  We are committed to providing hands-on experience to our students, enabling them to master their skills in various disciplines and prepare for the challenges of the future.
                </p>
              </div>
            </div>
            <div class="grid grid-cols-1 gap-6">
              <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-duration-300">
                <h3 class="text-3xl font-semibold bg-gradient-to-r from-[#21209c] to-indigo-500 text-white p-4 hover:brightness-110 transition-all duration-300" >
                  News / Admissions
                </h3>
                <div class="overflow-hidden relative" style="max-height: 300px;">
                  <ul class="events-scroll w-full">
                    <li v-for="(item, index) in news" :key="index" class="flex items-center font-semibold hover-highlight cursor-pointer py-3 px-4 border-b hover:bg-gray-50 transition-colors duration-200 group">
                      <div class="mr-3 flex-shrink-0 w-6 h-6 relative">
                        <div class="absolute inset-0 bg-indigo-500 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
                        <div class="absolute inset-0 flex items-center justify-center">
                          <div class="w-1 h-1 bg-indigo-500 rounded-full transform group-hover:scale-0 transition-transform duration-300 ease-out"></div>
                        </div>
                      </div>
                      <span class="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300 ease-out">{{ item }}</span>
                    </li>
                    <li class="flex items-center animated py-3 px-4 hover:bg-gray-50 transition-colors duration-200 cursor-pointer group">
                      <strong class="flex items-center transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300 ease-out">
                        View More 
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300 ease-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </strong>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="bg-white rounded-lg shadow-lg overflow-hidden hover-shadow">
                <h3 class="text-2xl font-semibold bg-gradient-to-r from-[#21209c] to-indigo-500 text-white p-4 hover-brighten">Events / Scholarships</h3>
                <div class="overflow-hidden relative" style="max-height: 300px;">
                  <ul class="events-scroll w-full animated-list">
                    <li v-for="(str, index) in events" :key="index" class="py-3 px-4 border-b hover-highlight ">{{str}}</li>
                    <li class="flex items-center py-3 px-4 hover:bg-gray-50 transition-colors duration-200 cursor-pointer group">
                      <strong class="flex items-center transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300 ease-out">
                        View More 
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300 ease-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <!-- college stats -->
      <div class="flex-wrap md:flex md:items-center md:justify-center gap-4 bg-[#0a0a34] text-white p-14 " style="font-family: 'Clash Grotesk';" >
          <!-- 15 years of delivering quality education -->
          <div class="flex flex-col items-center  p-4">
            <svg class="text-yellow-500 mb-2 w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
            <p class="text-4xl font-bold text-yellow-500">15 years</p>
            <p class="text-sm text-gray-300 text-center">of delivering quality education</p>
          </div>

          <!-- 7th rank in Coimbatore for TNEA 2023 -->
          <div class="flex flex-col items-center  p-4">
            <svg class="text-yellow-500 mb-2 w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
              <path d="M4 22h16"></path>
              <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
              <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
              <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
            </svg>
            <p class="text-4xl font-bold text-yellow-500">7th rank</p>
            <p class="text-sm text-gray-300 text-center">in Coimbatore for TNEA 2023</p>
          </div>

          <!-- 100% admission rate -->
          <div class="flex flex-col items-center  p-4">
            <svg class="text-yellow-500 mb-2 w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
            <p class="text-4xl font-bold text-yellow-500">100%</p>
            <p class="text-sm text-gray-300 text-center">admission rate</p>
          </div>

          <!-- 19th out of 450+ engineering institutions in TN -->
          <div class="flex flex-col items-center  p-4">
            <svg class="text-yellow-500 mb-2 w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
              <polyline points="17 6 23 6 23 12"></polyline>
            </svg>
            <p class="text-4xl font-bold text-yellow-500">19th</p>
            <p class="text-sm text-gray-300 text-center">out of 450+  institutions in TN</p>
          </div>

          <!-- An Autonomous Institution -->
          <div class="flex flex-col items-center  p-4">
            <svg class="text-yellow-500 mb-2 w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="8" r="7"></circle>
              <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
            </svg>
            <p class="text-4xl font-bold text-yellow-500">An Autonomous</p>
            <p class="text-sm text-gray-300 text-center">Institution</p>
          </div>
      </div>

      <!-- Programs Section -->
      <section class="bg-[#f1f1f1] w-full py-24">
        <div class="container mx-auto px-4">
          <h2 class="text-4xl font-bold text-center mb-20 text-[#21209c] animate-fade-in-up">Programs Offered</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-lg bg-[#21209c] p-4 rounded-lg flex items-center space-x-4 transition-transform transform hover:scale-105">
              <div class="bg-[#fdb827] p-4 rounded-full">
                <svg class="w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <router-link to='/departments/cse'>
                <h3 class="font-bold text-white">B.E. Computer Science Engg</h3>
                <p class="text-sm text-gray-300">CSE Department</p>
              </router-link>
            </div>
            <div class="text-lg bg-[#21209c] p-4 rounded-lg flex items-center space-x-4 transition-transform transform hover:scale-105">
              <div class="bg-[#fdb827] p-2 rounded-full">
                <svg class="w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <router-link to='/departments/cse'>
                <h3 class="font-bold text-white">B.Tech Artificial Intelligence and DataScience</h3>
                <p class="text-sm text-gray-300">CSE Department</p>
              </router-link>
            </div>
            <div class="text-lg bg-[#21209c] p-4 rounded-lg flex items-center space-x-4 transition-transform transform hover:scale-105">
              <div class="bg-[#fdb827] p-2 rounded-full">
                <svg class="w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 class="font-bold text-white">B.E. Electrical and Electrical Engg</h3>
                <p class="text-sm text-gray-300">EEE Department</p>
              </div>
            </div>
            <div class="text-lg bg-[#21209c] p-4 rounded-lg flex items-center space-x-4 transition-transform transform hover:scale-105">
              <div class="bg-[#fdb827] p-2 rounded-full">
                <svg class="w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <div>
                <h3 class="font-bold text-white">B.E. Electrical and Electronics Engg</h3>
                <p class="text-sm text-gray-300">ECE Department</p>
              </div>
            </div>
            <div class="text-lg bg-[#21209c] p-4 rounded-lg flex items-center space-x-4 transition-transform transform hover:scale-105">
              <div class="bg-[#fdb827] p-2 rounded-full">
                <svg class="w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 class="font-bold text-white">B.E. Mechanical Engg</h3>
                <p class="text-sm text-gray-300">Mechanical Department</p>
              </div>
            </div>
            <div class="text-lg bg-[#fdb827] p-4 rounded-lg flex items-center space-x-4 transition-transform transform hover:scale-105">
              <div class="bg-[#21209c] p-2 rounded-full">
                <svg class="w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 class="font-bold text-[#23120b]">MBA</h3>
                <p class="text-sm text-gray-700">MBA Department</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Dean's Message Section -->
      <section id="deans-message" class="py-24 bg-[#21209c] text-white">
        <div class="container mx-auto px-6">
          <h2 class="text-4xl font-bold text-center mb-12">From the Dean's Desk</h2>
          <div class="flex flex-col md:flex-row items-center bg-white bg-opacity-10 rounded-lg shadow-xl overflow-hidden backdrop-filter backdrop-blur-lg">
            <div class="md:w-1/3">
              <img src="../assets/steve_jobs.webp" alt="Dean's Photo" class="w-full h-full object-cover" />
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

      <div class="bg-gradient-to-b from-blue-900 to-indigo-950 text-white py-16 px-4">
    <div class="container mx-auto">
      <!-- Section Title with decorative elements -->
      <div class="relative text-center mb-12">
        <h2 class="text-4xl font-bold">
          <span class="inline-block px-4 relative">
            Quick Links
            <!-- <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-yellow-500"></div> -->
          </span>
        </h2>
      </div>

      <!-- Grid Layout for Quick Links -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        <!-- AICTE & MOE Cell -->
        <div class="group">
          <div class="bg-blue-950/50 rounded-lg p-6 h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 cursor-pointer border border-blue-800/30">
            <div class="flex items-center space-x-3">
              <span class="text-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </span>
              <h3 class="text-lg font-semibold text-yellow-500">AICTE & MOE CELL</h3>
            </div>
          </div>
        </div>

        <!-- Mandatory Disclosure -->
        <a href="https://drive.google.com/file/d/1z8ioKdQN0-fvahtIfneCPJI6i7j-YaFz/view" target="_blank" class="group">
          <div class="bg-blue-950/50 rounded-lg p-6 h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 border border-blue-800/30">
            <div class="flex items-center space-x-3">
              <span class="text-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
              <h3 class="text-lg font-semibold text-yellow-500">Mandatory Disclosure</h3>
            </div>
          </div>
        </a>

        <!-- Anti Ragging Cell -->
        <div class="group">
          <div class="bg-blue-950/50 rounded-lg p-6 h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 cursor-pointer border border-blue-800/30">
            <div class="flex items-center space-x-3">
              <span class="text-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </span>
              <h3 class="text-lg font-semibold text-yellow-500">Anti Ragging Cell</h3>
            </div>
          </div>
        </div>

        <!-- POSH CELL -->
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScKl-8gkctBfoE_E0wYdYM6lhZ_GOUVKErLfBXQQLx7jfkPJQ/viewform" target="_blank" class="group">
          <div class="bg-blue-950/50 rounded-lg p-6 h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 border border-blue-800/30">
            <div class="flex items-center space-x-3">
              <span class="text-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </span>
              <h3 class="text-lg font-semibold text-yellow-500">POSH CELL</h3>
            </div>
          </div>
        </a>

        <!-- Differently Abled Cell -->
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdCUoPQpO0ZUonxAatNpgkXzVTqiTW6tVsUSViTVjkNRasMkA/viewform" target="_blank" class="group">
          <div class="bg-blue-950/50 rounded-lg p-6 h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 border border-blue-800/30">
            <div class="flex items-center space-x-3">
              <span class="text-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              <h3 class="text-lg font-semibold text-yellow-500">Differently Abled Cell</h3>
            </div>
          </div>
        </a>

        <!-- Prevention of Caste -->
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSct1Nzh8zasrBf1pL8TQeDVLpNTckhwPYJw8L_JAL4-e-VRrA/viewform" target="_blank" class="group">
          <div class="bg-blue-950/50 rounded-lg p-6 h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 border border-blue-800/30">
            <div class="flex items-center space-x-3">
              <span class="text-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </span>
              <h3 class="text-lg font-semibold text-yellow-500">Prevention of Caste</h3>
            </div>
          </div>
        </a>

        <!-- Anti-Drugs -->
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSenLuIhWEHNtty-CA7a2hMufyxj1sFLd-ET4geM3VvwN3KoHg/viewform" target="_blank" class="group">
          <div class="bg-blue-950/50 rounded-lg p-6 h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 border border-blue-800/30">
            <div class="flex items-center space-x-3">
              <span class="text-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </span>
              <h3 class="text-lg font-semibold text-yellow-500">Anti-Drugs</h3>
            </div>
          </div>
        </a>

        <!-- Online Grievance -->
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScNS4VLaepGgelMcCyQXkE0KyPLKUws4YQQeTmdvZDQKFFjJg/viewform" target="_blank" class="group">
          <div class="bg-blue-950/50 rounded-lg p-6 h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 border border-blue-800/30">
            <div class="flex items-center space-x-3">
              <span class="text-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-4l-4 4z" />
                </svg>
              </span>
              <h3 class="text-lg font-semibold text-yellow-500">Online Grievance</h3>
            </div>
          </div>
        </a>

      </div>
    </div>
  </div>

      <!-- Gallery Section -->
      <section id="gallery" class="py-12 md:py-16 bg-white overflow-hidden w-full">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-20 text-[#21209c]">Gallery of Memories IG</h2>
      <div class="relative flex items-center justify-center">
        <button @click="prevImage" class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#21209c] text-white p-2 rounded-full cursor-pointer hover:bg-opacity-75 z-30 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 md:w-10 md:h-10">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div class="w-full md:w-3/4 lg:w-1/2" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
          <div class="flex transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(-${currentImageIndex * 100}%)` }">
            <div v-for="(image, index) in galleryImages" :key="index" class="flex-shrink-0 w-full px-2 md:px-6">
              <div class="relative group">
                <img :src="image.src" :alt="image.alt" class="w-full h-48 md:h-72 object-cover rounded-lg shadow-md" />
                <div class="absolute bottom-0 h-1/3 md:h-2/5 w-full bg-gray-800 bg-opacity-75 rounded-b-lg flex items-center justify-center">
                  <p class="text-white text-center text-sm md:text-base px-2 md:px-4">{{ image.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button @click="nextImage" class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#21209c] text-white p-2 rounded-full cursor-pointer hover:bg-opacity-75 z-30 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 md:w-10 md:h-10">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <div class="flex justify-center mt-4 md:mt-8">
        <button 
          v-for="(dot, index) in galleryImages" 
          :key="index" 
          @click="goToImage(index)" 
          class="h-1 w-4 md:w-8 mx-1 focus:outline-none transition-colors rounded-full shadow-sm hover:shadow-md transform hover:scale-105 duration-300"
          :class="index === currentImageIndex ? 'bg-indigo-600' : 'bg-indigo-300'"
        ></button>
      </div>
    </div>
  </section>


        <!-- Testimonials Section -->
        <section id="testimonials" class="py-20 bg-indigo-100">
          <div class="container mx-auto px-6">
            <h2 class="text-4xl font-bold text-center mb-12 text-indigo-800 pb-10">Voices of Success</h2>
            <div class="relative w-4/5 mx-auto">
              <div class="overflow-hidden">
                <div class="flex transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
                  <div v-for="(testimonial, index) in testimonials" :key="index" class="w-full flex-shrink-0 px-4">
                    <div class="bg-white text-gray-800 rounded-lg p-8 shadow-xl">
                      <p class="text-xl italic mb-6">"{{ testimonial.message }}"</p>
                      <div class="flex items-center">
                        <img :src="testimonial.image" :alt="testimonial.name" class="w-16 h-16 rounded-full object-cover mr-4" />
                        <div>
                          <p class="font-bold text-lg">{{ testimonial.name }}</p>
                          <p class="text-indigo-600">{{ testimonial.branch }}, {{ testimonial.batch }}</p>
                          <p class="text-sm text-gray-600">{{ testimonial.company }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button @click="prevSlide" class="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4 bg-[#21209c] text-white p-2 rounded-full cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-10 h-10">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button @click="nextSlide" class="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4 bg-[#21209c] text-white p-2 rounded-full focus:outline-none hover:bg-indigo-700 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-10 h-10">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <div class="flex justify-center mt-8">
              <button 
                v-for="(dot, index) in testimonials.length" 
                :key="index" 
                @click="goToSlide(index)" 
                class="h-1 w-8 mx-1 focus:outline-none transition-colors rounded-full shadow-sm hover:shadow-md transform hover:scale-105 duration-300"
                :class="index === currentIndex ? 'bg-[#fdb827]' : 'bg-[#0a0a34]'"
              ></button>
            </div>
          </div>
        </section>
        <!-- Chatbot button -->
        <!-- Help Desk Button -->
        <button
          onclick="document.getElementById('my_modal_5').showModal()"
          class="btn fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg z-50"
        >
          💬 Help Desk
        </button>

        <!-- Chatbot Interface -->
        <dialog id="my_modal_5" class="modal">
          <div
            class="modal-box p-0 w-80 shadow-lg rounded-lg fixed bottom-20 right-4 md:right-10"

          >
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
        { src: 'src/assets/4.webp', alt: 'Gallery Image 2', description: 'This is a dummy event description, lykky means like you know you know' },
        { src: 'src/assets/computer-lab.webp', alt: 'Gallery Image 3', description: 'This is a dummy event description, lykky means like you know you know' },
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


<style>
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

/* Chatbot interface */
@keyframes popIn {
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.chat-bubble {
  transition: transform 0.4s ease-out, opacity 0.4s ease-out;
}
</style>