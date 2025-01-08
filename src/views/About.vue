<template>
  <main>
    <!-- Header -->
    <header class="bg-amber-500 text-white py-6 shadow-md">
      <div class="container mx-auto px-4 flex justify-center">
        <h1 class="md:text-4xl text-2xl font-semibold text-amber-950 tracking-wide">
          Website Development Team
        </h1>
      </div>
    </header>

    <!-- Team Section -->
    <section class="container mx-auto px-4 py-16">
      <h2 class="md:text-4xl text-2xl font-semibold text-center text-indigo-800 mb-12">
        Meet Our <span class="text-amber-500">Team</span>
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <!-- Team Member Card -->
        <div
          v-for="member in teamMembers"
          :key="member.name"
          class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 text-center border border-gray-200 hover:border-gray-300"
        >
          <div class="relative">
            <img
              :src="getImagePath(member.photo)"
              alt="Profile"
              class="w-40 h-40 mx-auto rounded-full mb-6 object-cover border-4 border-indigo-100 transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h3 class="text-2xl font-semibold text-indigo-600 mb-2">
            {{ member.name }}
          </h3>
          <p class="text-gray-600 text-lg">{{ member.department }}</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      teamMembers: [
        { name: "Janarthanan G", department: "Dept of AI & DS", photo: "janarthanan.webp" },
        { name: "Subramaniyasiva S", department: "Dept of AI & DS", photo: "subramaniyasiva.webp" },
        { name: "Abinandida R", department: "Dept of AI & DS", photo: "abinandida.webp" },
        { name: "Ritik Naakendiran D", department: "Dept of AI & DS", photo: "ritik.webp" },
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
/* No custom styles are used, as Tailwind CSS is fully utilized */
</style>
