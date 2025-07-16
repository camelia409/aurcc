<template>
  <div class="syllabus-card hover-lift animate-fade-scale flex flex-col items-center text-center mx-auto my-4 max-w-md w-full">
    <div class="icon-circle mb-6">
      <span class="text-4xl">{{ getIcon(title) }}</span>
    </div>
    <h3 class="syllabus-title">{{ title }}</h3>
    <button @click="open" class="syllabus-link inline-block px-8 py-2 rounded-full bg-blue-600 text-white font-semibold shadow-md hover:bg-yellow-400 hover:text-blue-900 transition-colors mt-6">View Syllabus</button>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  link: String,
  // index: [String, Number] // S.No removed
});

const iconMap = {
  'COMPUTER SCIENCE': '💻',
  'ELECTRONICS': '📡',
  'ELECTRICAL': '⚡',
  'MECHANICAL': '🛠️',
  'ARTIFICIAL INTELLIGENCE': '🤖',
  'VLSI': '🔲',
  'MBA': '📈',
  'BUSINESS ANALYTICS': '📊',
};

function getIcon(title) {
  if (title.includes('VLSI')) return iconMap['VLSI'];
  if (title.includes('COMPUTER')) return iconMap['COMPUTER SCIENCE'];
  if (title.includes('ELECTRONICS') && !title.includes('ELECTRICAL')) return iconMap['ELECTRONICS'];
  if (title.includes('ELECTRICAL')) return iconMap['ELECTRICAL'];
  if (title.includes('MECHANICAL')) return iconMap['MECHANICAL'];
  if (title.includes('ARTIFICIAL INTELLIGENCE')) return iconMap['ARTIFICIAL INTELLIGENCE'];
  if (title.includes('BUSINESS ANALYTICS')) return iconMap['BUSINESS ANALYTICS'];
  if (title.includes('MBA')) return iconMap['MBA'];
  return '📄';
}
function open() {
  window.open(props.link, '_blank');
}
</script>

<style scoped>
.syllabus-card {
  @apply bg-white/90 backdrop-blur-lg border border-blue-100 rounded-2xl shadow-xl transition-all duration-300 px-8 py-8 flex flex-col items-center min-h-[200px];
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
.syllabus-title {
  @apply text-lg md:text-xl font-extrabold text-gray-900 mb-2;
}
.syllabus-link {
  @apply text-blue-100 font-semibold hover:text-yellow-300 transition-colors;
}
@media (max-width: 640px) {
  .syllabus-card {
    @apply px-4 py-6 min-h-[180px];
  }
  .icon-circle {
    width: 48px;
    height: 48px;
  }
}
</style> 