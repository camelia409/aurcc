<template>
  <OfficePageTemplate
    office-name="Admission"
    hero-subtitle="Join our vibrant campus and shape your future with us!"
    :sections="sections"
    contact-email="admissions@aurcc.ac.in"
    @section-change="handleSectionChange"
  >
    <template #content>
      <!-- Overview -->
      <OfficeContentSection
        section-id="overview"
        title="Overview"
        icon="ℹ️"
      >
        <p class="mobile-text-base lg:mobile-text-lg xl:mobile-text-xl font-medium text-gray-800 mb-4 sm:mb-6">{{ data.description.Overview }}</p>
        <p class="mobile-text-base lg:mobile-text-lg xl:mobile-text-xl font-medium text-gray-800 mb-6 sm:mb-8">{{ data.description['Admissions at our Regional Campus'] }}</p>
        <div class="flex justify-center">
          <img :src="flowchartImage" alt="Admission Flowchart" class="w-full md:w-3/4 lg:w-1/2 rounded shadow" />
        </div>
      </OfficeContentSection>

      <!-- Courses Offered -->
      <OfficeContentSection
        section-id="courses_offered"
        title="Courses Offered"
        icon="📚"
      >
        <div v-for="(programs, category) in data.courses_offered" :key="category" class="mb-6 sm:mb-8">
          <h3 class="mobile-text-lg lg:mobile-text-xl xl:mobile-text-2xl font-semibold text-indigo-700 mb-3">{{ category }}</h3>
          <div class="overflow-x-auto">
            <table class="table-auto w-full border border-gray-300 text-left mb-4 rounded-xl overflow-hidden">
              <thead class="bg-gray-200">
                <tr>
                  <th class="border px-3 sm:px-4 py-2 mobile-text-xs lg:mobile-text-sm">S.No</th>
                  <th class="border px-3 sm:px-4 py-2 mobile-text-xs lg:mobile-text-sm">Courses Offered</th>
                  <th class="border px-3 sm:px-4 py-2 mobile-text-xs lg:mobile-text-sm">Intake</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="course in programs" :key="course['S.No']">
                  <td class="border px-3 sm:px-4 py-2 text-center mobile-text-xs lg:mobile-text-sm">{{ course['S.No'] }}</td>
                  <td class="border px-3 sm:px-4 py-2 mobile-text-xs lg:mobile-text-sm">{{ course['Courses Offered'] }}</td>
                  <td class="border px-3 sm:px-4 py-2 text-center mobile-text-xs lg:mobile-text-sm">{{ course.Intake }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </OfficeContentSection>

      <!-- Eligibility Criteria -->
      <OfficeContentSection
        section-id="eligibility"
        title="Eligibility Criteria"
        icon="✅"
      >
        <div v-for="(text, program) in data.eligibility_criteria" :key="program" class="mb-3 sm:mb-4">
          <h3 class="mobile-text-base lg:mobile-text-lg xl:mobile-text-xl font-semibold text-indigo-700 mb-2">{{ program }}</h3>
          <p class="mobile-text-sm lg:mobile-text-base text-gray-800">{{ text }}</p>
        </div>
      </OfficeContentSection>

      <!-- Staff -->
      <OfficeContentSection
        section-id="staff"
        title="Staff"
        icon="👥"
      >
        <div class="staff-grid">
          <StaffCard
            v-for="staff in data.staff"
            :key="staff.name"
            :staff="staff"
          />
        </div>
      </OfficeContentSection>
    </template>
  </OfficePageTemplate>
</template>

<script>
import admissionData from '@/assets/admission.json';
import OfficePageTemplate from '@/components/OfficePageTemplate.vue';
import OfficeContentSection from '@/components/OfficeContentSection.vue';
import StaffCard from '@/components/StaffCard.vue';

export default {
  name: 'AdmissionSection',
  components: {
    OfficePageTemplate,
    OfficeContentSection,
    StaffCard
  },
  data() {
    return {
      data: admissionData[0],
      flowchartImage: '/admission-flowchart.webp',
      currentSection: 'overview',
      sections: [
        { key: 'overview', label: 'Overview' },
        { key: 'courses_offered', label: 'Courses Offered' },
        { key: 'eligibility', label: 'Eligibility Criteria' },
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
.admission-staff-card {
  transition: transform 0.18s cubic-bezier(.4,2,.6,1), box-shadow 0.18s cubic-bezier(.4,2,.6,1);
}
.admission-staff-card:hover {
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
