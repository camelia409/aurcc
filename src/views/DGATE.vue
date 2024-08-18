<template>
  <main class="flex-grow">
    <!-- Hero section -->
    <section
      class="bg-cover bg-center relative -z-10"
      :style="'background-image: url(http://192.168.72.231:5173/src/assets/dgate-hero.jpg)'"
    >
      <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div class="container mx-auto py-16 text-white p-9 relative z-10">
        <h1 class="text-4xl font-bold mb-4">{{ data.name }}</h1>
        <p class="text-xl mb-8">{{ data.description.DGATE }}</p>
        <button class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          Learn More
        </button>
      </div>
    </section>


    <!-- Content sections -->
    <div class="p-8 bg-gray-300">
      <div class="">
        <div class="bg-white rounded-lg">
          <h2 class="text-3xl text-white text-center p-4 font-bold bg-blue-800 rounded-t-lg">Activities</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 px-10 py-4 font-medium">
            <div>
              <h3 class="text-xl font-semibold mb-2">Curricular Activities</h3>
              <ul class="list-disc pl-4">
                <li
                  v-for="activity in data.description.activities.curricular_activities"
                  :key="activity.name"
                >
                  <div class="badge badge-primary mr-2">{{ activity.date }}</div>
                  <span>{{ activity.name }}</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2">Social Responsibilities</h3>
              <ul class="list-disc pl-4">
                <li
                  v-for="activity in data.description.activities.social_responsibilities"
                  :key="activity.event"
                >
                  <div class="badge badge-primary mr-2">{{ activity.date }}</div>
                  <span>{{ activity.event }}</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2">Internal Activities</h3>
              <ul class="list-disc pl-4">
                <li
                  v-for="activity in data.description.activities.internal_activities"
                  :key="activity"
                >
                  {{ activity }}
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2">External Activities</h3>
              <ul class="list-disc pl-4">
                <li
                  v-for="activity in data.description.activities.external_activities"
                  :key="activity"
                >
                  {{ activity }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-lg">
          <h2 class="text-3xl text-white text-center p-4 font-bold bg-blue-800 mt-6 rounded-t-lg">Projects</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 font-medium">
            <div>
              <h3 class="text-xl font-semibold mb-2">Completed Projects</h3>
              <ul class="list-disc pl-4">
                <li class="mb-3" v-for="project in data.description.projects_completed" :key="project.name">
                  <h4 class="font-bold">{{ project.name }}</h4>
                  <p>{{ project.description }}</p>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2">Ongoing Projects</h3>
              <ul class="list-disc pl-4 font-bold">
                <li v-for="project in data.description.ongoing_projects" :key="project">
                  {{ project }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-lg">
          <h2 class="text-3xl text-white text-center p-4 font-bold bg-blue-800 mt-6 rounded-t-lg">Hackathon Participation</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 font-medium ">
            <div
              v-for="participation in data.description.participation_in_hackathon"
              :key="participation.project"
              class="bg-white shadow-lg rounded-md p-4"
            >
              <h3 class="text-xl font-semibold">{{ participation.project }}</h3>
              <p>{{ participation.achievement }}</p>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-lg">
          <h2 class="text-3xl text-white text-center p-4 font-bold bg-blue-800 mt-6 rounded-t-lg">Staff Members</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 font-medium ">
            <div
              v-for="staff in data.staff_members"
              :key="staff.email_id"
              class="bg-white shadow-md rounded-md p-4"
            >
              <h3 class="text-xl font-semibold">{{ staff.name }}</h3>
              <p>{{ staff.designation }}</p>
              <p>{{ staff.email_id }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import data from '../assets/DGATE-cell.json';

export default {
  data() {
    return {
      data: data,
      
    };
  },
  methods: {
    scrollToSection(section) {
      this.currentSection = section;
      // Scroll logic if needed
    },
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>
