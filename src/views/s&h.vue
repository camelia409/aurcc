<template>
  <div class="min-h-screen flex flex-col">
    <!-- Hero section with Parallax Effect -->
    <section class="bg-cover bg-center relative h-80 md:h-96"
  :style="'background-image: url(/' + department.image + ')'">
  <div class="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-indigo-900/60 z-0"></div>
  <div class="container mx-auto h-full flex items-center relative z-10 px-6 md:px-9">
    <div class="max-w-2xl">
      <h1 class="text-2xl md:text-5xl font-bold mb-4 text-white">
        <span class="bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
          {{ department.name }}
        </span>
      </h1>
      <p class="text-sm md:text-xl mb-8 text-gray-100 leading-relaxed">
        Explore our cutting-edge programs and stay ahead in the field.
      </p>
      <button class="bg-white text-indigo-700 hover:bg-indigo-100 py-2 px-6 rounded-full font-semibold transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
        Learn More
      </button>
    </div>
  </div>
</section>


    <!-- Modern Tabs Section with Animated Underline -->
    <div class="sticky top-0 z-30 bg-white shadow-md">
      <div class="container mx-auto">
        <div class="flex relative">
          <button
            class="tab-button"
            :class="{'tab-active': activeTab === 'about', 'tab-inactive': activeTab !== 'about'}"
            @click="scrollToSection('about')"
            ref="aboutTab"
          >
            About Department
          </button>
          <button
            class="tab-button"
            :class="{'tab-active': activeTab === 'facility', 'tab-inactive': activeTab !== 'facility'}"
            @click="scrollToSection('facility')"
            ref="facilityTab"
          >
            Facility
          </button>
          <button
            class="tab-button"
            :class="{'tab-active': activeTab === 'faculty', 'tab-inactive': activeTab !== 'faculty'}"
            @click="scrollToSection('faculty')"
            ref="facultyTab"
          >
            Faculty
          </button>
          <div :style="highlightStyle" class="absolute h-1 bg-gradient-to-r from-blue-600 to-indigo-600 bottom-0 left-0 transition-all duration-300"></div>
        </div>
      </div>
    </div>

    <!-- About Section with Modern Cards -->
    <section id="about" ref="about" class="scroll-section py-16 bg-gray-50">
      <div class="w-full">
  <div class="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12 bg-gradient-to-b from-gray-50 to-white">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      
      <!-- About Department Card -->
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

      <!-- Vision & Mission Cards -->
      <div class="grid grid-cols-1 gap-8 h-full">
        
        <!-- Vision Card -->
        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md">
          <div class="bg-gradient-to-r from-blue-500 to-cyan-400 py-6">
            <h3 class="text-2xl md:text-3xl text-white font-bold text-center">Vision</h3>
          </div>
          <div class="p-6 md:p-8">
            <p class="text-lg text-gray-700 leading-relaxed">{{ department.vision }}</p>
          </div>
        </div>
        
        <!-- Mission Card -->
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
</div>

    </section>

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
    <!-- Facility Section with Improved Layout -->
    <section id="facility" ref="facility" class="scroll-section py-16 bg-white">
      <div class="container mx-auto px-4">
        <!-- Section Title with Animated Underline -->
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-blue-900 relative inline-block group">
            FACILITIES
            <span class="absolute -bottom-3 left-0 h-1 w-full bg-yellow-500 transform origin-left transition-transform duration-300 group-hover:scale-x-110"></span>
          </h2>
        </div>

        <!-- Facilities Cards with Alternating Layout -->
        <div class="space-y-16 mx-10">
          <div 
            v-for="(facility, index) in department.facility" 
            :key="facility.name" 
            class="facility-card"
            :class="{'from-left': index % 2 === 0, 'from-right': index % 2 !== 0}"
          >
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div :class="{'md:order-1': index % 2 !== 0, 'md:order-2': index % 2 === 0}">
                <img 
                  :src="'/' + facility.image" 
                  :alt="facility.name" 
                  class="w-full h-auto object-cover rounded-xl shadow-lg"
                >
              </div>
              <div :class="{'md:order-2': index % 2 !== 0, 'md:order-1': index % 2 === 0}" class="p-4">
                <h3 class="text-xl md:text-2xl font-bold text-blue-900 mb-4">{{ facility.name }}</h3>
                <ul class="space-y-2">
                  <li v-for="lab in facility.description" :key="lab" class="flex items-start space-x-2">
                    <svg class="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-gray-700">{{ lab }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Faculty Section with Modern Cards -->
    <section id="faculty" ref="faculty" class="scroll-section py-16 bg-gray-50 mx-28">
      <div class="container mx-auto px-4">
        <!-- Section Title with Animated Underline -->
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-blue-900 relative inline-block group">
            FACULTY MEMBERS
            <span class="absolute -bottom-3 left-0 h-1 w-full bg-blue-500 transform origin-left transition-transform duration-300 group-hover:scale-x-110"></span>
          </h2>
        </div>

        <!-- HOD Desk -->
        <div class="mb-16">
          <h3 class="text-2xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-700">HOD Desk</h3>
          <div class="flex justify-center">
            <div 
              v-for="staff in department.faculty.hod_desk" 
              :key="staff.email" 
              class="faculty-card"
              @click="showDetails(staff)"
            >
              <!-- Photo with Gradient Background -->
              <div class="relative pt-2 flex justify-center">
                <div class="absolute inset-0 h-1/2 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
                <div class="relative">
                  <img 
                    :src="'/' + staff.image" 
                    :alt="staff.name" 
                    class="w-48 h-58 object-cover rounded-full border-4 border-white shadow-lg"
                  >
                </div>
              </div>
              
              <!-- Faculty Info -->
              <div class="p-6 text-center">
                <h4 class="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">{{ staff.name }}</h4>
                <p class="text-blue-600 font-medium">{{ staff.position }}</p>
                <p class="text-gray-500 text-sm">{{ staff.email }}</p>
                
                <!-- View Profile Button -->
                <button class="mt-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300">
                  View Profile
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Assistant Professors -->
        <div>
          <h3 class="text-2xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-700">Assistant Professors</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-28">
            <div 
              v-for="staff in department.faculty.assistant_professors" 
              :key="staff.email" 
              class="faculty-card"
              @click="showDetails(staff)"
            >
              <!-- Photo with Gradient Background -->
              <div class="relative pt-2 flex justify-center">
                <div class="absolute inset-0 h-1/2 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
                <div class="relative">
                  <img 
                    :src="'/' + staff.image" 
                    :alt="staff.name" 
                    class="w-48 h-58 object-cover rounded-full border-4 border-white shadow-lg"
                  >
                </div>
              </div>
              
              <!-- Faculty Info -->
              <div class="p-6 text-center">
                <h4 class="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">{{ staff.name }}</h4>
                <p class="text-blue-600 font-medium">{{ staff.position }}</p>
                <p class="text-gray-500 text-sm">{{ staff.email }}</p>
                
                <!-- View Profile Button -->
                <button class="mt-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300">
                  View Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Faculty Details Modal with Modern Design -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="showPopover" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" @click.self="showPopover = false">
        <Transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="transition-all duration-300 ease-in"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
        >
          <div v-if="showPopover" class="bg-white rounded-2xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
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
                  <div class="w-48 h-58 rounded-full overflow-hidden border-4 border-indigo-100 shadow-md mb-4">
                    <img :src="'/' + selectedStaff.image" :alt="selectedStaff.name" class="w-full h-full object-cover">
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
                    <div v-if="selectedStaff.education" class="mb-6">
                      <h3 class="text-lg font-semibold flex items-center text-gray-800 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14z" />
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                        </svg>
                        Education
                      </h3>
                      <ul class="space-y-2">
                        <li v-for="edu in selectedStaff.education" :key="edu" class="bg-gray-50 p-3 rounded-lg">
                          <div class="font-medium text-gray-800">{{ edu }}</div>
                        </li>
                      </ul>
                    </div>
                    
                    <!-- Professional Experience -->
                    <div v-if="selectedStaff.professional_experience" class="mb-6">
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
                    <div v-if="selectedStaff.research_interests" class="mb-6">
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
                    <div v-if="selectedStaff.achievements" class="mb-6">
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
                    <div v-if="selectedStaff.links">
                      <h3 class="text-lg font-semibold flex items-center text-gray-800 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                        </svg>
                        Links
                      </h3>
                      <div class="flex flex-wrap gap-2">
                        <a v-for="(url, title) in selectedStaff.links" :key="title" :href="url" target="_blank"
                           class="inline-flex items-center bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm hover:bg-blue-100 transition-colors duration-200">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          {{ title }}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </div>
</template>

<script>
import departmentData from '/src/assets/s&h.json';

export default {
  data() {
    return {
      department: departmentData,
      activeTab: 'about',
      showPopover: false,
      selectedStaff: {},
      highlightStyle: {
        width: '0px',
        transform: 'translateX(0px)'
      }
    };
  },
  methods: {
    scrollToSection(sectionId) {
      const section = this.$refs[sectionId];
      if (section) {
        window.scrollTo({
          top: section.offsetTop,
          behavior: 'smooth'
        });
        this.activeTab = sectionId;
        this.updateHighlight();
      }
    },
    updateHighlight() {
      this.$nextTick(() => {
        const tabsContainer = this.$refs.tabsContainer;
        const activeTab = this.$refs[`${this.activeTab}Tab`];
        
        if (tabsContainer && activeTab) {
          const containerRect = tabsContainer.getBoundingClientRect();
          const tabRect = activeTab.getBoundingClientRect();
          
          this.highlightStyle = {
            width: `${tabRect.width}px`,
            transform: `translateX(${tabRect.left - containerRect.left}px)`
          };
        }
      });
    },
    showDetails(staff) {
      this.selectedStaff = staff;
      this.showPopover = true;
    },
    splitProfile(profileText) {
      return profileText.split(';').map(point => point.trim());
    },
    handleScroll() {
      const sections = ['about', 'facility', 'faculty'];
      let currentSection = this.activeTab;
      
      sections.forEach(sectionId => {
        const section = this.$refs[sectionId];
        if (section) {
          const sectionRect = section.getBoundingClientRect();
          if (sectionRect.top <= 0 && sectionRect.bottom > window.innerHeight / 2) {
            currentSection = sectionId;
          }
        }
      });
      
      if (this.activeTab !== currentSection) {
        this.activeTab = currentSection;
        this.updateHighlight();
      }
    }
  },
  mounted() {
    this.updateHighlight();
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<style scoped>
/* Tab styling */
.tab-button {
  @apply px-6 py-4 font-medium text-center w-full relative transition-all duration-300;
}

.tab-active {
  @apply text-blue-700 font-semibold;
}

.tab-inactive {
  @apply text-gray-600 hover:text-blue-600;
}

/* Faculty card styling */
.faculty-card {
  @apply bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100 transform transition-all duration-300 cursor-pointer;
}

/* Facility card animations */
.from-left {
  animation: slideInLeft 0.5s ease-out forwards;
}

.from-right {
  animation: slideInRight 0.5s ease-out forwards;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Custom scrollbar */
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: #93c5fd transparent;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #93c5fd;
  border-radius: 20px;
}
</style>
