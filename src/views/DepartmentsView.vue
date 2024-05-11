<template>
  <div class="min-h-screen flex flex-col">
    <main class="flex-grow">
      <!-- Hero section -->
      <section class="bg-cover bg-center relative -z-10" :style="'background-image: url(http://192.168.72.231:5173/src/assets/'+ department.image +')'">
        <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div class="container mx-auto py-16 text-white p-9 relative z-10">
          <h1 class="text-4xl font-bold mb-4">Welcome to {{ department.name }}</h1>
          <p class="text-xl mb-8">Explore our cutting-edge programs and stay ahead in the field.</p>
          <button class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Learn More</button>
        </div>
      </section>

      <!-- Content sections -->
      <section class="container mx-auto py-8 p-9">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 class="text-2xl font-bold mb-4 flex items-center">
              <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
              </svg>
              Sections
            </h2>
            <div class="flex flex-col">
              <button v-for="(section, index) in sections" :key="index" @click="currentSection = section" :class="{'bg-blue-500 text-white': currentSection === section, 'bg-white hover:bg-gray-100 text-gray-800': currentSection !== section}" class="font-semibold py-2 px-4 border border-gray-400 rounded shadow flex items-center mb-2">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
                {{ section }}
              </button>
            </div>
          </div>
          <section v-if="currentSection !== null" class="container mx-auto py-8 p-9 md:col-span-3">
            <div v-if="currentSection === 'About Department'">
              <h2 class="text-2xl font-bold mb-4">About Department</h2>
              <p>{{ department.description }}</p>
            </div>
            <div v-else-if="currentSection === 'Vision and mission'">
              <h2 class="text-2xl font-bold mb-4">Vision and Mission</h2>
              <p>{{ department.vision }}</p>
              <ul class="list-disc pl-4">
                <li v-for="mission in department.mission" :key="mission">{{ mission }}</li>
              </ul>
            </div>
            <div v-else-if="currentSection === 'Training and Placements'">
              <h2 class="text-2xl font-bold mb-4">Training and Placements</h2>
              <p><strong>Companies Visited:</strong> {{ department.placements.companies_visited.join(', ') }}</p>
              <p><strong>Average Salary:</strong> {{ department.placements.average_salary }}</p>
              <p><strong>Highest Salary:</strong> {{ department.placements.highest_salary }}</p>
              <p><strong>Placement Percentage:</strong> {{ department.placements.placement_percentage }}</p>
            </div>
            <div v-else-if="currentSection === 'Achievements'">
              <h2 class="text-2xl font-bold mb-4">Achievements</h2>
              <ul class="list-disc pl-4">
                <li v-for="achievement in department.achievements" :key="achievement.name">
                  <strong>{{ achievement.name }} ({{ achievement.year }}):</strong> {{ achievement.description }}
                </li>
              </ul>
            </div>
            <div v-else-if="currentSection === 'Faculty'">
              <h2 class="text-2xl font-bold mb-4">Faculty</h2>
              <div v-for="professor in department.faculty" :key="professor.name">
                <h3 class="text-lg font-semibold">{{ professor.name }}</h3>
                <p><strong>Position:</strong> {{ professor.position }}</p>
                <p><strong>Email:</strong> <a :href="'mailto:' + professor.email">{{ professor.email }}</a></p>
                <p><strong>Education:</strong></p>
                <ul class="list-disc pl-4">
                  <li v-for="edu in professor.education" :key="edu.degree">
                    {{ edu.degree }}, {{ edu.institution }} ({{ edu.year ? edu.year : 'Year unknown' }})
                  </li>
                </ul>
                <p><strong>Research Interests:</strong> {{ professor.research_interests.join(', ') }}</p>
                <p><strong>Teaching Experience:</strong> {{ professor.teaching_experience }}</p>
              </div>
            </div>
          </section>
        </div>
      </section>

      <!-- Dynamic Content -->
      
    </main>
    <footer class="bg-gray-800 text-white py-4 p-9">
      <div class="container mx-auto flex justify-between items-center">
        <div>&copy; {{ currentYear }} {{ department.name }}</div>
        <div>
          <ul class="flex space-x-4">
            <li><a href="#" class="hover:text-gray-300">Terms of Use</a></li>
            <li><a href="#" class="hover:text-gray-300">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
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
        'Faculty'
      ],
      currentSection: null
    };
  },
  async created() {
    await this.loadDepartment();
    // Default to first section
    if (this.sections.length > 0) {
      this.currentSection = this.sections[0];
    }
  },
  methods: {
    async loadDepartment() {
      try {
        const response = await fetch('http://192.168.72.231:5173/src/assets/departments.json');
        const departmentsData = await response.json();
        this.department = departmentsData.find(dept => dept.address === 'cse');
      } catch (error) {
        console.error('Error loading department:', error);
      }
    }
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style>
/* Add custom styles if needed */
</style>
