<template>
  <main class="bg-gradient-to-br from-indigo-100 via-blue-50 to-white min-h-screen font-sans text-gray-800">
    <!-- Hero Section -->
    <section class="relative w-full min-h-[40vh] md:min-h-[60vh] overflow-hidden flex items-center justify-center animate-fadeIn">
      <img src="/offices.webp" alt="Placement Cell" class="absolute inset-0 w-full h-full object-cover object-center" />
      <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>
      <div class="absolute inset-0 flex flex-col items-center justify-center z-10 px-2">
        <div class="backdrop-blur-md bg-white/30 rounded-2xl shadow-lg px-4 py-4 sm:px-8 sm:py-6 md:px-12 md:py-10 flex flex-col items-center w-full max-w-2xl border border-white/30">
          <h1 class="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg tracking-wide text-center mb-2 leading-tight">PLACEMENT CELL</h1>
          <p class="text-base sm:text-lg md:text-2xl text-white drop-shadow text-center font-medium">Empowering students for career success and industry connections</p>
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
              @click="scrollToSection(section.id)"
              :class="[
                'font-medium px-4 md:px-5 py-2 md:py-3 rounded-full text-sm md:text-base transition duration-300 whitespace-nowrap',
                activeSection === section.id
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

    <!-- Content Sections -->
    <section class="max-w-7xl mx-auto py-14 px-2 md:px-9 flex flex-col gap-12">
      <!-- Description -->
      <div id="Description" ref="Description" class="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg animate-fadeIn border border-gray-100">
        <div class="bg-gradient-to-r from-blue-900 to-blue-500 py-5 flex items-center justify-center gap-3 rounded-t-2xl">
          <span class="text-2xl">🎯</span>
          <h2 class="text-2xl md:text-3xl font-bold text-white text-center">About the Placement Cell</h2>
        </div>
        <div class="p-8 md:p-10">
          <p class="text-lg leading-relaxed text-gray-800 mb-4">
            <span class="font-semibold text-blue-900">The Placement Cell</span> at our Regional Campus is dedicated to empowering students for career success. We provide:
          </p>
          <ul class="list-disc pl-6 space-y-2 text-base text-gray-800 mb-4">
            <li><span class="font-semibold">Comprehensive Placement Support:</span> Guidance and training for every stage of the campus recruitment process.</li>
            <li><span class="font-semibold">Expert Team:</span> Coordinators, assistants, and volunteers from every department to ensure personalized attention.</li>
            <li><span class="font-semibold">Skill Development:</span> Pre-placement training, mock interviews, group discussions, and workshops to boost your confidence.</li>
            <li><span class="font-semibold">Industry Connections:</span> Strong ties with top recruiters and regular campus drives.</li>
            <li><span class="font-semibold">Career Awareness:</span> Information on value-added courses and opportunities in both private and government sectors.</li>
          </ul>
          <p class="text-base text-gray-700">Our mission: To help every student achieve their dream job and build a successful career.</p>
        </div>
      </div>

      <!-- Placement Statistics -->
      <div id="PlacementStatistics" ref="PlacementStatistics" class="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg animate-fadeIn border border-gray-100">
        <div class="bg-gradient-to-r from-blue-900 to-blue-500 py-5 flex items-center justify-center gap-3 rounded-t-2xl">
          <span class="text-2xl">📊</span>
          <h2 class="text-2xl md:text-3xl font-bold text-white text-center">Placement Statistics</h2>
        </div>
        <div class="p-8 md:p-10 flex flex-col items-center">
          <div class="text-lg text-gray-700 mb-6 text-center max-w-2xl">
            <span class="font-semibold text-blue-900">Our Results Speak for Themselves:</span> Each year, our students receive numerous placement offers from leading companies. Explore our latest placement statistics below.
          </div>
          <img src="/placement%20statistics.webp" alt="Placement Statistics" class="w-full max-w-4xl mx-auto h-auto rounded-md shadow-lg" />
        </div>
      </div>

      <!-- CUIC -->
      <div id="CUIC" ref="CUIC" class="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg animate-fadeIn border border-gray-100">
        <div class="bg-gradient-to-r from-blue-900 to-blue-500 py-5 flex items-center justify-center gap-3 rounded-t-2xl">
          <span class="text-2xl">🤝</span>
          <h2 class="text-2xl md:text-3xl font-bold text-white text-center">CUIC: Your Gateway to Top Recruiters</h2>
        </div>
        <div class="p-8 md:p-10">
          <p class="text-lg leading-relaxed text-gray-800 mb-4">
            <span class="font-semibold text-blue-900">The Centre for University-Industry Collaboration (CUIC)</span> bridges the gap between students and leading employers. Through CUIC, you benefit from:
          </p>
          <ul class="list-disc pl-6 space-y-2 text-base text-gray-800 mb-4">
            <li><span class="font-semibold">Industry Partnerships:</span> Direct connections with top companies for internships and placements.</li>
            <li><span class="font-semibold">Skill-Building Initiatives:</span> Workshops, seminars, and training programs to enhance your employability.</li>
            <li><span class="font-semibold">Placement Drives:</span> Regular campus recruitment events with a wide range of recruiters.</li>
            <li><span class="font-semibold">Career Guidance:</span> Expert advice and support to help you make informed career choices.</li>
          </ul>
          <p class="text-base text-gray-700">CUIC is committed to opening doors for your future and helping you launch a successful career.</p>
        </div>
      </div>

      <!-- Our Recruiters -->
      <div id="OurRecruiters" ref="OurRecruiters" class="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg animate-fadeIn border border-gray-100">
        <div class="bg-gradient-to-r from-blue-900 to-blue-500 py-5 flex items-center justify-center gap-3 rounded-t-2xl">
          <span class="text-2xl">🏢</span>
          <h2 class="text-2xl md:text-3xl font-bold text-white text-center">Our Recruiters</h2>
        </div>
        <div class="p-8 md:p-10 flex justify-center">
          <img src="/recruiters.jpg" alt="Our Recruiters" class="w-full max-w-4xl mx-auto h-auto rounded-md shadow-lg" />
        </div>
      </div>

      <!-- Placed Students -->
      <div id="PlacedStudents" ref="PlacedStudents" class="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg animate-fadeIn border border-gray-100">
        <div class="bg-gradient-to-r from-blue-900 to-blue-500 py-5 flex items-center justify-center gap-3 rounded-t-2xl">
          <span class="text-2xl">🎓</span>
          <h2 class="text-2xl md:text-3xl font-bold text-white text-center">Placed Students</h2>
        </div>
        <div class="p-8 md:p-10 flex justify-center">
          <img src="/Placedstudents.webp" alt="Placed Students" class="w-full max-w-4xl mx-auto h-auto rounded-md shadow-lg" />
        </div>
      </div>

      <!-- Staff Members -->
      <div id="StaffMembers" ref="StaffMembers" class="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg animate-fadeIn border border-gray-100">
        <div class="bg-gradient-to-r from-blue-900 to-blue-500 py-5 flex items-center justify-center gap-3 rounded-t-2xl">
          <span class="text-2xl">👥</span>
          <h2 class="text-2xl md:text-3xl font-bold text-white text-center">Placement Team</h2>
        </div>
        <div class="p-8 md:p-10">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              v-for="staff in data.staff_members"
              :key="staff.name"
              class="admission-staff-card bg-white/60 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden flex flex-col items-center border border-blue-200 transition-all duration-300 text-center"
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
    <div class="flex justify-center mt-2 mb-8">
      <a :href="`mailto:${data.contact_us || 'placementcell@aurcc.ac.in'}`" class="apply-contact-btn bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all text-lg md:text-xl">
        Apply Now / Contact Us
      </a>
    </div>
  </main>
</template>

<script>
import data from '../assets/placement-cell.json';

export default {
  data() {
    return {
      data: data,
      activeSection: 'Description',
      sections: [
        { id: 'Description', label: 'Description' },
        { id: 'PlacementStatistics', label: 'Placement Statistics' },
        { id: 'CUIC', label: 'CUIC' },
        { id: 'OurRecruiters', label: 'Our Recruiters' },
        { id: 'PlacedStudents', label: 'Placed Students' },
        { id: 'StaffMembers', label: 'Staff Members' }
      ],
    };
  },
  methods: {
    scrollToSection(sectionId) {
      this.activeSection = sectionId;
      const section = this.$refs[sectionId];
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
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

