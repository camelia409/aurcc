<template>
  <main class="bg-gradient-to-br from-indigo-100 via-blue-50 to-white min-h-screen font-sans text-gray-800">
    <!-- Hero Section -->
    <section class="relative w-full min-h-[40vh] md:min-h-[60vh] overflow-hidden flex items-center justify-center animate-fadeIn">
      <img src="/offices.webp" alt="DGATE Cell" class="absolute inset-0 w-full h-full object-cover object-center" />
      <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>
      <div class="absolute inset-0 flex flex-col items-center justify-center z-10 px-2">
        <div class="backdrop-blur-md bg-white/30 rounded-2xl shadow-lg px-4 py-4 sm:px-8 sm:py-6 md:px-12 md:py-10 flex flex-col items-center w-full max-w-2xl border border-white/30">
          <h1 class="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg tracking-wide text-center mb-2 leading-tight">DGATE CELL</h1>
          <p class="text-base sm:text-lg md:text-2xl text-white drop-shadow text-center font-medium">Join our vibrant campus and shape your future with us!</p>
        </div>
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
        <!-- Scrolling Notice Board Only, taller and more readable -->
        <div class="relative h-24 overflow-hidden mb-2 rounded-xl bg-gradient-to-r from-blue-100 via-indigo-50 to-white shadow-inner border border-blue-200 group">
          <ul class="notice-ticker absolute w-full animate-vertical-scroll group-hover:paused">
            <li v-for="(item, idx) in activityHighlights" :key="'highlight-' + idx" class="flex items-center gap-3 px-8 py-4 text-blue-900 font-semibold text-lg md:text-xl min-h-[3rem]">
              <span class="inline-block w-3 h-3 rounded-full bg-blue-500 animate-pulse"></span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Projects -->
      <div id="projects" class="bg-white rounded-2xl shadow p-6 md:p-10 scroll-mt-28">
        <h2 class="text-3xl font-bold mb-6 text-indigo-700">Projects</h2>
        <!-- Project Carousel Only -->
        <div class="overflow-x-auto scrollbar-hide">
          <div class="flex space-x-6 min-w-max py-2">
            <div v-for="(project, idx) in projectCards" :key="'proj-card-' + idx" class="project-card bg-gradient-to-br from-blue-100 via-white to-indigo-50 rounded-xl shadow-lg p-6 min-w-[260px] max-w-xs flex flex-col items-start hover:-translate-y-2 transition-transform duration-300 cursor-pointer relative group">
              <div class="text-3xl mb-3">
                <span v-if="project.icon">{{ project.icon }}</span>
                <span v-else>💡</span>
              </div>
              <div class="font-bold text-lg text-blue-800 mb-1">{{ project.name }}</div>
              <div class="text-gray-600 text-sm line-clamp-3">{{ project.description }}</div>
              <div v-if="project.status" class="absolute top-3 right-3 text-xs px-2 py-1 rounded-full bg-blue-200 text-blue-800 font-semibold group-hover:bg-blue-400 group-hover:text-white transition">{{ project.status }}</div>
            </div>
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
              <div class="w-28 h-28 rounded-full overflow-hidden border-2 border-amber-100 shadow flex items-center justify-center">
                <img
                  v-if="staff.image"
                  :src="`/${staff.image}`"
                  :alt="staff.name"
                  class="w-full h-full object-cover"
                  loading="lazy"
                />
                <span v-else class="text-5xl text-blue-300">👤</span>
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
    <div class="flex justify-center mt-2 mb-8">
      <a :href="`mailto:dgatecell@aurcc.ac.in`" class="apply-contact-btn bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all text-lg md:text-xl">
        Apply Now / Contact Us
      </a>
    </div>
  </main>
</template>

<script>
import data from '@/assets/DGATE-cell.json';

const projectIcons = {
  'DLAPP': '📱',
  'KIOSK': '🖥️',
  'Cloud Based IoT Device for Virtually Opening the Gym': '☁️',
  'AU-SMART': '📊',
  'Hostel Leave App': '🏠',
  'Virtual Campus Experience': '🌐',
  'Hostr': '🛏️',
};

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
  computed: {
    activityHighlights() {
      // Flatten and highlight all activities for the ticker
      const highlights = [];
      const act = this.data.description.activities;
      if (act.curricular_activities) {
        act.curricular_activities.forEach(a => highlights.push(`${a.date}: ${a.name}`));
      }
      if (act.social_responsibilities) {
        act.social_responsibilities.forEach(a => highlights.push(`${a.date}: ${a.event}`));
      }
      if (act.internal_activities) {
        act.internal_activities.forEach(a => highlights.push(`Internal: ${a}`));
      }
      if (act.external_activities) {
        act.external_activities.forEach(a => highlights.push(`External: ${a}`));
      }
      return highlights;
    },
    projectCards() {
      // Merge completed and ongoing projects for the carousel
      const completed = (this.data.description.projects_completed || []).map(p => ({
        name: p.name,
        description: p.description,
        icon: projectIcons[p.name] || '✅',
        status: 'Completed',
      }));
      const ongoing = (this.data.description.ongoing_projects || []).map(name => ({
        name,
        description: '',
        icon: projectIcons[name] || '🚧',
        status: 'Ongoing',
      }));
      return [...completed, ...ongoing];
    }
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
.notice-ticker {
  display: flex;
  flex-direction: column;
  animation: vertical-scroll 16s linear infinite;
}
.group:hover .notice-ticker {
  animation-play-state: paused;
}
@keyframes vertical-scroll {
  0% { transform: translateY(0); }
  100% { transform: translateY(-50%); }
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.project-card {
  transition: box-shadow 0.3s, transform 0.3s;
  box-shadow: 0 4px 16px 0 rgba(60, 72, 180, 0.08);
}
.project-card:hover {
  box-shadow: 0 8px 32px 0 rgba(60, 72, 180, 0.16);
  transform: translateY(-8px) scale(1.03);
}
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.apply-contact-btn {
  display: inline-block;
  margin-top: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 24px 0 rgba(59,130,246,0.12);
}
</style>
