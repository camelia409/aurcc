<template>
  <main class="flex-grow">
    <!-- Hero section -->
    <section class="bg-cover bg-center relative -z-10" :style="'background-image: url(http://192.168.72.231:5173/src/assets/dgate-hero.jpg)'">
      <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-blue-900 via-transparent to-blue-900 opacity-70"></div>
      <div class="container mx-auto py-16 text-center relative z-10 px-4">
        <h1 class="text-4xl font-extrabold text-black mb-4 drop-shadow-lg font-serif">{{ data.name }}</h1>
        <p class="text-lg max-w-3xl mx-auto mb-8 text-black leading-relaxed drop-shadow-lg font-sans">{{ data.description.Overview }}</p>
      </div>
    </section>

    <!-- Vertical Tabs Section -->
    <section class="container mx-auto py-8 px-4">
      <div class="relative flex flex-col lg:flex-row">
        <!-- Vertical Tabs -->
        <div class="flex-shrink-0 w-full lg:w-64 bg-gradient-to-r from-purple-400 to-pink-300 rounded-lg shadow-lg p-4 overflow-hidden mb-4 lg:mb-0">
          <div class="relative bg-gradient-to-r from-purple-500 to-pink-400 p-4 rounded-lg mb-4">
            <h2 class="text-2xl text-white font-bold">Tabs</h2>
          </div>
          <div class="space-y-4">
            <button @click="activeTab = 'overview'" :class="{'bg-gray-200': activeTab === 'overview'}" class="w-full py-2 px-4 bg-white text-gray-800 rounded-md font-semibold hover:bg-gray-200">Overview</button>
            <button @click="activeTab = 'courses'" :class="{'bg-gray-200': activeTab === 'courses'}" class="w-full py-2 px-4 bg-white text-gray-800 rounded-md font-semibold hover:bg-gray-200">Courses Offered</button>
            <button @click="activeTab = 'eligibility'" :class="{'bg-gray-200': activeTab === 'eligibility'}" class="w-full py-2 px-4 bg-white text-gray-800 rounded-md font-semibold hover:bg-gray-200">Eligibility Criteria</button>
            <button @click="activeTab = 'contact'" :class="{'bg-gray-200': activeTab === 'contact'}" class="w-full py-2 px-4 bg-white text-gray-800 rounded-md font-semibold hover:bg-gray-200">Contact Us</button>
          </div>
        </div>

        <!-- Tab Content -->
        <div class="flex-grow p-4 bg-white rounded-lg shadow-lg">
          <div v-if="activeTab === 'overview'" class="bg-gradient-to-r from-indigo-500 to-indigo-300 rounded-lg shadow-lg p-6 mb-4">
            <h3 class="text-3xl text-white font-bold mb-4">Overview</h3>
            <p class="text-xl font-medium text-gray-900">{{ data.description['Admissions at our Regional Campus'] }}</p>
          </div>
          <div v-if="activeTab === 'courses'" class="bg-gradient-to-r from-gray-500 to-gray-300 rounded-lg shadow-lg p-6 mb-4">
            <h3 class="text-3xl text-white font-bold mb-4">Courses Offered</h3>
            <p class="text-xl font-medium text-gray-900">{{ data.courses_offered }}</p>
          </div>
          <div v-if="activeTab === 'eligibility'" class="bg-gradient-to-r from-teal-500 to-teal-300 rounded-lg shadow-lg p-6 mb-4">
            <h3 class="text-3xl text-white font-bold mb-4">Eligibility Criteria</h3>
            <ul class="text-xl font-medium text-gray-900 list-disc pl-6">
              <li v-for="(criteria, category) in data.eligibility_criteria" :key="category">
                <strong>{{ category }}</strong>: {{ criteria }}
              </li>
            </ul>
          </div>
          <div v-if="activeTab === 'contact'" class="bg-gradient-to-r from-green-500 to-green-300 rounded-lg shadow-lg p-6 mb-4">
            <h3 class="text-3xl text-white font-bold mb-4">Contact Us</h3>
            <p class="text-xl font-medium text-gray-900">{{ data.contact_us['Admission Co-ordinator'] }}</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import admissionData from '../assets/admission.json';

export default {
  data() {
    return {
      data: admissionData[0],
      activeTab: 'overview' // Default active tab
    };
  }
};
</script>

<style>
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
}

/* Sections */
section {
  transition: transform 0.3s ease-in-out;
}

section:hover {
  transform: scale(1.01);
}

/* Gradient Background */
.bg-gradient-to-r {
  background: linear-gradient(90deg, var(--tw-gradient-stops));
}

/* Vertical Tabs */
button:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.flex-shrink-0 {
  flex-shrink: 0;
}

@media (max-width: 1024px) {
  /* Adjust padding and font sizes for tablets */
  .text-4xl {
    font-size: 2rem;
  }
  .text-3xl {
    font-size: 1.75rem;
  }
  .text-xl {
    font-size: 1.125rem;
  }
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

@media (max-width: 640px) {
  /* Adjust padding, font sizes, and layout for mobile */
  .text-4xl {
    font-size: 1.5rem;
  }
  .text-3xl {
    font-size: 1.5rem;
  }
  .text-xl {
    font-size: 1rem;
  }
  .container {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  .flex-col {
    flex-direction: column;
  }
  .lg\:w-64 {
    width: 100%;
  }
  .lg\:flex-row {
    flex-direction: column;
  }
  .ml-8 {
    margin-left: 0;
  }
}
</style>
