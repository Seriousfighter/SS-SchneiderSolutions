<template>
    <section class="md:max-w-[60%] m-auto max-w-[90%] mt-16 md:pt-[130px] md:mt-0">
      <div class="flex flex-col justify-center items-center w-full text-center">
        <span class="text-6xl mb-4">🛠️</span>
        <h2 class="text-green-guru text-[25px] font-semirbold mb-[15px]">Equipo de Soporte</h2>
        <p class="text-grey-shades-60 mb-[15px]">Garantizamos el funcionamiento óptimo de la plataforma mediante la  resolución de incidencias y mejora continua del servicio.</p>
        <h2 class="text-white-guru text-[25px] font-semibold mt-10"><span class="block">Alcance</span> del Equipo de Soporte</h2>
      </div>
    </section>
    <GridDisplay class="xl:max-w-[70%] max-w-[90%] mx-auto mt-16 text-center">
      <template #grid1>
        <span class="text-8xl mt-10 ">✏️</span>
        <h3 class="text-white-guru text-[24px] mb-4 font-semibold">Asistencia 
            y resolución</h3>
        <p class="text-grey-shades-60 mb-[15px]">
            Atención y solución de incidencias técnicas.</p>
      </template>
      <template #grid2>
        <span class="text-8xl mt-10 ">🔒</span>
        <h3 class="text-white-guru text-[24px] mb-4 font-semibold">Mantenimiento 
            y seguridad</h3>
        <p class="text-grey-shades-60 mb-[15px]">Actualizaciones para garantizar estabilidad y protección.</p>
      </template>
      <template #grid3>
        <span class="text-8xl mt-10 ">👀</span>
        <h3 class="text-white-guru text-[24px] mb-4 font-semibold">Monitoreo 
            y prevención</h3>
        <p class="text-grey-shades-60 mb-[15px]">Supervisión del rendimiento 
            para evitar fallos.</p>
      </template>
      <template #grid4>
        <span class="text-8xl mt-10 ">📈</span>
        <h3 class="text-white-guru text-[24px] mb-4 font-semibold">Mejora 
            continua</h3>
        <p class="text-grey-shades-60 mb-[15px]">Implementación de optimizaciones basadas en retroalimentación y análisis de datos</p>
      </template>
    </GridDisplay>
    <CtaStart class=" mt-20" />
  </template>