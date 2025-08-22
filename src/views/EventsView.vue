<template>
  <div class="events-view">
    <h1 class="mobile-text-xl sm:mobile-text-2xl lg:mobile-text-3xl xl:mobile-text-4xl font-bold mb-6 sm:mb-8">Events</h1>
    <ul class="divide-y divide-gray-200">
      <li v-for="(item, index) in events" :key="index" class="py-3 sm:py-4">
        <a :href="item.url" class="mobile-text-sm lg:mobile-text-base text-indigo-600 hover:underline">{{ item.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      events: [] // This will be populated from the JSON file
    };
  },
  created() {
    fetch('/data/events.json')
      .then(response => response.json())
      .then(data => {
        this.events = data;
      });
  }
};
</script>

<style scoped>
.events-view {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style> 