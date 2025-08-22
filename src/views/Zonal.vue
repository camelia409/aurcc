<template>
  <OfficePageTemplate
    office-name="ZONAL OFFICE"
    hero-subtitle="Liaison for Examinations & College Coordination"
    :sections="sections"
    :contact-email="zonalData.contact_us || 'zonaloffice@aurcc.ac.in'"
    @section-change="handleSectionChange"
  >
    <template #content>
      <!-- Description -->
      <OfficeContentSection
        section-id="description"
        title="Description"
        icon="ℹ️"
      >
        <ul class="list-disc pl-4 sm:pl-6 text-gray-800 mobile-text-sm lg:mobile-text-base xl:mobile-text-lg space-y-2">
          <li v-for="(desc, index) in zonalData.description" :key="index">
            {{ desc }}
          </li>
        </ul>
      </OfficeContentSection>

      <!-- PDF Section -->
      <OfficeContentSection
        section-id="zoneList"
        title="Zone List of Colleges"
        icon="🏫"
      >
        <iframe
          :src="zonalListPDF"
          class="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] rounded-lg border border-gray-300"
          frameborder="0"
        ></iframe>
      </OfficeContentSection>

      <!-- Staff Section -->
      <OfficeContentSection
        section-id="staff"
        title="Staff"
        icon="👥"
      >
        <div class="mobile-grid gap-6 sm:gap-8">
          <StaffCard
            v-for="staff in zonalData.staff"
            :key="staff.name"
            :staff="staff"
          />
        </div>
      </OfficeContentSection>
    </template>
  </OfficePageTemplate>
</template>

<script>
import zonalData from '@/assets/zonaloffice.json';
import zonalListPDF from '@/assets/zonal-list.pdf';
import OfficePageTemplate from '@/components/OfficePageTemplate.vue';
import OfficeContentSection from '@/components/OfficeContentSection.vue';
import StaffCard from '@/components/StaffCard.vue';

export default {
  name: 'ZonalOffice',
  components: {
    OfficePageTemplate,
    OfficeContentSection,
    StaffCard
  },
  data() {
    return {
      zonalData: zonalData[0],
      zonalListPDF,
      currentSection: 'description',
      sections: [
        { key: 'description', label: 'Description' },
        { key: 'zoneList', label: 'Zone List of Colleges' },
        { key: 'staff', label: 'Staff' }
      ]
    };
  },
  methods: {
    handleSectionChange(sectionKey) {
      this.currentSection = sectionKey;
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
.section-box {
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  scroll-margin-top: 6rem;
}
.section-title {
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
}
.zonal-staff-card {
  transition: transform 0.18s cubic-bezier(.4,2,.6,1), box-shadow 0.18s cubic-bezier(.4,2,.6,1);
}
.zonal-staff-card:hover {
  transform: translateY(-8px) scale(1.025);
  box-shadow: 0 8px 32px 0 rgba(59,130,246,0.18), 0 2px 8px 0 rgba(59,130,246,0.10);
  border-color: #2563eb;
}
.animate-glow-bar {
  box-shadow: 0 0 16px 4px #60a5fa, 0 0 32px 8px #3b82f6;
  animation: glowBar 2.5s ease-in-out infinite alternate;
}
@keyframes glowBar {
  0% { box-shadow: 0 0 16px 4px #60a5fa, 0 0 32px 8px #3b82f6; }
  100% { box-shadow: 0 0 32px 8px #3b82f6, 0 0 48px 12px #60a5fa; }
}
.apply-contact-btn {
  display: inline-block;
  margin-top: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 24px 0 rgba(59,130,246,0.12);
}
</style>
