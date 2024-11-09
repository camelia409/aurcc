<template>
  <div class="flex-grow">
    <!-- Hero section -->
    <section 
      class="hero-section bg-cover relative -z-10 animate-fadeInUp" 
      :style="{ 
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'top center' 
      }">
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="mx-auto py-24 text-white relative z-10 flex flex-col">
        <h1 class="text-4xl font-extrabold px-20 mb-4 animate-slideIn font-serif">Regulations</h1>
      </div>
    </section>

    <!-- Background section below the hero -->
    <div class="bg-indigo-100 py-8 animate-fadeIn">
      <!-- UG Programmes section -->
      <section class="py-8 p-4 animate-popIn">
        <div class="bg-white rounded-lg shadow-md">
          <h2 class="text-3xl text-center font-serif font-bold p-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-300 animate-fadeInUp">UG Programmes</h2>
          <div class="p-4 animate-fadeIn delay-1s">
            <iframe
              :src="ugPdfUrl"
              class="w-full h-screen border-0"
              title="UG Programmes PDF"
            ></iframe>
          </div>
        </div>
      </section>

      <!-- PG Programmes section -->
      <section class="py-8 p-4 animate-popIn">
        <div class="bg-white rounded-lg shadow-md">
          <h2 class="text-3xl text-center font-serif font-bold p-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-300 animate-fadeInUp">PG Programmes</h2>
          <div class="p-4 animate-fadeIn delay-1s">
            <iframe
              :src="pgPdfUrl"
              class="w-full h-screen border-0"
              title="PG Programmes PDF"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import ugPdf from '@/assets/ug_regulations.pdf';
import pgPdf from '@/assets/pg_regulations.pdf';
import backgroundImage from '@/assets/regulation.webp';  // Correct path for the image

export default {
  data() {
    return {
      ugPdfUrl: ugPdf,
      pgPdfUrl: pgPdf,
      backgroundImage: backgroundImage,
    };
  },
};
</script>

<style scoped>
/* Add keyframes for animations */
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes slideIn {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(0); }
}

@keyframes popIn {
  0% { opacity: 0; transform: scale(0.8); }
  100% { opacity: 1; transform: scale(1); }
}

.hero-section.animate-fadeInUp {
  animation: fadeInUp 1.5s ease-out forwards;
}

h1.animate-slideIn {
  animation: slideIn 1s ease-out forwards;
}

.bg-indigo-100.animate-fadeIn {
  animation: fadeIn 1.5s ease-out forwards;
}

section.animate-popIn {
  animation: popIn 1.2s ease-out forwards;
}

h2.animate-fadeInUp {
  animation: fadeInUp 1.5s ease-out forwards;
}

.p-4.animate-fadeIn {
  animation: fadeIn 2s ease-out forwards;
}

/* Add delay utility class */

/* Mobile responsiveness */
@media (max-width: 640px) {
  .hero-section {
    background-size: cover;
    background-position: center;
  }

  .hero-section .text-4xl {
    font-size: 2xl;
    padding: 0 8px;
  }

  .mx-auto.py-24 {
    padding: 16px;
  }

  /* For iframe container to adjust to smaller screens */
  iframe {
    height: 60vh; /* Adjust iframe height for mobile */
  }

  /* Ensure the sections' paddings are not too wide for small screens */
  section {
    padding: 2rem;
  }

  /* Adjust section headings on smaller screens */
  h2 {
    font-size: 1.8rem;
    padding: 16px;
  }

  .bg-indigo-100 {
    padding: 4rem 0;
  }

  /* For mobile optimization of PDF iframe */
  iframe {
    height: 50vh; /* Reduce iframe height on small screens */
  }

  /* Adjust the padding on mobile for better layout */
  .p-4 {
    padding: 1rem;
  }
}

/* Tablet responsiveness */
@media (max-width: 768px) {
  .hero-section {
    background-size: cover;
    background-position: center;
  }

  .text-4xl {
    font-size: 3xl;
    padding: 0 16px;
  }

  .mx-auto.py-24 {
    padding: 20px;
  }

  iframe {
    height: 70vh; /* Adjust iframe height for tablet */
  }

  /* Padding for general sections */
  section {
    padding: 3rem;
  }

  h2 {
    font-size: 2rem;
  }

  .bg-indigo-100 {
    padding: 5rem 0;
  }
}

/* PC (Desktop) responsiveness */
@media (min-width: 1024px) {
  .hero-section {
    background-size: cover;
    background-position: top center;
  }

  .text-4xl {
    font-size: 4xl;
    padding: 0 20px;
  }

  /* Adjust section heading size for larger screens */
  h2 {
    font-size: 2.5rem;
  }

  iframe {
    height: 80vh; /* Increase iframe height for larger screens */
  }

  /* For section padding on larger screens */
  section {
    padding: 4rem 5rem;
  }

  .bg-indigo-100 {
    padding: 6rem 0;
  }
}


</style>