<template>
  <main class="flex-grow">
    <!-- Hero section -->
    <section class="relative w-full min-h-[35vh] sm:min-h-[40vh] md:min-h-[50vh] lg:min-h-[60vh] overflow-hidden flex items-center justify-center animate-fadeIn">
      <img src="/temple5.webp" alt="Tamil Mandram" class="absolute inset-0 w-full h-full object-cover object-center" />
      <div class="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
      <div class="absolute inset-0 flex items-center justify-center z-10 px-2">
        <div class="backdrop-blur-md bg-white/30 rounded-2xl shadow-lg px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-3 sm:py-4 md:py-6 lg:py-8 xl:py-10 flex flex-col items-center w-full max-w-xl border border-white/30">
          <h1 class="mobile-text-lg sm:mobile-text-xl lg:mobile-text-3xl xl:mobile-text-4xl font-extrabold text-white drop-shadow-lg tracking-wide text-center mb-2 leading-tight animate-slideIn">{{ data.name }}</h1>
        </div>
      </div>
    </section>

    <!-- Sidebar (Tabs) -->
    <nav class="w-full md:w-auto text-white shadow-lg p-2 sm:p-3 md:flex md:justify-around bg-[#23120b] animate-fadeIn">
      <ul class="md:flex md:space-x-4 md:space-y-0 space-y-3 sm:space-y-4">
        <li>
          <a href="#overview" class="block px-4 sm:px-6 py-2 mobile-text-sm lg:mobile-text-base md:mobile-text-lg xl:mobile-text-xl sm:text-center bg-[#3c2f25] font-semibold text-white hover:text-[#fdb827]  rounded-lg transition duration-300">
            முகப்பு
          </a>
        </li>
        <li>
          <a href="#events" class="block px-4 sm:px-6 py-2 mobile-text-sm lg:mobile-text-base md:mobile-text-lg xl:mobile-text-xl sm:text-center font-semibold bg-[#3c2f25] text-white hover:text-[#fdb827] rounded-lg transition duration-300">
            நிகழ்வுகள்
          </a>
        </li>
        <li>
          <a href="#staff" class="block px-4 sm:px-6 py-2 mobile-text-sm lg:mobile-text-base md:mobile-text-lg xl:mobile-text-xl sm:text-center font-semibold bg-[#3c2f25] text-white hover:text-[#fdb827] rounded-lg transition duration-300">
            பொறுப்பாளர்
          </a>
        </li>
      </ul>
    </nav>

    <!-- Content section with tabs -->
     <section class="relative flex flex-col md:flex-col space-y-6 sm:space-y-8 py-12 sm:py-16 lg:py-20 px-3 sm:px-4 lg:px-20 mx-auto">
      <!-- Background Overlay -->
      <div
        class="absolute inset-0 bg-center opacity-80 z-0 animate-fadeIn"
        :style="{ backgroundImage: `url(/kalvettu.webp)` }"
      ></div>

      <!-- Content -->
      <div class="relative z-10 space-y-6 sm:space-y-8">
        <!-- Overview Section -->
        <div id="overview" class="mobile-card bg-white rounded-lg shadow-lg animate-popIn">
          <h2 class="mobile-text-lg sm:mobile-text-xl lg:mobile-text-2xl xl:mobile-text-3xl text-[#fdb827] font-bold text-center bg-[#23120b] p-3 sm:p-4 rounded-t-lg animate-fadeInUp">
            முகப்பு
          </h2>
          <p class="mobile-text-sm lg:mobile-text-base xl:mobile-text-lg p-4 sm:p-6 leading-relaxed animate-fadeIn delay-1s">
            {{ data.முகப்பு }}
          </p>
        </div>

        <!-- Events Section -->
        <div id="events" class="mobile-card bg-white rounded-lg shadow-lg animate-popIn">
          <h2 class="mobile-text-lg sm:mobile-text-xl lg:mobile-text-2xl xl:mobile-text-3xl text-[#fdb827] font-bold text-center bg-[#23120b] p-3 sm:p-4 rounded-t-lg animate-fadeInUp">
            நிகழ்வுகள்
          </h2>
          <ul class="list-disc pl-6 sm:pl-10 py-3 sm:py-4 mobile-text-sm lg:mobile-text-base xl:mobile-text-lg space-y-3 sm:space-y-4">
            <li v-for="(event, index) in data.நிகழ்வுகள்" :key="index" class="animate-fadeInUp delay-1s">
              {{ event }}
            </li>
          </ul>
        </div>

        <!-- Staff Section -->
        <div id="staff" class="mobile-card bg-white rounded-lg shadow-lg animate-popIn">
          <h2 class="mobile-text-lg sm:mobile-text-xl lg:mobile-text-2xl xl:mobile-text-3xl text-[#fdb827] font-bold text-center bg-[#23120b] p-3 sm:p-4 rounded-t-lg animate-fadeInUp">
            பொறுப்பாளர்
          </h2>
          <div class="p-4 sm:p-6 mobile-grid gap-4">
            <div class="mobile-card bg-gray-200 rounded-lg p-4 sm:p-6 shadow-sm animate-fadeIn delay-2s">
              <h3 class="mobile-text-base lg:mobile-text-lg xl:mobile-text-xl font-semibold">அவைத்தலைவர்</h3>
              <p class="mobile-text-sm lg:mobile-text-base xl:mobile-text-lg text-gray-700">பெயர்: {{ data.பொறுப்பாளர்.அவைத்தலைவர்.பெயர் }}</p>
              <p class="mobile-text-sm lg:mobile-text-base xl:mobile-text-lg text-gray-700">மின்னஞ்சல்: {{ data.பொறுப்பாளர்.அவைத்தலைவர்['அவர்களின் மின்னஞ்சல்'] }}</p>
            </div>
            <div class="mobile-card bg-gray-200 rounded-lg p-4 sm:p-6 shadow-sm animate-fadeIn delay-2s">
              <h3 class="mobile-text-base lg:mobile-text-lg xl:mobile-text-xl font-semibold">ஒருங்கிணைப்பாளர்</h3>
              <p class="mobile-text-sm lg:mobile-text-base xl:mobile-text-lg text-gray-700">பெயர்: {{ data.பொறுப்பாளர்.ஒருங்கிணைப்பாளர்.பெயர் }}</p>
              <p class="mobile-text-sm lg:mobile-text-base xl:mobile-text-lg text-gray-700">மின்னஞ்சல்: {{ data.பொறுப்பாளர்.ஒருங்கிணைப்பாளர்['அவர்களின் மின்னஞ்சல்'] }}</p>
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
      data: data,
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