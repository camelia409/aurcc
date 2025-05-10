<template>
  <main class="flex-grow font-serif">
    <!-- Hero Section -->
    <section
      class="bg-cover bg-center relative w-full h-40 sm:h-80 md:h-94 animate-fadeIn"
      :style="{ backgroundImage: `url('/offices.webp')` }"
    >
      <div class="absolute inset-0 bg-black opacity-30"></div>
      <div class="flex items-center justify-center h-full relative z-10 px-4">
        <h1 class="md:text-4xl text-xl font-extrabold text-white drop-shadow-lg text-center animate-slideIn">
          OFFICE OF AFFILIATION
        </h1>
      </div>
    </section>

    <!-- Tabs -->
    <div class="sticky top-0 z-20 bg-white/95 backdrop-blur-sm shadow-lg rounded-full -mt-6 py-1 px-2 flex justify-center overflow-x-auto no-scrollbar">
      <nav class="tabs flex space-x-2">
        <button
          v-for="section in sections"
          :key="section.value"
          @click="scrollToSection(section.value)"
          :class="[
            'font-medium px-4 py-2 rounded-full text-sm transition duration-300',
            currentSection === section.value ? 'bg-indigo-600 text-white' : 'text-gray-700 hover:bg-gray-100'
          ]"
        >
          {{ section.label }}
        </button>
      </nav>
    </div>

    <!-- Content Sections -->
    <section class="max-w-6xl mx-auto px-4 md:px-8 py-8 space-y-10">
      <!-- Description -->
      <div :id="'Description'" class="scroll-mt-24">
        <h2 class="text-2xl font-bold mb-4">About the Office</h2>
        <p class="text-lg leading-relaxed text-gray-800">
          {{ data.description['About Office of Affiliation and its activities'] }}
        </p>
      </div>

      <!-- Staff Section -->
      <div id="staff" ref="staff" class="bg-white px-4 sm:px-6 lg:px-8 py-12 rounded-2xl shadow scroll-mt-28">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">Office of Affiliation Staff</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="staff in data.staff"
            :key="staff.name"
            class="bg-white border rounded-xl shadow-sm overflow-hidden text-center"
          >
            <div class="bg-gradient-to-r from-indigo-600 to-indigo-400 h-2"></div>
            <div class="p-6">
              <img
                :src="`/${staff.image}`"
                :alt="staff.name"
                class="w-28 h-28 mx-auto rounded-full border-2 border-indigo-100 shadow object-cover"
              />
              <h3 class="mt-4 text-xl font-semibold text-gray-800">{{ staff.name }}</h3>
              <p class="text-indigo-600 font-medium">{{ staff.position }}</p>
            </div>
          </div>
        </div>
      </div>


      <!-- Contact -->
      <div :id="'Contact'" class="scroll-mt-24">
        <h2 class="text-2xl font-bold mb-4">Contact Us</h2>
        <div class="bg-white rounded-xl shadow-md p-6 text-gray-800 space-y-2">
          <p><strong>Office:</strong> {{ data.contact_details.office }}</p>
          <p><strong>Address:</strong> {{ data.contact_details.address }}</p>
          <p><strong>Phone:</strong> {{ data.contact_details.phone }}</p>
          <p><strong>Email:</strong> {{ data.contact_details.email }}</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import data from '@/assets/office of affiliation.json';

export default {
  data() {
    return {
      data,
      currentSection: 'Description',
      sections: [
        { label: 'Description', value: 'Description' },
        { label: 'Staff', value: 'Staff' },
        { label: 'Contact Us', value: 'Contact' }
      ]
    };
  },
  methods: {
    scrollToSection(id) {
      this.currentSection = id;
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    }
  }
};
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
