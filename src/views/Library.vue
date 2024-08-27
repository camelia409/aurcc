<template>
  <main class="flex-grow">
    <!-- Hero Section -->
    <section 
  class="hero-section bg-cover py-4 relative -z-10" 
  :style="{ backgroundImage: `url(${backgroundImage})` }"
>
  <!-- Overlay for background dimming -->
  <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
  
  <!-- Content container -->
  <div class="container py-8 md:py-16 text-center relative z-10 px-4">
    <!-- Title with responsive text sizes -->
    <h1 class="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 drop-shadow-lg font-serif text-white">
      Library
    </h1>
    <!-- Paragraph with responsive text sizes and width -->
    <p class="text-sm sm:text-base md:text-lg max-w-full sm:max-w-3xl mx-auto mb-4 md:mb-8 leading-relaxed drop-shadow-lg font-sans text-white">
      Explore our extensive library resources and services, including books, e-journals, and more.
    </p>
  </div>
</section>
<!-- Vertical Tabs Section -->
<section class="mx-auto py-12 px-10 bg-gray-100 rounded-lg">
  <div class="relative flex flex-col md:flex-row">
    <!-- Vertical Tabs -->
    <div class="flex-shrink-0 w-full h-max md:w-64 bg-gradient-to-r from-[#21209c] to-blue-600 rounded-lg shadow-lg p-4 mb-4 md:mb-0 md:mr-4">
      <div class="relative p-4 rounded-lg text-center">
        <h2 class="text-2xl font-serif text-white font-semibold">Sections</h2>
      </div>
      <div class="space-y-2 font-serif">
        <button
          v-for="(section, index) in sections"
          :key="index"
          @click="scrollToSection(section)"
          :class="{'bg-yellow-400 text-[#23120b]': activeSection === section, 'bg-gray-100': activeSection !== section}"
          class="w-full py-2 px-4 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b]"
        >
          {{ section }}
        </button>
      </div>
    </div>

    <!-- Tab Content -->
    <div class="w-full px-10 font-serif min-h-[400px] max-h-[400px] overflow-y-auto">
      <div v-if="activeSection === 'About Library'" ref="AboutLibrary" class="bg-white rounded-lg shadow-lg p-6 mb-16">
        <h3 class="text-2xl md:text-4xl font-bold text-black mb-4">About Library</h3>
        <p class="text-xl">{{ libraryData.description }}</p>
      </div>

      <div v-if="activeSection === 'E-journals'" ref="EJournals" class="bg-white rounded-lg shadow-lg p-6 mb-16">
        <h3 class="text-2xl md:text-4xl font-bold text-black mb-4">E-journals</h3>
        <p class="text-xl mb-4">{{ libraryData.e_journals.description }}</p>
        <ul class="list-disc pl-5 text-base md:text-lg text-gray-900 mb-4">
          <li v-for="feature in libraryData.e_journals.library_salient_features" :key="feature">{{ feature }}</li>
        </ul>
        <p class="text-xl font-semibold mb-2">Library Services:</p>
        <ul class="list-disc pl-5 text-base md:text-lg text-gray-900">
          <li v-for="service in libraryData.e_journals.library_services" :key="service">{{ service }}</li>
        </ul>
      </div>

      <div v-if="activeSection === 'Library Resources'" ref="LibraryResources" class="bg-white rounded-lg shadow-lg p-6 mb-16">
        <h3 class="text-2xl md:text-4xl font-bold text-black mb-4">Library Resources</h3>
        <p class="text-xl mb-4">{{ libraryData.library_resources.description }}</p>
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

      <div v-if="activeSection === 'Digital Library'" ref="DigitalLibrary" class="bg-white rounded-lg shadow-lg p-6 mb-16">
        <h3 class="text-2xl md:text-4xl font-bold text-black mb-4">Digital Library</h3>
        <p class="text-xl mb-4">{{ libraryData.digital_library.description }}</p>
        <ul class="list-disc pl-5 text-base md:text-lg text-gray-900">
          <li>{{ libraryData.digital_library.e_resources }}</li>
          <li>{{ libraryData.digital_library.multimedia }}</li>
        </ul>
      </div>

      <div v-if="activeSection === 'Open Access Resources'" ref="OpenAccessResources" class="bg-white rounded-lg shadow-lg p-6 mb-16">
        <h3 class="text-2xl md:text-4xl font-bold text-black mb-4">Open Access Resources</h3>
        <ul class="list-disc pl-5 text-base md:text-lg text-gray-900">
          <li v-for="resource in libraryData.open_access_resources" :key="resource">{{ resource }}</li>
        </ul>
      </div>

      <div v-if="activeSection === 'Library Sections'" ref="LibrarySections" class="bg-white rounded-lg shadow-lg p-6 mb-16">
        <h3 class="text-2xl md:text-4xl font-bold text-black mb-4">Library Sections</h3>
        <div class="space-y-4">
          <div>
            <h4 class="text-xl font-semibold mb-2">Reading Hall</h4>
            <p>{{ libraryData.library_section.reading_hall }}</p>
          </div>
          <div>
            <h4 class="text-xl font-semibold mb-2">Reference Section</h4>
            <p>{{ libraryData.library_section.reference_section }}</p>
          </div>
          <div>
            <h4 class="text-xl font-semibold mb-2">Circulation Section</h4>
            <p>{{ libraryData.library_section.circulation_section }}</p>
          </div>
          <div>
            <h4 class="text-xl font-semibold mb-2">Periodical Section</h4>
            <p>{{ libraryData.library_section.periodical_section }}</p>
          </div>
        </div>
      </div>

      <div v-if="activeSection === 'Faculty'" ref="Faculty" class="bg-white rounded-lg shadow-lg p-6 mb-16">
        <h3 class="text-2xl md:text-4xl font-bold text-black mb-4">Faculty</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            v-for="faculty in libraryData.faculty"
            :key="faculty.name"
            class="bg-gray-100 rounded-md shadow p-4"
          >
            <h4 class="text-xl font-semibold mb-2">{{ faculty.name }}</h4>
            <p>{{ faculty.designation }}</p>
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
      activeSection: 'About Library'
    };
  },
  methods: {
    scrollToSection(section) {
      const element = this.$refs[section.replace(/ /g, '')];
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 60, // Adjust offset as needed
          behavior: 'smooth'
        });
      }
      this.activeSection = section;
    }
  }
};
</script>

<style scoped>
.hero-section {
  height: 40vh; /* Adjust height to show less of the image */
  background-size: cover;
  background-position: center;
}
</style>