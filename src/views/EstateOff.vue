<template>
	<main class="flex-grow">
	  <!-- Hero Section -->
	  <section 
      class="bg-cover bg-center relative w-full h-40 sm:h-80 md:h-94 animate-fadeIn" 
      :style="{ 
        backgroundImage: `url(${backgroundImage})`
      }">
      <!-- Dark overlay -->
        <div class="absolute inset-0 bg-black opacity-20"></div>
        
        <!-- Centered text -->
        <div class="flex items-center justify-center h-full relative z-10 px-4">
          <h1 class="md:text-4xl text-xl font-extrabold text-white drop-shadow-lg font-serif text-center animate-slideIn">
            ESTATE OFFICE
          </h1>
        </div>
    </section>
  
	  <!-- Content Sections with Vertical Tabs -->
	  <section class="mx-auto py-6 md:py-12 md:px-10 bg-indigo-100 rounded-lg">
		<div class="relative flex flex-col md:px-8 px-4 md:flex-row">
		  <!-- Vertical Tabs -->
		  <div class="px-8 md:px-0">
        <div class="flex-shrink-0 w-full h-max md:w-64 bg-gradient-to-r from-[#21209c] to-blue-600 rounded-lg shadow-lg p-4 mb-4 md:mb-0 md:mr-4">
          <div class="relative p-4 rounded-lg">
            <h2 class="text-2xl font-serif text-center text-white font-semibold">Sections</h2>
          </div>
			<div class="space-y-2 font-serif">
			  <button @click="currentSection = 'about'" :class="{'bg-yellow-400 text-[#23120b]': currentSection === 'about', 'bg-gray-100': currentSection !== 'about'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b]">About</button>
			  <button @click="currentSection = 'services'" :class="{'bg-yellow-400 text-[#23120b]': currentSection === 'services', 'bg-gray-100': currentSection !== 'services'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b]">Services</button>
			  <button @click="currentSection = 'members'" :class="{'bg-yellow-400 text-[#23120b]': currentSection === 'members', 'bg-gray-100': currentSection !== 'members'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b]">Staff</button>
			  <button @click="currentSection = 'contact'" :class="{'bg-yellow-400 text-[#23120b]': currentSection === 'contact', 'bg-gray-100': currentSection !== 'contact'}" class="w-full py-2 px-4 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#23120b]">Contact</button>
			</div>
		  </div>
		  </div>
  
		  <!-- Tab Content -->
		  <div class="w-full px-0 md:px-10  font-serif min-h-[400px] max-h-[600px] md:max-h-[800px] overflow-y-auto">
			<div v-if="currentSection === 'about'" class="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-16 animate-fadeIn">
			  <h2 class="text-2xl md:text-3xl font-bold text-black mb-4">About the Estate office</h2>
			  <p class="text-base md:text-lg">{{ data.description }}</p>
			</div>
			<div v-if="currentSection === 'services'" class="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-16 animate-fadeIn">
			  <h2 class="text-2xl md:text-3xl font-bold text-black mb-4">Services</h2>
			  <ul class="list-disc pl-5">
				<li v-for="service in data.services" :key="service" class="text-base md:text-lg">{{ service }}</li>
			  </ul>
			</div>
			<div v-if="currentSection === 'members'" class="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-16 animate-fadeIn">
				<h2 class="text-2xl md:text-3xl font-bold text-black mb-6 text-center">Staff</h2>
				<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
					<div 
					v-for="bearer in data.office_bearers" 
					:key="bearer.name" 
					class="bg-gradient-to-br from-indigo-200 to-indigo-100 p-4 rounded-xl shadow-md hover:shadow-lg transition duration-300">
					<p class="text-lg font-semibold text-indigo-900">{{ bearer.name }}</p>
					<p class="text-sm text-gray-700">{{ bearer.position }}</p>
					</div>
				</div>
			</div>

			<div v-if="currentSection === 'contact'" class="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-16 animate-fadeIn">
			  <h2 class="text-2xl md:text-3xl font-bold text-black mb-4">Contact</h2>
			  <p class="text-base md:text-lg">{{ data.contact_us }}</p>
			</div>
		  </div>
		</div>
	  </section>
	</main>
  </template>
  
  <script>
  import data from '../assets/EstateOff.json';
  import backgroundImage from '@/assets/offices.webp';  // Correct path for the image

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
  