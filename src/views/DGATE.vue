<template>
  <main class="flex-grow">
    <!-- Hero section -->
    <section 
  class="bg-cover bg-center relative w-full h-60 sm:h-80 md:h-94 animate-fadeIn" 
  :style="{ 
    backgroundImage: `url(${backgroundImage})`
  }">
  <!-- Gradient Overlay -->
  <div class="absolute inset-0 bg-black opacity-20"></div>
  
  <!-- Content Container -->
  <div class="flex items-center justify-center h-full relative z-10 px-4">
    <h1 class="md:text-4xl text-xl font-extrabold text-white drop-shadow-lg font-serif text-center animate-slideIn">
      DGATE
    </h1>
  </div>
</section>

  <!-- Vertical Tabs Section -->
<section class="mx-auto py-6 md:py-12 px-4 md:px-10 bg-indigo-100 rounded-lg animate-popIn">
  <div class="relative flex flex-col md:flex-row">
    <!-- Vertical Tabs -->
    <div class="flex-shrink-0 w-full h-max md:w-64 bg-gradient-to-r from-[#21209c] to-blue-600 rounded-lg shadow-lg p-4 mb-4 md:mb-0 md:mr-4">
      <div class="relative p-4 rounded-lg">
        <h2 class="text-2xl font-serif text-center text-white font-semibold">Sections</h2>
      </div>
      <div class="space-y-2 font-serif">
        <button @click="activeTab = 'activities'" :class="{'bg-yellow-400 text-[#23120b]': activeTab === 'activities', 'bg-gray-100': activeTab !== 'activities'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b]">Activities</button>
        <button @click="activeTab = 'projects'" :class="{'bg-yellow-400 text-[#23120b]': activeTab === 'projects', 'bg-gray-100': activeTab !== 'projects'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b]">Projects</button>
        <button @click="activeTab = 'hackathon'" :class="{'bg-yellow-400 text-[#23120b]': activeTab === 'hackathon', 'bg-gray-100': activeTab !== 'hackathon'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b]">Hackathon Participation</button>
        <button @click="activeTab = 'staff'" :class="{'bg-yellow-400 text-[#23120b]': activeTab === 'staff', 'bg-gray-100': activeTab !== 'staff'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b]">Staff Members</button>
      </div>
    </div>

    <!-- Tab Content -->
    <div class="w-full px-0 md:px-10 font-serif min-h-[400px] max-h-[600px] md:max-h-[800px] overflow-y-auto">
      <!-- Activities Tab -->
      <div v-if="activeTab === 'activities'" class="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-16 animate-fadeIn">
        <h3 class="text-2xl md:text-3xl font-bold text-black mb-4">Activities</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 class="text-lg font-semibold mb-2">Curricular Activities</h4>
            <ul class="list-disc pl-5">
              <li v-for="activity in data.description.activities.curricular_activities" :key="activity.name">
                <span class="badge badge-primary mr-2">{{ activity.date }}</span>{{ activity.name }}
              </li>
            </ul>
          </div>
          <div>
            <h4 class="text-lg font-semibold mb-2">Social Responsibilities</h4>
            <ul class="list-disc pl-5">
              <li v-for="activity in data.description.activities.social_responsibilities" :key="activity.event">
                <span class="badge badge-primary mr-2">{{ activity.date }}</span>{{ activity.event }}
              </li>
            </ul>
          </div>
          <div>
            <h4 class="text-lg font-semibold mb-2">Internal Activities</h4>
            <ul class="list-disc pl-5">
              <li v-for="activity in data.description.activities.internal_activities" :key="activity">
                {{ activity }}
              </li>
            </ul>
          </div>
          <div>
            <h4 class="text-lg font-semibold mb-2">External Activities</h4>
            <ul class="list-disc pl-5">
              <li v-for="activity in data.description.activities.external_activities" :key="activity">
                {{ activity }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Projects Tab -->
      <div v-if="activeTab === 'projects'" class="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-16 animate-fadeIn">
        <h3 class="text-2xl md:text-3xl font-bold text-black mb-4">Projects</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 class="text-lg font-semibold mb-2">Completed Projects</h4>
            <ul class="list-disc pl-5">
              <li class="mb-3" v-for="project in data.description.projects_completed" :key="project.name">
                <h4 class="font-bold">{{ project.name }}</h4>
                <p>{{ project.description }}</p>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="text-lg font-semibold mb-2">Ongoing Projects</h4>
            <ul class="list-disc pl-5">
              <li v-for="project in data.description.ongoing_projects" :key="project">
                {{ project }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Hackathon Participation Tab -->
      <div v-if="activeTab === 'hackathon'" class="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-16 animate-fadeIn">
        <h3 class="text-2xl md:text-3xl font-bold text-black mb-4">Hackathon Participation</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="participation in data.description.participation_in_hackathon" :key="participation.project" class="bg-gray-50 shadow-md rounded-md p-4">
            <h4 class="text-lg font-semibold">{{ participation.project }}</h4>
            <p>{{ participation.achievement }}</p>
          </div>
        </div>
      </div>

      <!-- Staff Members Tab -->
      <div v-if="activeTab === 'staff'" class="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-16 animate-fadeIn">
        <h3 class="text-2xl md:text-3xl font-bold text-black mb-4">Staff Members</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="staff in data.staff_members" :key="staff.email_id" class="bg-gray-50 shadow-md rounded-md p-4">
            <h4 class="text-lg font-semibold">{{ staff.name }}</h4>
            <p>{{ staff.designation }}</p>
            <p>{{ staff.email_id }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  </main>
</template>

<script>
import data from '../assets/DGATE-cell.json';
import backgroundImage from '@/assets/offices.webp';  // Correct path for the image

export default {
  data() {
    return {
      data: data,
      backgroundImage: backgroundImage,
      activeTab: 'activities' // Default active tab
    };
  }
};
</script>

<style>
/* Additional custom styles if needed */
body {
  font-family: 'Arial', sans-serif;
}
</style>