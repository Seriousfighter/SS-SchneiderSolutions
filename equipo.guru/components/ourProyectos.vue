<template>
    <section class="md:max-w-[60%] m-auto max-w-[90%] mt-16 md:mt-[100px]">
      <div class="flex flex-col justify-center items-center w-full text-center">
        <h2 :class="`text-green-guru text-[${titleSize}px] font-bold mb-[15px]`">Nuestros <span class="text-white-guru block md:inline">Proyectos</span></h2>
        <p class="text-grey-shades-60 mb-[15px]">Colaboramos con clientes de diferentes sectores, siempre con el objetivo 
          de ofrecer soluciones efectivas y bien diseñadas.</p>
      </div>
    </section>
     <section>
  <GridDisplay class="xl:max-w-[70%] max-w-[90%] mx-auto mt-8">

    <template #grid1>
      <div>
        <div class="relative flex flex-col justify-between items-center">
          <div class=" w-full overflow-hidden rounded-[10px]" >
            <NuxtImg src="proyecto1.png" alt="Project 1"  format="avif" class="w-full max-h-[305px] min-h-[150px] scale-125 object-cover " />
          </div>
          <NuxtLink to="https://bambic.com.ar/" target="_blank">
            <BtnMore class="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 mb-0 backdrop-blur-md bg-white-guru/30 text-[11px]">
              Ver proyecto
            </BtnMore>
          </NuxtLink>
        </div>
        <div class="mt-12">
          <nuxt-link to="https://bambic.com.ar/" target="_blank" class="text-green-guru">Bambic.com.ar</nuxt-link>
          <div class="flex justify-between">
            <h3 class="text-white-guru text-[18px] font-bold my-[15px]">Categoria: Desarrollo Web</h3>
            <h3 class="text-white-guru text-[18px] font-bold my-[15px]">Jul 2024</h3>
          </div>
          <p class="text-grey-shades-60">Witness our groundbreaking e-commerce platform that seamlessly connects buyers and sellers worldwide. With an intuitive user interface and secure payment gateways, this project revolutionizes online shopping.</p>
        </div>
      </div>
    </template>


    <template #grid2>
      <div>
        <div class="relative flex flex-col justify-between items-center ">
          <div class=" w-full overflow-hidden rounded-[10px]" >
            <NuxtImg src="proyecto2.png" alt="Project 2"  format="avif" class="w-full max-h-[305px] min-h-[150px] scale-125 object-cover " />
          </div>
          <NuxtLink to="" target="_blank">
            <BtnMore class="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 mb-0 backdrop-blur-md  bg-white-guru/30 text-[11px]">
              Ver proyecto
            </BtnMore>
          </NuxtLink>
        </div>
        <div class="mt-12">
          <nuxt-link to="#" target="blank" class="text-green-guru">Calorify</nuxt-link>
          <div class="flex justify-between">
            <h3 class="text-white-guru text-[18px] font-bold my-[15px]">Categoria: Aplicaciones Web</h3>
            <h3 class="text-white-guru text-[18px] font-bold my-[15px]">Diciembre 2024</h3>
          </div>
          <p class="text-grey-shades-60">A través de una interfaz intuitiva y un algoritmo de cálculo preciso, Calorify ofrece una experiencia personalizada que ayuda a los usuarios a comprender mejor sus necesidades calóricas diarias.</p>
        </div>
      </div>
    </template>

    <template #grid3>
      <div>
        <div class="relative flex flex-col justify-between items-center">
          <div class=" w-full overflow-hidden rounded-[10px]" >
            <NuxtImg src="proyecto3.png"  format="avif" alt="Project 2" class="w-full max-h-[305px] min-h-[150px] object-cover " />
          </div>
          <NuxtLink to="https://vitalpropiedades.com.ar/" target="_blank">
            <BtnMore class="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 mb-0 backdrop-blur-md  bg-white-guru/30 text-[11px]">
              Ver proyecto
            </BtnMore>
          </NuxtLink> 
        </div>
        <div class="mt-12">
          <nuxt-link to="https://vitalpropiedades.com.ar/"  targe="_blank" class="text-green-guru">Vitalpropiedades.com.ar</nuxt-link>
          <div class="flex justify-between">
            <h3 class="text-white-guru text-[18px] font-bold my-[15px]">Categoria: Diseño y Desarrollo Web</h3>
            <h3 class="text-white-guru text-[18px] font-bold my-[15px]">Enero 2022</h3>
          </div>
          <p class="text-grey-shades-60">El desafío fue diseñar una plataforma profesional y fácil de usar, que reflejara la confianza y la calidad de los servicios de Vital Propiedades, al mismo tiempo que ofreciera a los usuarios una experiencia ágil y eficiente para buscar y explorar propiedades.</p>
        </div>
      </div>
    </template>

    <template #grid4>
      <div>
        <div class="relative flex flex-col justify-between items-center">
          <div class=" w-full overflow-hidden rounded-[10px]" >
            <NuxtImg src="proyecto4.png"  format="avif" alt="Project 4" class="w-full h-[305px] object-cover rounded-[10px]" />
          </div>
          <NuxtLink to="https://www.upwork.com/agencies/equipodotguru/modal-portfolio-project?pageTitle=Logo%20Design&preventDismiss=false&_modalInfo=%5B%7B%22navType%22%3A%22modal%22,%22title%22%3A%22Logo%20Design%22,%22modalId%22%3A%221740580872233%22,%22channelName%22%3A%22modal-portfolio-project%22,%22preventDismiss%22%3Afalse%7D%5D&nav_dir=pop" target="_blank">
          <BtnMore class="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 mb-0 backdrop-blur-md  bg-white-guru/30 text-[11px]">
            Ver proyecto
          </BtnMore>
        </NuxtLink>
        
        </div>
        <div class="mt-12">
          <nuxt-link to="https://www.upwork.com/agencies/equipodotguru/modal-portfolio-project?pageTitle=Logo%20Design&preventDismiss=false&_modalInfo=%5B%7B%22navType%22%3A%22modal%22,%22title%22%3A%22Logo%20Design%22,%22modalId%22%3A%221740580872233%22,%22channelName%22%3A%22modal-portfolio-project%22,%22preventDismiss%22%3Afalse%7D%5D&nav_dir=pop" class="text-green-guru">Rebici</nuxt-link>
          <div class="flex justify-between">
            <h3 class="text-white-guru text-[18px] font-bold my-[15px]">Categoria: Diseño de logotipo</h3>
            <h3 class="text-white-guru text-[18px] font-bold my-[15px]">Enero 2022</h3>
          </div>
          <p class="text-grey-shades-60">Diseño del logo de Rebici, una tienda especializada en el alquiler de bicicletas eléctricas. El desafío era crear una identidad visual que reflejara la energía y la sostenibilidad de la marca, al mismo tiempo que transmitiera un mensaje de modernidad y dinamismo.</p>
        </div>
      </div>
    </template>
  </GridDisplay>
</section>
</template>
<script setup>
defineProps({
  titleSize: {
  type: Number,
  default: 29
  }
})
</script>