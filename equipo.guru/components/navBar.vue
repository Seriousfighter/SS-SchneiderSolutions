<script setup lang="ts">
import LogoGuru from './logoGuru.vue';
const isMenuOpen = ref(false)
const route = useRoute()
const isIndex = computed(() => route.path === '/')
const scrollPosition = ref(0)

// Add screen size watcher
const handleResize = () => {
  if (window.innerWidth >= 768 && isMenuOpen.value) {
    isMenuOpen.value = false
  }
}
const handleScroll = () => {
  scrollPosition.value = window.scrollY
}
// Add event listener on mount
onMounted(() => {
  window.addEventListener('resize', handleResize)
  window.addEventListener('scroll', handleScroll)
})

// Clean up event listener
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('scroll', handleScroll)
})

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
// Computed property for text color based on scroll position
const titleTextClass = computed(() => {
  if (!isIndex.value) {
    return 'text-white-guru'
  }
  
  if (scrollPosition.value > 150) {
    return 'text-white-guru'
  }
  
  return 'text-black-guru md:text-white-guru'
})
watch(
  () => route.path,
  () => {
    if (window.innerWidth < 768) {
      isMenuOpen.value = false
    }
  }
)
</script>

<template>
  <nav 
    class="fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-4 px-4 md:px-8 border-b border-grey-shades-25
          backdrop-blur-md bg-grey-shades-6/30"
  >
    <!-- Logo Section -->
    <div class="flex items-center gap-4">
      <NuxtLink 
                  to="https://co.linkedin.com/company/equipodotguru" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Visítan nuestra web" 
                  title="EquipoDotGuru">
                 <LogoGuru />
                </NuxtLink>
      <h2 
    class="font-bold"
    :class="titleTextClass"
  >
        EquipoDOTGuru
      </h2>
    </div>

    <!-- Hamburger Button -->
    <button 
      class="md:hidden flex flex-col justify-center items-center w-12 h-12 rounded-full bg-grey-shades-12 focus:outline-none"
      @click="toggleMenu"
      aria-label="Menu"
    >
      <span 
        class="w-6 h-[2px] bg-white-guru transition-all duration-300 ease-in-out"
        :class="isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''"
      ></span>
      <span 
        class="w-6 h-[2px] bg-white-guru my-[6px] transition-all duration-300 ease-in-out"
        :class="isMenuOpen ? 'opacity-0' : ''"
      ></span>
      <span 
        class="w-3 h-[2px] bg-white-guru transition-all duration-300 ease-in-out"
        :class="isMenuOpen ? '-rotate-45 -translate-y-[7px] w-6' : ''"
      ></span>
    </button>
    <!-- Navigation Links -->
    <div 
      class="md:flex items-center"
      :class="[ 
        isMenuOpen 
          ? 'absolute top-[107px] left-0 right-0 flex flex-col bg-grey-shades-6 py-6 px-4 space-y-4 shadow-lg' 
          : 'hidden'
      ]"
    >
      <navLink to="/" class="block md:inline-block">Home</navLink>
      <navLink to="equipos" class="block md:inline-block">Equipos</navLink>
      <navLink to="proyectos" class="block md:inline-block">Proyectos</navLink>
      <navLink to="herramientas" class="block md:inline-block">Herramientas</navLink>
      <navLink to="contact" class="block md:inline-block">Contacto</navLink>
    </div>
  </nav>
</template>