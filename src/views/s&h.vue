<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <main>
      <!-- Hero section -->
      <section
        class="bg-cover bg-center relative h-64 sm:h-72 md:h-80 lg:h-96"
        :style="'background-image: url(/' + department.image + ')'"
      >
        <div class="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-indigo-900/60"></div>
        <div class="container mx-auto h-full flex items-center relative z-10 px-3 sm:px-4 md:px-6 lg:px-9">
          <div class="max-w-2xl">
            <h1 class="mobile-text-xl sm:mobile-text-2xl lg:mobile-text-3xl xl:mobile-text-4xl font-bold mb-3 sm:mb-4 text-white">
              <span class="bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
                {{ department.name }}
              </span>
            </h1>
            <p class="mobile-text-sm lg:mobile-text-base xl:mobile-text-xl mb-6 sm:mb-8 text-gray-100 leading-relaxed">Explore our cutting-edge programs and stay ahead in the field.</p>
            <button class="mobile-btn bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 sm:px-6 rounded-full transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Learn More
            </button>
          </div>
        </div>
      </section>
      
      <!-- Navigation Tabs - Modern floating design -->
      <div class="sticky top-0 z-20">
        <div class="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div class="bg-white/95 backdrop-blur-sm shadow-lg rounded-full -mt-4 sm:-mt-6 py-1 px-2 flex justify-center overflow-x-auto no-scrollbar">
            <nav role="tablist" class="tabs flex space-x-1 md:space-x-2">
              <button role="tab"
                v-for="(section, index) in sections"
                :key="index"
                @click="scrollToSection(section)"
                :class="{
                  'bg-indigo-600 text-white': currentSection === section,
                  'text-gray-700 hover:bg-gray-100': currentSection !== section
                }"
                class="font-medium px-3 sm:px-4 md:px-5 py-2 md:py-3 rounded-full mobile-text-xs sm:mobile-text-sm lg:mobile-text-base transition duration-300 whitespace-nowrap"
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
                     <div id="about-department" class="section-container bg-gradient-to-b from-gray-50 to-white">
             <div class="max-w-6xl mx-auto">
               <div class="mobile-grid gap-6 sm:gap-8 items-start">
                 <div class="flex flex-col h-full">
                   <div class="section-card h-full">
                     <div class="bg-gradient-to-r from-indigo-600 to-blue-500 py-4 sm:py-6">
                       <h2 class="mobile-text-lg sm:mobile-text-xl lg:mobile-text-2xl xl:mobile-text-3xl text-white font-bold text-center">About Department</h2>
                     </div>
                     <div class="section-content">
                       <p class="mobile-text-base lg:mobile-text-lg xl:mobile-text-xl text-gray-700 leading-relaxed">{{ department.description }}</p>
                     </div>
                   </div>
                 </div>
                 
                 <div class="mobile-grid gap-6 sm:gap-8 h-full">
                   <div class="section-card">
                     <div class="bg-gradient-to-r from-blue-500 to-cyan-400 py-4 sm:py-6">
                       <h3 class="mobile-text-lg sm:mobile-text-xl lg:mobile-text-2xl xl:mobile-text-3xl text-white font-bold text-center">Vision</h3>
                     </div>
                     <div class="section-content">
                       <p class="mobile-text-base lg:mobile-text-lg xl:mobile-text-xl text-gray-700 leading-relaxed">{{ department.vision }}</p>
                     </div>
                   </div>
                   
                   <div class="section-card">
                     <div class="bg-gradient-to-r from-cyan-400 to-teal-400 py-4 sm:py-6">
                       <h3 class="mobile-text-lg sm:mobile-text-xl lg:mobile-text-2xl xl:mobile-text-3xl text-white font-bold text-center">Mission</h3>
                     </div>
                     <div class="section-content">
                       <ul class="mobile-text-base lg:mobile-text-lg xl:mobile-text-xl list-disc pl-4 sm:pl-5 text-gray-700 space-y-2 sm:space-y-3">
                         <li v-for="mission in department.mission" :key="mission" class="pl-2">{{ mission }}</li>
                       </ul>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>


                     <!-- <div id="facility" class="section-container bg-white">
             <h2 class="mobile-text-xl sm:mobile-text-2xl lg:mobile-text-3xl xl:mobile-text-4xl font-bold text-center mb-8 sm:mb-10">
              <span class="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">World-Class Facilities</span>
            </h2>
             
             <div class="max-w-6xl mx-auto space-y-12 sm:space-y-16">
               <div 
                 v-for="(facility, index) in department.facility" 
                 :key="facility.name" 
                 :class="index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'"
                 class="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-12"
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
                   <h3 class="mobile-text-lg sm:mobile-text-xl lg:mobile-text-2xl xl:mobile-text-3xl font-bold mb-4 sm:mb-6 text-gray-800">{{ facility.name }}</h3>
                   <ul class="space-y-2 sm:space-y-3">
                     <li v-for="item in facility.description" :key="item" class="flex items-start">
                       <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6 text-emerald-500 mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                       </svg>
                       <span class="mobile-text-sm lg:mobile-text-base xl:mobile-text-lg text-gray-700">{{ item }}</span>
                     </li>
                   </ul>
                 </div>
               </div>
             </div>
           </div> -->

                     <div id="faculty" class="section-container bg-gray-50">
             <!-- Section Title with Animated Underline -->
            <div class="text-center mb-8 sm:mb-12">
              <h2 class="mobile-text-xl sm:mobile-text-2xl lg:mobile-text-3xl xl:mobile-text-4xl font-bold text-gray-800 relative inline-block group">
                OUR FACULTY
                <span class="absolute -bottom-2 sm:-bottom-3 left-0 h-1 w-full bg-gradient-to-r from-blue-600 to-indigo-600 transform origin-left transition-transform duration-300 group-hover:scale-x-110"></span>
              </h2>
            </div>
           
            <!-- HOD Desk -->
            <div class="mb-12 sm:mb-16">
              <h3 class="mobile-text-lg sm:mobile-text-xl lg:mobile-text-2xl font-bold text-center mb-6 sm:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-700">Head of Department</h3>
              <div class="flex justify-center">
                <div 
                  v-for="staff in department.faculty.hod_desk" 
                  :key="staff.email" 
                  class="faculty-card hod-card"
                  @click="showDetails(staff)"
                >
                  <!-- Photo with Gradient Background - Responsive sizing -->
                  <div class="relative pt-2 flex justify-center">
                    <div class="absolute inset-0 h-1/2 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
                    <div class="relative">
                      <img 
                        :src="'/' + staff.image" 
                        :alt="staff.name" 
                        class="w-28 h-36 sm:w-32 sm:h-40 lg:w-36 lg:h-44 object-cover rounded-full border-4 border-white shadow-lg"
                      >
                    </div>
                  </div>
                  
                  <!-- Faculty Info -->
                  <div class="p-4 sm:p-6 text-center">
                    <h4 class="mobile-text-base lg:mobile-text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">{{ staff.name }}</h4>
                    <p class="mobile-text-sm lg:mobile-text-base text-gray-700 font-medium">{{ staff.position }}</p>
                    <p class="mobile-text-xs lg:mobile-text-sm text-gray-500">{{ staff.email }}</p>
                    
                    <!-- View Profile Button -->
                    <button class="mt-3 sm:mt-4 px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white mobile-text-xs lg:mobile-text-sm rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Assistant Professors -->
            <div>
              <h3 class="mobile-text-lg sm:mobile-text-xl lg:mobile-text-2xl font-bold text-center mb-6 sm:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-700">Assistant Professors</h3>
              <div class="mobile-grid gap-6 sm:gap-8 justify-items-center">
                <div 
                  v-for="staff in department.faculty.assistant_professors" 
                  :key="staff.email" 
                  class="faculty-card hod-card"
                  @click="showDetails(staff)"
                >
                  <!-- Photo with Gradient Background - Responsive sizing -->
                  <div class="relative pt-2 flex justify-center">
                    <div class="absolute inset-0 h-1/2 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
                    <div class="relative">
                      <img 
                        :src="'/' + staff.image" 
                        :alt="staff.name" 
                        class="w-28 h-36 sm:w-32 sm:h-40 lg:w-36 lg:h-44 object-cover rounded-full border-4 border-white shadow-lg"
                      >
                    </div>
                  </div>
                  
                  <!-- Faculty Info -->
                  <div class="p-4 sm:p-6 text-center">
                    <h4 class="mobile-text-base lg:mobile-text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">{{ staff.name }}</h4>
                    <p class="mobile-text-sm lg:mobile-text-base text-gray-700 font-medium">{{ staff.position }}</p>
                    <p class="mobile-text-xs lg:mobile-text-sm text-gray-500">{{ staff.email }}</p>
                    
                    <!-- View Profile Button -->
                    <button class="mt-3 sm:mt-4 px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white mobile-text-xs lg:mobile-text-sm rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
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
                      <div class="w-48 h-68 rounded-full overflow-hidden border-4 border-indigo-100 shadow-md mb-4">
                        <img :src="'/' + selectedStaff.image" alt="Profile Picture" class="w-full h-full object-cover">
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
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.078 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
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
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import departmentData from '../assets/s&h.json';

export default {
  data() {
    return {
      department: null,
      sections: [
        'About Department',
        'Facility',
        'Faculty',
      ],
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
        this.department = departmentData;
        console.log('Loaded department:', this.department);
      } catch (error) {
        console.error('Error loading department:', error);
      }
    },
    scrollToSection(section) {
      const sectionId = section.toLowerCase().replace(/\s+/g, '-');
      const sectionElement = document.getElementById(sectionId);
      const tabHeight = document.querySelector('.sticky').offsetHeight;
      if (sectionElement) {
        const offset = sectionElement.offsetTop - tabHeight - 20;
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
        const nextSectionOffset = this.sectionOffsets[i + 1] || Infinity;
        const tabHeight = document.querySelector('.sticky').offsetHeight;
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
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.loadDepartment();
    this.currentSection = this.sections[0];
    this.$nextTick(() => {
      this.updateSectionOffsets();
    });
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
    min-height: 320px; /* Reduced for mobile */
    max-width: 280px; /* Reduced for mobile */
    width: 280px; /* Force exact width */
    flex-shrink: 0; /* Prevent shrinking */
    flex-grow: 0; /* Prevent growing */
  }
  
  .faculty-card:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(59, 130, 246, 0.15);
    border-color: #2563eb;
  }
  
  /* HOD card styling - Fixed size to match Assistant Professors */
  .hod-card {
    min-height: 320px; /* Same as faculty-card */
    max-width: 280px; /* Fixed width for consistency */
    width: 280px; /* Force exact width */
    flex-shrink: 0; /* Prevent shrinking */
    flex-grow: 0; /* Prevent growing */
  }
  
  .hod-card:hover {
    transform: translateY(-12px) scale(1.03);
    box-shadow: 0 25px 50px rgba(59, 130, 246, 0.2);
  }
  
  /* Ensure consistent image sizing for different card types */
  .hod-card img {
    width: 112px; /* w-28 = 7rem = 112px - Mobile optimized */
    height: 144px; /* h-36 = 9rem = 144px - Mobile optimized */
    object-fit: cover;
    border-radius: 9999px;
    border: 4px solid white;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  }
  
  .faculty-card img {
    width: 112px; /* w-28 = 7rem = 112px */
    height: 144px; /* h-36 = 9rem = 144px */
    object-fit: cover;
    border-radius: 9999px;
    border: 4px solid white;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
  
  /* Mobile responsive adjustments */
  @media (min-width: 640px) {
    .hod-card img {
      width: 128px; /* w-32 = 8rem = 128px */
      height: 160px; /* h-40 = 10rem = 160px */
    }
    
    .faculty-card img {
      width: 128px; /* w-32 = 8rem = 128px */
      height: 160px; /* h-40 = 10rem = 160px */
    }
  }
  
  @media (min-width: 1024px) {
    .hod-card img {
      width: 144px; /* w-36 = 9rem = 144px */
      height: 176px; /* h-44 = 11rem = 176px */
    }
    
    .faculty-card img {
      width: 144px; /* w-36 = 9rem = 144px */
      height: 176px; /* h-44 = 11rem = 176px */
    }
  }
  
  /* General transitions for hover effects */
  .transition-all {
    transition: all 0.3s ease;
  }
  
  /* Consistent section styling for professional appearance */
  .section-container {
    @apply px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl mx-auto py-8 sm:py-10 lg:py-12;
    width: 100%;
  }
  
  .section-title {
    @apply text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800;
  }
  
  .section-card {
    @apply bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl;
  }
  
  .section-header {
    @apply py-8;
  }
  
  .section-content {
    @apply p-4 sm:p-6 md:p-8 lg:p-10;
  }
  
  /* Ensure consistent spacing between sections */
  .section-container + .section-container {
    @apply mt-0;
  }
  
  /* Consistent background alternation */
  .section-container:nth-child(even) {
    @apply bg-gray-50;
  }
  
  .section-container:nth-child(odd) {
    @apply bg-white;
  }
</style>
