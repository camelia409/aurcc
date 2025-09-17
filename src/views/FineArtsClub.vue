<template>
  <main class="flex-grow font-sans bg-blue-50">
    <!-- Hero section -->
    <section class="relative w-full min-h-[35vh] sm:min-h-[40vh] md:min-h-[50vh] lg:min-h-[60vh] overflow-hidden flex items-center justify-center animate-fadeIn">
      <img src="/fac.webp" alt="Fine Arts Club" class="absolute inset-0 w-full h-full object-cover object-center" />
      <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>
      <div class="absolute inset-0 flex flex-col items-center justify-center z-10 px-2">
        <div class="backdrop-blur-md bg-white/30 rounded-2xl shadow-lg px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-3 sm:py-4 md:py-6 lg:py-8 xl:py-10 flex flex-col items-center w-full max-w-2xl border border-white/30">
          <h1 class="mobile-text-xl sm:mobile-text-2xl lg:mobile-text-3xl xl:mobile-text-4xl font-extrabold text-white drop-shadow-lg tracking-wide text-center mb-2 leading-tight animate-slideIn">Fine Arts Club</h1>
          <p class="mobile-text-sm sm:mobile-text-base lg:mobile-text-lg xl:mobile-text-xl text-white drop-shadow text-center font-medium">Celebrating Creativity and Talent</p>
        </div>
      </div>
    </section>
    <!-- Main content -->
    <section class="mobile-container py-8 sm:py-12 lg:py-14">
      <div class="max-w-7xl mx-auto flex flex-col gap-8 sm:gap-10 lg:gap-12">
        <!-- Description Section -->
        <div class="mobile-card bg-white/70 backdrop-blur-md rounded-2xl shadow-lg animate-fadeIn border border-gray-100">
          <div class="bg-gradient-to-r from-blue-900 to-blue-500 py-4 sm:py-5 flex items-center justify-center gap-2 sm:gap-3 rounded-t-2xl">
            <span class="mobile-text-lg lg:mobile-text-xl">🎨</span>
            <h2 class="mobile-text-lg sm:mobile-text-xl lg:mobile-text-2xl xl:mobile-text-3xl font-bold text-white text-center">LAYAM AAM RHYTHM OF ARTS MUSIC & DANCE</h2>
          </div>
          <div class="p-4 sm:p-6 md:p-8 lg:p-10">
            <p class="mobile-text-base lg:mobile-text-lg xl:mobile-text-xl font-medium text-gray-800">{{ description }}</p>
          </div>
        </div>
        <!-- Coordinator Section -->
        <div class="mobile-card bg-white/70 backdrop-blur-md rounded-2xl shadow-lg animate-fadeIn border border-gray-100">
          <div class="bg-gradient-to-r from-blue-900 to-blue-500 py-4 sm:py-5 flex items-center justify-center gap-2 sm:gap-3 rounded-t-2xl">
            <span class="mobile-text-lg lg:mobile-text-xl">🎤</span>
            <h2 class="mobile-text-lg sm:mobile-text-xl lg:mobile-text-2xl xl:mobile-text-3xl font-bold text-white text-center">Coordinator</h2>
          </div>
          <div class="p-4 sm:p-6 md:p-8 lg:p-10 flex justify-center">
            <div class="bg-white/80 rounded-xl shadow p-4 sm:p-6 border border-gray-100 flex flex-col gap-2 animate-fadeInUp max-w-md w-full text-center">
              <div class="font-bold mobile-text-base lg:mobile-text-lg text-indigo-700">{{ coordinator.Name }}</div>
              <div class="mobile-text-sm lg:mobile-text-base text-gray-700 font-medium">{{ coordinator.Designation }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import data from '../assets/fine arts.json';
export default {
  data() {
    return {
      description: data.description,
      coordinator: data.Coordinator
    };
  }
};
</script>

<style scoped>

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
