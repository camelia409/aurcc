<template>
  <main class="flex-grow">
    <!-- Hero section -->
    <section
      class="bg-cover bg-center relative -z-10 transition-all duration-700 ease-in-out transform hover:scale-105"
      :style="'background-image: url(http://192.168.72.231:5173/src/assets/dgate-hero.jpg)'"
      :class="{'py-8': isDescriptionLong, 'py-12': !isDescriptionLong}"
    >
      <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-blue-900 via-transparent to-blue-900 opacity-70"></div>
      <div class="container mx-auto py-12 text-white relative z-10 flex justify-center items-center flex-col text-center">
        <h1 class="text-4xl font-extrabold mb-4 drop-shadow-lg font-sans text-black animate__animated animate__fadeInDown">
          {{ paceData.name }}
        </h1>
        <p class="text-lg mb-6 max-w-2xl leading-relaxed drop-shadow-lg font-serif text-black">
          {{ truncatedDescription }}
          <button
            v-if="isDescriptionLong && !showFull"
            @click="showFullDescription"
            class="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-500"
          >
            Learn More
          </button>
        </p>
      </div>
    </section>

    <!-- Vertical Tabs Section -->
    <section class="mx-auto py-8 px-4 space-y-6 animate__animated animate__fadeInUp animate__slow">
      <div class="relative flex">
        <!-- Vertical Tabs -->
        <div class="flex-shrink-0 w-64 bg-gradient-to-r from-purple-400 to-pink-300 rounded-lg shadow-lg p-4 overflow-hidden">
          <div class="relative bg-gradient-to-r from-purple-500 to-pink-400 p-4 rounded-lg mb-4">
            <svg class="absolute inset-0 w-full h-full animate__animated animate__pulse animate__infinite" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="100" fill="url(#gradient)" />
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stop-color="rgba(255, 182, 193, 0.5)" />
                  <stop offset="100%" stop-color="rgba(255, 105, 180, 0.5)" />
                </linearGradient>
              </defs>
            </svg>
            <h2 class="text-2xl text-white font-bold animate__animated animate__zoomIn">Sections</h2>
          </div>
          <div class="space-y-4">
            <button @click="currentSection = 'coordinators'" class="w-full py-2 px-4 bg-white text-gray-800 rounded-md font-semibold hover:bg-gray-200 transition duration-500">
              Coordinators
            </button>
            <button @click="currentSection = 'support_staff'" v-if="paceData.support_staff.length" class="w-full py-2 px-4 bg-white text-gray-800 rounded-md font-semibold hover:bg-gray-200 transition duration-500">
              Support Staff
            </button>
            <button @click="currentSection = 'student_volunteers'" v-if="paceData.student_volunteers.length" class="w-full py-2 px-4 bg-white text-gray-800 rounded-md font-semibold hover:bg-gray-200 transition duration-500">
              Student Volunteers
            </button>
          </div>
        </div>

        <!-- Tab Content -->
        <div class="flex-grow ml-8 p-4 relative">
          <div v-if="currentSection === 'coordinators'" class="bg-gradient-to-r from-blue-500 to-blue-300 rounded-lg shadow-lg p-6 animate__animated animate__fadeIn animate__slow">
            <h3 class="text-3xl text-white font-bold mb-4">Coordinators</h3>
            <div class="space-y-4">
              <div
                v-for="(coordinator, index) in paceData.coordinators"
                :key="index"
                class="p-4 rounded-lg bg-gray-100 animate__animated animate__fadeInUp"
              >
                <p class="text-xl font-semibold"><strong>Name:</strong> {{ coordinator.name }}</p>
                <p class="text-xl"><strong>Position:</strong> {{ coordinator.position }}</p>
              </div>
            </div>
          </div>
          <div v-if="currentSection === 'support_staff'" class="bg-gradient-to-r from-teal-500 to-teal-300 rounded-lg shadow-lg p-6 animate__animated animate__fadeIn animate__slow">
            <h3 class="text-3xl text-white font-bold mb-4">Support Staff</h3>
            <ul class="text-lg font-medium text-gray-900 list-disc pl-6 animate__animated animate__fadeInUp">
              <li v-for="(staff, index) in paceData.support_staff" :key="index">{{ staff }}</li>
            </ul>
          </div>
          <div v-if="currentSection === 'student_volunteers'" class="bg-gradient-to-r from-green-500 to-green-300 rounded-lg shadow-lg p-6 animate__animated animate__fadeIn animate__slow">
            <h3 class="text-3xl text-white font-bold mb-4">Student Volunteers</h3>
            <ul class="text-lg font-medium text-gray-900 list-disc pl-6 animate__animated animate__fadeInUp">
              <li v-for="(volunteer, index) in paceData.student_volunteers" :key="index">{{ volunteer }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import paceData from '../assets/pace.json';

export default {
  data() {
    return {
      paceData,
      currentSection: 'coordinators', // Default active section
      showFull: false, // To toggle full description
    };
  },
  computed: {
    truncatedDescription() {
      if (this.showFull || !this.isDescriptionLong) {
        return this.paceData.description;
      }
      const firstFullStop = this.paceData.description.indexOf('.');
      return this.paceData.description.slice(0, firstFullStop + 1);
    },
    isDescriptionLong() {
      return this.paceData.description.length > 100; // Adjust the length as needed
    },
  },
  methods: {
    showFullDescription() {
      this.showFull = true; // Show the full description when the button is clicked
    },
  },
};
</script>

<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";

/* Font Styles */
.font-sans {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.font-serif {
  font-family: 'Georgia', 'Times New Roman', Times, serif;
}

/* Hero section */
.hero-section {
  min-height: 50vh;
  position: relative;
  background-blend-mode: multiply;
  transition: all 0.7s ease-in-out;
}

.bg-gradient-to-r {
  background: linear-gradient(90deg, var(--tw-gradient-stops));
}

button:focus {
  outline: none;
}

/* Learn More Button Styling */
button {
  display: inline-block;
  border: 2px solid transparent;
  padding: 0.5rem 1rem;
  text-align: center;
}

button:hover {
  background-color: #2563eb; /* Tailwind blue-600 */
  color: white;
  transform: translateY(-2px);
  transition: all 0.3s ease-in-out;
}
</style>
