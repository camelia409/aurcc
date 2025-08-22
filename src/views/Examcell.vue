<template>
  <OfficePageTemplate
    office-name="EXAM CELL"
    hero-subtitle="Ensuring smooth conduct and transparency in university examinations"
    :sections="sections"
    :contact-email="data.contact_us || 'examcell@aurcc.ac.in'"
    @section-change="handleSectionChange"
  >
    <template #content>
      <!-- About -->
      <OfficeContentSection
        section-id="about"
        title="About the Exam Cell"
        icon="ℹ️"
      >
        <div class="mobile-text-lg sm:mobile-text-xl lg:mobile-text-2xl font-semibold text-blue-900 mb-3 sm:mb-4">Our Mission: Ensuring fairness, transparency, and efficiency in all university examinations.</div>
        <div class="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mb-4 sm:mb-6"></div>
        <p class="mobile-text-base lg:mobile-text-lg xl:mobile-text-xl font-medium text-gray-800 leading-relaxed">{{ data.description }}</p>
      </OfficeContentSection>

      <!-- Services -->
      <OfficeContentSection
        section-id="services"
        title="Services"
        icon="🛠️"
      >
        <div class="mb-4 sm:mb-6 mobile-text-base lg:mobile-text-lg text-gray-700">We provide comprehensive support for all examination-related processes, ensuring a smooth experience for students and staff.</div>
        <div class="mobile-grid gap-4 sm:gap-6">
          <div v-for="service in data.services" :key="service" class="mobile-card bg-white/80 rounded-xl shadow p-4 sm:p-6 flex items-start gap-3 sm:gap-4">
            <span class="mobile-text-lg sm:mobile-text-xl lg:mobile-text-2xl text-blue-600">✔️</span>
            <span class="font-medium mobile-text-sm lg:mobile-text-base text-gray-800">{{ service }}</span>
          </div>
        </div>
      </OfficeContentSection>

      <!-- Office Bearers -->
      <OfficeContentSection
        section-id="staff"
        title="Staff"
        icon="👥"
      >
        <div class="mobile-grid gap-6 sm:gap-8">
          <StaffCard
            v-for="bearer in data.office_bearers"
            :key="bearer.email_id"
            :staff="bearer"
          />
        </div>
      </OfficeContentSection>
    </template>
  </OfficePageTemplate>
</template>

<script>
import data from '../assets/exam-cell.json';
import OfficePageTemplate from '@/components/OfficePageTemplate.vue';
import OfficeContentSection from '@/components/OfficeContentSection.vue';
import StaffCard from '@/components/StaffCard.vue';

export default {
  name: 'ExamCell',
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
