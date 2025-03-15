
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss','@nuxt/image'],
  css: [
        '~/assets/css/fonts.css',
  ],
  image: {
    // Opciones de configuración
    dir: 'assets',
    provider: 'ipx',
    quality: 80,
    format: ['webp', 'avif', 'jpg'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    }
  },
});