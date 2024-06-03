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

    <!-- Horizontal Tabs -->
    <div class="sticky top-0 bg-[#fdb827] shadow-md z-10 hidden xl:block">
      <div class="flex justify-between px-9">
        <nav role="tablist" class="tabs">
          <button
            role="tab"
            v-for="(section, index) in sections"
            :key="index"
            @click="currentSection = section"
            :class="{
              'bg-[#21209C] text-white': currentSection === section,
              'text-black hover:bg-blue-700 hover:text-white': currentSection !== section
            }"
            class="font-semibold p-4 h-full transition duration-300 ease-in-out tab text-xl"
          >
            {{ section }}
          </button>
        </nav>
      </div>
    </div>

    <!-- Content sections -->
    <div class="container mx-auto py-8 p-9">
      <section v-if="currentSection !== null" class="py-8">
        <div v-if="currentSection === 'Description'">
          <h2 class="text-2xl font-bold mb-4">Description</h2>
          <p>{{ paceData.description }}</p>
        </div>
        <div v-else-if="currentSection === 'Coordinators'">
          <h2 class="text-2xl font-bold mb-4">Coordinators</h2>
          <div
            v-for="(coordinator, index) in paceData.coordinators"
            :key="index"
            class="bg-white p-6 rounded-lg shadow-lg mb-4"
          >
            <p><strong>Name:</strong> {{ coordinator.name }}</p>
            <p><strong>Position:</strong> {{ coordinator.position }}</p>
          </div>
          <div v-if="paceData.support_staff.length">
            <h3 class="text-xl font-bold mt-4">Support Staff</h3>
            <ul class="list-disc list-inside ml-4">
              <li v-for="(staff, index) in paceData.support_staff" :key="index">
                {{ staff }}
              </li>
            </ul>
          </div>
          <div v-if="paceData.student_volunteers.length">
            <h3 class="text-xl font-bold mt-4">Student Volunteers</h3>
            <ul class="list-disc list-inside ml-4">
              <li
                v-for="(volunteer, index) in paceData.student_volunteers"
                :key="index"
              >
                {{ volunteer }}
              </li>
            </ul>
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
