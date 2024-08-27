<template>
    <div class="flex-grow">
      <!-- Hero section -->
      <section 
      class="hero-section bg-cover bg-center relative -z-10" 
      :style="{ backgroundImage: `url(${backgroundImage})` }">
        <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div class="container mx-auto py-16 text-white p-9 relative z-10">
          <h1 class="text-4xl font-bold mb-4">Contact Information</h1>
          <p class="text-xl mb-8">Get in touch with the relevant offices for any assistance or inquiries.</p>
        </div>
      </section>
  
      <!-- General Information section -->
      <!--div class="bg-white py-8">
        <section class="py-8 px-4">
          <div class="bg-gray-50 rounded-lg shadow-md p-6">
            <h2 class="text-3xl text-center font-bold mb-4 ">General Information</h2>
            <p class="text-lg mb-6">
              Welcome to the Contact Information page. Here, you will find the essential contact details of various offices 
              to assist you with your academic, administrative, and other student-related needs. Our staff is committed 
              to helping you with any inquiries or issues you may have during your time at our institution.
            </p>
            <p class="text-lg">
              Whether you need to get in touch with the Dean, inquire about exam schedules, or seek guidance from the 
              Student Affairs Office, the contact details below will direct you to the right place.
            </p>
          </div>
        </section>
      </div-->
  
      <!-- Background section below the hero -->
      <div class="bg-indigo-100 py-8">
        <!-- Contact Office and Numbers section -->
        <section class="py-8 px-4">
          <div class="bg-white rounded-lg shadow-md">
            <h2 class="text-3xl text-center font-bold p-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-300">Contact Office and Numbers</h2>
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Office</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact Number</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="(contact, index) in contacts" :key="index">
                  <td class="px-6 py-4 whitespace-nowrap">{{ contact.office }}</td>
                  <td class="px-6 py-4 whitespace-nowrap">{{ contact.number }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  </template>
  
  <script>
  import contacts from '../assets/contact.json';
  import backgroundImage from '@/assets/contact.webp';  // Correct path for the image
  export default {
    data() {
      return {
        backgroundImage: backgroundImage,
        contacts: contacts.contacts
      };
    }
  };
  </script>
  
  <style scoped>
  /* Add any custom styles for the table or section if needed */
  </style>
  