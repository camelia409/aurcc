<template>
  <main class="flex-grow">
    <!-- Hero section -->
    <section class="hero-section bg-cover bg-center relative -z-10" :style="'background-image: url(http://192.168.72.231:5173/src/assets/dgate-hero.jpg)'">
      <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-blue-900 via-transparent to-blue-900 opacity-70"></div>
      <div class="container mx-auto py-16 text-center relative z-10">
        <h1 class="text-4xl font-extrabold  mb-4 drop-shadow-lg font-serif text-balck">{{ data.name }}</h1>
        <p class="text-lg max-w-3xl mx-auto mb-8  leading-relaxed drop-shadow-lg font-sans text-black">{{ data.description.DGATE }}</p>
      </div>
    </section>

<<<<<<< HEAD
    <!-- Vertical Tabs Section -->
    <section class="container mx-auto py-8 px-4">
      <div class="relative flex">
        <!-- Vertical Tabs -->
        <div class="flex-shrink-0 w-64 bg-gradient-to-r from-purple-400 to-pink-300 rounded-lg shadow-lg p-4 overflow-hidden">
          <div class="relative bg-gradient-to-r from-purple-500 to-pink-400 p-4 rounded-lg mb-4">
            <svg class="absolute inset-0 w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="100" fill="url(#gradient)" />
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stop-color="rgba(255, 182, 193, 0.5)" />
                  <stop offset="100%" stop-color="rgba(255, 105, 180, 0.5)" />
                </linearGradient>
              </defs>
            </svg>
            <h2 class="text-2xl text-white font-bold">Tabs</h2>
          </div>
          <div class="space-y-4">
            <button @click="activeTab = 'activities'" class="w-full py-2 px-4 bg-white text-gray-800 rounded-md font-semibold hover:bg-gray-200">Activities</button>
            <button @click="activeTab = 'projects'" class="w-full py-2 px-4 bg-white text-gray-800 rounded-md font-semibold hover:bg-gray-200">Projects</button>
            <button @click="activeTab = 'hackathon'" class="w-full py-2 px-4 bg-white text-gray-800 rounded-md font-semibold hover:bg-gray-200">Hackathon Participation</button>
            <button @click="activeTab = 'staff'" class="w-full py-2 px-4 bg-white text-gray-800 rounded-md font-semibold hover:bg-gray-200">Staff Members</button>
          </div>
        </div>

        <!-- Tab Content -->
        <div class="flex-grow ml-8 p-4 relative -z-10">
          <!-- Activities Tab -->
          <div v-if="activeTab === 'activities'" class="bg-gradient-to-r from-blue-500 to-teal-300 rounded-lg shadow-lg p-6 relative -z-10">
            <h3 class="text-3xl text-white font-bold mb-4">Activities</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 ">
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
          <div v-if="activeTab === 'projects'" class="bg-gradient-to-r from-indigo-500 to-blue-400 rounded-lg shadow-lg p-6">
            <h3 class="text-3xl text-white font-bold mb-4">Projects</h3>
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
          <div v-if="activeTab === 'hackathon'" class="bg-gradient-to-r from-teal-500 to-green-300 rounded-lg shadow-lg p-6">
            <h3 class="text-3xl text-white font-bold mb-4">Hackathon Participation</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div v-for="participation in data.description.participation_in_hackathon" :key="participation.project" class="bg-white shadow-md rounded-md p-4">
                <h4 class="text-lg font-semibold">{{ participation.project }}</h4>
                <p>{{ participation.achievement }}</p>
              </div>
            </div>
          </div>

          <!-- Staff Members Tab -->
          <div v-if="activeTab === 'staff'" class="bg-gradient-to-r from-green-500 to-lime-300 rounded-lg shadow-lg p-6">
            <h3 class="text-3xl text-white font-bold mb-4">Staff Members</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div v-for="staff in data.staff_members" :key="staff.email_id" class="bg-white shadow-md rounded-md p-4">
                <h4 class="text-lg font-semibold">{{ staff.name }}</h4>
                <p>{{ staff.designation }}</p>
                <p>{{ staff.email_id }}</p>
              </div>
=======

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
>>>>>>> f48b146bbdc2720d6a607c8f76264af52d2b06c4
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
<<<<<<< HEAD
      activeTab: 'activities' // Default active tab
    };
  }
=======
      
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
>>>>>>> f48b146bbdc2720d6a607c8f76264af52d2b06c4
};
</script>

<style>
/* Font Styles */
.font-sans {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.font-serif {
  font-family: 'Georgia', 'Times New Roman', Times, serif;
}

/* Hero section */
.hero-section {
  min-height: 50vh;
  position: relative;
  background-blend-mode: multiply;
}

/* Gradient Background */
.bg-gradient-to-r {
  background: linear-gradient(90deg, var(--tw-gradient-stops));
}

/* Sections */
section {
  transition: transform 0.3s ease-in-out;
}

section:hover {
  transform: scale(1.01);
}

/* Vertical Tabs */
button:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.flex-shrink-0 {
  flex-shrink: 0;
}
</style>
