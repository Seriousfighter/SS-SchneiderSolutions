<template>
         <section class="md:max-w-[60%] m-auto max-w-[90%] mt-16 md:pt-[130px] md:mt-0">
      <div class="flex flex-col justify-center items-center w-full text-center">
        <span class="text-6xl mb-4">💻</span>
       <h2 class="text-green-guru text-[25px] font-semibold mb-[15px]">Equipo Frontend </h2>
        <p class="text-grey-shades-60 mb-[15px]">Desarrollamos y mantenemos interfaces de usuario interactivas, accesibles y eficientes, garantizando una experiencia de usuario óptima mediante la implementación de tecnologías web modernas y responsivas.</p>
        <h2 class="text-white-guru text-[25px] font-semibold mt-10"><span class="block">Alcance</span> del Equipo Frontend</h2>
      </div>
     </section>
     <GridDisplay class="xl:max-w-[70%] max-w-[90%] mx-auto mt-16 text-center">
        <template #grid1  >
            <span class="text-8xl mt-10 ">🎨</span>
            <h3 class="text-white-guru text-[24px] mb-4 font-semibold">Desarrollo UI</h3>
            <p class="text-grey-shades-60 mb-[15px]">Diseño y desarrollo de interfaces enfocadas en usabilidad y estética</p>
            
        </template>
        <template #grid2>
          <span class="text-8xl mt-10 ">⚡</span>
          <h3 class="text-white-guru text-[24px] mb-4 font-semibold">Tecnologia y optimizacion</h3>
          <p class="text-grey-shades-60 mb-[15px]">Implementación de tecnologías responsivas y mejoras en rendimiento.</p>
          
        </template>
        <template #grid3>
          <span class="text-8xl mt-10 ">🔗</span>
          <h3 class="text-white-guru text-[24px] mb-4 font-semibold">Accesibilidad e integracion</h3>
          <p class="text-grey-shades-60 mb-[15px]">Aplicación de estándares de accesibilidad y colaboración con backend y diseño.</p>
          
        </template>
        <template #grid4>
          <span class="text-8xl mt-10 ">🚀</span>
          <h3 class="text-white-guru text-[24px] mb-4 font-semibold">Mantenimiento y evolucion</h3>
          <p class="text-grey-shades-60 mb-[15px]">Actualización continua del frontend según las necesidades del proyecto</p>
          
        </template>
    </GridDisplay>
    <CtaStart class=" mt-20"/>
</template>