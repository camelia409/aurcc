<template>
  <main class="flex-grow font-sans bg-blue-50">
    <!-- Hero section -->
    <section class="relative w-full min-h-[40vh] md:min-h-[60vh] overflow-hidden flex items-center justify-center animate-fadeIn">
      <img src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=1200&q=80" alt="Alumni" class="absolute inset-0 w-full h-full object-cover object-center" />
      <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>
      <!-- Stars CSS overlay -->
      <div class="absolute inset-0 pointer-events-none z-5">
        <div class="star" style="top: 20px; left: 10%; animation-delay: 0s;"></div>
        <div class="star" style="top: 60px; left: 30%; animation-delay: 1.2s;"></div>
        <div class="star" style="top: 100px; left: 70%; animation-delay: 0.7s;"></div>
        <div class="star" style="top: 180px; left: 50%; animation-delay: 2s;"></div>
        <div class="star" style="top: 220px; left: 80%; animation-delay: 1.5s;"></div>
        <div class="star" style="top: 300px; left: 20%; animation-delay: 2.5s;"></div>
        <div class="star" style="top: 350px; left: 60%; animation-delay: 0.3s;"></div>
      </div>
      <!-- End stars overlay -->
      <div class="absolute inset-0 flex flex-col items-center justify-center z-10 px-2">
        <div class="backdrop-blur-md bg-white/30 rounded-2xl shadow-lg px-4 py-4 sm:px-8 sm:py-6 md:px-12 md:py-10 flex flex-col items-center w-full max-w-2xl border border-white/30">
          <h1 class="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg tracking-wide text-center mb-2 leading-tight">Notable Alumni</h1>
          <p class="text-base sm:text-lg md:text-2xl text-white drop-shadow text-center font-medium">Celebrating Success Stories from Every Department</p>
        </div>
      </div>
    </section>
    <!-- Main content -->
    <section class="mx-auto py-14 px-2 md:px-9">
      <div class="max-w-7xl mx-auto flex flex-col gap-12">
        <div class="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg animate-fadeIn border border-gray-100">
          <div class="bg-gradient-to-r from-blue-900 to-blue-500 py-5 flex items-center justify-center gap-3 rounded-t-2xl relative">
            <span class="text-2xl">🎓</span>
            <h2 class="text-2xl md:text-3xl font-bold text-white text-center">Notable Alumni</h2>
            <span class="absolute left-1/2 -bottom-2 -translate-x-1/2 w-40 h-2 rounded-full bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 animate-glow-bar"></span>
          </div>
          <div class="p-8 md:p-10">
            <p class="text-lg md:text-xl font-medium text-gray-800 mb-6">{{ jsonData['notable alumni'] }}</p>
            <div v-for="(department, deptName) in jsonData.ALUMNI" :key="deptName" class="mb-10">
              <div class="bg-white/80 rounded-xl shadow p-6 border border-gray-100 mb-6">
                <h3 class="text-xl md:text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2"><span>🏢</span>{{ deptName }}</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div v-for="(alumnus, index) in department" :key="index" class="bg-white rounded-lg shadow p-5 border border-gray-100 flex flex-col gap-2 animate-fadeInUp alumni-card">
                    <div class="font-bold text-lg text-indigo-700">{{ alumnus.Name }}</div>
                    <div class="text-gray-700 font-medium">{{ alumnus.Position }}</div>
                    <div class="text-gray-600 text-sm">{{ alumnus.Company }}</div>
                    <div class="text-gray-600 text-sm">{{ alumnus.Email }}</div>
                    <div class="text-gray-600 text-sm">Academic Year: <span class="font-normal">{{ alumnus['Academic Year'] }}</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
  
  <script>
  import jsonData from '../assets/alumni.json';
  
  export default {
    data() {
      return {
        jsonData: jsonData
      };
    }
  };
  </script>
  
  <style>
  .star {
    position: absolute;
    width: 4px;
    height: 4px;
    background: white;
    border-radius: 50%;
    opacity: 0.8;
    box-shadow: 0 0 8px 2px white;
    animation: twinkle 2.5s infinite ease-in-out;
  }

  @keyframes twinkle {
    0%, 100% { opacity: 0.8; }
    50% { opacity: 0.2; }
  }
  .animate-glow-bar {
    box-shadow: 0 0 16px 4px #60a5fa, 0 0 32px 8px #3b82f6;
    animation: glowBar 2.5s ease-in-out infinite alternate;
  }
  @keyframes glowBar {
    0% { box-shadow: 0 0 16px 4px #60a5fa, 0 0 32px 8px #3b82f6; }
    100% { box-shadow: 0 0 32px 8px #3b82f6, 0 0 48px 12px #60a5fa; }
  }
  .alumni-card {
    transition: transform 0.2s cubic-bezier(.4,2,.6,1), box-shadow 0.2s cubic-bezier(.4,2,.6,1);
  }
  .alumni-card:hover {
    transform: translateY(-8px) scale(1.025);
    box-shadow: 0 8px 32px 0 rgba(59,130,246,0.15), 0 2px 8px 0 rgba(59,130,246,0.10);
    border-color: #3b82f6;
  }
  </style>
  