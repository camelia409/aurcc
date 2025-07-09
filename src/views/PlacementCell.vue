<template>
  <div class="flex-grow">
    <!-- Hero Section -->
    <section
      class="bg-cover bg-center relative w-full h-40 sm:h-80 md:h-94 animate-fadeIn"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
    >
      <div class="absolute inset-0 bg-black opacity-20"></div>
      <div class="flex items-center justify-center h-full relative z-10 px-4">
        <h1 class="md:text-4xl text-xl font-extrabold text-white drop-shadow-lg font-serif text-center animate-slideIn">
          PLACEMENT CELL
        </h1>
      </div>
    </section>

    <!-- Tab Navigation -->
    <div class="w-full bg-transparent flex justify-center px-4 -mt-8 relative z-10">
      <div class="bg-white rounded-full shadow-md w-full max-w-6xl flex flex-wrap justify-center gap-4 px-4 py-3 overflow-x-auto">
        <button
          v-for="section in sections"
          :key="section.id"
          @click="scrollToSection(section.id)"
          :class="[
            'px-5 py-2 rounded-full font-medium whitespace-nowrap transition-all duration-300',
            activeSection === section.id
              ? 'bg-indigo-600 text-white shadow'
              : 'bg-gray-100 text-gray-700 hover:bg-indigo-100'
          ]"
        >
          {{ section.label }}
        </button>
      </div>
    </div>

    <!-- Content Section Wrapper -->
    <section class="mx-auto py-10 px-4 md:px-10 bg-indigo-100 rounded-lg">
      <div class="relative font-serif">

        <!-- Description -->
        <div id="Description" ref="Description" class="scroll-mt-32 bg-white rounded-lg shadow-lg p-4 md:p-6 mb-12 animate-fadeIn">
          <h2 class="text-2xl md:text-3xl font-bold text-black mb-4">Description</h2>
          <p class="text-base md:text-lg text-black">{{ data.description }}</p>
        </div>

        <!-- Placement Statistics -->
        <div id="PlacementStatistics" ref="PlacementStatistics" class="scroll-mt-32 bg-white rounded-lg shadow-lg p-4 md:p-6 mb-12 animate-fadeIn">
          <h2 class="text-2xl md:text-3xl font-bold text-black mb-4">Placement Statistics</h2>
          <img src="/placement%20statistics.webp" alt="Placement Statistics" class="w-full max-w-4xl mx-auto h-auto rounded-md shadow-lg" />
        </div>

        <!-- CUIC -->
        <div id="CUIC" ref="CUIC" class="scroll-mt-32 bg-white rounded-lg shadow-lg p-4 md:p-6 mb-12 animate-fadeIn">
          <h2 class="text-2xl md:text-3xl font-bold text-black mb-4">CUIC</h2>
          <p class="text-base md:text-lg text-black">{{ data.cuic }}</p>
        </div>

        <!-- Our Recruiters -->
        <div id="OurRecruiters" ref="OurRecruiters" class="scroll-mt-32 bg-white rounded-lg shadow-lg p-4 md:p-6 mb-12 animate-fadeIn">
          <h2 class="text-2xl md:text-3xl font-bold text-black mb-4">Our Recruiters</h2>
          <img src="/recruiters.jpg" alt="Our Recruiters" class="w-full max-w-4xl mx-auto h-auto rounded-md shadow-lg" />
        </div>

        <!-- Placed Students -->
        <div id="PlacedStudents" ref="PlacedStudents" class="scroll-mt-32 bg-white rounded-lg shadow-lg p-4 md:p-6 mb-12 animate-fadeIn">
          <h2 class="text-2xl md:text-3xl font-bold text-black mb-4">Placed Students</h2>
          <img src="/Placedstudents.webp" alt="Placed Students" class="w-full max-w-4xl mx-auto h-auto rounded-md shadow-lg" />
        </div>

        <!-- Staff Members -->
        <div id="StaffMembers" ref="StaffMembers" class="scroll-mt-32 mb-12 px-4 md:px-10">
          <div class="bg-white p-6 rounded-2xl shadow-md transition duration-300 py-6">
            <h2 class="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-900">Placement Team</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div
                v-for="staff in data.staff_members"
                :key="staff.emailid"
                class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden text-center"
              >
                <div class="h-2 bg-gradient-to-r from-blue-500 to-blue-300"></div>
                <div class="p-6">
                  <img
                    :src="`/${staff.image}`"
                    :alt="staff.name"
                    class="w-24 h-24 mx-auto rounded-full border-2 border-amber-100 shadow object-cover"
                  />
                  <h3 class="mt-4 text-base md:text-lg font-bold text-gray-800">{{ staff.name }}</h3>
                  <p class="text-blue-600 font-medium text-sm">{{ staff.designation }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
import data from '../assets/placement-cell.json';
import recruitersPDF from '../assets/placementBrochure.pdf';

export default {
  data() {
    return {
      data: data,
      backgroundImage: "/offices.webp",
      activeSection: "Description",
      recruitersPDF,
      placedStudentsImage: "/Placedstudents.webp",
      sections: [
        { id: 'Description', label: 'Description' },
        { id: 'PlacementStatistics', label: 'Placement Statistics' },
        { id: 'CUIC', label: 'CUIC' },
        { id: 'OurRecruiters', label: 'Our Recruiters' },
        { id: 'PlacedStudents', label: 'Placed Students' },
        { id: 'StaffMembers', label: 'Staff Members' }
      ],
    };
  },
  methods: {
    scrollToSection(sectionId) {
      this.activeSection = sectionId;
      const section = this.$refs[sectionId];
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
};
</script>
<style scoped>
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

