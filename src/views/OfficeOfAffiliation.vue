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

    <!-- Sticky Tabs -->
    <div class="sticky top-0 z-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          class="bg-white/95 backdrop-blur-sm shadow-lg rounded-full -mt-6 py-1 px-2 flex justify-center overflow-x-auto no-scrollbar"
        >
          <nav role="tablist" class="tabs flex space-x-1 md:space-x-2">
            <button
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

    <!-- Sections -->
    <section class="max-w-6xl mx-auto px-4 md:px-8 py-8 space-y-16">
      <!-- Description -->
      <div :ref="'Description'" class="scroll-mt-28">
        <div class="section-box">
          <h2 class="section-title">About the Office</h2>
          <p class="text-lg leading-relaxed text-gray-800">
            {{ data.description['About Office of Affiliation and its activities'] }}
          </p>
        </div>
      </div>

      <!-- Staff -->
      <div :ref="'Staff'" class="scroll-mt-28">
        <div class="section-box">
          <h2 class="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">Staff</h2>
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
      </div>

      <!-- Contact -->
      <div :ref="'Contact'" class="scroll-mt-28">
        <div class="section-box">
          <h2 class="section-title">Contact Us</h2>
          <div class="text-gray-800 space-y-2 text-lg">
            <p><strong>Office:</strong> {{ data.contact_details.office }}</p>
            <p><strong>Address:</strong> {{ data.contact_details.address }}</p>
            <p><strong>Phone:</strong> {{ data.contact_details.phone }}</p>
            <p><strong>Email:</strong> {{ data.contact_details.email }}</p>
          </div>
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
        { label: 'Description', key: 'Description' },
        { label: 'Staff', key: 'Staff' },
        { label: 'Contact Us', key: 'Contact' }
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
      if (section && section.scrollIntoView) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    },
    onScroll() {
      for (const section of this.sections) {
        const el = this.$refs[section.key];
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
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
