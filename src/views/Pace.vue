<template>
  <main class="flex-grow">
    <!-- Hero section -->
    <section
      class="bg-cover bg-center relative -z-10"
      :style="'background-image: url(http://192.168.72.231:5173/src/assets/dgate-hero.jpg)'"
    >
      <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div class="container mx-auto py-16 text-white p-9 relative z-10">
        <h1 class="text-4xl font-bold mb-4">{{ paceData.name }}</h1>
        <p class="text-xl mb-8">{{ paceData.description }}</p>
        <button class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          Learn More
        </button>
      </div>
    </section>

    <!-- Content sections -->
    <div class="bg-indigo-100 mx-auto py-8 ">
      <section class="py-8  p-10">
        <div class="bg-white rounded-lg ">
          <h2 class="text-3xl text-center font-bold p-3 rounded-t-lg bg-gradient-to-r from-blue-500 to-cyan-300">Description</h2>
          <p class="font-medium text-xl p-4">{{ paceData.description }}</p>
        </div>
        <div class="bg-white">
          <h2 class="text-3xl text-center mt-8 mb-6 rounded-t-lg font-bold p-4 bg-gradient-to-r from-blue-500 to-cyan-300">Coordinators</h2>
          <div class="flex flex-cols justify-around">
          <div
            v-for="(coordinator, index) in paceData.coordinators"
            :key="index"
            class="bg-shadow p-6 text-xl font-medium rounded-lg "
          >
            <p><strong>Name:</strong> {{ coordinator.name }}</p>
            <p><strong>Position:</strong> {{ coordinator.position }}</p>
          </div>
          <div v-if="paceData.support_staff.length">
            <h3 class="text-3xl font-bold p-6">Support Staff</h3>
            <ul class="text-xl font-medium list-disc list-inside p-4 ">
              <li v-for="(staff, index) in paceData.support_staff" :key="index">
                {{ staff }}
              </li>
            </ul>
          </div>
          <div v-if="paceData.student_volunteers.length">
            <h3 class="text-3xl font-bold p-6">Student Volunteers</h3>
            <ul class="text-xl font-medium list-disc list-inside p-4">
              <li
                v-for="(volunteer, index) in paceData.student_volunteers"
                :key="index"
              >
                {{ volunteer }}
              </li>
            </ul>
          </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import paceData from '../assets/pace.json';

export default {
  data() {
    return {
      paceData,
      sections: ['Description', 'Coordinators'],
      currentSection: null,
    };
  },
  created() {
    // Default to first section
    if (this.sections.length > 0) {
      this.currentSection = this.sections[0];
    }
  },
};
</script>

<style scoped>
/* Add your custom styles here */
.description-item {
  display: flex;
  flex-wrap: wrap;
}
</style>
