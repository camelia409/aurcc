<template>
  <main class="flex-grow">
    <!-- Hero section -->
    <section class="bg-cover bg-center relative -z-10" :style="'background-image: url(http://192.168.72.231:5173/src/assets/dgate-hero.jpg)'">
      <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div class="container mx-auto py-16 text-white p-9 relative z-10">
        <h1 class="text-4xl font-bold mb-4">{{ paceData.organization }}</h1>
        <button class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Learn More</button>
      </div>
    </section>

    <!-- Content sections -->
    <section class="container mx-auto py-8 p-9">
      <h2 class="text-2xl font-bold mb-4">Description</h2>
      <p class="text-xl">{{ paceData.description }}</p>
    </section>

    <section class="container mx-auto py-8 p-9">
      <h2 class="text-2xl font-bold mb-4">PACE Cell Coordinators</h2>
      <div v-for="(coordinator, index) in paceData.coordinators" :key="index" class="flex flex-col mb-4">
        <h3><strong>{{ coordinator.name }}</strong></h3>
        <p>{{ coordinator.position }}</p>
      </div>
    </section>
  </main>
</template>

<script>
import paceData from '../assets/pace.json';

export default {
  data() {
    return {
      paceData: paceData
    };
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
