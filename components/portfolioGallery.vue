<template>
  <div class="my-24" id="portfolio">
    <div class="relative overflow-hidden">
      <!-- Heading with animation -->
      <h2 
        class="text-3xl md:text-4xl font-bold text-white mb-4 relative inline-block pb-2"
        :class="{ 'animate-slide-in': isVisible }"
        ref="headingRef"
      >
        Our Portfolio
        <!-- Green line that animates after text appears -->
        <span 
          class="absolute bottom-0 left-0 h-1 bg-[#E1FF2D] transform origin-left transition-transform duration-700 ease-out"
          :class="{ 'w-16 scale-x-100': isVisible, 'w-16 scale-x-0': !isVisible }"
          :style="{ 'transition-delay': '0.5s' }"
        ></span>
      </h2>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
      <NuxtLink to="portfolio">
        <div class="group rounded-lg overflow-hidden transition-all hover:-translate-y-2">
          <div class="h-48 bg-gradient-to-r from-[#E1FF2D]/10 to-[#E1FF2D]/20 group-hover:from-[#E1FF2D]/20 group-hover:to-[#E1FF2D]/30">
            <NuxtImg 
              src="./img/projects/escuelita/img1.webp" 
              class="w-full h-full object-cover"
              format="webp"
              quality="70"
              loading="eager"
            />
          </div>
          <div class="p-4 bg-gray-800">
            <h3 class="text-[#E1FF2D] font-semibold mb-1">Escuelita Virtual</h3>
            <p class="text-gray-300 text-sm">A Saas CRM for education</p>
          </div>
        </div>
      </NuxtLink>
    <NuxtLink to="portfolio">
      <div class="group rounded-lg overflow-hidden transition-all hover:-translate-y-2">
        <div class="h-48 bg-gradient-to-r from-[#E1FF2D]/20 to-[#E1FF2D]/30 group-hover:from-[#E1FF2D]/30 group-hover:to-[#E1FF2D]/40">
          <NuxtImg 
              src="./img/projects/Kaput/img1.webp" 
              alt="Kaput crm 1" 
              class="w-full h-full object-cover"
              format="webp"
              quality="70"
              loading="eager"
            />
        </div>
        <div class="p-4 bg-gray-800">
          <h3 class="text-[#E1FF2D] font-semibold mb-1">Kaput!</h3>
          <p class="text-gray-300 text-sm">A control aplication for Chicken Farmes</p>
        </div>
      </div>
    </NuxtLink>
    <NuxtLink to="portfolio">
      <div class="group rounded-lg overflow-hidden transition-all hover:-translate-y-2">
        <div class="h-48 bg-gradient-to-r from-[#E1FF2D]/30 to-[#E1FF2D]/40 group-hover:from-[#E1FF2D]/40 group-hover:to-[#E1FF2D]/50">
          <NuxtImg 
              src="./img/projects/EquipoGuru/img1.png" 
              alt="Equipo guru ssr 1" 
              class="w-full h-full object-cover"
              format="webp"
              quality="70"
              loading="eager"
            />
        </div>
        <div class="p-4 bg-gray-800">
          <h3 class="text-[#E1FF2D] font-semibold mb-1">Equipo Guru</h3>
          <p class="text-gray-300 text-sm">A SSR web site implementation</p>
        </div>
      </div>
    </NuxtLink>
    <NuxtLink to="portfolio">
      <div class="group rounded-lg overflow-hidden transition-all hover:-translate-y-2">
        <div class="h-48 bg-gradient-to-r from-[#E1FF2D]/40 to-[#E1FF2D]/50 group-hover:from-[#E1FF2D]/50 group-hover:to-[#E1FF2D]/60">
        <NuxtImg 
              src="./img/projects/BairesVive/img1.png" 
              alt="BairesVive Integration 1" 
              class="w-full h-full object-cover"
              format="webp"
              quality="70"
              loading="eager"
            />
          </div>
        <div class="p-4 bg-gray-800">
          <h3 class="text-[#E1FF2D] font-semibold mb-1">BairesVive</h3>
          <p class="text-gray-300 text-sm">Design Integration</p>
        </div>
      </div>
    </NuxtLink>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isVisible = ref(false);
const headingRef = ref<HTMLElement | null>(null);

// Sample project data
const projects = [
  {
    name: "E-Commerce Platform",
    description: "Full-stack online store with inventory management"
  },
  {
    name: "Mobile Banking App",
    description: "Secure financial transactions on iOS and Android"
  },
  {
    name: "CRM Dashboard",
    description: "Customer relationship management system with analytics"
  },
  {
    name: "Smart Home Interface",
    description: "IoT control center for connected devices"
  }
];

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

.animate-fade-in {
  opacity: 0;
  animation: fadeIn 0.6s ease-out forwards;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>