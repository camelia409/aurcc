<template>
  <main class="bg-gradient-to-br from-indigo-100 via-blue-50 to-white min-h-screen font-sans text-gray-800">
    <!-- Hero Section -->
    <section class="relative w-full min-h-[40vh] md:min-h-[60vh] overflow-hidden flex items-center justify-center animate-fadeIn">
      <img src="/offices.webp" alt="Distance Education" class="absolute inset-0 w-full h-full object-cover object-center" />
      <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>
      <div class="absolute inset-0 flex flex-col items-center justify-center z-10 px-2">
        <div class="backdrop-blur-md bg-white/30 rounded-2xl shadow-lg px-4 py-4 sm:px-8 sm:py-6 md:px-12 md:py-10 flex flex-col items-center w-full max-w-2xl border border-white/30">
          <h1 class="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg tracking-wide text-center mb-2 leading-tight">DISTANCE EDUCATION</h1>
          <p class="text-base sm:text-lg md:text-2xl text-white drop-shadow text-center font-medium">Flexible learning for working professionals and lifelong learners</p>
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
      <!-- Overview -->
      <div id="overview" class="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg animate-fadeIn border border-gray-100">
        <div class="bg-gradient-to-r from-blue-900 to-blue-500 py-5 flex items-center justify-center gap-3 rounded-t-2xl">
          <span class="text-2xl">ℹ️</span>
          <h2 class="text-2xl md:text-3xl font-bold text-white text-center">Overview</h2>
        </div>
        <div class="p-8 md:p-10">
          <p class="text-lg md:text-xl font-medium text-gray-800">{{ data.description }}</p>
        </div>
      </div>

      <!-- Why Choose Distance Education -->
      <div class="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg animate-fadeIn border border-gray-100">
        <div class="bg-gradient-to-r from-blue-900 to-blue-500 py-5 flex items-center justify-center gap-3 rounded-t-2xl">
          <span class="text-2xl">🌟</span>
          <h2 class="text-2xl md:text-3xl font-bold text-white text-center">Why Choose Distance Education?</h2>
        </div>
        <div class="p-8 md:p-10">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div class="flex flex-col items-center text-center">
              <span class="text-3xl mb-2">⏰</span>
              <span class="font-semibold text-gray-800">Flexible Timings</span>
              <span class="text-gray-500 text-sm">Learn at your own pace, anytime, anywhere.</span>
            </div>
            <div class="flex flex-col items-center text-center">
              <span class="text-3xl mb-2">💼</span>
              <span class="font-semibold text-gray-800">Career Advancement</span>
              <span class="text-gray-500 text-sm">Upgrade your skills while you work.</span>
            </div>
            <div class="flex flex-col items-center text-center">
              <span class="text-3xl mb-2">🎓</span>
              <span class="font-semibold text-gray-800">Recognized Degrees</span>
              <span class="text-gray-500 text-sm">Degrees from Anna University, valued by employers.</span>
            </div>
            <div class="flex flex-col items-center text-center">
              <span class="text-3xl mb-2">🤝</span>
              <span class="font-semibold text-gray-800">Expert Faculty</span>
              <span class="text-gray-500 text-sm">Guidance from experienced professors.</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Programs -->
      <div id="programs" class="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg animate-fadeIn border border-gray-100">
        <div class="bg-gradient-to-r from-blue-900 to-blue-500 py-5 flex items-center justify-center gap-3 rounded-t-2xl">
          <span class="text-2xl">📚</span>
          <h2 class="text-2xl md:text-3xl font-bold text-white text-center">Programs Offered</h2>
        </div>
        <div class="p-8 md:p-10">
          <div class="mb-6 text-lg text-gray-700">Our flexible MBA and MCA programs are designed for working professionals and recent graduates seeking to advance their careers.</div>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <li class="bg-white/80 rounded-xl shadow p-6 flex items-center gap-4">
              <span class="text-3xl">🎓</span>
              <span class="font-semibold">MBA</span>
            </li>
            <li class="bg-white/80 rounded-xl shadow p-6 flex items-center gap-4">
              <span class="text-3xl">💻</span>
              <span class="font-semibold">MCA</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Specializations -->
      <div id="specialization" class="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg animate-fadeIn border border-gray-100">
        <div class="bg-gradient-to-r from-blue-900 to-blue-500 py-5 flex items-center justify-center gap-3 rounded-t-2xl">
          <span class="text-2xl">🎯</span>
          <h2 class="text-2xl md:text-3xl font-bold text-white text-center">Specializations</h2>
        </div>
        <div class="p-8 md:p-10">
          <div class="mb-6 text-lg text-gray-700">Choose from a range of MBA specializations to tailor your learning to your career goals.</div>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <li v-for="(spec, index) in data.specialization" :key="index" class="bg-white/80 rounded-xl shadow p-6 flex items-center gap-4">
              <span class="text-3xl">🏅</span>
              <span class="font-semibold">{{ spec }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Staff -->
      <div id="staff" class="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg animate-fadeIn border border-gray-100">
        <div class="bg-gradient-to-r from-blue-900 to-blue-500 py-5 flex items-center justify-center gap-3 rounded-t-2xl">
          <span class="text-2xl">👥</span>
          <h2 class="text-2xl md:text-3xl font-bold text-white text-center">Staff</h2>
        </div>
        <div class="p-8 md:p-10">
          <div class="mb-8 text-lg text-gray-700 text-center">Meet our dedicated faculty, committed to supporting your distance learning journey.</div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            <div
              v-for="staff in data.staff"
              :key="staff.name"
              class="admission-staff-card bg-white/60 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden flex flex-col items-center border border-blue-200 transition-all duration-300 text-center"
            >
              <div class="w-full flex justify-center pt-6">
                <div class="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg bg-white">
                  <img
                    :src="staff.image ? `/${staff.image}` : '/default-avatar.png'"
                    :alt="staff.name"
                    class="w-full h-full object-cover"
                    @error="event.target.src = '/default-avatar.png'"
                    loading="lazy"
                  />
                </div>
              </div>
              <div class="w-full bg-gradient-to-r from-blue-900 to-blue-500 py-3 px-2 flex flex-col items-center mt-6">
                <h3 class="text-base md:text-xl font-bold text-white font-sans tracking-wide">{{ staff.name }}</h3>
                <p class="text-xs md:text-base text-blue-100 font-sans">{{ staff.position }}</p>
                <p class="text-blue-100 text-xs">{{ staff.department }}</p>
                <p class="text-blue-100 text-xs">{{ staff.university }}</p>
                <p class="text-blue-200 text-xs mt-2">{{ staff.address }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="flex justify-center mt-8">
        <a href="mailto:distanceedu@aurcc.ac.in" class="inline-block px-8 py-4 bg-blue-600 text-white rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-lg">Apply Now / Contact Us</a>
      </div>
    </section>
  </main>
</template>

<script>
import data from '@/assets/distance education.json';

export default {
  name: 'DistanceEducation',
  data() {
    return {
      data,
      sections: [
        { id: 'overview', label: 'Overview' },
        { id: 'programs', label: 'Programs' },
        { id: 'specialization', label: 'Specializations' },
        { id: 'staff', label: 'Staff' }
      ],
      activeSection: ''
    };
  },
  methods: {
    scrollTo(sectionId) {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        this.activeSection = sectionId;
        history.replaceState(null, '', `#${sectionId}`);
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
</style>
