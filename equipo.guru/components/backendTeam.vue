<template>
    <section class="md:max-w-[60%] m-auto max-w-[90%] mt-16 md:pt-[130px] md:mt-0">
      <div class="flex flex-col justify-center items-center w-full text-center">
        <span class="text-6xl mb-4">⚙️</span>
        <h2 class="text-green-guru text-[25px] font-semibold mb-[15px]">Equipo Backend</h2>
        <p class="text-grey-shades-60 mb-[15px]">Desarrollamos y mantenemos la infraestructura y lógica de negocio de la plataforma, garantizando seguridad, eficiencia y escalabilidad en el procesamiento de datos y funcionalidades.</p>
        <h2 class="text-white-guru text-[25px] font-semibold mt-10"><span class="block">Alcance</span> del Equipo Backend</h2>
      </div>
    </section>
    <GridDisplay class="xl:max-w-[70%] max-w-[90%] mx-auto mt-16 text-center">
      <template #grid1>
        <span class="text-8xl mt-10 ">🏗️</span>
        <h3 class="text-white-guru text-[24px] mb-4 font-semibold">Desarrollo y optimización</h3>
        <p class="text-grey-shades-60 mb-[15px]">Construcción y mejora del núcleo funcional de la plataforma.</p>
      </template>
      <template #grid2>
        <span class="text-8xl mt-10 ">🔒</span>
        <h3 class="text-white-guru text-[24px] mb-4 font-semibold">Gestión de datos</h3>
        <p class="text-grey-shades-60 mb-[15px]">Implementación de bases de datos escalables y seguras</p>
      </template>
      <template #grid3>
        <span class="text-8xl mt-10 ">🔗</span>
        <h3 class="text-white-guru text-[24px] mb-4 font-semibold">Automatización e integración</h3>
        <p class="text-grey-shades-60 mb-[15px]">Conexión con servicios externos y herramientas de automatización.</p>
      </template>
      <template #grid4>
        <span class="text-8xl mt-10 ">🛡️</span>
        <h3 class="text-white-guru text-[24px] mb-4 font-semibold">Seguridad y rendimiento</h3>
        <p class="text-grey-shades-60 mb-[15px]">Protección de datos y optimización del servidor para estabilidad y velocidad</p>
      </template>
    </GridDisplay>
    <CtaStart class=" mt-20" />
  </template>