<template>
    <div class=" flex-grow">
      <!-- Hero section -->
      <section class="bg-cover bg-center relative -z-10" :style="'background-image: url(http://192.168.72.231:5173/src/assets/library-hero.jpg)'">
        <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div class="container mx-auto py-16 text-white p-9 relative z-10">
          <h1 class="text-4xl font-bold mb-4">Library</h1>
          <p class="text-xl mb-8">Explore our extensive library resources and services, including books, e-journals, and more.</p>
        </div>
      </section>
  
      <!-- Horizontal Tabs -->
      <div class="sticky top-0 relative -z-10">
        <div class="relative">
          <div class="flex overflow-x-auto whitespace-nowrap tabs">
            <button
              v-for="(section, index) in sections"
             :key="index"
             @click="scrollToSection(section)"
             :class="{
               'bg-[#006994] text-white': activeSection === section,
               'text-black bg-white hover:bg-[#006994] hover:text-white': activeSection !== section
             }"
             class="font-semibold p-4 text-xl transition duration-300 ease-in-out whitespace-nowrap"
            >
             {{ section }}
            </button>
          </div>
         <div
           class="absolute bottom-0 left-0 h-1 bg-[#006994] transition-all duration-300 ease-in-out"
           :style="{ width: tabWidth + 'px', transform: `translateX(${tabOffset}px)` }"
         ></div>
        </div>
      </div>
  
      <!-- Content sections -->
      <section class="container mx-auto py-8 p-4">
        <div v-for="section in sections" :key="section" :ref="section" class="mb-16">
          <h2 class="text-2xl font-bold mb-4 p-2 bg-gradient-to-r from-blue-500 to-cyan-300">{{ section }}</h2>
          <div v-if="section === 'About Library'">
            <p class="text-xl mb-8">{{ libraryData.description }}</p>
          </div>
          <div v-if="section === 'E-journals'">
            <p>{{ libraryData.e_journals.description }}</p>
            <ul class="list-disc pl-4">
              <li v-for="feature in libraryData.e_journals.library_salient_features" :key="feature">{{ feature }}</li>
            </ul>
            <p>Library Services:</p>
            <ul class="list-disc pl-4">
              <li v-for="service in libraryData.e_journals.library_services" :key="service">{{ service }}</li>
            </ul>
          </div>
          <div v-if="section === 'Library Resources'">
            <p>{{ libraryData.library_resources.description }}</p>
            <table class="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th class="px-4 py-2 border-b">Books</th>
                  <th class="px-4 py-2 border-b">Reference Books</th>
                  <th class="px-4 py-2 border-b">CDs</th>
                  <th class="px-4 py-2 border-b">Donation Books</th>
                  <th class="px-4 py-2 border-b">Bound Volumes</th>
                  <th class="px-4 py-2 border-b">Project Reports</th>
                  <th class="px-4 py-2 border-b">Subscription to Journals</th>
                  <th class="px-4 py-2 border-b">Journal Binding Volumes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="px-4 py-2 border-b">{{ libraryData.library_resources.collection.books }}</td>
                  <td class="px-4 py-2 border-b">{{ libraryData.library_resources.collection.reference_books }}</td>
                  <td class="px-4 py-2 border-b">{{ libraryData.library_resources.collection.cds }}</td>
                  <td class="px-4 py-2 border-b">{{ libraryData.library_resources.collection.donation_books_collection }}</td>
                  <td class="px-4 py-2 border-b">{{ libraryData.library_resources.collection.bound_volumes_of_journals }}</td>
                  <td class="px-4 py-2 border-b">{{ libraryData.library_resources.collection.project_reports }}</td>
                  <td class="px-4 py-2 border-b">{{ libraryData.library_resources.collection.subscription_to_journals }}</td>
                  <td class="px-4 py-2 border-b">{{ libraryData.library_resources.journal_binding.volumes }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div v-if="section === 'Digital Library'">
            <p>{{ libraryData.digital_library.description }}</p>
            <ul class="list-disc pl-4">
              <li>{{ libraryData.digital_library.e_resources }}</li>
              <li>{{ libraryData.digital_library.multimedia }}</li>
            </ul>
          </div>
          <div v-if="section === 'Open Access Resources'">
            <ul class="list-disc pl-4">
              <li v-for="resource in libraryData.open_access_resources" :key="resource">{{ resource }}</li>
            </ul>
          </div>
          <div v-if="section === 'Library Sections'">
            <h3 class="text-lg font-semibold mb-2">Reading Hall</h3>
            <p>{{ libraryData.library_section.reading_hall }}</p>
            <h3 class="text-lg font-semibold mb-2">Reference Section</h3>
            <p>{{ libraryData.library_section.reference_section }}</p>
            <h3 class="text-lg font-semibold mb-2">Circulation Section</h3>
            <p>{{ libraryData.library_section.circulation_section }}</p>
            <h3 class="text-lg font-semibold mb-2">Periodical Section</h3>
            <p>{{ libraryData.library_section.periodical_section }}</p>
          </div>
          <div v-if="section === 'Faculty'">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div v-for="faculty in libraryData.faculty" :key="faculty.name" class="bg-white shadow-md rounded-md p-4">
                <h3 class="text-lg font-semibold">{{ faculty.name }}</h3>
                <p>{{ faculty.designation }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
<script>
import libraryData from '../assets/library.json';

export default {
  data() {
    return {
      libraryData: libraryData,
      sections: [
        'About Library',
        'E-journals',
        'Library Resources',
        'Digital Library',
        'Open Access Resources',
        'Library Sections',
        'Faculty'
      ],
      activeSection: 'About Library',
      tabWidth: 0,
      tabOffset: 0
    };
  },
  mounted() {
    this.handleScroll();
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.updateTabPosition);
    this.updateTabPosition();
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.updateTabPosition);
  },
  methods: {
    scrollToSection(section) {
      const element = this.$refs[section][0];
      if (element) {
        const offsetTop = element.offsetTop - 80; // Adjust if necessary
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        this.activeSection = section;
        this.updateTabPosition();
      }
    },
    handleScroll() {
      const scrollPosition = window.scrollY + 150; // Adjust based on the desired offset
      for (let section of this.sections) {
        const element = this.$refs[section][0];
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            this.activeSection = section;
            this.updateTabPosition();
            break;
          }
        }
      }
    },
    updateTabPosition() {
      this.$nextTick(() => {
        const activeTab = this.$el.querySelector(`button.bg-[#006994]`);
        if (activeTab) {
          const tabsContainer = this.$el.querySelector('.tabs');
          this.tabWidth = activeTab.offsetWidth;
          this.tabOffset = activeTab.offsetLeft - tabsContainer.scrollLeft;
        }
      });
    }
  }
};
</script>

<style scoped>
/* Custom Scrollbar */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Ensuring horizontal tabs are fully visible */
.tabs {
  overflow-x: auto;
  white-space: nowrap;
}
</style>
  