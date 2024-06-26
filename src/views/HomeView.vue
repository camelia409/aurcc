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

      <!-- Testimonials Section -->
      <div class="max-w-4xl mx-auto p-8">
    <div class="relative w-full rounded-box shadow-lg overflow-hidden">
      <div class="carousel w-full flex transition-transform duration-500" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div v-for="(testimonial, index) in testimonials" :key="index" class="carousel-item w-full flex-shrink-0">
          <div class="card bg-white shadow-xl">
            <div class="card-body">
              <div class="flex flex-col md:flex-row items-center">
                <img :src="testimonial.image" alt="Student Image" class="w-24 h-24 rounded-full object-cover mr-4">
                <div>
                  <h2 class="card-title text-xl">{{ testimonial.name }}</h2>
                  <p class="text-gray-600">{{ testimonial.branch }}, {{ testimonial.batch }}</p>
                  <p class="text-gray-600">{{ testimonial.company }}</p>
                  <p class="mt-2">{{ testimonial.message }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button @click="prevSlide" class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-600 bg-opacity-50 text-white p-2 rounded-full focus:outline-none">
        &lt;
      </button>
      <button @click="nextSlide" class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-600 bg-opacity-50 text-white p-2 rounded-full focus:outline-none">
        &gt;
      </button>
    </div>
    <div class="flex justify-center mt-4">
      <button class="btn btn-xs btn-circle mx-1" v-for="(dot, index) in testimonials.length" :key="index" :class="{'btn-active': index === currentIndex}" @click="goToSlide(index)"></button>
    </div>
  </div>
      <!-- <section id="testimonials" class="py-16 bg-blue-800 text-white">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-8">Student Testimonials</h2>
          <div class="flex flex-wrap justify-center">
            <div v-for="testimonial in testimonials" :key="testimonial.name" class="w-full md:w-1/3 p-4">
              <div class="bg-white text-blue-800 rounded-lg p-6 h-full flex flex-col">
                <p class="text-lg italic mb-4">"{{ testimonial.quote }}"</p>
                <div class="mt-auto flex items-center">
                  <img :src="testimonial.avatar" :alt="testimonial.name" class="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <p class="font-bold">{{ testimonial.name }}</p>
                    <p class="text-sm text-blue-600">{{ testimonial.program }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> -->
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
      testimonials: [
        { name: 'John Doe', avatar: '../assets/student1.jpg', quote: 'My experience at Anna University has been transformative. The faculty and resources here are world-class.', program: 'CSE - 2022' },
        { name: 'Jane Smith', avatar: '../assets/student2.jpg', quote: 'The practical approach to learning at Anna University prepared me well for my career in the industry.', program: 'EE - 2021' },
        { name: 'Mike Johnson', avatar: '../assets/student3.jpg', quote: 'The collaborative environment and state-of-the-art facilities make Anna University a great place to study.', program: 'ME - 2023' },
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
          message: 'I am truly proud to have graduated from Sri Eshwar, where I was provided with exceptional opportunities that enabled me to excel in every aspect, including my salary, leading to my employment at Siemens, Bangalore.',
          image: "../assests/pic1.webp", // add your image in assets folder
        },
        {
          name: 'Pathi',
          branch: 'EEE',
          batch: '2015 Batch',
          company: 'SIEMENS',
          message: 'I am truly proud to have graduated from Sri Eshwar, where I was provided with exceptional opportunities that enabled me to excel in every aspect, including my salary, leading to my employment at Siemens, Bangalore.',
          image: "../assests/pic1.webp", // add your image in assets folder
        },
        // Add more testimonials as needed
      ],
      currentIndex: 0,
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