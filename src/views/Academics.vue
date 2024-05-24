<template>
  <main class="flex-grow">
    <!-- Hero section -->
    <section class="bg-cover bg-center relative -z-10" :style="'background-image: url(http://localhost:5173/src/assets/academics-hero.jpg)'">
      <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div class="container mx-auto py-16 text-white p-9 relative z-10">
        <h1 class="text-4xl font-bold mb-4">Academics</h1>
        <p class="text-xl mb-8">Explore our comprehensive academic programs and support services.</p>
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
          <div v-if="currentSection === 'Curriculum-&-Syllabus'">
            <h2 class="text-2xl font-bold mb-4">Curriculum & Syllabus</h2>
            <div v-for="(programme, index) in curriculamSyllabus" :key="index" class="mb-6">
              <h4 class="text-lg font-semibold">{{ Object.keys(programme)[0] }}</h4>
              <ul class="list-disc list-inside">
                <li v-for="item in programme[Object.keys(programme)[0]]" :key="item['S.No']">
                  {{ item['Curriculum & Syllabus'] }}
                </li>
              </ul>
            </div>
          </div>
          <div v-else-if="currentSection === 'Programs-Offered'">
            <h2 class="text-2xl font-bold mb-4">Programs Offered</h2>
            <div v-for="(programme, index) in programsOffered" :key="index" class="mb-6">
              <h4 class="text-lg font-semibold">{{ programme.type }}</h4>
              <ul class="list-disc list-inside">
                <li v-for="item in programme.data" :key="item['S.No']">
                  {{ item['Courses Offered'] }} - Intake: {{ item.Intake }}
                </li>
              </ul>
            </div>
          </div>
          <div v-else-if="currentSection === 'Regulation'">
            <h2 class="text-2xl font-bold mb-4">Regulation</h2>
            <ul class="list-disc list-inside mb-6">
              <li v-for="item in regulation" :key="item['S.No']">
                {{ item.Regulation }}
              </li>
            </ul>
          </div>
          <div v-else-if="currentSection === 'Student-Affairs'">
            <h2 class="text-2xl font-bold mb-4">Student Affairs</h2>
            <div v-for="affair in studentAffairs" :key="affair.description" class="mb-6">
              <p v-for="desc in affair.description" :key="desc" class="mb-2">{{ desc }}</p>
    
              <div class="mb-4">
                <h4 class="text-lg font-semibold">Contact Us</h4>
                <p>{{ affair['contact us'] }}</p>
              </div>
            </div>
          </div>
          <div v-else-if="currentSection === 'Re-Admission'">
            <h2 class="text-2xl font-bold mb-4">Re-Admission</h2>
            <div v-for="affair in studentAffairs" :key="affair.description" class="mb-6">
              <div class="mb-4">
                <h4 class="text-lg font-semibold">Re-Admission</h4>
                <p>{{ affair['Re-Admission'] }}</p>
              </div>
            </div>
          </div>
          <div v-else-if="currentSection === 'Scholarship'">
            <h2 class="text-2xl font-bold mb-4">Scholorship</h2>
            <div v-for="affair in studentAffairs" :key="affair.description" class="mb-6">
              <div class="mb-4">
                <h4 class="text-lg font-semibold">Scholarship</h4>
                <p>{{ affair.Scholarship.description }}</p>
                <ul class="list-disc list-inside">
                  <li v-for="scholarship in affair.Scholarship['list of scholarships']" :key="scholarship">
                    {{ scholarship }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div v-else-if="currentSection === 'Office Bearers'">
            <h2 class="text-2xl font-bold mb-4">Office Bearers</h2>
            <div v-for="affair in studentAffairs" :key="affair.description" class="mb-6">
              <div class="mb-4">
                <h4 class="text-lg font-semibold">Office Bearers</h4>
                <ul class="list-disc list-inside">
                  <li v-for="bearer in affair['Office bearers'][1]" :key="bearer['S.No']">
                    {{ bearer['Name of the Staff'] }} - {{ bearer['Name of the Post'] }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  </main>
</template>

<script>
import data from '../assets/academics.json';

export default {
  data() {
    return {
      data: data,
      sections: [
        'Curriculum-&-Syllabus',
        'Programs-Offered',
        'Regulation',
        'Student-Affairs',
        'Re-Admission',
        'Scholarship',
        'Office Bearers'
      ],
      currentSection: null
    };
  },
  created() {
    // Default to first section
    if (this.sections.length > 0) {
      this.currentSection = this.sections[0];
      this.currentSection = this.$route.params.section
      console.log(this.currentSection)
    }
  },
  computed: {
    curriculamSyllabus() {
      return this.data.curriculamSyllabus;
    },
    programsOffered() {
      return this.data.programsOffered;
    },
    regulation() {
      return this.data.regulation;
    },
    studentAffairs() {
      return this.data.studentAffairs;
    },
    currentYear() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style scoped>
/* Add any custom styles for your component here */
</style>
