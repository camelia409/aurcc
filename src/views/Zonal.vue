<template>
  <main class="flex-grow font-serif">
    <!-- Hero Section -->
    <section
      class="bg-cover bg-center relative w-full h-40 sm:h-80 md:h-94"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
    >
      <div class="absolute inset-0 bg-black opacity-20"></div>
      <div class="flex items-center justify-center h-full relative z-10 px-4">
        <h1 class="md:text-4xl text-xl font-extrabold text-white drop-shadow-lg font-serif text-center">
          ZONAL OFFICE
        </h1>
      </div>
    </section>

    <!-- Tabs -->
    <div class="sticky top-0 z-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          class="bg-white/95 backdrop-blur-sm shadow-lg rounded-full -mt-6 py-1 px-2 flex justify-center overflow-x-auto no-scrollbar"
        >
          <nav role="tablist" class="tabs flex space-x-1 md:space-x-2">
            <button
              role="tab"
              v-for="(section, index) in sections"
              :key="section.key"
              @click="scrollToSection(section.key)"
              :class="[
                'font-medium px-4 md:px-5 py-2 md:py-3 rounded-full text-sm md:text-base transition duration-300 whitespace-nowrap',
                currentSection === section.key
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              ]"
            >
              {{ section.label }}
            </button>
          </nav>
        </div>
      </div>
    </div>

    <!-- Content -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12" ref="contentWrapper">

      <!-- Description -->
      <div id="description" ref="description" class="bg-white rounded-2xl shadow p-6 md:p-10 scroll-mt-28">
        <h2 class="text-3xl font-bold mb-4 text-indigo-700">Description</h2>
        <ul class="list-disc pl-6 text-gray-800 text-lg space-y-2">
          <li v-for="(desc, index) in zonalData.description" :key="index">
            {{ desc }}
          </li>
        </ul>
      </div>

      <!-- PDF Section -->
      <div id="zoneList" ref="zoneList" class="bg-white rounded-2xl shadow p-6 md:p-10 scroll-mt-28">
        <h2 class="text-3xl font-bold mb-4 text-indigo-700">Zone List of Colleges</h2>
        <iframe
          :src="zonalListPDF"
          class="w-full h-[500px] sm:h-[700px] rounded-lg border border-gray-300"
          frameborder="0"
        ></iframe>
      </div>

      <!-- Staff Section -->
      <div id="staff" ref="staff" class="bg-white px-4 sm:px-6 lg:px-8 py-12 rounded-2xl shadow scroll-mt-28">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">Zonal Office Staff</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="staff in zonalData.staff"
            :key="staff.name"
            class="bg-white border rounded-xl shadow-sm overflow-hidden text-center"
          >
            <div class="bg-gradient-to-r from-blue-400 to-blue-300 h-2"></div>
            <div class="p-6">
              <img
                :src="`/${staff.image}`"
                :alt="staff.name"
                class="w-28 h-28 mx-auto rounded-full border-2 border-amber-100 shadow object-cover"
              />
              <h3 class="mt-4 text-xl font-semibold text-gray-800">{{ staff.name }}</h3>
              <p class="text-blue-600 font-medium">{{ staff.designation }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-4 text-center">
      <p>&copy; {{ currentYear }} Zonal Office. All rights reserved.</p>
    </footer>
  </main>
</template>

<script>
import zonalData from '@/assets/zonaloffice.json';
import zonalListPDF from '@/assets/zonal-list.pdf';

export default {
  data() {
    return {
      zonalData: zonalData[0],
      zonalListPDF,
      currentSection: 'description',
      backgroundImage: '/offices.webp',
      currentYear: new Date().getFullYear(),
      sections: [
        { label: 'Description', key: 'description' },
        { label: 'Zone List of Colleges', key: 'zoneList' },
        { label: 'Staff', key: 'staff' }
      ]
    };
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    scrollToSection(id) {
      const section = this.$refs[id];
      if (section?.scrollIntoView) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    },
    onScroll() {
      for (const section of this.sections) {
        const el = this.$refs[section.key];
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom > 200) {
            this.currentSection = section.key;
            break;
          }
        }
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
.section-box {
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  scroll-margin-top: 6rem;
}
.section-title {
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
}
</style>
