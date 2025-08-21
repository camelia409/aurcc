<template>
  <OfficePageTemplate
    office-name="ESTATE OFFICE"
    hero-subtitle="Managing campus infrastructure, maintenance, and facilities"
    :sections="sections"
    :contact-email="data.contact_us"
    @section-change="handleSectionChange"
  >
    <template #content>
      <!-- About -->
      <OfficeContentSection
        section-id="about"
        title="About the Estate Office"
        icon="ℹ️"
      >
        <p class="text-lg md:text-xl font-medium text-gray-800">{{ data.description }}</p>
      </OfficeContentSection>

      <!-- Services -->
      <OfficeContentSection
        section-id="services"
        title="Services"
        icon="🛠️"
      >
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          <div
            v-for="service in serviceCards"
            :key="service.title"
            class="service-card bg-white/70 backdrop-blur rounded-xl shadow border border-blue-100 flex flex-col items-center text-center p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-400"
          >
            <div class="text-4xl mb-3">{{ service.icon }}</div>
            <h3 class="font-bold text-lg md:text-xl text-blue-900 mb-2">{{ service.title }}</h3>
            <p class="text-gray-700 text-sm md:text-base">{{ service.desc }}</p>
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
            v-for="staff in data.office_bearers"
            :key="staff.email_id || staff.name"
            :staff="staff"
          />
        </div>
      </OfficeContentSection>
    </template>
  </OfficePageTemplate>
</template>

<script>
import data from '@/assets/EstateOff.json';
import OfficePageTemplate from '@/components/OfficePageTemplate.vue';
import OfficeContentSection from '@/components/OfficeContentSection.vue';
import StaffCard from '@/components/StaffCard.vue';

const serviceCards = [
  {
    icon: '🏗️',
    title: 'Building Construction & Maintenance',
    desc: 'All construction activities and upkeep of campus buildings.'
  },
  {
    icon: '💧',
    title: 'Water & Sewage Management',
    desc: 'Ensuring water supply, sewage treatment, and disposal.'
  },
  {
    icon: '💡',
    title: 'Electrical System Maintenance',
    desc: 'Maintenance of campus electrical supply and systems.'
  },
  {
    icon: '🛣️',
    title: 'Roads & Pathways',
    desc: 'Construction and maintenance of campus roads and walkways.'
  },
  {
    icon: '🌳',
    title: 'Gardens & Lawns',
    desc: 'Upkeep of lawns, gardens, and green spaces.'
  },
  {
    icon: '🏢',
    title: 'Facility Monitoring & Rent',
    desc: 'Monitoring and rent collection for central facilities.'
  },
  {
    icon: '🧹',
    title: 'Housekeeping',
    desc: 'Campus-wide cleaning and housekeeping services.'
  },
  {
    icon: '🛡️',
    title: 'Security',
    desc: 'Ensuring safety and security across the campus.'
  },
];

export default {
  name: 'EstateOffice',
  components: {
    OfficePageTemplate,
    OfficeContentSection,
    StaffCard
  },
  data() {
    return {
      data,
      sections: [
        { key: 'about', label: 'About' },
        { key: 'services', label: 'Services' },
        { key: 'staff', label: 'Staff' }
      ],
      activeSection: '',
      serviceCards,
    };
  },
  methods: {
    handleSectionChange(sectionKey) {
      this.activeSection = sectionKey;
    }
  }
};
</script>

<style scoped>
.service-card {
  cursor: pointer;
  will-change: transform, box-shadow;
}
</style>
