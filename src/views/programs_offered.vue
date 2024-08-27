<template>
  <div class="flex-grow">
    <!-- Hero section -->
    <section 
      class="hero-section bg-cover bg-center relative -z-10" 
      :style="{ backgroundImage: `url(${backgroundImage})` }">
      <div class="absolute inset-0 bg-black opacity-70"></div>
      <div class="mx-auto py-24 text-white relative z-10 flex flex-col items-center text-center">
        <h1 class="text-5xl font-extrabold mb-4 animate-slideIn font-serif">Programs Offered</h1>
        <p class="text-2xl mb-8 animate-fadeIn delay-1s font-serif">Explore the programs we offer for undergraduate and postgraduate studies.</p>
      </div>
    </section>

    <!-- Background section below the hero -->
    <div class="bg-gradient-to-b from-gray-100 to-blue-100 py-16 animate-fadeIn relative -z-10 ">
      <div class="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- UG Programmes section -->
        <section class="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl animate-popIn">
          <h2 class="text-3xl text-center font-extrabold py-6 bg-gradient-to-r from-blue-600 to-cyan-400 text-white animate-fadeInUp font-serif">UG Programmes</h2>
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-100 animate-fadeIn delay-2s">
                <tr>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">S.No</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Courses Offered</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Intake</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200 animate-fadeInUp">
                <tr v-for="(programme, index) in data['UG programmes']" :key="index" class="hover:bg-gray-100 transition-colors">
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ programme['S.No'] }}</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ programme['Courses Offered'] }}</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ programme['Intake'] }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- PG Programmes section -->
        <section class="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl animate-popIn">
          <h2 class="text-3xl text-center font-extrabold py-6 bg-gradient-to-r from-blue-600 to-cyan-400 text-white animate-fadeInUp font-serif">PG Programmes</h2>
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-100 animate-fadeIn delay-2s">
                <tr>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">S.No</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Department</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Courses Offered</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Intake</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200 animate-fadeInUp">
                <tr v-for="(programme, index) in data['PG programmes']" :key="index" class="hover:bg-gray-100 transition-colors">
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ programme['S.No'] }}</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ programme['Department'] }}</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ programme['Courses Offered'] }}</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ programme['Intake'] }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import data from '../assets/programs_offered.json';
import backgroundImage from '../assets/programsoffered.webp'; 
export default {
  data() {
    return {
      data: data,
      backgroundImage: backgroundImage,
    };
  },
};
</script>

<style scoped>
/* Enhanced styling with animations */
.container {
  max-width: 1280px;
  padding: 0 1.5rem;
}

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

table thead th {
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

table tbody tr:hover {
  background-color: #f9fafb;
}

.animate-fadeIn {
  animation: fadeIn 1.5s ease-out forwards;
}

.animate-fadeInUp {
  animation: fadeInUp 1.5s ease-out forwards;
}
</style>
