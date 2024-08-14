<template>
  <div class="container mx-auto p-9">
    <h1 class="text-3xl font-bold mb-8 text-center">Administrator</h1>

    <!-- Iterate over each category of administrators -->
    <div v-for="(admins, category) in administrator" :key="category" class="mb-12">
      <h2 class="text-2xl font-semibold mb-6 text-center">{{ category }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="member in admins"
          :key="member.name"
          class="admin-member bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center"
        >
          <div class="w-full flex justify-center pt-6">
            <div class="w-60 h-60 overflow-hidden border-4 border-gray-200">
              <img
                :src="getPhotoPath(member.image)"
                :alt="member.name"
                class="w-390 h-510 object-cover"
              />
            </div>
          </div>
          <div class="flex-grow flex flex-col justify-center  bg-gray-100 text-center w-full">
            <h2 class="text-2xl font-bold text-black">{{ member.name }}</h2>
            <p class="text-lg text-gray-800">{{ member.position || 'Position not available' }}</p>
            <p class="text-md text-gray-600">{{ member.email || 'email not available' }}</p>
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

h2 {
  text-align: center;
  margin-bottom: 20px;
}
</style>
