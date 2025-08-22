<template>
  <div class="flex-grow">
    <!-- Hero section with Parallax Effect -->
    <section 
      class="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden"
    >
      <!-- Background Image with Overlay -->
      <div class="absolute inset-0 -z-10">
        <img 
          :src="backgroundImage" 
          alt="Contact Background" 
          class="h-full w-full object-cover"
        >
        <!-- Gradient Overlay -->
        <div class="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/80"></div>
      </div>

      <!-- Content -->
      <div class="relative text-center px-4 max-w-4xl mx-auto z-20">
        <h1 class="mobile-text-2xl lg:mobile-text-4xl xl:mobile-text-5xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
          Contact <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-200">Information</span>
        </h1>
        <p class="mobile-text-base lg:mobile-text-lg xl:mobile-text-xl text-blue-200">
          Get in touch with the relevant offices for any assistance or inquiries
        </p>
      </div>
    </section>

    <!-- Contact Information Cards -->
    <section class="py-8 sm:py-12 lg:py-16 px-4 bg-gray-50">
      <div class="mobile-container max-w-6xl">
        <!-- Section Title with Animated Underline -->
        <div class="text-center mb-8 sm:mb-12">
          <h2 class="mobile-text-2xl lg:mobile-text-3xl xl:mobile-text-4xl font-bold text-blue-900 relative inline-block group">
            CONTACT OFFICES
            <span class="absolute -bottom-2 sm:-bottom-3 left-0 h-1 w-full bg-yellow-500 transform origin-left transition-transform duration-300 group-hover:scale-x-110"></span>
          </h2>
        </div>

        <!-- Modern Card with Shadow and Hover Effects -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100 transform hover:shadow-xl transition-all duration-300">
          <div class="bg-gradient-to-r from-blue-600 to-indigo-600 py-3 sm:py-4 px-4 sm:px-6">
            <h3 class="mobile-text-lg lg:mobile-text-xl font-semibold text-white">Contact Office and Numbers</h3>
          </div>
          
          <div class="overflow-x-auto">
            <table class="min-w-full">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="px-3 sm:px-6 py-3 sm:py-4 text-left mobile-text-xs lg:mobile-text-sm font-semibold text-gray-600 uppercase tracking-wider">Office</th>
                  <th scope="col" class="px-3 sm:px-6 py-3 sm:py-4 text-left mobile-text-xs lg:mobile-text-sm font-semibold text-gray-600 uppercase tracking-wider">Contact Number</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100">
                <tr v-for="(contact, index) in contacts" :key="index" 
                    class="hover:bg-blue-50 transition-colors duration-200">
                  <td class="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                    <div class="mobile-text-xs lg:mobile-text-sm font-medium text-gray-800">{{ contact.office }}</div>
                  </td>
                  <td class="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                    <div class="mobile-text-xs lg:mobile-text-sm text-gray-600">{{ contact.number }}</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    <!-- Map and Direct Contact Section -->
    <section class="py-8 sm:py-12 lg:py-16 px-4 bg-white">
      <div class="mobile-container max-w-6xl">
        <div class="mobile-grid gap-6 sm:gap-8">
          <!-- Map Card -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100 h-full">
            <div class="bg-gradient-to-r from-indigo-600 to-blue-600 py-3 sm:py-4 px-4 sm:px-6">
              <h3 class="mobile-text-lg lg:mobile-text-xl font-semibold text-white">Our Location</h3>
            </div>
            <div class="p-4 sm:p-6 h-[300px] sm:h-[400px]">
              <!-- Replace with actual map embed -->
              <div class="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                <p class="text-gray-500">Map Embed Goes Here</p>
              </div>
            </div>
          </div>

          <!-- Contact Form Card -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100">
            <div class="bg-gradient-to-r from-blue-600 to-indigo-600 py-3 sm:py-4 px-4 sm:px-6">
              <h3 class="mobile-text-lg lg:mobile-text-xl font-semibold text-white">Send Us a Message</h3>
            </div>
            <div class="p-4 sm:p-6">
              <form class="space-y-3 sm:space-y-4">
                <div>
                  <label class="block mobile-text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" class="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200" placeholder="Your Name">
                </div>
                <div>
                  <label class="block mobile-text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input type="email" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200" placeholder="your.email@example.com">
                </div>
                <div>
                  <label class="block mobile-text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input type="text" class="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200" placeholder="Message Subject">
                </div>
                <div>
                  <label class="block mobile-text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea rows="4" class="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200" placeholder="Your message here..."></textarea>
                </div>
                <div>
                  <button type="submit" class="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium py-2 px-4 rounded-lg hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Additional Contact Information -->
    <section class="py-8 sm:py-12 lg:py-16 px-4 bg-gray-50">
      <div class="mobile-container max-w-6xl">
        <div class="mobile-grid gap-6 sm:gap-8">
          <!-- Address Card -->
          <div class="mobile-card bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100 transform hover:translate-y-[-5px] transition-all duration-300">
            <div class="p-4 sm:p-6 text-center">
              <div class="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg class="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3 class="mobile-text-lg lg:mobile-text-xl font-semibold text-gray-800 mb-2">Address</h3>
              <p class="mobile-text-sm lg:mobile-text-base text-gray-600">Maruthamalai Road,<br>Navavoor, Coimbatore - 641046</p>
            </div>
          </div>
          
          <!-- Phone Card -->
          <div class="mobile-card bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100 transform hover:translate-y-[-5px] transition-all duration-300">
            <div class="p-4 sm:p-6 text-center">
              <div class="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg class="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <h3 class="mobile-text-lg lg:mobile-text-xl font-semibold text-gray-800 mb-2">Phone</h3>
              <p class="mobile-text-sm lg:mobile-text-base text-gray-600">0422-2691123</p>
              <p class="mobile-text-sm lg:mobile-text-base text-gray-600">0422-2691124</p>
            </div>
          </div>
          
          <!-- Email Card -->
          <div class="mobile-card bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100 transform hover:translate-y-[-5px] transition-all duration-300">
            <div class="p-4 sm:p-6 text-center">
              <div class="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg class="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <h3 class="mobile-text-lg lg:mobile-text-xl font-semibold text-gray-800 mb-2">Email</h3>
              <p class="mobile-text-sm lg:mobile-text-base text-gray-600">info@aurcc.edu.in</p>
              <p class="mobile-text-sm lg:mobile-text-base text-gray-600">admissions@aurcc.edu.in</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      backgroundImage: new URL(`../assets/contact.webp`, import.meta.url).href,
      contacts: [
        { office: "Dean's Office", number: "0422-2691123" },
        { office: "Administrative Office", number: "0422-2691124" },
        { office: "Department of CSE", number: "0422-2691125" },
        { office: "Department of ECE", number: "0422-2691126" },
        { office: "Department of EEE", number: "0422-2691127" },
        { office: "Department of Mechanical", number: "0422-2691128" },
        { office: "Library", number: "0422-2691129" },
        { office: "Hostel Office", number: "0422-2691130" },
        { office: "Placement Cell", number: "0422-2691131" },
        { office: "Examination Cell", number: "0422-2691132" }
      ]
    };
  }
};
</script>

<style scoped>
/* Add any custom animations or styles here */
@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-up-animation {
  animation: slide-up 0.5s ease-out forwards;
}
</style>

