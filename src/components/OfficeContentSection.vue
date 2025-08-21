<template>
  <div :id="sectionId" :ref="sectionId" class="bg-white/70 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-lg animate-fadeIn border border-gray-100 scroll-mt-20 sm:scroll-mt-28">
    <div class="bg-gradient-to-r from-blue-900 to-blue-500 py-4 sm:py-5 flex items-center justify-center gap-2 sm:gap-3 rounded-t-xl sm:rounded-t-2xl">
      <span class="text-xl sm:text-2xl">{{ icon }}</span>
      <h2 class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white text-center px-2">{{ title }}</h2>
    </div>
    <div class="p-4 sm:p-6 md:p-8 lg:p-10">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OfficeContentSection',
  props: {
    sectionId: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: 'ℹ️'
    }
  }
};
</script>

<style scoped>
.animate-fadeIn {
  animation: fadeIn 0.8s ease-out forwards;
}

@keyframes fadeIn {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}
</style>
