<template>
  <main class="flex-grow">
    <!-- Hero section -->
    <section class="bg-cover bg-center relative -z-10" :style="'background-image: url(http://192.168.72.231:5173/src/assets/dgate-hero.jpg)'">
      <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div class="container mx-auto py-16 text-white p-9 relative z-10">
        <h1 class="text-4xl font-bold mb-4">{{ data.name }}</h1>
        <button class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-4">Learn More</button>
      </div>
    </section>

    <!-- Content section -->
    <section class="container mx-auto py-8 p-9 space-y-8">
      <!-- Overview Section -->
      <div class="bg-white rounded-lg shadow-lg ">
        <h2 class="text-3xl font-bold mb-6 text-center bg-[#40E0D0] p-4 rounded-md">முகப்பு</h2>
        <p class="text-xl leading-relaxed p-4">{{ data.முகப்பு }}</p>
      </div>

      <!-- Events Section -->
      <div class="bg-white rounded-lg shadow-lg">
        <h2 class="text-3xl font-bold mb-6 text-center bg-[#40E0D0] p-4 rounded-md">நிகழ்வுகள்</h2>
        <ul class="list-disc pl-10 pb-4 text-xl space-y-4 ">
          <li v-for="(event, index) in data.நிகழ்வுகள்" :key="index">
            {{ event }}
          </li>
        </ul>
      </div>

      <!-- Staff Section -->
      <div class="bg-white rounded-lg shadow-lg">
        <h2 class="text-3xl font-bold mb-6 text-center bg-[#40E0D0] p-4 rounded-md">பொறுப்பாளர்</h2>
        <div class="space-y-6 p-4">
          <div class="bg-gray-100 rounded-lg p-6 shadow-sm">
            <h3 class="text-2xl font-semibold">அவைத்தலைவர்</h3>
            <p class="text-xl text-gray-700 mt-2">பெயர்: {{ data.பொறுப்பாளர்.அவைத்தலைவர்.பெயர் }}</p>
            <p class="text-xl text-gray-700">இணைப்பேர்: {{ data.பொறுப்பாளர்.அவைத்தலைவர்.இணைப்பேர் }}</p>
            <p class="text-xl text-gray-700">மின்னஞ்சல்: {{ data.பொறுப்பாளர்.அவைத்தலைவர்['அவர்களின் மின்னஞ்சல்'] }}</p>
          </div>
          <div class="bg-gray-100 rounded-lg p-6 shadow-sm">
            <h3 class="text-2xl font-semibold">ஒருங்கிணைப்பாளர்</h3>
            <p class="text-xl text-gray-700 mt-2">பெயர்: {{ data.பொறுப்பாளர்.ஒருங்கிணைப்பாளர்.பெயர் }}</p>
            <p class="text-xl text-gray-700">மின்னஞ்சல்: {{ data.பொறுப்பாளர்.ஒருங்கிணைப்பாளர்['அவர்களின் மின்னஞ்சல்'] }}</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import data from '../assets/tamil mandram.json';

export default {
  data() {
    return {
      data: data
    };
  }
};
</script>

<style scoped>
body {
  font-family: 'Arial', sans-serif;
}
</style>
