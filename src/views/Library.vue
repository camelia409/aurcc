<template>
  <main class="flex-grow">
    <!-- Hero Section -->
    <section 
      class="bg-cover md:bg-center relative -z-10 w-full h-60 sm:h-80 md:h-94 animate-fadeIn"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
    >
      <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div class="container py-8 md:py-24 text-center relative z-10 px-4">
        <h1 class="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 drop-shadow-lg font-serif text-white animate-fadeInUp">
          Library
        </h1>
        <p class="text-sm sm:text-base md:text-lg max-w-full sm:max-w-3xl mx-auto mb-4 md:mb-8 leading-relaxed drop-shadow-lg font-sans text-white animate-fadeInUp">
          Explore our extensive library resources and services, including books, e-journals, and more.
        </p>
      </div>
    </section>

    <!-- Vertical Tabs Section -->
    <section class="mx-auto py-6 md:py-12 px-4 md:px-10 bg-indigo-100 rounded-lg animate-popIn">
      <div class="relative flex flex-col px-8 md:flex-row">
        <!-- Mobile Section Dropdown -->
        <div class="md:hidden md:block flex-shrink-0 w-64 bg-gradient-to-r from-[#21209c] to-blue-600 rounded-lg shadow-lg p-4 mb-4 md:mb-0 md:mr-4 top-4 h-max">
          <div class="relative p-4 rounded-lg text-center">
            <h2 class="text-2xl font-serif text-white font-semibold animate-slideIn">Sections</h2>
          </div>
          <div class="space-y-2 font-serif">
            <button
              v-for="(section, index) in sections"
              :key="index"
              @click="scrollToSection(section)"
              :class="{'bg-yellow-400 text-[#23120b]': activeSection === section, 'bg-gray-100': activeSection !== section}"
              class="w-full py-2 px-4 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b] transition-colors duration-200 animate-slideIn"
            >
              {{ section }}
            </button>
          </div>
        </div>

        <!-- Desktop Vertical Tabs -->
        <div class="hidden md:block flex-shrink-0 w-64 bg-gradient-to-r from-[#21209c] to-blue-600 rounded-lg shadow-lg p-4 mb-4 md:mb-0 md:mr-4 sticky top-4 h-max">
          <div class="relative p-4 rounded-lg text-center">
            <h2 class="text-2xl font-serif text-white font-semibold animate-slideIn">Sections</h2>
          </div>
          <div class="space-y-2 font-serif">
            <button
              v-for="(section, index) in sections"
              :key="index"
              @click="scrollToSection(section)"
              :class="{'bg-yellow-400 text-[#23120b]': activeSection === section, 'bg-gray-100': activeSection !== section}"
              class="w-full py-2 px-4 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b] transition-colors duration-200 animate-slideIn"
            >
              {{ section }}
            </button>
          </div>
        </div>

        <!-- Tab Content -->
        <div class="w-full px-0 md:px-10  font-serif min-h-[400px] max-h-[600px] md:max-h-[800px] overflow-y-auto">
           <!-- About Library Section -->
            <div v-if="activeSection === 'About Library'" ref="AboutLibrary" class="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-16 animate-fadeIn">
              <h3 class="text-2xl md:text-3xl font-bold text-black mb-4">About Library</h3>
              <p class="text-base text-lg md:text-xl rounded-b-lg">{{ libraryData.description }}</p>
            </div>

            <!-- E-journals Section -->
            <div v-if="activeSection === 'E-journals'" ref="EJournals" class="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-16 animate-fadeIn">
              <h3 class="text-2xl md:text-3xl font-bold text-black mb-4">E-journals</h3>
              <p class="text-base text-lg md:text-xl mb-4 rounded-b-lg">{{ libraryData.e_journals.description }}</p>
              <ul class="list-disc pl-5 text-sm md:text-xl text-gray-900 mb-4">
                <li v-for="feature in libraryData.e_journals.library_salient_features" :key="feature" class="mb-2">
                  {{ feature }}
                </li>
              </ul>
              <p class="text-lg md:text-xl font-semibold mb-2">Library Services:</p>
              <ul class="list-disc pl-5 text-sm md:text-xl text-gray-900">
                <li v-for="service in libraryData.e_journals.library_services" :key="service" class="mb-2">
                  {{ service }}
                </li>
              </ul>
            </div>

            <!-- Other sections... -->
            <!-- Library Resources Section with Responsive Table -->
          <div v-if="activeSection === 'Library Resources'" ref="LibraryResources" class="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-16 animate-fadeIn">
            <h3 class="text-2xl md:text-3xl font-bold text-black mb-4">Library Resources</h3>
            <p class="text-base md:text-xl mb-4 rounded-b-lg">{{ libraryData.library_resources.description }}</p>
            
            <!-- Mobile View: Cards -->
            <div class="md:hidden space-y-4">
              <div v-for="(value, key) in libraryData.library_resources.collection" :key="key" 
                class="bg-gray-50 p-4 rounded-lg">
                <h4 class="font-semibold text-gray-700 mb-2">{{ formatTitle(key) }}</h4>
                <p class="text-gray-900">{{ value }}</p>
              </div>
              <div class="bg-gray-50 p-4 rounded-lg">
                <h4 class="font-semibold text-gray-700 mb-2">Journal Binding Volumes</h4>
                <p class="text-gray-900">{{ libraryData.library_resources.journal_binding.volumes }}</p>
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

          <!-- Digital Library Section -->
          <div v-if="activeSection === 'Digital Library'" ref="DigitalLibrary" class="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-16 animate-fadeIn">
            <h3 class="text-2xl md:text-3xl font-bold text-black mb-4">Digital Library</h3>
            <p class="text-base md:text-xl mb-4">{{ libraryData.digital_library.description }}</p>
            <ul class="list-disc pl-5 text-sm md:text-lg text-gray-900 space-y-2">
              <li>{{ libraryData.digital_library.e_resources }}</li>
              <li>{{ libraryData.digital_library.multimedia }}</li>
            </ul>
          </div>

          <!-- Open Access Resources Section -->
          <div v-if="activeSection === 'Open Access Resources'" ref="OpenAccessResources" class="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-16 animate-fadeIn">
            <h3 class="text-2xl md:text-3xl font-bold text-black mb-4">Open Access Resources</h3>
            <ul class="list-disc pl-5 text-sm md:text-xl text-gray-900 space-y-2">
              <li v-for="resource in libraryData.open_access_resources" :key="resource">{{ resource }}</li>
            </ul>
          </div>

          <!-- Library Sections -->
          <div v-if="activeSection === 'Library Sections'" ref="LibrarySections" class="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-16 animate-fadeIn">
            <h3 class="text-2xl md:text-3xl font-bold text-black mb-4">Library Sections</h3>
            <div class="space-y-4">
              <div v-for="(content, title) in libraryData.library_section" :key="title" 
                class="p-4 bg-gray-100 rounded-lg">
                <h4 class="text-lg md:text-xl font-semibold mb-2">{{ formatTitle(title) }}</h4>
                <p class="text-sm md:text-base">{{ content }}</p>
              </div>
            </div>
          </div>

          <!-- Faculty Section -->
          <div v-if="activeSection === 'Faculty'" ref="Faculty" class="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-16 animate-fadeIn">
            <h3 class="text-2xl md:text-3xl font-bold text-black mb-4">Faculty</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
              <div
                v-for="faculty in libraryData.faculty"
                :key="faculty.name"
                class="bg-gray-50 rounded-md shadow p-4 animate-fadeIn hover:bg-gray-100 transition-colors duration-200"
              >
                <h4 class="text-lg md:text-xl font-semibold mb-2">{{ faculty.name }}</h4>
                <p class="text-sm md:text-base text-gray-700">{{ faculty.designation }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>


<script>
import backgroundImage from '@/assets/library.webp';
import libraryData from '../assets/library.json';

export default {
  data() {
    return {
      backgroundImage,
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
      const element = this.$refs[section.replace(/ /g, '')];
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
