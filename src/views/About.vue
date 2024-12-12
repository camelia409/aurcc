<template>
  <main>
    <!-- Header -->
    <header class="bg-indigo-600 text-white py-4">
      <div class="container mx-auto px-4 flex justify-center">
        <h1 class="text-2xl font-bold">Website Development Team</h1>
      </div>
    </header>

    <!-- Team Section -->
    <section class="container mx-auto px-4 py-12">
      <h2 class="text-3xl font-bold text-center text-indigo-600 mb-8">Meet Our Team</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <!-- Team Member Card -->
        <div
          v-for="member in teamMembers"
          :key="member.name"
          class="bg-white rounded-lg shadow-md p-6 text-center"
        >
          <img
            :src="getImagePath(member.photo)"
            alt="Profile"
            class="w-32 h-32 mx-auto rounded-full mb-4"
          />
          <h3 class="text-xl font-bold text-indigo-600 mb-2">{{ member.name }}</h3>
          <p class="text-gray-600">{{ member.department }}</p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-indigo-600 text-white py-8">
      <div class="container mx-auto px-4 text-center">
        <p>&copy; 2024 Website Development Team. All rights reserved.</p>
      </div>
    </footer>
  </main>
</template>

<script>
export default {
  data() {
    return {
      teamMembers: [
        { name: "Janarthanan G", department: "Dept of AI&DS", photo: "janarthanan.webp" },
        { name: "Subramaniyasiva S", department: "Dept of AI&DS", photo: "subramaniyashiva.webp" },
        { name: "Abinandida R", department: "Dept of AI&DS", photo: "abinandida.webp" },
        { name: "Ritik Naakendiran D", department: "Dept of AI&DS", photo: "ritik.webp" },
      ],
    };
  },
  methods: {
    getImagePath(filename) {
      return new URL(`../assets/${filename}`, import.meta.url).href;
    },
  },
};
</script>

<style scoped>
main {
  font-family: Arial, sans-serif;
}
</style>
