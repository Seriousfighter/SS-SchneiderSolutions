<template>
  <div class="my-24" id="whatWeDo">
    <div class="relative overflow-hidden">
      <!-- Heading with animation -->
      <h2 
        class="text-3xl md:text-4xl font-bold text-white mb-4 relative inline-block pb-2"
        :class="{ 'animate-slide-in': isVisible }"
        ref="headingRef"
      >
        What We Do
        <!-- Green line that animates after text appears -->
        <span 
          class="absolute bottom-0 left-0 h-1 bg-[#E1FF2D] transform origin-left transition-transform duration-700 ease-out"
          :class="{ 'w-16 scale-x-100': isVisible, 'w-16 scale-x-0': !isVisible }"
          :style="{ 'transition-delay': '0.5s' }"
        ></span>
      </h2>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
      <NuxtLink to="services">
        <div class="bg-gray-800/50 hover:bg-gray-800/70 p-6 rounded-lg transition-all hover:-translate-y-2 border border-gray-700 hover:border-[#E1FF2D]/20">
          <div class="text-4xl mb-4">💻</div>
          <h3 class="text-[#E1FF2D] text-xl font-bold mb-3">Web Development</h3>
          <p class="text-gray-300">Custom websites and web applications built with modern technologies.</p>
        </div>
      </NuxtLink>
      <NuxtLink to="services">
        <div class="bg-gray-800/50 hover:bg-gray-800/70 p-6 rounded-lg transition-all hover:-translate-y-2 border border-gray-700 hover:border-[#E1FF2D]/20">
          <div class="text-4xl mb-4">📱</div>
          <h3 class="text-[#E1FF2D] text-xl font-bold mb-3">Mobile Apps</h3>
          <p class="text-gray-300">Native and cross-platform mobile applications for iOS and Android.</p>
        </div>
      </NuxtLink>
      <NuxtLink to="services">
        <div class="bg-gray-800/50 hover:bg-gray-800/70 p-6 rounded-lg transition-all hover:-translate-y-2 border border-gray-700 hover:border-[#E1FF2D]/20">
          <div class="text-4xl mb-4">⚙️</div>
          <h3 class="text-[#E1FF2D] text-xl font-bold mb-3">Tech Consulting</h3>
          <p class="text-gray-300">Expert advice on technology strategies and implementation.</p>
        </div>
      </NuxtLink>
    </div>
  
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isVisible = ref(false);
const headingRef = ref<HTMLElement | null>(null);

const checkVisibility = () => {
  if (!headingRef.value) return;
  
  const rect = headingRef.value.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
  // Element is considered visible when it's 30% into the viewport
  if (rect.top <= windowHeight * 0.7) {
    isVisible.value = true;
  }
};

onMounted(() => {
  // Check visibility after a small delay to ensure DOM is ready
  setTimeout(checkVisibility, 200);
  
  // Add scroll event listener
  window.addEventListener('scroll', checkVisibility);
});

onBeforeUnmount(() => {
  // Clean up event listener
  window.removeEventListener('scroll', checkVisibility);
});
</script>

<style scoped>
.animate-slide-in {
  animation: slideIn 0.8s ease-out forwards;
  transform: translateX(-100%);
  opacity: 0;
}

@keyframes slideIn {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>