<template>
  <div class="min-h-screen bg-gray-100">

    <main class="container mx-auto mt-8 space-y-8">
      <!-- Welcome Section -->
      <section class="flex bg-white rounded-lg shadow-md overflow-hidden">
        <div class="w-1/2 bg-gray-300"></div>
        <div class="w-1/2 p-6">
          <h2 class="text-2xl font-bold mb-4">Welcome to our campus:</h2>
          <p class="text-gray-600">
            The Regional Campus Coimbatore of Anna University was established during 2012. It offers higher education in Engineering and Technology. Located in an Arcadian environment and away from the hustle and bustle crowd of the city. The Regional Campus Coimbatore is equipped with excellent infrastructure and highly qualified members of faculty, who facilitate hands on experience to students to master their skills in various disciplines.
          </p>
        </div>
      </section>

      <!-- Demo Text Section -->
      <section class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-bold mb-4">This is demo Text for this page</h2>
        <p class="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </section>

      <!-- Header and Image Section -->
      <section class="flex bg-white rounded-lg shadow-md overflow-hidden">
        <div class="w-2/3 p-6">
          <h2 class="text-2xl font-bold mb-4">Header for this page is as simple as this</h2>
          <p class="text-gray-600">
            Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
          </p>
        </div>
        <div class="w-1/3 bg-gray-300"></div>
      </section>

      <!-- Five Box Section -->
      <section class="grid grid-cols-3 gap-4">
        <div class="bg-white p-4 rounded-lg shadow-md"></div>
        <div class="bg-white p-4 rounded-lg shadow-md"></div>
        <div class="bg-white p-4 rounded-lg shadow-md"></div>
        <div class="bg-white p-4 rounded-lg shadow-md col-span-2"></div>
        <div class="bg-white p-4 rounded-lg shadow-md"></div>
      </section>

      <!-- Gallery of Memories -->
      <section class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-bold mb-4 text-center">Gallery of Memories IG</h2>
        <div class="flex justify-between items-center">
          <button class="bg-gray-300 rounded-full p-2">&lt;</button>
          <div class="flex-1 flex justify-center space-x-4">
            <div class="w-1/4 bg-gray-300 h-32"></div>
            <div class="w-1/4 bg-gray-300 h-32"></div>
            <div class="w-1/4 bg-gray-300 h-32"></div>
          </div>
          <button class="bg-gray-300 rounded-full p-2">&gt;</button>
        </div>
      </section>

      <!-- From The Dean's Desk -->
      <section class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-bold mb-4 text-center">From The Dean's Desk</h2>
        <div class="bg-gray-300 h-64 w-full"></div>
      </section>

      <!-- Student Testimonials -->
      <section class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-bold mb-4 text-center">Student Testimonials Fr</h2>
        <div class="flex items-center space-x-4">
          <button class="bg-gray-300 rounded-full p-2">&lt;</button>
          <div class="flex-1 bg-gray-100 p-4 rounded-lg">
            <div class="flex space-x-4">
              <div class="w-16 h-16 bg-gray-300 rounded-full"></div>
              <div>
                <blockquote class="text-gray-600 italic">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                </blockquote>
                <p class="mt-2 font-bold">John Doe</p>
                <p class="text-sm text-gray-500">CSE - 2020</p>
              </div>
            </div>
          </div>
          <button class="bg-gray-300 rounded-full p-2">&gt;</button>
        </div>
      </section>
    </main>

    <footer class="bg-gray-800 text-white p-4 mt-8">
      <p class="text-center">© 2023 Anna University Regional Campus Coimbatore. All rights reserved.</p>
    </footer>
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


