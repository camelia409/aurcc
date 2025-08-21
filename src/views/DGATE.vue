<template>
  <OfficePageTemplate
    office-name="DGATE CELL"
    hero-subtitle="Join our vibrant campus and shape your future with us!"
    :sections="sections"
    contact-email="dgatecell@aurcc.ac.in"
    @section-change="handleSectionChange"
  >
    <template #content>
      <!-- Overview -->
      <OfficeContentSection
        section-id="overview"
        title="Overview"
        icon="ℹ️"
      >
        <p class="text-lg leading-relaxed text-gray-800">{{ data.description.DGATE }}</p>
      </OfficeContentSection>

      <!-- Activities -->
      <OfficeContentSection
        section-id="activities"
        title="Activities"
        icon="🎯"
      >
        <!-- Scrolling Notice Board Only, taller and more readable -->
        <div class="relative h-24 overflow-hidden mb-2 rounded-xl bg-gradient-to-r from-blue-100 via-indigo-50 to-white shadow-inner border border-blue-200 group">
          <ul class="notice-ticker absolute w-full animate-vertical-scroll group-hover:paused">
            <li v-for="(item, idx) in activityHighlights" :key="'highlight-' + idx" class="flex items-center gap-3 px-8 py-4 text-blue-900 font-semibold text-lg md:text-xl min-h-[3rem]">
              <span class="inline-block w-3 h-3 rounded-full bg-blue-500 animate-pulse"></span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </OfficeContentSection>

      <!-- Projects -->
      <OfficeContentSection
        section-id="projects"
        title="Projects"
        icon="💡"
      >
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
      </OfficeContentSection>

      <!-- Hackathon -->
      <OfficeContentSection
        section-id="hackathon"
        title="Hackathon Participation"
        icon="🏆"
      >
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
      </OfficeContentSection>

      <!-- Staff -->
      <OfficeContentSection
        section-id="staff"
        title="Staff"
        icon="👥"
      >
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <StaffCard
            v-for="staff in data.staff_members"
            :key="staff.email_id"
            :staff="staff"
          />
        </div>
      </OfficeContentSection>
    </template>
  </OfficePageTemplate>
</template>

<script>
import data from '@/assets/DGATE-cell.json';
import OfficePageTemplate from '@/components/OfficePageTemplate.vue';
import OfficeContentSection from '@/components/OfficeContentSection.vue';
import StaffCard from '@/components/StaffCard.vue';

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
  components: {
    OfficePageTemplate,
    OfficeContentSection,
    StaffCard
  },
  data() {
    return {
      data,
      sections: [
        { key: 'overview', label: 'Overview' },
        { key: 'activities', label: 'Activities' },
        { key: 'projects', label: 'Projects' },
        { key: 'hackathon', label: 'Hackathon' },
        { key: 'staff', label: 'Staff' },
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
    handleSectionChange(sectionKey) {
      this.activeSection = sectionKey;
    }
  }
};
</script>

<style scoped>
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
</style>
