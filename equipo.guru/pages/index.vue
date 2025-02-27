<template>
  <JsonLd :data="{
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'EquipoDOTGuru',
      'description': 'Soluciones digitales a medida para potenciar tu proyecto.',
      'url': 'https://equipo.guru',
      'logo': 'https://equipo.guru/logo.png',
      'sameAs': [
        'https://linkedin.com/company/equipodotguru',
        'https://twitter.com/equipodotguru'
      ],
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '+1-123-456-7890',
        'contactType': 'customer service'
      }
    }" />
  <div class="relative">
    <HeroSection />
    <section class="md:max-w-[60%] m-auto max-w-[90%] mt-16 md:mt-[100px]">
      <div class="flex flex-col justify-center items-center w-full text-center">
        <h2 class="text-green-guru text-[40px] font-semibold mb-[15px]">Trabajamos en Equipo <span class="text-white-guru block">para Potenciar tu Proyecto 🚀</span></h2>
        <p class="text-grey-shades-60 mb-[15px]">En EquipoDOTGuru, creemos que el éxito digital se construye con talento especializado. Por eso, contamos con equipos expertos en cada área clave del desarrollo digital. Descubre cómo cada equipo puede impulsar tu proyecto:</p>
      </div>
    </section>
    <GridDisplay class="xl:max-w-[70%] max-w-[90%] mx-auto mt-8 text-center">
        <template #grid1  >
            <span class="text-6xl mb-4">💻</span>
            <h3 class="text-white-guru text-[24px] font-semibold my-[15px]">Equipo Frontend</h3>
            <p class="text-grey-shades-60 mb-[15px]">Diseñamos interfaces intuitivas y que elevan la experiencia del usuario. Tecnologías: JavaScript, HTML5, CSS3, TailwindCSS, React, VueJS</p>
            <BtnMore class="md:mt-0 mt-6">Saber más</BtnMore>
        </template>
        <template #grid2>
          <span class="text-6xl mb-4">⚙️</span>
          <h3 class="text-white-guru text-[24px] font-semibold my-[15px]">Equipo Backend</h3>
          <p class="text-grey-shades-60 mb-[15px]">Construimos sistemas sólidos y eficientes que garantizan seguridad, escalabilidad y alto rendimiento. Tecnologías: PHP, NodeJS, Python, MySQL, PostgreSQL, Amazon Web Services, Google Cloud Platform, API integration, Upgrade Legacy Software</p>
          <BtnMore class="md:mt-0 mt-6">Saber más</BtnMore>
        </template>
        <template #grid3>
          <span class="text-6xl mb-4">🎨</span>
          <h3 class="text-white-guru text-[24px] font-semibold my-[15px]">Equipo de Diseño</h3>
          <p class="text-grey-shades-60 mb-[15px]">Creamos interfaces que optimizan la experiencia del usuario y consolidan la conexión con tu marca. Nos especializamos en diseño web, creación de logotipos, branding y edición de video.</p>
          <BtnMore class="md:mt-0 mt-6">Saber más</BtnMore>
        </template>
        <template #grid4>
          <span class="text-6xl mb-4">🛠️</span>
          <h3 class="text-white-guru text-[24px] font-semibold my-[15px]">Equipo de Soporte</h3>
          <p class="text-grey-shades-60 mb-[15px]">Brindamos soluciones rápidas y efectivas para asegurar el funcionamiento continuo de tus sistemas. Servicios: Soporte de Software (Frontend, Backend y servidores), Test manuales, funcionales y automatizados, Test de Seguridad</p>
          
          <BtnMore class="md:mt-0 mt-6">Saber más</BtnMore>
        </template>
    </GridDisplay>
   <OurProyectos />
   <OurTools />
   <CtaStart class="mt-20"></CtaStart>
  
  </div>
</template>

<script lang="ts" setup>
import HeroSection from '~/components/heroSection.vue';

useHead({
  title: 'EquipoDOTGuru - Soluciones Digitales A Medida',
  meta: [
    { name: 'description', content: 'En EquipoDOTGuru, creemos en el poder transformador de las soluciones digitales para empresas.' },
    { name: 'keywords', content: 'desarrollo web, desarrollo frontend, desarrollo backend, diseño digital, soporte técnico' },
  ]
})

</script>

<style>

</style>