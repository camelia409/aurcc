<template>
  <OfficePageTemplate
    office-name="PLACEMENT CELL"
    hero-subtitle="Empowering students for career success and industry connections"
    :sections="sections"
    :contact-email="data.contact_us || 'placementcell@aurcc.ac.in'"
    @section-change="handleSectionChange"
  >
    <template #content>
      <!-- Description -->
      <OfficeContentSection
        section-id="description"
        title="About the Placement Cell"
        icon="🎯"
      >
        <p class="text-lg leading-relaxed text-gray-800 mb-4">
          <span class="font-semibold text-blue-900">The Placement Cell</span> at our Regional Campus is dedicated to empowering students for career success. We provide:
        </p>
        <ul class="list-disc pl-6 space-y-2 text-base text-gray-800 mb-4">
          <li><span class="font-semibold">Comprehensive Placement Support:</span> Guidance and training for every stage of the campus recruitment process.</li>
          <li><span class="font-semibold">Expert Team:</span> Coordinators, assistants, and volunteers from every department to ensure personalized attention.</li>
          <li><span class="font-semibold">Skill Development:</span> Pre-placement training, mock interviews, group discussions, and workshops to boost your confidence.</li>
          <li><span class="font-semibold">Industry Connections:</span> Strong ties with top recruiters and regular campus drives.</li>
          <li><span class="font-semibold">Career Awareness:</span> Information on value-added courses and opportunities in both private and government sectors.</li>
        </ul>
        <p class="text-base text-gray-700">Our mission: To help every student achieve their dream job and build a successful career.</p>
      </OfficeContentSection>

      <!-- Placement Statistics -->
      <OfficeContentSection
        section-id="placement_statistics"
        title="Placement Statistics"
        icon="📊"
      >
        <div class="flex flex-col items-center">
          <div class="text-lg text-gray-700 mb-6 text-center max-w-2xl">
            <span class="font-semibold text-blue-900">Our Results Speak for Themselves:</span> Each year, our students receive numerous placement offers from leading companies. Explore our latest placement statistics below.
          </div>
          <img src="/placement%20statistics.webp" alt="Placement Statistics" class="w-full max-w-4xl mx-auto h-auto rounded-md shadow-lg" />
        </div>
      </OfficeContentSection>

      <!-- CUIC -->
      <OfficeContentSection
        section-id="cuic"
        title="CUIC: Your Gateway to Top Recruiters"
        icon="🤝"
      >
        <p class="text-lg leading-relaxed text-gray-800 mb-4">
          <span class="font-semibold text-blue-900">The Centre for University-Industry Collaboration (CUIC)</span> bridges the gap between students and leading employers. Through CUIC, you benefit from:
        </p>
        <ul class="list-disc pl-6 space-y-2 text-base text-gray-800 mb-4">
          <li><span class="font-semibold">Industry Partnerships:</span> Direct connections with top companies for internships and placements.</li>
          <li><span class="font-semibold">Skill-Building Initiatives:</span> Workshops, seminars, and training programs to enhance your employability.</li>
          <li><span class="font-semibold">Placement Drives:</span> Regular campus recruitment events with a wide range of recruiters.</li>
          <li><span class="font-semibold">Career Guidance:</span> Expert advice and support to help you make informed career choices.</li>
        </ul>
        <p class="text-base text-gray-700">CUIC is committed to opening doors for your future and helping you launch a successful career.</p>
      </OfficeContentSection>

      <!-- Our Recruiters -->
      <OfficeContentSection
        section-id="our_recruiters"
        title="Our Recruiters"
        icon="🏢"
      >
        <div class="flex justify-center">
          <img src="/recruiters.jpg" alt="Our Recruiters" class="w-full max-w-4xl mx-auto h-auto rounded-md shadow-lg" />
        </div>
      </OfficeContentSection>

      <!-- Placed Students -->
      <OfficeContentSection
        section-id="placed_students"
        title="Placed Students"
        icon="🎓"
      >
        <div class="flex justify-center">
          <img src="/Placedstudents.webp" alt="Placed Students" class="w-full max-w-4xl mx-auto h-auto rounded-md shadow-lg" />
        </div>
      </OfficeContentSection>

      <!-- Staff Members -->
      <OfficeContentSection
        section-id="staff"
        title="Staff"
        icon="👥"
      >
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <StaffCard
            v-for="staff in data.staff_members"
            :key="staff.name"
            :staff="staff"
          />
        </div>
      </OfficeContentSection>
    </template>
  </OfficePageTemplate>
</template>

<script>
import data from '../assets/placement-cell.json';
import OfficePageTemplate from '@/components/OfficePageTemplate.vue';
import OfficeContentSection from '@/components/OfficeContentSection.vue';
import StaffCard from '@/components/StaffCard.vue';

export default {
  name: 'PlacementCell',
  components: {
    OfficePageTemplate,
    OfficeContentSection,
    StaffCard
  },
  data() {
    return {
      data: data,
      activeSection: 'description',
      sections: [
        { key: 'description', label: 'Description' },
        { key: 'placement_statistics', label: 'Placement Statistics' },
        { key: 'cuic', label: 'CUIC' },
        { key: 'our_recruiters', label: 'Our Recruiters' },
        { key: 'placed_students', label: 'Placed Students' },
        { key: 'staff', label: 'Staff' }
      ],
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

