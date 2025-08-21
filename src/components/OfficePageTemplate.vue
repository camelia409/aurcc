<template>
  <main class="bg-gradient-to-br from-indigo-100 via-blue-50 to-white min-h-screen font-sans text-gray-800">
    <!-- Hero Section -->
    <section class="relative w-full min-h-[35vh] sm:min-h-[40vh] md:min-h-[60vh] overflow-hidden flex items-center justify-center animate-fadeIn">
      <img :src="heroImage" :alt="officeName" class="absolute inset-0 w-full h-full object-cover object-center" />
      <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>
      <div class="absolute inset-0 flex flex-col items-center justify-center z-10 px-3 sm:px-4">
        <div class="backdrop-blur-md bg-white/30 rounded-xl sm:rounded-2xl shadow-lg px-3 py-3 sm:px-6 sm:py-4 md:px-8 md:py-6 lg:px-12 lg:py-10 flex flex-col items-center w-full max-w-xs sm:max-w-lg md:max-w-2xl border border-white/30">
          <h1 class="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold text-white drop-shadow-lg tracking-wide text-center mb-2 leading-tight">{{ officeName }}</h1>
          <p class="text-sm sm:text-base md:text-lg lg:text-2xl text-white drop-shadow text-center font-medium">{{ heroSubtitle }}</p>
        </div>
      </div>
    </section>

    <!-- Sticky Navigation Tabs -->
    <div class="sticky top-0 z-20">
      <div class="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div class="bg-white/95 backdrop-blur-sm shadow-lg rounded-full -mt-4 sm:-mt-6 py-1 px-2 flex justify-center overflow-x-auto no-scrollbar">
          <nav role="tablist" class="tabs flex space-x-1 sm:space-x-2">
            <button
              v-for="section in sections"
              :key="section.key"
              @click="scrollToSection(section.key)"
              :class="[
                'font-medium px-3 sm:px-4 md:px-5 py-2 md:py-3 rounded-full text-xs sm:text-sm md:text-base transition duration-300 whitespace-nowrap touch-manipulation',
                currentSection === section.key
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'text-gray-700 hover:bg-gray-100 hover:shadow-md'
              ]"
            >
              {{ section.label }}
            </button>
          </nav>
        </div>
      </div>
    </div>

    <!-- Content Sections -->
    <section class="max-w-7xl mx-auto py-8 sm:py-10 md:py-14 px-3 sm:px-4 md:px-6 lg:px-9 flex flex-col gap-8 sm:gap-10 md:gap-12">
      <slot name="content"></slot>
    </section>

    <!-- Contact Button -->
    <div class="flex justify-center mt-2 mb-6 sm:mb-8 px-4">
      <a :href="`mailto:${contactEmail}`" class="apply-contact-btn bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-bold py-3 px-6 sm:px-8 rounded-full shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all text-base sm:text-lg md:text-xl transform hover:scale-105 touch-manipulation w-full sm:w-auto text-center">
        {{ contactButtonText }}
      </a>
    </div>
  </main>
</template>

<script>
export default {
  name: 'OfficePageTemplate',
  props: {
    officeName: {
      type: String,
      required: true
    },
    heroSubtitle: {
      type: String,
      required: true
    },
    heroImage: {
      type: String,
      default: '/offices.webp'
    },
    sections: {
      type: Array,
      required: true,
      // Each section should have: { key: string, label: string }
    },
    contactEmail: {
      type: String,
      required: true
    },
    contactButtonText: {
      type: String,
      default: 'Apply Now / Contact Us'
    }
  },
  data() {
    return {
      currentSection: this.sections[0]?.key || ''
    };
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
    // Set initial active section
    this.currentSection = this.sections[0]?.key || '';
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    scrollToSection(sectionKey) {
      this.currentSection = sectionKey;
      const element = document.getElementById(sectionKey);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
      this.$emit('section-change', sectionKey);
    },
    onScroll() {
      // Find which section is currently in view
      const sections = this.sections.map(s => {
        const el = document.getElementById(s.key);
        return el ? { key: s.key, top: el.getBoundingClientRect().top } : null;
      }).filter(Boolean);

      if (sections.length > 0) {
        const closest = sections.reduce((a, b) => 
          Math.abs(b.top) < Math.abs(a.top) ? b : a, sections[0]);
        
        if (closest && this.currentSection !== closest.key) {
          this.currentSection = closest.key;
          this.$emit('section-change', closest.key);
        }
      }
    }
  }
};
</script>

<style scoped>
.animate-fadeIn {
  animation: fadeIn 1.2s ease-out forwards;
}

@keyframes fadeIn {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.apply-contact-btn {
  display: inline-block;
  margin-top: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 24px 0 rgba(59,130,246,0.12);
}
</style>
