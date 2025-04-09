<template>
  <div class="w-full min-h-screen">
    <!-- Hero Section -->
    <section class="w-full flex items-center px-4 md:px-8 overflow-hidden min-h-screen py-8">
      <div class="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-0 lg:gap-12 items-center">
        <!-- Left Side: Content -->
        <div>
          <div>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span class="text-[#E1FF2D]">SS</span>-SCHNEIDER SERVICES
            </h1>
            <p class="text-lg text-gray-300 mb-8 max-w-xl">
              Expert technical services for modern businesses. 
              We deliver innovative solutions tailored to your unique needs.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <NuxtLink to="services">
                <button class="px-6 py-3 bg-[#E1FF2D] text-black font-semibold rounded hover:bg-[#d4f909] transform hover:-translate-y-1 transition-all">
                  Our Services
                </button>
              </NuxtLink>
              <NuxtLink to="contact">
                <button class="px-6 py-3 border-2 border-[#E1FF2D] text-[#E1FF2D] font-semibold rounded hover:bg-[#E1FF2D]/10 transform hover:-translate-y-1 transition-all">
                  Contact Us
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>
        
        <!-- Right Side: Image Carousel -->
        <div>
          <!-- Carousel Container -->
          <div class="rounded-xl overflow-hidden border-2 border-[#E1FF2D]/20 aspect-square relative bg-gradient-to-br from-gray-800 to-gray-900">
            <!-- Carousel Images -->
            <div class="relative w-full h-full">
              <!-- Image 1 -->
              <div 
                v-show="activeSlide === 0" 
                class="absolute inset-0 w-full h-full transition-opacity duration-700"
                :class="activeSlide === 0 ? 'opacity-100' : 'opacity-0'"
              >
                <NuxtImg 
                  src="/img/helix.webp" 
                  width="600"
                  height="400"
                  format="webp"
                  quality="70"
                  loading="eager"
                  class="w-full h-full object-cover" 
                  alt="Helix 1"
                />
              </div>
              
              <!-- Image 2 -->
              <div 
                v-show="activeSlide === 1" 
                class="absolute inset-0 w-full h-full transition-opacity duration-700"
                :class="activeSlide === 1 ? 'opacity-100' : 'opacity-0'"
              >
                <NuxtImg 
                  src="/img/helix2.webp" 
                  width="600"
                  height="400"
                  format="webp"
                  quality="70"
                  loading="eager"
                  class="w-full h-full object-cover" 
                  alt="Helix 2"
                />
              </div>
              
              <!-- Image 3 -->
              <div 
                v-show="activeSlide === 2" 
                class="absolute inset-0 w-full h-full transition-opacity duration-700"
                :class="activeSlide === 2 ? 'opacity-100' : 'opacity-0'"
              >
                <NuxtImg 
                  src="/img/helix3.webp" 
                  width="600"
                  height="400"
                  format="webp"
                  quality="70"
                  loading="eager"
                  class="w-full h-full object-cover" 
                  alt="Helix 3"
                />
              </div>
            </div>
            
            <!-- Gradient Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
            
            <!-- Carousel Caption -->
            <div class="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-gray-900/80 border border-[#E1FF2D]/20">
              <div class="flex items-center gap-2">
                <span class="h-2 w-2 rounded-full bg-[#E1FF2D] animate-pulse"></span>
                <p class="text-[#E1FF2D] font-medium text-sm">
                  {{ carouselCaptions[activeSlide] }}
                </p>
              </div>
            </div>
            
            <!-- Carousel Navigation -->
            <div class="absolute bottom-20 left-0 right-0 flex justify-center gap-2">
              <button 
                v-for="(_, index) in 3" 
                :key="index"
                @click="activeSlide = index"
                class="w-2 h-2 rounded-full transition-all"
                :class="activeSlide === index ? 'bg-[#E1FF2D] w-4' : 'bg-white/50 hover:bg-white'"
                aria-label="Go to slide"
              ></button>
            </div>
            
            <!-- Carousel Controls -->
            <button 
              @click="prevSlide"
              class="absolute top-1/2 left-2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center text-white transition-all"
              aria-label="Previous slide"
            >
              <span class="sr-only">Previous</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            
            <button 
              @click="nextSlide"
              class="absolute top-1/2 right-2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center text-white transition-all"
              aria-label="Next slide"
            >
              <span class="sr-only">Next</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

// Remove isScrolled state, keep carousel functionality
const activeSlide = ref(0);
const carouselCaptions = [
  "Technology solutions for the modern era",
  "Innovative digital services for your business",
  "Expert development and consulting"
];

// Carousel functionality
function nextSlide() {
  activeSlide.value = (activeSlide.value + 1) % 3;
}

function prevSlide() {
  activeSlide.value = (activeSlide.value - 1 + 3) % 3;
}

// Auto-advance carousel
let carouselInterval: ReturnType<typeof setInterval>;

onMounted(() => {
  // Start carousel auto-rotation
  carouselInterval = setInterval(() => {
    nextSlide();
  }, 5000);
});

onBeforeUnmount(() => {
  // Clear auto-rotation interval
  clearInterval(carouselInterval);
});
</script>