<template>
  <div class="events-view">
    <h1 class="text-4xl font-bold mb-8">Events</h1>
    <ul class="divide-y divide-gray-200">
      <li v-for="(item, index) in events" :key="index" class="py-4">
        <a :href="item.url" class="text-indigo-600 hover:underline">{{ item.name }}</a>
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