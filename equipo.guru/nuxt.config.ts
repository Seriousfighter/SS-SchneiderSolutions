// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/test-utils/module',
    '@nuxtjs/sitemap',
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'EquipoDOTGuru - Soluciones Digitales A Medida',
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
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap',
        },
        { 
          rel: 'icon', 
          type: 'image/svg+xml', 
          href: '/LogoGuru.svg' 
        },
      ],
    }
  },
  sitemap: {
    siteUrl: 'https://equipo.guru',
    exclude: ['/admin/**']
  }
})
