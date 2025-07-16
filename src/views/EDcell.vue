image.png<template>
  <main class="bg-gradient-to-br from-indigo-100 via-blue-50 to-white min-h-screen font-sans text-gray-800">
    <!-- Hero Section -->
    <section class="relative w-full min-h-[40vh] md:min-h-[60vh] overflow-hidden flex items-center justify-center animate-fadeIn">
      <img src="/offices.webp" alt="Entrepreneurship Development Cell" class="absolute inset-0 w-full h-full object-cover object-center" />
      <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>
      <div class="absolute inset-0 flex flex-col items-center justify-center z-10 px-2">
        <div class="backdrop-blur-md bg-white/30 rounded-2xl shadow-lg px-4 py-4 sm:px-8 sm:py-6 md:px-12 md:py-10 flex flex-col items-center w-full max-w-2xl border border-white/30">
          <h1 class="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg tracking-wide text-center mb-2 leading-tight">Entrepreneurship Development Cell</h1>
          <p class="text-base sm:text-lg md:text-2xl text-white drop-shadow text-center font-medium">Empowering innovation, startups, and entrepreneurial spirit</p>
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
      <!-- Description -->
      <div id="description" class="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg animate-fadeIn border border-gray-100">
        <div class="bg-gradient-to-r from-blue-900 to-blue-500 py-5 flex items-center justify-center gap-3 rounded-t-2xl">
          <span class="text-2xl">ℹ️</span>
          <h2 class="text-2xl md:text-3xl font-bold text-white text-center">Description</h2>
        </div>
        <div class="p-8 md:p-10">
          <p class="text-lg md:text-xl font-medium text-gray-800">
            Entrepreneurship is the person who plays a certain price for a product to resell it at an uncertain price, hereby making decisions about obtaining and using the resources while consequently admitting the risk of enterprise.
          </p>
        </div>
      </div>

      <!-- Objectives -->
      <div id="objectives" class="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg animate-fadeIn border border-gray-100">
        <div class="bg-gradient-to-r from-blue-900 to-blue-500 py-5 flex items-center justify-center gap-3 rounded-t-2xl">
          <span class="text-2xl">🎯</span>
          <h2 class="text-2xl md:text-3xl font-bold text-white text-center">Objectives</h2>
        </div>
        <div class="p-8 md:p-10">
          <ul class="list-disc pl-6 space-y-2 text-lg text-gray-800">
            <li v-for="objective in data.description.objectives" :key="objective">{{ objective }}</li>
          </ul>
        </div>
      </div>

      <!-- Key Activities -->
      <div id="key_activities" class="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg animate-fadeIn border border-gray-100">
        <div class="bg-gradient-to-r from-blue-900 to-blue-500 py-5 flex items-center justify-center gap-3 rounded-t-2xl">
          <span class="text-2xl">🗝️</span>
          <h2 class="text-2xl md:text-3xl font-bold text-white text-center">Key Activities</h2>
        </div>
        <div class="p-8 md:p-10 space-y-6">
          <div
            v-for="activity in data.description.key_activities"
            :key="activity.name"
            class="bg-indigo-50 rounded-xl p-5 shadow"
          >
            <h4 class="text-xl font-semibold mb-2">{{ activity.name }}</h4>
            <p class="text-gray-700 mb-1"><strong>Location:</strong> {{ activity.location }}</p>
            <p class="text-gray-700"><strong>Details:</strong> {{ activity.details }}</p>
          </div>
        </div>
      </div>

      <!-- MOU -->
      <div id="mou" class="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg animate-fadeIn border border-gray-100">
        <div class="bg-gradient-to-r from-blue-900 to-blue-500 py-5 flex items-center justify-center gap-3 rounded-t-2xl">
          <span class="text-2xl">🤝</span>
          <h2 class="text-2xl md:text-3xl font-bold text-white text-center">MOUs</h2>
        </div>
        <div class="p-8 md:p-10">
          <ul class="list-disc pl-6 space-y-2 text-lg text-gray-800">
            <li v-for="mou in data.MOU" :key="mou">{{ mou }}</li>
          </ul>
        </div>
      </div>

      <!-- Links -->
      <div id="links" class="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg animate-fadeIn border border-gray-100">
        <div class="bg-gradient-to-r from-blue-900 to-blue-500 py-5 flex items-center justify-center gap-3 rounded-t-2xl">
          <span class="text-2xl">🔗</span>
          <h2 class="text-2xl md:text-3xl font-bold text-white text-center">Useful Links</h2>
        </div>
        <div class="p-8 md:p-10">
          <ul class="list-disc pl-6 space-y-2 text-lg text-blue-700">
            <li v-for="link in data.links" :key="link">
              <a :href="'http://' + link" target="_blank" class="hover:underline">{{ link }}</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Office Bearers -->
      <div id="office_bearers" class="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg animate-fadeIn border border-gray-100">
        <div class="bg-gradient-to-r from-blue-900 to-blue-500 py-5 flex items-center justify-center gap-3 rounded-t-2xl">
          <span class="text-2xl">👥</span>
          <h2 class="text-2xl md:text-3xl font-bold text-white text-center">Staffs</h2>
        </div>
        <div class="p-8 md:p-10">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              v-for="member in data.office_bearers"
              :key="member.email"
              class="admission-staff-card bg-white/60 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden flex flex-col items-center border border-blue-200 transition-all duration-300 text-center"
            >
              <div class="w-full flex justify-center pt-6">
                <div class="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg bg-white flex items-center justify-center">
                  <img
                    v-if="member.image && member.image.trim() !== '' && !member.showDefault"
                    :src="member.image.startsWith('/') ? member.image : `/${member.image}`"
                    :alt="member.name"
                    class="w-full h-full object-cover"
                    @error="member.showDefault = true"
                  />
                  <span v-else class="text-5xl text-blue-300">👤</span>
                </div>
              </div>
              <div class="w-full bg-gradient-to-r from-blue-900 to-blue-500 py-3 px-2 flex flex-col items-center mt-6">
                <h3 class="text-base md:text-xl font-bold text-white font-sans tracking-wide">{{ member.name }}</h3>
                <p class="text-xs md:text-base text-blue-100 font-sans">{{ member.position }}</p>
                <p class="text-blue-100 text-xs">{{ member.organization }}</p>
                <p v-if="member.email" class="text-blue-200 text-xs mt-2">
                  <a :href="'mailto:' + member.email" class="hover:underline text-blue-200">{{ member.email }}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="flex justify-center mt-2 mb-8">
      <a :href="`mailto:edcell@aurcc.ac.in`" class="apply-contact-btn bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all text-lg md:text-xl">
        Apply Now / Contact Us
      </a>
    </div>
  </main>
</template>

<script>
import data from '@/assets/ED-cell.json';

export default {
  name: 'EDCellSection',
  data() {
    return {
      data,
      sections: [
        { id: 'description', label: 'Description' },
        { id: 'objectives', label: 'Objectives' },
        { id: 'key_activities', label: 'Key Activities' },
        { id: 'mou', label: 'MOUs' },
        { id: 'links', label: 'Links' },
        { id: 'office_bearers', label: 'Staffs' },
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
      const sections = this.sections.map((s) => {
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
.animate-fadeIn {
  animation: fadeIn 1.2s ease-out forwards;
}
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
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
.apply-contact-btn {
  display: inline-block;
  margin-top: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 24px 0 rgba(59,130,246,0.12);
}
</style>
