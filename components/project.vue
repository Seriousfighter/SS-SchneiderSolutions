<template>
  <div class="group bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700 hover:border-[#E1FF2D]/20 transition-all hover:-translate-y-2 h-full flex flex-col">
    <!-- Image Carousel -->
    <div class="relative h-52">
      <!-- Main Image using NuxtImg -->
      <NuxtImg
        v-if="!showFallback"
        :src="imagePath"
        :alt="title"
        class="w-full h-full object-cover"
        placeholder
        format="avif"
        @error="handleImageError"
      />
      
      <!-- Navigation Arrows (if multiple images) -->
      <div v-if="images.length > 1 && !showFallback" class="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-3">
        <button 
          @click.prevent="prevImage" 
          class="bg-black/50 hover:bg-black/70 text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors"
          aria-label="Previous image"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        <button 
          @click.prevent="nextImage" 
          class="bg-black/50 hover:bg-black/70 text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors"
          aria-label="Next image"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
      
      <!-- Image Indicators -->
      <div 
        v-if="images.length > 1 && !showFallback" 
        class="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5"
      >
        <button 
          v-for="(_, index) in images" 
          :key="index" 
          @click.prevent="currentImageIndex = index"
          class="w-2 h-2 rounded-full transition-colors"
          :class="index === currentImageIndex ? 'bg-[#E1FF2D]' : 'bg-white/50 hover:bg-white/80'"
          :aria-label="`Go to image ${index + 1}`"
        ></button>
      </div>
      
      <!-- Fallback when image is missing -->
      <div 
        v-if="showFallback"
        class="absolute inset-0 bg-gray-800 flex items-center justify-center"
      >
        <div class="text-[#E1FF2D] text-center p-4">
          <svg class="w-10 h-10 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
          <p>{{ title }}</p>
        </div>
      </div>
    </div>
    
    <!-- Content -->
    <div class="p-5 flex flex-col flex-grow">
      <h3 class="text-xl text-[#E1FF2D] font-bold mb-2">{{ title }}</h3>
      <p class="text-gray-300 mb-4 flex-grow">{{ description }}</p>
      
      <!-- Tags -->
      <div v-if="tags && tags.length" class="flex flex-wrap gap-2 mt-auto">
        <span 
          v-for="tag in tags" 
          :key="tag" 
          class="text-xs px-2 py-1 bg-[#E1FF2D]/10 text-[#E1FF2D] rounded-full"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';

const props = defineProps({
  images: {
    type: Array as () => string[],
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  tags: {
    type: Array as () => string[],
    default: () => []
  }
});

const currentImageIndex = ref(0);
const showFallback = ref(false);

// Create the full path for the current image
const imagePath = computed(() => {
  if (props.images.length === 0) {
    showFallback.value = true;
    return '';
  }
  
  // Construct the path for NuxtImg
  // For assets folder images, use the pattern: /img/projects/{filename}
  return `/img/projects/${props.images[currentImageIndex.value]}`;
});

// Image navigation
const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % props.images.length;
};

const prevImage = () => {
  currentImageIndex.value = (currentImageIndex.value - 1 + props.images.length) % props.images.length;
};

// Handle image loading errors
const handleImageError = () => {
  showFallback.value = true;
};
</script>