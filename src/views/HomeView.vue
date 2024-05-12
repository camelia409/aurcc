<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <div class="min-h-screen bg-base-200">
    <div class="carousel ">
      <div class="carousel-item">
        <img src="../assets/1.jpg" alt="Burger" />
      </div> 
      <div class="carousel-item">
        <img src="../assets/pic1.jpg" alt="Burger" />
      </div> 
      <div class="carousel-item">
        <img src="../assets/4.jpg" alt="Burger" />
      </div> 
      <div class="carousel-item">
        <img src="../assets/ece1.jpg" alt="Burger" />
      </div> 
      <div class="carousel-item">
        <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" alt="Burger" />
      </div> 
      <div class="carousel-item">
        <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" alt="Burger" />
      </div> 
      <div class="carousel-item">
        <img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" alt="Burger" />
      </div>
    </div>
    <main class="flex flex-col gap-8">
      <div class="hero bg-base-200 flex flex-col gap-4 lg:w-1/2 self-center">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <h1 class="text-3xl font-bold">Counselling Code: 2025</h1>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-4 self-center justify-items-center items-center lg:w-1/2 p-9">
        <h2 class="text-3xl font-bold m-2">Welcome to AURCC: About the campus</h2>
        <p class="text-2xl ">
          The Regional Campus Coimbatore of Anna University was established during 2012. It offers higher education in Engineering and Technology. Located in an Arcadian environment and away from the hustle and bustle crowd of the city. The Regional Campus Coimbatore is equipped with excellent infrastructure and highly qualified members of faculty, who facilitate hands on experience to students to master their skills in various disciplines.
        </p>
      </div>

      
      <!-- Event section -->
      <div class="flex gap-4 self-center justify-items-center items-center lg:w-1/2 p-9">
        <div>
          <h2 class="text-xl font-bold mb-4 self-center">News/Admission</h2>
          <div class="events-section bg-base-300 overflow-hidden" @mouseenter="stopScrolling" @mouseleave="startScrolling">
            <div class="events-content p-6" ref="eventsContent">
              <div class="events-list" ref="eventsList">
                <!-- Populate this with your upcoming events -->
                <div v-for="event in upcomingEvents" :key="event.id" class="event">
                  <h3 class="font-bold">{{ event.title }}</h3>
                  <p>{{ event.date }}</p>
                  <p>{{ event.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 class="text-xl font-bold mb-4 self-center">Events/Scholarship</h2>
          <div class="events-section bg-base-300 overflow-hidden" @mouseenter="stopScrolling" @mouseleave="startScrolling">
            <div class="news-content p-6" ref="newsContent">
              <div class="events-list h-80" ref="eventsList">
                <!-- Populate this with your upcoming events -->
                <div v-for="event in upcomingEvents" :key="event.id" class="event">
                  <p>Bello this is Newslet</p>
                  <p>Yup this is newslet</p>
                  <h3 class="font-bold">{{ event.title }}</h3>
                  <p>{{ event.date }}</p>
                  <p>{{ event.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="flex flex-col gap-4">
        <h2 class="text-4xl font-bold text-center">Innovating the Industries</h2>
        <div class="grid grid-cols-3 gap-4 items-center justify-space-around"><a href="https://www.tcs.com"
                    class="h-[12vh] p-4 flex flex-col items-center justify-center"
                >
              <figure><img alt="TCS" src="../assets/tcs.webp" class="w-[20vw] lg:w-[10vw]" /></figure>
          </a><a href="https://www.avasoft.com"
              class="h-[12vh] p-4 flex flex-col items-center justify-center"
          >
              <figure><img alt="Avasoft" src="../assets/avasoft.webp" class="w-[20vw] lg:w-[10vw]" /></figure>
          </a><a href="https://www.guvi.in"
              class="h-[12vh] p-4 flex flex-col items-center justify-center"
          >
              <figure><img alt="Guvi" src="../assets/guvi.webp" class="w-[20vw] lg:w-[10vw]" /></figure>
          </a><a href="https://www.gighz.net"
              class="h-[12vh] p-4 flex flex-col items-center justify-center"
          >
              <figure><img alt="GigHz" src="../assets/gighz.webp" class="w-[20vw] lg:w-[10vw]" /></figure>
          </a><a href="https://www.saptanglabs.com"
              class="h-[12vh] p-4 flex flex-col items-center justify-center"
          >
              <figure><img alt="Saptang Labs" src="../assets/saptan-labs.webp" class="w-[20vw] lg:w-[10vw]" /></figure>
          </a><a href="https://home.barclays/"
              class="h-[12vh] p-4 flex flex-col items-center justify-center"
          >
              <figure><img alt="Barclays" src="../assets/barclays.webp" class="w-[20vw] lg:w-[10vw]" /></figure>
          </a><a href="https://www.e-consystems.com"
              class="h-[12vh] p-4 flex flex-col items-center justify-center"
          >
              <figure><img alt="e-con Systems" src="../assets/e-con.webp" class="w-[20vw] lg:w-[10vw]" /></figure>
          </a><a href="https://www.azentio.com"
              class="h-[12vh] p-4 flex flex-col items-center justify-center"
          >
              <figure><img alt="Azentio" src="../assets/azentio.webp" class="w-[20vw] lg:w-[10vw]" /></figure>
          </a><a href="https://www.dummy.com"
              class="h-[12vh] p-4 flex flex-col items-center justify-center"
          >
              <figure><img alt="Dummy" src="../assets/texmo.webp" class="w-[20vw] lg:w-[10vw]" /></figure>
          </a></div>
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
      featuredPrograms: [
        {
          id: 1,
          title: 'Computer Science',
          description: 'Prepare for careers in software development, cybersecurity, and more.',
          imageUrl: 'https://placeimg.com/400/225/tech'
        },
        {
          id: 2,
          title: 'Business Administration',
          description: 'Develop leadership and management skills for the corporate world.',
          imageUrl: 'https://placeimg.com/400/225/business'
        },
        {
          id: 3,
          title: 'Environmental Studies',
          description: 'Study the impact of human activities on the environment.',
          imageUrl: 'https://placeimg.com/400/225/nature'
        }
      ]
    }
  },
  methods: {
    startScrolling() {
      const eventsContent = this.$refs.eventsContent
      eventsContent.addClasslist('events-content')
      this.scrollInterval = setInterval(this.scrollEvents, 50) // Faster scroll speed
    },
    stopScrolling() {
      // clearInterval(this.scrollInterval)
      // this.scrollInterval = null
      const eventsContent = this.$refs.eventsContent
      eventsContent.removeClasslist('events-content')
    },
    // scrollEvents() {
    //   const eventsContent = this.$refs.eventsContent
    //   const eventsList = this.$refs.eventsList
    //   eventsContent.scrollTop += 1
    //   if (eventsContent.scrollTop + eventsContent.clientHeight >= eventsList.clientHeight) {
    //     eventsContent.scrollTop = 0
    //   }
    // }
  },
  mounted() {
    this.startScrolling()
  }
}
</script>

<style>
.events-content,.news-content {
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
</style>