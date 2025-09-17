<template>
  <OfficePageTemplate
    office-name="DISTANCE EDUCATION"
    hero-subtitle="Flexible learning for working professionals and lifelong learners"
    :sections="sections"
    contact-email="distanceedu@aurcc.ac.in"
    @section-change="handleSectionChange"
  >
    <template #content>
      <!-- Overview -->
      <OfficeContentSection
        section-id="overview"
        title="Overview"
        icon="ℹ️"
      >
        <p class="mobile-text-base lg:mobile-text-lg xl:mobile-text-xl font-medium text-gray-800">{{ data.description }}</p>
      </OfficeContentSection>

      <!-- Why Choose Distance Education -->
      <OfficeContentSection
        section-id="why_choose"
        title="Why Choose Distance Education?"
        icon="🌟"
      >
        <div class="mobile-grid gap-4 sm:gap-6">
          <div class="flex flex-col items-center text-center">
            <span class="mobile-text-xl sm:mobile-text-2xl lg:mobile-text-3xl mb-2">⏰</span>
            <span class="font-semibold mobile-text-sm lg:mobile-text-base text-gray-800">Flexible Timings</span>
            <span class="mobile-text-xs lg:mobile-text-sm text-gray-500">Learn at your own pace, anytime, anywhere.</span>
          </div>
          <div class="flex flex-col items-center text-center">
            <span class="mobile-text-xl sm:mobile-text-2xl lg:mobile-text-3xl mb-2">💼</span>
            <span class="font-semibold mobile-text-sm lg:mobile-text-base text-gray-800">Career Advancement</span>
            <span class="mobile-text-xs lg:mobile-text-sm text-gray-500">Upgrade your skills while you work.</span>
          </div>
          <div class="flex flex-col items-center text-center">
            <span class="mobile-text-xl sm:mobile-text-2xl lg:mobile-text-3xl mb-2">🎓</span>
            <span class="font-semibold mobile-text-sm lg:mobile-text-base text-gray-800">Recognized Degrees</span>
            <span class="mobile-text-xs lg:mobile-text-sm text-gray-500">Degrees from Anna University, valued by employers.</span>
          </div>
          <div class="flex flex-col items-center text-center">
            <span class="mobile-text-xl sm:mobile-text-2xl lg:mobile-text-3xl mb-2">🤝</span>
            <span class="font-semibold mobile-text-sm lg:mobile-text-base text-gray-800">Expert Faculty</span>
            <span class="mobile-text-xs lg:mobile-text-sm text-gray-500">Guidance from experienced professors.</span>
          </div>
        </div>
      </OfficeContentSection>

      <!-- Programs -->
      <OfficeContentSection
        section-id="programs"
        title="Programs Offered"
        icon="📚"
      >
        <div class="mb-4 sm:mb-6 mobile-text-base lg:mobile-text-lg text-gray-700">Our flexible MBA and MCA programs are designed for working professionals and recent graduates seeking to advance their careers.</div>
        <ul class="mobile-grid gap-4 sm:gap-6">
          <li class="mobile-card bg-white/80 rounded-xl shadow p-4 sm:p-6 flex items-center gap-3 sm:gap-4">
            <span class="mobile-text-xl sm:mobile-text-2xl lg:mobile-text-3xl">🎓</span>
            <span class="font-semibold mobile-text-sm lg:mobile-text-base">MBA</span>
          </li>
          <li class="mobile-card bg-white/80 rounded-xl shadow p-4 sm:p-6 flex items-center gap-3 sm:gap-4">
            <span class="mobile-text-xl sm:mobile-text-2xl lg:mobile-text-3xl">💻</span>
            <span class="font-semibold mobile-text-sm lg:mobile-text-base">MCA</span>
          </li>
        </ul>
      </OfficeContentSection>

      <!-- Specializations -->
      <OfficeContentSection
        section-id="specialization"
        title="Specializations"
        icon="🎯"
      >
        <div class="mb-4 sm:mb-6 mobile-text-base lg:mobile-text-lg text-gray-700">Choose from a range of MBA specializations to tailor your learning to your career goals.</div>
        <ul class="mobile-grid gap-4 sm:gap-6">
          <li v-for="(spec, index) in data.specialization" :key="index" class="mobile-card bg-white/80 rounded-xl shadow p-4 sm:p-6 flex items-center gap-3 sm:gap-4">
            <span class="mobile-text-xl sm:mobile-text-2xl lg:mobile-text-3xl">🏅</span>
            <span class="font-semibold mobile-text-sm lg:mobile-text-base">{{ spec }}</span>
          </li>
        </ul>
      </OfficeContentSection>

      <!-- Staff -->
      <OfficeContentSection
        section-id="staff"
        title="Staff"
        icon="👥"
      >
        <div class="mb-6 sm:mb-8 mobile-text-base lg:mobile-text-lg text-gray-700 text-center">Meet our dedicated faculty, committed to supporting your distance learning journey.</div>
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
import data from '@/assets/distance education.json';
import OfficePageTemplate from '@/components/OfficePageTemplate.vue';
import OfficeContentSection from '@/components/OfficeContentSection.vue';
import StaffCard from '@/components/StaffCard.vue';

export default {
  name: 'DistanceEducation',
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
        { key: 'why_choose', label: 'Why Choose' },
        { key: 'programs', label: 'Programs' },
        { key: 'specialization', label: 'Specializations' },
        { key: 'staff', label: 'Staff' }
      ],
      activeSection: ''
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
</style>
