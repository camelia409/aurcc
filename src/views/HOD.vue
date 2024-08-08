<template>
  <div
    class="container mx-auto bg-cover bg-center"
    :style="backgroundStyle"
  >
    <div class="text-center mb-8 py-5 bg-black bg-opacity-50">
      <h1 class="text-3xl font-bold text-white text-shadow-lg">Head of the Departments</h1>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="hod in hods"
        :key="hod.name"
        class="hod-member bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center"
      >
        <div class="w-full flex justify-center">
          <div class="w-60 h-70 overflow-hidden">
            <img
              :src="getPhotoPath(hod.photo)"
              :alt="hod.name"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
        <div
          class="flex-grow flex flex-col justify-center p-6 bg-gray-100 text-center w-full"
        >
          <h2 class="text-2xl font-bold text-blue-600">{{ hod.name }}</h2>
          <p class="text-lg text-gray-800">{{ hod.department }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ltImage from '@/assets/lt.webp';
import hodsData from '@/assets/HOD.json';

export default {
  name: 'HODs',
  data() {
    return {
      hods: hodsData.departments,
    };
  },
  computed: {
    backgroundStyle() {
      return {
        backgroundImage: `url(${ltImage})`,
      };
    },
  },
  methods: {
    getPhotoPath(photo) {
      return new URL(`../assets/${photo}`, import.meta.url).href;
    },
  },
};
</script>

<style scoped>
.text-shadow-lg {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

.hod-member {
  @apply m-5 p-3 border border-gray-200 flex flex-col items-center;
}
</style>
