<template>
  <div class="min-h-screen flex flex-col">
    <!-- Hero section -->
    <section class="bg-cover bg-center relative h-64" :style="'background-image: url(http://192.168.72.231:5173/src/assets/dgate-hero.jpg)'">
      <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div class="container mx-auto py-16 text-white p-9 relative z-10">
        <h1 class="text-4xl font-bold mb-4">ED Cell</h1>
        <p class="text-xl mb-8">Entrepreneurship is the person who plays a certain price for a product to resell it at an uncertain price, hereby making decisions about obtaining and using the resources while consequently admitting the risk of enterprise.</p>
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
    <section class="container mx-auto py-8 p-4">
      <div ref="Objectives" class="mb-16">
        <h2 class="text-2xl font-bold mb-4 p-2 bg-gradient-to-r from-blue-500 to-cyan-300">Objectives</h2>
        <ul class="list-disc pl-4">
          <li v-for="objective in data.description.objectives" :key="objective">{{ objective }}</li>
        </ul>
      </div>
      <div ref="Key Activities" class="mb-16">
        <h2 class="text-2xl font-bold mb-4 p-2 bg-gradient-to-r from-blue-500 to-cyan-300">Key Activities</h2>
        <div v-for="activity in data.description.key_activities" :key="activity.name" class="bg-white shadow-md rounded-md p-4 mb-4">
          <h3 class="text-lg font-semibold">{{ activity.name }}</h3>
          <p><strong>Location:</strong> {{ activity.location }}</p>
          <p><strong>Details:</strong> {{ activity.details }}</p>
        </div>
      </div>
      <div ref="MOU" class="mb-16">
        <h2 class="text-2xl font-bold mb-4 p-2 bg-gradient-to-r from-blue-500 to-cyan-300">MOU</h2>
        <ul class="list-disc pl-4">
          <li v-for="mou in data.MOU" :key="mou">{{ mou }}</li>
        </ul>
      </div>
      <div ref="Links" class="mb-16">
        <h2 class="text-2xl font-bold mb-4 p-2 bg-gradient-to-r from-blue-500 to-cyan-300">Links</h2>
        <ul class="list-disc pl-4">
          <li v-for="link in data.links" :key="link">
            <a :href="'http://' + link" target="_blank" rel="noopener noreferrer">{{ link }}</a>
          </li>
        </ul>
      </div>
      <div ref="Office Bearers" class="mb-16">
        <h2 class="text-2xl font-bold mb-4 p-2 bg-gradient-to-r from-blue-500 to-cyan-300">Office Bearers</h2>
        <div v-for="member in data.office_bearers" :key="member.email" class="bg-white shadow-md rounded-md p-4 mb-4">
          <h3 class="text-lg font-semibold">{{ member.name }}</h3>
          <p><strong>Position:</strong> {{ member.position }}</p>
          <p><strong>Email:</strong> <a :href="'mailto:' + member.email">{{ member.email }}</a></p>
          <p><strong>Organization:</strong> {{ member.organization }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import data from '../assets/ED-cell.json';

export default {
  data() {
    return {
      data: data,
      sections: [
        'Objectives',
        'Key Activities',
        'MOU',
        'Links',
        'Office Bearers'
      ],
      activeSection: null,
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
      const element = this.$refs[section];
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    },
    handleScroll() {
      const scrollPosition = window.scrollY + 150;
      for (let section of this.sections) {
        const element = this.$refs[section];
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
/* Custom Scrollbar */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Ensuring horizontal tabs are fully visible */
.tabs {
  overflow-x: auto;
  white-space: nowrap;
}
</style>
