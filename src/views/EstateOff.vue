<template>
	<main class="flex-grow">
	  <!-- Hero Section -->
	  <section class="bg-cover bg-center relative -z-10" :style="'background-image: url(http://192.168.72.231:5173/src/assets/dgate-hero.jpg)'">
		<div class="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-blue-900 via-transparent to-blue-900 opacity-70"></div>
		<div class="container mx-auto py-16 text-center text-white relative z-10">
		  <h1 class="text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-lg text-black">{{ data.name }}</h1>
		</div>
	  </section>
  
	  <!-- Content Sections with Vertical Tabs -->
	  <section class="container mx-auto py-12 px-4 bg-gray-100 rounded-lg">
		<div class="flex flex-col md:flex-row">
		  <!-- Vertical Tabs -->
		  <div class="flex-shrink-0 w-full md:w-64 bg-gradient-to-r from-purple-400 to-pink-300 rounded-lg shadow-lg p-4 mb-4 md:mb-0 md:mr-4">
			<div class="relative bg-gradient-to-r from-purple-500 to-pink-400 p-4 rounded-lg mb-4">
			  <svg class="absolute inset-0 w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
				<circle cx="100" cy="100" r="100" fill="url(#gradient)" />
				<defs>
				  <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
					<stop offset="0%" stop-color="rgba(255, 182, 193, 0.5)" />
					<stop offset="100%" stop-color="rgba(255, 105, 180, 0.5)" />
				  </linearGradient>
				</defs>
			  </svg>
			  <h2 class="text-2xl text-white font-bold">Tabs</h2>
			</div>
			<div class="space-y-2">
			  <button @click="currentSection = 'about'" :class="{'bg-white': currentSection === 'about', 'bg-gray-200': currentSection !== 'about'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-gray-300">About</button>
			  <button @click="currentSection = 'services'" :class="{'bg-white': currentSection === 'services', 'bg-gray-200': currentSection !== 'services'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-gray-300">Services</button>
			  <button @click="currentSection = 'members'" :class="{'bg-white': currentSection === 'members', 'bg-gray-200': currentSection !== 'members'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-gray-300">Members</button>
			  <button @click="currentSection = 'contact'" :class="{'bg-white': currentSection === 'contact', 'bg-gray-200': currentSection !== 'contact'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-gray-300">Contact</button>
			</div>
		  </div>
  
		  <!-- Tab Content -->
		  <div class="w-full p-6 bg-white rounded-lg shadow-md">
			<div v-if="currentSection === 'about'">
			  <h2 class="text-2xl md:text-4xl font-bold text-blue-800 mb-4">About the Estate office</h2>
			  <p class="text-base md:text-lg">{{ data.description }}</p>
			</div>
			<div v-if="currentSection === 'services'">
			  <h2 class="text-2xl md:text-4xl font-bold text-blue-800 mb-4">Services</h2>
			  <ul class="list-disc pl-5">
				<li v-for="service in data.services" :key="service" class="text-base md:text-lg">{{ service }}</li>
			  </ul>
			</div>
			<div v-if="currentSection === 'members'">
			  <h2 class="text-2xl md:text-4xl font-bold text-blue-800 mb-4">Members</h2>
			  <ul class="list-disc pl-5">
				<li v-for="bearer in data.office_bearers" :key="bearer.name" class="text-base md:text-lg">
				  <strong>{{ bearer.position }}:</strong> {{ bearer.name }}
				</li>
			  </ul>
			</div>
			<div v-if="currentSection === 'contact'">
			  <h2 class="text-2xl md:text-4xl font-bold text-blue-800 mb-4">Contact</h2>
			  <p class="text-base md:text-lg">{{ data.contact_us }}</p>
			</div>
		  </div>
		</div>
	  </section>
	</main>
  </template>
  
  <script>
  import data from '../assets/EstateOff.json';
  
  export default {
	data() {
	  return {
		data: data,
		currentSection: 'about', // Default tab
	  };
	}
  };
  </script>
  
  <style>
  /* Additional custom styles if needed */
  body {
	font-family: 'Arial', sans-serif;
  }
  </style>
  