<template>
  <div class="min-h-screen flex flex-col">
    <main>
      <!-- Hero section -->
      <section
        class="bg-cover bg-center relative -z-10"
        :style="'background-image: url(http://192.168.72.231:5173/src/assets/' + department.image + ')'"
      >
        <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div class="container mx-auto py-16 text-white p-9 relative z-10">
          <h1 class="text-4xl font-bold mb-4">Welcome to {{ department.name }}</h1>
          <p class="text-xl mb-8">Explore our cutting-edge programs and stay ahead in the field.</p>
          <button class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Learn More</button>
        </div>
      </section>

      <!-- Horizontal Tabs -->
      <div class="sticky top-0 bg-white shadow-md z-10 hidden md:block">
        <div class="flex justify-between py-4 p-9">
          <nav class="flex space-x-4">
            <button
              v-for="(section, index) in sections"
              :key="index"
              @click="scrollToSection(section)"
              :class="{
                'bg-blue-500 text-white': currentSection === section,
                'text-gray-600 hover:bg-gray-100': currentSection !== section
              }"
              class="font-semibold py-2 px-4 rounded transition duration-300 ease-in-out"
            >
              {{ section }}
            </button>
          </nav>
        </div>
      </div>

      <!-- Content sections -->
      <section class="container-fluid py-8" @scroll="handleScroll">
        <div id="content-sections" class="w-full">
          <div id="about-department" class="mb-8 lg:w-4/6 mx-auto py-20">
            <h2 class="text-2xl font-bold mb-4">About Department</h2>
            <p>{{ department.description }}</p>
          </div>
          <div id="vision-and-mission" class="mb-8 w-full bg-base-300 p-3 py-16">
            <div class="lg:w-4/6 mx-auto">
              <h2 class="text-2xl font-bold mb-4">Vision and Mission</h2>
              <p>{{ department.vision }}</p>
              <ul class="list-disc pl-4">
                <li v-for="mission in department.mission" :key="mission">{{ mission }}</li>
              </ul>
            </div>
          </div>
          <div id="events" class="mb-8 lg:w-4/6 mx-auto p-3 py-16">
          <h2 class="text-3xl font-extrabold text-gray-900">Events</h2>
          <div v-if="currentEvent" class="flex justify-between items-center mt-4">
            <button @click="showPreviousEvent" class="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div class="bg-white shadow-md rounded-lg overflow-hidden flex-grow mx-3">
              <div class="p-6">
                <h3 class="text-lg font-semibold">{{ currentEvent.name }}</h3>
                <p class="text-sm text-gray-500">{{ currentEvent.description }}</p>
                <p class="text-sm text-gray-500">Date: {{ currentEvent.date }}</p>
              </div>
            </div>
            <button @click="showNextEvent" class="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div v-else>
            <p class="text-lg text-gray-700">No more events to show.</p>
          </div>
        </div>
          <div id="training-and-placements" class="bg-gray-200 py-12">
            <div class="container mx-auto flex lg:w-4/6 ">
              <div class="w-full  mb-8 lg:mb-0">
                <div class="  ">
                  <h2 class="text-2xl font-bold mb-4">Training and Placements</h2>
                  <div class="flex flex-wrap gap-4">
                    <div class="w-full lg:w-1/3">
                      <div class="p-4 flex flex-col items-center justify-center">
                        <p class="text-lg font-bold mb-2">Average Salary</p>
                        <p class="text-xl">{{ department.placements.average_salary }} </p>
                      </div>
                    </div>
                    <div class="w-full lg:w-1/3">
                      <div class="p-4 flex flex-col items-center justify-center">
                        <p class="text-lg font-bold mb-2">Highest Salary</p>
                        <p class="text-xl">{{ department.placements.highest_salary }} </p>
                      </div>
                    </div>
                    <div class="w-full lg:w-1/3">
                      <div class=" p-4 flex items-center justify-center">
                        <p class="text-lg font-bold ml-3">Placement Percentage</p>
                        <p class="text-xl ml-2">{{ department.placements.placement_percentage }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full lg:pl-4">  
                <div class="bg-white rounded-lg p-6">
                  <h2 class="text-2xl font-bold mb-4">Company vsited</h2>
                  <div class="grid grid-cols-3 gap-4 items-center justify-center"><a href="https://www.tcs.com"
                          class="h-[12vh] p-4 flex flex-col items-center justify-center"
                      >
                    <figure><img alt="TCS" src="../assets/tcs.webp" class="w-[20vw] lg:w-[10vw]" /></figure>
                    </a><a href="https://www.avasoft.com"
                        class="h-[12vh] p-4 flex flex-col items-center justify-center"
                    >
                        <figure><img alt="Avasoft" src="../assets/avasoft.webp" class="w-[20vw] lg:w-[10vw]" /></figure>
                    </a><a href="https://www.guvi.in"
                        class="h-[12vh] p-4 flex flex-col items-center justify-center"
                    >
                        <figure><img alt="Guvi" src="../assets/guvi.webp" class="w-[20vw] lg:w-[10vw]" /></figure>
                    </a><a href="https://www.gighz.net"
                        class="h-[12vh] p-4 flex flex-col items-center justify-center"
                    >
                        <figure><img alt="Saptang Labs" src="../assets/saptan-labs.webp" class="w-[20vw] lg:w-[10vw]" /></figure>
                    </a><a href="https://home.barclays/"
                        class="h-[12vh] p-4 flex flex-col items-center justify-center"
                    >
                        <figure><img alt="e-con Systems" src="../assets/e-con.webp" class="w-[20vw] lg:w-[10vw]" /></figure>
                    </a><a href="https://www.azentio.com"
                        class="h-[12vh] p-4 flex flex-col items-center justify-center"
                    >
                        <figure><img alt="Azentio" src="../assets/azentio.webp" class="w-[20vw] lg:w-[10vw]" /></figure>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div id="achievements" class="mb-8 lg:w-4/6 mx-auto py-20">
            <h2 class="text-2xl font-bold mb-4">Achievements</h2>
            <ul class="list-disc pl-4">
              <li v-for="achievement in department.achievements" :key="achievement.name">
                <strong>{{ achievement.name }} ({{ achievement.year }}):</strong> {{ achievement.description }}
              </li>
            </ul>
          </div>
           <div id="facility" class="lg:w-4/6 mx-auto">
            <h2 class="text-2xl font-bold mb-4">Facility</h2>
            <div class="grid gap-8">
              <div 
                v-for="(facility, index) in department.facilities" 
                :key="facility.name" 
                :class="index % 2 === 0 ? 'bg-white shadow-md rounded-md p-4 flex flex-col md:flex-row' : 'bg-white shadow-md rounded-md p-4 flex flex-col md:flex-row-reverse'"
              >
                <div class="md:w-1/2 p-4">
                  <h3 class="text-lg font-semibold">{{ facility.name }}</h3>
                  <p>{{ facility.description }}</p>
                </div>
                <div class="md:w-1/2 p-4 flex justify-center items-center">
                  <img :src="'http://localhost:5173/src/assets/' + facility.image" :alt="facility.name" class="w-full h-auto max-w-xs">
                </div>
              </div> 
            </div>
          </div>

          <div id="research-and-publications" class="mb-8 lg:w-4/6 mx-auto py-20">
            <h2 class="text-2xl font-bold mb-4">Research and Publications</h2>
            <ul class="list-disc pl-4 h-52 overflow-auto">
              <li v-for="research in department.research_and_publications" :key="research">
                {{ research }} 
              </li>
            </ul>
          </div>
          <div id="faculty" class="mb-8 lg:w-4/6 mx-auto relative py-20">
            <h2 class="text-2xl font-bold mb-4">Faculty</h2>

            <!-- HOD Desk -->
            <div class="mb-8">
              <h3 class="text-xl font-semibold mb-2">HOD Desk</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="staff in department.faculty.hod_desk" :key="staff.email" class="p-4 border rounded-lg bg-blue-50">
                  <div class="flex items-center mb-4">
                    <img :src="'http://localhost:5173/src/assets/' + staff.image" alt="{{ staff.name }}" class="w-16 h-16 rounded-full mr-4">
                    <div>
                      <h4 class="text-lg font-semibold">{{ staff.name }}</h4>
                      <p class="text-gray-600">{{ staff.position }}</p>
                      <p class="text-gray-600">{{ staff.email }}</p>
                      <button @click="showDetails(staff)" class="text-blue-500 hover:underline focus:outline-none">Show Details</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Assistant Professors -->
            <div>
              <h3 class="text-xl font-semibold mb-2">Assistant Professors</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="staff in department.faculty.assistant_professors" :key="staff.email" class="p-4 border rounded-lg">
                  <div class="flex items-center mb-4">
                    <img :src="'http://localhost:5173/src/assets/' + staff.image" alt="{{ staff.name }}" class="w-16 h-16 rounded-full mr-4">
                    <div>
                      <h4 class="text-lg font-semibold">{{ staff.name }}</h4>
                      <p class="text-gray-600">{{ staff.position }}</p>
                      <p class="text-gray-600">{{ staff.email }}</p>
                      <button @click="showDetails(staff)" class=" focus:outline-none">Show Details</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div v-if="showPopover" class="modal modal-open">
              <div class="modal-box relative max-w-5xl max-h-[85vh] overflow-auto rounded-none">
                <!-- Close Button -->
                <button @click="showPopover = false" class="btn btn-sm btn-circle absolute right-2 top-2">✕</button>

                <!-- Image -->
                <div style="position: absolute; right: 0; top: 50%; transform: translateY(-50%);">
                  <img :src="'http://localhost:5173/src/assets/' + selectedStaff.image" alt="Profile Picture" class="w-45 h-45 object-cover object-center mb-4">
                  <h2 class="text-lg font-semibold mb-4 ml-11">{{ selectedStaff.name }} </h2>
                </div>
                
                <h1><strong><span class="text-violet-600 font-bold text-lg">FACULTY DETAILS</span></strong></h1>
                <h3><strong>Position:</strong> {{ selectedStaff.position }}</h3>
                <h3><strong>Email:</strong> {{ selectedStaff.email }}</h3>

                <!-- Education -->
                <template v-if="selectedStaff.education">
                  <h3 class="text-md font-semibold mt-4"><strong>Education</strong></h3>
                  <ul class="list-disc ml-6">
                    <li v-for="edu in selectedStaff.education" :key="edu.degree">{{ edu.degree }}, {{ edu.institution }} ({{ edu.year }})</li>
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
                    <li v-for="(link, title) in selectedStaff.links" :key="title"><a :href="link" target="_blank">{{ title }}</a></li>
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



          <div id="administration-and-technical-staff" class="lg:w-4/6 mx-auto">
            <h2 class="text-2xl font-bold mb-4">Administration and Technical Staff</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div v-for="staff in department.admin_staff" :key="staff.email" class="bg-white shadow-md rounded-md p-4">
                <h3 class="text-lg font-semibold">{{ staff.name }}</h3>
                <p>{{ staff.position }}</p>
                <p>{{ staff.email}}</p>
              </div>
            </div>
          </div>
          <div id="proud-alumni" class="lg:w-4/6 mx-auto">
            <h2 class="text-2xl font-bold mb-4">Proud Alumni</h2>
            <ul class="list-disc pl-4">
              {{ department.proud_alumni }}
            </ul>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      department: null,
      sections: [
        'About Department',
        'Vision and mission',
        'Events',
        'Training and Placements',
        'Achievements',
        'Facility',
        'Research and Publications',
        'Faculty',
        'Administration and Technical Staff',
        'Proud Alumni'
      ],
      events: null,
      currentIndex: 0,
      currentSection: null,
      sectionOffsets: [],
      showPopover: false,
      selectedStaff: null
    };
  },
  async created() {
    await this.loadDepartment();
    this.currentSection = this.sections[0];
    this.$nextTick(() => {
      this.updateSectionOffsets();
    });
  },
  methods: {
    async loadDepartment() {
      try {
        const response = await fetch('http://localhost:5173/src/assets/departments.json');
        const departmentsData = await response.json();
        this.department = departmentsData.find(dept => dept.address === this.$route.params.departmentName);
        this.events = this.department.events.reverse()
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