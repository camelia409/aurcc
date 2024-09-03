<template>
  <main class="flex-grow">
    <!-- Hero section -->
    <section 
    class="hero-section bg-cover  py-24 relative -z-10" 
    :style="{ 
     backgroundImage: `url(${backgroundImage})`, 
      backgroundSize: 'cover',
      backgroundPosition: 'top center' 
    }">
      <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-blue-900 via-transparent to-blue-900 opacity-70"></div>
      <div class="container mx-auto py-10 text-center relative z-10 px-4">
        <h1 class="text-4xl font-extrabold text-black  drop-shadow-lg {font-family: 'Algerian', 'Arial', sans-serif;}">{{ data.name }}</h1>
      </div>
    </section>

    <!-- Content sections with Vertical Tabs -->
    <section class="mx-auto py-10 px-4 bg-gray-100">
      <div class="flex flex-col md:flex-row">
        <!-- Vertical Tabs -->
        <div class="flex-shrink-0 w-full h-max lg:w-64 bg-gradient-to-r from-[#21209c] to-blue-600 rounded-lg shadow-lg p-4 overflow-hidden mb-4 lg:mb-0">
          <div class="relative bg-gradient-to-r from-[#21209c] to-blue-600 p-4 rounded-lg">
            <h2 class="text-2xl font-serif text-white font-bold text-center">Sections</h2>
          </div>
          <div class="space-y-2 font-serif">
            <button @click="currentSection = 'Description'" :class="{'bg-yellow-400 text-[#23120b]': currentSection === 'Description', 'bg-gray-100': currentSection !== 'Description'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b]">Description</button>
            <button @click="currentSection = 'officeBearer'" :class="{'bg-yellow-400 text-[#23120b]': currentSection === 'officeBearer', 'bg-gray-100': currentSection !== 'officeBearer'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b]">Office Bearer</button>
            <button @click="currentSection = 'affiliationStaff'" :class="{'bg-yellow-400 text-[#23120b]': currentSection === 'affiliationStaff', 'bg-gray-100': currentSection !== 'affiliationStaff'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b]">Affiliation Administration Staff</button>
            <button @click="currentSection = 'contactUs'" :class="{'bg-yellow-400 text-[#23120b]': currentSection === 'contactUs', 'bg-gray-100': currentSection !== 'contactUs'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b]">Contact Us</button>
          </div>
        </div>

        <!-- Tab Content -->
        <div class="w-full px-10 font-serif">

          <div v-if="currentSection === 'Description'" >
            <h3 class="text-2xl md:text-4xl font-bold mb-4 mt-5">Description</h3>
            <p class="text-base md:text-lg mb-8 text-black">{{ data.description['About Office of Affiliation and its activities'] }}</p>        
          </div>
          <!-- Office Bearer Section -->

          <div v-else-if="currentSection === 'officeBearer'">
            <h3 class="text-2xl md:text-4xl font-bold mb-4 mt-5">Office Bearer</h3>
            <div v-if="data.office_bearers" class="text-base md:text-xl text-gray-900">
              <div class="bg-white p-4 rounded-lg shadow-md mb-4">
                <p><strong>Name:</strong> {{ data.office_bearers.name }}</p>
                <p><strong>Qualification:</strong> {{ data.office_bearers.qualification }}</p>
                <p><strong>Position:</strong> {{ data.office_bearers.position }}</p>
              </div>
            </div>
          </div>

          <!-- Affiliation Administration Staff Section -->
          <div v-if="currentSection === 'affiliationStaff'">
            <h3 class="text-2xl md:text-4xl font-bold mb-4 mt-5">Affiliation Administration Staff</h3>
            <div v-if="data.affiliation_administration_staff" class="text-base md:text-xl text-gray-900">
              <div v-for="staff in data.affiliation_administration_staff" :key="staff.name" class="bg-white p-4 rounded-lg shadow-md mb-4">
                <p><strong>Name:</strong> {{ staff.name }}</p>
                <p><strong>Position:</strong> {{ staff.position }}</p>
                <p><strong>Phone:</strong> {{ staff.phone }}</p>
                <p><strong>Email:</strong> {{ staff.email }}</p>
              </div>
            </div>
          </div>

          <!-- Contact Us Section -->
          <div v-if="currentSection === 'contactUs'">
            <h3 class="text-2xl md:text-4xl font-bold mb-4 mt-5">Contact Us</h3>
            <div v-if="data.contact_details" class="text-base md:text-xl text-gray-900">
              <div class="bg-white p-4 rounded-lg shadow-md">
                <p><strong>Office:</strong> {{ data.contact_details.office }}</p>
                <p><strong>Address:</strong> {{ data.contact_details.address }}</p>
                <p><strong>Phone:</strong> {{ data.contact_details.phone }}</p>
                <p><strong>Email:</strong> {{ data.contact_details.email }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import data from '../assets/office of affiliation.json';
import backgroundImage from '@/assets/affiliation.webp';
export default {
  data() {
    return {
      data: data,
      backgroundImage: backgroundImage,
      currentSection: 'Description' // Default to 'officeBearer'
    };
  },
};
</script>

<style scoped>
/* Custom styles for the component */


button.bg-white {
  background-color: #fff;
}
</style>
