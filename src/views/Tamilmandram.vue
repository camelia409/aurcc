<template>
  <main class="flex-grow">
    <!-- Hero section -->
    <section 
      class="bg-cover md:bg-center relative -z-10 w-full h-48 sm:h-64 md:h-94  animate-fadeIn" 
      :style="'background-image: url(http://localhost:5173/src/assets/' + data.image1 + ');'"
    >
      <div class="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
      <div class="flex items-start justify-center md:py-19 text-white p-9 relative z-10">
        <h1 class="md:text-4xl text-xl font-bold mb-20 animate-slideIn">{{ data.name }}</h1>
      </div>
    </section>

    <!-- Sidebar (Tabs) -->
    <nav class="w-full md:w-auto text-white shadow-lg p-3 md:flex md:justify-around bg-[#23120b] animate-fadeIn">
      <ul class="md:flex md:space-x-4 md:space-y-0 space-y-4">
        <li>
          <a href="#overview" class="block px-6 py-2 text-lg md:text-xl sm:text-center bg-[#3c2f25] font-semibold text-white hover:text-[#fdb827]  rounded-lg transition duration-300">
            முகப்பு
          </a>
        </li>
        <li>
          <a href="#events" class="block px-6 py-2 text-lg md:text-xl sm:text-center font-semibold bg-[#3c2f25] text-white hover:text-[#fdb827] rounded-lg transition duration-300">
            நிகழ்வுகள்
          </a>
        </li>
        <li>
          <a href="#staff" class="block px-6 py-2 text-lg md:text-xl sm:text-center font-semibold bg-[#3c2f25] text-white hover:text-[#fdb827] rounded-lg transition duration-300">
            பொறுப்பாளர்
          </a>
        </li>
      </ul>
    </nav>

    <!-- Content section with tabs -->
     <section class="relative flex flex-col md:flex-col space-y-8 py-20 px-4 lg:px-20 max-w-screen-xl mx-auto">
      <!-- Background Overlay -->
      <div
        class="absolute inset-0 bg-center opacity-80 z-0 animate-fadeIn"
        :style="'background-image:url(http://localhost:5173/src/assets/' + data.image + ');'"
      ></div>

      <!-- Content -->
      <div class="relative z-10 space-y-8">
        <!-- Overview Section -->
        <div id="overview" class="bg-white rounded-lg shadow-lg animate-popIn">
          <h2 class="text-2xl md:text-3xl text-[#fdb827] font-bold text-center bg-[#23120b] p-4 rounded-t-lg animate-fadeInUp">
            முகப்பு
          </h2>
          <p class="md:text-lg p-6 leading-relaxed animate-fadeIn delay-1s">
            {{ data.முகப்பு }}
          </p>
        </div>

        <!-- Events Section -->
        <div id="events" class="bg-white rounded-lg shadow-lg animate-popIn">
          <h2 class="text-2xl md:text-3xl text-[#fdb827] font-bold text-center bg-[#23120b] p-4 rounded-t-lg animate-fadeInUp">
            நிகழ்வுகள்
          </h2>
          <ul class="list-disc pl-10 py-4 md:text-lg space-y-4">
            <li v-for="(event, index) in data.நிகழ்வுகள்" :key="index" class="animate-fadeInUp delay-1s">
              {{ event }}
            </li>
          </ul>
        </div>

        <!-- Staff Section -->
        <div id="staff" class="bg-white rounded-lg shadow-lg animate-popIn">
          <h2 class="text-2xl md:text-3xl text-[#fdb827] font-bold text-center bg-[#23120b] p-4 rounded-t-lg animate-fadeInUp">
            பொறுப்பாளர்
          </h2>
          <div class="p-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div class="bg-gray-200 rounded-lg p-6 shadow-sm animate-fadeIn delay-2s">
              <h3 class="md:text-xl font-semibold">அவைத்தலைவர்</h3>
              <p class="md:text-lg text-gray-700">பெயர்: {{ data.பொறுப்பாளர்.அவைத்தலைவர்.பெயர் }}</p>
              <p class="md:text-lg text-gray-700">மின்னஞ்சல்: {{ data.பொறுப்பாளர்.அவைத்தலைவர்['அவர்களின் மின்னஞ்சல்'] }}</p>
            </div>
            <div class="bg-gray-200 rounded-lg p-6 shadow-sm animate-fadeIn delay-2s">
              <h3 class="md:text-xl font-semibold">ஒருங்கிணைப்பாளர்</h3>
              <p class="md:text-lg text-gray-700">பெயர்: {{ data.பொறுப்பாளர்.ஒருங்கிணைப்பாளர்.பெயர் }}</p>
              <p class="md:text-lg text-gray-700">மின்னஞ்சல்: {{ data.பொறுப்பாளர்.ஒருங்கிணைப்பாளர்['அவர்களின் மின்னஞ்சல்'] }}</p>
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

/* Add keyframes for animations */
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes popIn {
  0% { opacity: 0; transform: scale(0.8); }
  100% { opacity: 1; transform: scale(1); }
}

@keyframes slideIn {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(0); }
}

.animate-fadeIn {
  animation: fadeIn 1.5s ease-out forwards;
}

.animate-popIn {
  animation: popIn 1.2s ease-out forwards;
}

.animate-fadeInUp {
  animation: fadeInUp 1.5s ease-out forwards;
}

.animate-slideIn {
  animation: slideIn 1s ease-out forwards;
}


</style>