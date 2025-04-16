<template>
  <div class="flex-grow">
    <!-- Hero Section with Parallax Effect -->
    <section class="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
      <!-- Background Image with Overlay -->
      <div class="absolute inset-0 -z-10">
        <img 
          :src="backgroundImage" 
          alt="Student Affairs Background" 
          class="h-full w-full object-cover"
        >
        <!-- Gradient Overlay -->
        <div class="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/80"></div>
      </div>

      <!-- Content -->
      <div class="relative text-center px-4 max-w-4xl mx-auto z-20">
        <h1 class="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Student <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-200">Affairs</span>
        </h1>
        <p class="text-lg md:text-xl text-blue-200">
          The Office of Student Affairs is dedicated to addressing the needs and
          concerns of students, ensuring their academic and personal success.
        </p>
      </div>
    </section>

    <!-- Main Content Area -->
    <section class="py-16 px-4 bg-gray-50">
      <div class="container mx-auto max-w-6xl">
        <!-- Description Card -->
        <div class="card-container mb-10">
          <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100">
            <div class="bg-gradient-to-r from-blue-600 to-indigo-600 py-4 px-6">
              <h2 class="text-xl font-semibold text-white text-center">Description</h2>
            </div>
            <div class="p-6">
              <div class="space-y-4">
                <p v-for="(item, index) in data.description" :key="index" class="text-gray-700 leading-relaxed">
                  {{ item }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Re-Admission Card -->
        <div class="card-container mb-10">
          <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100">
            <div class="bg-gradient-to-r from-indigo-600 to-blue-600 py-4 px-6">
              <h2 class="text-xl font-semibold text-white text-center">Re-Admission</h2>
            </div>
            <div class="p-6">
              <p class="text-gray-700 leading-relaxed">{{ data['Re-Admission'] }}</p>
            </div>
          </div>
        </div>

        <!-- Scholarships Card -->
        <div class="card-container mb-10">
          <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100">
            <div class="bg-gradient-to-r from-blue-600 to-indigo-600 py-4 px-6">
              <h2 class="text-xl font-semibold text-white text-center">Scholarships</h2>
            </div>
            <div class="p-6">
              <p class="text-gray-700 leading-relaxed">{{ data.Scholarship.description }}</p>
              
              <h3 class="text-lg font-semibold text-blue-800 mt-6 mb-3">Available Scholarships</h3>
              <ul class="space-y-2">
                <li v-for="(scholarship, index) in data.Scholarship['list of scholarships']" :key="index" 
                    class="flex items-start space-x-2">
                  <svg class="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-gray-700">{{ scholarship }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Fees Details Card -->
        <div class="card-container mb-10">
          <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100">
            <div class="bg-gradient-to-r from-indigo-600 to-blue-600 py-4 px-6">
              <h2 class="text-xl font-semibold text-white text-center">Fees Details</h2>
            </div>
            <div class="p-6 text-center">
              <p class="text-gray-700 leading-relaxed mb-6">For more details on fees, click the button below:</p>
              <a href="https://www.aukdc.edu.in/" target="_blank" rel="noopener noreferrer">
                <button class="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-md">
                  View Fees Details
                </button>
              </a>
            </div>
          </div>
        </div>

        <!-- Office Bearers Card -->
        <div class="card-container mb-10">
          <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100">
            <div class="bg-gradient-to-r from-blue-600 to-indigo-600 py-4 px-6">
              <h2 class="text-xl font-semibold text-white text-center">Office Bearers</h2>
            </div>
            <div class="p-6 overflow-x-auto">
              <table class="min-w-full">
                <thead class="bg-gray-50">
                  <tr>
                    <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">S.No</th>
                    <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Name of the Staff</th>
                    <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Name of the Post</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                  <tr v-for="(staff, index) in data['Office bearers']['Administration staff']" 
                      :key="index"
                      class="hover:bg-blue-50 transition-colors duration-200">
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{{ staff['S.No'] }}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 font-medium">{{ staff['Name of the Staff'] }}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{{ staff['Name of the Post'] }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- Contact Card -->
        <div class="card-container mb-10">
          <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100">
            <div class="bg-gradient-to-r from-indigo-600 to-blue-600 py-4 px-6">
              <h2 class="text-xl font-semibold text-white text-center">Contact Us</h2>
            </div>
            <div class="p-6">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <!-- Address Card -->
                <div class="flex flex-col items-center p-4 rounded-lg bg-gray-50">
                  <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <p class="text-gray-700 text-center">Anna University Regional Campus, Maruthamalai Main Road, Coimbatore (Dt), Pin-641 046</p>
                </div>
                
                <!-- Phone Card -->
                <div class="flex flex-col items-center p-4 rounded-lg bg-gray-50">
                  <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <p class="text-gray-700 text-center">Phone: 0422 2984009, 0422 2964011</p>
                </div>
                
                <!-- Email Card -->
                <div class="flex flex-col items-center p-4 rounded-lg bg-gray-50">
                  <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <p class="text-gray-700 text-center">Email: <a href="mailto:zugaurce@gmail.com" class="text-blue-600 hover:underline">zugaurce@gmail.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import data from '../assets/student_affairs.json';
import backgroundImage from '@/assets/studentaffairs.webp';

export default {
  data() {
    return {
      data: data,
      backgroundImage: backgroundImage
    };
  }
};
</script>

<style scoped>
/* Card container animations */
.card-container {
  animation: slideUp 0.6s ease-out forwards;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Staggered animation delay for cards */
.card-container:nth-child(1) { animation-delay: 0.1s; }
.card-container:nth-child(2) { animation-delay: 0.2s; }
.card-container:nth-child(3) { animation-delay: 0.3s; }
.card-container:nth-child(4) { animation-delay: 0.4s; }
.card-container:nth-child(5) { animation-delay: 0.5s; }
.card-container:nth-child(6) { animation-delay: 0.6s; }
</style>