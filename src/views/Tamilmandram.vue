<template>
  <main class="flex-grow">
        <!-- Hero section -->
    <section class="bg-cover bg-center relative -z-10" :style="'background-image: url(http://localhost:5173/src/assets/' + data.image1 + ');'">
      <div class="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
      <div class="flex items-start justify-center  py-28  text-white p-9 relative z-10">
        <h1 class="text-5xl font-bold mb-20">{{ data.name }}</h1>
      </div>
    </section>

    <!-- Sidebar (Tabs) -->
    <nav class="w-full md:w-auto text-white shadow-lg p-5 md:flex md:justify-around bg-[#23120b]">
      <ul class="md:flex md:space-x-4 md:space-y-0 space-y-4">
        <li>
          <a href="#overview" class="block px-6 py-2 text-xl sm:text-center font-semibold text-white hover:text-[#fdb827] hover:bg-[#3c2f25] rounded-lg">
            முகப்பு
          </a>
        </li>
        <li>
          <a href="#events" class="block px-6 py-2 text-xl sm:text-center font-semibold text-white hover:text-[#fdb827] hover:bg-[#3c2f25] rounded-lg">
            நிகழ்வுகள்
          </a>
        </li>
        <li>
          <a href="#staff" class="block px-6 py-2 text-xl sm:text-center font-semibold text-white hover:text-[#fdb827] hover:bg-[#3c2f25] rounded-lg">
            பொறுப்பாளர்
          </a>
        </li>
      </ul>
    </nav>

    <!-- Content section with tabs -->
    <section class="relative flex flex-col md:flex-col space-y-8 py-20 px-20">
      <!-- Background Overlay -->
      <div
        class="absolute inset-0  bg-center opacity-80 z-0"
        :style="'background-image:url(http://localhost:5173/src/assets/' + data.image + ');'"
      ></div>

      <!-- Content -->
      <div class="relative z-10 space-y-8">
        <!-- Overview Section -->
        <div id="overview" class="bg-white rounded-lg shadow-lg">
          <h2 class="text-3xl text-[#fdb827] font-bold text-center bg-[#23120b] p-4 rounded-t-lg">முகப்பு</h2>
          <p class="text-xl p-6 leading-relaxed">{{ data.முகப்பு }}</p>
        </div>

        <!-- Events Section -->
        <div id="events" class="bg-white rounded-lg shadow-lg">
          <h2 class="text-3xl text-[#fdb827] font-bold text-center bg-[#23120b] p-4 rounded-t-lg">நிகழ்வுகள்</h2>
          <ul class="list-disc pl-10 py-4 text-xl space-y-4">
            <li v-for="(event, index) in data.நிகழ்வுகள்" :key="index">
              {{ event }}
            </li>
          </ul>
        </div>

        <!-- Staff Section -->
        <div id="staff" class="bg-white rounded-lg shadow-lg">
  <h2 class="text-3xl text-[#fdb827] font-bold text-center bg-[#23120b] p-4 rounded-t-lg">பொறுப்பாளர்</h2>
  <div class="p-6 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4">
    <div class="bg-gray-200 rounded-lg p-6 shadow-sm">
      <h3 class="text-2xl font-semibold">அவைத்தலைவர்</h3>
      <p class="text-xl text-gray-700">பெயர்: {{ data.பொறுப்பாளர்.அவைத்தலைவர்.பெயர் }}</p>
      <p class="text-xl text-gray-700">மின்னஞ்சல்: {{ data.பொறுப்பாளர்.அவைத்தலைவர்['அவர்களின் மின்னஞ்சல்'] }}</p>
    </div>
    <div class="bg-gray-200 rounded-lg p-6 shadow-sm">
      <h3 class="text-2xl font-semibold">ஒருங்கிணைப்பாளர்</h3>
      <p class="text-xl text-gray-700">பெயர்: {{ data.பொறுப்பாளர்.ஒருங்கிணைப்பாளர்.பெயர் }}</p>
      <p class="text-xl text-gray-700">மின்னஞ்சல்: {{ data.பொறுப்பாளர்.ஒருங்கிணைப்பாளர்['அவர்களின் மின்னஞ்சல்'] }}</p>
    </div>
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
