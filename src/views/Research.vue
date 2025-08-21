<template>
  <OfficePageTemplate
    office-name="RESEARCH CELL"
    hero-subtitle="Fostering research and innovation across disciplines"
    :sections="sections"
    contact-email="researchcell@aurcc.ac.in"
    @section-change="handleSectionChange"
  >
    <template #content>
      <!-- Description -->
      <OfficeContentSection
        section-id="description"
        title="About the Research Cell"
        icon="ℹ️"
      >
        <ul class="list-disc pl-6 text-gray-800 text-lg space-y-2 leading-relaxed break-words">
          <li
            v-for="(desc, index) in researchData.description"
            :key="index"
            class="whitespace-pre-wrap break-words"
          >
            {{ desc }}
          </li>
        </ul>
      </OfficeContentSection>

      <!-- Supervisors Section -->
      <OfficeContentSection
        section-id="supervisors"
        title="Scholars Details by Department"
        icon="🎓"
      >
        <div class="overflow-x-auto">
          <table class="table-auto w-full border border-gray-300 text-left mb-4 rounded-xl overflow-hidden">
            <thead class="bg-gray-200">
              <tr>
                <th class="border px-4 py-2">Department</th>
                <th class="border px-4 py-2">PhD Completed (FT)</th>
                <th class="border px-4 py-2">PhD Completed (PT)</th>
                <th class="border px-4 py-2">PhD Registered (FT)</th>
                <th class="border px-4 py-2">PhD Registered (PT)</th>
                <th class="border px-4 py-2">Completed FT+PT</th>
                <th class="border px-4 py-2">Registered FT+PT</th>
                <th class="border px-4 py-2">Overall FT+PT</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(dept, index) in researchData.supervisors"
                :key="index"
                class="hover:bg-gray-50"
              >
                <td class="border px-4 py-2">{{ dept.department }}</td>
                <td class="border px-4 py-2 text-center">{{ dept.phdCompletedFullTime }}</td>
                <td class="border px-4 py-2 text-center">{{ dept.phdCompletedPartTime }}</td>
                <td class="border px-4 py-2 text-center">{{ dept.phdRegisteredFullTime }}</td>
                <td class="border px-4 py-2 text-center">{{ dept.phdRegisteredPartTime }}</td>
                <td class="border px-4 py-2 text-center">{{ dept.completedFTPT }}</td>
                <td class="border px-4 py-2 text-center">{{ dept.registeredFTPT }}</td>
                <td class="border px-4 py-2 text-center">{{ dept.completedFTPT + dept.registeredFTPT }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </OfficeContentSection>
    </template>
  </OfficePageTemplate>
</template>

<script>
import researchData from '@/assets/research-cell.json';
import OfficePageTemplate from '@/components/OfficePageTemplate.vue';
import OfficeContentSection from '@/components/OfficeContentSection.vue';

export default {
  name: 'ResearchCell',
  components: {
    OfficePageTemplate,
    OfficeContentSection
  },
  data() {
    return {
      researchData,
      currentSection: 'description',
      sections: [
        { key: 'description', label: 'Description' },
        { key: 'supervisors', label: 'Supervisors' }
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
