<template>
  <div class="min-h-screen bg-base-200">
    <main class="flex flex-col">
      <div class=" flex flex-col gap-4 lg:w-1/2 self-center">
        <div class="text-center">
            <h1 class="text-3xl font-bold p-4" style="font-family: Clash Grotesk;">Counselling Code: 2025</h1>
        </div>
      </div>
      


      <!-- Horizontal Scrollable Image Gallery Section -->
      <!-- <div class="flex flex-col overflow-hidden items-center bg-base-200 relative">
        <div class="relative w-full">
          <div
            class="flex transition-transform duration-500"
            :style="{ transform: `translateX(-${currentImageIndex * 100}%)` }"
            ref="slider"
          >
            <div
              v-for="(image, index) in circularGalleryImages"
              :key="index"
              class="flex-none w-full"
            >
              <img
                :src="image"
                alt="Gallery Image"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center space-x-2">
          <div
            v-for="(image, index) in galleryImages"
            :key="index"
            :class="{
              'bg-blue-500 border-white': currentImageIndex === index,
              'bg-gray-400': currentImageIndex !== index,
            }"
            @click="scrollToImage(index)"
            class="w-3 h-3 rounded-full border cursor-pointer grow"
          ></div>
        </div>
      </div> -->


      <!-- <div class="flex">
        <div class="bg-red-500 hover:bg-red-600 transition-colors duration-200 h-20 p-4  hover:cursor-pointer">
          <a href="/aicte&moe" class="text-white ">
            AICTE  and MOE Cell
          </a>
        </div>

        <div class="bg-orange-400 hover:bg-orange-500 transition-colors duration-200 h-20 p-4  hover:cursor-pointer grow">
          <a href="https://drive.google.com/file/d/1z8ioKdQN0-fvahtIfneCPJI6i7j-YaFz/view" class="text-white">
            Mandatary Disclosure
          </a >
        </div>

        <div class="bg-yellow-400 hover:bg-yellow-500 transition-colors duration-200 h-20 p-4  hover:cursor-pointer grow">
          <span class="text-white">
          <a href="/antiragging" class="text-white ">
            Antiragging cell
          </a>
          </span>
        </div>

        <div class="bg-green-500 hover:bg-green-600 transition-colors duration-200 h-20 p-4  hover:cursor-pointer grow">
          <span class="text-white">
            Anti Drugs
          </span>
        </div>

        <div class="bg-blue-500 hover:bg-blue-600 transition-colors duration-200 h-20 p-4  hover:cursor-pointer grow">
          <span class="text-white">
            POSH Cell
          </span>
        </div>

        <div class="bg-gray-500 hover:bg-gray-600 transition-colors duration-200 h-20 p-4  hover:cursor-pointer grow">
          <span class="text-white">
            Differently Abled Persons Cell
          </span>
        </div>
      </div> -->

      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 p-9 md:p-20" style="font-family: Clash Grotesk;">
        <div class="col-span-2">
          <div class="text-3xl font-extrabold flex align-baseline" ><img src="../assets/logo.svg" alt="Logo" class="h-20" /> <p class="text-6xl m-4 ">Anna University</p></div>
          <p class="text-5xl font-semibold mb-10">Regional Campus Coimbatore</p>
          <p class="text-2xl text-gray-500 ">
            The Regional Campus Coimbatore of Anna University was established during 2012. It offers higher education in Engineering and Technology. Located in an Arcadian environment and away from the hustle and bustle crowd of the city. The Regional Campus Coimbatore is equipped with excellent infrastructure and highly qualified members of faculty, who facilitate hands on experience to students to master their skills in various disciplines.
          </p>
        </div>

        <section class="lg:w-[40vw]x">
          <iframe class="lg:w-[40vw] h-[50vh] w-full shadow-xl rounded-xl" src="https://www.youtube.com/embed/gwseTsTb_jE" title="Aerial View of Anna University Regional Campus Coimbatore">
          </iframe>
        </section>

        <!-- Event section -->
        <div class="flex flex-col gap-2">
          <div>
            <h2 class="text-xl font-bold mb-4 self-center">News/Admission</h2>
            <div class="events-section bg-base-300 overflow-hidden" @mouseenter="stopScrolling" @mouseleave="startScrolling">
              <div class="events-content p-6" ref="eventsContent">
                <div class="events-list" ref="eventsList">
                  <div v-for="event in upcomingEvents" :key="event.id" class="event">
                    <h3 class="font-bold">{{ event.title }}</h3>
                    <p>{{ event.date }}</p>
                    <p>{{ event.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-yellow-500 text-black py-8">
        <div class="container mx-auto px-4 flex justify-around">
          <div class="text-center animate-fade-in">
            <div class="text-5xl font-bold">800</div>
            <div>Under Graduates</div>
          </div>
          <div class="text-center animate-fade-in">
            <div class="text-5xl font-bold">216</div>
            <div>Post Graduates</div>
          </div>
          <div class="text-center animate-fade-in">
            <div class="text-5xl font-bold">5</div>
            <div>UG Programs</div>
          </div>
          <div class="text-center animate-fade-in">
            <div class="text-5xl font-bold">1</div>
            <div>PG Programs</div>
          </div>
          <div class="text-center animate-fade-in">
            <div class="text-5xl font-bold">210/124</div>
            <div>Faculty/Staff</div>
          </div>
        </div>
      </div>

            <!-- Department Section -->
            <section class="bg-[#f1f1f1] w-full py-12">
        <div class="container mx-auto px-4">
          <h2 class="text-4xl font-bold text-center mb-8 text-[#21209c] animate-fade-in-up">Programs Offered</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <router-link to="/departments/cse" class="text-lg bg-[#21209c] p-4 rounded-lg flex items-center space-x-4 transition-transform transform hover:scale-105">
              <div class="bg-[#fdb827] p-2 rounded-full">
                <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 008 0H3zm0 0a4 4 0 008 0M5 3a2 2 0 100 4 2 2 0 000-4zM12 17a4 4 0 108 0h-8zm0 0a4 4 0 108 0M14 3a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
              </div>
              <div>
                <h3 class="font-bold text-white">B.E. Computer Science Engg</h3>
                <p class="text-sm text-gray-300">CSE Department</p>
              </div>
            </router-link>

            <div class="text-lg bg-[#21209c] p-4 rounded-lg flex items-center space-x-4 transition-transform transform hover:scale-105">
              <div class="bg-[#fdb827] p-2 rounded-full">
                <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 008 0H3zm0 0a4 4 0 008 0M5 3a2 2 0 100 4 2 2 0 000-4zM12 17a4 4 0 108 0h-8zm0 0a4 4 0 108 0M14 3a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
              </div>
              <div>
                <h3 class="font-bold text-white">B.Tech Artificial Intelligence and DataScience</h3>
                <p class="text-sm text-gray-300">CSE Department</p>
              </div>
            </div>

            <div class="text-lg bg-[#21209c] p-4 rounded-lg flex items-center space-x-4 transition-transform transform hover:scale-105">
              <div class="bg-[#fdb827] p-2 rounded-full">
                <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 008 0H3zm0 0a4 4 0 008 0M5 3a2 2 0 100 4 2 2 0 000-4zM12 17a4 4 0 108 0h-8zm0 0a4 4 0 108 0M14 3a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
              </div>
              <div>
                <h3 class="font-bold text-white">B.E. Electrical and Electrical Engg</h3>
                <p class="text-sm text-gray-300">EEE Department</p>
              </div>
            </div>

            <div class="text-lg bg-[#21209c] p-4 rounded-lg flex items-center space-x-4 transition-transform transform hover:scale-105">
              <div class="bg-[#fdb827] p-2 rounded-full">
                <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 008 0H3zm0 0a4 4 0 008 0M5 3a2 2 0 100 4 2 2 0 000-4zM12 17a4 4 0 108 0h-8zm0 0a4 4 0 108 0M14 3a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
              </div>
              <div>
                <h3 class="font-bold text-white">B.E. Electrical and Electronics Engg</h3>
                <p class="text-sm text-gray-300">ECE Department</p>
              </div>
            </div>

            <div class="text-lg bg-[#21209c] p-4 rounded-lg flex items-center space-x-4 transition-transform transform hover:scale-105">
              <div class="bg-[#fdb827] p-2 rounded-full">
                <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 008 0H3zm0 0a4 4 0 008 0M5 3a2 2 0 100 4 2 2 0 000-4zM12 17a4 4 0 108 0h-8zm0 0a4 4 0 108 0M14 3a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
              </div>
              <div>
                <h3 class="font-bold text-white">B.E. Mechanical Engg</h3>
                <p class="text-sm text-gray-300">Mechanical Department</p>
              </div>
            </div>

            <div class="text-lg bg-[#fdb827] p-4 rounded-lg flex items-center space-x-4 transition-transform transform hover:scale-105">
              <div class="bg-[#21209c] p-2 rounded-full">
                <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 008 0H3zm0 0a4 4 0 008 0M5 3a2 2 0 100 4 2 2 0 000-4zM12 17a4 4 0 108 0h-8zm0 0a4 4 0 108 0M14 3a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
              </div>
              <div>
                <h3 class="font-bold text-[#23120b]">MBA</h3>
                <p class="text-sm text-gray-700">Masters</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="flex flex-col gap-4 py-8">
        <h2 class="text-4xl font-bold text-center">Innovating the Industries</h2>
        <div class="grid grid-cols-3 gap-4 items-center justify-space-around">
          <a href="https://www.tcs.com" class="h-[12vh] p-4 flex flex-col items-center justify-center">
            <figure><img alt="TCS" src="../assets/tcs.webp" class="w-[20vw] lg:w-[10vw]" /></figure>
          </a>
          <a href="https://www.avasoft.com" class="h-[12vh] p-4 flex flex-col items-center justify-center">
            <figure><img alt="Avasoft" src="../assets/avasoft.webp" class="w-[20vw] lg:w-[10vw]" /></figure>
          </a>
          <a href="https://www.guvi.in" class="h-[12vh] p-4 flex flex-col items-center justify-center">
            <figure><img alt="Guvi" src="../assets/guvi.webp" class="w-[20vw] lg:w-[10vw]" /></figure>
          </a>
          <a href="https://www.gighz.net" class="h-[12vh] p-4 flex flex-col items-center justify-center">
            <figure><img alt="GigHz" src="../assets/gighz.webp" class="w-[20vw] lg:w-[10vw]" /></figure>
          </a>
          <a href="https://www.saptanglabs.com" class="h-[12vh] p-4 flex flex-col items-center justify-center">
            <figure><img alt="Saptang Labs" src="../assets/saptan-labs.webp" class="w-[20vw] lg:w-[10vw]" /></figure>
          </a>
          <a href="https://home.barclays/" class="h-[12vh] p-4 flex flex-col items-center justify-center">
            <figure><img alt="Barclays" src="../assets/barclays.webp" class="w-[20vw] lg:w-[10vw]" /></figure>
          </a>
          <a href="https://www.e-consystems.com" class="h-[12vh] p-4 flex flex-col items-center justify-center">
            <figure><img alt="e-con Systems" src="../assets/e-con.webp" class="w-[20vw] lg:w-[10vw]" /></figure>
          </a>
          <a href="https://www.azentio.com" class="h-[12vh] p-4 flex flex-col items-center justify-center">
            <figure><img alt="Azentio" src="../assets/azentio.webp" class="w-[20vw] lg:w-[10vw]" /></figure>
          </a>
          <a href="https://www.dummy.com" class="h-[12vh] p-4 flex flex-col items-center justify-center">
            <figure><img alt="Dummy" src="../assets/texmo.webp" class="w-[20vw] lg:w-[10vw]" /></figure>
          </a>
        </div>
      </section>

      <div class="grid grid-cols-2">
        <div class="bg-[#f1f1f1] p-6 rounded-lg w-full m-5 col-span-1 ">
          <h2 class="text-center text-[#23120b] font-extrabold text-xl mb-6">News/Admissions:</h2>
          <div class="overflow-hidden relative h-80">
            <div class="absolute top-0 left-0 right-0 animate-move-vertically hover:pause-animation space-y-4">
              <div
                v-for="(event, index) in events"
                :key="index"
                class="p-4 bg-white bg-opacity-30 backdrop-blur-md border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                <h3 class="font-bold text-lg text-[#21209c]">{{ event.title }}</h3>
                <p class="text-sm text-[#23120b]">{{ event.date }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-[#f1f1f1] p-6 rounded-lg w-full m-5 col-span-1">
          <h2 class="text-center text-[#23120b] font-extrabold text-xl mb-6">Events/Scholarship</h2>
          <div class="overflow-hidden relative h-80">
            <div class="absolute top-0 left-0 right-0 animate-move-vertically hover:pause-animation space-y-4">
              <div
                v-for="(event, index) in events"
                :key="index"
                class="p-4 bg-white bg-opacity-30 backdrop-blur-md border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              >
                <h3 class="font-bold text-lg text-[#21209c]">{{ event.title }}</h3>
                <p class="text-sm text-[#23120b]">{{ event.date }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      

      <!-- From the Dean's Desk section -->
      <section class="bg-base-100 border-t-4 border-yellow-300 w-full py-12">
        <div class="container mx-auto px-4">
          <h2 class="text-4xl font-bold text-center mb-8 text-blue-800 animate-fade-in-up">From the Dean's Desk</h2>
          <p class="text-lg text-center mb-8 text-black animate-fade-in-up">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi perspiciatis mollitia qui dolorum, rerum hic asperiores quibusdam repellendus sit repudiandae ipsa? Modi aliquam laboriosam mollitia laudantium nostrum, quae excepturi dolore voluptates. Qui dolorum voluptatum omnis itaque necessitatibus cum in, ea quae expedita beatae doloribus saepe. Provident velit pariatur eos! Aliquam distinctio dolorum, officia aut dolore modi nostrum excepturi? Totam maxime quis suscipit sunt earum corporis dolorum ipsa quidem saepe, nihil possimus consectetur corrupti atque molestias quam alias, nam quibusdam repudiandae quia magnam eligendi nemo aspernatur? Repudiandae, dolore unde architecto quisquam provident dolor fugiat adipisci eaque.
          </p>
          <div class="flex justify-center">
            <figure class="animate-fade-in-up">
              <img src="../assets/1.jpg" alt="Dean's Image" class="w-64 rounded-lg border border-black" />
            </figure>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
export default {
  data() {
    return {
      galleryImages: [
        'http://localhost:5173/src/assets/pic1.webp ',
        'http://localhost:5173/src/assets/homeview.webp',
        'http://localhost:5173/src/assets/1.webp',
        'http://localhost:5173/src/assets/4.webp',
        'http://localhost:5173/src/assets/ece1.webp',
        'http://localhost:5173/src/assets/homeview.webp'
      ],
      currentImageIndex: 1,
      circularGalleryImages: [],
      events: [
        { title: 'Event 1', date: '2024-05-25' },
        { title: 'Event 2', date: '2024-06-10' },
        { title: 'Event 3', date: '2024-07-04' },
        // Add more events as needed
      ],
    };
  },
  methods: {
    startAutoScroll() {
      this.scrollInterval = setInterval(this.nextImage, 5000);
    },
    stopAutoScroll() {
      clearInterval(this.scrollInterval);
    },
    nextImage() {
      if (this.currentImageIndex < this.galleryImages.length) {
        this.currentImageIndex++;
      } else {
        this.currentImageIndex = 1;
      }
    },
    scrollToImage(index) {
      this.currentImageIndex = index;
    },
    createCircularImages() {
      this.circularGalleryImages = [
        this.galleryImages[this.galleryImages.length - 1],
        ...this.galleryImages,
        this.galleryImages[0]
      ];
    }
  },
  mounted() {
    this.createCircularImages();
    this.startAutoScroll();
  },
  beforeDestroy() {
    this.stopAutoScroll();
  }
};

</script>

<style scoped>
@keyframes move-vertically {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(-100%);
  }
}
.animate-move-vertically {
  animation: move-vertically 10s linear infinite;
}
.hover\:pause-animation:hover {
  animation-play-state: paused;
}
</style>


