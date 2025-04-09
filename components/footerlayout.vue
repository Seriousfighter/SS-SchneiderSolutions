<template>
  <footer class="bg-gray-900 border-t border-[#E1FF2D]/20 pt-16 pb-8">
    <div class="max-w-7xl mx-auto px-4 md:px-8">
      <!-- Footer Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <!-- Column 1: Logo and Info -->
        <div>
          <div class="mb-4">
            <h2 class="text-3xl font-bold">
              <span class="text-[#E1FF2D]">SS</span>
              <span class="text-white">-SCHNEIDER</span>
            </h2>
          </div>
          <p class="text-gray-400 mb-4">
            Expert technical services for modern businesses. We deliver innovative solutions tailored to your unique needs.
          </p>
          <div class="flex space-x-4">
            <a href="#" aria-label="Facebook" class="text-gray-400 hover:text-[#E1FF2D] transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter" class="text-gray-400 hover:text-[#E1FF2D] transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <NuxtLink to="https://github.com/Seriousfighter" aria-label="LinkedIn" class="text-gray-400 hover:text-[#E1FF2D] transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd" />
              </svg>
            </NuxtLink>
            <NuxtLink to="https://github.com/Seriousfighter" aria-label="GitHub" class="text-gray-400 hover:text-[#E1FF2D] transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
              </svg>
            </NuxtLink>
          </div>
        </div>
        
        <!-- Column 2: Services -->
        <div>
          <h3 class="text-white font-semibold text-lg mb-4">Our Services</h3>
          <ul class="space-y-3">
            <li>
              <a href="#" @click.prevent="navigateToServices" class="text-gray-400 hover:text-[#E1FF2D] transition-colors">Web Development</a>
            </li>
            <li>
              <a href="#" @click.prevent="navigateToServices" class="text-gray-400 hover:text-[#E1FF2D] transition-colors">Mobile Applications</a>
            </li>
            <li>
              <a href="#" @click.prevent="navigateToServices" class="text-gray-400 hover:text-[#E1FF2D] transition-colors">UX/UI Design</a>
            </li>
            <li>
              <a href="#" @click.prevent="navigateToServices" class="text-gray-400 hover:text-[#E1FF2D] transition-colors">Tech Consulting</a>
            </li>
          </ul>
        </div>
        
        <!-- Column 3: Resources -->
        <div>
          <h3 class="text-white font-semibold text-lg mb-4">Resources</h3>
          <ul class="space-y-3">
            <li>
              <NuxtLink to="portfolio" class="text-gray-400 hover:text-[#E1FF2D] transition-colors">Portfolio</NuxtLink>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-[#E1FF2D] transition-colors">Case Studies</a>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-[#E1FF2D] transition-colors">Blog</a>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-[#E1FF2D] transition-colors">FAQ</a>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-[#E1FF2D] transition-colors">Documentation</a>
            </li>
          </ul>
        </div>
        
        <!-- Column 4: Contact -->
        <div>
          <h3 class="text-white font-semibold text-lg mb-4">Contact Us</h3>
          <div class="space-y-3 text-gray-400">
            <p class="flex items-start">
              <svg class="w-5 h-5 text-[#E1FF2D] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              Crespo - Entre Rios - Argentina
            </p>
            <p class="flex items-start">
              <svg class="w-5 h-5 text-[#E1FF2D] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              info@schneider-services.com
            </p>
            <p class="flex items-start">
              <svg class="w-5 h-5 text-[#E1FF2D] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              <NuxtLink to="https://wa.me/543435303842?text=Hi%2C%20I%27m%20interested%20in%20receiving%20more%20info%20about%20your%20services">+54 (343) 5303842</NuxtLink>
            </p>
            <form class="mt-6">
              <label for="email-subscription" class="sr-only">Email</label>
              <div class="flex">
                <input 
                  id="email-subscription"
                  type="email" 
                  placeholder="Your email" 
                  class="bg-gray-800 text-gray-300 px-4 py-2 rounded-l focus:outline-none focus:ring-2 focus:ring-[#E1FF2D]/50 w-full"
                >
                <button 
                  type="submit"
                  class="bg-[#E1FF2D] text-black px-4 py-2 rounded-r font-medium hover:bg-[#d4f909] transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <!-- Divider -->
      <div class="border-t border-gray-800 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-500 text-sm">© 2025 SS-Schneider Services. All rights reserved.</p>
          <div class="flex space-x-6 mt-4 md:mt-0">
            <a href="#" class="text-gray-500 hover:text-[#E1FF2D] text-sm">Privacy Policy</a>
            <a href="#" class="text-gray-500 hover:text-[#E1FF2D] text-sm">Terms of Service</a>
            <a href="#" class="text-gray-500 hover:text-[#E1FF2D] text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const route = useRoute()
const router = useRouter()

// Function to navigate to services or smooth scroll if already there
const navigateToServices = () => {
  if (route.path === '/services') {
    // Already on services page, scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  } else {
    // Navigate to services page
    router.push('/services')
  }
}
</script>