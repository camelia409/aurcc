<template>
  <div class="staff-card bg-white/60 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-xl overflow-hidden flex flex-col items-center border border-blue-200 transition-all duration-300 text-center hover:shadow-2xl touch-manipulation">
    <div class="w-full flex justify-center pt-4 sm:pt-6">
      <div class="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg bg-white flex items-center justify-center">
        <img
          v-if="staff.image && staff.image.trim() !== '' && !showDefaultImage"
          :src="getImageUrl(staff.image)"
          :alt="staff.name"
          class="w-full h-full object-cover"
          @error="handleImageError"
          loading="lazy"
        />
        <span v-else class="text-3xl sm:text-4xl md:text-5xl text-blue-300">👤</span>
      </div>
    </div>
    <div class="w-full bg-gradient-to-r from-blue-900 to-blue-500 py-2 sm:py-3 px-2 flex flex-col items-center mt-4 sm:mt-6">
      <h3 class="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white font-sans tracking-wide px-1">{{ staff.name }}</h3>
      <p class="text-xs sm:text-sm md:text-base text-blue-100 font-sans px-1">{{ staff.position || staff.designation }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StaffCard',
  props: {
    staff: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showDefaultImage: false
    };
  },
  methods: {
    getImageUrl(imagePath) {
      if (imagePath.startsWith('/')) {
        return imagePath;
      }
      return `/${imagePath}`;
    },
    handleImageError() {
      this.showDefaultImage = true;
    }
  }
};
</script>

<style scoped>
.staff-card {
  transition: transform 0.18s cubic-bezier(.4,2,.6,1), box-shadow 0.18s cubic-bezier(.4,2,.6,1);
}

.staff-card:hover {
  transform: translateY(-8px) scale(1.025);
  box-shadow: 0 8px 32px 0 rgba(59,130,246,0.18), 0 2px 8px 0 rgba(59,130,246,0.10);
  border-color: #2563eb;
}
</style>
