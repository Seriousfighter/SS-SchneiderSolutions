<template>
  <div class="px-4 md:px-10 md:py-4 flex flex-row items-center justify-between border-2 border-black h-15 text-green-ss font-bebas">
    <div>
      <h1 class="text-2xl md:text-4xl">SS-SCHNEIDER SERVICES</h1>
    </div>

    <!-- Desktop Navigation -->
    <div class="hidden md:block">
      <nav class="flex flex-row md:text-4xl justify-between gap-10">
        <navLink :page="home">Home</navLink>
        <navLink :page="portfolio">Portfolio</navLink>
        <navLink :page="services">Services</navLink>
        <navLink :page="contact">Contact</navLink>
      </nav>
    </div>

    <!-- Mobile Hamburger Button -->
    <div class="md:hidden text-4xl">
      <button @click="toggleMenu" class="focus:outline-none" aria-label="Toggle menu">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path v-if="!isMenuOpen" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
          <path v-else fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
      </button>
    </div>
  </div>

  <!-- Mobile Menu (Off-canvas) -->
  <div v-if="isMenuOpen" class="md:hidden fixed inset-0 z-50 bg-black-ss bg-opacity-75">
    <div class="flex flex-col h-full w-3/4 max-w-sm bg-grey-shades-10 text-green-ss p-4">
      <div class="flex justify-between items-center mb-5">
        <h2 class="text-2xl font-bebas">Menu</h2>
        <button @click="toggleMenu" class="focus:outline-none" aria-label="Close menu">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>
      <nav class="flex flex-col space-y-6 text-2xl font-bebas mt-5">
        <navLink :page="home" @click="closeMenu">Home</navLink>
        <navLink :page="portfolio" @click="closeMenu">Portfolio</navLink>
        <navLink :page="services" @click="closeMenu">Services</navLink>
        <navLink :page="contact" @click="closeMenu">Contact</navLink>
      </nav>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

// Define the page routes
const home = "/"
const portfolio = "/portfolio"
const services = "/services"
const contact = "/contact"

// Mobile menu state
const isMenuOpen = ref(false)

// Toggle mobile menu
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden' // Prevent scrolling when menu is open
  } else {
    document.body.style.overflow = '' // Re-enable scrolling when menu is closed
  }
}

// Close mobile menu
const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}
</script>
