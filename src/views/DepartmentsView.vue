<template>
  <div class="min-h-screen flex flex-col">


    <main class="flex-grow">
      <!-- Hero section -->
      <section class="bg-cover bg-center" style="background-image: url('http://192.168.72.231:5173/src/assets/cse-girls-closeup.jpg')">
        <div class="container mx-auto py-16 text-white ">
          <h1 class="text-4xl font-bold mb-4">Welcome to Artificial Intelligence and Data Sciences</h1>
          <p class="text-xl mb-8">Explore our cutting-edge programs and stay ahead in the field.</p>
          <button class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Learn More</button>
        </div>
      </section>

      <!-- Content sections -->
      <section class="container mx-auto py-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 class="text-2xl font-bold mb-4">About Us</h2>
            <p class="mb-4">Artificial Intelligence and Data Sciences (AI & DS) is one of the popular core among engineering disciplines which emphasizes on the study of algorithms, data structures, computer architecture, computer networks and software skills.</p>
            <p class="mb-4">This program has roots in electrical engineering, computer science, mathematics, and operations research. Students study the design, implementation, and analysis of software and hardware used to solve problems for various business, scientific and social contexts.</p>
          </div>
          <div>
            <h2 class="text-2xl font-bold mb-4">Our Programs</h2>
            <ul class="list-disc pl-4">
              <li>B.Tech. - Artificial Intelligence and Data Sciences</li>
              <li>M.Tech. - Artificial Intelligence and Data Sciences</li>
              <li>Ph.D. Program</li>
            </ul>
          </div>
        </div>
      </section>
    </main>

    <footer class="bg-gray-800 text-white py-4">
      <div class="container mx-auto flex justify-between items-center">
        <div>&copy; 2023 Artificial Intelligence and Data Sciences</div>
        <div>
          <ul class="flex space-x-4">
            <li><a href="#" class="hover:text-gray-300">Terms of Use</a></li>
            <li><a href="#" class="hover:text-gray-300">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>