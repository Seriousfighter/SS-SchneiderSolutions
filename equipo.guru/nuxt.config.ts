// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/test-utils/module',
    '@nuxtjs/sitemap',
    '@nuxt/image',
  ],
  css: [

    '~/assets/css/fonts.css',
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'EquipoDOTGuru - Soluciones Digitales A Medida',
      htmlAttrs: {
        lang: 'es'  // or 'en' for English, etc.
      },
      meta: [
        { name: 'description', content: 'En EquipoDOTGuru, creemos en el poder transformador de las soluciones digitales. Nuestro equipo de expertos está dedicado a ayudar a empresas como la tuya a prosperar en el dinámico mundo digital.' },
        { name: 'keywords', content: 'desarrollo web, desarrollo de software, diseño web, frontend, backend, soporte técnico, equipo digital' },
        { name: 'robots', content: 'index, follow' },
        
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://equipo.guru/' },
        { property: 'og:title', content: 'EquipoDOTGuru - Soluciones Digitales A Medida' },
        { property: 'og:description', content: 'Soluciones digitales a medida para potenciar tu proyecto. Equipos especializados en frontend, backend, diseño y soporte.' },
        { property: 'og:image', content: 'https://equipo.guru/og-image.jpg' },
        
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://equipo.guru/' },
        { name: 'twitter:title', content: 'EquipoDOTGuru - Soluciones Digitales A Medida' },
        { name: 'twitter:description', content: 'Soluciones digitales a medida para potenciar tu proyecto. Equipos especializados en frontend, backend, diseño y soporte.' },
        { name: 'twitter:image', content: 'https://equipo.guru/twitter-image.jpg' },
      ],
      link: [
        { 
          rel: 'icon', 
          type: 'image/svg+xml', 
          href: '/LogoGuru.svg' 
        },
      ],
    }
  },
  sitemap: {
    siteUrl: 'http://https://equipo.guru/.com',
    exclude: ['/admin/**']
  },
  image: {
    // Opciones de configuración
    dir: 'assets/images',
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
  }
})
