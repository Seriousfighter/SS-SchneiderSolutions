<template>
    <ConteinerBlack class="flex flex-col items-center w-[90%] lg:w-[80%] justify-between gap-8 mx-auto p-6 min-h-[200px]">
        <div class="text-center w-full sm:px-0">
            <h2 class="text-white-guru text-[24px] md:text-[48px] flex flex-col sm:block">
                ¿Listo para transofrmar 
                <span class="text-green-guru block sm:inline">tu presencia digital?</span>
            </h2>
        </div>
        <div class="text-center mt-8">
            <p class="text-white-guru text-[14px] md:text-[24px] mb-4">Desbloquea tu Potencial Digital Hoy</p>
            <BtnGreen @click="console.log('click')" class="text-[16px] md:text-[24px]">Comencemos</BtnGreen>
        </div>
    </ConteinerBlack>
</template>