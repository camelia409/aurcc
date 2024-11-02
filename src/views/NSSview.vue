<template>
  <main class="flex-grow">
    <!-- Hero section -->
    <section
      class="bg-cover md:bg-center relative -z-10 w-full h-48 sm:h-64 md:h-94  animate-fadeIn"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
    >
      <div class="absolute top-0 left-0 w-full h-full"></div>
      <div class="flex items-start md:justify-center justify-end pr-1 py-20 text-blue relative z-10 font-serif">
        <h1 class="md:text-4xl text-xl font-bold animate-slideIn">{{ data.name }}</h1>
      </div> 
    </section>

    <!-- Content sections -->
    <section class="container mx-auto py-15 p-4 space-y-8 font-serif animate-fadeIn">
      <!-- About Section -->
      <div class="bg-white rounded-lg shadow-lg animate-popIn">
        <h2 class="text-2xl md:text-3xl text-center bg-[#000080] font-bold p-4 rounded-t-md text-white animate-fadeInUp">
          About
        </h2>
        <p class="p-5 text-lg md:text-xl font-medium animate-fadeIn delay-1s">{{ data.description }}</p>
      </div>

      <!-- Activities Section -->
      <div class="bg-white rounded-lg shadow-md animate-popIn">
        <h2 class="text-2xl md:text-3xl text-center bg-[#000080] font-bold p-4 rounded-t-md text-white animate-fadeInUp">
          Activities
        </h2>
        <ul class="list-disc pl-8 p-5 text-lg md:text-xl font-medium">
          <li v-for="activity in data.activities" :key="activity" class="mb-2 animate-fadeInUp delay-1s">
            {{ activity }}
          </li>
        </ul>
      </div>

      <!-- NSS Coordinators Section -->
      <div class="bg-white rounded-lg shadow-md animate-popIn">
        <h2 class="text-2xl md:text-3xl text-center bg-[#000080] font-bold p-4 rounded-t-md text-white animate-fadeInUp">
          NSS Coordinators
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-5">
          <div
            v-for="coordinator in data.nss_coordinator['Office Bearers']"
            :key="coordinator.Name"
            class="bg-gray-50 shadow-inner rounded-md p-4 animate-fadeIn delay-2s"
          >
            <h3 class="text-lg md:text-xl font-semibold">{{ coordinator.Name }}</h3>
            <p>{{ coordinator.Designation }}</p>
            <p>{{ coordinator['Phone No'] !== '-' ? coordinator['Phone No'] : 'N/A' }}</p>
            <p>{{ coordinator['Email id'] }}</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import data from '../assets/NSS.json';
import backgroundImage from '@/assets/nss.webp';  // Correct path for the image

export default {
  data() {
    return {
      backgroundImage: backgroundImage,
      data: data,
    };
  },
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

@keyframes slideIn {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes popIn {
  0% { opacity: 0; transform: scale(0.8); }
  100% { opacity: 1; transform: scale(1); }
}

.animate-fadeIn {
  animation: fadeIn 1.5s ease-out forwards;
}

.animate-popIn {
  animation: popIn 1.2s ease-out forwards;
}

.animate-slideIn {
  animation: slideIn 1s ease-out forwards;
}

.animate-fadeInUp {
  animation: fadeInUp 1.5s ease-out forwards;
}
</style>
