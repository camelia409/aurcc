<template>
  <main class="bg-gradient-to-br from-indigo-100 via-blue-50 to-white min-h-screen font-sans text-gray-800">
    <!-- Hero Section -->
    <section class="relative w-full min-h-[40vh] md:min-h-[60vh] overflow-hidden flex items-center justify-center animate-fadeIn">
      <img src="/offices.webp" alt="Estate Office" class="absolute inset-0 w-full h-full object-cover object-center" />
      <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>
      <div class="absolute inset-0 flex flex-col items-center justify-center z-10 px-2">
        <div class="backdrop-blur-md bg-white/30 rounded-2xl shadow-lg px-4 py-4 sm:px-8 sm:py-6 md:px-12 md:py-10 flex flex-col items-center w-full max-w-2xl border border-white/30">
          <h1 class="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg tracking-wide text-center mb-2 leading-tight">ESTATE OFFICE</h1>
          <p class="text-base sm:text-lg md:text-2xl text-white drop-shadow text-center font-medium">Managing campus infrastructure, maintenance, and facilities</p>
        </div>
      </div>
    </section>

    <!-- Sticky Modern Horizontal Tabs -->
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
    <section class="max-w-7xl mx-auto py-14 px-2 md:px-9 flex flex-col gap-12">
      <!-- About -->
      <div id="about" class="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg animate-fadeIn border border-gray-100 scroll-mt-28">
        <div class="bg-gradient-to-r from-blue-900 to-blue-500 py-5 flex items-center justify-center gap-3 rounded-t-2xl">
          <span class="text-2xl">ℹ️</span>
          <h2 class="text-2xl md:text-3xl font-bold text-white text-center">About the Estate Office</h2>
        </div>
        <div class="p-8 md:p-10">
          <p class="text-lg md:text-xl font-medium text-gray-800">{{ data.description }}</p>
        </div>
      </div>

      <!-- Services -->
      <div id="services" class="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg animate-fadeIn border border-gray-100 scroll-mt-28">
        <div class="bg-gradient-to-r from-blue-900 to-blue-500 py-5 flex flex-col items-center justify-center gap-1 rounded-t-2xl">
          <span class="text-2xl">🛠️</span>
          <h2 class="text-2xl md:text-3xl font-bold text-white text-center">Services</h2>
          <p class="text-white/90 text-base md:text-lg mt-1 font-medium">Comprehensive management of campus infrastructure and facilities</p>
        </div>
        <div class="p-8 md:p-10">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            <div
              v-for="service in serviceCards"
              :key="service.title"
              class="service-card bg-white/70 backdrop-blur rounded-xl shadow border border-blue-100 flex flex-col items-center text-center p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-400"
            >
              <div class="text-4xl mb-3">{{ service.icon }}</div>
              <h3 class="font-bold text-lg md:text-xl text-blue-900 mb-2">{{ service.title }}</h3>
              <p class="text-gray-700 text-sm md:text-base">{{ service.desc }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Staff -->
      <div id="staff" class="bg-white px-4 sm:px-6 lg:px-8 py-12 rounded-2xl shadow scroll-mt-28">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">Staff</h2>
        <div class="flex justify-center mb-10">
          <span class="block w-32 h-1 rounded-full bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-400 animate-glow-bar"></span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="staff in data.office_bearers"
            :key="staff.email_id || staff.name"
            class="admission-staff-card bg-white/60 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden flex flex-col items-center border border-blue-200 transition-all duration-300 text-center"
          >
            <div class="w-full flex justify-center pt-6">
              <div class="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg bg-white flex items-center justify-center">
                <img
                  v-if="staff.image && staff.image.trim() !== '' && !staff.showDefault"
                  :src="`/${staff.image}`"
                  :alt="staff.name"
                  class="w-full h-full object-cover"
                  loading="lazy"
                  @error="staff.showDefault = true"
                />
                <span v-else class="text-5xl text-blue-300">👤</span>
              </div>
            </div>
            <div class="w-full bg-gradient-to-r from-blue-900 to-blue-500 py-3 px-2 flex flex-col items-center mt-6">
              <h3 class="text-base md:text-xl font-bold text-white font-sans tracking-wide">{{ staff.name }}</h3>
              <p class="text-xs md:text-base text-blue-100 font-sans">{{ staff.position }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact -->
      <div class="flex justify-center mt-2 mb-8">
        <a :href="`mailto:${data.contact_us}`" class="apply-contact-btn bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all text-lg md:text-xl">
          Apply Now / Contact Us
        </a>
      </div>
    </section>
  </main>
</template>

<script>
import data from '@/assets/EstateOff.json';

const serviceCards = [
  {
    icon: '🏗️',
    title: 'Building Construction & Maintenance',
    desc: 'All construction activities and upkeep of campus buildings.'
  },
  {
    icon: '💧',
    title: 'Water & Sewage Management',
    desc: 'Ensuring water supply, sewage treatment, and disposal.'
  },
  {
    icon: '💡',
    title: 'Electrical System Maintenance',
    desc: 'Maintenance of campus electrical supply and systems.'
  },
  {
    icon: '🛣️',
    title: 'Roads & Pathways',
    desc: 'Construction and maintenance of campus roads and walkways.'
  },
  {
    icon: '🌳',
    title: 'Gardens & Lawns',
    desc: 'Upkeep of lawns, gardens, and green spaces.'
  },
  {
    icon: '🏢',
    title: 'Facility Monitoring & Rent',
    desc: 'Monitoring and rent collection for central facilities.'
  },
  {
    icon: '🧹',
    title: 'Housekeeping',
    desc: 'Campus-wide cleaning and housekeeping services.'
  },
  {
    icon: '🛡️',
    title: 'Security',
    desc: 'Ensuring safety and security across the campus.'
  },
];

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
      serviceCards,
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
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.admission-staff-card {
  transition: transform 0.18s cubic-bezier(.4,2,.6,1), box-shadow 0.18s cubic-bezier(.4,2,.6,1);
}
.admission-staff-card:hover {
  transform: translateY(-8px) scale(1.025);
  box-shadow: 0 8px 32px 0 rgba(59,130,246,0.18), 0 2px 8px 0 rgba(59,130,246,0.10);
  border-color: #2563eb;
}
.animate-glow-bar {
  box-shadow: 0 0 16px 4px #60a5fa, 0 0 32px 8px #3b82f6;
  animation: glowBar 2.5s ease-in-out infinite alternate;
}
@keyframes glowBar {
  0% { box-shadow: 0 0 16px 4px #60a5fa, 0 0 32px 8px #3b82f6; }
  100% { box-shadow: 0 0 32px 8px #3b82f6, 0 0 48px 12px #60a5fa; }
}
.service-card {
  cursor: pointer;
  will-change: transform, box-shadow;
}
.apply-contact-btn {
  display: inline-block;
  margin-top: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 24px 0 rgba(59,130,246,0.12);
}
</style>
