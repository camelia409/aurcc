<template>
  <main class="flex-grow">
    <!-- Hero section -->
    <section class="bg-cover bg-center relative -z-10" :style="'background-image: url(http://192.168.72.231:5173/src/assets/dgate-hero.jpg)'">
      <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-blue-900 via-transparent to-blue-900 opacity-70"></div>
      <div class="container mx-auto py-16 text-center text-white relative z-10">
        <h1 class="text-5xl font-extrabold mb-4 drop-shadow-lg text-black">{{ data.name }}</h1>
        <p class="text-lg max-w-3xl mx-auto mb-8 leading-relaxed drop-shadow-lg text-black">{{ data.description['About Office of Affiliation and its activities'] }}</p>
      </div>
    </section>

    <!-- Content sections with Vertical Tabs -->
    <section class="container mx-auto py-8 px-4">
      <div class="flex">
        <!-- Vertical Tabs -->
        <div class="flex-shrink-0 w-64 bg-gradient-to-r from-purple-400 to-pink-300 rounded-lg shadow-lg p-4 overflow-hidden">
          <div class="relative bg-gradient-to-r from-purple-500 to-pink-400 p-4 rounded-lg mb-4">
            <svg class="absolute inset-0 w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="100" fill="url(#gradient)" />
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stop-color="rgba(255, 182, 193, 0.5)" />
                  <stop offset="100%" stop-color="rgba(255, 105, 180, 0.5)" />
                </linearGradient>
              </defs>
            </svg>
            <h2 class="text-2xl text-white font-bold">Tabs</h2>
          </div>
          <div class="space-y-2">
            <button @click="currentSection = 'officeBearer'" :class="{'bg-white': currentSection === 'officeBearer', 'bg-gray-200': currentSection !== 'officeBearer'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-gray-300">Office Bearer</button>
            <button @click="currentSection = 'affiliationStaff'" :class="{'bg-white': currentSection === 'affiliationStaff', 'bg-gray-200': currentSection !== 'affiliationStaff'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-gray-300">Affiliation Administration Staff</button>
            <button @click="currentSection = 'contactUs'" :class="{'bg-white': currentSection === 'contactUs', 'bg-gray-200': currentSection !== 'contactUs'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-gray-300">Contact Us</button>
          </div>
        </div>

        <!-- Tab Content -->
        <div class="flex-grow ml-8">
          <!-- Office Bearer Section -->
          <div v-if="currentSection === 'officeBearer'" class="bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-lg shadow-lg p-6 mb-4">
            <h3 class="text-3xl text-white font-bold mb-4">Office Bearer</h3>
            <div v-if="data.office_bearers" class="text-xl text-gray-900">
              <div class="bg-white p-4 rounded-lg shadow-md mb-4">
                <p><strong>Name:</strong> {{ data.office_bearers.name }}</p>
                <p><strong>Qualification:</strong> {{ data.office_bearers.qualification }}</p>
                <p><strong>Position:</strong> {{ data.office_bearers.position }}</p>
              </div>
            </div>
          </div>

          <!-- Affiliation Administration Staff Section -->
          <div v-if="currentSection === 'affiliationStaff'" class="bg-gradient-to-r from-green-500 to-green-300 rounded-lg shadow-lg p-6 mb-4">
            <h3 class="text-3xl text-white font-bold mb-4">Affiliation Administration Staff</h3>
            <div v-if="data.affiliation_administration_staff" class="text-xl text-gray-900">
              <div v-for="staff in data.affiliation_administration_staff" :key="staff.name" class="bg-white p-4 rounded-lg shadow-md mb-4">
                <p><strong>Name:</strong> {{ staff.name }}</p>
                <p><strong>Position:</strong> {{ staff.position }}</p>
                <p><strong>Phone:</strong> {{ staff.phone }}</p>
                <p><strong>Email:</strong> {{ staff.email }}</p>
              </div>
            </div>
          </div>

          <!-- Contact Us Section -->
          <div v-if="currentSection === 'contactUs'" class="bg-gradient-to-r from-blue-500 to-blue-300 rounded-lg shadow-lg p-6 mb-4">
            <h3 class="text-3xl text-white font-bold mb-4">Contact Us</h3>
            <div v-if="data.contact_details" class="text-xl text-gray-900">
              <div class="bg-white p-4 rounded-lg shadow-md">
                <p><strong>Office:</strong> {{ data.contact_details.office }}</p>
                <p><strong>Address:</strong> {{ data.contact_details.address }}</p>
                <p><strong>Phone:</strong> {{ data.contact_details.phone }}</p>
                <p><strong>Email:</strong> {{ data.contact_details.email }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import data from '../assets/office of affiliation.json';

export default {
  data() {
    return {
      data: data,
      currentSection: 'officeBearer' // Default to 'officeBearer'
    };
  },
};
</script>

<style scoped>
/* Custom styles for the component */
.bg-gradient-to-r {
  background: linear-gradient(90deg, var(--tw-gradient-stops));
}

button:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

button.bg-white {
  background-color: #fff;
}
</style>
