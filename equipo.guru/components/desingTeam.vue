<template>
    <section class="md:max-w-[60%] m-auto max-w-[90%] mt-16 md:pt-[130px] md:mt-0">
      <div class="flex flex-col justify-center items-center w-full text-center">
        <span class="text-6xl mb-4">🎨</span>
        <h2 class="text-green-guru text-[25px] font-semibold mb-[15px]">Equipo de Diseño</h2>
        <p class="text-grey-shades-60 mb-[15px]">Desarrollamos identidades visuales y experiencias de usuario atractivas y funcionales, garantizando coherencia estética, usabilidad e impacto visual en la plataforma y sus servicios.</p>
        <h2 class="text-white-guru text-[25px] font-semibold mt-10"><span class="block">Alcance</span> del Equipo de Diseño</h2>
      </div>
    </section>
    <GridDisplay class="xl:max-w-[70%] max-w-[90%] mx-auto mt-16 text-center">
      <template #grid1>
        <span class="text-8xl mt-10 ">✏️</span>
        <h3 class="text-white-guru text-[24px] mb-4 font-semibold">Desarrollo 
            y optimización</h3>
        <p class="text-grey-shades-60 mb-[15px]">
Creación de identidades visuales y material 
gráfico alineados con la marca. Edición de video.</p>
      </template>
      <template #grid2>
        <span class="text-8xl mt-10 ">🖥️</span>
        <h3 class="text-white-guru text-[24px] mb-4 font-semibold">Diseño de interfaces</h3>
        <p class="text-grey-shades-60 mb-[15px]">Desarrollo de experiencias de usuario intuitivas 
            y eficientes.</p>
      </template>
      <template #grid3>
        <span class="text-8xl mt-10 ">📱</span>
        <h3 class="text-white-guru text-[24px] mb-4 font-semibold">Prototipos 
            y validación</h3>
        <p class="text-grey-shades-60 mb-[15px]">Creación de prototipos UX/UI para pruebas
            y mejora del diseño.</p>
      </template>
      <template #grid4>
        <span class="text-8xl mt-10 ">🤝</span>
        <h3 class="text-white-guru text-[24px] mb-4 font-semibold">Colaboración 
            en implementación</h3>
        <p class="text-grey-shades-60 mb-[15px]">Trabajo conjunto con frontend y backend para asegurar coherencia y funcionalidad.</p>
      </template>
    </GridDisplay>
    <CtaStart class=" mt-20" />
  </template>