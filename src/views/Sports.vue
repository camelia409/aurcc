<template>
  <main class="flex-grow">
    <!-- Hero section -->
     <section
      class="md:bg-cover bg-center relative -z-10 animate-fadeIn"
      :style="'background-image: url(http://localhost:5173/src/assets/' + data.image + ');'"
    >
      <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div class="container mx-auto py-16 text-white px-4 md:px-9 relative z-10 font-serif">
        <h1 class="text-3xl md:text-4xl font-bold mb-4 animate-slideIn">{{ data.name }}</h1>

        <!-- Conditional Rendering for Description -->
        <p v-if="showDescription" class="md:text-xl mb-8 animate-fadeIn delay-1s">{{ data.description }}</p>

        <!-- Learn More Button -->
        <button 
          @click="toggleDescription" 
          class="bg-[#fdb827] text-[#23120b] px-6 py-2 rounded-lg transition duration-300 hover:bg-[#e0a829]"
        >
          {{ showDescription ? 'Show Less' : 'Learn More' }}
        </button>
      </div>
    </section>
    <!-- Content sections -->
    <section class="mx-auto bg-gray-300 font-serif animate-fadeIn p-4 md:p-9">
      <div class="bg-white rounded-lg animate-popIn mb-8">
        <h2 class="text-2xl md:text-3xl rounded-t-lg text-center bg-[#21209c] font-bold p-4 text-white animate-fadeInUp">
          Overview
        </h2>
        <p class="p-5 text-lg md:text-xl font-medium animate-fadeIn delay-1s">{{ data.description }}</p>
      </div>
      <div class="bg-white rounded-lg animate-popIn mb-8">
        <h2 class="text-2xl md:text-3xl rounded-t-lg text-center bg-[#21209c] font-bold p-4 text-white animate-fadeInUp">
          Facilities
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mx-2 md:mx-10 animate-fadeIn delay-1s">
          <div>
            <h3 class="text-lg md:text-xl font-bold mb-2 p-5">Indoor Games</h3>
            <ul class="list-disc pl-8">
              <li
                v-for="game in data.facilities.IndoorGames"
                :key="game"
                class="mb-2 text-lg md:text-xl font-medium animate-fadeInUp delay-2s"
              >
                {{ game }}
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg md:text-xl font-bold mb-2 p-5">Outdoor Games</h3>
            <ul class="list-disc pl-8 pb-6">
              <li
                v-for="game in data.facilities.OutdoorGames"
                :key="game"
                class="mb-2 text-lg md:text-xl font-medium animate-fadeInUp delay-2s"
              >
                {{ game }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="bg-white rounded-lg animate-popIn">
        <h2 class="text-2xl md:text-3xl rounded-t-lg text-center bg-[#21209c] font-bold p-4 text-white animate-fadeInUp">
          Contact Us
        </h2>
        <p class="p-5 text-lg md:text-xl font-medium animate-fadeIn delay-1s">{{ data.contact_us.Address }}</p>
      </div>
    </section>
  </main>
</template>

<script>
import data from '../assets/sports.json';
export default {
  data() {
    return {
      data: data,
      showDescription: false, // State variable to control visibility of the description
    };
  },
  methods: {
    toggleDescription() {
      this.showDescription = !this.showDescription; // Toggle the visibility
      console.log("Button clicked! Show Description:", this.showDescription);
    }
  }
};
</script>

<style scoped>
/* Add keyframes for animations */
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideIn {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes popIn {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fadeIn {
  animation: fadeIn 1.5s ease-out forwards;
}

.animate-slideIn {
  animation: slideIn 1s ease-out forwards;
}

.animate-popIn {
  animation: popIn 1.2s ease-out forwards;
}

.animate-fadeInUp {
  animation: fadeInUp 1.5s ease-out forwards;
}
</style>
