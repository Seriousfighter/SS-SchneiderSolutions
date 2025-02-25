<template>
    <button
        :class="[
            'font-normal border rounded-[25px] px-[20px] py-[10px] transition-all duration-200',
            'inline-flex justify-center items-center gap-2',
            color === 'green' ?
            'bg-green-guru text-black-guru border-green-guru hover:bg-grey-shades-15 hover:border-green-guru hover:text-white-guru' :
            'border-grey-shades-25 text-white-guru bg-grey-shades-12 hover:bg-grey-shades-15 hover:border-green-guru hover:text-white-guru'
        ]"
        @click="$emit('click')">
        <span class="inline-flex items-center">
            <slot></slot>
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 -2 24 24" fill="none"
            :stroke="color === 'green' ? '#1A1A1A' : '#E1FF2D'" stroke-width="3" stroke-linecap="round"
            stroke-linejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
    </button>
</template>

<script setup lang="ts">
    interface Props {
        color ? : 'default' | 'green'
    }

    withDefaults(defineProps < Props > (), {
        color: 'default'
    })

    defineEmits(['click'])
</script>
