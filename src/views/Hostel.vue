<template>
  <main class="flex-grow">
    <!-- Hero section -->
    <section class="bg-cover bg-center relative -z-10" :style="'background-image: url(http://localhost:5173/src/assets/hostel-hero.jpg)'">
      <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div class="container mx-auto py-16 text-white p-9 relative z-10">
        <h1 class="text-4xl font-bold mb-4">Hostel</h1>
        <p class="text-xl mb-8">Explore our hostel facilities and services.</p>
        <button class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Learn More</button>
      </div>
    </section>

    <!-- Content sections -->
    <section class="container mx-auto py-8 p-9">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 class="text-2xl font-bold mb-4 flex items-center">
            <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
            </svg>
            Sections
          </h2>
          <div class="flex flex-col">
            <button v-for="(section, index) in sections" :key="index" @click="currentSection = section" :class="{'bg-blue-500 text-white': currentSection === section, 'bg-white hover:bg-gray-100 text-gray-800': currentSection !== section}" class="font-semibold py-2 px-4 border border-gray-400 rounded shadow flex items-center mb-2">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
              {{ section }}
            </button>
          </div>
        </div>
        <section v-if="currentSection !== null" class="container mx-auto py-8 p-9 md:col-span-3">
          <div v-if="currentSection === 'Description'">
            <h2 class="text-2xl font-bold mb-4">Description</h2>
            <p>{{ hostel.Description }}</p>
          </div>
          <div v-else-if="currentSection === 'Administration'">
            <h2 class="text-2xl font-bold mb-4">Administration</h2>
            <h3 class="text-xl font-semibold mb-2">Wardens</h3>
            <div v-for="warden in hostel.Administration.Wardens" :key="warden.Name" class="mb-4">
              <p>{{ warden.Name }} - {{ warden.Designation }}</p>
              <p>Phone: {{ warden["Phone No"] }}</p>
              <p>Email: <a :href="'mailto:' + warden['Email ID']" class="text-blue-500 underline">{{ warden['Email ID'] }}</a></p>
            </div>
            <h3 class="text-xl font-semibold mb-2">Deputy Wardens</h3>
            <div v-for="deputyWarden in hostel.Administration['Deputy Wardens']" :key="deputyWarden.Name" class="mb-4">
              <p>{{ deputyWarden.Name }} - {{ deputyWarden.Designation }}</p>
              <p>Phone: {{ deputyWarden["Phone No"] }}</p>
              <p>Email: <a :href="'mailto:' + deputyWarden['Email ID']" class="text-blue-500 underline">{{ deputyWarden['Email ID'] }}</a></p>
            </div>
            <h3 class="text-xl font-semibold mb-2">Hostel Office Staffs</h3>
            <div v-for="staff in hostel.Administration['Hostel Office Staffs']" :key="staff.Name" class="mb-4">
              <p>{{ staff.Name }} - {{ staff.Designation }}</p>
            </div>
            <h3 class="text-xl font-semibold mb-2">Residential Tutors</h3>
            <div v-for="tutor in hostel.Administration['Residential Tutors']" :key="tutor.Name" class="mb-4">
              <p>{{ tutor.Name }} - {{ tutor.Designation }}</p>
              <p>Phone: {{ tutor["Phone No"] }}</p>
            </div>
            <h3 class="text-xl font-semibold mb-2">Student Secretaries</h3>
            <h4 class="text-lg font-semibold">Boys Hostel</h4>
            <div v-for="secretary in hostel.Administration['Student Secretaries']['Boys Hostel Student Secretary']" :key="secretary['Name of the Student']" class="mb-4">
              <p>{{ secretary['Name of the Student'] }} - {{ secretary.Secretary }}</p>
              <p>{{ secretary['Year/Branch/Dept'] }}</p>
            </div>
            <h4 class="text-lg font-semibold">Girls Hostel</h4>
            <div v-for="secretary in hostel.Administration['Student Secretaries']['Girls Hostel Student Secretary']" :key="secretary['Name of the Student']" class="mb-4">
              <p>{{ secretary['Name of the Student'] }} - {{ secretary.Secretary }}</p>
              <p>{{ secretary['Year/Branch/Dept'] }}</p>
              <p>Phone: {{ secretary['Phone No'] }}</p>
            </div>
          </div>
          <div v-else-if="currentSection === 'Fees Structure'">
            <h2 class="text-2xl font-bold mb-4">Fees Structure</h2>
            <p><a :href="hostel['Fees Structure']['New Admission']" class="text-blue-500 underline">New Admission</a></p>
            <p><a :href="hostel['Fees Structure']['Existing Students']" class="text-blue-500 underline">Existing Students</a></p>
          </div>
          <div v-else-if="currentSection === 'Rules and Regulations'">
            <h2 class="text-2xl font-bold mb-4">Rules and Regulations</h2>
            <!-- <p><a href="../assets/Rules.pdf" class="text-blue-500 underline">View Rules and Regulations</a></p> -->
            <iframe src="http://localhost:5173/src/assets/Rules.pdf" width="100%" height="800"></iframe>
          </div>
        </section>
      </div>
    </section>
  </main>
</template>

<script>
import hostelData from '../assets/hostel.json';

export default {
  data() {
    return {
      hostel: hostelData,
      sections: [
        'Description',
        'Administration',
        'Fees Structure',
        'Rules and Regulations'
      ],
      currentSection: null
    };
  },
  created() {
    // Default to first section
    if (this.sections.length > 0) {
      this.currentSection = this.sections[0];
    }
  }
};
</script>

<style scoped>
/* Add any custom styles for your component here */
</style>
