<template>
  <div class="min-h-screen flex flex-col">
    <!-- Hero Section -->
    <section
      class="bg-cover bg-center relative -z-10"
      :style="'background-image: url(http://192.168.72.231:5173/src/assets/dgate-hero.jpg)'"
    >
      <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div class="container mx-auto py-16 text-white p-9 relative z-10 text-center">
        <h1 class="text-5xl font-bold mb-4">Placement Cell</h1>
        <p class="text-xl mb-8">{{ data.description }}</p>
      </div>
    </section>

    <!-- Content Sections -->
    <section class="mx-auto py-8 px-4 space-y-16 bg-indigo-100">
      <div
        v-for="(section, index) in sections"
        :key="index"
        :ref="section"
        class="bg-white rounded-lg shadow-md"
      >
        <h2 class="text-3xl text-center text-white font-bold mb-4 p-4 bg-blue-800  rounded-md">
          {{ section }}
        </h2>
        
        <div v-if="section === 'Recruitment Process'">
          <p class="p-4 font-medium text-xl">{{ data.recruitment }}</p>
        </div>
        
        <div v-else-if="section === 'CUIC'">
          <p class="p-4 font-medium text-xl">{{ data.cuic }}</p>
        </div>
        
        <div v-else-if="section === 'Our Recruiters'">
          <iframe
            :src="recruitersPDF"
            class="w-full h-[700px] rounded-md shadow-lg"
            frameborder="0"
          ></iframe>
        </div>
        
        <div v-else-if="section === 'Placed Students'">
          <img
            :src="placedStudentsImage"
            alt="Placed Students"
            class="w-full h-auto rounded-md shadow-lg"
          />
        </div>
        
        <div v-else-if="section === 'Staff Members'" class="grid grid-cols-3 gap-4 px-4">
          <div
            v-for="member in data.staff_members"
            :key="member.emailid"
            class="bg-gray-100 shadow-md text-xl rounded-md p-4 font-medium mb-4 "
          >
            <h3 class="font-semibold">{{ member.name }}</h3>
            <p><strong>Designation:</strong> {{ member.designation }}</p>
            <p>
              <strong>Email:</strong>
              <a :href="'mailto:' + member.emailid">{{ member.emailid }}</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import data from '../assets/placement-cell.json';
import recruitersPDF from '../assets/placementBrochure.pdf';
import placedStudentsImage from '../assets/Placedstudents.webp';

export default {
  data() {
    return {
      data: data,
      sections: [
        'Recruitment Process',
        'CUIC',
        'Our Recruiters',
        'Placed Students',
        'Staff Members',
      ],
      activeSection: null,
      recruitersPDF,
      placedStudentsImage,
    };
  },
  mounted() {
    this.handleScroll();
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    scrollToSection(section) {
      const element = this.$refs[section][0];
      const offsetTop = element.offsetTop - 100;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    },
    handleScroll() {
      const scrollPosition = window.scrollY + 150;
      for (let section of this.sections) {
        const element = this.$refs[section][0];
        const offsetTop = element.offsetTop;
        const offsetBottom = offsetTop + element.offsetHeight;
        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          this.activeSection = section;
          break;
        }
      }
    },
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style scoped>
/* Add your custom styles here if needed */
</style>
