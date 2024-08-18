<template>
      <div class="min-h-screen flex flex-col ">
      <!-- Hero section -->
      <section
        class="bg-cover bg-center relative -z-10"
        :style="'background-image: url(http://localhost:5173/src/assets/' + data.image + ')'"
      >
        <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div class="container mx-auto py-16 text-white p-9 relative z-10">
          <h1 class="text-4xl font-bold mb-4">Welcome to {{ data.name }}</h1>
          <p class="text-xl mb-8">Explore our cutting-edge programs and stay ahead in the field.</p>
          <button class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Learn More</button>
        </div>
      </section>


      <section>


        <div id="content-sections" class="w-full ">
          <div class="container mx-auto px-4  bg-gray-100">
          
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
              <div class="flex flex-col">
                <div class="size-full max-h-full bg-white rounded-lg shadow-lg overflow-hidden transition-shadow duration-300">
                  <h2 class="text-4xl p-4 bg-gradient-to-r from-blue-500 to-cyan-300 text-center font-semibold mb-6 text-black ">About Department</h2>
                  <p class="text-xl text-gray-700 p-6 leading-relaxed">{{ data.description }}</p>
                </div>
              </div>
              <div class="grid grid-cols-1 gap-6" style="font-family: 'Clash Grotesk', sans-serif;">
                <div class="bg-white rounded-lg shadow-lg overflow-hidden transition-shadow duration-300 ">
                  <h3 class="text-4xl p-4 bg-gradient-to-r from-blue-500 to-cyan-300 text-center font-semibold text-black ">Vision</h3>
                  <div class="p-5 overflow-hidden relative" style="max-height: 300px;">
                    <p class="text-xl text-gray-700 leading-relaxed">{{ data.vision }}</p>
                  </div>
                </div>
                <div class="bg-white rounded-lg shadow-lg overflow-hidden transition-shadow duration-300 ">
                  <h3 class="text-4xl p-4 bg-gradient-to-r from-blue-500 to-cyan-300 text-center font-semibold text-black ">Mission</h3>
                  <div class="p-5 overflow-hidden relative" style="max-height: 300px;">
                    <ul class="text-xl list-disc pl-5 text-gray-700 space-y-2">
                      <li v-for="mission in data.mission" :key="mission">{{ mission }}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>


                <div id="facility" class=" mx-auto" >
                    <h2 class="text-5xl bg-[#0a0a34] text-center text-[#fdb827] font-extrabold p-10">Facility</h2>
                    <div class="grid gap-8 bg-blue-100">
                    <div 
                        v-for="(facility, index) in data.facility" 
                        :key="facility.name" 
                        :class="index % 2 === 0 ? 'flex flex-col md:flex-row items-center' : 'flex flex-col md:flex-row-reverse items-center'"
                    >
                        <div class="md:w-1/2 p-4 flex justify-center items-center">
                        <img :src="'http://localhost:5173/src/assets/' + data.image" :alt="facility.name" class="w-full h-auto object-cover md:max-h-[300px] rounded-lg">
                        </div>
                        <div class="md:w-1/2 p-4">
                        <h3 class="text-xl text-lg text-center font-semibold">{{ facility.name }}</h3>
                        <p class="text-xl text-gray-700">{{ facility.description }}</p>
                        </div>
                    </div>
                    </div>
                </div>
            
  <!-- Assistant Professors -->
           <div>
              <h3 class="text-3xl text-center font-semibold p-14 bg-yellow-100">Assistant Professors</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-yellow-100">
                <div 
                  v-for="staff in data.faculty" 
                  :key="staff.email" 
                  class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-1" 
                  @click="showDetails(staff)"
                >
                  <div class="w-full flex justify-center">
                    <div class="w-full max-w-xs aspect-[1/1] overflow-hidden border-4 border-gray-200 ">
                      <img :src="'http://localhost:5173/src/assets/' + staff.image" :alt="staff.name" class="object-cover "/>
                    </div>
                  </div>
                  <div class="flex-grow flex flex-col justify-center p-4 bg-gray-100 text-center w-full">
                    <h2 class="text-2xl font-bold text-gray-800">{{ staff.name }}</h2>
                    <p class="text-lg text-gray-800">{{ staff.position }}</p>
                    <p class="text-md text-gray-600">{{ staff.email }}</p>
                  </div>
                </div>
              </div>
            </div>


                <div v-if="showPopover" class="modal modal-open">
                <div class="modal-box relative rounded-lg flex flex-col max-w-4xl p-6">
                    <!-- Close Button -->
                    <button @click="showPopover = false" class="btn btn-sm btn-circle absolute right-2 top-2">✕</button>
                    <!-- Heading -->
                    <h1 class="font-bold text-3xl mb-10 text-center w-full">FACULTY DETAILS</h1>
                    <div class="flex flex-col md:flex-row">
                    <!-- Fixed Image -->
                    <div class="flex-shrink-0 text-center mt-4 md:mt-0 my-auto mr-8" >
                        <img :src="'http://localhost:5173/src/assets/' + selectedStaff.image" alt="Profile Picture" class="h-96 w-72 rounded-lg shadow-lg object-cover">
                        <h2 class="text-lg font-semibold mt-4">{{ selectedStaff.name }}</h2>
                    </div>
                    <!-- Scrollable Details -->
                    <div class="md:overflow-auto flex-grow max-h-[50vh] pr-6  shadow-inner">
                        <h3 class="text-xl font-semibold"><strong>Position:</strong> {{ selectedStaff.position }}</h3>
                        <h3 class="text-xl font-semibold"><strong>Email:</strong> {{ selectedStaff.email }}</h3>
                        <!-- Education -->
                        <template v-if="selectedStaff.education">
                        <h3 class="text-md font-semibold mt-4"><strong>Education</strong></h3>
                        <ul class="list-disc ml-6">
                            <li v-for="edu in selectedStaff.education" :key="edu.degree">{{ edu.degree }}, {{ edu.institution }} ({{ edu.year }})</li>
                        </ul>
                        </template>
                        <!-- Professional Experience -->
                        <template v-if="selectedStaff.professional_experience">
                        <h3 class="text-md font-semibold mt-4"><strong>Professional Experience</strong></h3>
                        <ul class="list-disc ml-6">
                            <li v-for="exp in selectedStaff.professional_experience" :key="exp.position">{{ exp.position }}, {{ exp.institution }} ({{ exp.duration }})</li>
                        </ul>
                        </template>
                        <!-- Research Interests -->
                        <template v-if="selectedStaff.research_interests">
                        <h3 class="text-md font-semibold mt-4"><strong>Research Interests</strong></h3>
                        <ul class="list-disc ml-6">
                            <li v-for="interest in selectedStaff.research_interests" :key="interest">{{ interest }}</li>
                        </ul>
                        </template>
                        <!-- Achievements -->
                        <template v-if="selectedStaff.achievements">
                        <h3 class="text-md font-semibold mt-4"><strong>Achievements</strong></h3>
                        <ul class="list-disc ml-6">
                            <li v-for="achievement in selectedStaff.achievements" :key="achievement">{{ achievement }}</li>
                        </ul>
                        </template>
                        <!-- Links -->
                        <template v-if="selectedStaff.links">
                        <h3 class="text-md font-semibold mt-4"><strong>Links</strong></h3>
                        <ul class="list-disc ml-6">
                            <li v-for="(link, title) in selectedStaff.links" :key="title"><a :href="link" target="_blank" class="text-violet-600 hover:underline">{{ title }}</a></li>
                        </ul>
                        </template>
                        <!-- Additional Details -->
                        <template v-if="selectedStaff.additional_details">
                        <h3 class="text-md font-semibold mt-4">Additional Details</h3>
                        <p>{{ selectedStaff.additional_details }}</p>
                        </template>
                    </div>
                    </div>
                </div>
                </div>
          </div>            
         </div>
    
      </section>
      </div>
</template>
<script>
import data from '../assets/s&h.json'
export default {
    data(){
        return{
            data : data
        }
    }
}
</script>