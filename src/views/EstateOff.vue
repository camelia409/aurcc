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
        <p class="mobile-text-base lg:mobile-text-lg xl:mobile-text-xl font-medium text-gray-800">{{ data.description }}</p>
      </OfficeContentSection>

      <!-- Services -->
      <OfficeContentSection
        section-id="services"
        title="Services"
        icon="🛠️"
      >
        <div class="mobile-grid gap-6 sm:gap-7">
          <div
            v-for="service in serviceCards"
            :key="service.title"
            class="service-card mobile-card bg-white/70 backdrop-blur rounded-xl shadow border border-blue-100 flex flex-col items-center text-center p-4 sm:p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-400"
          >
            <div class="mobile-text-2xl sm:mobile-text-3xl lg:mobile-text-4xl mb-2 sm:mb-3">{{ service.icon }}</div>
            <h3 class="font-bold mobile-text-base lg:mobile-text-lg xl:mobile-text-xl text-blue-900 mb-2">{{ service.title }}</h3>
            <p class="mobile-text-xs lg:mobile-text-sm xl:mobile-text-base text-gray-700">{{ service.desc }}</p>
          </div>
        </div>
      </OfficeContentSection>

      <!-- Staff -->
      <OfficeContentSection
        section-id="staff"
        title="Staff"
        icon="👥"
      >
        <div class="mobile-grid gap-6 sm:gap-8">
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
