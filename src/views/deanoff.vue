<template>
  <div class="bg-gradient-to-br from-indigo-100 via-blue-50 to-white min-h-screen py-14 px-2 md:px-9">
    <h1 class="text-2xl md:text-4xl font-bold text-blue-900 tracking-wide text-center font-serif mb-4">Dean Office Staff</h1>
    <div class="flex justify-center mb-8">
      <span class="block w-32 h-1 rounded-full bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-400 animate-glow-bar"></span>
    </div>
    <div class="flex justify-center">
      <div class="dean-card bg-white/60 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden flex flex-col items-center border border-blue-200 transition-all duration-300 w-full max-w-[350px] py-8 px-4">
        <div class="w-full flex justify-center pt-6">
          <div class="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg bg-white">
            <img
              :src="'/' + staffMember.image"
              :alt="staffMember.name"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
        <div class="w-full bg-gradient-to-r from-blue-900 to-blue-500 py-3 px-2 flex flex-col items-center mt-6">
          <h2 class="text-base md:text-xl font-bold text-white font-sans tracking-wide">{{ staffMember.name }}</h2>
          <p class="text-xs md:text-base text-blue-100 font-sans">{{ staffMember.position || 'Position not available' }}</p>
          <p class="text-xs md:text-base text-blue-100 font-sans">{{ staffMember.email || 'Email not available' }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
  import deanOfficeData from '@/assets/deanoff.json';
  
  export default {
    name: 'DeanOfficeSingle',
    data() {
      return {
        staffMember: deanOfficeData['DEAN OFFICE STAFF'][0] // Access the first staff member in the "DEAN OFFICE STAFF" category
      };
    },
    methods: {
    }
  };
  </script>
  
  <style scoped>
.dean-card {
  transition: transform 0.18s cubic-bezier(.4,2,.6,1), box-shadow 0.18s cubic-bezier(.4,2,.6,1);
}
.dean-card:hover {
  transform: translateY(-8px) scale(1.025);
  box-shadow: 0 8px 32px 0 rgba(59,130,246,0.18), 0 2px 8px 0 rgba(59,130,246,0.10);
  border-color: #2563eb;
}
.animate-glow-bar {
  box-shadow: 0 0 16px 4px #60a5fa, 0 0 32px 8px #3b82f6;
  animation: glowBar 2.5s ease-in-out infinite alternate;
}
@keyframes glowBar {
  0% { box-shadow: 0 0 16px 4px #60a5fa, 0 0 32px 8px #3b82f6; }
  100% { box-shadow: 0 0 32px 8px #3b82f6, 0 0 48px 12px #60a5fa; }
}
</style>
  