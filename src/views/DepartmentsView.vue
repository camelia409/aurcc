<template>
  <div class="min-h-screen flex flex-col">
    <main class="flex-grow">
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
      <div class="sticky top-0 bg-white shadow-md z-10">
        <div class="container mx-auto py-4 p-9">
          <nav class="flex space-x-4">
            <button
              v-for="(section, index) in sections"
              :key="index"
              @click="scrollToSection(section)"
              :class="{
                'bg-blue-500 text-white': currentSection === section,
                'text-gray-600 hover:bg-gray-100': currentSection !== section
              }"
              class="font-semibold py-2 px-4 rounded"
            >
              {{ section }}
            </button>
          </nav>
        </div>
      </div>

      <!-- Content sections -->
      <section class="container mx-auto py-8 p-9 pt-20" @scroll="handleScroll">
        <div id="content-sections">
          <div id="about-department" class="mb-8">
            <h2 class="text-2xl font-bold mb-4">About Department</h2>
            <p>{{ department.description }}</p>
          </div>
          <div id="vision-and-mission" class="mb-8">
            <h2 class="text-2xl font-bold mb-4">Vision and Mission</h2>
            <p>{{ department.vision }}</p>
            <ul class="list-disc pl-4">
              <li v-for="mission in department.mission" :key="mission">{{ mission }}</li>
            </ul>
          </div>
          <div id="training-and-placements" class="mb-8">
            <h2 class="text-2xl font-bold mb-4">Training and Placements</h2>
            <p><strong>Companies Visited:</strong> {{ department.placements.companies_visited.join(', ') }}</p>
            <p><strong>Average Salary:</strong> {{ department.placements.average_salary }}</p>
            <p><strong>Highest Salary:</strong> {{ department.placements.highest_salary }}</p>
            <p><strong>Placement Percentage:</strong> {{ department.placements.placement_percentage }}</p>
          </div>
          <div id="achievements" class="mb-8">
            <h2 class="text-2xl font-bold mb-4">Achievements</h2>
            <ul class="list-disc pl-4">
              <li v-for="achievement in department.achievements" :key="achievement.name">
                <strong>{{ achievement.name }} ({{ achievement.year }}):</strong> {{ achievement.description }}
              </li>
            </ul>
          </div>
          <div id="research-and-publications" class="mb-8">
            <h2 class="text-2xl font-bold mb-4">Research and Publications</h2>
            <ul class="list-disc pl-4">
              {{ department.research_and_publications }}
            </ul>
          </div>
          <div id="faculty" class="mb-8">
            <h2 class="text-2xl font-bold mb-4">Faculty</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div
                v-for="staff in department.faculty"
                :key="staff.email"
                class="bg-white shadow-md rounded-md p-4"
              >
                <h3 class="text-lg font-semibold">{{ staff.name }}</h3>
                <p>{{ staff.position }}</p>
                <p>{{ staff.email }}</p>
              </div>
            </div>
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
        'Training and Placements',
        'Achievements',
        'Research and Publications',
        'Faculty'
      ],
      currentSection: null,
      sectionOffsets: []
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
        const response = await fetch('http://192.168.72.231:5173/src/assets/departments.json');
        const departmentsData = await response.json();
        this.department = departmentsData.find(dept => dept.address === this.$route.params.departmentName);
      } catch (error) {
        console.error('Error loading department:', error);
      }
    },
    scrollToSection(section) {
      const sectionId = section.toLowerCase().replace(/\s+/g, '-');
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
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
        if (scrollPosition >= this.sectionOffsets[i] - 100) {
          this.currentSection = this.sections[i];
        }
      }
    }
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
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