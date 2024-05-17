<template>
  <main class="flex-grow flex flex-col">
    <!-- Hero section -->
    <section class="bg-cover bg-center relative -z-10" :style="'background-image: url(http://192.168.72.231:5173/src/assets/dgate-hero.jpg)'">
      <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div class="container mx-auto py-16 text-white p-9 relative z-10">
        <h1 class="text-4xl font-bold mb-4">{{ data.name }}</h1>
        <button class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-4">Learn More</button>
      </div>
    </section>

    <!-- Content sections -->
    <section class="container mx-auto py-8 p-9 flex-grow">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 class="text-2xl font-bold mb-4 flex items-center">
            <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
            </svg>
            Sections
          </h2>
          <div class="flex flex-col">
            <button v-for="(section, index) in sections" :key="index" @click="currentSection = section" :class="{'bg-blue-500 text-white': currentSection === section, 'bg-white hover:bg-gray-100 text-gray-800': currentSection !== section}" class="font-semibold py-2 px-4 border border-gray-400 rounded shadow flex items-center mb-2">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
              {{ section }}
            </button>
          </div>
        </div>
        <section v-if="currentSection !== null" class="container mx-auto py-8 p-9 md:col-span-3">
          <div v-if="currentSection === 'முகப்பு'">
            <h2 class="text-2xl font-bold mb-4">முகப்பு</h2>
            <p class="text-base leading-relaxed whitespace-pre-line">{{ data.முகப்பு }}</p>
          </div>
          <div v-else-if="currentSection === 'நிகழ்வுகள்'">
            <h2 class="text-2xl font-bold mb-4">நிகழ்வுகள்</h2>
            <ul class="list-disc pl-6 text-base space-y-2">
              <li v-for="(event, index) in data.நிகழ்வுகள்" :key="index">
                {{ event }}
              </li>
            </ul>
          </div>
          <div v-else-if="currentSection === 'பொறுப்பாளர்'">
            <h2 class="text-2xl font-bold mb-4">பொறுப்பாளர்</h2>
            <div class="space-y-4">
              <div class="bg-gray-100 rounded-lg p-4 shadow-sm">
                <h3 class="text-lg font-semibold">அவைத்தலைவர்</h3>
                <p class="text-gray-700">பெயர்: {{ data.பொறுப்பாளர்.அவைத்தலைவர்.பெயர் }}</p>
                <p class="text-gray-700">இணைப்பேர்: {{ data.பொறுப்பாளர்.அவைத்தலைவர்.இணைப்பேர் }}</p>
                <p class="text-gray-700">மின்னஞ்சல்: {{ data.பொறுப்பாளர்.அவைத்தலைவர்['அவர்களின் மின்னஞ்சல்'] }}</p>
              </div>
              <div class="bg-gray-100 rounded-lg p-4 shadow-sm">
                <h3 class="text-lg font-semibold">ஒருங்கிணைப்பாளர்</h3>
                <p class="text-gray-700">பெயர்: {{ data.பொறுப்பாளர்.ஒருங்கிணைப்பாளர்.பெயர் }}</p>
                <p class="text-gray-700">மின்னஞ்சல்: {{ data.பொறுப்பாளர்.ஒருங்கிணைப்பாளர்['அவர்களின் மின்னஞ்சல்'] }}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  </main>
</template>

<script>
import data from '../assets/tamil mandram.json';

export default {
  data() {
    return {
      data: data,
      sections: [
        'முகப்பு',
        'நிகழ்வுகள்',
        'பொறுப்பாளர்'
      ],
      currentSection: 'முகப்பு'
    };
  }
};
</script>

<style scoped>
body {
  font-family: 'Arial', sans-serif;
}
</style>
