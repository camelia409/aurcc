<template>
  <main class="bg-gradient-to-br from-indigo-100 via-blue-50 to-white min-h-screen font-sans text-gray-800">
    <!-- Hero Section -->
    <section class="relative w-full min-h-[40vh] md:min-h-[60vh] overflow-hidden flex items-center justify-center animate-fadeIn">
      <img :src="backgroundImage" alt="PACE Cell" class="absolute inset-0 w-full h-full object-cover object-center" />
      <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>
      <div class="absolute inset-0 flex flex-col items-center justify-center z-10 px-2">
        <div class="backdrop-blur-md bg-white/30 rounded-2xl shadow-lg px-4 py-4 sm:px-8 sm:py-6 md:px-12 md:py-10 flex flex-col items-center w-full max-w-2xl border border-white/30">
          <h1 class="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg tracking-wide text-center mb-2 leading-tight">PACE CELL</h1>
          <p class="text-base sm:text-lg md:text-2xl text-white drop-shadow text-center font-medium">Empowering students for competitive excellence</p>
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
    <section class="max-w-7xl mx-auto py-14 px-2 md:px-9 flex flex-col gap-12" ref="contentWrapper">
      <!-- Description Section -->
      <div id="description" class="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg animate-fadeIn border border-gray-100 scroll-mt-28">
        <div class="bg-gradient-to-r from-blue-900 to-blue-500 py-5 flex items-center justify-center gap-3 rounded-t-2xl">
          <span class="text-2xl">🧭</span>
          <h2 class="text-2xl md:text-3xl font-bold text-white text-center">About the PACE Cell</h2>
        </div>
        <div class="p-8 md:p-10">
          <p class="text-lg leading-relaxed text-gray-800 mb-4">
            <span class="font-semibold text-blue-900">PACE (Placement and Competitive Exam) Cell</span> at Anna University Regional Campus Coimbatore is your dedicated partner for success in government and competitive exams. We empower students with:
          </p>
          <ul class="list-disc pl-6 space-y-2 text-base text-gray-800 mb-4">
            <li><span class="font-semibold">Expert Guidance:</span> Access to experienced mentors and subject matter experts for personalized support.</li>
            <li><span class="font-semibold">Comprehensive Resources:</span> Books, study materials, and online tools for TNPSC, UPSC, Banking, SSC, Railway, and more.</li>
            <li><span class="font-semibold">Workshops & Mock Tests:</span> Regular training programs, workshops, and practice exams to boost your confidence and skills.</li>
            <li><span class="font-semibold">Peer & Volunteer Support:</span> Join a vibrant community of coordinators, volunteers, and fellow aspirants for motivation and teamwork.</li>
            <li><span class="font-semibold">Inclusive Environment:</span> Support for students from all departments, ensuring everyone has the opportunity to excel.</li>
          </ul>
          <p class="text-base text-gray-700">Whether you’re aiming for a government job or seeking to improve your competitive exam performance, the PACE Cell is here to guide you every step of the way.</p>
        </div>
      </div>

      <!-- Staff Section -->
      <div ref="staff" id="staff" class="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg animate-fadeIn border border-gray-100 scroll-mt-28">
        <div class="bg-gradient-to-r from-blue-900 to-blue-500 py-5 flex items-center justify-center gap-3 rounded-t-2xl">
          <span class="text-2xl">👥</span>
          <h2 class="text-2xl md:text-3xl font-bold text-white text-center">PACE Cell Staff</h2>
        </div>
        <div class="p-8 md:p-10">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              v-for="staff in paceData.staff"
              :key="staff.name"
              class="pace-staff-card bg-white/60 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden flex flex-col items-center border border-blue-200 transition-all duration-300 text-center"
            >
              <div class="w-full flex justify-center pt-6">
                <div class="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg bg-white flex items-center justify-center">
                  <img
                    v-if="staff.image"
                    :src="getImageUrl(staff.image)"
                    :alt="staff.name"
                    class="w-full h-full object-cover"
                  />
                  <span v-else class="text-5xl text-blue-300">👤</span>
                </div>
              </div>
              <div class="w-full bg-gradient-to-r from-blue-900 to-blue-500 py-3 px-2 flex flex-col items-center mt-6">
                <h2 class="text-base md:text-xl font-bold text-white font-sans tracking-wide">{{ staff.name }}</h2>
                <p class="text-xs md:text-base text-blue-100 font-sans">{{ staff.position }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center mt-2 mb-8">
        <a :href="`mailto:${paceData.contact?.email || 'pacecell@aurcc.ac.in'}`" class="apply-contact-btn bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all text-lg md:text-xl">
          Apply Now / Contact Us
        </a>
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
.pace-staff-card {
  transition: transform 0.18s cubic-bezier(.4,2,.6,1), box-shadow 0.18s cubic-bezier(.4,2,.6,1);
}
.pace-staff-card:hover {
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
