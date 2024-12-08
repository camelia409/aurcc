<template>
  <main class="flex-grow">
    <!-- Hero section -->
    <section 
    class="hero-section bg-cover py-4 relative -z-10" 
    :style="{ 
      backgroundImage: `url(${backgroundImage})`, 
      backgroundSize: 'cover',
      backgroundPosition: 'center center' 
    }">
      <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div class="container mx-auto py-10 text-center relative z-10 px-4">
        <h1 class="text-4xl font-extrabold text-white drop-shadow-lg font-serif">{{ paceData.name }}</h1>
      </div>
    </section>
      
    <!-- Vertical Tabs Section -->
    <section class="mx-auto py-12 px-10 bg-gray-100 rounded-lg">
      <div class="flex flex-col md:flex-row">
        <!-- Vertical Tabs -->
        <div class="flex-shrink-0 w-full h-max md:w-64 bg-gradient-to-r from-[#21209c] to-blue-600 rounded-lg shadow-lg p-4 mb-4 md:mb-0 md:mr-4">
          <div class="relative p-4 rounded-lg">
            <h2 class="text-2xl font-serif text-center text-white font-semibold">Sections</h2>
          </div>
          <div class="space-y-2 font-serif">
            <button @click="currentSection = 'coordinators'" :class="{'bg-yellow-400 text-[#23120b]': currentSection === 'coordinators', 'bg-gray-100': currentSection !== 'coordinators'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b]">Coordinators</button>
            <button @click="currentSection = 'support_staff'" v-if="paceData.support_staff.length" :class="{'bg-yellow-400 text-[#23120b]': currentSection === 'support_staff', 'bg-gray-100': currentSection !== 'support_staff'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b]">Support Staff</button>
            <button @click="currentSection = 'student_volunteers'" v-if="paceData.student_volunteers.length" :class="{'bg-yellow-400 text-[#23120b]': currentSection === 'student_volunteers', 'bg-gray-100': currentSection !== 'student_volunteers'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b]">Student Volunteers</button>
          </div>
        </div>

        <!-- Tab Content -->
        <div class="w-full px-10 font-serif min-h-[400px] max-h-[400px] overflow-y-auto">
          <div v-if="currentSection === 'coordinators'">
            <h2 class="text-2xl md:text-4xl font-bold text-blue-800 mb-4">Coordinators</h2>
            <div class="space-y-4">
              <div v-for="(coordinator, index) in paceData.coordinators" :key="index" class="bg-white rounded-lg shadow-lg p-6">
                <p class="text-xl font-semibold"><strong>Name:</strong> {{ coordinator.name }}</p>
                <p class="text-xl"><strong>Position:</strong> {{ coordinator.position }}</p>
              </div>
            </div>
          </div>
          <div v-if="currentSection === 'support_staff'">
            <h2 class="text-2xl md:text-4xl font-bold text-blue-800 mb-4">Support Staff</h2>
            <ul class="list-disc pl-5 text-base md:text-lg text-gray-900">
              <li v-for="(staff, index) in paceData.support_staff" :key="index">{{ staff }}</li>
            </ul>
          </div>
          <div v-if="currentSection === 'student_volunteers'">
            <h2 class="text-2xl md:text-4xl font-bold text-blue-800 mb-4">Student Volunteers</h2>
            <ul class="list-disc pl-5 text-base md:text-lg text-gray-900">
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
import backgroundImage from '@/assets/pace.webp';  // Correct path for the image

export default {
  data() {
    return {
      paceData,
      backgroundImage: backgroundImage,
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
/* Font Styles */
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

/* Responsive Styles */
@media (max-width: 768px) {
  /* Hero Section Text */
  .hero-section h1 {
    font-size: 2rem; /* Reduce font size for mobile */
  }

  /* Vertical Tabs Container */
  .flex-col {
    flex-direction: column; /* Stack the tabs vertically on mobile */
  }

  /* Vertical Tabs */
  .w-full {
    width: 100%; /* Make tabs take full width on mobile */
  }

  .md:w-64 {
    width: 100%; /* Tabs take full width on small screens */
  }

  /* Button Adjustments */
  button {
    padding: 1rem 2rem; /* Adjust button size for mobile */
    font-size: 1rem; /* Make button text size smaller on mobile */
  }

  /* Tab Content */
  .px-10 {
    padding-left: 1rem;
    padding-right: 1rem; /* Ensure padding is adequate on mobile */
  }

  /* Hero Section Styling */
  .hero-section {
    background-size: cover;
    background-position: center center;
    min-height: 60vh; /* Increase hero section height for mobile */
  }

  /* Vertical Tabs (buttons) */
  .space-y-2 {
    margin-top: 2rem; /* Add space between tabs for better readability */
  }

  .font-serif {
    font-size: 1.125rem; /* Adjust font size for better readability on mobile */
  }
  
  /* Text Size */
  .text-4xl {
    font-size: 2rem; /* Smaller text for mobile screens */
  }

  .text-2xl {
    font-size: 1.25rem; /* Adjust the subheading size for mobile */
  }
}

/* Tablet to PC */
@media (min-width: 768px) {
  /* Vertical Tabs Container */
  .flex-col {
    flex-direction: row; /* Display the tabs horizontally on larger screens */
  }

  /* Adjust Tab Content Padding */
  .px-10 {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  /* Adjust Font Sizes for PC */
  .text-4xl {
    font-size: 2.5rem; /* Slightly larger text for PCs */
  }

  .text-2xl {
    font-size: 1.75rem; /* Subheading font size for PCs */
  }

  /* Ensure appropriate padding on the hero section */
  .hero-section {
    padding-top: 2rem;
    padding-bottom: 2rem;
    min-height: 70vh; /* Adjust hero section height for larger screens */
  }

  /* Button Adjustments for PC */
  button {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }
}
</style>
