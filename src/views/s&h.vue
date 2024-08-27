<template>
  <div class="min-h-screen flex flex-col">
    <!-- Hero section -->
    <section
      class="bg-cover bg-center relative -z-10"
      :style="'background-image: url(/src/assets/' + department.image + ')'"
    >
      <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div class="container mx-auto py-16 text-white p-9 relative z-10">
        <h1 class="text-4xl font-bold mb-4">Welcome to {{ department.name }}</h1>
        <p class="text-xl mb-8">Explore our cutting-edge programs and stay ahead in the field.</p>
        <button class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Learn More</button>
      </div>
    </section>

    <!-- Tabs Section -->
    <div class="sticky top-0 z-20 bg-white">
      <div class="relative">
        <div class="flex border-b border-gray-200" ref="tabsContainer">
          <button
            class="text-lg px-6 py-4 font-semibold w-full relative"
            :class="{'bg-blue-500 text-white': activeTab === 'about', 'text-gray-600': activeTab !== 'about'}"
            @click="scrollToSection('about')"
            ref="aboutTab"
          >
            About Department
          </button>
          <button
            class="text-lg px-6 py-4 font-semibold w-full relative"
            :class="{'bg-blue-500 text-white': activeTab === 'facility', 'text-gray-600': activeTab !== 'facility'}"
            @click="scrollToSection('facility')"
            ref="facilityTab"
          >
            Facility
          </button>
          <button
            class="text-lg px-6 py-4 font-semibold w-full relative"
            :class="{'bg-blue-500 text-white': activeTab === 'faculty', 'text-gray-600': activeTab !== 'faculty'}"
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
      <div class="container mx-auto px-4 py-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <div class="flex flex-col">
            <div class="size-full max-h-full bg-white rounded-lg shadow-lg overflow-hidden transition-shadow duration-300">
              <h2 class="text-4xl p-4 bg-gradient-to-r from-blue-500 to-cyan-300 text-center font-semibold mb-6 text-black">
                About Department
              </h2>
              <p class="text-xl text-gray-700 p-6 leading-relaxed">{{ department.description }}</p>
            </div>
          </div>
          <div class="grid grid-cols-1 gap-6">
            <div class="bg-white rounded-lg shadow-lg overflow-hidden transition-shadow duration-300">
              <h3 class="text-4xl p-4 bg-gradient-to-r from-blue-500 to-cyan-300 text-center font-semibold text-black">Vision</h3>
              <div class="p-5 overflow-hidden relative">
                <p class="text-xl text-gray-700 leading-relaxed">{{ department.vision }}</p>
              </div>
            </div>
            <div class="bg-white rounded-lg shadow-lg overflow-hidden transition-shadow duration-300">
              <h3 class="text-4xl p-4 bg-gradient-to-r from-blue-500 to-cyan-300 text-center font-semibold text-black">Mission</h3>
              <div class="p-5 overflow-hidden relative">
                <ul class="text-xl list-disc pl-5 text-gray-700 space-y-2">
                  <li v-for="mission in department.mission" :key="mission">{{ mission }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="facility" ref="facility" class="scroll-section bg-blue-100">
      <div class="container mx-auto py-10">
        <h2 class="text-5xl bg-[#0a0a34] text-center text-[#fdb827] font-extrabold p-10">Facility</h2>
        <div class="grid gap-8 bg-blue-100">
          <div 
            v-for="(facility, index) in department.facility" 
            :key="facility.name" 
            :class="index % 2 === 0 ? 'flex flex-col md:flex-row items-center' : 'flex flex-col md:flex-row-reverse items-center'"
          >
            <div class="md:w-1/2 p-4 flex justify-center items-center">
              <img :src="'/src/assets/' + facility.image" :alt="facility.name" class="w-full h-auto object-cover md:max-h-[300px] rounded-lg">
            </div>
            <div class="md:w-1/2 p-4">
              <h3 class="text-xl text-lg text-center font-semibold">{{ facility.name }}</h3>
              <p class="text-xl text-gray-700">{{ facility.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="faculty" ref="faculty" class="scroll-section bg-blue-100">
      <div class="container mx-auto py-10">
        <h2 class="text-5xl bg-[#3c2813] text-center text-white font-bold p-8">Faculty</h2>
        <!-- HOD Desk -->
        <div class="bg-yellow-100">
          <h3 class="text-3xl text-center font-semibold p-10">HOD Desk</h3>
          <div class="flex justify-center flex-wrap">
            <div 
              v-for="staff in department.faculty.hod_desk" 
              :key="staff.email" 
              class="admin-member bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-1"
              @click="showDetails(staff)"
            >
              <div class="w-full max-w-xs aspect-[1/1] overflow-hidden border-4 border-gray-200">
                <img :src="'/src/assets/' + staff.image" :alt="staff.name" class="object-cover"/>
              </div>
              <div class="flex-grow flex flex-col justify-center p-4 bg-gray-100 text-center w-full">
                <h2 class="text-2xl font-bold text-gray-800 mb-2">{{ staff.name }}</h2>
                <p class="text-lg text-gray-800">{{ staff.position }}</p>
                <p class="text-md text-gray-600">{{ staff.email }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Assistant Professors -->
        <div>
          <h3 class="text-3xl text-center font-semibold p-14 bg-yellow-100">Assistant Professors</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-yellow-100">
            <div 
              v-for="staff in department.faculty.assistant_professors" 
              :key="staff.email" 
              class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-1" 
              @click="showDetails(staff)"
            >
              <div class="w-full flex justify-center">
                <div class="w-full max-w-xs aspect-[1/1] overflow-hidden border-4 border-gray-200">
                  <img :src="'/src/assets/' + staff.image" :alt="staff.name" class="object-cover"/>
                </div>
              </div>
              <div class="flex-grow flex flex-col justify-center p-4 bg-gray-100 text-center w-full">
                <h2 class="text-2xl font-bold text-gray-800">{{ staff.name }}</h2>
                <p class="text-lg text-gray-800">{{ staff.position }}</p>
                <p class="text-md text-gray-600">{{ staff.email }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>

    <!-- Modal -->
    <div v-if="showPopover" class="modal modal-open fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="modal-box relative rounded-lg flex flex-col p-4 bg-white" :style="{ maxWidth: '900px', width: '90%' }">
        <!-- Close Button -->
        <button @click="showPopover = false" class="btn btn-sm btn-circle absolute right-2 top-2">✕</button>
        <!-- Heading -->
        <h1 class="font-bold text-3xl mb-10 text-center w-full">FACULTY DETAILS</h1>
        <div class="flex flex-col md:flex-row">
          <!-- Fixed Image -->
          <div class="flex-shrink-0 text-center mt-4 md:mt-0 my-auto mr-4">
            <img :src="'/src/assets/' + selectedStaff.image" alt="Profile Picture" class="h-96 w-70 rounded-lg shadow-lg object-cover">
            <h2 class="text-lg font-semibold mt-4">{{ selectedStaff.name }}</h2>
          </div>
          <!-- Scrollable Details -->
          <div class="md:overflow-auto flex-grow max-h-[50vh] pr-6 shadow-inner">
            <h3 class="text-xl font-semibold"><strong>Position:</strong> {{ selectedStaff.position }}</h3>
            <h3 class="text-xl font-semibold mb-2"><strong>Email:</strong> {{ selectedStaff.email }}</h3>
            
            <!-- Profile -->
            <template v-if="selectedStaff.profile">
              <h3 class="text-md font-semibold mt-4"><strong>Profile:</strong></h3>
              <ul class="list-disc ml-4 text-md text-gray-700">
                <li v-for="(point, index) in splitProfile(selectedStaff.profile)" :key="index">{{ point }}</li>
              </ul>
            </template>
            
            <!-- Education -->
            <template v-if="selectedStaff.education && selectedStaff.education.length">
              <h3 class="text-md font-semibold mt-4"><strong>Education:</strong></h3>
              <div class="text-md text-gray-700">
                <div v-for="(edu, index) in selectedStaff.education" :key="index">
                  <p>{{ edu }}</p>
                </div>
              </div>
            </template>
            
            <!-- Experience -->
            <template v-if="selectedStaff.experience && selectedStaff.experience.length">
              <h3 class="text-md font-semibold mt-4"><strong>Experience:</strong></h3>
              <ul class="list-disc ml-4">
                <li v-for="exp in selectedStaff.experience" :key="exp.position">{{ exp.position }} at {{ exp.institution }} ({{ exp.duration }})</li>
              </ul>
            </template>
            
            <!-- Publications -->
            <template v-if="selectedStaff.publications">
              <h3 class="text-md font-semibold mt-4"><strong>Publications:</strong></h3>
              <p class="text-md text-gray-700">{{ selectedStaff.publications }}</p>
            </template>
            
            <!-- Conferences -->
            <template v-if="selectedStaff.conferences">
              <h3 class="text-md font-semibold mt-4"><strong>Conferences:</strong></h3>
              <p class="text-md text-gray-700">{{ selectedStaff.conferences }}</p>
            </template>
            
            <!-- Additional Fields -->
            <template v-if="selectedStaff.additional_fields">
              <div v-for="(value, key) in selectedStaff.additional_fields" :key="key" class="mt-4">
                <h3 class="text-md font-semibold"><strong>{{ key }}:</strong> {{ value }}</h3>
              </div>
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
