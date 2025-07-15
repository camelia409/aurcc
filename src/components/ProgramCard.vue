<template>
  <div class="program-card hover-lift animate-fade-scale flex flex-col items-center text-center mx-auto my-4 max-w-md w-full">
    <div class="icon-circle mb-6">
      <span class="text-4xl">{{ icon }}</span>
    </div>
    <h3 class="program-title">{{ title }}</h3>
    <div v-if="department" class="text-xs text-indigo-700 font-semibold mb-1">{{ department }}</div>
    <p class="program-description">{{ description }}</p>
    <div class="text-base text-blue-700 font-semibold mb-4 mt-2">Intake: {{ intake }}</div>
    <a :href="learnMoreLink" class="program-link inline-block px-8 py-2 rounded-full bg-blue-600 text-white font-semibold shadow-md hover:bg-yellow-400 hover:text-blue-900 transition-colors mt-auto">Learn More</a>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  intake: [String, Number],
  icon: String,
  description: String,
  learnMoreLink: String,
  department: String
});
</script>

<style scoped>
.program-card {
  @apply bg-white/90 backdrop-blur-lg border border-blue-100 rounded-2xl shadow-xl transition-all duration-300 px-8 py-8 flex flex-col items-center min-h-[340px];
}
.icon-circle {
  @apply flex items-center justify-center rounded-full shadow-lg bg-gradient-to-br from-blue-500 to-indigo-400;
  width: 72px;
  height: 72px;
  margin-bottom: 1rem;
}
.hover-lift {
  @apply transition-all duration-300 ease-out;
}
.hover-lift:hover {
  transform: translateY(-10px) scale(1.04);
  box-shadow: 0 24px 48px rgba(0,0,0,0.13);
}
.animate-fade-scale {
  animation: fadeScale 0.6s ease-out forwards;
}
@keyframes fadeScale {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
.program-title {
  @apply text-lg md:text-xl font-extrabold text-gray-900 mb-2;
}
.program-description {
  @apply text-gray-600 mb-2 text-base md:text-lg min-h-[48px];
}
.program-link {
  @apply text-blue-100 font-semibold hover:text-yellow-300 transition-colors;
}
@media (max-width: 640px) {
  .program-card {
    @apply px-4 py-6 min-h-[280px];
  }
  .icon-circle {
    width: 56px;
    height: 56px;
  }
}
</style> 