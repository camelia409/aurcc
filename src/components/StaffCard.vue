<template>
  <div class="staff-card bg-white/60 backdrop-blur-md rounded-xl shadow-xl overflow-hidden flex flex-col items-center border border-blue-200 transition-all duration-300 text-center hover:shadow-2xl touch-manipulation">
    <!-- Image Section -->
    <div class="w-full flex justify-center pt-6 pb-2">
      <div class="staff-image-container w-24 h-24 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg bg-white flex items-center justify-center">
        <img
          v-if="staff.image && staff.image.trim() !== '' && !showDefaultImage"
          :src="getImageUrl(staff.image)"
          :alt="staff.name"
          class="w-full h-full object-cover"
          @error="handleImageError"
          loading="lazy"
        />
        <span v-else class="text-4xl text-blue-300">👤</span>
      </div>
    </div>
    
    <!-- Text Section -->
    <div class="w-full bg-gradient-to-r from-blue-900 to-blue-500 py-4 px-3 flex flex-col items-center justify-center flex-grow">
      <h3 class="text-base font-bold text-white font-sans tracking-wide leading-tight mb-1 line-clamp-2">{{ staff.name }}</h3>
      <p class="text-sm text-blue-100 font-sans leading-tight line-clamp-2">{{ staff.position || staff.designation }}</p>
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
  width: 280px;
  height: 200px;
  transition: transform 0.18s cubic-bezier(.4,2,.6,1), box-shadow 0.18s cubic-bezier(.4,2,.6,1);
  flex-shrink: 0;
}

.staff-card:hover {
  transform: translateY(-8px) scale(1.025);
  box-shadow: 0 8px 32px 0 rgba(59,130,246,0.18), 0 2px 8px 0 rgba(59,130,246,0.10);
  border-color: #2563eb;
}

.staff-image-container {
  width: 96px;
  height: 96px;
}

/* Text overflow handling */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .staff-card {
    width: 260px;
    height: 180px;
  }
  
  .staff-image-container {
    width: 80px;
    height: 80px;
  }
}

@media (min-width: 1024px) {
  .staff-card {
    width: 300px;
    height: 220px;
  }
  
  .staff-image-container {
    width: 100px;
    height: 100px;
  }
}
</style>
