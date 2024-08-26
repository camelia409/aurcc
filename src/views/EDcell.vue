<template>
  <main class="flex-grow">
    <!-- Hero section -->
    <section class="bg-cover bg-center relative -z-10" :style="'background-image: url(http://192.168.72.231:5173/src/assets/dgate-hero.jpg)'">
      <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-blue-900 via-transparent to-blue-900 opacity-70"></div>
      <div class="container mx-auto py-10 text-center relative z-10 px-4">
        <h1 class="text-4xl font-extrabold text-black  drop-shadow-lg font-serif">ED Cell</h1>
      </div>
    </section>
        

  <!-- Vertical Tabs Section -->
  <section class="mx-auto py-10 px-10 bg-gray-100 rounded-lg">
  <div class="flex flex-col md:flex-row">
    <!-- Vertical Tabs -->
    <div class="flex-shrink-0 w-full h-max lg:w-64 bg-gradient-to-r from-[#21209c] to-blue-600 rounded-lg shadow-lg p-4 overflow-hidden mb-4 lg:mb-0">
      <div class="relative bg-gradient-to-r from-[#21209c] to-blue-600 p-4 rounded-lg">
        <h2 class="text-2xl font-serif text-white font-bold text-center">Sections</h2>
      </div>
      <div class="space-y-2 font-serif">
        <button @click="activeTab = 'Description'" :class="{'bg-yellow-400 text-[#23120b]': activeTab === 'Description', 'bg-white text-gray-800': activeTab !== 'Description'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b]">Description</button>
        <button @click="activeTab = 'objectives'" :class="{'bg-yellow-400 text-[#23120b]': activeTab === 'objectives', 'bg-white text-gray-800': activeTab !== 'objectives'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b]">Objectives</button>
        <button @click="activeTab = 'key_activities'" :class="{'bg-yellow-400 text-[#23120b]': activeTab === 'key_activities', 'bg-white text-gray-800': activeTab !== 'key_activities'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b]">Key Activities</button>
        <button @click="activeTab = 'mou'" :class="{'bg-yellow-400 text-[#23120b]': activeTab === 'mou', 'bg-white text-gray-800': activeTab !== 'mou'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b]">MOU</button>
        <button @click="activeTab = 'links'" :class="{'bg-yellow-400 text-[#23120b]': activeTab === 'links', 'bg-white text-gray-800': activeTab !== 'links'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b]">Links</button>
        <button @click="activeTab = 'office_bearers'" :class="{'bg-yellow-400 text-[#23120b]': activeTab === 'office_bearers', 'bg-white text-gray-800': activeTab !== 'office_bearers'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b]">Office Bearers</button>
      </div>
    </div>

    <!-- Tab Content -->
    <div class="w-full px-10  font-serif">
      <div v-if="activeTab === 'Description'" >
        <h3 class="text-2xl md:text-4xl font-bold text-black mb-4">Description</h3>
        <p class="text-lg mb-6 max-w-2xl font-serif text-black">
          Entrepreneurship is the person who plays a certain price for a product to resell it at an uncertain price, hereby making decisions about obtaining and using the resources while consequently admitting the risk of enterprise.
      </p>
      </div>

      <div v-else-if="activeTab === 'objectives'" >
        <h3 class="text-2xl md:text-4xl font-bold text-black mb-4">Objectives</h3>
        <ul class="text-lg font-medium text-gray-900 list-disc pl-6">
          <li v-for="objective in data.description.objectives" :key="objective">{{ objective }}</li>
        </ul>
      </div>

      <div v-if="activeTab === 'key_activities'" >
        <h3 class="text-2xl md:text-4xl font-bold text-black mb-4">Key Activities</h3>
        <div v-for="activity in data.description.key_activities" :key="activity.name" class="p-4 rounded-lg bg-gray-100 mb-4">
          <h4 class="text-xl font-semibold">{{ activity.name }}</h4>
          <p><strong>Location:</strong> {{ activity.location }}</p>
          <p><strong>Details:</strong> {{ activity.details }}</p>
        </div>
      </div>

      <div v-if="activeTab === 'mou'" >
        <h3 class="text-2xl md:text-4xl font-bold text-black mb-4">MOU</h3>
        <ul class="text-lg font-medium text-gray-900 list-disc pl-6">
          <li v-for="mou in data.MOU" :key="mou">{{ mou }}</li>
        </ul>
      </div>

      <div v-if="activeTab === 'links'" >
        <h3 class="text-2xl md:text-4xl font-bold text-black mb-4">Links</h3>
        <ul class="text-lg  font-medium text-gray-900 list-disc pl-6">
          <li v-for="link in data.links" :key="link">
            <a :href="'http://' + link" target="_blank" rel="noopener noreferrer" class="hover:underline">{{ link }}</a>
          </li>
        </ul>
      </div>

      <div v-if="activeTab === 'office_bearers'">
        <h3 class="text-2xl md:text-4xl font-bold text-black mb-4">Office Bearers</h3>
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
