<template>
  <main class="flex-grow font-sans bg-blue-50">
    <!-- Hero section -->
    <section class="relative w-full min-h-[40vh] md:min-h-[60vh] overflow-hidden flex items-center justify-center animate-fadeIn">
      <img src="/fac.webp" alt="Fine Arts Club" class="absolute inset-0 w-full h-full object-cover object-center" />
      <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>
      <div class="absolute inset-0 flex flex-col items-center justify-center z-10 px-2">
        <div class="backdrop-blur-md bg-white/30 rounded-2xl shadow-lg px-4 py-4 sm:px-8 sm:py-6 md:px-12 md:py-10 flex flex-col items-center w-full max-w-2xl border border-white/30">
          <h1 class="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg tracking-wide text-center mb-2 leading-tight animate-slideIn">Fine Arts Club</h1>
          <p class="text-base sm:text-lg md:text-2xl text-white drop-shadow text-center font-medium">Celebrating Creativity and Talent</p>
        </div>
      </div>
    </section>
    <!-- Main content -->
    <section class="mx-auto py-14 px-2 md:px-9">
      <div class="max-w-7xl mx-auto flex flex-col gap-12">
        <!-- Description Section -->
        <div class="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg animate-fadeIn border border-gray-100">
          <div class="bg-gradient-to-r from-blue-900 to-blue-500 py-5 flex items-center justify-center gap-3 rounded-t-2xl">
            <span class="text-2xl">🎨</span>
            <h2 class="text-2xl md:text-3xl font-bold text-white text-center">LAYAM AAM RHYTHM OF ARTS MUSIC & DANCE</h2>
          </div>
          <div class="p-8 md:p-10">
            <p class="text-lg md:text-xl font-medium text-gray-800">{{ description }}</p>
          </div>
        </div>
        <!-- Office Bearers Section -->
        <div class="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg animate-fadeIn border border-gray-100">
          <div class="bg-gradient-to-r from-blue-900 to-blue-500 py-5 flex items-center justify-center gap-3 rounded-t-2xl">
            <span class="text-2xl">👥</span>
            <h2 class="text-2xl md:text-3xl font-bold text-white text-center">Office Bearers</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 p-8 md:p-10">
            <div v-for="bearer in officeBearers" :key="bearer['SL.NO']" class="bg-white/80 rounded-xl shadow p-6 border border-gray-100 flex flex-col gap-2 animate-fadeInUp">
              <div class="font-bold text-lg text-indigo-700">{{ bearer.Name }}</div>
              <div class="text-gray-700 font-medium">{{ bearer.Designation }}</div>
              <div class="text-gray-600 text-sm">Department: <span class="font-normal">{{ bearer.Department }}</span></div>
            </div>
          </div>
        </div>
        <!-- Coordinator Section -->
        <div class="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg animate-fadeIn border border-gray-100">
          <div class="bg-gradient-to-r from-blue-900 to-blue-500 py-5 flex items-center justify-center gap-3 rounded-t-2xl">
            <span class="text-2xl">🎤</span>
            <h2 class="text-2xl md:text-3xl font-bold text-white text-center">Coordinator</h2>
          </div>
          <div class="p-8 md:p-10">
            <div class="bg-white/80 rounded-xl shadow p-6 border border-gray-100 flex flex-col gap-2 animate-fadeInUp">
              <div class="font-bold text-lg text-indigo-700">{{ coordinator.Name }}</div>
              <div class="text-gray-700 font-medium">{{ coordinator.Designation }}</div>
              <div class="text-gray-600 text-sm">Department: <span class="font-normal">{{ coordinator.Department }}</span></div>
              <div class="text-gray-600 text-sm">University: <span class="font-normal">{{ coordinator.University }}</span></div>
              <div class="text-gray-600 text-sm">Address: <span class="font-normal">{{ coordinator.Address }}</span></div>
              <div class="text-gray-600 text-sm">Mobile: <span class="font-normal">{{ coordinator.Mobile }}</span></div>
              <div class="text-gray-600 text-sm">Email: <a :href="`mailto:${coordinator.Email}`" class="text-blue-500 underline">{{ coordinator.Email }}</a></div>
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
      officeBearers: data.office_bearers,
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
