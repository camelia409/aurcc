<template>
    <div class="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 class="text-3xl font-bold text-center mb-6 text-blue-600">Online Grievance Form</h1>
      
      <!-- Grievance Form -->
      <form @submit.prevent="submitForm" class="space-y-6">
        <!-- Name -->
        <div>
          <label for="name" class="block text-gray-700 font-medium mb-2">Name:</label>
          <input
            v-model="form.name"
            type="text"
            id="name"
            required
            class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
        </div>
  
        <!-- Email -->
        <div>
          <label for="email" class="block text-gray-700 font-medium mb-2">Email ID:</label>
          <input
            v-model="form.email"
            type="email"
            id="email"
            required
            class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email ID"
          />
        </div>
  
        <!-- Phone Number -->
        <div>
          <label for="phone" class="block text-gray-700 font-medium mb-2">Phone Number:</label>
          <input
            v-model="form.phone"
            type="tel"
            id="phone"
            required
            class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your phone number"
          />
        </div>
  
        <!-- Type of Grievance -->
        <div>
          <label for="grievanceType" class="block text-gray-700 font-medium mb-2">Type of Grievance:</label>
          <select
            v-model="form.grievanceType"
            id="grievanceType"
            required
            class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>Select grievance type</option>
            <option value="Service">Service</option>
            <option value="Product">Product</option>
            <option value="Employee">Employee</option>
            <option value="Other">Other</option>
          </select>
        </div>
  
        <!-- Description of Grievance -->
        <div>
          <label for="description" class="block text-gray-700 font-medium mb-2">Description of Grievance:</label>
          <textarea
            v-model="form.description"
            id="description"
            required
            rows="4"
            class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Describe your grievance"
          ></textarea>
        </div>
  
        <!-- CAPTCHA -->
        <div>
          <label for="captcha" class="block text-gray-700 font-medium mb-2">Solve the CAPTCHA:</label>
          <div class="text-lg font-medium mb-2">
            <span>{{ captcha.num1 }} + {{ captcha.num2 }} = ?</span>
          </div>
          <input
            v-model="form.captchaAnswer"
            type="number"
            id="captcha"
            required
            class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the CAPTCHA result"
          />
        </div>
  
        <!-- Submit Button -->
        <div>
          <button
            type="submit"
            :disabled="isSubmitting || !isCaptchaValid"
            class="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Submit
          </button>
        </div>
      </form>
  
      <!-- Success Message -->
      <div v-if="formSubmitted" class="mt-6 text-green-600 text-center">
        <p>Your grievance has been successfully submitted!</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        // Form fields
        form: {
          name: '',
          email: '',
          phone: '',
          grievanceType: '',
          description: '',
          captchaAnswer: '',
        },
        // CAPTCHA data
        captcha: {
          num1: this.getRandomNumber(),
          num2: this.getRandomNumber(),
        },
        // Submission state
        isSubmitting: false,
        formSubmitted: false,
      };
    },
    computed: {
      // Check if the CAPTCHA answer is correct
      isCaptchaValid() {
        return this.form.captchaAnswer == this.captcha.num1 + this.captcha.num2;
      },
    },
    methods: {
      // Generate random number for CAPTCHA
      getRandomNumber() {
        return Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
      },
      
      // Handle form submission
      submitForm() {
        // Prevent submission if CAPTCHA is incorrect
        if (!this.isCaptchaValid) {
          alert('Please solve the CAPTCHA correctly.');
          return;
        }
  
        this.isSubmitting = true;
  
        // Simulate form submission (you can replace this with an actual API call)
        setTimeout(() => {
          this.isSubmitting = false;
          this.formSubmitted = true;
  
          // Reset form after submission
          this.form.name = '';
          this.form.email = '';
          this.form.phone = '';
          this.form.grievanceType = '';
          this.form.description = '';
          this.form.captchaAnswer = '';
          
          // Reset CAPTCHA question
          this.captcha.num1 = this.getRandomNumber();
          this.captcha.num2 = this.getRandomNumber();
        }, 2000);
      },
    },
  };
  </script>
  
  <style scoped>
  /* This component uses Tailwind CSS, no additional custom styles needed */
  </style>
  