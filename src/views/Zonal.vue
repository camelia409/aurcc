<template>
  <div class="min-h-screen flex flex-col">
    <!-- Hero section -->
    <section class="bg-cover bg-center relative -z-10" :style="'background-image: url(http://192.168.72.231:5173/src/assets/dgate-hero.jpg)'">
      <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div class="container mx-auto py-16 text-white p-9 relative z-10">
        <h1 class="text-4xl font-bold mb-4">Zonal Office</h1>
        <p class="text-xl mb-8">Ensuring the seamless coordination between the University and Affiliated Colleges</p>
      </div>
    </section>

    <!-- Horizontal Tabs -->
	  <div class="sticky top-0 bg-white shadow-md z-10 hidden xl:block">
		<div class="flex justify-between px-9">
		  <nav role="tablist" class="tabs">
			<button
			  v-for="(section, index) in sections"
			  :key="index"
			  @click="scrollToSection(section)"
			  :class="{
				'bg-[#006994] text-white': activeSection === section,  /* Marine Blue for active section */
				'text-black bg-white hover:bg-[#006994] hover:text-white': activeSection !== section /* White background with Marine Blue hover */
			  }"
			  class="font-semibold p-4 h-full transition duration-300 ease-in-out tab text-xl"
			>
			  {{ section }}
			</button>
		  </nav>
		</div>
	  </div>

    <!-- Content sections -->
    <div class="container mx-auto py-8 p-9">
      <div v-for="(section, index) in sections" :key="index" :ref="section" class="mb-16">
        <h2 class="text-2xl text-center font-bold mb-4 p-2 bg-gradient-to-r from-blue-500 to-cyan-300">{{ section }}</h2>

        <!-- Description Section -->
        <div v-if="section === 'Description'">
          <ul class="list-disc pl-4">
            <li v-for="(desc, index) in data.description" :key="index">{{ desc }}</li>
          </ul>
        </div>

        <!-- Zone List of Colleges Section -->
        <div v-else-if="section === 'Zone List of Colleges'">
          <iframe :src="zonalListPDF" class="w-full h-[700px]" frameborder="0"></iframe>
        </div>

        <!-- Office Bearers Section -->
        <div v-else-if="section === 'Office Bearers'">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div v-for="bearer in data['Office bearers']" :key="bearer.name" class="bg-white shadow-md rounded-md p-4">
              <h3 class="text-lg font-semibold">{{ bearer.name }}</h3>
              <p>{{ bearer.designation }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-4">
      <div class="container mx-auto text-center">
        <p>&copy; {{ currentYear }} Zonal Office. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
import data from '../assets/zonaloffice.json';
import zonalListPDF from '../assets/zonal-list.pdf';

export default {
  data() {
    return {
      data: data[0],
      sections: [
        'Description',
        'Zone List of Colleges',
        'Office Bearers'
      ],
      activeSection: null,
      zonalListPDF,
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
/* Add your custom styles here */
</style>
