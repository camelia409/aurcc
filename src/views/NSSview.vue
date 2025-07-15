  <template>
  <main class="flex-grow font-sans bg-gray-50">
    <!-- Hero section -->
    <section class="relative w-full min-h-[40vh] md:min-h-[60vh] overflow-hidden flex items-center justify-center">
      <img src="/NSS.webp" alt="NSS" class="absolute inset-0 w-full h-full object-cover object-center" />
      <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>
      <div class="absolute inset-0 flex items-center justify-center z-10 px-2">
        <div class="backdrop-blur-md bg-white/30 rounded-2xl shadow-lg px-4 py-4 sm:px-8 sm:py-6 md:px-12 md:py-10 flex flex-col items-center w-full max-w-xl border border-white/30">
          <h1 class="text-xl sm:text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg tracking-wide text-center mb-2 leading-tight">{{ data.name }}</h1>
          <p class="text-xs sm:text-base md:text-xl text-white drop-shadow text-center font-medium">Community Service. Personality Development.</p>
        </div>
      </div>
    </section>
    <!-- Content sections -->
    <section class="mx-auto py-14 px-2 md:px-9">
      <div class="max-w-7xl mx-auto flex flex-col gap-12">
        <!-- About Card -->
        <div class="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg animate-fadeIn border border-gray-100">
          <div class="bg-gradient-to-r from-blue-900 to-blue-500 py-4 sm:py-5 flex items-center justify-center gap-3 rounded-t-2xl">
            <span class="text-xl sm:text-2xl">ℹ️</span>
            <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center">About</h2>
          </div>
          <div class="p-4 sm:p-8 md:p-10">
            <p class="text-base sm:text-lg md:text-xl font-medium text-gray-800 whitespace-pre-line">{{ data.description }}</p>
          </div>
        </div>
        <!-- Activities Card with Sliding Notice Board -->
        <div class="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg animate-fadeIn border border-gray-100">
          <div class="bg-gradient-to-r from-blue-900 to-blue-500 py-4 sm:py-5 flex items-center justify-center gap-3 rounded-t-2xl">
            <span class="text-xl sm:text-2xl">🏅</span>
            <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center">Activities</h2>
          </div>
          <div class="p-4 sm:p-8 md:p-10 flex flex-col items-center">
            <div class="relative w-full max-w-xl mx-auto">
              <div class="overflow-hidden h-16 sm:h-20 md:h-24 rounded-lg bg-blue-50 border border-blue-100 shadow flex items-center justify-center">
                <transition-group name="slide-activity" tag="div">
                  <div v-if="data.activities.length" :key="currentActivityIndex" class="w-full flex items-center justify-center px-4 text-center text-base sm:text-lg md:text-xl font-medium text-blue-900 min-h-[2.5rem]">
                    <span class="inline-block w-full">{{ data.activities[currentActivityIndex] }}</span>
                  </div>
                </transition-group>
              </div>
              <div class="flex justify-center gap-2 mt-2">
                <button v-for="(activity, idx) in data.activities" :key="idx" @click="setActivity(idx)" :class="['h-2 w-2 rounded-full', currentActivityIndex === idx ? 'bg-blue-700' : 'bg-blue-200']"></button>
              </div>
            </div>
          </div>
        </div>
        <!-- NSS Coordinators Card -->
        <div class="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg animate-fadeIn border border-gray-100">
          <div class="bg-gradient-to-r from-blue-900 to-blue-500 py-4 sm:py-5 flex items-center justify-center gap-3 rounded-t-2xl">
            <span class="text-xl sm:text-2xl">👥</span>
            <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center">NSS Coordinators</h2>
          </div>
          <div class="p-4 sm:p-8 md:p-10">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div
                v-for="coordinator in data.nss_coordinator['Office Bearers']"
                :key="coordinator.Name"
                class="bg-white/80 rounded-xl shadow p-4 sm:p-6 border border-gray-100 flex flex-col gap-2 animate-fadeInUp"
              >
                <h3 class="text-base sm:text-lg md:text-xl font-bold text-indigo-700">{{ coordinator.Name }}</h3>
                <div class="text-gray-700 font-medium">{{ coordinator.Designation }}</div>
                <div class="text-gray-600 text-sm">Phone: <span class="font-normal">{{ coordinator['Phone No'] !== '-' ? coordinator['Phone No'] : 'N/A' }}</span></div>
                <div class="text-gray-600 text-sm">Email: <a :href="'mailto:' + coordinator['Email id']" class="text-blue-500 underline">{{ coordinator['Email id'] }}</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import data from '../assets/NSS.json';

export default {
  data() {
    return {
      data: data,
      currentActivityIndex: 0,
      activityInterval: null
    };
  },
  mounted() {
    this.startActivityCarousel();
  },
  beforeUnmount() {
    clearInterval(this.activityInterval);
  },
  methods: {
    startActivityCarousel() {
      this.activityInterval = setInterval(() => {
        this.currentActivityIndex = (this.currentActivityIndex + 1) % this.data.activities.length;
      }, 3500);
    },
    setActivity(idx) {
      this.currentActivityIndex = idx;
    }
  }
};
</script>

<style scoped>
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-fadeIn {
  animation: fadeIn 1.2s ease-out forwards;
}
.animate-fadeInUp {
  animation: fadeInUp 1.2s ease-out forwards;
}
.slide-activity-enter-active, .slide-activity-leave-active {
  transition: all 0.5s cubic-bezier(0.4,0,0.2,1);
}
.slide-activity-enter-from {
  opacity: 0;
  transform: translateY(30px);
}
.slide-activity-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>