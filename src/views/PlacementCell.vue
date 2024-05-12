<template>
	<div class="min-h-screen flex flex-col">
		<main class="flex-grow">
			<!-- Hero section -->
			<section class="bg-cover bg-center relative -z-10" :style="'background-image: url(http://192.168.72.231:5173/src/assets/placement-cell-hero.jpg)'">
				<div class="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
				<div class="container mx-auto py-16 text-white p-9 relative z-10">
					<h1 class="text-4xl font-bold mb-4">Placement Cell</h1>
					<p class="text-xl mb-8">{{ data.description }}</p>
					<button class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Learn More</button>
				</div>
			</section>

			<!-- Content sections -->
			<section class="container mx-auto py-8 p-9">
				<div class="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div>
						<h2 class="text-2xl font-bold mb-4 flex items-center">
							<svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
							</svg>
							Sections
						</h2>
						<div class="flex flex-col">
							<button v-for="(section, index) in sections" :key="index" @click="currentSection = section" :class="{'bg-blue-500 text-white': currentSection === section, 'bg-white hover:bg-gray-100 text-gray-800': currentSection !== section}" class="font-semibold py-2 px-4 border border-gray-400 rounded shadow flex items-center mb-2">
								<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
								</svg>
								{{ section }}
							</button>
						</div>
					</div>
					<section v-if="currentSection !== null" class="container mx-auto py-8 p-9 md:col-span-3">
						<div v-if="currentSection === 'Recruitment Process'">
							<h2 class="text-2xl font-bold mb-4">Recruitment Process</h2>
							<p>{{ data.recruitment }}</p>
						</div>
						<div v-else-if="currentSection === 'CUIC'">
							<h2 class="text-2xl font-bold mb-4">CUIC</h2>
							<p>{{ data.cuic }}</p>
						</div>
						<div v-else-if="currentSection === 'Our Recruiters'">
							<h2 class="text-2xl font-bold mb-4">Our Recruiters</h2>
							<!-- Add content for Our Recruiters section -->
						</div>
						<div v-else-if="currentSection === 'Placement Brochure'">
							<h2 class="text-2xl font-bold mb-4">Placement Brochure</h2>
							<!-- Add content for Placement Brochure section -->
						</div>
						<div v-else-if="currentSection === 'Placed Students'">
							<h2 class="text-2xl font-bold mb-4">Placed Students</h2>
							<!-- Add content for Placed Students section -->
						</div>
						<div v-else-if="currentSection === 'Staff Members'">
							<h2 class="text-2xl font-bold mb-4">Staff Members</h2>
							<div v-for="member in data.staff_members" :key="member.emailid" class="bg-white shadow-md rounded-md p-4 mb-4">
								<h3 class="text-lg font-semibold">{{ member.name }}</h3>
								<p><strong>Designation:</strong> {{ member.designation }}</p>
								<p><strong>Email:</strong> <a :href="'mailto:' + member.emailid">{{ member.emailid }}</a></p>
							</div>
						</div>
					</section>
				</div>
			</section>
		</main>
		<footer class="bg-gray-800 text-white py-4">
			<div class="container mx-auto text-center">
				<p>&copy; {{ currentYear }} Placement Cell. All rights reserved.</p>
			</div>
		</footer>
	</div>
</template>
  
<script>
import data from '../assets/placement-cell.json';

export default {
	data() {
		return {
			data: data,
			sections: [
				'Recruitment Process',
				'CUIC',
				'Our Recruiters',
				'Placement Brochure',
				'Placed Students',
				'Staff Members'
			],
			currentSection: null
		};
	},
	created() {
		// Default to first section
		if (this.sections.length > 0) {
			this.currentSection = this.sections[0];
		}
	},
	computed: {
		currentYear() {
			return new Date().getFullYear();
		}
	}
};
</script>

<style>
/* Add custom styles if needed */
</style>