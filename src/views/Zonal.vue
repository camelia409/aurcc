<template>
  <main class="flex-grow">
    <!-- Hero section -->
    <section 
    class="hero-section bg-cover  py-4 relative -z-10" 
    :style="{ 
     backgroundImage: `url(${backgroundImage})`, 
      backgroundSize: 'cover',
      backgroundPosition: 'center center' 
    }">
      <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-blue-900 via-transparent to-blue-900 opacity-70"></div>
      <div class="container mx-auto py-10 text-center relative z-10 px-4">
        <h1 class="text-4xl font-extrabold text-white drop-shadow-lg font-serif">Zonal Office</h1>
      </div>
    </section>

    <!-- Vertical Tabs Section -->
    <section class="mx-auto py-10 px-10">
      <div class="flex flex-col lg:flex-row">
        <!-- Vertical Tabs -->
        <div class="flex-shrink-0 w-full h-max lg:w-64 bg-gradient-to-r from-[#21209c] to-blue-600 rounded-lg shadow-lg p-4 mb-4 lg:mb-0">
          <div class="relative p-4 rounded-lg bg-gradient-to-r from-[#21209c] to-blue-600">
            <h2 class="text-2xl font-serif text-white font-bold text-center">Sections</h2>
          </div>
          <div class="space-y-2 font-serif mt-4">
            <button @click="activeTab = 'description'" :class="{'bg-yellow-400 text-[#23120b]': activeTab === 'description', 'bg-white text-gray-800': activeTab !== 'description'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b]">Description</button>
            <button @click="activeTab = 'zoneList'" :class="{'bg-yellow-400 text-[#23120b]': activeTab === 'zoneList', 'bg-white text-gray-800': activeTab !== 'zoneList'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b]">Zone List of Colleges</button>
            <button @click="activeTab = 'officeBearers'" :class="{'bg-yellow-400 text-[#23120b]': activeTab === 'officeBearers', 'bg-white text-gray-800': activeTab !== 'officeBearers'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b]">Office Bearers</button>
          </div>
        </div>

        <!-- Tab Content -->
        <div class="w-full lg:pl-10 font-serif">
          <div v-if="activeTab === 'description'">
            <h3 class="text-2xl md:text-4xl font-bold text-blue-800 mb-4">Description</h3>
            <ul class="text-lg sm:text-xl font-medium text-gray-900 list-disc pl-6">
              <li v-for="(desc, index) in data.description" :key="index">{{ desc }}</li>
            </ul>
          </div>
          <div v-if="activeTab === 'zoneList'">
            <h3 class="text-2xl sm:text-3xl text-blue-800 font-bold mb-4">Zone List of Colleges</h3>
            <iframe :src="zonalListPDF" class="w-full h-[500px] sm:h-[700px] rounded-lg border-2 border-gray-300 shadow-sm" frameborder="0"></iframe>
          </div>
          <div v-if="activeTab === 'officeBearers'">
            <h3 class="text-2xl md:text-4xl font-bold text-blue-800 mb-4">Office Bearers</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div v-for="bearer in data['Office bearers']" :key="bearer.name" class="p-6 rounded-lg bg-white shadow-md">
                <h4 class="text-lg font-semibold">{{ bearer.name }}</h4>
                <p>{{ bearer.designation }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-4">
      <div class="container mx-auto text-center">
        <p>&copy; {{ currentYear }} Zonal Office. All rights reserved.</p>
      </div>
    </footer>
  </main>
</template>

<script>
import data from '../assets/zonaloffice.json';
import zonalListPDF from '../assets/zonal-list.pdf';
import backgroundImage from '@/assets/zonal.webp';  // Correct path for the image

export default {
  data() {
    return {
      data: data[0],
      backgroundImage: backgroundImage,
      zonalListPDF,
      activeTab: 'description', // Default active tab
    };
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style scoped>
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

/* Responsive Design */
@media (max-width: 1024px) {
  /* Adjusting layout for tablets and small laptops */
  .hero-section {
    min-height: 40vh; /* Reduced height for smaller screens */
  }

  .flex-col {
    flex-direction: column;
  }

  .lg\:w-64 {
    width: 100%; /* Full width for vertical tabs */
    margin-bottom: 1rem; /* Margin below tabs */
  }

  .lg\:pl-10 {
    padding-left: 0; /* Remove left padding on smaller screens */
  }

  .w-full {
    width: 100%;
  }

  .h-max {
    height: auto; /* Adjust height for small devices */
  }
}

@media (max-width: 640px) {
  /* Mobile view adjustments */
  .hero-section {
    min-height: 35vh; /* Further reduce height for mobile screens */
    padding: 2rem 0; /* Add padding for better spacing */
  }

  .container {
    padding-left: 1rem;
    padding-right: 1rem; /* Ensure content fits nicely on small screens */
  }

  .text-4xl {
    font-size: 2rem; /* Reduce font size for hero heading */
  }

  .font-serif {
    font-size: 0.875rem; /* Reduce font size for smaller screens */
  }

  /* Adjust Vertical Tabs for mobile */
  .flex-shrink-0 {
    width: 100%; /* Make vertical tabs full width */
    margin-bottom: 1rem; /* Spacing between tabs and content */
  }

  .font-serif button {
    font-size: 0.875rem; /* Smaller font size for buttons on mobile */
  }

  .lg\:pl-10 {
    padding-left: 0; /* Remove large left padding for mobile */
  }

  /* Ensure tab content is fully responsive */
  iframe {
    width: 100%;
    height: auto; /* Allow iframe to adapt to screen size */
  }

  .grid-cols-1 {
    grid-template-columns: 1fr; /* Single column layout for office bearers */
  }
}
</style>

