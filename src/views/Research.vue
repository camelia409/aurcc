<template>
  <div class="flex-grow">
    <!-- Hero Section -->
    <section
      class="bg-cover bg-center relative -z-10"
      :style="'background-image: url(http://192.168.72.231:5173/src/assets/dgate-hero.jpg)'"
    >
      <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-blue-900 via-transparent to-blue-900 opacity-70"></div>
      <div class="container mx-auto py-10 text-center relative z-10 px-4">
        <h1 class="text-4xl font-extrabold text-black drop-shadow-lg font-serif">{{ data.name }}</h1>
      </div>
    </section>

    <!-- Content Sections with Vertical Tabs -->
    <section class="mx-auto py-10 px-10 bg-gray-100 rounded-lg">
      <div class="flex flex-col md:flex-row">
        <!-- Vertical Tabs -->
        <div class="flex-shrink-0 w-full h-max md:w-64 bg-gradient-to-r from-[#21209c] to-blue-600 rounded-lg shadow-lg p-4 overflow-hidden">
          <div class="relative p-4 rounded-lg">
            <h2 class="text-2xl font-serif text-center text-white font-bold">Sections</h2>
          </div>
          <div class="space-y-2 font-serif">
            <button @click="currentSection = 'Description'" :class="{'bg-yellow-400 text-[#23120b]': currentSection === 'Description', 'bg-gray-100': currentSection !== 'Description'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b]">Description</button>
            <button @click="currentSection = 'Supervisors'" :class="{'bg-yellow-400 text-[#23120b]': currentSection === 'Supervisors', 'bg-gray-100': currentSection !== 'Supervisors'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b]">Supervisors</button>
            <button @click="currentSection = 'PhD Scholars'" :class="{'bg-yellow-400 text-[#23120b]': currentSection === 'PhD Scholars', 'bg-gray-100': currentSection !== 'PhD Scholars'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b]">PhD Scholars</button>
            <button @click="currentSection = 'PG Projects'" :class="{'bg-yellow-400 text-[#23120b]': currentSection === 'PG Projects', 'bg-gray-100': currentSection !== 'PG Projects'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b]">PG Projects</button>
            <button @click="currentSection = 'Stipend Details'" :class="{'bg-yellow-400 text-[#23120b]': currentSection === 'Stipend Details', 'bg-gray-100': currentSection !== 'Stipend Details'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b]">Stipend Details</button>
          </div>
        </div>

        <!-- Content -->
        <div class="w-full px-10 font-serif min-h-[400px] max-h-[450px]  ">
          <div v-if="currentSection === 'Description'">
            <h2 class="text-2xl md:text-4xl text-black font-bold mb-4 mt-5">Description</h2>
            <p class="text-base md:text-lg mb-8 text-black">{{ data.description }}</p>
          </div>

          <div v-else-if="currentSection === 'Supervisors'">
            <h2 class="text-2xl md:text-4xl text-black font-bold mb-4 mt-5">Supervisors</h2>
            <div v-for="(supervisors, department) in data.supervisors" :key="department" class="mb-5">
              <h3 @click="openModal(department)" class="text-xl md:text-xl font-semibold mb-4 cursor-pointer text-blue-500 hover:underline">{{ department }}</h3>
            </div>
          </div>

          <div v-else-if="currentSection === 'PhD Scholars'">
            <h2 class="text-4xl font-bold mb-4 p-2 text-black">PhD Scholars</h2>
            
            <!-- Faculty-Wise PhD Scholars -->
            <div class="faculty-wise-section mb-8 overflow-x-auto">
              <h3 class="text-lg font-semibold mb-4 p-2 text-blue-600">Faculty-Wise PhD Scholars</h3>
              <table class="min-w-full bg-white border text-xs md:text-sm">
                <thead class="bg-yellow-400 text-[#23120b]">
                  <tr>
                    <th class="px-2 py-1 md:px-4 md:py-2 border">Faculty Name</th>
                    <th class="px-2 py-1 md:px-4 md:py-2 border">Completed (Full-Time)</th>
                    <th class="px-2 py-1 md:px-4 md:py-2 border">Completed (Part-Time)</th>
                    <th class="px-2 py-1 md:px-4 md:py-2 border">Total Completed</th>
                    <th class="px-2 py-1 md:px-4 md:py-2 border">Registered (Full-Time)</th>
                    <th class="px-2 py-1 md:px-4 md:py-2 border">Registered (Part-Time)</th>
                    <th class="px-2 py-1 md:px-4 md:py-2 border">Total Registered</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="scholar in phdScholars.faculty_wise_phd_scholars" :key="scholar.faculty_name">
                    <td class="px-2 py-1 md:px-4 md:py-2 border">{{ scholar.faculty_name }}</td>
                    <td class="px-2 py-1 md:px-4 md:py-2 border text-center">{{ scholar.phd_completed.full_time }}</td>
                    <td class="px-2 py-1 md:px-4 md:py-2 border text-center">{{ scholar.phd_completed.part_time }}</td>
                    <td class="px-2 py-1 md:px-4 md:py-2 border text-center">{{ scholar.phd_completed.total }}</td>
                    <td class="px-2 py-1 md:px-4 md:py-2 border text-center">{{ scholar.phd_registered.full_time }}</td>
                    <td class="px-2 py-1 md:px-4 md:py-2 border text-center">{{ scholar.phd_registered.part_time }}</td>
                    <td class="px-2 py-1 md:px-4 md:py-2 border text-center">{{ scholar.phd_registered.total }}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Department-Wise PhD Scholars -->
            <div class="department-wise-section overflow-x-auto">
              <h3 class="text-lg font-semibold mb-4 p-2 text-blue-600">Department-Wise PhD Scholars</h3>
              <table class="min-w-full bg-white border text-xs md:text-sm">
                <thead class="bg-yellow-400 text-[#23120b]">
                  <tr>
                    <th class="px-2 py-1 md:px-4 md:py-2 border">Department Name</th>
                    <th class="px-2 py-1 md:px-4 md:py-2 border">Completed (Full-Time)</th>
                    <th class="px-2 py-1 md:px-4 md:py-2 border">Completed (Part-Time)</th>
                    <th class="px-2 py-1 md:px-4 md:py-2 border">Total Completed</th>
                    <th class="px-2 py-1 md:px-4 md:py-2 border">Registered (Full-Time)</th>
                    <th class="px-2 py-1 md:px-4 md:py-2 border">Registered (Part-Time)</th>
                    <th class="px-2 py-1 md:px-4 md:py-2 border">Total Registered</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="department in phdScholars.department_wise_phd_scholars" :key="department.department_name">
                    <td class="px-2 py-1 md:px-4 md:py-2 border">{{ department.department_name }}</td>
                    <td class="px-2 py-1 md:px-4 md:py-2 border text-center">{{ department.phd_completed.full_time }}</td>
                    <td class="px-2 py-1 md:px-4 md:py-2 border text-center">{{ department.phd_completed.part_time }}</td>
                    <td class="px-2 py-1 md:px-4 md:py-2 border text-center">{{ department.phd_completed.total }}</td>
                    <td class="px-2 py-1 md:px-4 md:py-2 border text-center">{{ department.phd_registered.full_time }}</td>
                    <td class="px-2 py-1 md:px-4 md:py-2 border text-center">{{ department.phd_registered.part_time }}</td>
                    <td class="px-2 py-1 md:px-4 md:py-2 border text-center">{{ department.phd_registered.total }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div v-else-if="currentSection === 'PG Projects'">
            <h2 class="text-2xl md:text-4xl text-black font-bold mb-4 mt-5">PG Projects</h2>
            <p class="text-base md:text-xl">Total PG Projects: {{ data.pg_projects.total }}</p>
            <table class="table-auto w-full shadow-md rounded-md mt-4 text-sm md:text-base">
              <thead class="bg-yellow-400 text-[#23120b]">
                <tr>
                  <th class="px-4 py-2">Department</th>
                  <th class="px-4 py-2">Number of Projects</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(projects, department) in data.pg_projects.departmentwise" :key="department">
                  <td class="border px-4 py-2">{{ department }}</td>
                  <td class="border px-4 py-2">{{ projects }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div v-else-if="currentSection === 'Stipend Details'">
            <h2 class="text-2xl md:text-4xl text-black font-bold mb-4 mt-5">Stipend Details</h2>
            <div class="overflow-x-auto">
              <table class="table-auto w-full bg-white shadow-md rounded-md text-sm md:text-base">
                <thead class="bg-yellow-400 text-[#23120b]">
                  <tr>
                    <th class="px-4 py-2">Supervisor Name</th>
                    <th class="px-4 py-2">Scholar Name</th>
                    <th class="px-4 py-2">Mode</th>
                    <th class="px-4 py-2">Batch</th>
                    <th class="px-4 py-2">Funding Agency</th>
                    <th class="px-4 py-2">Funding Scheme</th>
                    <th class="px-4 py-2">Stipend Amount</th>
                    <th class="px-4 py-2">Stipend Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="detail in data.stipend_details" :key="detail.scholar_name">
                    <td class="border px-4 py-2">{{ detail.supervisor_name }}</td>
                    <td class="border px-4 py-2">{{ detail.scholar_name }}</td>
                    <td class="border px-4 py-2">{{ detail.full_time_or_part_time }}</td>
                    <td class="border px-4 py-2">{{ detail.batch }}</td>
                    <td class="border px-4 py-2">{{ detail.funding_agency }}</td>
                    <td class="border px-4 py-2">{{ detail.funding_scheme }}</td>
                    <td class="border px-4 py-2">{{ detail.stipend_amount }}</td>
                    <td class="border px-4 py-2">{{ detail.stipend_duration }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal -->
    <transition name="modal">
      <div v-if="showModal" class="fixed inset-0 flex items-center justify-center z-50">
        <div class="fixed inset-0 bg-gray-800 opacity-50" @click="closeModal"></div>
        <div class="modal-box relative rounded-lg flex flex-col max-w-4xl p-6">
          <div class="p-4 border-b">
            <h3 class="text-xl font-bold">{{ modalDepartment }}</h3>
            <button @click="closeModal" class="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
          <div class="p-4">
            <table class="table-auto w-full bg-white shadow-md rounded-md text-sm md:text-base">
              <thead class="bg-yellow-400 text-[#23120b]">
                <tr>
                  <th class="px-4 py-2">S.No</th>
                  <th class="px-4 py-2">Ref. No</th>
                  <th class="px-4 py-2">Supervisor Name</th>
                  <th class="px-4 py-2">Designation</th>
                  <th class="px-4 py-2">Research Area</th>
                  <th class="px-4 py-2">Email</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="supervisor in modalSupervisors" :key="supervisor.refNo">
                  <td class="border px-4 py-2">{{ supervisor.sno }}</td>
                  <td class="border px-4 py-2">{{ supervisor.refNo }}</td>
                  <td class="border px-4 py-2">{{ supervisor.supervisorName }}</td>
                  <td class="border px-4 py-2">{{ supervisor.designation }}</td>
                  <td class="border px-4 py-2">{{ supervisor.researchArea }}</td>
                  <td class="border px-4 py-2">{{ supervisor.email }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import data from '../assets/research-cell.json';

export default {
  data() {
    return {
      currentSection: "Description",
      data: data,
      phdScholars: data.phd_scholars,
      showModal: false,
      modalDepartment: '',
      modalSupervisors: []
    };
  },
  methods: {
    openModal(department) {
      this.modalDepartment = department;
      this.modalSupervisors = this.data.supervisors[department];
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.modalDepartment = '';
      this.modalSupervisors = [];
    }
  }
};
</script>

<style scoped>
.modal-enter-active, .modal-leave-active {
  transition: opacity 0.3s;
}
.modal-enter, .modal-leave-to /* .modal-leave-active in <2.1.8 */ {
  opacity: 0;
}
.table-responsive {
  overflow-x: auto;
}
.table th,
.table td {
  white-space: nowrap;
  text-align: left;
}

@media (max-width: 768px) {
  .table th,
  .table td {
    padding: 0.25rem;
    font-size: 0.75rem;
  }
}
</style>
