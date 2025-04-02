<template>
  <div class="bg-gray-900 py-16 px-4 md:px-8">
    <!-- Page Header -->
    <div class="max-w-4xl mx-auto text-center mb-20">
      <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
        Our <span class="text-[#E1FF2D]">Services</span>
      </h1>
      <p class="text-gray-400 max-w-2xl mx-auto">
        We offer comprehensive technical solutions tailored to your business needs. Explore our range of specialized services below.
      </p>
    </div>

    <!-- Services Sections -->
    <!-- Service 1: Web Development -->
    <div class="my-32 flex flex-col lg:flex-row items-center w-full lg:w-[70%] mx-auto">
      <div class="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
        <div class="relative rounded-lg overflow-hidden aspect-video bg-gray-800">
          <img src="@/assets/img/img4.webp" alt="Web Development" class="object-cover w-full h-full" onerror="this.src='https://placehold.co/800x450/1f2937/e1ff2d?text=Web+Development'">
          <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
        </div>
      </div>
      <div class="w-full lg:w-1/2 lg:pl-8">
        <h2 class="text-3xl text-white-ss font-bold mb-4">
          <span class="text-[#E1FF2D]">Web</span> Development
        </h2>
        <p class="text-gray-300 mb-6">
          We create stunning, responsive websites and web applications that drive business growth. Our team specializes in modern frameworks and technologies, ensuring your online presence is both beautiful and functional.
        </p>
        <ul class="space-y-2 mb-6">
          <li class="flex items-start">
            <svg class="w-5 h-5 text-[#E1FF2D] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span class="text-gray-300">Custom website development</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 text-[#E1FF2D] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span class="text-gray-300">E-commerce solutions</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 text-[#E1FF2D] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span class="text-gray-300">CRM, SaaS and more</span>
          </li>
        </ul>
        <button class="px-6 py-3 bg-[#E1FF2D] text-black font-semibold rounded hover:bg-[#d4f909] transform hover:-translate-y-1 transition-all">
          Learn More
        </button>
      </div>
    </div>
    
    <!-- Service 2: Mobile App Development (Image Right) -->
    <div class="my-32 flex flex-col lg:flex-row-reverse items-center w-full lg:w-[70%] mx-auto">
      <div class="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pl-8">
        <div class="relative rounded-lg overflow-hidden aspect-video bg-gray-800">
          <img src="@/assets/img/img3.webp" alt="Mobile App Development" class="object-cover w-full h-full" onerror="this.src='https://placehold.co/800x450/1f2937/e1ff2d?text=Mobile+Apps'">
          <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
        </div>
      </div>
      <div class="w-full lg:w-1/2 lg:pr-8">
        <h2 class="text-3xl text-white-ss font-bold mb-4">
          <span class="text-[#E1FF2D]">Mobile</span> Applications
        </h2>
        <p class="text-gray-300 mb-6">
          We develop innovative mobile applications for iOS and Android platforms, helping businesses reach their customers on the go. Our mobile solutions are designed for performance, usability, and engagement.
        </p>
        <ul class="space-y-2 mb-6">
          <li class="flex items-start">
            <svg class="w-5 h-5 text-[#E1FF2D] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span class="text-gray-300">Native iOS and Android development</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 text-[#E1FF2D] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span class="text-gray-300">Cross-platform solutions</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 text-[#E1FF2D] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span class="text-gray-300">App maintenance and updates</span>
          </li>
        </ul>
        <button class="px-6 py-3 bg-[#E1FF2D] text-black font-semibold rounded hover:bg-[#d4f909] transform hover:-translate-y-1 transition-all">
          Learn More
        </button>
      </div>
    </div>
    
    <!-- Service 3: UI/UX Design (Image Left) -->
    <div class="my-32 flex flex-col lg:flex-row items-center w-full lg:w-[70%] mx-auto">
      <div class="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
        <div class="relative rounded-lg overflow-hidden aspect-video bg-gray-800">
          <img src="@/assets/img/img2.webp" alt="UI/UX Design" class="object-cover w-full h-full" onerror="this.src='https://placehold.co/800x450/1f2937/e1ff2d?text=UI/UX+Design'">
          <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
        </div>
      </div>
      <div class="w-full lg:w-1/2 lg:pl-8">
        <h2 class="text-3xl text-white-ss font-bold mb-4">
          <span class="text-[#E1FF2D]">UI/UX</span> Design
        </h2>
        <p class="text-gray-300 mb-6">
          We craft intuitive user interfaces and exceptional user experiences that captivate and engage your audience. Our design approach combines aesthetics with functionality to create memorable digital experiences.
        </p>
        <ul class="space-y-2 mb-6">
          <li class="flex items-start">
            <svg class="w-5 h-5 text-[#E1FF2D] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span class="text-gray-300">User research and personas</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 text-[#E1FF2D] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span class="text-gray-300">Wireframing and prototyping</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 text-[#E1FF2D] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span class="text-gray-300">Visual design and branding</span>
          </li>
        </ul>
        <button class="px-6 py-3 bg-[#E1FF2D] text-black font-semibold rounded hover:bg-[#d4f909] transform hover:-translate-y-1 transition-all">
          Learn More
        </button>
      </div>
    </div>
    
    <!-- Service 4: Tech Consulting (Image Right) -->
    <div class="my-32 flex flex-col lg:flex-row-reverse items-center w-full lg:w-[70%] mx-auto">
      <div class="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pl-8">
        <div class="relative rounded-lg overflow-hidden aspect-video bg-gray-800">
          <img src="@/assets/img/img1.webp" alt="Tech Consulting" class="object-cover w-full h-full" onerror="this.src='https://placehold.co/800x450/1f2937/e1ff2d?text=Tech+Consulting'">
          <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
        </div>
      </div>
      <div class="w-full lg:w-1/2 lg:pr-8">
        <h2 class="text-3xl text-white-ss font-bold mb-4">
          <span class="text-[#E1FF2D]">Tech</span> Consulting
        </h2>
        <p class="text-gray-300 mb-6">
          We provide expert guidance to help businesses navigate the complex technology landscape. Our consulting services help you make informed decisions and implement the right technological solutions for your needs.
        </p>
        <ul class="space-y-2 mb-6">
          <li class="flex items-start">
            <svg class="w-5 h-5 text-[#E1FF2D] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span class="text-gray-300">Technical strategy development</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 text-[#E1FF2D] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span class="text-gray-300">System architecture planning</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 text-[#E1FF2D] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span class="text-gray-300">Technology stack selection</span>
          </li>
        </ul>
        <button class="px-6 py-3 bg-[#E1FF2D] text-black font-semibold rounded hover:bg-[#d4f909] transform hover:-translate-y-1 transition-all">
          Learn More
        </button>
      </div>
    </div>
    
    <!-- CTA Section -->
    <cta2 />
  </div>
</template>

<script lang="ts" setup>
// You can add any interactive functionality here
</script>

<style scoped>
/* Any additional styles specific to this page */
.aspect-video {
  aspect-ratio: 16/9;
}

/* Fade-in animation for sections */
@media (prefers-reduced-motion: no-preference) {
  .my-32 {
    opacity: 0;
    animation: fadeIn 1s ease-out forwards;
  }
  
  .my-32:nth-child(2) {
    animation-delay: 0.2s;
  }
  
  .my-32:nth-child(3) {
    animation-delay: 0.4s;
  }
  
  .my-32:nth-child(4) {
    animation-delay: 0.6s;
  }
  
  .my-32:nth-child(5) {
    animation-delay: 0.8s;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
</style>