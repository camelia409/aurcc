<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-100 via-blue-50 to-white flex items-center justify-center px-4">
    <div class="text-center max-w-2xl">
      <div class="mb-8">
        <h1 class="text-9xl font-bold text-blue-600 mb-4">404</h1>
        <h2 class="text-3xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
        <p class="text-lg text-gray-600 mb-8">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
      </div>
      
      <div class="space-y-4">
        <router-link 
          to="/" 
          class="inline-block px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
        >
          Go Home
        </router-link>
        
        <router-link 
          to="/programs_offered" 
          class="inline-block px-8 py-3 bg-gray-600 text-white rounded-full font-semibold hover:bg-gray-700 transition-colors ml-4"
        >
          View Programs
        </router-link>
      </div>
      
      <div class="mt-12 text-sm text-gray-500">
        <p>If you believe this is an error, please contact the website administrator.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
};
</script>
