<template>
  <div class="min-h-screen bg-gradient-to-b from-blue-100 to-white">
    <div v-if="mobileMenuOpen" class="md:hidden bg-white shadow-md p-4 absolute top-16 left-0 right-0 z-40">
      <a v-for="item in menuItems" :key="item" :href="'#' + item.toLowerCase()" class="block py-2 text-blue-800 hover:text-blue-600 transition-colors">{{ item }}</a>
    </div>

    <main>
      <section class="hero min-h-screen relative overflow-hidden">
    <video 
      autoplay 
      loop 
      muted 
      playsinline
      class="absolute inset-0 w-full h-full object-cover"
    >
      <source src="../assets/videoplayback.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>

    <div class="hero-overlay bg-black bg-opacity-75 z-10" ></div>

    <div class="relative z-10 text-center text-white">
      <h1 class="text-5xl md:text-7xl font-bold mb-4">Welcome to Anna University</h1>
      <p class="text-xl md:text-2xl mb-8">Empowering Minds, Shaping Futures</p>
      <a href="#about" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors">Learn More</a>
    </div>
  </section>



      <!-- About Section -->
      <section id="about" class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-8">About Our Campus</h2>
          <div class="flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 mb-8 md:mb-0">
              <img src="../assets/campus.jpg" alt="Campus" class="rounded-lg shadow-lg" />
            </div>
            <div class="md:w-1/2 md:pl-8">
              <p class="text-lg mb-4">
                The Regional Campus Coimbatore of Anna University, established in 2012, offers world-class education in Engineering and Technology. Nestled in a serene environment away from the city's hustle, our campus boasts state-of-the-art infrastructure and a team of highly qualified faculty members.
              </p>
              <p class="text-lg">
                We are committed to providing hands-on experience to our students, enabling them to master their skills in various disciplines and prepare for the challenges of the future.
              </p>
            </div>
          </div>
        </div>
      </section>

            <!-- Dean's Message Section -->
            <section id="deans-message" class="py-24 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        <div class="container mx-auto px-6">
          <h2 class="text-4xl font-bold text-center mb-12">Message from the Dean</h2>
          <div class="flex flex-col md:flex-row items-center bg-white bg-opacity-10 rounded-lg shadow-xl overflow-hidden backdrop-filter backdrop-blur-lg">
            <div class="md:w-1/3">
              <img src="../assets/dean.jpg" alt="Dean's Photo" class="w-full h-full object-cover" />
            </div>
            <div class="md:w-2/3 p-8">
              <h3 class="text-2xl font-semibold mb-4">Prof. Samantha Johnson</h3>
              <p class="text-indigo-200 mb-6 italic">"Empowering the next generation of innovators and leaders."</p>
              <p class="mb-4">
                Welcome to Anna University! Our institution stands at the forefront of technological education and research. We are committed to nurturing not just skilled professionals, but visionary leaders who will shape the future of our society.
              </p>
              <p class="mb-4">
                Our world-class faculty, cutting-edge facilities, and industry partnerships provide an unparalleled learning environment. We encourage our students to push boundaries, think critically, and innovate fearlessly.
              </p>
              <p>
                Join us in this exciting journey of discovery and growth. Together, let's build a brighter, more sustainable future through the power of education and technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Programs Section -->
      <section id="programs" class="py-16 bg-gray-100">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-8">Our Programs</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div v-for="program in programs" :key="program.name" class="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
              <img :src="program.image" :alt="program.name" class="w-full h-48 object-cover" />
              <div class="p-6">
                <h3 class="text-xl font-bold mb-2">{{ program.name }}</h3>
                <p class="text-gray-600">{{ program.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <!-- Gallery Section -->
      <section id="gallery" class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-8 text-[#21209c]">Gallery of Memories IG</h2>
          <div class="relative flex items-center justify-center">
            <div @click="prevImage" class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full cursor-pointer hover:bg-opacity-75">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <div class="flex overflow-hidden">
              <div v-for="(image, index) in galleryImages" :key="index" class="flex-shrink-0 w-full transition-transform transform" :style="{ transform: `translateX(-${currentImageIndex * 100}%)` }">
                <div class="relative group">
                  <img :src="image.src" :alt="image.alt" class="w-full h-48 object-cover rounded-lg shadow-md" />
                  <div class="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <p class="text-white text-center px-4">{{ image.description }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div @click="nextImage" class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full cursor-pointer hover:bg-opacity-75">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </section>


      <!-- Testimonials Section -->
      <section id="testimonials" class="py-24 bg-indigo-100">
        <div class="container mx-auto px-6">
          <h2 class="text-4xl font-bold text-center mb-12 text-indigo-800">Voices of Success</h2>
          <div class="relative">
            <div class="overflow-hidden">
              <div class="flex transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
                <div v-for="(testimonial, index) in testimonials" :key="index" class="w-full flex-shrink-0 px-4">
                  <div class="bg-white text-gray-800 rounded-lg p-8 shadow-xl">
                    <p class="text-xl italic mb-6">"{{ testimonial.message }}"</p>
                    <div class="flex items-center">
                      <img :src="testimonial.image" :alt="testimonial.name" class="w-16 h-16 rounded-full object-cover mr-4" />
                      <div>
                        <p class="font-bold text-lg">{{ testimonial.name }}</p>
                        <p class="text-indigo-600">{{ testimonial.branch }}, {{ testimonial.batch }}</p>
                        <p class="text-sm text-gray-600">{{ testimonial.company }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button @click="prevSlide" class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-indigo-600 text-white p-3 rounded-full focus:outline-none hover:bg-indigo-700 transition-colors">
              &lt;
            </button>
            <button @click="nextSlide" class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-indigo-600 text-white p-3 rounded-full focus:outline-none hover:bg-indigo-700 transition-colors">
              &gt;
            </button>
          </div>
          <div class="flex justify-center mt-8">
            <button 
              v-for="(dot, index) in testimonials.length" 
              :key="index" 
              @click="goToSlide(index)" 
              class="w-3 h-3 rounded-full mx-1 focus:outline-none transition-colors"
              :class="index === currentIndex ? 'bg-indigo-600' : 'bg-indigo-300'"
            ></button>
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
      menuItems: ['About', 'Programs', 'Testimonials', 'Contact'],
      mobileMenuOpen: false,
      programs: [
        { name: 'Computer Science Engineering', image: '../assets/cse.jpg', description: 'Learn cutting-edge technologies and software development.' },
        { name: 'Electrical Engineering', image: '../assets/ee.jpg', description: 'Explore power systems, control, and electrical machines.' },
        { name: 'Mechanical Engineering', image: '../assets/me.jpg', description: 'Study mechanics, thermodynamics, and manufacturing processes.' },
      ],
      form: {
        name: '',
        email: '',
        message: '',
      },
      testimonials: [
        {
          name: 'Adithya M',
          branch: 'EEE',
          batch: '2015 Batch',
          company: 'SIEMENS',
          message: 'I am truly proud to have graduated from Anna University. The exceptional opportunities provided here enabled me to excel in every aspect, leading to my employment at Siemens, Bangalore.',
          image: "../assets/pic1.webp",
        },
        {
          name: 'Pathi R',
          branch: 'CSE',
          batch: '2016 Batch',
          company: 'Google',
          message: 'My journey at Anna University was transformative. The rigorous curriculum and supportive faculty prepared me well for the challenges in the tech industry.',
          image: "../assets/pic2.webp",
        },
        {
          name: 'Priya S',
          branch: 'Mechanical',
          batch: '2017 Batch',
          company: 'Tesla',
          message: 'The hands-on experience and industry exposure at Anna University were invaluable. It gave me the confidence to pursue my dreams and land a job at Tesla.',
          image: "../assets/pic3.webp",
        },
      ],
      currentIndex: 0,
      galleryImages: [
        { src: 'src/assets/1.webp', alt: 'Gallery Image 1', description: 'This is a dummy event description, lykky means like you know you know' },
        { src: 'src/assets/4.jpg', alt: 'Gallery Image 2', description: 'This is a dummy event description, lykky means like you know you know' },
        { src: 'src/assets/computer-lab.webp', alt: 'Gallery Image 3', description: 'This is a dummy event description, lykky means like you know you know' },
      ],
    };
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
    goToSlide(index) {
      this.currentIndex = index;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex === 0) ? this.testimonials.length - 1 : this.currentIndex - 1;
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex === this.testimonials.length - 1) ? 0 : this.currentIndex + 1;
    },
    prevImage() {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.galleryImages.length) % this.galleryImages.length;
    },
    nextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.galleryImages.length;
    }
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

body {
  font-family: 'Poppins', sans-serif;
}

.hero {
  position: relative;
  height: 100vh;
  width: 100%;
}

.aspect-w-16 {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
}

.aspect-h-9 {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.carousel-item {
  transition: transform 0.5s ease-in-out;
}

/* Add any additional custom styles here */
</style>