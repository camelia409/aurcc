<template>
	<main class="flex-grow">
	  <!-- Hero section -->
	  <section class="bg-cover bg-center relative -z-10" :style="'background-image: url(http://192.168.72.231:5173/src/assets/dgate-hero.jpg)'">
		<div class="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
		<div class="container mx-auto py-16 text-white p-9 relative z-10 flex justify-center items-center">
		  <h1 class="text-5xl font-bold mb-4 text-center">{{ data.name }}</h1>
		</div>
	  </section>
  
	  <!-- Content sections -->
	  <section class="mx-auto py-8 px-4 space-y-8 bg-indigo-100">
		<div class="bg-white rounded-lg  shadow-md">
		  <h2 class="text-3xl text-center text-white font-bold p-4 bg-blue-800 rounded-t-lg">About the Exam Cell</h2>
		  <p class="text-xl font-medium p-5">{{ data.description }}</p>
		</div>
		<div class="bg-white rounded-lg shadow-md">
		  <h2 class="text-3xl text-center text-white font-bold p-4 bg-blue-800 rounded-t-lg">Services</h2>
		  <div class="text-xl font-medium p-4 space-y-4">
			<p v-for="service in data.services" :key="service">{{ service }}</p>
		  </div>
		</div>
        <div class="grid grid-cols-2 gap-4">
		<div class="bg-white rounded-lg shadow-md">
		  <h2 class="text-3xl text-center text-white font-bold p-4 bg-blue-800 rounded-t-lg">Members</h2>
		  <div class="text-xl font-medium p-4 space-y-4">
			<p v-for="bearer in data.office_bearers" :key="bearer.name">
			  <strong>{{ bearer.position }}:</strong> {{ bearer.name }}
			</p>
		  </div>
		</div>
        <div class="bg-white rounded-lg  shadow-md">
		  <h2 class="text-3xl text-center text-white font-bold p-4 bg-blue-800 rounded-t-lg">Contact</h2>
		  <p class="text-xl font-medium p-5">{{ data.contact_us }}</p>
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
		data: data
	  };
	}
  };
  </script>
  
  <style>
  /* Additional custom styles if needed */
  </style>
  