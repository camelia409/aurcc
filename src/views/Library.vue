<template>
  <main class="flex-grow">
    <!-- Hero Section -->
    <section class="relative w-full h-48 sm:h-60 md:h-80 lg:h-94 overflow-hidden bg-gradient-to-r from-indigo-700 to-blue-500">
      <img src="/library.webp" alt="Library" class="absolute inset-0 w-full h-full object-cover object-center" style="z-index:0;" />
      <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div class="container py-6 sm:py-8 md:py-16 lg:py-24 text-center relative z-10 px-3 sm:px-4 flex flex-col items-center justify-center h-full">
        <h1 class="mobile-text-xl sm:mobile-text-2xl lg:mobile-text-3xl xl:mobile-text-4xl font-extrabold mb-3 sm:mb-4 drop-shadow-lg font-serif text-white animate-fadeInUp">
          Library
        </h1>
        <p class="mobile-text-sm sm:mobile-text-base lg:mobile-text-lg max-w-full sm:max-w-3xl mx-auto mb-3 sm:mb-4 md:mb-6 lg:mb-8 leading-relaxed drop-shadow-lg font-sans text-white animate-fadeInUp">
          Explore our extensive library resources and services, including books, e-journals, and more.
        </p>
      </div>
    </section>

    <!-- Sticky Horizontal Tab Bar -->
    <div class="sticky top-0 z-20">
      <div class="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div class="bg-white/95 backdrop-blur-sm shadow-lg rounded-full -mt-4 sm:-mt-6 py-1 px-2 flex justify-center overflow-x-auto no-scrollbar">
          <nav role="tablist" class="tabs flex space-x-1 md:space-x-2">
            <button
              v-for="section in sections"
              :key="section"
              @click="scrollToSection(section)"
              :class="[
                'font-medium px-3 sm:px-4 md:px-5 py-2 md:py-3 rounded-full mobile-text-xs sm:mobile-text-sm lg:mobile-text-base transition duration-300 whitespace-nowrap',
                activeSection === section
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              ]"
            >
              {{ section }}
            </button>
          </nav>
        </div>
      </div>
    </div>

    <!-- Content sections -->
    <section class="mx-auto">
      <div class="w-full">
        <div
          v-for="section in sections"
          :key="section"
          :id="section.replace(/ /g, '')"
          class="px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl mx-auto py-8 sm:py-10 lg:py-12 bg-gradient-to-b from-gray-50 to-white"
        >
          <!-- About Library -->
          <div v-if="section === 'About Library'" class="grid grid-cols-1">
            <div class="mobile-card bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md">
              <div class="bg-gradient-to-r from-indigo-600 to-blue-500 py-4 sm:py-5 md:py-6">
                <h2 class="mobile-text-lg sm:mobile-text-xl lg:mobile-text-2xl xl:mobile-text-3xl text-white font-bold text-center">About Library</h2>
              </div>
              <div class="p-4 sm:p-6 md:p-8">
                <p class="mobile-text-base lg:mobile-text-lg xl:mobile-text-xl rounded-b-lg">{{ libraryData.description }}</p>
              </div>
            </div>
          </div>
          <!-- E-journals -->
          <div v-else-if="section === 'E-journals'" class="grid grid-cols-1">
            <div class="mobile-card bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md">
              <div class="bg-gradient-to-r from-indigo-600 to-blue-500 py-4 sm:py-5 md:py-6">
                <h2 class="mobile-text-lg sm:mobile-text-xl lg:mobile-text-2xl xl:mobile-text-3xl text-white font-bold text-center">E-journals</h2>
              </div>
              <div class="p-4 sm:p-6 md:p-8">
                <p class="mobile-text-base lg:mobile-text-lg xl:mobile-text-xl mb-3 sm:mb-4 rounded-b-lg">{{ libraryData.e_journals.description }}</p>
                <ul class="list-disc pl-4 sm:pl-5 mobile-text-sm lg:mobile-text-base xl:mobile-text-xl text-gray-900 mb-3 sm:mb-4">
                  <li v-for="feature in libraryData.e_journals.library_salient_features" :key="feature" class="mb-2">
                    {{ feature }}
                  </li>
                </ul>
                <p class="mobile-text-base lg:mobile-text-lg xl:mobile-text-xl font-semibold mb-2">Library Services:</p>
                <ul class="list-disc pl-4 sm:pl-5 mobile-text-sm lg:mobile-text-base xl:mobile-text-xl text-gray-900">
                  <li v-for="service in libraryData.e_journals.library_services" :key="service" class="mb-2">
                    {{ service }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- Library Resources -->
          <div v-else-if="section === 'Library Resources'" class="grid grid-cols-1">
            <div class="mobile-card bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md">
              <div class="bg-gradient-to-r from-indigo-600 to-blue-500 py-4 sm:py-5 md:py-6">
                <h2 class="mobile-text-lg sm:mobile-text-xl lg:mobile-text-2xl xl:mobile-text-3xl text-white font-bold text-center">Library Resources</h2>
              </div>
              <div class="p-4 sm:p-6 md:p-8">
                <p class="mobile-text-base lg:mobile-text-lg xl:mobile-text-xl mb-3 sm:mb-4 rounded-b-lg">{{ libraryData.library_resources.description }}</p>
                <!-- Mobile View: Cards -->
                <div class="md:hidden space-y-3 sm:space-y-4">
                  <div v-for="(value, key) in libraryData.library_resources.collection" :key="key" 
                    class="bg-gray-50 p-3 sm:p-4 rounded-lg">
                    <h4 class="font-semibold mobile-text-sm lg:mobile-text-base text-gray-700 mb-2">{{ formatTitle(key) }}</h4>
                    <p class="mobile-text-sm lg:mobile-text-base text-gray-900">{{ value }}</p>
                  </div>
                  <div class="bg-gray-50 p-3 sm:p-4 rounded-lg">
                    <h4 class="font-semibold mobile-text-sm lg:mobile-text-base text-gray-700 mb-2">Journal Binding Volumes</h4>
                    <p class="mobile-text-sm lg:mobile-text-base text-gray-900">{{ libraryData.library_resources.journal_binding.volumes }}</p>
                  </div>
                </div>
                <!-- Desktop View: Table -->
                <div class="hidden md:block overflow-x-auto">
                  <table class="min-w-full bg-white border border-gray-200">
                    <thead>
                      <tr>
                        <th class="px-4 py-2 border-b text-left">Books</th>
                        <th class="px-4 py-2 border-b text-left">Reference Books</th>
                        <th class="px-4 py-2 border-b text-left">CDs</th>
                        <th class="px-4 py-2 border-b text-left">Donation Books</th>
                        <th class="px-4 py-2 border-b text-left">Bound Volumes</th>
                        <th class="px-4 py-2 border-b text-left">Project Reports</th>
                        <th class="px-4 py-2 border-b text-left">Subscription to Journals</th>
                        <th class="px-4 py-2 border-b text-left">Journal Binding Volumes</th>
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
              </div>
            </div>
          </div>
          <!-- Digital Library -->
          <div v-else-if="section === 'Digital Library'" class="grid grid-cols-1">
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md">
              <div class="bg-gradient-to-r from-indigo-600 to-blue-500 py-6">
                <h2 class="text-2xl md:text-3xl text-white font-bold text-center">Digital Library</h2>
              </div>
              <div class="p-6 md:p-8">
                <p class="text-base md:text-xl mb-4">{{ libraryData.digital_library.description }}</p>
                <ul class="list-disc pl-5 text-sm md:text-lg text-gray-900 space-y-2">
                  <li>{{ libraryData.digital_library.e_resources }}</li>
                  <li>{{ libraryData.digital_library.multimedia }}</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- Open Access Resources -->
          <div v-else-if="section === 'Open Access Resources'" class="grid grid-cols-1">
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md">
              <div class="bg-gradient-to-r from-indigo-600 to-blue-500 py-6">
                <h2 class="text-2xl md:text-3xl text-white font-bold text-center">Open Access Resources</h2>
              </div>
              <div class="p-6 md:p-8">
                <ul class="list-disc pl-5 text-sm md:text-xl text-gray-900 space-y-2">
                  <li v-for="resource in libraryData.open_access_resources" :key="resource">{{ resource }}</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- Library Sections -->
          <div v-else-if="section === 'Library Sections'" class="grid grid-cols-1">
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md">
              <div class="bg-gradient-to-r from-indigo-600 to-blue-500 py-6">
                <h2 class="text-2xl md:text-3xl text-white font-bold text-center">Library Sections</h2>
              </div>
              <div class="p-6 md:p-8">
                <div class="space-y-4">
                  <div v-for="(content, title) in libraryData.library_section" :key="title" 
                    class="p-4 bg-gray-100 rounded-lg">
                    <h4 class="text-lg md:text-xl font-semibold mb-2">{{ formatTitle(title) }}</h4>
                    <p class="text-sm md:text-base">{{ content }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Faculty -->
          <div v-else-if="section === 'Faculty'" class="grid grid-cols-1">
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md">
              <div class="bg-gradient-to-r from-indigo-600 to-blue-500 py-6">
                <h2 class="text-2xl md:text-3xl text-white font-bold text-center">Faculty</h2>
              </div>
              <div class="p-6 md:p-8">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                  <div
                    v-for="faculty in libraryData.faculty"
                    :key="faculty.name"
                    class="bg-gray-50 rounded-md shadow p-4 hover:bg-gray-100 transition-colors duration-200 flex flex-col items-center"
                  >
                    <img
                      :src="`/${faculty.img}`"
                      :alt="faculty.name + ' photo'"
                      class="w-20 h-20 md:w-28 md:h-28 rounded-full object-cover border-4 border-indigo-100 shadow mb-2"
                      @error="event.target.src = '/default-avatar.png'"
                    />
                    <h4 class="text-lg md:text-xl font-semibold mb-2">{{ faculty.name }}</h4>
                    <p class="text-sm md:text-base text-gray-700">{{ faculty.designation }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>


<script>
import libraryData from '../assets/library.json';

export default {
  data() {
    return {
      libraryData,
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
      loading: true, // New loading state
      error: null // New error state
    };
  },
  mounted() {
    this.fetchLibraryData();
  },
  methods: {
    async fetchLibraryData() {
      try {
        // Simulate fetching data
        await new Promise(resolve => setTimeout(resolve, 1000));
        this.loading = false; // Data loaded successfully
      } catch (err) {
        this.error = 'Failed to load library data.'; // Set error message
        this.loading = false; // Stop loading
      }
    },
    scrollToSection(section) {
      const element = document.getElementById(section.replace(/ /g, ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      this.activeSection = section;
    },
    formatTitle(str) {
      return str
        .split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    }
  }
};
</script>

<style scoped>

/* Additional styles */
</style>
