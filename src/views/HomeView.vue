<template>
  <div class="min-h-screen bg-gradient-to-b from-blue-100 to-white">
    <div v-if="mobileMenuOpen" class="md:hidden bg-white shadow-md p-4 absolute top-16 left-0 right-0 z-40">
      <a v-for="item in menuItems" :key="item" :href="'#' + item.toLowerCase()" class="block py-2 text-blue-800 hover:text-blue-600 transition-colors">{{ item }}</a>
    </div>

    <main>
      <!-- Hero Section -->
      <section class="relative h-screen flex items-center justify-center overflow-hidden">
        <video autoplay loop muted class="absolute w-auto min-w-full min-h-full max-w-none">
          <source src="../assets/campus-video.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
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
      <section id="testimonials" class="py-16 bg-blue-800 text-white">
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
      </section>

      <!-- Contact Section -->
      <section id="contact" class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-8">Contact Us</h2>
          <div class="flex flex-col md:flex-row justify-between">
            <div class="md:w-1/2 mb-8 md:mb-0">
              <form @submit.prevent="submitForm" class="space-y-4">
                <input v-model="form.name" type="text" placeholder="Your Name" class="w-full p-2 border rounded" required>
                <input v-model="form.email" type="email" placeholder="Your Email" class="w-full p-2 border rounded" required>
                <textarea v-model="form.message" placeholder="Your Message" class="w-full p-2 border rounded" rows="4" required></textarea>
                <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors">Send Message</button>
              </form>
            </div>
            <div class="md:w-1/2 md:pl-8">
              <h3 class="text-xl font-bold mb-4">Our Location</h3>
              <p class="mb-4">1234 University Drive, Coimbatore, Tamil Nadu 641046, India</p>
              <div class="aspect-w-16 aspect-h-9">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.1854558563456!2d76.95476661444427!3d11.019280292152904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sAnna%20University%20Regional%20Campus%20-%20Coimbatore!5e0!3m2!1sen!2sin!4v1656596133370!5m2!1sen!2sin" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
              </div>
            </div>
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
    };
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
    submitForm() {
      // Handle form submission logic here
      console.log('Form submitted:', this.form);
      // Reset form fields
      this.form = { name: '', email: '', message: '' };
      // Show a success message or perform other actions
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

body {
  font-family: 'Poppins', sans-serif;
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

/* Add any additional custom styles here */
</style>