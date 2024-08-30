<template>
  <div class="flex-grow">
    <!-- Hero section -->
    <section 
      class="hero-section bg-cover bg-center relative -z-10 " 
      :style="{ backgroundImage: `url(${backgroundImage})` }">
      <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div class="container mx-auto py-16 text-white p-9 relative z-10">
        <h1 class="text-4xl font-serif font-bold mb-4 animate-slideIn">Curriculum & Syllabus</h1>
        <p class="text-xl font-serif mb-8 animate-fadeIn delay-1s">Explore the detailed curriculum and syllabus for our undergraduate and postgraduate programs.</p>
      </div>
    </section>

    <!-- Background section below the hero -->
    <div class="bg-indigo-100 py-8 animate-fadeIn">
      <!-- UG Programmes section -->
      <section class="py-8 p-4 animate-popIn">
        <div class="bg-white rounded-lg shadow-md">
          <h2 class="text-3xl text-center font-serif font-bold p-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-300 animate-fadeInUp">UG Programmes</h2>
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50 animate-fadeIn delay-2s">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S.No</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Curriculum & Syllabus</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200 animate-fadeInUp">
              <tr v-for="(programme, index) in data['UG programmes']" :key="index" :class="{'bg-yellow-100': activeCourse === programme['Curriculum & Syllabus']}">
                <td class="px-6 py-4 whitespace-nowrap">{{ programme['S.No'] }}</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <a @click="redirectToCourse(programme['Link'])" class="text-blue-600 hover:underline cursor-pointer">{{ programme['Curriculum & Syllabus'] }}</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- PG Programmes section -->
      <section class="py-8 p-4 animate-popIn">
        <div class="bg-white rounded-lg shadow-md">
          <h2 class="text-3xl text-center font-serif font-bold p-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-300 animate-fadeInUp">PG Programmes</h2>
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50 animate-fadeIn delay-2s">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S.No</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Curriculum & Syllabus</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200 animate-fadeInUp">
              <tr v-for="(programme, index) in data['PG programmes']" :key="index" :class="{'bg-yellow-100': activeCourse === programme['Curriculum & Syllabus']}">
                <td class="px-6 py-4 whitespace-nowrap">{{ programme['S.No'] }}</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <a @click="redirectToCourse(programme['Link'])" class="text-blue-600 hover:underline cursor-pointer">{{ programme['Curriculum & Syllabus'] }}</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
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
