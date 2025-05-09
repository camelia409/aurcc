<template>
  <main class="font-serif text-gray-800">
    <!-- Hero Section -->
    <section
      class="w-full h-40 sm:h-80 md:h-96 bg-cover bg-center relative"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
    >
      <div class="absolute inset-0 bg-black opacity-30"></div>
      <div class="flex items-center justify-center h-full relative z-10 px-4">
        <h1 class="md:text-5xl text-2xl font-extrabold text-white drop-shadow-lg text-center">
          ADMISSION
        </h1>
      </div>
    </section>

    <!-- Navigation Tabs - Modern floating design -->
    <div class="sticky top-0 z-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white/95 backdrop-blur-sm shadow-lg rounded-full -mt-6 py-1 px-2 flex justify-center overflow-x-auto no-scrollbar">
          <nav role="tablist" class="tabs flex space-x-1 md:space-x-2">
            <button
              v-for="section in sections"
              :key="section.key"
              @click="currentSection = section.key"
              :class="{
                'bg-indigo-600 text-white': currentSection === section.key,
                'text-gray-700 hover:bg-gray-100': currentSection !== section.key
              }"
              class="font-medium px-4 md:px-5 py-2 md:py-3 rounded-full text-sm md:text-base transition duration-300 whitespace-nowrap"
            >
              {{ section.label }}
            </button>
          </nav>
        </div>
      </div>
    </div>

    <!-- Content Sections -->
    <section class="py-10 md:py-16 px-4 sm:px-6 lg:px-8 bg-indigo-50">
      <div class="max-w-7xl mx-auto space-y-12">
        <!-- Overview -->
        <div v-if="currentSection === 'overview'" class="bg-white rounded-2xl shadow p-6 md:p-10">
          <h2 class="text-3xl font-bold mb-4">Overview</h2>
          <p class="mb-4">{{ data.description.Overview }}</p>
          <p class="mb-6">{{ data.description['Admissions at our Regional Campus'] }}</p>
          <div class="flex justify-center">
            <img :src="flowchartImage" alt="Admission Flowchart" class="w-full md:w-3/4 lg:w-1/2 rounded shadow" />
          </div>
        </div>

        <!-- Courses Offered -->
        <div v-if="currentSection === 'courses_offered'" class="bg-white rounded-2xl shadow p-6 md:p-10">
          <h2 class="text-3xl font-bold mb-6">Courses Offered</h2>
          <div v-for="(programs, category) in data.courses_offered" :key="category" class="mb-8">
            <h3 class="text-2xl font-semibold text-indigo-700 mb-3">{{ category }}</h3>
            <div class="overflow-x-auto">
              <table class="table-auto w-full border border-gray-300 mb-4 text-left">
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
        </div>

        <!-- Eligibility Criteria -->
        <div v-if="currentSection === 'eligibility'" class="bg-white rounded-2xl shadow p-6 md:p-10">
          <h2 class="text-3xl font-bold mb-6">Eligibility Criteria</h2>
          <div v-for="(text, program) in data.eligibility_criteria" :key="program" class="mb-4">
            <h3 class="text-xl font-semibold text-indigo-700 mb-2">{{ program }}</h3>
            <p>{{ text }}</p>
          </div>
        </div>

        <!-- Staff -->
        <div v-if="currentSection === 'staff'" class="bg-white rounded-2xl shadow p-6 md:p-10">
          <h2 class="text-3xl font-bold mb-6">Staff</h2>
          <div
            v-for="person in data.staff"
            :key="person.name"
            class="flex flex-col md:flex-row items-center md:items-start bg-indigo-50 rounded-xl p-6 md:p-8 mb-6 shadow-md gap-6"
          >
            <div class="flex-shrink-0">
              <img
                :src="staffImage"
                alt="Staff Photo"
                class="w-40 h-40 md:w-48 md:h-48 object-cover rounded-2xl border-4 border-white shadow-lg"
              />
            </div>
            <div class="text-center md:text-left space-y-1">
              <h3 class="text-2xl font-bold text-indigo-800">{{ person.name }}</h3>
              <p><span class="font-semibold">Position:</span> {{ person.position }}</p>
              <p><span class="font-semibold">Department:</span> {{ person.department }}</p>
              <p><span class="font-semibold">University:</span> {{ person.university }}</p>
              <p><span class="font-semibold">Address:</span> {{ person.address }}</p>
              <p><span class="font-semibold">Phone:</span> {{ person.phone }}</p>
              <p>
                <span class="font-semibold">Email:</span>
                <a :href="`mailto:${person.email}`" class="text-blue-600 underline">{{ person.email }}</a>
              </p>
            </div>
          </div>
        </div>


        <!-- Contact Us -->
        <div v-if="currentSection === 'contact'" class="bg-white rounded-2xl shadow p-6 md:p-10">
          <h2 class="text-3xl font-bold mb-6">Contact Us</h2>
          <p class="mb-2"><strong>Address:</strong> {{ data.contact_us.address }}</p>
          <p class="mb-2"><strong>Phone:</strong> {{ data.contact_us.phone }}</p>
          <p><strong>Email:</strong> <a :href="`mailto:${data.contact_us.email}`" class="text-blue-600 underline">{{ data.contact_us.email }}</a></p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import admissionData from '../assets/admission.json';
import backgroundImage from '@/assets/offices.webp';
import flowchartImage from '@/assets/admission-flowchart.webp';
import staffImage from '@/assets/rathinasamy.webp';

export default {
  name: 'AdmissionSection',
  data() {
    return {
      data: admissionData[0],
      backgroundImage,
      flowchartImage,
      staffImage,
      currentSection: 'overview',
      sections: [
        { key: 'overview', label: 'Overview' },
        { key: 'courses_offered', label: 'Courses Offered' },
        { key: 'eligibility', label: 'Eligibility Criteria' },
        { key: 'staff', label: 'Staff' },
        { key: 'contact', label: 'Contact Us' },
      ],
    };
  },
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
</style>
