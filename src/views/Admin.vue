<template>
  <div class="bg-indigo-100">
    <div class="text-center py-2 bg-yellow-500 bg-opacity-90">
      <h1 class="text-xl md:text-3xl pt-3 font-semibold text-black">ADMINISTRATIVE STAFF</h1>
    </div>
   <div class="container mx-auto p-9 ">
    <!-- Iterate over each general administration section -->
    <div v-for="(section, sectionName) in administrator" :key="sectionName" class="mb-12">
      <h2 class="text-xl md:text-3xl font-semibold mb-6 text-center">{{ sectionName }}</h2>
      
      <!-- Iterate over each subsection (e.g., establishment, purchase, student section) -->
      <div v-for="(subsection, subsectionName) in section" :key="subsectionName" class="mb-8">
        <h3 class="text-lg md:text-2xl font-semibold mb-4 text-center">{{ subsectionName.replace('_', ' ') }}</h3>
        
        <!-- Separate Deputy Manager and Staffs -->
        <div v-if="subsection.DEPUTY_MANAGER" class="mb-8">
          <h4 class="text-lg md:text-2xl font-semibold mb-2 text-center">Deputy Manager</h4>
          <div class="flex justify-center">
            <div
              v-for="member in subsection.DEPUTY_MANAGER"
              :key="member.name"
              class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col m-10 items-center border-4 border-black"
            >
              <div class="w-full flex justify-center pt-6 mx-6">
                <div class="w-60 h-60 overflow-hidden">
                  <img
                    :src="getPhotoPath(member.image)"
                    :alt="member.name"
                    class="w-60 h-60 object-contain"
                  />
                </div>
              </div>
              <div class="flex-grow flex flex-col justify-center p-6 bg-yellow-300 text-center w-full">
                <h2 class="text-2xl font-semibold text-black">{{ member.name }}</h2>
                <p class="text-lg text-gray-800">{{ member.position || 'Position not available' }}</p>
                <p class="text-md text-gray-800">{{ member.email || 'Email not available' }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Display Staffs -->
        <div v-if="subsection.STAFFS" class="mb-8">
          <h4 class="text-lg md:text-2xl font-semibold mb-2 text-center">Staff Members</h4>
          <div 
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <div
              v-for="member in subsection.STAFFS"
              :key="member.name"
              class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col m-12 md:m-8 items-center border-4 border-black"
            >
              <div class="w-full flex justify-center pt-6">
                <div class="w-60 h-60 overflow-hidden">
                  <img
                    :src="getPhotoPath(member.image)"
                    :alt="member.name"
                    class="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div class="flex-grow flex flex-col justify-center p-6 bg-yellow-300 text-center w-full">
                <h2 class="text-2xl font-semibold text-black">{{ member.name }}</h2>
                <p class="text-lg text-gray-800">{{ member.position || 'Position not available' }}</p>
                <p class="text-md text-gray-800">{{ member.email || 'Email not available' }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  </div>
</template>

<script>
import administrationData from '@/assets/administration.json';

export default {
  name: 'Administration',
  data() {
    return {
      administrator: administrationData
    };
  },
  methods: {
    getPhotoPath(photo) {
      return photo ? new URL(`../assets/${photo}`, import.meta.url).href : 'default-image-path.jpg'; // Provide a default image path if the image is not available
    }
  }
};
</script>

<style scoped>
.admin-member {
  margin: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

h2, h3, h4 {
  text-align: center;
  margin-bottom: 20px;
}

.container {
  max-width: 1200px;
}
</style>
