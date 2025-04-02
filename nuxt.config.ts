
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
  css: [
    '~/assets/css/fonts.css',
  ],
  image: {
    // Image module options
    quality: 80,
    format: ['avif'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
    // Enable caching
    cacheMaxAge: 604800, // 1 week
    // Enable presets for responsive images
    presets: {
      avatar: {
        modifiers: {
          format: 'webp',
          width: 80,
          height: 80
        }
      },
      thumbnail: {
        modifiers: {
          format: 'webp',
          width: 400,
          height: 300
        }
      },
      hero: {
        modifiers: {
          format: 'webp',
          width: 600,
          height: 400
        }
      }
    }
  },
  routeRules: {
    // Cache images for better performance
    '/img/**': { 
      headers: {
        'Cache-Control': 'public, max-age=604800, s-maxage=604800'
      }
    }
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'SS-SchneiderServices - Technology Solutions',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { name: 'description', content: 'SS-SchneiderServices delivers innovative technical solutions for modern businesses. Expert technology services tailored to your unique needs.' },
        { name: 'keywords', content: 'technology services, IT solutions, software development, business technology, technical support, custom solutions' },
        { name: 'robots', content: 'index, follow' },
        
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://ss-schneiderservices.com/' },
        { property: 'og:title', content: 'SS-SchneiderServices - Technology Solutions' },
        { property: 'og:description', content: 'SS-SchneiderServices delivers innovative technical solutions for modern businesses. Expert technology services tailored to your unique needs.' },
        { property: 'og:image', content: 'https://ss-schneiderservices.com/Logo.svg' },
        
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://twitter.com/SSSchneiderServ' },
        { name: 'twitter:title', content: 'SS-SchneiderServices - Technology Solutions' },
        { name: 'twitter:description', content: 'SS-SchneiderServices delivers innovative technical solutions for modern businesses. Expert technology services tailored to your unique needs.' },
        { name: 'twitter:image', content: 'https://ss-schneiderservices.com/Logo.svg' },
      ],
      link: [
        { 
          rel: 'icon', 
          type: 'image/png', 
          href: '/Logo1.png' 
        },
      ],
    }
  },
});
