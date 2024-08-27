<template>
  <main class="flex-grow">
    <!-- Hero section -->
    <section class="bg-cover bg-center relative -z-10" :style="'background-image: url(http://localhost:5173/src/assets/' + data.image + ');'">
      <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
     <div class="container mx-auto py-16 text-white p-9 relative z-10 font-serif">
        <h1 class="text-4xl font-bold mb-4">{{ data.name }}</h1>
        <p class="text-xl mb-8">{{ data.description }}</p>
        <button class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Learn More</button>
      </div>
    </section>


    <!-- Content sections -->
    <section class="mx-auto  bg-gray-300 font-serif">
      <div class="bg-white rounded-lg">
        <h2 class="text-3xl text-center bg-[#21209c] font-bold p-4 text-white">Overview</h2>
        <p class="p-5 text-xl font-medium">{{ data.description }}</p>
      </div>
      <div class="bg-white rounded-lg">
        <h2 class="text-3xl text-center bg-[#21209c] font-bold p-4 text-white">Facilities</h2>
        <div class="grid grid-cols-2 mx-10">
          <div class="">
              <h3 class="text-xl font-bold mb-2 p-5">Indoor Games</h3>
              <ul class="list-disc pl-8">
                <li v-for="game in data.facilities.IndoorGames" :key="game" class="mb-2 text-xl font-medium">{{ game }}</li>
              </ul>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-2 p-5">Outdoor Games</h3>
            <ul class="list-disc pl-8 pb-6">
              <li v-for="game in data.facilities.OutdoorGames" :key="game" class="mb-2 text-xl font-medium ">{{ game }}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="bg-white rounded-lg">
        <h2 class="text-3xl text-center bg-[#21209c] font-bold p-4  text-white">Contact Us</h2>
        <p class="p-5 text-xl font-medium">{{ data.contact_us.Address }}</p>
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

<style>
/* You can add any additional custom styles here if needed */
</style>
