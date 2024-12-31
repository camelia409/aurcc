<template>
  <div class="flex-grow">
    <!-- Hero section -->
    <section 
      class="bg-cover bg-center relative w-full h-60 sm:h-80 md:h-94 animate-fadeIn" 
      :style="{ backgroundImage: `url(${backgroundImage})` }">
      <div class="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
      <div class="mx-10 md:py-20 py-16 text-white relative z-10 flex flex-col ">
        <h1 class="md:text-4xl text-xl font-serif font-bold mb-4 animate-slideIn">Curriculum & Syllabus</h1>
        <p class="md:text-xl text-sm font-serif mb-8 mt-6 animate-fadeIn delay-1s">Explore the detailed curriculum and syllabus for our undergraduate and postgraduate programs.</p>
      </div>
    </section>

    <!-- Background section below the hero -->
    <div class="bg-indigo-100 py-8 animate-fadeIn">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- UG Programmes section -->
    <section class="py-8 animate-popIn">
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <h2 class="text-xl md:text-3xl text-center font-serif font-bold p-4 rounded-t-lg bg-gradient-to-r from-blue-500 to-cyan-300 animate-fadeInUp">
          UG Programmes
        </h2>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50 animate-fadeIn delay-2s">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  S.No
                </th>
                <th scope="col" class="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Curriculum & Syllabus
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200 animate-fadeInUp">
              <tr v-for="(programme, index) in data['UG programmes']" :key="index" 
                  :class="{'bg-yellow-100': activeCourse === programme['Curriculum & Syllabus']}" 
                  class="hover:bg-gray-100 transition-colors">
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {{ programme['S.No'] }}
                </td>
                <td class="px-1 md:px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  <a @click="redirectToCourse(programme['Link'])" 
                     class="text-blue-600 hover:underline cursor-pointer">
                    {{ programme['Curriculum & Syllabus'] }}
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- PG Programmes section -->
    <section class="py-8 animate-popIn">
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <h2 class="text-xl md:text-3xl text-center font-serif font-bold p-4 rounded-t-lg bg-gradient-to-r from-blue-500 to-cyan-300 animate-fadeInUp">
          PG Programmes
        </h2>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50 animate-fadeIn delay-2s">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  S.No
                </th>
                <th scope="col" class="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Curriculum & Syllabus
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200 animate-fadeInUp">
              <tr v-for="(programme, index) in data['PG programmes']" :key="index" 
                  :class="{'bg-yellow-100': activeCourse === programme['Curriculum & Syllabus']}" 
                  class="hover:bg-gray-100 transition-colors">
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {{ programme['S.No'] }}
                </td>
                <td class="px-1 md:px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  <a @click="redirectToCourse(programme['Link'])" 
                     class="text-blue-600 hover:underline cursor-pointer">
                    {{ programme['Curriculum & Syllabus'] }}
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
</div>

  </div>
</template>

<script>
import data from '../assets/curriculum_syllabus.json';
import backgroundImage from '@/assets/syllabus.webp';  // Correct path for the image

export default {
  data() {
    return {
      data: data,
      backgroundImage: backgroundImage,
      activeCourse: null,
    };
  },
  methods: {
    redirectToCourse(link) {
      this.activeCourse = this.getCourseNameFromLink(link);
      window.open(link, '_blank');
    },
    getCourseNameFromLink(link) {
      // Extract course name from the link or match it directly
      const course = this.data['UG programmes'].find(p => p['Link'] === link)?.['Curriculum & Syllabus']
        || this.data['PG programmes'].find(p => p['Link'] === link)?.['Curriculum & Syllabus'];
      return course;
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

@keyframes popIn {
  0% { opacity: 0; transform: scale(0.8); }
  100% { opacity: 1; transform: scale(1); }
}

h1.animate-slideIn {
  animation: slideIn 1s ease-out forwards;
}

p.animate-fadeIn {
  animation: fadeIn 2s ease-out forwards;
}

section.animate-popIn {
  animation: popIn 1.2s ease-out forwards;
}

h2.animate-fadeInUp {
  animation: fadeInUp 1.5s ease-out forwards;
}

.animate-fadeIn {
  animation: fadeIn 1.5s ease-out forwards;
}

.animate-fadeInUp {
  animation: fadeInUp 1.5s ease-out forwards;
}
</style>
