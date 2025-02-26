<template>
  <div class="flex-grow">
    <!-- Hero section -->
    <section 
      class="hero-section bg-cover bg-center relative -z-10 animate-fadeIn"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
    >
      <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div class="container mx-auto py-16 text-white p-6 sm:p-18 relative z-10 animate-slideIn">
        <h1 class="text-2xl sm:text-4xl font-bold mb-4">Contact Information</h1>
        <p class="text-lg sm:text-xl mb-8">Get in touch with the relevant offices for any assistance or inquiries.</p>
      </div>
    </section>

    <!-- Background section below the hero -->
    <div class="bg-indigo-100 py-8">
      <!-- Contact Office and Numbers section -->
      <section class="py-8 px-4 animate-popIn">
        <div class="bg-white rounded-lg shadow-md">
          <h2 class="text-2xl sm:text-2xl text-center font-bold p-2.5 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600">Contact Office and Numbers</h2>
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="px-4 sm:px-6 py-3 text-left text-s font-bold text-gray-500 uppercase tracking-wider">Office</th>
                  <th scope="col" class="px-4 sm:px-6 py-3 text-left text-s font-bold text-gray-500 uppercase tracking-wider">Contact Number</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="(contact, index) in contacts" :key="index" class="animate-fadeIn">
                  <td class="px-4 sm:px-6 py-4 whitespace-nowrap text-sm">{{ contact.office }}</td>
                  <td class="px-4 sm:px-6 py-4 whitespace-nowrap text-sm">{{ contact.number }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import contacts from '../assets/contact.json';
import backgroundImage from '@/assets/contact.webp';  // Correct path for the image

export default {
  data() {
    return {
      backgroundImage: backgroundImage,
      contacts: contacts.contacts
    };
  }
};
</script>

<style scoped>
/* Add any custom styles for the table or section if needed */

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes popIn {
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes slideIn {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(0); }
}

.animate-slideIn {
  animation: slideIn 1s ease-out forwards;
}

.animate-fadeIn {
  animation: fadeIn 1s ease-out;
}

.animate-fadeInUp {
  animation: fadeInUp 1s ease-out;
}

.animate-popIn {
  animation: popIn 1s ease-out;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .hero-section {
    background-position: center;
  }
  table th, table td {
    font-size: 0.9rem;
  }
}
</style>
