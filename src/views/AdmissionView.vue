<template>
  <main class="flex-grow font-serif">
    <!-- Hero section -->
    <section 
      class="bg-cover bg-center relative w-full h-40 sm:h-80 md:h-94 animate-fadeIn" 
      :style="{ backgroundImage: `url(${backgroundImage})` }">
      <div class="absolute inset-0 bg-black opacity-20"></div>
      <div class="flex items-center justify-center h-full relative z-10 px-4">
        <h1 class="md:text-4xl text-xl font-extrabold text-white drop-shadow-lg text-center animate-slideIn">
          ADMISSION
        </h1>
      </div>
    </section>

    <!-- Content Sections with Vertical Tabs -->
    <section class="mx-auto py-6 md:py-12 md:px-10 bg-indigo-100 rounded-lg">
      <div class="relative flex flex-col md:px-8 px-4 md:flex-row">
        <!-- Vertical Tabs -->
        <div class="px-8 md:px-0">
          <div class="flex-shrink-0 w-full h-max md:w-64 bg-gradient-to-r from-[#21209c] to-blue-600 rounded-lg shadow-lg p-4 mb-4 md:mb-0">
            <div class="relative p-4 rounded-lg">
              <h2 class="text-2xl text-center text-white font-semibold">Sections</h2>
            </div>
            <div class="space-y-2">
              <button v-for="section in sections" :key="section.key" @click="currentSection = section.key"
                :class="{'bg-yellow-400 text-[#23120b]': currentSection === section.key, 'bg-gray-100': currentSection !== section.key}"
                class="w-full py-2 px-4 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b]">
                {{ section.label }}
              </button>
            </div>
          </div>
        </div>

        <!-- Tab Content -->
        <div class="w-full px-0 md:px-10 min-h-[400px] max-h-[600px] md:max-h-[800px] overflow-y-auto">
          <!-- Overview -->
          <div v-if="currentSection === 'overview'" class="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-16 animate-fadeIn">
            <h2 class="text-2xl md:text-3xl font-bold text-black mb-4">Overview</h2>
            <p class="text-base md:text-lg mb-4">{{ data.description.Overview }}</p>
            <p class="text-base md:text-lg mb-6">{{ data.description['Admissions at our Regional Campus'] }}</p>
            <!-- Flowchart -->
            <div class="flex justify-center">
              <img :src="flowchartImage" alt="Admission Flowchart" class="w-full md:w-3/4 lg:w-1/2" />
            </div>
          </div>

          <!-- Courses Offered -->
          <div v-if="currentSection === 'courses_offered'" class="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-16 animate-fadeIn">
            <h2 class="text-2xl md:text-3xl font-bold text-black mb-4">Courses Offered</h2>
            <div v-for="(programs, category) in data.courses_offered" :key="category" class="mb-6">
              <h3 class="text-xl md:text-2xl font-semibold mb-2">{{ category }}</h3>
              <table class="table-auto w-full border border-gray-300 mb-4">
                <thead>
                  <tr class="bg-gray-200">
                    <th class="border px-4 py-2">S.No</th>
                    <th class="border px-4 py-2">Courses Offered</th>
                    <th class="border px-4 py-2">Intake</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="course in programs" :key="course['S.No']">
                    <td class="border px-4 py-2 text-center">{{ course['S.No'] }}</td>
                    <td class="border px-4 py-2">{{ course['Courses Offered'] }}</td>
                    <td class="border px-4 py-2 text-center">{{ course.Intake }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Eligibility Criteria -->
          <div v-if="currentSection === 'eligibility'" class="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-16 animate-fadeIn">
            <h2 class="text-2xl md:text-3xl font-bold text-black mb-4">Eligibility Criteria</h2>
            <div v-for="(text, program) in data.eligibility_criteria" :key="program" class="mb-4">
              <h3 class="text-xl font-semibold text-indigo-700 mb-2">{{ program }}</h3>
              <p class="text-base md:text-lg">{{ text }}</p>
            </div>
          </div>

          <!-- Staff -->
          <div v-if="currentSection === 'staff'" class="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-16 animate-fadeIn">
            <h2 class="text-2xl md:text-3xl font-bold text-black mb-4">Staff</h2>
            <div v-for="person in data.staff" :key="person.name" class="border p-4 rounded-lg shadow-md bg-indigo-50 mb-4">
              <h3 class="text-xl font-bold text-indigo-800">{{ person.name }}</h3>
              <p><strong>Position:</strong> {{ person.position }}</p>
              <p><strong>Department:</strong> {{ person.department }}</p>
              <p><strong>University:</strong> {{ person.university }}</p>
              <p><strong>Address:</strong> {{ person.address }}</p>
              <p><strong>Phone:</strong> {{ person.phone }}</p>
              <p><strong>Email:</strong> <a :href="`mailto:${person.email}`" class="text-blue-600 underline">{{ person.email }}</a></p>
            </div>
          </div>

          <!-- Contact Us -->
          <div v-if="currentSection === 'contact'" class="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-16 animate-fadeIn">
            <h2 class="text-2xl md:text-3xl font-bold text-black mb-4">Contact Us</h2>
            <p class="text-base md:text-lg mb-2"><strong>Address:</strong> {{ data.contact_us.address }}</p>
            <p class="text-base md:text-lg mb-2"><strong>Phone:</strong> {{ data.contact_us.phone }}</p>
            <p class="text-base md:text-lg"><strong>Email:</strong> <a :href="`mailto:${data.contact_us.email}`" class="text-blue-600 underline">{{ data.contact_us.email }}</a></p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import admissionData from '../assets/admission.json';
import backgroundImage from '@/assets/offices.webp';
import flowchartImage from '@/assets/admission-flowchart.webp'; // Import the image here

export default {
  name: 'AdmissionSection',
  data() {
    return {
      data: admissionData[0],
      backgroundImage,
      flowchartImage, // Use it in the template
      currentSection: 'overview',
      sections: [
        { key: 'overview', label: 'Overview' },
        { key: 'courses_offered', label: 'Courses Offered' },
        { key: 'eligibility', label: 'Eligibility Criteria' },
        { key: 'staff', label: 'Staff' },
        { key: 'contact', label: 'Contact Us' },
      ]
    }
  }
}
</script>

<style scoped>
.animate-fadeIn {
  animation: fadeIn 1s ease-in-out;
}
.animate-slideIn {
  animation: slideIn 0.8s ease-in-out;
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes slideIn {
  from { transform: translateY(30px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
</style>
