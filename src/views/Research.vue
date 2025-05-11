<template>
  <main class="flex-grow font-serif">
    <!-- Hero Section -->
    <section
      class="bg-cover bg-center relative w-full h-40 sm:h-80 md:h-94"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
    >
      <div class="absolute inset-0 bg-black opacity-20"></div>
      <div class="flex items-center justify-center h-full relative z-10 px-4">
        <h1 class="md:text-4xl text-xl font-extrabold text-white drop-shadow-lg font-serif text-center">
          RESEARCH CELL
        </h1>
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
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12" ref="contentWrapper">
      <!-- Description -->
      <div id="description" ref="description" class="bg-white rounded-2xl shadow p-6 md:p-10 scroll-mt-28">
        <h2 class="text-3xl font-bold mb-4 text-indigo-700">Description</h2>
        <ul class="list-disc pl-6 text-gray-800 text-lg space-y-2 leading-relaxed break-words">
          <li
            v-for="(desc, index) in researchData.description"
            :key="index"
            class="whitespace-pre-wrap break-words"
          >
            {{ desc }}
          </li>
        </ul>
      </div>

      <!-- Supervisors Section -->
      <div id="supervisors" ref="supervisors" class="bg-white shadow rounded-xl p-6 scroll-mt-28">
        <h2 class="text-xl font-semibold mb-4">Scholars Details by Department</h2>
        <div class="overflow-auto">
          <table class="min-w-full text-sm border">
            <thead class="bg-gray-100">
              <tr>
                <th class="px-4 py-2 border">Department</th>
                <th class="px-4 py-2 border">PhD Completed (FT)</th>
                <th class="px-4 py-2 border">PhD Completed (PT)</th>
                <th class="px-4 py-2 border">PhD Registered (FT)</th>
                <th class="px-4 py-2 border">PhD Registered (PT)</th>
                <th class="px-4 py-2 border">Completed FT+PT</th>
                <th class="px-4 py-2 border">Registered FT+PT</th>
                <th class="px-4 py-2 border">Overall FT+PT</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(dept, index) in researchData.supervisors"
                :key="index"
                class="hover:bg-gray-50"
              >
                <td class="px-4 py-2 border">{{ dept.department }}</td>
                <td class="px-4 py-2 border text-center">{{ dept.phdCompletedFullTime }}</td>
                <td class="px-4 py-2 border text-center">{{ dept.phdCompletedPartTime }}</td>
                <td class="px-4 py-2 border text-center">{{ dept.phdRegisteredFullTime }}</td>
                <td class="px-4 py-2 border text-center">{{ dept.phdRegisteredPartTime }}</td>
                <td class="px-4 py-2 border text-center">{{ dept.completedFTPT }}</td>
                <td class="px-4 py-2 border text-center">{{ dept.registeredFTPT }}</td>
                <td class="px-4 py-2 border text-center">{{ dept.overallFTPT }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import researchData from '@/assets/research-cell.json';

export default {
  data() {
    return {
      researchData,
      currentSection: 'description',
      backgroundImage: '/offices.webp',
      currentYear: new Date().getFullYear(),
      sections: [
        { label: 'Description', key: 'description' },
        { label: 'Supervisors', key: 'supervisors' }
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
</style>
