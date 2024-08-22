<template>
  <main class="flex-grow">
    <!-- Hero section -->
    <section class="bg-cover bg-center relative -z-10" :style="'background-image: url(http://192.168.72.231:5173/src/assets/dgate-hero.jpg)'">
      <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-blue-900 via-transparent to-blue-900 opacity-70"></div>
      <div class="container mx-auto py-10 text-center relative z-10 px-4">
        <h1 class="text-4xl font-extrabold text-black  drop-shadow-lg font-serif">{{ data.name }}</h1>
      </div>
    </section>
   
    <!-- Vertical Tabs Section -->
    <section class="container mx-auto py-8 px-4">
      <div class="relative flex flex-col md:flex-row">
        <!-- Vertical Tabs -->
        <div class="flex-shrink-0 w-full h-max md:w-64 bg-gradient-to-r from-[#21209c] to-blue-600 rounded-lg shadow-lg p-4 mb-4 md:mb-0 md:mr-4">
          <div class="relative p-4 rounded-lg">
            <h2 class="text-xl md:text-2xl text-white font-bold text-center">Sections</h2>
          </div>
          <div class="space-y-4">
            <button @click="activeTab = 'activities'" :class="{'bg-yellow-400': activeTab === 'activities'}" class="w-full py-2 px-4 bg-white text-gray-800 rounded-md font-semibold hover:bg-gray-200">Activities</button>
            <button @click="activeTab = 'projects'" :class="{'bg-yellow-400': activeTab === 'projects'}" class="w-full py-2 px-4 bg-white text-gray-800 rounded-md font-semibold hover:bg-gray-200">Projects</button>
            <button @click="activeTab = 'hackathon'" :class="{'bg-yellow-400': activeTab === 'hackathon'}" class="w-full py-2 px-4 bg-white text-gray-800 rounded-md font-semibold hover:bg-gray-200">Hackathon Participation</button>
            <button @click="activeTab = 'staff'" :class="{'bg-yellow-400': activeTab === 'staff'}" class="w-full py-2 px-4 bg-white text-gray-800 rounded-md font-semibold hover:bg-gray-200">Staff Members</button>
          </div>
        </div>

        <!-- Tab Content -->
        <div class="w-full px-10 font-serif min-h-[400px] max-h-[400px] overflow-y-auto relative -z-10 ">
          <!-- Activities Tab -->
          <div v-if="activeTab === 'activities'" >
            <h3 class="text-2xl md:text-3xl text-white font-bold mb-4">Activities</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 class="text-lg font-semibold mb-2">Curricular Activities</h4>
                <ul class="list-disc pl-4">
                  <li v-for="activity in data.description.activities.curricular_activities" :key="activity.name">
                    <div class="badge badge-primary mr-2">{{ activity.date }}</div>
                    <span>{{ activity.name }}</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 class="text-lg font-semibold mb-2">Social Responsibilities</h4>
                <ul class="list-disc pl-4">
                  <li v-for="activity in data.description.activities.social_responsibilities" :key="activity.event">
                    <div class="badge badge-primary mr-2">{{ activity.date }}</div>
                    <span>{{ activity.event }}</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 class="text-lg font-semibold mb-2">Internal Activities</h4>
                <ul class="list-disc pl-4">
                  <li v-for="activity in data.description.activities.internal_activities" :key="activity">
                    {{ activity }}
                  </li>
                </ul>
              </div>
              <div>
                <h4 class="text-lg font-semibold mb-2">External Activities</h4>
                <ul class="list-disc pl-4">
                  <li v-for="activity in data.description.activities.external_activities" :key="activity">
                    {{ activity }}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Projects Tab -->
          <div v-if="activeTab === 'projects'" >
            <h3 class="text-2xl md:text-3xl text-white font-bold mb-4">Projects</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 class="text-lg font-semibold mb-2">Completed Projects</h4>
                <ul class="list-disc pl-4">
                  <li class="mb-3" v-for="project in data.description.projects_completed" :key="project.name">
                    <h4 class="font-bold">{{ project.name }}</h4>
                    <p>{{ project.description }}</p>
                  </li>
                </ul>
              </div>
              <div>
                <h4 class="text-lg font-semibold mb-2">Ongoing Projects</h4>
                <ul class="list-disc pl-4">
                  <li v-for="project in data.description.ongoing_projects" :key="project">
                    {{ project }}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Hackathon Participation Tab -->
          <div v-if="activeTab === 'hackathon'" >
            <h3 class="text-2xl md:text-3xl text-white font-bold mb-4">Hackathon Participation</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div v-for="participation in data.description.participation_in_hackathon" :key="participation.project" class="bg-white shadow-md rounded-md p-4">
                <h4 class="text-lg font-semibold">{{ participation.project }}</h4>
                <p>{{ participation.achievement }}</p>
              </div>
            </div>
          </div>

          <!-- Staff Members Tab -->
          <div v-if="activeTab === 'staff'" >
            <h3 class="text-2xl md:text-3xl text-white font-bold mb-4">Staff Members</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div v-for="staff in data.staff_members" :key="staff.email_id" class="bg-white shadow-md rounded-md p-4">
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

export default {
  data() {
    return {
      data: data,
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