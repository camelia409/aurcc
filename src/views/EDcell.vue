<template>
  <main class="flex-grow">
    <!-- Hero section -->
    <section class="bg-cover bg-center relative -z-10" :style="'background-image: url(http://192.168.72.231:5173/src/assets/dgate-hero.jpg)'">
      <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-blue-900 via-transparent to-blue-900 opacity-70"></div>
      <div class="container mx-auto py-12 text-white relative z-10 flex justify-center items-center flex-col text-center">
        <h1 class="text-4xl font-extrabold mb-4 drop-shadow-lg font-sans text-black"><strong>ED Cell</strong></h1>
        <p class="text-lg mb-6 max-w-2xl leading-relaxed drop-shadow-lg font-serif text-black"><strong>
          Entrepreneurship is the person who plays a certain price for a product to resell it at an uncertain price, hereby making decisions about obtaining and using the resources while consequently admitting the risk of enterprise.</strong>
        </p>
      </div>
    </section>

    <!-- Vertical Tabs Section -->
    <section class="mx-auto py-8 px-4 space-y-6">
      <div class="relative flex">
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
          <div class="space-y-4">
            <button @click="activeTab = 'objectives'" class="w-full py-2 px-4 bg-white text-gray-800 rounded-md font-semibold hover:bg-gray-200">Objectives</button>
            <button @click="activeTab = 'key_activities'" class="w-full py-2 px-4 bg-white text-gray-800 rounded-md font-semibold hover:bg-gray-200">Key Activities</button>
            <button @click="activeTab = 'mou'" class="w-full py-2 px-4 bg-white text-gray-800 rounded-md font-semibold hover:bg-gray-200">MOU</button>
            <button @click="activeTab = 'links'" class="w-full py-2 px-4 bg-white text-gray-800 rounded-md font-semibold hover:bg-gray-200">Links</button>
            <button @click="activeTab = 'office_bearers'" class="w-full py-2 px-4 bg-white text-gray-800 rounded-md font-semibold hover:bg-gray-200">Office Bearers</button>
          </div>
        </div>

<<<<<<< HEAD
        <!-- Tab Content -->
        <div class="flex-grow ml-8 p-4 relative -z-10">
          <div v-if="activeTab === 'objectives'" class="bg-gradient-to-r from-indigo-500 to-indigo-300 rounded-lg shadow-lg p-6">
            <h3 class="text-3xl text-white font-bold mb-4">Objectives</h3>
            <ul class="text-lg font-medium text-gray-900 list-disc pl-6">
              <li v-for="objective in data.description.objectives" :key="objective">{{ objective }}</li>
            </ul>
          </div>
          <div v-if="activeTab === 'key_activities'" class="bg-gradient-to-r from-blue-500 to-blue-300 rounded-lg shadow-lg p-6">
            <h3 class="text-3xl text-white font-bold mb-4">Key Activities</h3>
            <div v-for="activity in data.description.key_activities" :key="activity.name" class="p-4 rounded-lg bg-gray-100">
              <h4 class="text-xl font-semibold">{{ activity.name }}</h4>
              <p><strong>Location:</strong> {{ activity.location }}</p>
              <p><strong>Details:</strong> {{ activity.details }}</p>
            </div>
          </div>
          <div v-if="activeTab === 'mou'" class="bg-gradient-to-r from-teal-500 to-teal-300 rounded-lg shadow-lg p-6">
            <h3 class="text-3xl text-white font-bold mb-4">MOU</h3>
            <ul class="text-lg font-medium text-gray-900 list-disc pl-6">
              <li v-for="mou in data.MOU" :key="mou">{{ mou }}</li>
            </ul>
          </div>
          <div v-if="activeTab === 'links'" class="bg-gradient-to-r from-green-500 to-green-300 rounded-lg shadow-lg p-6">
            <h3 class="text-3xl text-white font-bold mb-4">Links</h3>
            <ul class="text-lg font-medium text-gray-900 list-disc pl-6">
              <li v-for="link in data.links" :key="link">
                <a :href="'http://' + link" target="_blank" rel="noopener noreferrer">{{ link }}</a>
              </li>
            </ul>
          </div>
          <div v-if="activeTab === 'office_bearers'" class="bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-lg shadow-lg p-6">
            <h3 class="text-3xl text-white font-bold mb-4">Office Bearers</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div v-for="member in data.office_bearers" :key="member.email" class="p-6 bg-gray-100 rounded-lg shadow-md relative overflow-hidden">
                <div class="absolute inset-0 bg-blue-50 transform rotate-3"></div>
                <div class="relative z-10 p-4">
                  <p class="text-xl font-bold text-center">{{ member.name }}</p>
                  <p class="text-center"><strong>Position:</strong> {{ member.position }}</p>
                  <p class="text-center"><strong>Email:</strong> <a :href="'mailto:' + member.email">{{ member.email }}</a></p>
                  <p class="text-center"><strong>Organization:</strong> {{ member.organization }}</p>
                </div>
              </div>
            </div>
=======
      <!-- MOU Section -->
      <div class="bg-white rounded-lg shadow-md">
        <h2 class="text-3xl text-center text-white font-bold p-4 bg-blue-800 rounded-t-lg">MOU</h2>
        <div class="text-xl font-medium p-4 space-y-4">
          <ul class="list-disc pl-4">
            <li v-for="mou in data.MOU" :key="mou">{{ mou }}</li>
          </ul>
        </div>
      </div>

      <!-- Links Section -->
      <div class="bg-white rounded-lg shadow-md">
        <h2 class="text-3xl text-center text-white font-bold p-4 bg-blue-800 rounded-t-lg">Links</h2>
        <div class="text-xl font-medium p-4 space-y-4">
          <ul class="list-disc pl-4 ">
            <li v-for="link in data.links" :key="link">
              <a :href="'http://' + link" target="_blank" rel="noopener noreferrer" class="hover:underline">{{ link }}</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Office Bearers Section -->
      <div class="bg-white rounded-lg shadow-md">
        <h2 class="text-3xl text-center text-white font-bold p-4 bg-blue-800 rounded-t-lg">Office Bearers</h2>
        <div class="text-xl font-medium p-4 space-y-4 flex flex-cols-4 justify-around">
          <div v-for="member in data.office_bearers" :key="member.email" class="p-6 rounded-lg">
            <p class="text-xl font-bold">{{ member.name }}</p>
            <p><strong>Position:</strong> {{ member.position }}</p>
            <p><strong>Email:</strong> <a :href="'mailto:' + member.email">{{ member.email }}</a></p>
            <p><strong>Organization:</strong> {{ member.organization }}</p>
>>>>>>> f48b146bbdc2720d6a607c8f76264af52d2b06c4
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import data from '../assets/ED-cell.json';

export default {
  data() {
    return {
      data: data,
      activeTab: 'objectives' // Default active tab
    };
  }
};
</script>

<style>
/* Hero section */
.hero-section {
  min-height: 50vh;
  position: relative;
  background-blend-mode: multiply;
}

/* Gradient Background */
.bg-gradient-to-r {
  background: linear-gradient(90deg, var(--tw-gradient-stops));
}

/* Office Bearers Grid */
.grid-cols-3 > div {
  position: relative;
}

.grid-cols-3 > div .bg-blue-50 {
  background-color: #dbeafe;
  transform: rotate(-3deg);
}

/* Font Styles */
.font-sans {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.font-serif {
  font-family: 'Georgia', 'Times New Roman', Times, serif;
}
</style>
