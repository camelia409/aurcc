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
          DGATE CELL
        </h1>
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
      <!-- Overview -->
      <div id="overview" class="bg-white rounded-2xl shadow p-6 md:p-10 scroll-mt-28">
        <h2 class="text-3xl font-bold mb-4 text-indigo-700">Overview</h2>
        <p class="text-lg leading-relaxed text-gray-800">{{ data.description.DGATE }}</p>
      </div>

      <!-- Activities -->
      <div id="activities" class="bg-white rounded-2xl shadow p-6 md:p-10 scroll-mt-28">
        <h2 class="text-3xl font-bold mb-6 text-indigo-700">Activities</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 class="font-semibold text-lg mb-2">Curricular Activities</h4>
            <ul class="list-disc pl-5 space-y-1">
              <li
                v-for="activity in data.description.activities.curricular_activities"
                :key="activity.name"
              >
                <strong class="text-blue-700 mr-2">{{ activity.date }}:</strong>{{ activity.name }}
              </li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-lg mb-2">Social Responsibilities</h4>
            <ul class="list-disc pl-5 space-y-1">
              <li
                v-for="activity in data.description.activities.social_responsibilities"
                :key="activity.event"
              >
                <strong class="text-blue-700 mr-2">{{ activity.date }}:</strong>{{ activity.event }}
              </li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-lg mb-2">Internal Activities</h4>
            <ul class="list-disc pl-5 space-y-1">
              <li v-for="activity in data.description.activities.internal_activities" :key="activity">
                {{ activity }}
              </li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-lg mb-2">External Activities</h4>
            <ul class="list-disc pl-5 space-y-1">
              <li v-for="activity in data.description.activities.external_activities" :key="activity">
                {{ activity }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Projects -->
      <div id="projects" class="bg-white rounded-2xl shadow p-6 md:p-10 scroll-mt-28">
        <h2 class="text-3xl font-bold mb-6 text-indigo-700">Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 class="font-semibold text-lg mb-2">Completed Projects</h4>
            <ul class="list-disc pl-5 space-y-2">
              <li v-for="project in data.description.projects_completed" :key="project.name">
                <strong>{{ project.name }}</strong>
                <p>{{ project.description }}</p>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-lg mb-2">Ongoing Projects</h4>
            <ul class="list-disc pl-5 space-y-1">
              <li v-for="project in data.description.ongoing_projects" :key="project">
                {{ project }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Hackathon -->
      <div id="hackathon" class="bg-white rounded-2xl shadow p-6 md:p-10 scroll-mt-28">
        <h2 class="text-3xl font-bold mb-6 text-indigo-700">Hackathon Participation</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            v-for="participation in data.description.participation_in_hackathon"
            :key="participation.project"
            class="bg-indigo-50 p-4 rounded-xl shadow"
          >
            <h4 class="text-lg font-semibold">{{ participation.project }}</h4>
            <p>{{ participation.achievement }}</p>
          </div>
        </div>
      </div>

      <!-- Staff -->
      <div id="staff" class="bg-white rounded-2xl shadow p-6 md:p-10 scroll-mt-28">
        <h2 class="text-3xl font-bold text-center mb-10 text-gray-900">Staff</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="staff in data.staff_members"
            :key="staff.email_id"
            class="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col border border-gray-100"
          >
            <div class="bg-gradient-to-r from-blue-500 to-blue-300 h-2"></div>
            <div class="p-6 flex justify-center">
              <div class="w-28 h-28 rounded-full overflow-hidden border-2 border-amber-100 shadow">
                <img
                  :src="`/${staff.image}`"
                  :alt="staff.name"
                  class="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div class="flex-grow flex flex-col p-5 text-center">
              <h2 class="text-xl font-bold text-gray-800 mb-1">{{ staff.name }}</h2>
              <p class="text-blue-600 font-medium mb-2">{{ staff.designation }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import data from '@/assets/DGATE-cell.json';

export default {
  name: 'DGATESection',
  data() {
    return {
      data,
      sections: [
        { id: 'overview', label: 'Overview' },
        { id: 'activities', label: 'Activities' },
        { id: 'projects', label: 'Projects' },
        { id: 'hackathon', label: 'Hackathon' },
        { id: 'staff', label: 'Staff' },
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
      const sections = this.sections.map(s => {
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
