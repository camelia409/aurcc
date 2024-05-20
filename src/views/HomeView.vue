<template>
  <div class="min-h-screen bg-base-200">
    <main class="flex flex-col">
      <div class="hero bg-base-200 flex flex-col gap-4 lg:w-1/2 self-center">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <h1 class="text-3xl font-bold">Counselling Code: 2025</h1>
          </div>
        </div>
      </div>
      
      <!-- Announcements Section -->
      <div class="bg-base-300">
        <div class="container mx-auto">
          <div class="flex items-center justify-between">
            <div class="text-sm p-4 bg-gray-800 text-white">Announcements</div>
            <div class="text-sm breadcrumbs animate-marquee hover:animate-pause p-4 flex-1 overflow-hidden">
              <ul class="flex space-x-4">
                <li><a href="#">Announcements</a></li>
                <li>on Recent Innovations in Production Engineering (RIPE) 2024 at MIT Campus, Anna University.</li>
                <li><a href="#">Founders day, Alumni, Institute day live stream link</a></li>
                <li><a href="#">View more</a></li>
              </ul>
            </div>
            <div class="text-sm p-4 bg-gray-800 text-white">
              <a href="#">View more</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Horizontal Scrollable Image Gallery Section -->
      <div class="scrollable-gallery-container py-8 bg-base-200">
        <h2 class="text-3xl font-bold text-center mb-4">Image Gallery</h2>
        <div class="scrollable-gallery" ref="scrollableGallery">
          <div v-for="(image, index) in galleryImages" :key="index" class="scrollable-gallery-item">
            <img :src="image" alt="Gallery Image" class="rounded-lg shadow-lg" />
          </div>
        </div>
        <div class="flex justify-center mt-4">
          <div
            v-for="(image, index) in galleryImages"
            :key="index"
            :class="['dot', { 'dot-active': currentImageIndex === index }]"
            @click="scrollToImage(index)"
          ></div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 p-9 md:p-20">
        <div class="col-span-3">
          <h2 class="text-3xl font-bold m-2">Welcome to AURCC: About the campus</h2>
          <p class="text-2xl">
            The Regional Campus Coimbatore of Anna University was established during 2012. It offers higher education in Engineering and Technology. Located in an Arcadian environment and away from the hustle and bustle crowd of the city. The Regional Campus Coimbatore is equipped with excellent infrastructure and highly qualified members of faculty, who facilitate hands on experience to students to master their skills in various disciplines.
          </p>
        </div>

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

      <div class="bg-primary text-primary-content py-8">
        <div class="container mx-auto px-4 flex justify-around">
          <div class="text-center">
            <div class="text-5xl font-bold">800</div>
            <div>Under Graduates</div>
          </div>
          <div class="text-center">
            <div class="text-5xl font-bold">216</div>
            <div>Post Graduates</div>
          </div>
          <div class="text-center">
            <div class="text-5xl font-bold">5</div>
            <div>UG Programs</div>
          </div>
          <div class="text-center">
            <div class="text-5xl font-bold">1</div>
            <div>PG Programs</div>
          </div>
          <div class="text-center">
            <div class="text-5xl font-bold">210/124</div>
            <div>Faculty/Staff</div>
          </div>
        </div>
      </div>

      <section class="flex flex-col gap-4">
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

      <!-- From the Dean's Desk section -->
      <section class="bg-base-300 w-full py-12">
        <div class="container mx-auto px-4">
          <h2 class="text-4xl font-bold text-center mb-8">From the Dean's Desk</h2>
          <p class="text-lg text-center mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi perspiciatis mollitia qui dolorum, rerum hic asperiores quibusdam repellendus sit repudiandae ipsa? Modi aliquam laboriosam mollitia laudantium nostrum, quae excepturi dolore voluptates. Qui dolorum voluptatum omnis itaque necessitatibus cum in, ea quae expedita beatae doloribus saepe. Provident velit pariatur eos! Aliquam distinctio dolorum, officia aut dolore modi nostrum excepturi? Totam maxime quis suscipit sunt earum corporis dolorum ipsa quidem saepe, nihil possimus consectetur corrupti atque molestias quam alias, nam quibusdam repudiandae quia magnam eligendi nemo aspernatur? Repudiandae, dolore unde architecto quisquam provident dolor fugiat adipisci eaque.
          </p>
          <div class="flex justify-center">
            <figure>
              <img src="../assets/1.jpg" alt="Dean's Image" class="w-64 rounded-lg" />
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
      scrollInterval: null,
      upcomingEvents: [
        {
          id: 1,
          title: 'Orientation Day',
          date: 'June 1, 2023',
          description: 'Welcome event for new students and their families.'
        },
        {
          id: 2,
          title: 'Career Fair',
          date: 'September 15, 2023',
          description: 'Meet potential employers and explore career opportunities.'
        },
        {
          id: 3,
          title: 'Homecoming Weekend',
          date: 'October 21-23, 2023',
          description: 'Alumni reunions, football game, and campus celebrations.'
        }
      ],
      galleryImages: [
        'http://localhost:5173/src/assets/mime_annualday.jpeg',
        'http://localhost:5173/src/assets/mime_annualday.jpeg',
        'http://localhost:5173/src/assets/mime_annualday.jpeg',
        'http://localhost:5173/src/assets/mime_annualday.jpeg',
        'http://localhost:5173/src/assets/mime_annualday.jpeg',
        'http://localhost:5173/src/assets/mime_annualday.jpeg'
      ],
      currentImageIndex: 0
    }
  },
  methods: {
    startScrolling() {
      const eventsContent = this.$refs.eventsContent
      eventsContent.classList.add('events-content')
      this.scrollInterval = setInterval(this.scrollEvents, 50) // Faster scroll speed
    },
    stopScrolling() {
      const eventsContent = this.$refs.eventsContent
      eventsContent.classList.remove('events-content')
      clearInterval(this.scrollInterval)
    },
    scrollEvents() {
      const eventsContent = this.$refs.eventsContent
      const eventsList = this.$refs.eventsList
      eventsContent.scrollTop += 1
      if (eventsContent.scrollTop + eventsContent.clientHeight >= eventsList.clientHeight) {
        eventsContent.scrollTop = 0
      }
    },
    scrollToImage(index) {
      this.currentImageIndex = index
      const scrollableGallery = this.$refs.scrollableGallery
      scrollableGallery.scrollTo({
        left: index * scrollableGallery.clientWidth,
        behavior: 'smooth'
      })
    }
  },
  mounted() {
    this.startScrolling()
  }
}
</script>
<style>
/* Tailwind CSS utility classes */
.animate-marquee {
  animation: marquee 20s linear infinite;
}

.animate-pause {
  animation-play-state: paused;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

.events-content {
  animation: scrollAnimation 5s linear infinite; /* Change animation duration as needed */
}

@keyframes scrollAnimation {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
}

.event {
  margin-bottom: 10px;
  /* Style individual events */
}

/* Scrollable Gallery Styles */
.scrollable-gallery-container {
  position: relative;
  overflow: hidden;
}

.scrollable-gallery {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
}

.scrollable-gallery-item {
  scroll-snap-align: start;
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px;
}

.scrollable-gallery-item img {
  width: 100%;
  height: auto;
  max-width: 600px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s;
}

.scrollable-gallery-item img:hover {
  transform: scale(1.05);
}

.dot {
  height: 12px;
  width: 12px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.dot-active {
  background-color: #717171;
}
</style>
