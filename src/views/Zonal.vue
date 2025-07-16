<template>
  <main class="bg-gradient-to-br from-indigo-100 via-blue-50 to-white min-h-screen font-sans text-gray-800">
    <!-- Hero Section -->
    <section class="relative w-full min-h-[40vh] md:min-h-[60vh] overflow-hidden flex items-center justify-center animate-fadeIn">
      <img :src="backgroundImage" alt="Zonal Office" class="absolute inset-0 w-full h-full object-cover object-center" />
      <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>
      <div class="absolute inset-0 flex flex-col items-center justify-center z-10 px-2">
        <div class="backdrop-blur-md bg-white/30 rounded-2xl shadow-lg px-4 py-4 sm:px-8 sm:py-6 md:px-12 md:py-10 flex flex-col items-center w-full max-w-2xl border border-white/30">
          <h1 class="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg tracking-wide text-center mb-2 leading-tight">ZONAL OFFICE</h1>
          <p class="text-base sm:text-lg md:text-2xl text-white drop-shadow text-center font-medium">Liaison for Examinations & College Coordination</p>
        </div>
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
    <section class="max-w-7xl mx-auto py-14 px-2 md:px-9 flex flex-col gap-12" ref="contentWrapper">

      <!-- Description -->
      <div id="description" ref="description" class="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg animate-fadeIn border border-gray-100 scroll-mt-28">
        <div class="bg-gradient-to-r from-blue-900 to-blue-500 py-5 flex items-center justify-center gap-3 rounded-t-2xl">
          <span class="text-2xl">ℹ️</span>
          <h2 class="text-2xl md:text-3xl font-bold text-white text-center">Description</h2>
        </div>
        <div class="p-8 md:p-10">
          <ul class="list-disc pl-6 text-gray-800 text-lg space-y-2">
            <li v-for="(desc, index) in zonalData.description" :key="index">
              {{ desc }}
            </li>
          </ul>
        </div>
      </div>

      <!-- PDF Section -->
      <div id="zoneList" ref="zoneList" class="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg animate-fadeIn border border-gray-100 scroll-mt-28">
        <div class="bg-gradient-to-r from-blue-900 to-blue-500 py-5 flex items-center justify-center gap-3 rounded-t-2xl">
          <span class="text-2xl">🏫</span>
          <h2 class="text-2xl md:text-3xl font-bold text-white text-center">Zone List of Colleges</h2>
        </div>
        <div class="p-8 md:p-10">
          <iframe
            :src="zonalListPDF"
            class="w-full h-[500px] sm:h-[700px] rounded-lg border border-gray-300"
            frameborder="0"
          ></iframe>
        </div>
      </div>

      <!-- Staff Section -->
      <div id="staff" ref="staff" class="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg animate-fadeIn border border-gray-100 scroll-mt-28">
        <div class="bg-gradient-to-r from-blue-900 to-blue-500 py-5 flex items-center justify-center gap-3 rounded-t-2xl">
          <span class="text-2xl">👥</span>
          <h2 class="text-2xl md:text-3xl font-bold text-white text-center">Zonal Office Staff</h2>
        </div>
        <div class="p-8 md:p-10">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              v-for="staff in zonalData.staff"
              :key="staff.name"
              class="zonal-staff-card bg-white/60 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden flex flex-col items-center border border-blue-200 transition-all duration-300 text-center"
            >
              <div class="w-full flex justify-center pt-6">
                <div class="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg bg-white flex items-center justify-center">
                  <img
                    v-if="staff.image"
                    :src="`/${staff.image}`"
                    :alt="staff.name"
                    class="w-full h-full object-cover"
                  />
                  <span v-else class="text-5xl text-blue-300">👤</span>
                </div>
              </div>
              <div class="w-full bg-gradient-to-r from-blue-900 to-blue-500 py-3 px-2 flex flex-col items-center mt-6">
                <h3 class="text-base md:text-xl font-bold text-white font-sans tracking-wide">{{ staff.name }}</h3>
                <p class="text-xs md:text-base text-blue-100 font-sans">{{ staff.designation }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <div class="flex justify-center mt-2 mb-8">
      <a :href="`mailto:${zonalData.contact_us || 'zonaloffice@aurcc.ac.in'}`" class="apply-contact-btn bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all text-lg md:text-xl">
        Apply Now / Contact Us
      </a>
    </div>
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
.zonal-staff-card {
  transition: transform 0.18s cubic-bezier(.4,2,.6,1), box-shadow 0.18s cubic-bezier(.4,2,.6,1);
}
.zonal-staff-card:hover {
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
.apply-contact-btn {
  display: inline-block;
  margin-top: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 24px 0 rgba(59,130,246,0.12);
}
</style>
