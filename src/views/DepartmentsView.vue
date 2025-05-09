<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <main>
      <!-- Hero section -->
      <section
        class="bg-cover bg-center relative h-80 md:h-96"
        :style="'background-image: url(/' + department.image + ')'"
      >
        <div class="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-indigo-900/60"></div>
        <div class="container mx-auto h-full flex items-center relative z-10 px-6 md:px-9">
          <div class="max-w-2xl">
            <h1 class="text-2xl md:text-5xl font-bold mb-4 text-white">
              <span class="bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
                {{ department.name }}
              </span>
            </h1>
            <p class="text-sm md:text-xl mb-8 text-gray-100 leading-relaxed">Explore our cutting-edge programs and stay ahead in the field.</p>
            <button class="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-full transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Learn More
            </button>
          </div>
        </div>
      </section>
      
      <!-- Navigation Tabs - Modern floating design -->
      <div class="sticky top-0 z-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="bg-white/95 backdrop-blur-sm shadow-lg rounded-full -mt-6 py-1 px-2 flex justify-center overflow-x-auto no-scrollbar">
            <nav role="tablist" class="tabs flex space-x-1 md:space-x-2">
              <button role="tab"
                v-for="(section, index) in sections"
                :key="index"
                @click="scrollToSection(section)"
                :class="{
                  'bg-indigo-600 text-white': currentSection === section,
                  'text-gray-700 hover:bg-gray-100': currentSection !== section
                }"
                class="font-medium px-4 md:px-5 py-2 md:py-3 rounded-full text-sm md:text-base transition duration-300 whitespace-nowrap"
              >
                {{ section }}
              </button>
            </nav>
          </div>
        </div>
      </div>
      
      <!-- Content sections -->
      <section class="mx-auto" @scroll="handleScroll">
        <div id="content-sections" class="w-full">
          <div class="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12 bg-gradient-to-b from-gray-50 to-white">
            <div id="about-department" class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div class="flex flex-col h-full">
                <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden h-full transition-all duration-300 hover:shadow-md">
                  <div class="bg-gradient-to-r from-indigo-600 to-blue-500 py-6">
                    <h2 class="text-2xl md:text-3xl text-white font-bold text-center">About Department</h2>
                  </div>
                  <div class="p-6 md:p-8">
                    <p class="text-lg text-gray-700 leading-relaxed">{{ department.description }}</p>
                  </div>
                </div>
              </div>
              
              <div class="grid grid-cols-1 gap-8 h-full">
                <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md">
                  <div class="bg-gradient-to-r from-blue-500 to-cyan-400 py-6">
                    <h3 class="text-2xl md:text-3xl text-white font-bold text-center">Vision</h3>
                  </div>
                  <div class="p-6 md:p-8">
                    <p class="text-lg text-gray-700 leading-relaxed">{{ department.vision }}</p>
                  </div>
                </div>
                
                <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md">
                  <div class="bg-gradient-to-r from-cyan-400 to-teal-400 py-6">
                    <h3 class="text-2xl md:text-3xl text-white font-bold text-center">Mission</h3>
                  </div>
                  <div class="p-6 md:p-8">
                    <ul class="text-lg list-disc pl-5 text-gray-700 space-y-3">
                      <li v-for="mission in department.mission" :key="mission" class="pl-2">{{ mission }}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Courses Offered Section -->
          <div class="bg-white rounded-2xl mx-52 mb-6 shadow-sm border border-gray-100 overflow-hidden h-full transition-all duration-300 hover:shadow-md mt-8">
            <div class="bg-gradient-to-r from-indigo-600 to-blue-500 py-6">
              <h2 class="text-2xl md:text-3xl text-white font-bold text-center">Courses Offered</h2>
            </div>
            <div class="p-6 md:p-8">
              <ul class="list-disc list-inside space-y-2 text-gray-700 text-base md:text-lg">
                <li v-for="(course, index) in department.courses_offered" :key="index">
                  {{ course }}
                </li>
              </ul>
            </div>
          </div>

          
          <div id="events" class="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12 bg-white">
            <h2 class="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
              <span class="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">Upcoming Events</span>
            </h2>
            
            <div v-if="currentEvent" class="max-w-4xl mx-auto">
              <div class="relative overflow-hidden rounded-2xl shadow-lg bg-white border border-gray-100">
                <div class="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-indigo-500 to-blue-500"></div>
                
                <div class="p-6 md:p-8">
                  <div class="flex flex-col md:flex-row md:items-center justify-between">
                    <div class="flex-grow mb-4 md:mb-0 md:mr-8">
                      <h3 class="text-xl md:text-2xl font-bold mb-2 text-gray-800">{{ currentEvent.name }}</h3>
                      <p class="text-base md:text-lg text-gray-600 mb-4">{{ currentEvent.description }}</p>
                      <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span class="text-indigo-600 font-medium">{{ currentEvent.date }}</span>
                      </div>
                    </div>
                    
                    <div class="flex justify-center space-x-3">
                      <button @click="showPreviousEvent" 
                              class="p-2 rounded-full bg-gray-100 hover:bg-indigo-100 text-gray-600 hover:text-indigo-600 focus:outline-none transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button @click="showNextEvent" 
                              class="p-2 rounded-full bg-gray-100 hover:bg-indigo-100 text-gray-600 hover:text-indigo-600 focus:outline-none transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="flex justify-center mt-6">
                <div class="flex space-x-2">
                  <div v-for="(_, index) in events" :key="index" 
                       @click="currentIndex = index"
                       :class="index === currentIndex ? 'bg-indigo-600' : 'bg-gray-300 hover:bg-gray-400'"
                       class="w-2 h-2 rounded-full cursor-pointer transition-colors duration-300">
                  </div>
                </div>
              </div>
            </div>
            
            <div v-else class="text-center py-12 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p class="text-lg">No upcoming events to display.</p>
            </div>
          </div>
          <div id="achievements" class="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12 bg-gray-50">
            <h2 class="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
              <span class="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Department Achievements</span>
            </h2>
            
            <div class="relative max-w-5xl mx-auto">
              <div class="absolute top-0 bottom-0 left-0 right-0 -m-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-3xl transform -rotate-1"></div>
              
              <div class="relative bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div class="h-96 overflow-auto px-6 py-6 scrollbar-thin scrollbar-thumb-indigo-200 scrollbar-track-gray-100">
                  <div class="space-y-4">
                    <div v-for="achievement in department.achievements" :key="achievement.name" 
                         class="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                      <div class="flex flex-col md:flex-row md:items-center justify-between">
                        <div>
                          <div class="flex items-center mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h3 class="text-lg md:text-xl font-semibold text-gray-800">{{ achievement.event }}</h3>
                          </div>
                          <p class="text-gray-600 mb-1">{{ achievement.organized_by }}</p>
                          <p class="font-medium text-gray-800">{{ achievement.name }}</p>
                        </div>
                        
                        <div class="mt-3 md:mt-0 flex items-center">
                          <div class="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                            {{ achievement.date }}
                          </div>
                        </div>
                      </div>
                      
                      <div class="mt-3">
                        <div class="inline-flex items-center bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                          </svg>
                          {{ achievement.awards }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="facility" class="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12 bg-white">
            <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              <span class="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">World-Class Facilities</span>
            </h2>
            
            <div class="space-y-16">
              <div 
                v-for="(facility, index) in department.facility" 
                :key="facility.name" 
                :class="index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'"
                class="flex flex-col lg:flex-row items-center gap-8 md:gap-12"
              >
                <div class="lg:w-1/2">
                  <div class="relative">
                    <div class="absolute inset-0 bg-gradient-to-r from-emerald-200 to-teal-100 transform rotate-3 rounded-2xl"></div>
                    <img 
                      :src="'/' + facility.image" 
                      :alt="facility.name" 
                      class="relative z-10 w-full h-auto object-cover rounded-2xl shadow-lg"
                    >
                  </div>
                </div>
                
                <div class="lg:w-1/2">
                  <h3 class="text-2xl md:text-3xl font-bold mb-6 text-gray-800">{{ facility.name }}</h3>
                  <ul class="space-y-3">
                    <li v-for="item in facility.description" :key="item" class="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-emerald-500 mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span class="text-lg text-gray-700">{{ item }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div id="faculty" class="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12 bg-gray-50">
            <!-- Section Title with Animated Underline -->
            <div class="text-center mb-12">
              <h2 class="text-3xl md:text-4xl font-bold text-gray-800 relative inline-block group">
                OUR FACULTY
                <span class="absolute -bottom-3 left-0 h-1 w-full bg-gradient-to-r from-blue-600 to-indigo-600 transform origin-left transition-transform duration-300 group-hover:scale-x-110"></span>
              </h2>
            </div>
            
            <!-- HOD Desk -->
            <div class="mb-16">
              <h3 class="text-2xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-700">Head of Department</h3>
              <div class="flex justify-center">
                <div 
                  v-for="staff in department.faculty.hod_desk" 
                  :key="staff.email" 
                  class="faculty-card"
                  @click="showDetails(staff)"
                >
                  <!-- Photo with Gradient Background -->
                  <div class="relative pt-8 pb-4 flex justify-center">
                    <div class="absolute inset-0 h-1/2 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
                    <div class="relative">
                      <img 
                        :src="'/' + staff.image" 
                        :alt="staff.name" 
                        class="w-48 h-48 object-cover rounded-full border-4 border-white shadow-lg"
                      >
                    </div>
                  </div>
                  
                  <!-- Faculty Info -->
                  <div class="p-6 text-center">
                    <h4 class="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">{{ staff.name }}</h4>
                    <p class="text-gray-700 font-medium">{{ staff.position }}</p>
                    <p class="text-gray-500 text-sm">{{ staff.email }}</p>
                    
                    <!-- View Profile Button -->
                    <button class="mt-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Assistant Professors -->
            <div>
              <h3 class="text-2xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-700">Assistant Professors</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div 
                  v-for="staff in department.faculty.assistant_professors" 
                  :key="staff.email" 
                  class="faculty-card"
                  @click="showDetails(staff)"
                >
                  <!-- Photo with Gradient Background -->
                  <div class="relative pt-8 pb-4 flex justify-center">
                    <div class="absolute inset-0 h-1/2 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
                    <div class="relative">
                      <img 
                        :src="'/' + staff.image" 
                        :alt="staff.name" 
                        class="w-40 h-40 object-cover rounded-full border-4 border-white shadow-lg"
                      >
                    </div>
                  </div>
                  
                  <!-- Faculty Info -->
                  <div class="p-6 text-center">
                    <h4 class="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">{{ staff.name }}</h4>
                    <p class="text-gray-700 font-medium">{{ staff.position }}</p>
                    <p class="text-gray-500 text-sm">{{ staff.email }}</p>
                    
                    <!-- View Profile Button -->
                    <button class="mt-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Modal for Faculty Details -->
            <div v-if="showPopover" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
              <div class="bg-white rounded-2xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
                <div class="p-6 relative">
                  <!-- Close Button -->
                  <button @click="showPopover = false" class="absolute top-4 right-4 text-gray-500 hover:text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  
                  <!-- Heading -->
                  <h1 class="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800">Faculty Profile</h1>
                  
                  <div class="flex flex-col md:flex-row gap-8">
                    <!-- Profile Image and Name -->
                    <div class="md:w-1/3 flex flex-col items-center">
                      <div class="w-48 h-48 rounded-full overflow-hidden border-4 border-indigo-100 shadow-md mb-4">
                        <img :src="'http://localhost:5173/src/assets/' + selectedStaff.image" alt="Profile Picture" class="w-full h-full object-cover">
                      </div>
                      <h2 class="text-xl font-bold text-center text-gray-800 mt-2">{{ selectedStaff.name }}</h2>
                      <p class="text-indigo-600 font-medium text-center">{{ selectedStaff.position }}</p>
                    </div>
                    
                    <!-- Profile Details -->
                    <div class="md:w-2/3 max-h-[60vh] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-indigo-200 scrollbar-track-gray-100">
                      <div class="space-y-6">
                        <div>
                          <h3 class="text-lg font-semibold flex items-center text-gray-800 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Contact
                          </h3>
                          <p class="text-gray-700">{{ selectedStaff.email }}</p>
                        </div>
                        
                        <!-- Education -->
                        <div v-if="selectedStaff.education && selectedStaff.education.length > 0">
                          <h3 class="text-lg font-semibold flex items-center text-gray-800 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path d="M12 14l9-5-9-5-9 5 9 5z" />
                              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                            </svg>
                            Education
                          </h3>
                          <ul class="space-y-2">
                            <li v-for="edu in selectedStaff.education" :key="edu.degree" class="bg-gray-50 p-3 rounded-lg">
                              <div class="font-medium text-gray-800">{{ edu.degree }}</div>
                              <div class="text-gray-600">{{ edu.institution }}</div>
                              <div class="text-sm text-gray-500">{{ edu.year }}</div>
                            </li>
                          </ul>
                        </div>
                        
                        <!-- Rest of profile sections with similar styling -->
                        <!-- Professional Experience -->
                        <div v-if="selectedStaff.professional_experience && selectedStaff.professional_experience.length > 0">
                          <h3 class="text-lg font-semibold flex items-center text-gray-800 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Professional Experience
                          </h3>
                          <ul class="space-y-2">
                            <li v-for="exp in selectedStaff.professional_experience" :key="exp.position" class="bg-gray-50 p-3 rounded-lg">
                              <div class="font-medium text-gray-800">{{ exp.position }}</div>
                              <div class="text-gray-600">{{ exp.institution }}</div>
                              <div class="text-sm text-indigo-500">{{ exp.duration }}</div>
                            </li>
                          </ul>
                        </div>

                        <!-- Research Interests -->
                        <div v-if="selectedStaff.research_interests && selectedStaff.research_interests.length > 0">
                          <h3 class="text-lg font-semibold flex items-center text-gray-800 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                            Research Interests
                          </h3>
                          <div class="flex flex-wrap gap-2">
                            <span v-for="interest in selectedStaff.research_interests" :key="interest"
                                  class="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm">
                              {{ interest }}
                            </span>
                          </div>
                        </div>

                        <!-- Achievements -->
                        <div v-if="selectedStaff.achievements && selectedStaff.achievements.length > 0">
                          <h3 class="text-lg font-semibold flex items-center text-gray-800 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>
                            Achievements
                          </h3>
                          <ul class="space-y-1">
                            <li v-for="achievement in selectedStaff.achievements" :key="achievement" class="flex items-start">
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span class="text-gray-700">{{ achievement }}</span>
                            </li>
                          </ul>
                        </div>

                        <!-- Links -->
                        <div v-if="selectedStaff.links && Object.keys(selectedStaff.links).length > 0">
                          <h3 class="text-lg font-semibold flex items-center text-gray-800 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                            </svg>
                            Links
                          </h3>
                          <div class="flex flex-wrap gap-2">
                            <a v-for="(link, title) in selectedStaff.links" :key="title" :href="link" target="_blank"
                               class="inline-flex items-center bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm hover:bg-blue-100 transition-colors duration-200">
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                              {{ title }}
                            </a>
                          </div>
                        </div>

                        <!-- Additional Details -->
                        <div v-if="selectedStaff.additional_details">
                          <h3 class="text-lg font-semibold text-gray-800 mb-2">Additional Information</h3>
                          <p class="text-gray-700 bg-gray-50 p-3 rounded-lg">{{ selectedStaff.additional_details }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="administration-and-technical-staff" class="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12 bg-white">
            <h2 class="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
              <span class=" bg-clip-text">Administrative Staff</span>
            </h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div
                v-for="staff in department.admin_staff"
                :key="staff.email"
                class="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col border border-gray-100 transform transition-all duration-300"
              >
                <div class="bg-gradient-to-r from-blue-400 to-blue-300 h-2"></div>
                <div class="p-6 flex justify-center">
                  <div class="w-28 h-28 rounded-full overflow-hidden border-2 border-amber-100 shadow">
                    <img :src="'/' + staff.image" :alt="staff.name" class="w-full h-full object-cover" />
                  </div>
                </div>
                
                <div class="flex-grow flex flex-col p-5 text-center">
                  <h2 class="text-xl font-bold text-gray-800 mb-1">{{ staff.name }}</h2>
                  <p class="text-blue-600 font-medium mb-2">{{ staff.position }}</p>
                  <div class="flex items-center justify-center mt-1 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span class="text-gray-600 truncate">{{ staff.email }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="research-and-publications" class="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12 bg-gray-50">
            <h2 class="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
              <span class="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">Research & Publications</span>
            </h2>
            
            <div class="max-w-5xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div class="h-96 overflow-auto p-6 scrollbar-thin scrollbar-thumb-purple-200 scrollbar-track-gray-100">
                <div class="space-y-6">
                  <div 
                    v-for="research in department.research_and_publications" 
                    :key="research.title" 
                    class="p-4 border-b border-gray-100 hover:bg-purple-50 transition-colors duration-200 rounded-lg"
                  >
                    <h3 class="text-lg md:text-xl font-semibold text-gray-800 mb-2">{{ research.title }}</h3>
                    
                    <div class="flex flex-wrap items-center gap-2 mb-3">
                      <div class="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                        {{ research.year }}
                      </div>
                      
                      <div class="text-gray-500 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        {{ research.authors }}
                      </div>
                    </div>
                    
                    <div class="text-sm text-gray-700 italic">
                      Published in: <span class="font-medium">{{ research.journal }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import departmentData from '/src/assets/departments.json';

export default {
  data() {
    return {
      department: null,
      sections: [
        'About Department',
        'Events',
        'Achievements',
        'Facility',
        'Faculty',
        'Administration and Technical Staff',
        'Research and Publications',
      ],
      events: null,
      currentIndex: 0,
      currentSection: null,
      sectionOffsets: [],
      showPopover: false,
      selectedStaff: null
    };
  },
  watch: {
    '$route.params.departmentName': {
      immediate: true,
      handler() {
        this.loadDepartment();
        this.currentSection = this.sections[0];
        this.$nextTick(() => {
          this.updateSectionOffsets();
        });
      }
    }
  },
  methods: {
    loadDepartment() {
      try {
        this.department = departmentData.find(dept => dept.address === this.$route.params.departmentName);
        this.events = this.department.events.reverse();
      } catch (error) {
        console.error('Error loading department:', error);
      }
    },
    scrollToSection(section) {
      const sectionId = section.toLowerCase().replace(/\s+/g, '-');
      const sectionElement = document.getElementById(sectionId);
      const tabHeight = document.querySelector('.sticky').offsetHeight; // Get height of sticky tabs
      if (sectionElement) {
        const offset = sectionElement.offsetTop - tabHeight - 20; // Adjusted offset
        window.scrollTo({
          top: offset,
          behavior: 'smooth'
        });
        this.currentSection = section;
      }
    },
    updateSectionOffsets() {
      this.sectionOffsets = this.sections.map(section => {
        const sectionId = section.toLowerCase().replace(/\s+/g, '-');
        const sectionElement = document.getElementById(sectionId);
        return sectionElement ? sectionElement.offsetTop : 0;
      });
    },
    handleScroll() {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      for (let i = 0; i < this.sectionOffsets.length; i++) {
        const sectionOffset = this.sectionOffsets[i];
        const nextSectionOffset = this.sectionOffsets[i + 1] || Infinity; // Next section's offset or infinity if last section
        const tabHeight = document.querySelector('.sticky').offsetHeight; // Height of the sticky tabs
        if (scrollPosition >= sectionOffset - tabHeight - 20 && scrollPosition < nextSectionOffset - tabHeight - 20) {
          this.currentSection = this.sections[i];
          break;
        }
      }
    },
    showDetails(staff) {
      this.selectedStaff = staff;
      console.log(staff)
      this.showPopover = true;
    },
    showPreviousEvent() {
      this.currentIndex = Math.max(0, this.currentIndex - 1);
    },
    showNextEvent() {
      this.currentIndex = Math.min(this.events.length - 1, this.currentIndex + 1);
    }
  },
  computed: {
    currentEvent() {
      return this.events[this.currentIndex];
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<!-- Add this to your CSS -->
<style>
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
  }
  
  /* Add custom scrollbar styles */
  .scrollbar-thin::-webkit-scrollbar {
    width: 6px;
  }
  
  .scrollbar-thin::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }
  
  .scrollbar-thin::-webkit-scrollbar-thumb {
    background: #c7d2fe;
    border-radius: 10px;
  }
  
  .scrollbar-thin::-webkit-scrollbar-thumb:hover {
    background: #a5b4fc;
  }
  
  /* Faculty card styling */
  .faculty-card {
    @apply bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100 transform transition-all duration-300 cursor-pointer;
  }
  
  /* General transitions for hover effects */
  .transition-all {
    transition: all 0.3s ease;
  }
</style>