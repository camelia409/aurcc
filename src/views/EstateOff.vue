<template>
	<main class="flex-grow">
	  <!-- Hero Section -->
	  <section 
    class="hero-section bg-cover  py-24 relative -z-10" 
    :style="{ 
     backgroundImage: `url(${backgroundImage})`, 
      backgroundSize: '60%',
      backgroundPosition: 'center center' 
    }">
      <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-blue-900 via-transparent to-blue-900 opacity-70"></div>
      <div class="container mx-auto py-10 text-center relative z-10 px-4">
        <h1 class="text-4xl font-extrabold text-black  drop-shadow-lg font-serif">{{ data.name }}</h1>
      </div>
    </section>
  
	  <!-- Content Sections with Vertical Tabs -->
	  <section class=" mx-auto py-12 px-10 bg-gray-100 rounded-lg">
		<div class="flex flex-col md:flex-row">
		  <!-- Vertical Tabs -->
		  <div class="flex-shrink-0 w-full h-max md:w-64 bg-gradient-to-r from-[#21209c] to-blue-600 rounded-lg shadow-lg p-4 mb-4 md:mb-0 md:mr-4">
			<div class="relative p-4 rounded-lg ">
			  <h2 class="text-2xl font-serif text-center text-white font-semibold">Sections</h2>
			</div>
			<div class="space-y-2 font-serif">
			  <button @click="currentSection = 'about'" :class="{'bg-yellow-400 text-[#23120b]': currentSection === 'about', 'bg-gray-100': currentSection !== 'about'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b]">About</button>
			  <button @click="currentSection = 'services'" :class="{'bg-yellow-400 text-[#23120b]': currentSection === 'services', 'bg-gray-100': currentSection !== 'services'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b]">Services</button>
			  <button @click="currentSection = 'members'" :class="{'bg-yellow-400 text-[#23120b]': currentSection === 'members', 'bg-gray-100': currentSection !== 'members'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b]">Members</button>
			  <button @click="currentSection = 'contact'" :class="{'bg-yellow-400 text-[#23120b]': currentSection === 'contact', 'bg-gray-100': currentSection !== 'contact'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b]">Contact</button>
			</div>
		  </div>
  
		  <!-- Tab Content -->
		  <div class="w-full px-10  font-serif">
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
  import backgroundImage from '@/assets/estate.webp';  // Correct path for the image

  export default {
	data() {
	  return {
		data: data,
		backgroundImage: backgroundImage,
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
  