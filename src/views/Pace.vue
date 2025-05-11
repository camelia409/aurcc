<template>
  <main class="flex-grow">
    <!-- Hero Section -->
    <section
      class="bg-cover bg-center relative w-full h-40 sm:h-80 md:h-94 animate-fadeIn"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
    >
      <div class="absolute inset-0 bg-black opacity-20"></div>
      <div class="flex items-center justify-center h-full relative z-10 px-4">
        <h1 class="md:text-4xl text-xl font-extrabold text-white drop-shadow-lg font-serif text-center animate-slideIn">
          PACE CELL
        </h1>
      </div>
    </section>

    <!-- Sticky Modern Horizontal Tabs -->
    <div class="sticky top-0 z-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white/95 backdrop-blur-sm shadow-lg rounded-full -mt-6 py-1 px-2 flex justify-center overflow-x-auto no-scrollbar">
          <nav role="tablist" class="tabs flex space-x-1 md:space-x-2">
            <button
              v-for="section in sections"
              :key="section.value"
              @click="scrollToSection(section.value)"
              :class="{
                'bg-indigo-600 text-white': currentSection === section.value,
                'text-gray-700 hover:bg-gray-100': currentSection !== section.value
              }"
              class="font-medium px-4 md:px-5 py-2 md:py-3 rounded-full text-sm md:text-base transition duration-300 whitespace-nowrap"
            >
              {{ section.label }}
            </button>
          </nav>
        </div>
      </div>
    </div>

    <!-- Content -->
    <section
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12"
      ref="contentWrapper"
    >
      <!-- Description Section -->
      <div
        id="description"
        class="bg-white rounded-2xl shadow p-6 md:p-10 scroll-mt-28"
      >
        <h2 class="text-3xl font-bold mb-4 text-indigo-700">About the PACE Cell</h2>
        <p class="text-lg leading-relaxed text-gray-800">
          {{ paceData.description }}
        </p>
      </div>

      <!-- Staff Section -->
      <div
        ref="staff"
        id="staff"
        class="bg-white px-4 sm:px-6 lg:px-8 py-12 rounded-2xl shadow scroll-mt-28"
      >
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
          PACE Cell Staff
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="staff in paceData.staff"
            :key="staff.name"
            class="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col border border-gray-100"
          >
            <div class="bg-gradient-to-r from-blue-400 to-blue-300 h-2"></div>
            <div class="p-6 flex justify-center">
              <div class="w-28 h-28 rounded-full overflow-hidden border-2 border-amber-100 shadow">
                <img
                  :src="getImageUrl(staff.image)"
                  :alt="staff.name"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
            <div class="flex-grow flex flex-col p-5 text-center">
              <h2 class="text-xl font-bold text-gray-800 mb-1">{{ staff.name }}</h2>
              <p class="text-blue-600 font-medium mb-2">{{ staff.position }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Section -->
      <div
        ref="contact"
        id="contact"
        class="bg-white rounded-2xl shadow p-6 md:p-10 scroll-mt-28"
      >
        <h2 class="text-3xl font-bold mb-4">Contact Us</h2>
        <ul class="text-lg space-y-2 text-gray-800">
          <li>
            <span class="font-semibold">Email:</span>
            <a :href="`mailto:${paceData.contact.email}`" class="text-blue-600 underline">
              {{ paceData.contact.email }}
            </a>
          </li>
          <li><span class="font-semibold">Phone:</span> {{ paceData.contact.phone }}</li>
          <li>
            <span class="font-semibold">Website:</span>
            <a :href="paceData.contact.website" class="text-blue-600 underline" target="_blank" rel="noopener">
              Visit Link
            </a>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script>
import paceData from '@/assets/pace.json';

export default {
  data() {
    return {
      paceData,
      backgroundImage: '/offices.webp',
      showFull: false,
      currentSection: 'description',
      sections: [
        { label: 'Description', value: 'description' },
        { label: 'Staff', value: 'staff' },
        { label: 'Contact Us', value: 'contact' }
      ]
    };
  },
  computed: {
    truncatedDescription() {
      const desc = this.paceData.description;
      return desc.length > 120 ? desc.slice(0, desc.indexOf('.') + 1) : desc;
    },
    isDescriptionLong() {
      return this.paceData.description.length > 120;
    }
  },
  methods: {
    scrollToSection(section) {
      const el = this.$refs[section];
      if (el?.scrollIntoView) {
        el.scrollIntoView({ behavior: 'smooth' });
        this.currentSection = section;
      }
    },
    getImageUrl(imageName) {
      return `/${imageName}`;
    },
    handleScroll() {
      const positions = Object.entries(this.$refs)
        .filter(([key]) => ['description', 'staff', 'contact'].includes(key))
        .map(([key, el]) => ({ key, top: el.getBoundingClientRect().top }));

      const closest = positions.reduce((a, b) => Math.abs(b.top) < Math.abs(a.top) ? b : a);
      this.currentSection = closest.key;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<style scoped>
.font-serif {
  font-family: 'Georgia', 'Times New Roman', Times, serif;
}
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
