<template>
  <main class="bg-gradient-to-br from-indigo-100 via-blue-50 to-white min-h-screen font-sans text-gray-800">
    <!-- Hero Section -->
    <section class="relative w-full min-h-[40vh] md:min-h-[60vh] overflow-hidden flex items-center justify-center animate-fadeIn">
      <img :src="backgroundImage" alt="Admission" class="absolute inset-0 w-full h-full object-cover object-center" />
      <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>
      <div class="absolute inset-0 flex flex-col items-center justify-center z-10 px-2">
        <div class="backdrop-blur-md bg-white/30 rounded-2xl shadow-lg px-4 py-4 sm:px-8 sm:py-6 md:px-12 md:py-10 flex flex-col items-center w-full max-w-2xl border border-white/30">
          <h1 class="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg tracking-wide text-center mb-2 leading-tight">Admission</h1>
          <p class="text-base sm:text-lg md:text-2xl text-white drop-shadow text-center font-medium">Join our vibrant campus and shape your future with us!</p>
        </div>
      </div>
    </section>

    <!-- Navigation Tabs -->
    <div class="sticky top-0 z-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white/95 backdrop-blur-sm shadow-lg rounded-full -mt-6 py-1 px-2 flex justify-center overflow-x-auto no-scrollbar">
          <nav role="tablist" class="tabs flex space-x-1 md:space-x-2">
            <button
              v-for="(section, index) in sections"
              :key="index"
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

    <!-- Content Sections -->
    <section class="max-w-7xl mx-auto py-14 px-2 md:px-9 flex flex-col gap-12">
      <!-- Overview -->
      <div :id="'overview'" ref="overview" class="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg animate-fadeIn border border-gray-100">
        <div class="bg-gradient-to-r from-blue-900 to-blue-500 py-5 flex items-center justify-center gap-3 rounded-t-2xl">
          <span class="text-2xl">ℹ️</span>
          <h2 class="text-2xl md:text-3xl font-bold text-white text-center">Overview</h2>
        </div>
        <div class="p-8 md:p-10">
          <p class="text-lg md:text-xl font-medium text-gray-800 mb-6">{{ data.description.Overview }}</p>
          <p class="text-lg md:text-xl font-medium text-gray-800 mb-8">{{ data.description['Admissions at our Regional Campus'] }}</p>
          <div class="flex justify-center">
            <img :src="flowchartImage" alt="Admission Flowchart" class="w-full md:w-3/4 lg:w-1/2 rounded shadow" />
          </div>
        </div>
      </div>

      <!-- Courses Offered -->
      <div :id="'courses_offered'" ref="courses_offered" class="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg animate-fadeIn border border-gray-100">
        <div class="bg-gradient-to-r from-blue-900 to-blue-500 py-5 flex items-center justify-center gap-3 rounded-t-2xl">
          <span class="text-2xl">📚</span>
          <h2 class="text-2xl md:text-3xl font-bold text-white text-center">Courses Offered</h2>
        </div>
        <div class="p-8 md:p-10">
          <div v-for="(programs, category) in data.courses_offered" :key="category" class="mb-8">
            <h3 class="text-2xl font-semibold text-indigo-700 mb-3">{{ category }}</h3>
            <div class="overflow-x-auto">
              <table class="table-auto w-full border border-gray-300 text-left mb-4 rounded-xl overflow-hidden">
                <thead class="bg-gray-200">
                  <tr>
                    <th class="border px-4 py-2">S.No</th>
                    <th class="border px-4 py-2">Courses Offered</th>
                    <th class="border px-4 py-2">Intake</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="course in programs" :key="course['S.No']">
                    <td class="border px-4 py-2 text-center">{{ course['S.No'] }}</td>
                    <td class="border px-4 py-2">{{ course['Courses Offered'] }}</td>
                    <td class="border px-4 py-2 text-center">{{ course.Intake }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <!-- Eligibility Criteria -->
      <div :id="'eligibility'" ref="eligibility" class="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg animate-fadeIn border border-gray-100">
        <div class="bg-gradient-to-r from-blue-900 to-blue-500 py-5 flex items-center justify-center gap-3 rounded-t-2xl">
          <span class="text-2xl">✅</span>
          <h2 class="text-2xl md:text-3xl font-bold text-white text-center">Eligibility Criteria</h2>
        </div>
        <div class="p-8 md:p-10">
          <div v-for="(text, program) in data.eligibility_criteria" :key="program" class="mb-4">
            <h3 class="text-xl font-semibold text-indigo-700 mb-2">{{ program }}</h3>
            <p class="text-gray-800">{{ text }}</p>
          </div>
        </div>
      </div>

      <!-- Staff -->
      <div :id="'staff'" ref="staff" class="bg-white px-4 sm:px-6 lg:px-8 py-12 rounded-2xl shadow scroll-mt-28">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">Staff</h2>
        <div class="flex justify-center mb-10">
          <span class="block w-32 h-1 rounded-full bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-400 animate-glow-bar"></span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="staff in data.staff"
            :key="staff.name"
            class="admission-staff-card bg-white/60 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden flex flex-col items-center border border-blue-200 transition-all duration-300 text-center"
          >
            <div class="w-full flex justify-center pt-6">
              <div class="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg bg-white">
                <img
                  :src="`/${staff.image}`"
                  :alt="staff.name"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
            <div class="w-full bg-gradient-to-r from-blue-900 to-blue-500 py-3 px-2 flex flex-col items-center mt-6">
              <h3 class="text-base md:text-xl font-bold text-white font-sans tracking-wide">{{ staff.name }}</h3>
              <p class="text-xs md:text-base text-blue-100 font-sans">{{ staff.position }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import admissionData from '@/assets/admission.json';

export default {
  name: 'AdmissionSection',
  data() {
    return {
      data: admissionData[0],
      backgroundImage : '/offices.webp',
      flowchartImage: '/admission-flowchart.webp',
      staffImage: '/rathinasamy.webp',
      currentSection: 'overview',
      sections: [
        { key: 'overview', label: 'Overview' },
        { key: 'courses_offered', label: 'Courses Offered' },
        { key: 'eligibility', label: 'Eligibility Criteria' },
        { key: 'staff', label: 'Staff' },
        // You can add contact section later
      ],
      currentSection: 'overview',
    };
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  beforeUnmount() {
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
    },
  },
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
</style>
