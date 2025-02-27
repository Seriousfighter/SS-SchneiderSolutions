<template>
    <section class="md:max-w-[60%] m-auto max-w-[90%] mt-16 md:mt-[100px]">
      <div class="flex flex-col justify-center items-center w-full text-center">
         <h2 :class="`text-green-guru text-[${titleSize}px] font-bold mb-[15px]`">Herramientas que <span class="text-white-guru block md:inline">Desarrollamos</span></h2>
        <p class="text-grey-shades-60 mb-[15px]">En Equipo.Guru, no solo nos enfocamos en soluciones a medida, sino que también desarrollamos herramientas innovadoras que optimizan y facilitan diversas tareas.</p>
      </div>
    </section>
    <section>
        
 <GridDisplay class="xl:max-w-[70%] max-w-[90%] mx-auto mt-8">
   <template #grid1>
     <div>
       <div class="flex flex-col justify-between items-center">
         <NuxtImg src="tool1.png" loading="lazy" format="avif" alt="Project 1" class="w-[150px] h-[150px] object-cover rounded-full" />
         <h3 class="text-green-guru text-[24px] font-bold my-[15px]">
           TikToken
         </h3>
       </div>
       <div class="mt-4 flex flex-col justify-between text-center items-center ">
         <p class="text-grey-shades-60 mb-10">Ya sea de manera individual o en lote, Tiktoken permite gestionar presupuestos y tomar decisiones informadas al conocer el costo exacto de cada consulta.</p>
         <BtnMore> Ir a TikToken</BtnMore>
       </div>
     </div>
   </template>
   <template #grid2>
     <div>
       <div class="flex flex-col justify-between items-center">
         <img src="tool2.png" loading="lazy" format="avif" alt="Project 1" class="w-[150px] h-[150px] object-cover rounded-full" />
         <h3 class="text-green-guru text-[24px] font-bold my-[15px]">
           Reels
         </h3>
       </div>
       <div class="mt-4 flex flex-col justify-between text-center items-center ">
         <p class="text-grey-shades-60 mb-10">Esta herramienta permite a los usuarios cargar imágenes y videos, elegir un audio de fondo, añadir un logo y un texto, y generar un video final con transici</p>
         <BtnMore> Ir a Reels</BtnMore>
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