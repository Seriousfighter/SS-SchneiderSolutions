<template>
  <div class="bg-gray-900 py-16 px-4 md:px-8">
    <div class="max-w-4xl mx-auto">
      <!-- Page Header -->
      <div class="mb-12 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
          <span class="text-[#E1FF2D]">Contact</span> Us
        </h1>
        <p class="text-gray-400 max-w-2xl mx-auto">
          Have a question, project idea, or want to work with us? 
          Fill out the form below and we'll get back to you as soon as possible.
        </p>
      </div>

      <!-- Contact Form -->
      <div class="max-w-2xl mx-auto">
        <div class="bg-gray-800/50 p-8 rounded-lg border border-gray-700">
          <h2 class="text-xl font-semibold text-white mb-6">Send Us a Message</h2>
          
          <form @submit.prevent="submitForm" class="space-y-6">
            <!-- Name Field -->
            <div>
              <label for="name" class="block text-sm font-medium text-gray-300 mb-1">Your Name</label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                class="w-full px-4 py-3 bg-gray-700/50 text-white rounded border border-gray-600 focus:outline-none focus:border-[#E1FF2D] focus:ring-1 focus:ring-[#E1FF2D]/50 transition-all"
                placeholder="Enter your name"
                required
              />
              <p v-if="errors.name" class="mt-1 text-sm text-red-400">{{ errors.name }}</p>
            </div>
            
            <!-- Email Field -->
            <div>
              <label for="email" class="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                class="w-full px-4 py-3 bg-gray-700/50 text-white rounded border border-gray-600 focus:outline-none focus:border-[#E1FF2D] focus:ring-1 focus:ring-[#E1FF2D]/50 transition-all"
                placeholder="Enter your email"
                required
              />
              <p v-if="errors.email" class="mt-1 text-sm text-red-400">{{ errors.email }}</p>
            </div>
            
            <!-- Message Field -->
            <div>
              <label for="message" class="block text-sm font-medium text-gray-300 mb-1">Your Message</label>
              <textarea
                id="message"
                v-model="form.message"
                rows="6"
                class="w-full px-4 py-3 bg-gray-700/50 text-white rounded border border-gray-600 focus:outline-none focus:border-[#E1FF2D] focus:ring-1 focus:ring-[#E1FF2D]/50 transition-all"
                placeholder="Enter your message"
                required
              ></textarea>
              <p v-if="errors.message" class="mt-1 text-sm text-red-400">{{ errors.message }}</p>
            </div>
            
            <!-- Submit Button -->
            <div class="pt-2">
              <button
                type="submit"
                class="w-full px-6 py-3 bg-[#E1FF2D] text-black font-semibold rounded hover:bg-[#d4f909] focus:outline-none focus:ring-2 focus:ring-[#E1FF2D]/50 transform hover:-translate-y-1 transition-all disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                :disabled="isSubmitting"
              >
                <span v-if="isSubmitting">Sending...</span>
                <span v-else>Send Message</span>
              </button>
            </div>
          </form>
          
          <!-- Success Message -->
          <div v-if="formSubmitted" class="mt-6 p-4 bg-green-900/20 border border-green-700/30 rounded-md">
            <p class="text-green-400 flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Thank you! Your message has been sent successfully. We'll get back to you soon.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';

// Form data
const form = reactive({
  name: '',
  email: '',
  message: ''
});

// Form state
const errors = reactive({
  name: '',
  email: '',
  message: ''
});
const isSubmitting = ref(false);
const formSubmitted = ref(false);

// Form submission
const submitForm = async () => {
  // Reset errors
  errors.name = '';
  errors.email = '';
  errors.message = '';
  
  // Validate form
  let isValid = true;
  
  if (!form.name.trim()) {
    errors.name = 'Please enter your name';
    isValid = false;
  }
  
  if (!form.email.trim()) {
    errors.email = 'Please enter your email';
    isValid = false;
  } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address';
    isValid = false;
  }
  
  if (!form.message.trim()) {
    errors.message = 'Please enter your message';
    isValid = false;
  }
  
  if (!isValid) return;
  
  // Submit form
  try {
    isSubmitting.value = true;
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Reset form after success
    form.name = '';
    form.email = '';
    form.message = '';
    formSubmitted.value = true;
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      formSubmitted.value = false;
    }, 5000);
  } catch (error) {
    console.error('Error submitting form:', error);
    // Handle error
  } finally {
    isSubmitting.value = false;
  }
};
</script>