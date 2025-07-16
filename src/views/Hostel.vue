<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <!-- Hero section -->
    <section class="relative w-full h-60 sm:h-80 md:h-94 overflow-hidden bg-gradient-to-r from-indigo-700 to-blue-500 flex flex-col justify-end">
      <img src="/hostel.webp" alt="Hostel" class="absolute inset-0 w-full h-full object-cover object-center" style="z-index:0;" />
      <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>
      <div class="container mx-auto relative z-10 flex flex-col items-center justify-end h-full pb-8 md:pb-16">
        <h1 class="text-4xl font-extrabold mb-2 text-white drop-shadow-lg tracking-wide">Hostel</h1>
        <p class="text-lg md:text-xl text-white drop-shadow text-center font-medium">Explore our hostel facilities and services.</p>
      </div>
    </section>

    <!-- Sticky Horizontal Tab Bar -->
    <div class="sticky top-0 z-30 mt-[-1.5rem] mb-2">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white/90 backdrop-blur-lg shadow-lg rounded-full py-1 px-2 flex justify-center overflow-x-auto no-scrollbar border border-gray-100" style="backdrop-filter: blur(10px);">
          <nav role="tablist" class="tabs flex space-x-1 md:space-x-2 items-center">
            <button
              v-for="section in sections"
              :key="section"
              @click="scrollToSection(section)"
              :class="[
                'font-medium px-4 md:px-5 py-2 md:py-3 rounded-full text-sm md:text-base transition duration-300 whitespace-nowrap relative',
                activeSection === section
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-100'
              ]"
            >
              <span>{{ section }}</span>
              <span v-if="activeSection === section" class="absolute left-1/2 -translate-x-1/2 bottom-1 h-1 w-8 rounded-full bg-blue-400 animate-pulse"></span>
            </button>
          </nav>
        </div>
      </div>
    </div>

    <!-- Testimonial/Quote Carousel -->
    <div class="w-full flex justify-center py-2 bg-white/80 backdrop-blur-lg border-b border-gray-100 mt-2 mb-4" style="backdrop-filter: blur(8px);">
      <div class="max-w-lg w-full px-2">
        <div class="relative">
          <div class="bg-white/80 rounded-xl shadow p-4 text-center transition-all duration-700 border border-gray-100" :key="testimonials[currentTestimonial].author">
            <p class="text-base italic text-gray-700 mb-2 font-light">"{{ testimonials[currentTestimonial].quote }}"</p>
            <span class="font-semibold text-indigo-700 text-sm">- {{ testimonials[currentTestimonial].author }}</span>
          </div>
          <div class="flex justify-center mt-2 gap-1">
            <button v-for="(t, idx) in testimonials" :key="idx" @click="currentTestimonial = idx" :class="['h-2 w-2 rounded-full', currentTestimonial === idx ? 'bg-indigo-600' : 'bg-gray-300']"></button>
          </div>
        </div>
      </div>
    </div>

    <!-- Content sections -->
    <section class="mx-auto">
      <div class="w-full">
        <div
          v-for="section in sections"
          :key="section"
          :id="section.replace(/ /g, '')"
          class="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-14 bg-gradient-to-b from-gray-50 to-white opacity-0 translate-y-8 transition-all duration-700 section-animate"
        >
          <div class="grid grid-cols-1">
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md">
              <div class="bg-gradient-to-r from-indigo-600 to-blue-500 py-6 flex items-center justify-center gap-3">
                <span v-if="section === 'Description'" class="text-2xl">🏠</span>
                <span v-else-if="section === 'Administration'" class="text-2xl">🧑‍💼</span>
                <span v-else-if="section === 'Fees Structure'" class="text-2xl">💸</span>
                <span v-else-if="section === 'Rules and Regulations'" class="text-2xl">📜</span>
                <h2 class="text-2xl md:text-3xl text-white font-bold text-center">{{ section }}</h2>
              </div>
              <div class="p-6 md:p-8">
                <template v-if="section === 'Description'">
                  <p>{{ hostel.description }}</p>
                </template>
                <template v-else-if="section === 'Administration'">
                  <h3 class="text-xl font-semibold mb-4">Wardens</h3>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div v-for="warden in hostel.Administration.Wardens" :key="warden.Name" class="bg-white rounded-xl shadow p-6 border border-gray-100 flex flex-col gap-2">
                      <div class="font-bold text-lg text-indigo-700">{{ warden.Name }}</div>
                      <div class="text-gray-700 font-medium">{{ warden.Designation }}</div>
                      <div class="text-gray-600 text-sm">Phone: <span class="font-normal">{{ warden['Phone No'] }}</span></div>
                      <div class="text-gray-600 text-sm">Email: <a :href="'mailto:' + warden['Email ID']" class="text-blue-500 underline">{{ warden['Email ID'] }}</a></div>
                    </div>
                  </div>
                  <h3 class="text-xl font-semibold mb-4">Deputy Wardens</h3>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div v-for="deputyWarden in hostel.Administration['Deputy Wardens']" :key="deputyWarden.Name" class="bg-white rounded-xl shadow p-6 border border-gray-100 flex flex-col gap-2">
                      <div class="font-bold text-lg text-indigo-700">{{ deputyWarden.Name }}</div>
                      <div class="text-gray-700 font-medium">{{ deputyWarden.Designation }}</div>
                      <div class="text-gray-600 text-sm">Phone: <span class="font-normal">{{ deputyWarden['Phone No'] }}</span></div>
                      <div class="text-gray-600 text-sm">Email: <a :href="'mailto:' + deputyWarden['Email ID']" class="text-blue-500 underline">{{ deputyWarden['Email ID'] }}</a></div>
                    </div>
                  </div>
                </template>
                <template v-else-if="section === 'Fees Structure'">
                  <p><a :href="hostel['Fees Structure']['New Admission']" class="text-blue-500 underline">New Admission</a></p>
                  <p><a :href="hostel['Fees Structure']['Existing Students']" class="text-blue-500 underline">Existing Students</a></p>
                </template>
                <template v-else-if="section === 'Rules and Regulations'">
                  <iframe :src="rulesPDF" class="w-full h-[700px]" frameborder="0"></iframe>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

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
      activeSection: 'Description',
      rulesPDF: new URL('../assets/rules.pdf', import.meta.url).href,
      testimonials: [
        { quote: 'The hostel life here is vibrant and full of learning experiences!', author: 'Akhil, IV ECE' },
        { quote: 'Great food, great friends, and a great environment!', author: 'Priya, III CSE' },
        { quote: 'The staff are very supportive and the facilities are excellent.', author: 'Rahul, II MECH' }
      ],
      currentTestimonial: 0
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.animateSections();
    this.carouselInterval = setInterval(() => {
      this.currentTestimonial = (this.currentTestimonial + 1) % this.testimonials.length;
    }, 5000);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    clearInterval(this.carouselInterval);
  },
  methods: {
    scrollToSection(section) {
      const el = document.getElementById(section.replace(/ /g, ''));
      if (el) {
        const tabHeight = document.querySelector('.sticky').offsetHeight;
        const offset = el.offsetTop - tabHeight - 20;
        window.scrollTo({ top: offset, behavior: 'smooth' });
        this.activeSection = section;
      }
    },
    handleScroll() {
      const scrollPosition = window.scrollY + 150;
      this.sections.forEach(section => {
        const el = document.getElementById(section.replace(/ /g, ''));
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetBottom = offsetTop + el.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            this.activeSection = section;
          }
        }
      });
      this.animateSections();
    },
    animateSections() {
      const sections = document.querySelectorAll('.section-animate');
      const triggerBottom = window.innerHeight * 0.95;
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
          section.classList.add('opacity-100', 'translate-y-0');
          section.classList.remove('opacity-0', 'translate-y-8');
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
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
/* Section entrance animation */
.section-animate {
  opacity: 0;
  transform: translateY(2rem);
}
.section-animate.opacity-100 {
  opacity: 1 !important;
  transform: translateY(0) !important;
  transition: opacity 0.7s, transform 0.7s;
}
</style>
