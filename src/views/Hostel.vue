<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <!-- Hero section -->
    <section class="relative w-full h-48 sm:h-60 md:h-80 lg:h-94 overflow-hidden bg-gradient-to-r from-indigo-700 to-blue-500 flex flex-col justify-end">
      <img src="/hostel.webp" alt="Hostel" class="absolute inset-0 w-full h-full object-cover object-center" style="z-index:0;" />
      <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>
      <div class="container mx-auto relative z-10 flex flex-col items-center justify-end h-full pb-6 sm:pb-8 md:pb-12 lg:pb-16">
        <h1 class="mobile-text-2xl sm:mobile-text-3xl lg:mobile-text-4xl font-extrabold mb-2 text-white drop-shadow-lg tracking-wide">Hostel</h1>
        <p class="mobile-text-base lg:mobile-text-lg xl:mobile-text-xl text-white drop-shadow text-center font-medium">Explore our hostel facilities and services.</p>
      </div>
    </section>

    <!-- Sticky Horizontal Tab Bar -->
    <div class="sticky top-0 z-30 mt-[-1.5rem] mb-2">
      <div class="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div class="bg-white/90 backdrop-blur-lg shadow-lg rounded-full py-1 px-2 flex justify-center overflow-x-auto no-scrollbar border border-gray-100" style="backdrop-filter: blur(10px);">
          <nav role="tablist" class="tabs flex space-x-1 md:space-x-2 items-center">
            <button
              v-for="section in sections"
              :key="section"
              @click="scrollToSection(section)"
              :class="[
                'font-medium px-3 sm:px-4 md:px-5 py-2 md:py-3 rounded-full mobile-text-xs sm:mobile-text-sm lg:mobile-text-base transition duration-300 whitespace-nowrap relative',
                activeSection === section
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-100'
              ]"
            >
              <span>{{ section }}</span>
              <span v-if="activeSection === section" class="absolute left-1/2 -translate-x-1/2 bottom-1 h-1 w-6 sm:w-8 rounded-full bg-blue-400 animate-pulse"></span>
            </button>
          </nav>
        </div>
      </div>
    </div>

    <!-- Testimonial/Quote Carousel -->
    <div class="w-full flex justify-center py-2 bg-white/80 backdrop-blur-lg border-b border-gray-100 mt-2 mb-4" style="backdrop-filter: blur(8px);">
      <div class="max-w-lg w-full px-2">
        <div class="relative">
          <div class="bg-white/80 rounded-xl shadow p-3 sm:p-4 text-center transition-all duration-700 border border-gray-100" :key="testimonials[currentTestimonial].author">
            <p class="mobile-text-sm lg:mobile-text-base italic text-gray-700 mb-2 font-light">"{{ testimonials[currentTestimonial].quote }}"</p>
            <span class="font-semibold text-indigo-700 mobile-text-xs lg:mobile-text-sm">- {{ testimonials[currentTestimonial].author }}</span>
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
          class="px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl mx-auto py-10 sm:py-12 lg:py-14 bg-gradient-to-b from-gray-50 to-white opacity-0 translate-y-8 transition-all duration-700 section-animate"
        >
          <div class="grid grid-cols-1">
            <div class="mobile-card bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md">
              <div class="bg-gradient-to-r from-indigo-600 to-blue-500 py-4 sm:py-5 md:py-6 flex items-center justify-center gap-2 sm:gap-3">
                <span v-if="section === 'Description'" class="mobile-text-lg lg:mobile-text-xl">🏠</span>
                <span v-else-if="section === 'Administration'" class="mobile-text-lg lg:mobile-text-xl">🧑‍💼</span>
                <span v-else-if="section === 'Fees Structure'" class="mobile-text-lg lg:mobile-text-xl">💸</span>
                <span v-else-if="section === 'Rules and Regulations'" class="mobile-text-lg lg:mobile-text-xl">📜</span>
                <h2 class="mobile-text-lg sm:mobile-text-xl lg:mobile-text-2xl xl:mobile-text-3xl text-white font-bold text-center">{{ section }}</h2>
              </div>
              <div class="p-4 sm:p-6 md:p-8">
                <template v-if="section === 'Description'">
                  <p class="mobile-text-sm lg:mobile-text-base">
                    Anna University Regional Campus, Coimbatore, offers comfortable and secure hostel accommodation for both boys and girls, with a total capacity of 360 students. Each hostel features well-ventilated rooms, modern amenities, and dedicated staff for cleaning, security, and maintenance. The mess provides nutritious meals in a hygienic environment, and students can enjoy purified RO water and a variety of cuisines. 
                  </p>
                  <p class="mt-3 sm:mt-4 mobile-text-sm lg:mobile-text-base">
                    The hostels are supervised by experienced wardens and deputy wardens, ensuring a safe and supportive atmosphere. Recreational facilities, including a common room with television and sports activities, help students relax and bond outside of academics. CCTV surveillance and strict entry protocols further enhance safety. 
                  </p>
                  <p class="mt-3 sm:mt-4 mobile-text-sm lg:mobile-text-base">
                    Students are encouraged to participate in social and cultural events, making hostel life vibrant and memorable. A suggestion and grievance book is available for feedback, ensuring continuous improvement of hostel services.
                  </p>
                </template>
                <template v-else-if="section === 'Administration'">
                  <h3 class="mobile-text-base lg:mobile-text-lg xl:mobile-text-xl font-semibold mb-3 sm:mb-4">Chief Warden / Dean</h3>
                  <div class="mobile-grid gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <div class="mobile-card bg-white rounded-xl shadow p-4 sm:p-6 border border-gray-100 flex flex-col gap-2">
                      <div class="font-bold mobile-text-base lg:mobile-text-lg text-indigo-700">Dr. M. Saravanakumar</div>
                      <div class="mobile-text-sm lg:mobile-text-base text-gray-700 font-medium">Warden / Dean</div>
                      <div class="mobile-text-xs lg:mobile-text-sm text-gray-600">Phone: <span class="font-normal">0422-2984002</span></div>
                      <div class="mobile-text-xs lg:mobile-text-sm text-gray-600">Email: <a href="mailto:ucedean-kovai@annauniv.edu" class="text-blue-500 underline">ucedean-kovai@annauniv.edu</a></div>
                    </div>
                  </div>
                  <h3 class="mobile-text-base lg:mobile-text-lg xl:mobile-text-xl font-semibold mb-3 sm:mb-4">Boys & Girls Hostel Administration</h3>
                  <div class="mobile-grid gap-4 sm:gap-6">
                    <div class="mobile-card bg-white rounded-xl shadow p-4 sm:p-6 border border-gray-100 flex flex-col gap-2">
                      <div class="font-bold mobile-text-base lg:mobile-text-lg text-indigo-700">Dr. M. Yuvaraju</div>
                      <div class="mobile-text-sm lg:mobile-text-base text-gray-700 font-medium">Deputy Warden 1 (Boys Hostel)</div>
                      <div class="mobile-text-xs lg:mobile-text-sm text-gray-600">Phone: <span class="font-normal">9952461315</span></div>
                      <div class="mobile-text-xs lg:mobile-text-sm text-gray-600">Email: <a href="mailto:rajaucbe@gmail.com" class="text-blue-500 underline">rajaucbe@gmail.com</a></div>
                    </div>
                    <div class="mobile-card bg-white rounded-xl shadow p-4 sm:p-6 border border-gray-100 flex flex-col gap-2">
                      <div class="font-bold mobile-text-base lg:mobile-text-lg text-indigo-700">Dr. R. Vijayabhasker</div>
                      <div class="mobile-text-sm lg:mobile-text-base text-gray-700 font-medium">Deputy Warden 2 (Boys Hostel)</div>
                      <div class="mobile-text-xs lg:mobile-text-sm text-gray-600">Phone: <span class="font-normal">9842616953</span></div>
                      <div class="mobile-text-xs lg:mobile-text-sm text-gray-600">Email: <a href="mailto:kaviji04@gmail.com" class="text-blue-500 underline">kaviji04@gmail.com</a></div>
                    </div>
                    <div class="mobile-card bg-white rounded-xl shadow p-4 sm:p-6 border border-gray-100 flex flex-col gap-2">
                      <div class="font-bold mobile-text-base lg:mobile-text-lg text-indigo-700">Mr. D. Prabhu</div>
                      <div class="mobile-text-sm lg:mobile-text-base text-gray-700 font-medium">Deputy Warden 3 (Boys Hostel)</div>
                      <div class="mobile-text-xs lg:mobile-text-sm text-gray-600">Phone: <span class="font-normal">9626477744</span></div>
                      <div class="mobile-text-xs lg:mobile-text-sm text-gray-600">Email: <a href="mailto:prabhu2kraj@gmail.com" class="text-blue-500 underline">prabhu2kraj@gmail.com</a></div>
                    </div>
                    <div class="mobile-card bg-white rounded-xl shadow p-4 sm:p-6 border border-gray-100 flex flex-col gap-2">
                      <div class="font-bold mobile-text-base lg:mobile-text-lg text-indigo-700">Dr. S. Sumathi</div>
                      <div class="mobile-text-sm lg:mobile-text-base text-gray-700 font-medium">Deputy Warden 1 (Girls Hostel)</div>
                      <div class="mobile-text-xs lg:mobile-text-sm text-gray-600">Phone: <span class="font-normal">0422-2984009</span></div>
                      <div class="mobile-text-xs lg:mobile-text-sm text-gray-600">Email: <a href="mailto:sumathime@gmail.com" class="text-blue-500 underline">sumathime@gmail.com</a></div>
                    </div>
                    <div class="mobile-card bg-white rounded-xl shadow p-4 sm:p-6 border border-gray-100 flex flex-col gap-2">
                      <div class="font-bold mobile-text-base lg:mobile-text-lg text-indigo-700">Dr. N. Fareena</div>
                      <div class="mobile-text-sm lg:mobile-text-base text-gray-700 font-medium">Deputy Warden 2 (Girls Hostel)</div>
                      <div class="mobile-text-xs lg:mobile-text-sm text-gray-600">Phone: <span class="font-normal">0422-2984009</span></div>
                      <div class="mobile-text-xs lg:mobile-text-sm text-gray-600">Email: <a href="mailto:fareena.aurcc@gmail.com" class="text-blue-500 underline">fareena.aurcc@gmail.com</a></div>
                    </div>
                  </div>
                </template>
                <template v-else-if="section === 'Fees Structure'">
                  <p><a :href="hostel['Fees Structure']['New Admission']" class="text-blue-500 underline">New Admission</a></p>
                  <p><a :href="hostel['Fees Structure']['Existing Students']" class="text-blue-500 underline">Existing Students</a></p>
                  <div class="mt-6 flex justify-center">
                    <a href="https://services.sabpaisa.in/pages/annauniversityregionalcampus.html" target="_blank" rel="noopener" class="inline-block px-8 py-4 bg-indigo-600 text-white rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-lg">
                      Pay Hostel Fees
                    </a>
                  </div>
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
