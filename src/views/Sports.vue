<template>
  <main class="flex-grow font-sans bg-gray-50">
    <!-- Hero section -->
    <section class="relative w-full h-48 sm:h-56 md:h-72 lg:h-96 overflow-hidden flex flex-col justify-end">
      <img src="/sports.webp" alt="Sports facilities" class="absolute inset-0 w-full h-full object-cover object-center" style="z-index:0;" />
      <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>
      <div class="absolute inset-0 flex flex-col items-center justify-center z-10">
        <div class="backdrop-blur-md bg-white/30 rounded-2xl shadow-lg px-4 sm:px-6 md:px-8 lg:px-16 py-4 sm:py-6 md:py-8 lg:py-10 flex flex-col items-center max-w-2xl mx-auto border border-white/30 mt-4 sm:mt-6 md:mt-8">
          <h1 class="mobile-text-xl lg:mobile-text-3xl xl:mobile-text-4xl font-extrabold text-white drop-shadow-lg tracking-wide text-center mb-2">{{ data.name }}</h1>
          <p class="mobile-text-sm lg:mobile-text-base xl:mobile-text-lg text-white drop-shadow text-center font-medium">Promoting sportsmanship and fitness</p>
        </div>
      </div>
    </section>
    <!-- Content sections -->
    <section class="mobile-container py-8 sm:py-12 lg:py-14">
      <div class="max-w-7xl mx-auto flex flex-col gap-8 sm:gap-10 lg:gap-12">
        <!-- Overview Card -->
        <div class="mobile-card bg-white/70 backdrop-blur-md rounded-2xl shadow-lg animate-fadeIn border border-gray-100">
          <div class="bg-gradient-to-r from-blue-900 to-blue-500 py-4 sm:py-5 flex items-center justify-center gap-2 sm:gap-3 rounded-t-2xl">
            <span class="mobile-text-lg lg:mobile-text-xl">📝</span>
            <h2 class="mobile-text-lg lg:mobile-text-xl xl:mobile-text-2xl font-bold text-white text-center">Overview</h2>
          </div>
          <div class="p-4 sm:p-6 md:p-8 lg:p-10">
            <p class="mobile-text-base lg:mobile-text-lg xl:mobile-text-xl font-medium text-gray-800">{{ data.description }}</p>
          </div>
        </div>
        <!-- Facilities Card -->
        <div class="mobile-card bg-white/70 backdrop-blur-md rounded-2xl shadow-lg animate-fadeIn border border-gray-100">
          <div class="bg-gradient-to-r from-blue-900 to-blue-500 py-4 sm:py-5 flex items-center justify-center gap-2 sm:gap-3 rounded-t-2xl">
            <span class="mobile-text-lg lg:mobile-text-xl">🏟️</span>
            <h2 class="mobile-text-lg lg:mobile-text-xl xl:mobile-text-2xl font-bold text-white text-center">Facilities</h2>
          </div>
          <div class="p-4 sm:p-6 md:p-8 lg:p-10">
            <div class="mobile-grid gap-6 sm:gap-8">
              <div class="mobile-card bg-white/80 rounded-xl p-4 sm:p-6 shadow flex flex-col items-start border border-gray-100">
                <h3 class="mobile-text-base lg:mobile-text-lg xl:mobile-text-xl font-bold mb-3 flex items-center gap-2"><span>🎯</span>Indoor Games</h3>
                <ul class="list-disc pl-4 sm:pl-6">
                  <li v-for="game in data.facilities.IndoorGames" :key="game" class="mb-2 mobile-text-sm lg:mobile-text-base font-medium text-gray-700 animate-fadeInUp">
                    {{ game }}
                  </li>
                </ul>
              </div>
              <div class="mobile-card bg-white/80 rounded-xl p-4 sm:p-6 shadow flex flex-col items-start border border-gray-100">
                <h3 class="mobile-text-base lg:mobile-text-lg xl:mobile-text-xl font-bold mb-3 flex items-center gap-2"><span>⚽</span>Outdoor Games</h3>
                <ul class="list-disc pl-4 sm:pl-6">
                  <li v-for="game in data.facilities.OutdoorGames" :key="game" class="mb-2 mobile-text-sm lg:mobile-text-base font-medium text-gray-700 animate-fadeInUp">
                    {{ game }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- Contact Us Card -->
        <div class="mobile-card bg-white/70 backdrop-blur-md rounded-2xl shadow-lg animate-fadeIn border border-gray-100">
          <div class="bg-gradient-to-r from-blue-900 to-blue-500 py-4 sm:py-5 flex items-center justify-center gap-2 sm:gap-3 rounded-t-2xl">
            <span class="mobile-text-lg lg:mobile-text-xl">📞</span>
            <h2 class="mobile-text-lg lg:mobile-text-xl xl:mobile-text-2xl font-bold text-white text-center">Contact Us</h2>
          </div>
          <div class="p-4 sm:p-6 md:p-8 lg:p-10">
            <p class="mobile-text-base lg:mobile-text-lg xl:mobile-text-xl font-medium text-gray-800 whitespace-pre-line">{{ data.contact_us.Address }}</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import data from '../assets/sports.json';
export default {
  data() {
    return {
      data: data
    };
  }
};
</script>

<style scoped>
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-fadeIn {
  animation: fadeIn 1.2s ease-out forwards;
}
.animate-fadeInUp {
  animation: fadeInUp 1.2s ease-out forwards;
}
</style>
