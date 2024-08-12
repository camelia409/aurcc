<template>
    <main class="flex-grow">
      <!-- Hero section -->
      <section class="bg-cover bg-center relative -z-10" :style="'background-image: url(http://192.168.72.231:5173/src/assets/dgate-hero.jpg)'">
        <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div class="container mx-auto py-16 text-white p-9 relative z-10">
          <h1 class="text-4xl font-bold mb-4">{{ data.name }}</h1>
          <p class="text-xl mb-8">{{ data.description['About Office of Affiliation and its activities'] }}</p>
          <button class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Learn More</button>
        </div>
      </section>
  
      <!-- Content sections -->
      <section class="">
          <section v-if="currentSection !== null" class="p-6 bg-gray-100 md:col-span-3">
            <div class="grid grid-cols-2 gap-4">
            <div id="Office Bearer" class="bg-white">
              <h2 class="text-2xl text-center font-bold bg-yellow-300 p-3 rounded-md  ">
                Office Bearer
              </h2>

              <div v-if="data.office_bearers" class="space-y-4 p-4">
                <div class="p-4 text-xl">
                  <p><strong>Name:</strong> {{ data.office_bearers.name }}</p>
                  <p><strong>Qualification:</strong> {{ data.office_bearers.qualification }}</p>
                  <p><strong>Position:</strong> {{ data.office_bearers.position }}</p>
                </div>
              </div>
            </div>

            <div id="Affiliation Administration Staff" class="bg-white">
              <h2 class="text-2xl text-center font-bold bg-yellow-300 p-3 rounded-md ">
                Affiliation Administration Staff
              </h2>

              <div v-if="data.affiliation_administration_staff" class="space-y-4 p-4">
                <div
                  v-for="staff in data.affiliation_administration_staff"
                  :key="staff.name"
                  class="p-4 text-xl"
                >
                  <p><strong>Name:</strong> {{ staff.name }}</p>
                  <p><strong>Position:</strong> {{ staff.position }}</p>
                  <p><strong>Phone:</strong> {{ staff.phone }}</p>
                  <p><strong>Email:</strong> {{ staff.email }}</p>
                </div>
              </div>
            </div>
            </div>
            <div id="Contact Us" class="bg-white mt-4">
              <h2 class="text-2xl font-bold text-center bg-yellow-300 p-3 rounded-md">
                Contact Us
              </h2>

              <div v-if="data.contact_details" class="text-xl px-10 pt-6 pb-6">
                <p><strong>Office:</strong> {{ data.contact_details.office }}</p>
                <p><strong>Address:</strong> {{ data.contact_details.address }}</p>
                <p><strong>Phone:</strong> {{ data.contact_details.phone }}</p>
                <p><strong>Email:</strong> {{ data.contact_details.email }}</p>
              </div>
            </div>

          </section>
      </section>
    </main>
  </template>
  
  <script>
  import data from '../assets/office of affiliation.json';
  
  export default {
    data() {
      return {
        data: data,
        sections: [
          'Important Links',
          'Office Bearer',
          'Contact Us'
        ],
        currentSection: null
      };
    },
    created() {
      // Default to first section
      if (this.sections.length > 0) {
        this.currentSection = this.sections[0];
      }
    },
  };
  </script>
  
  <style scoped>
  /* Add your custom styles here */
  .table-container {
    overflow-x: auto;
  }
  
  .table-container table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .table-container th,
  .table-container td {
    padding: 8px 12px;
    border: 1px solid #ddd;
  }
  
  .table-container th {
    background-color: #f5f5f5;
  }
  
  .table-container tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  </style>
  