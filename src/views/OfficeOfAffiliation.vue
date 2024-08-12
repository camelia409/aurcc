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
          <div class="sticky top-0 bg-[white] shadow-md z-10 hidden xl:block">
            <div class="flex justify-between  px-9 ">
              <nav role="tablist" class="tabs">
                <button role="tab"
                  v-for="(section, index) in sections"
                  :key="index"
                  @click="scrollToSection(section)"
                  :class="{
                    'bg-[#21209C] text-white ': currentSection === section,
                    'text-black hover:bg-blue-700 hover:text-white ': currentSection !== section
                  }"
                  class="font-semibold p-4 h-full transition duration-300 ease-in-out tab text-xl "
                >
                  {{ section }}
                </button>
              </nav>
            </div>
          </div>
          <section v-if="currentSection !== null" class="container p-6 md:col-span-3">
            <div id="Important Links">
              <h2 class="text-2xl font-bold p-4">Important Links</h2>
              <ul class="list-disc p-4">
                <li v-for="(link, title) in data.important_links" :key="title">
                  <a :href="link" target="_blank" class="text-blue-500 hover:underline">{{ title }}</a>
                </li>
              </ul>
            </div>
            <div id="Office Bearer">
              <h2 class="text-2xl font-bold mb-4">Office Bearer</h2>
              <p><strong>Name:</strong> {{ data.office_bearers.name }}</p>
              <p><strong>Qualification:</strong> {{ data.office_bearers.qualification }}</p>
              <p><strong>Position:</strong> {{ data.office_bearers.position }}</p>
              <div v-if="data.affiliation_administration_staff">
                <h3 class="text-xl font-bold mt-4">Affiliation Administration Staff</h3>
                <table class="min-w-full bg-white">
                  <thead class="bg-gray-200">
                    <tr>
                      <th class="py-2 px-4 border-b">Name</th>
                      <th class="py-2 px-4 border-b">Position</th>
                      <th class="py-2 px-4 border-b">Phone</th>
                      <th class="py-2 px-4 border-b">Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="staff in data.affiliation_administration_staff" :key="staff.name">
                      <td class="py-2 px-4 border-b">{{ staff.name }}</td>
                      <td class="py-2 px-4 border-b">{{ staff.position }}</td>
                      <td class="py-2 px-4 border-b">{{ staff.phone }}</td>
                      <td class="py-2 px-4 border-b">{{ staff.email }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div id="Contact Us">
              <h2 class="text-2xl font-bold mb-4">Contact Us</h2>
              <p><strong>Office:</strong> {{ data.contact_details.office }}</p>
              <p><strong>Address:</strong> {{ data.contact_details.address }}</p>
              <p><strong>Phone:</strong> {{ data.contact_details.phone }}</p>
              <p><strong>Email:</strong> {{ data.contact_details.email }}</p>
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
  