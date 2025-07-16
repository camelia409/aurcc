<template>
  <main class="flex-grow font-serif text-gray-800">
    <!-- Hero Section -->
    <section
      class="bg-cover bg-center relative w-full h-40 sm:h-80 md:h-96 animate-fadeIn"
      :style="{ backgroundImage: 'url(/offices.webp)' }"
    >
      <div class="absolute inset-0 bg-black opacity-20"></div>
      <div class="flex items-center justify-center h-full relative z-10 px-4">
        <h1 class="md:text-4xl text-2xl font-extrabold text-white drop-shadow-lg text-center animate-slideIn">
          Entrepreneurship Development Cell
        </h1>
      </div>
    </section>

    <!-- Sticky Tabs -->
    <div class="sticky top-0 z-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white/95 backdrop-blur-sm shadow-lg rounded-full -mt-6 py-1 px-2 flex justify-center overflow-x-auto no-scrollbar">
          <nav role="tablist" class="tabs flex space-x-1 md:space-x-2">
            <button
              v-for="section in sections"
              :key="section.id"
              @click="scrollTo(section.id)"
              :class="{
                'bg-indigo-600 text-white': activeSection === section.id,
                'text-gray-700 hover:bg-gray-100': activeSection !== section.id
              }"
              class="font-medium px-4 md:px-5 py-2 md:py-3 rounded-full text-sm md:text-base transition duration-300 whitespace-nowrap"
            >
              {{ section.label }}
            </button>
          </nav>
        </div>
      </div>
    </div>

    <!-- Content Sections -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <!-- Description -->
      <div id="description" class="bg-white rounded-2xl shadow p-6 md:p-10 scroll-mt-28">
        <h2 class="text-3xl font-bold mb-4 text-indigo-700">Description</h2>
        <p class="text-lg leading-relaxed text-gray-800">
          Entrepreneurship is the person who plays a certain price for a product to resell it at an uncertain price, hereby making decisions about obtaining and using the resources while consequently admitting the risk of enterprise.
        </p>
      </div>

      <!-- Objectives -->
      <div id="objectives" class="bg-white rounded-2xl shadow p-6 md:p-10 scroll-mt-28">
        <h2 class="text-3xl font-bold mb-4 text-indigo-700">Objectives</h2>
        <ul class="list-disc pl-6 space-y-2 text-lg text-gray-800">
          <li v-for="objective in data.description.objectives" :key="objective">{{ objective }}</li>
        </ul>
      </div>

      <!-- Key Activities -->
      <div id="key_activities" class="bg-white rounded-2xl shadow p-6 md:p-10 scroll-mt-28">
        <h2 class="text-3xl font-bold mb-4 text-indigo-700">Key Activities</h2>
        <div class="space-y-6">
          <div
            v-for="activity in data.description.key_activities"
            :key="activity.name"
            class="bg-indigo-50 rounded-xl p-5 shadow"
          >
            <h4 class="text-xl font-semibold mb-2">{{ activity.name }}</h4>
            <p class="text-gray-700 mb-1"><strong>Location:</strong> {{ activity.location }}</p>
            <p class="text-gray-700"><strong>Details:</strong> {{ activity.details }}</p>
          </div>
        </div>
      </div>

      <!-- MOU -->
      <div id="mou" class="bg-white rounded-2xl shadow p-6 md:p-10 scroll-mt-28">
        <h2 class="text-3xl font-bold mb-4 text-indigo-700">MOUs</h2>
        <ul class="list-disc pl-6 space-y-2 text-lg text-gray-800">
          <li v-for="mou in data.MOU" :key="mou">{{ mou }}</li>
        </ul>
      </div>

      <!-- Links -->
      <div id="links" class="bg-white rounded-2xl shadow p-6 md:p-10 scroll-mt-28">
        <h2 class="text-3xl font-bold mb-4 text-indigo-700">Useful Links</h2>
        <ul class="list-disc pl-6 space-y-2 text-lg text-blue-700">
          <li v-for="link in data.links" :key="link">
            <a :href="'http://' + link" target="_blank" class="hover:underline">{{ link }}</a>
          </li>
        </ul>
      </div>

      <!-- Office Bearers -->
<div id="office_bearers" class="bg-white rounded-2xl shadow p-6 md:p-10 scroll-mt-28">
  <h2 class="text-3xl font-bold text-center mb-10 text-gray-900">Staffs</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div
      v-for="member in data.office_bearers"
      :key="member.email"
      class="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col border border-gray-100"
    >
      <div class="bg-gradient-to-r from-blue-500 to-blue-300 h-2"></div>
      <div class="p-6 text-center">
        <!-- ✅ Image Placeholder -->
        <div class="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg mb-4 bg-gray-200">
          <img
            v-if="member.image"
            :src="member.image"
            alt="Profile"
            class="w-full h-full object-cover"
          />
          <div v-else class="flex items-center justify-center h-full w-full text-gray-500 text-xl font-semibold">
            {{ member.name.split(' ').map(n => n[0]).join('') }}
          </div>
        </div>

        <h4 class="text-xl font-bold text-gray-800 mb-1">{{ member.name }}</h4>
        <p class="text-blue-600 font-medium mb-1">{{ member.position }}</p>
        <p class="text-gray-700 mb-1">
          <strong>Email:</strong>
          <a :href="'mailto:' + member.email" class="hover:underline text-blue-600">{{ member.email }}</a>
        </p>
        <p class="text-gray-700"><strong>Organization:</strong> {{ member.organization }}</p>
      </div>
    </div>
  </div>
</div>

    </section>
  </main>
</template>

<script>
import data from '@/assets/ED-cell.json';

export default {
  name: 'EDCellSection',
  data() {
    return {
      data,
      sections: [
        { id: 'description', label: 'Description' },
        { id: 'objectives', label: 'Objectives' },
        { id: 'key_activities', label: 'Key Activities' },
        { id: 'mou', label: 'MOUs' },
        { id: 'links', label: 'Links' },
        { id: 'office_bearers', label: 'Staffs' },
      ],
      activeSection: '',
    };
  },
  methods: {
    scrollTo(sectionId) {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        this.activeSection = sectionId;
      }
    },
    handleScroll() {
      const sections = this.sections.map((s) => {
        const el = document.getElementById(s.id);
        return el ? { id: s.id, top: el.getBoundingClientRect().top } : null;
      }).filter(Boolean);

      const closest = sections.reduce((a, b) => Math.abs(b.top) < Math.abs(a.top) ? b : a, sections[0]);
      if (closest) this.activeSection = closest.id;
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
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
