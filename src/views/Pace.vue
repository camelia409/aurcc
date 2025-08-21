<template>
  <OfficePageTemplate
    office-name="PACE CELL"
    hero-subtitle="Empowering students for competitive excellence"
    :sections="sections"
    :contact-email="paceData.contact?.email || 'pacecell@aurcc.ac.in'"
    @section-change="handleSectionChange"
  >
    <template #content>
      <!-- Description Section -->
      <OfficeContentSection
        section-id="description"
        title="About the PACE Cell"
        icon="🧭"
      >
        <p class="text-lg leading-relaxed text-gray-800 mb-4">
          <span class="font-semibold text-blue-900">PACE (Placement and Competitive Exam) Cell</span> at Anna University Regional Campus Coimbatore is your dedicated partner for success in government and competitive exams. We empower students with:
        </p>
        <ul class="list-disc pl-6 space-y-2 text-base text-gray-800 mb-4">
          <li><span class="font-semibold">Expert Guidance:</span> Access to experienced mentors and subject matter experts for personalized support.</li>
          <li><span class="font-semibold">Comprehensive Resources:</span> Books, study materials, and online tools for TNPSC, UPSC, Banking, SSC, Railway, and more.</li>
          <li><span class="font-semibold">Workshops & Mock Tests:</span> Regular training programs, workshops, and practice exams to boost your confidence and skills.</li>
          <li><span class="font-semibold">Peer & Volunteer Support:</span> Join a vibrant community of coordinators, volunteers, and fellow aspirants for motivation and teamwork.</li>
          <li><span class="font-semibold">Inclusive Environment:</span> Support for students from all departments, ensuring everyone has the opportunity to excel.</li>
        </ul>
        <p class="text-base text-gray-700">Whether you're aiming for a government job or seeking to improve your competitive exam performance, the PACE Cell is here to guide you every step of the way.</p>
      </OfficeContentSection>

      <!-- Staff Section -->
      <OfficeContentSection
        section-id="staff"
        title="Staff"
        icon="👥"
      >
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <StaffCard
            v-for="staff in paceData.staff"
            :key="staff.name"
            :staff="staff"
          />
        </div>
      </OfficeContentSection>
    </template>
  </OfficePageTemplate>
</template>

<script>
import paceData from '@/assets/pace.json';
import OfficePageTemplate from '@/components/OfficePageTemplate.vue';
import OfficeContentSection from '@/components/OfficeContentSection.vue';
import StaffCard from '@/components/StaffCard.vue';

export default {
  name: 'PaceCell',
  components: {
    OfficePageTemplate,
    OfficeContentSection,
    StaffCard
  },
  data() {
    return {
      paceData,
      currentSection: 'description',
      sections: [
        { key: 'description', label: 'Description' },
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
.font-serif {
  font-family: 'Georgia', 'Times New Roman', Times, serif;
}
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.pace-staff-card {
  transition: transform 0.18s cubic-bezier(.4,2,.6,1), box-shadow 0.18s cubic-bezier(.4,2,.6,1);
}
.pace-staff-card:hover {
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
