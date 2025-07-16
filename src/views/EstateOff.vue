<template>
  <main class="flex-grow font-serif text-gray-800">
    <!-- Hero Section -->
    <section
      class="bg-cover bg-center relative w-full h-40 sm:h-80 md:h-96 animate-fadeIn"
      :style="{ backgroundImage: 'url(/offices.webp)' }"
    >
      <div class="absolute inset-0 bg-black opacity-20"></div>
      <div class="flex items-center justify-center h-full relative z-10 px-4">
        <h1 class="md:text-4xl text-2xl font-extrabold text-white drop-shadow-lg text-center animate-slideIn">
          ESTATE OFFICE
        </h1>
      </div>
    </section>

    <!-- Sticky Tabs -->
    <div class="sticky top-0 z-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white/95 backdrop-blur-sm shadow-lg rounded-full -mt-6 py-1 px-2 flex justify-center overflow-x-auto no-scrollbar">
          <nav role="tablist" class="tabs flex space-x-1 md:space-x-2">
            <button
  v-for="section in sections"
  :key="section.id"
  @click="scrollTo(section.id)"
  :class="{
    'bg-indigo-600 text-white': activeSection === section.id,
    'text-gray-700 hover:bg-gray-100': activeSection !== section.id
  }"
  class="font-medium px-4 md:px-5 py-2 md:py-3 rounded-full text-sm md:text-base transition duration-300 whitespace-nowrap"
>
  {{ section.label }}
</button>

          </nav>
        </div>
      </div>
    </div>

    <!-- Content Sections -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <!-- About -->
      <div id="about" class="bg-white rounded-2xl shadow p-6 md:p-10 scroll-mt-28">
        <h2 class="text-3xl font-bold mb-4 text-indigo-700">About the Estate Office</h2>
        <p class="text-lg leading-relaxed text-gray-800">{{ data.description }}</p>
      </div>

      <!-- Services -->
      <div id="services" class="bg-white rounded-2xl shadow p-6 md:p-10 scroll-mt-28">
        <h2 class="text-3xl font-bold mb-6 text-indigo-700">Services</h2>
        <ul class="list-disc pl-5 space-y-2 text-gray-800 text-base md:text-lg">
          <li v-for="service in data.services" :key="service">{{ service }}</li>
        </ul>
      </div>

     <!-- Staff -->
<div id="staff" class="bg-white rounded-2xl shadow p-6 md:p-10 scroll-mt-28">
  <h2 class="text-3xl font-bold text-center mb-10 text-gray-900">Staff</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div
      v-for="staff in data.office_bearers"
      :key="staff.email_id || staff.name"
      class="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col border border-gray-100"
    >
      <div class="bg-gradient-to-r from-blue-500 to-blue-300 h-2"></div>
      <div class="p-6 flex justify-center">
        <div class="w-28 h-28 rounded-full overflow-hidden border-2 border-amber-100 shadow">
          <img
            :src="staff.image ? `/${staff.image}` : '/placeholder.jpg'"
            :alt="staff.name"
            class="w-full h-full object-cover"
            loading="lazy"
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


      <!-- Contact -->
      <div id="contact" class="bg-white rounded-2xl shadow p-6 md:p-10 scroll-mt-28">
        <h2 class="text-3xl font-bold mb-6 text-indigo-700">Contact</h2>
        <p class="text-base md:text-lg text-gray-800">{{ data.contact_us }}</p>
      </div>
    </section>
  </main>
</template>

<script>
import data from '@/assets/EstateOff.json';

export default {
  name: 'EstateOffice',
  data() {
    return {
      data,
      sections: [
        { id: 'about', label: 'About' },
        { id: 'services', label: 'Services' },
        { id: 'staff', label: 'Staff' },
        { id: 'contact', label: 'Contact' },
      ],
      activeSection: '',
    };
  },
  methods: {
    scrollTo(sectionId) {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        this.activeSection = sectionId;
      }
    },
    handleScroll() {
      const sections = this.sections.map(s => {
        const el = document.getElementById(s.id);
        return el ? { id: s.id, top: el.getBoundingClientRect().top } : null;
      }).filter(Boolean);

      const closest = sections.reduce((a, b) => Math.abs(b.top) < Math.abs(a.top) ? b : a, sections[0]);
      if (closest) this.activeSection = closest.id;
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
.animate-slideIn {
  animation: slideIn 1s ease-in-out;
}
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
