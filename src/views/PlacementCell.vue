<template>
	<div class="min-h-screen flex flex-col">
	  <!-- Hero section -->
	  <section class="bg-cover bg-center relative -z-10"
		:style="'background-image: url(http://192.168.72.231:5173/src/assets/dgate-hero.jpg)'">
		<div class="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
		<div class="container mx-auto py-16 text-white p-9 relative z-10">
		  <h1 class="text-4xl font-bold mb-4">Placement Cell</h1>
		  <p class="text-xl mb-8">{{ data.description }}</p>
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
		  <div v-if="section === 'Recruitment Process'">
			<p>{{ data.recruitment }}</p>
		  </div>
		  <div v-else-if="section === 'CUIC'">
			<p>{{ data.cuic }}</p>
		  </div>
		  <div v-else-if="section === 'Our Recruiters'">
			<iframe :src="recruitersPDF" class="w-full h-[700px]" frameborder="0"></iframe> <!-- Increased height -->
		  </div>
		  <div v-else-if="section === 'Placed Students'">
			<img :src="placedStudentsImage" alt="Placed Students" class="w-full h-auto">
		  </div>
		  <div v-else-if="section === 'Staff Members'">
			<div v-for="member in data.staff_members" :key="member.emailid" class="bg-white shadow-md rounded-md p-4 mb-4">
			  <h3 class="text-lg font-semibold">{{ member.name }}</h3>
			  <p><strong>Designation:</strong> {{ member.designation }}</p>
			  <p><strong>Email:</strong> <a :href="'mailto:' + member.emailid">{{ member.emailid }}</a></p>
			</div>
		  </div>
		</div>
	  </div>
  
	  <!-- Footer -->
	  <footer class="bg-gray-800 text-white py-4">
		<div class="container mx-auto text-center">
		  <p>&copy; {{ currentYear }} Placement Cell. All rights reserved.</p>
		</div>
	  </footer>
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
		  'Staff Members'
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
  /* Add your custom styles here */
  </style>
  