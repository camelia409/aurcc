<template>
  <main class="font-serif text-gray-800">
    <!-- Hero Section -->
    <section
      class="w-full h-40 sm:h-80 md:h-96 bg-cover bg-center relative"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
    >
      <div class="absolute inset-0 bg-black opacity-30"></div>
      <div class="flex items-center justify-center h-full relative z-10 px-4">
        <h1 class="md:text-5xl text-2xl font-extrabold text-white drop-shadow-lg text-center">
          ADMISSION
        </h1>
      </div>
    </section>

    <!-- Navigation Tabs -->
    <div class="sticky top-0 z-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          class="bg-white/95 backdrop-blur-sm shadow-lg rounded-full -mt-6 py-1 px-2 flex justify-center overflow-x-auto no-scrollbar"
        >
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
    <section class="space-y-16 py-10 md:py-16 px-4 sm:px-6 lg:px-8 bg-indigo-50">
      <!-- Overview -->
      <div :id="'overview'" ref="overview" class="section-box">
        <h2 class="section-title">Overview</h2>
        <p class="mb-4">{{ data.description.Overview }}</p>
        <p class="mb-6">{{ data.description['Admissions at our Regional Campus'] }}</p>
        <div class="flex justify-center">
          <img :src="flowchartImage" alt="Admission Flowchart" class="w-full md:w-3/4 lg:w-1/2 rounded shadow" />
        </div>
      </div>

      <!-- Courses Offered -->
      <div :id="'courses_offered'" ref="courses_offered" class="section-box">
        <h2 class="section-title">Courses Offered</h2>
        <div v-for="(programs, category) in data.courses_offered" :key="category" class="mb-8">
          <h3 class="text-2xl font-semibold text-indigo-700 mb-3">{{ category }}</h3>
          <div class="overflow-x-auto">
            <table class="table-auto w-full border border-gray-300 text-left mb-4">
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

      <!-- Eligibility Criteria -->
      <div :id="'eligibility'" ref="eligibility" class="section-box">
        <h2 class="section-title">Eligibility Criteria</h2>
        <div v-for="(text, program) in data.eligibility_criteria" :key="program" class="mb-4">
          <h3 class="text-xl font-semibold text-indigo-700 mb-2">{{ program }}</h3>
          <p>{{ text }}</p>
        </div>
      </div>

      <!-- Staff -->
      <div :id="'staff'" ref="staff" class="bg-white px-4 sm:px-6 lg:px-8 py-12 rounded-2xl shadow scroll-mt-28">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">Staff</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="staff in data.staff"
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
              <p class="text-blue-600 font-medium">{{ staff.position }}</p>
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
      backgroundImage: '/offices.webp',
      flowchartImage: '/admission-flowchart.webp',
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
</style>
