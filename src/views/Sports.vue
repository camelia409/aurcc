<template>
  <main class="flex-grow">
    <!-- Hero section -->
    <section class="bg-cover bg-center relative -z-10 animate-fadeIn" :style="'background-image: url(http://localhost:5173/src/assets/' + data.image + ');'">
      <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div class="container mx-auto py-16 text-white p-9 relative z-10 font-serif">
        <h1 class="text-4xl font-bold mb-4 animate-slideIn">{{ data.name }}</h1>
        <p class="text-xl mb-8 animate-fadeIn delay-1s">{{ data.description }}</p>
      </div>
    </section>

    <!-- Content sections -->
    <section class="mx-auto bg-gray-300 font-serif animate-fadeIn">
      <div class="bg-white rounded-lg animate-popIn">
        <h2 class="text-3xl text-center bg-[#21209c] font-bold p-4 text-white animate-fadeInUp">Overview</h2>
        <p class="p-5 text-xl font-medium animate-fadeIn delay-1s">{{ data.description }}</p>
      </div>
      <div class="bg-white rounded-lg animate-popIn">
        <h2 class="text-3xl text-center bg-[#21209c] font-bold p-4 text-white animate-fadeInUp">Facilities</h2>
        <div class="grid grid-cols-2 mx-10 animate-fadeIn delay-1s">
          <div class="">
            <h3 class="text-xl font-bold mb-2 p-5">Indoor Games</h3>
            <ul class="list-disc pl-8">
              <li v-for="game in data.facilities.IndoorGames" :key="game" class="mb-2 text-xl font-medium animate-fadeInUp delay-2s">{{ game }}</li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-2 p-5">Outdoor Games</h3>
            <ul class="list-disc pl-8 pb-6">
              <li v-for="game in data.facilities.OutdoorGames" :key="game" class="mb-2 text-xl font-medium animate-fadeInUp delay-2s">{{ game }}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="bg-white rounded-lg animate-popIn">
        <h2 class="text-3xl text-center bg-[#21209c] font-bold p-4 text-white animate-fadeInUp">Contact Us</h2>
        <p class="p-5 text-xl font-medium animate-fadeIn delay-1s">{{ data.contact_us.Address }}</p>
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
  0% { transform: translateX(-100%); }
  100% { transform: translateX(0); }
}

@keyframes popIn {
  0% { opacity: 0; transform: scale(0.8); }
  100% { opacity: 1; transform: scale(1); }
}

.animate-fadeIn {
  animation: fadeIn 1.5s ease-out forwards;
}

.animate-slideIn {
  animation: slideIn 1s ease-out forwards;
}

.animate-popIn {
  animation: popIn 1.2s ease-out forwards;
}

.animate-fadeInUp {
  animation: fadeInUp 1.5s ease-out forwards;
}

</style>