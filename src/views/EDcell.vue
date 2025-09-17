<template>
  <OfficePageTemplate
    office-name="Entrepreneurship Development Cell"
    hero-subtitle="Empowering innovation, startups, and entrepreneurial spirit"
    :sections="sections"
    contact-email="edcell@aurcc.ac.in"
    @section-change="handleSectionChange"
  >
    <template #content>
      <!-- Description -->
      <OfficeContentSection
        section-id="description"
        title="Description"
        icon="ℹ️"
      >
        <p class="mobile-text-base lg:mobile-text-lg xl:mobile-text-xl font-medium text-gray-800">
          Entrepreneurship is the person who plays a certain price for a product to resell it at an uncertain price, hereby making decisions about obtaining and using the resources while consequently admitting the risk of enterprise.
        </p>
      </OfficeContentSection>

      <!-- Objectives -->
      <OfficeContentSection
        section-id="objectives"
        title="Objectives"
        icon="🎯"
      >
        <ul class="list-disc pl-4 sm:pl-6 space-y-2 mobile-text-base lg:mobile-text-lg xl:mobile-text-xl text-gray-800">
          <li v-for="objective in data.description.objectives" :key="objective">{{ objective }}</li>
        </ul>
      </OfficeContentSection>

      <!-- Key Activities -->
      <OfficeContentSection
        section-id="key_activities"
        title="Key Activities"
        icon="🗝️"
      >
        <div class="space-y-4 sm:space-y-6">
          <div
            v-for="activity in data.description.key_activities"
            :key="activity.name"
            class="mobile-card bg-indigo-50 rounded-xl p-4 sm:p-5 shadow"
          >
            <h4 class="mobile-text-lg lg:mobile-text-xl xl:mobile-text-2xl font-semibold mb-2">{{ activity.name }}</h4>
            <p class="mobile-text-sm lg:mobile-text-base text-gray-700 mb-1"><strong>Location:</strong> {{ activity.location }}</p>
            <p class="mobile-text-sm lg:mobile-text-base text-gray-700"><strong>Details:</strong> {{ activity.details }}</p>
          </div>
        </div>
      </OfficeContentSection>

      <!-- MOU -->
      <OfficeContentSection
        section-id="mou"
        title="MOUs"
        icon="🤝"
      >
        <ul class="list-disc pl-4 sm:pl-6 space-y-2 mobile-text-base lg:mobile-text-lg xl:mobile-text-xl text-gray-800">
          <li v-for="mou in data.MOU" :key="mou">{{ mou }}</li>
        </ul>
      </OfficeContentSection>

      <!-- Links -->
      <OfficeContentSection
        section-id="links"
        title="Useful Links"
        icon="🔗"
      >
        <ul class="list-disc pl-4 sm:pl-6 space-y-2 mobile-text-base lg:mobile-text-lg xl:mobile-text-xl text-blue-700">
          <li v-for="link in data.links" :key="link">
            <a :href="'http://' + link" target="_blank" class="hover:underline">{{ link }}</a>
          </li>
        </ul>
      </OfficeContentSection>

      <!-- Office Bearers -->
      <OfficeContentSection
        section-id="office_bearers"
        title="Staff"
        icon="👥"
      >
        <div class="staff-grid">
          <StaffCard
            v-for="member in data.office_bearers"
            :key="member.email"
            :staff="member"
          />
        </div>
      </OfficeContentSection>
    </template>
  </OfficePageTemplate>
</template>

<script>
import data from '@/assets/ED-cell.json';
import OfficePageTemplate from '@/components/OfficePageTemplate.vue';
import OfficeContentSection from '@/components/OfficeContentSection.vue';
import StaffCard from '@/components/StaffCard.vue';

export default {
  name: 'EDCellSection',
  components: {
    OfficePageTemplate,
    OfficeContentSection,
    StaffCard
  },
  data() {
    return {
      data,
      sections: [
        { key: 'description', label: 'Description' },
        { key: 'objectives', label: 'Objectives' },
        { key: 'key_activities', label: 'Key Activities' },
        { key: 'mou', label: 'MOUs' },
        { key: 'links', label: 'Links' },
        { key: 'office_bearers', label: 'Staff' },
      ],
      activeSection: '',
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
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.animate-fadeIn {
  animation: fadeIn 1.2s ease-out forwards;
}
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
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
.apply-contact-btn {
  display: inline-block;
  margin-top: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 24px 0 rgba(59,130,246,0.12);
}
</style>
