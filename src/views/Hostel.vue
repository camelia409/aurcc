<template>
  <div class="min-h-screen flex flex-col">
    <!-- Hero section -->
    <section
      class="bg-cover bg-center relative -z-10"
      :style="'background-image: url(http://192.168.72.231:5173/src/assets/dgate-hero.jpg)'"
    >
      <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div class="container mx-auto py-16 text-white p-9 relative z-10">
        <h1 class="text-4xl font-bold mb-4">Hostel</h1>
        <p class="text-xl mb-8">Explore our hostel facilities and services.</p>
      </div>
    </section>

    <!-- Horizontal Tabs -->
    <div class="sticky top-0 bg-white shadow-md z-10">
      <div class="flex px-9">
        <nav role="tablist" class="flex space-x-2">
          <button
            v-for="(section, index) in sections"
            :key="index"
            @click="scrollToSection(section)"
            :class="{
              'bg-[#006994] text-white': activeSection === section,
              'text-black bg-white hover:bg-[#006994] hover:text-white': activeSection !== section
            }"
            class="font-semibold p-4 transition duration-300 ease-in-out text-xl"
          >
            {{ section }}
          </button>
        </nav>
      </div>
    </div>

    <!-- Content sections -->
    <div class="container mx-auto py-8 px-9">
      <div
        v-for="(section, index) in sections"
        :key="index"
        :ref="section"
        class="mb-16"
      >
        <h2 class="text-2xl text-center font-bold mb-4 p-2 bg-gradient-to-r from-blue-500 to-cyan-300">
          {{ section }}
        </h2>

        <div v-if="section === 'Description'">
          <p>{{ hostel.description }}</p>
        </div>

        <div v-else-if="section === 'Administration'">
          <h3 class="text-xl font-semibold mb-2">Wardens</h3>
          <div v-for="warden in hostel.Administration.Wardens" :key="warden.Name" class="mb-4">
            <p>{{ warden.Name }} - {{ warden.Designation }}</p>
            <p>Phone: {{ warden['Phone No'] }}</p>
            <p>Email: <a :href="'mailto:' + warden['Email ID']" class="text-blue-500 underline">{{ warden['Email ID'] }}</a></p>
          </div>
          <h3 class="text-xl font-semibold mb-2">Deputy Wardens</h3>
          <div v-for="deputyWarden in hostel.Administration['Deputy Wardens']" :key="deputyWarden.Name" class="mb-4">
            <p>{{ deputyWarden.Name }} - {{ deputyWarden.Designation }}</p>
            <p>Phone: {{ deputyWarden['Phone No'] }}</p>
            <p>Email: <a :href="'mailto:' + deputyWarden['Email ID']" class="text-blue-500 underline">{{ deputyWarden['Email ID'] }}</a></p>
          </div>
        </div>

        <div v-else-if="section === 'Fees Structure'">
          <p><a :href="hostel['Fees Structure']['New Admission']" class="text-blue-500 underline">New Admission</a></p>
          <p><a :href="hostel['Fees Structure']['Existing Students']" class="text-blue-500 underline">Existing Students</a></p>
        </div>

        <div v-else-if="section === 'Rules and Regulations'">
          <iframe :src="rulesPDF" class="w-full h-[700px]" frameborder="0"></iframe>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-4">
      <div class="container mx-auto text-center">
        <p>&copy; {{ currentYear }} Hostel. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
import hostelData from '../assets/hostel.json';

export default {
  data() {
    return {
      hostel: hostelData,
      sections: [
        'Description',
        'Administration',
        'Fees Structure',
        'Rules and Regulations'
      ],
      activeSection: null,
      rulesPDF: new URL('../assets/rules.pdf', import.meta.url).href // Use import.meta.url for correct path
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
      if (element) {
        const offsetTop = element.offsetTop - 100;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    },
    handleScroll() {
      const scrollPosition = window.scrollY + 150;
      this.sections.forEach(section => {
        const element = this.$refs[section][0];
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            this.activeSection = section;
          }
        }
      });
    }
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style scoped>
/* Add any additional custom styles here */
</style>
