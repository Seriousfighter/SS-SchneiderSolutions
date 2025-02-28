<template>
  <div class="flex flex-col  text-grey-shades-60 max-w-[90%] mx-auto mt-10">
        <!---top footer-->
        <div class="relative flex flex-row justify-between">
            <logoGuru size="100" class="absolute bottom-[-25px] left-0"/>
            <div class="absolute right-0 bottom-0 flex flex-row">
                <p class="my-auto text-white-guru font-semibold m-2">Seguinos</p>
                <NuxtLink 
                  to="https://co.linkedin.com/company/equipodotguru" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Visítanos en LinkedIn" 
                  title="LinkedIn">
                  <span class="bg-gradient-to-b from-grey-shades-50 to-grey-shades-6 
                              rounded-full m-2 p-1 hover:bg-gradient-to-b 
                              hover:from-grey-shades-6 hover:to-grey-shades-50 
                              flex items-center justify-center">
                    <lnSVG size="24" class="m-1"/>
                  </span>
                </NuxtLink>

                <NuxtLink 
                  to="https://x.com/EquipoDotGuru" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Síguenos en X (Twitter)" 
                  title="Twitter / X">
                  <span class="bg-gradient-to-b from-grey-shades-50 to-grey-shades-6 
                              rounded-full m-2 p-1 hover:bg-gradient-to-b 
                              hover:from-grey-shades-6 hover:to-grey-shades-50 
                              flex items-center justify-center">
                    <XSvg size="24" class="m-1"/>
                  </span>
                </NuxtLink>
            </div>
        </div>        
      <!---middle footer-->
      <div class="flex flex-row flex-wrap items-start justify-between w-full p-6 md:flex-row md:flex-nowarp border-y-[1px] border-y-grey-shades-60">
          <div class="flex flex-col min-w-[50%] md:min-w-0 mb-4">
              <p class="text-white-guru font-semibold">Home</p>
              <nuxt-link to="equipos">Equipos</nuxt-link>
              <nuxt-link to="proyectos">Proyectos</nuxt-link>
              <nuxt-link to="herramientas">Herramientas</nuxt-link>
          </div>
          <div class="flex flex-col min-w-[50%] md:min-w-0 mb-4">
              <p class="text-white-guru font-semibold">Equipos</p>
              <nuxt-link to="equipos?team=frontend">Equipo Frontend</nuxt-link>
              <nuxt-link to="equipos?team=backend">Equipo Backend</nuxt-link>
              <nuxt-link to="equipos?team=design">Equipo de Diseño</nuxt-link>
              <nuxt-link to="equipos?team=support">Equipo de Soporte</nuxt-link>
              
          </div>
          <div class="flex flex-col min-w-[50%] md:min-w-0 mb-4">
              <p class="text-white-guru font-semibold">Proyectos</p>
              <nuxt-link to="https://bambic.com.ar/" target="_blank">Bambic.com</nuxt-link>
              <nuxt-link to="" target="_blank">Calorify</nuxt-link>
              <nuxt-link to="https://vitalpropiedades.com.ar/" target="_blank">Vitalpropiedades.com</nuxt-link>
              <NuxtLink to="https://www.upwork.com/agencies/equipodotguru/modal-portfolio-project?pageTitle=Logo%20Design&preventDismiss=false&_modalInfo=%5B%7B%22navType%22%3A%22modal%22,%22title%22%3A%22Logo%20Design%22,%22modalId%22%3A%221740580872233%22,%22channelName%22%3A%22modal-portfolio-project%22,%22preventDismiss%22%3Afalse%7D%5D&nav_dir=pop" target="_blank">REBICIE</NuxtLink>
              <NuxtLink to="proyectos" target="_blank"> Ver más</NuxtLink>
          </div>
          
      </div>
      <!---bottom footer-->
      <div class="flex flex-col items-center justify-around w-full p-6">
        <!--<div class="flex flex-col items-center justify-around w-full p-6 md:flex-row md:justify-between">-->
              <p class="mb-4 md:mb-0">&copy; {{ currentYear }} EquipoDOTGuru. All Rights Reserved.</p>
<!---
          <div class="flex flex-row flex-wrap justify-around md:flex-nowrap md:justify-between">
            <nuxt-link to="" class="min-w-[50%] md:min-w-0 md:mx-4 md:order-2">Privacy Policy</nuxt-link>
            <nuxt-link to="" class=" md:mx-4 md:order-3">Terms & Conditions</nuxt-link>
            <p class="min-w-[50%] md:min-w-0 mx-2 md:order-1">version 1.0</p>
            <nuxt-link to="" class=" md:mx-4 md:order-4">Cookie Policy</nuxt-link>
          </div>
          --->
      </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';

const currentYear = new Date().getFullYear();
const versionMargin = ref('0px');

onMounted(() => {
  const calculateMargin = () => {
    if (window.innerWidth >= 768) {
      versionMargin.value = `${window.innerWidth / 4}px`;
    } else {
      versionMargin.value = '0px';
    }
  };

  calculateMargin();
  window.addEventListener('resize', calculateMargin);
});
</script>