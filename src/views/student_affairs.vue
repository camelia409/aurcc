<template>
  <div class="flex-grow">
    <!-- Hero section -->
    <section 
      class="hero-section bg-cover relative -z-10 animate-fadeIn" 
      :style="{ 
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'top center' 
      }">
      <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div class="container mx-auto py-16 px-4 text-white p-12 relative z-10">
        <h1 class="text-4xl font-bold mb-4 font-serif animate-slideIn text-center sm:text-5xl lg:text-6xl">Student Affairs</h1>
        <p class="text-xl mb-8 font-serif animate-fadeIn delay-1s text-center sm:text-2xl">The Office of Student Affairs is dedicated to addressing the needs and
          concerns of students, ensuring their academic and personal success.</p>
      </div>
    </section>

    <!-- Background section below the hero -->
    <div class="bg-indigo-100 py-8 font-serif animate-fadeIn">
      <!-- Description section -->
      <section class="py-8 p-4 animate-popIn">
        <div class="bg-white rounded-lg shadow-md">
          <h2 class="text-3xl text-center font-bold p-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-300 animate-fadeInUp text-lg sm:text-2xl md:text-3xl">Description</h2>
          <div class="font-medium text-xl p-4 space-y-2 animate-fadeIn delay-2s">
            <p v-for="(item, index) in data.description" :key="index">{{ item }}</p>
          </div>
        </div>
      </section>

      <!-- Re-Admission section -->
      <section class="py-8 p-4 animate-popIn">
        <div class="bg-white rounded-lg shadow-md">
          <h2 class="text-3xl text-center font-bold p-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-300 animate-fadeInUp text-lg sm:text-2xl md:text-3xl">Re-Admission</h2>
          <div class="font-medium text-xl p-4 animate-fadeIn delay-2s">
            <p>{{ data['Re-Admission'] }}</p>
          </div>
        </div>
      </section>

      <!-- Scholarships section -->
      <section class="py-8 p-4 animate-popIn">
        <div class="bg-white rounded-lg shadow-md">
          <h2 class="text-3xl text-center font-bold p-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-300 animate-fadeInUp text-lg sm:text-2xl md:text-3xl">Scholarships</h2>
          <div class="font-medium text-xl p-4 animate-fadeIn delay-2s">
            <p>{{ data.Scholarship.description }}</p>
            <ul class="list-disc pl-5 mt-4">
              <li v-for="(scholarship, index) in data.Scholarship['list of scholarships']" :key="index">{{ scholarship }}</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Fees Details section -->
      <section class="py-8 p-4 animate-popIn">
        <div class="bg-white rounded-lg shadow-md">
          <h2 class="text-3xl text-center font-bold p-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-300 animate-fadeInUp text-lg sm:text-2xl md:text-3xl">Fees Details</h2>
          <div class="font-medium text-xl p-4 animate-fadeIn delay-2s">
            <p>For more details on fees, click the button below:</p>
            <div class="text-center mt-4">
              <a href="https://www.aukdc.edu.in/" target="_blank" rel="noopener noreferrer">
                <button class="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                  View Fees Details
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Office Bearers section -->
      <section class="py-8 p-4 animate-popIn">
        <div class="bg-white rounded-lg shadow-md">
          <h2 class="text-3xl text-center font-bold p-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-300 animate-fadeInUp text-lg sm:text-2xl md:text-3xl">Office Bearers</h2>
          <table class="min-w-full divide-y divide-gray-200 animate-fadeIn delay-2s">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S.No</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name of the Staff</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name of the Post</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="(staff, index) in data['Office bearers']['Administration staff']" :key="index">
                <td class="px-6 py-4 whitespace-nowrap">{{ staff['S.No'] }}</td>
                <td class="px-6 py-4 whitespace-nowrap">{{ staff['Name of the Staff'] }}</td>
                <td class="px-6 py-4 whitespace-nowrap">{{ staff['Name of the Post'] }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Contact Us section -->
      <section class="py-8 p-4 animate-popIn">
        <div class="bg-white rounded-lg shadow-md">
          <h2 class="text-3xl text-center font-bold p-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-300 animate-fadeInUp text-lg sm:text-2xl md:text-3xl">Contact Us</h2>
          <div class="font-medium text-xl p-4 animate-fadeIn delay-2s">
            <div class="space-y-2">
              <p>Anna University Regional Campus, Maruthamalai Main Road, Coimbatore (Dt), Pin-641 046</p>
              <p>Phone: 0422 2984009, 0422 2964011</p>
              <p>Email: <a href="mailto:zugaurce@gmail.com" class="text-blue-600 hover:underline">zugaurce@gmail.com</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import data from '../assets/student_affairs.json';
import backgroundImage from '@/assets/studentaffairs.webp';  // Correct path for the image

export default {
  data() {
    return {
      data: data,
      backgroundImage: backgroundImage,
      sections: [],
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
      if (element && element.offsetTop) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    },
    handleScroll() {
      const scrollPosition = window.scrollY + 150;
      for (let section of this.sections) {
        const element = this.$refs[section];
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            this.activeSection = section;
            break;
          }
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
/* Enhanced styling with animations */
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes slideIn {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(0); }
}

.hero-section {
  animation: fadeIn 1s ease-in-out;
}

.animate-popIn {
  animation: fadeInUp 1s ease-in-out;
}

.animate-slideIn {
  animation: slideIn 1s ease-in-out;
}
</style>
