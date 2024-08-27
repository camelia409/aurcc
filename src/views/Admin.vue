<template>
  <div class="container mx-auto p-9">
    <div class="text-center mb-8 py-5 bg-black bg-opacity-50">
      <h1 class="text-3xl font-bold mb-8 text-center text-white">ADMINISTRATIVE STAFF</h1>
    </div>

    <!-- Iterate over each general administration section -->
    <div v-for="(section, sectionName) in administrator" :key="sectionName" class="mb-12">
      <h2 class="text-2xl font-semibold mb-6 text-center">{{ sectionName }}</h2>
      
      <!-- Iterate over each subsection (e.g., establishment, purchase, student section) -->
      <div v-for="(subsection, subsectionName) in section" :key="subsectionName" class="mb-8">
        <h3 class="text-xl font-semibold mb-4 text-center">{{ subsectionName.replace('_', ' ') }}</h3>
        
        <!-- Iterate over deputy manager and staff members -->
        <div v-for="(members, role) in subsection" :key="role" class="mb-6">
          <h4 class="text-lg font-semibold mb-2 text-center capitalize">{{ role.replace('_', ' ') }}</h4>

          <!-- Centering Deputy Manager section -->
          <div 
            v-if="role === 'deputy_manager'"
            class="flex justify-center mb-8"
          >
            <div
              v-for="member in members"
              :key="member.name"
              class="admin-member bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center w-80 mx-4"
            >
              <div class="w-full flex justify-center pt-6">
                <div class="w-60 h-60 overflow-hidden border-4 border-gray-200">
                  <img
                    :src="getPhotoPath(member.image)"
                    :alt="member.name"
                    class="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div class="flex-grow flex flex-col justify-center bg-gray-100 text-center w-full p-4">
                <h2 class="text-2xl font-bold text-black">{{ member.name }}</h2>
                <p class="text-lg text-gray-800">{{ member.position || 'Position not available' }}</p>
                <p class="text-md text-gray-600">{{ member.email || 'Email not available' }}</p>
              </div>
            </div>
          </div>

          <!-- Grid layout for other roles -->
          <div 
            v-else
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <div
              v-for="member in members"
              :key="member.name"
              class="admin-member bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center"
            >
              <div class="w-full flex justify-center pt-6">
                <div class="w-60 h-60 overflow-hidden border-4 border-gray-200">
                  <img
                    :src="getPhotoPath(member.image)"
                    :alt="member.name"
                    class="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div class="flex-grow flex flex-col justify-center bg-gray-100 text-center w-full p-4">
                <h2 class="text-2xl font-bold text-black">{{ member.name }}</h2>
                <p class="text-lg text-gray-800">{{ member.position || 'Position not available' }}</p>
                <p class="text-md text-gray-600">{{ member.email || 'Email not available' }}</p>
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

.admin-member:hover {
  transform: scale(1.05);
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

h2, h3, h4 {
  text-align: center;
  margin-bottom: 20px;
}
</style>
