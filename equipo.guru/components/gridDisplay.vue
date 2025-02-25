<template>
    <div class="grid grid-cols-1 md:grid-cols-2 md-gap-y-4 gap-y-8">
        <template v-for="(slot, index) in Object.keys($slots).filter(key => key.startsWith('grid'))" :key="slot">
            <ConteinerBlack class="min-h-[300px]">
                <div class="flex flex-col items-center justify-between px-8 md:px-4 md:min-h-[400px] overflow-hidden">
                    <slot :name="slot"></slot>
                </div>
            </ConteinerBlack>
        </template>
    </div>
</template>