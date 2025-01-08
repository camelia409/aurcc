<template>
  <div class="min-h-screen flex flex-col">
    <!-- Hero section -->
    <section
      class="bg-cover bg-center relative -z-10"
      :style="'background-image: url(/src/assets/' + department.image + ')'"
    >
      <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div class="container mx-auto md:py-28 py-4 text-white p-9 relative z-10">
        <h1 class="text-xl md:text-4xl font-bold mb-4">Welcome to {{ department.name }}</h1>
        <p class="text-sm md:text-xl mb-8">Explore our cutting-edge programs and stay ahead in the field.</p>
      </div>
    </section>

    <!-- Tabs Section -->
    <div class="sticky top-0 z-20 bg-white">
      <div class="relative">
        <div class="flex border-b border-gray-200" ref="tabsContainer">
          <button
            class="md:text-lg text-sm md:px-6 md:py-4 px-2 py-2 font-semibold w-full relative"
            :class="{'bg-blue-900 text-white': activeTab === 'about', 'text-gray-600': activeTab !== 'about'}"
            @click="scrollToSection('about')"
            ref="aboutTab"
          >
            About Department
          </button>
          <button
            class="md:text-lg text-sm md:px-6 md:py-4 px-2 py-2 font-semibold w-full relative"
            :class="{'bg-blue-900 text-white': activeTab === 'facility', 'text-gray-600': activeTab !== 'facility'}"
            @click="scrollToSection('facility')"
            ref="facilityTab"
          >
            Facility
          </button>
          <button
            class="md:text-lg text-sm md:px-6 md:py-4 px-2 py-2 font-semibold w-full relative"
            :class="{'bg-blue-900 text-white': activeTab === 'faculty', 'text-gray-600': activeTab !== 'faculty'}"
            @click="scrollToSection('faculty')"
            ref="facultyTab"
          >
            Faculty
          </button>
        </div>
        <div :style="highlightStyle" class="absolute h-1 bg-blue-500 bottom-0 left-0 transition-all duration-300"></div>
      </div>
    </div>

    <!-- Content Section -->
    <section id="about" ref="about" class="scroll-section bg-blue-100">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-10 items-stretch">
              <div class="flex flex-col">
                <div class="size-full max-h-full bg-white rounded-lg shadow-lg overflow-hidden">
                  <h2 class="text-2xl md:text-4xl md:p-4 p-3 bg-[#21209c]  text-white font-serif text-center font-medium md:mb-6">About Department</h2>
                  <p class="text-lg md:text-xl text-gray-700 md:p-6 p-4 leading-relaxed">{{ department.description }}</p>
                </div>
              </div>
              <div class="grid grid-cols-1 gap-6" style="font-family: 'Clash Grotesk', sans-serif;">
                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                  <h3 class="text-2xl md:text-4xl md:p-4 p-3 bg-[#21209c]  text-white font-serif text-center font-medium ">Vision</h3>
                  <div class="md:p-5 p-3 overflow-hidden relative" style="max-height: 300px;">
                    <p class="text-lg md:text-xl text-gray-700 leading-relaxed">{{ department.vision }}</p>
                  </div>
                </div>
                <div class="bg-white rounded-lg shadow-lg overflow-hidden ">
                  <h3 class="text-2xl md:text-4xl md:p-4 p-3 bg-[#21209c] text-white font-serif text-center font-medium">Mission</h3>
                  <div class="md:p-5 p-3 overflow-hidden relative" style="md:max-height: 300px;">
                    <ul class="text-lg md:text-xl list-disc pl-5 text-gray-700 space-y-2">
                      <li v-for="mission in department.mission" :key="mission">{{ mission }}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
      </div>
    </section>

    <section id="facility" ref="facility" class="scroll-section bg-blue-100">
        <h2 class="text-2xl md:text-4xl bg-[#0a0a34] text-center text-[#fdb827] font-serif font-bold md:p-8 p-4">Facility</h2>
        <div class="grid gap-8 bg-blue-100">
          <div 
            v-for="(facility, index) in department.facility" 
            :key="facility.name" 
            :class="index % 2 === 0 ? 'flex flex-col md:flex-row items-center' : 'flex flex-col md:flex-row-reverse items-center'"
          >
            <div class="md:w-1/2 p-4 flex justify-center items-center">
              <img :src="'http://localhost:5173/src/assets/' + facility.image" :alt="facility.name" class="w-full h-auto object-cover md:max-h-[300px] rounded-lg">
            </div>
            <div class="md:w-1/2 md:p-4 p-3">
              <h3 class="text-lg md:text-2xl text-center font-serif mb-2 font-semibold">{{ facility.name }}</h3>
              <ul class="list-disc ml-6 text-base md:text-xl text-gray-700">
                <li v-for="lab in facility.description" :key="lab">{{ lab }}</li>
              </ul>
            </div>
          </div>
      </div>
    </section>

    <section id="faculty" ref="faculty" class="scroll-section bg-blue-100">
      <div class="bg-yellow-100">
        <h2 class="text-2xl md:text-4xl bg-[#3c2813] text-center text-white font-serif font-bold p-4 md:p-8">Faculty</h2>
        <!-- HOD Desk -->
        <div class="bg-yellow-100">
          <h3 class="text-2xl md:text-3xl text-center font-semibold pt-5 md:pt-10">HOD Desk</h3>
          <div class="flex justify-center flex-wrap">
            <div 
              v-for="staff in department.faculty.hod_desk" 
              :key="staff.email" 
              class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col m-10 sm:m-6 md:m-20 items-center border-4 border-black   cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-1"
              @click="showDetails(staff)"
            >
              <div class="w-full flex justify-center px-5 md:px-12 pt-2 md:pt-2 ">
                  <div class="w-40 sm:w-48 md:w-60 h-40 sm:h-48 md:h-60 overflow-hidden">
                    <img :src="'http://localhost:5173/src/assets/' + staff.image" :alt="staff.name" class="w-full h-full object-contain"/>
                  </div>
              </div>
              <div class="flex-grow flex flex-col justify-center p-3 sm:p-4 md:p-6 bg-gray-100 text-center w-full">
                <h2 class="text-sm sm:text-lg md:text-2xl font-semibold text-black">{{ staff.name }}</h2>
                <p class="text-xs sm:text-sm md:text-lg text-gray-800">{{ staff.position }}</p>
                <p class="text-xs sm:text-sm md:text-lg text-gray-800">{{ staff.email }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Assistant Professors -->
          <div>
              <h3 class="text-2xl md:text-3xl text-center font-semibold  pt-4 bg-yellow-100">Assistant Professors</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-4 bg-yellow-100">
                <div 
                  v-for="staff in department.faculty.assistant_professors" 
                  :key="staff.email" 
                  class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col m-20 sm:m-6 md:m-20 items-center border-4 border-black cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-1" 
                  @click="showDetails(staff)"
                >
                  <div class="w-full flex justify-center  pt-2 md:pt-4">
                    <div class="w-40 sm:w-48 md:w-60 h-40 sm:h-48 md:h-60 overflow-hidden">
                      <img :src="'http://localhost:5173/src/assets/' + staff.image" :alt="staff.name" class="h-full w-full object-contain "/>
                    </div>
                  </div>
                  <div class="flex-grow flex flex-col justify-center p-3 sm:p-4 md:p-6 bg-gray-100 text-center w-full">
                    <h2 class="text-sm sm:text-lg md:text-2xl font-semibold text-black">{{ staff.name }}</h2>
                    <p class="text-xs sm:text-sm md:text-lg text-gray-800">{{ staff.position }}</p>
                    <p class="text-xs sm:text-sm md:text-lg text-gray-800">{{ staff.email }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>

    <!-- Modal -->
    <div v-if="showPopover" class="modal modal-open">
              <div class="modal-box relative rounded-lg flex flex-col max-w-4xl p-6">
                <!-- Close Button -->
                <button @click="showPopover = false" class="btn btn-sm btn-circle absolute right-2 top-2">✕</button>
                <!-- Heading -->
                <h1 class="font-bold text-xl md:text-3xl md:mb-10 mb-6 text-center w-full">FACULTY DETAILS</h1>
                <div class="flex flex-col md:flex-row">
                  <!-- Fixed Image -->
                  <div class="flex-shrink-0 text-center md:my-auto md:mr-8 mr-0" >
                    <img :src="'http://localhost:5173/src/assets/' + selectedStaff.image" alt="Profile Picture" class="md:h-96 md:w-72 h-46 w-44 md:ml-0 ml-16 rounded-lg shadow-lg object-cover">
                    <h2 class="text-lg font-semibold mt-4 md:mb-0 mb-4 ">{{ selectedStaff.name }}</h2>
                  </div>
                  <!-- Scrollable Details -->
                  <div class="flex-grow max-h-[50vh] pr-6  shadow-inner">
                    <h3 class="text-base md:text-xl font-semibold"><strong>Position:</strong> {{ selectedStaff.position }}</h3>
                    <h3 class="text-base md:text-xl font-semibold"><strong>Email:</strong> {{ selectedStaff.email }}</h3>
                    <!-- Education -->
                    <template v-if="selectedStaff.education">
                      <h3 class="text-md font-semibold mt-4"><strong>Education</strong></h3>
                      <ul class="list-disc ml-6">
                        <li v-for="edu in selectedStaff.education" :key="edu">{{ edu }}</li>
                      </ul>
                    </template>
                    <!-- Professional Experience -->
                    <template v-if="selectedStaff.professional_experience">
                      <h3 class="text-md font-semibold mt-4"><strong>Professional Experience</strong></h3>
                      <ul class="list-disc ml-6">
                        <li v-for="exp in selectedStaff.professional_experience" :key="exp.position">{{ exp.position }}, {{ exp.institution }} ({{ exp.duration }})</li>
                      </ul>
                    </template>
                    <!-- Research Interests -->
                    <template v-if="selectedStaff.research_interests">
                      <h3 class="text-md font-semibold mt-4"><strong>Research Interests</strong></h3>
                      <ul class="list-disc ml-6">
                        <li v-for="interest in selectedStaff.research_interests" :key="interest">{{ interest }}</li>
                      </ul>
                    </template>
                    <!-- Achievements -->
                    <template v-if="selectedStaff.achievements">
                      <h3 class="text-md font-semibold mt-4"><strong>Achievements</strong></h3>
                      <ul class="list-disc ml-6">
                        <li v-for="achievement in selectedStaff.achievements" :key="achievement">{{ achievement }}</li>
                      </ul>
                    </template>
                    <!-- Links -->
                    <template v-if="selectedStaff.links">
                      <h3 class="text-md font-semibold mt-4"><strong>Links</strong></h3>
                      <ul class="list-disc ml-6">
                        <li v-for="link in selectedStaff.drive_link" :key="link"><a :href="link" target="_blank" class="text-violet-600 hover:underline">{{ link }}</a></li>
                      </ul>
                    </template>
                    <!-- Additional Details -->
                    <template v-if="selectedStaff.additional_details">
                      <h3 class="text-md font-semibold mt-4">Additional Details</h3>
                      <p>{{ selectedStaff.additional_details }}</p>
                    </template>
                  </div>
                </div>
              </div>
            </div>
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
.scroll-section {
  min-height: 100vh;
}
</style>
