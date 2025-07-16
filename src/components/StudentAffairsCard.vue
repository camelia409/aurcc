<template>
  <div class="affairs-card hover-lift animate-fade-scale flex flex-col items-center text-center mx-auto my-4 max-w-md w-full">
    <div class="icon-circle mb-6">
      <span class="text-4xl">{{ icon }}</span>
    </div>
    <h3 class="affairs-title">{{ title }}</h3>
    <p class="affairs-description" :title="description">{{ truncatedDescription }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
  icon: String,
  title: String,
  description: String
});
const maxLen = 180;
const truncatedDescription = computed(() =>
  props.description && props.description.length > maxLen
    ? props.description.slice(0, maxLen) + '...'
    : props.description
);
</script>

<style scoped>
.affairs-card {
  @apply bg-white/90 backdrop-blur-lg border border-blue-100 rounded-2xl shadow-xl transition-all duration-300 px-8 py-8 flex flex-col items-center min-h-[180px];
}
.icon-circle {
  @apply flex items-center justify-center rounded-full shadow-lg bg-gradient-to-br from-blue-500 to-indigo-400;
  width: 64px;
  height: 64px;
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
.affairs-title {
  @apply text-lg md:text-xl font-extrabold text-gray-900 mb-2;
}
.affairs-description {
  @apply text-gray-600 mb-2 text-base md:text-lg min-h-[48px] truncate;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}
@media (max-width: 640px) {
  .affairs-card {
    @apply px-4 py-6 min-h-[140px];
  }
  .icon-circle {
    width: 48px;
    height: 48px;
  }
}
</style> 