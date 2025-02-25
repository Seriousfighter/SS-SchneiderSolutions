<template>
    <nuxt-link 
        :to="to"
        :class="[
            'transition-all duration-200 mx-2 px-3 py-2 rounded-[25px]',
            isIndex 
                ? [
                    'md:text-white-guru md:hover:bg-black-guru md:hover:text-white-guru text-green-guru hover:bg-grey-shades-15 hover:text-white-guru',
                    isActive && (isMobile ? 'bg-grey-shades-15 text-white-guru' : 'bg-black-guru text-white-guru')
                  ]
                : [
                    'text-green-guru hover:bg-grey-shades-15 hover:text-white-guru',
                    isActive && 'bg-grey-shades-15 text-white-guru'
                  ]
        ]"
    >
        <slot></slot>
    </nuxt-link>
</template>

<script setup lang="ts">
interface Props {
    to: string
}

const props = defineProps<Props>()
const route = useRoute()
const isIndex = computed(() => route.path === '/')
const isActive = computed(() => route.path === props.to)
const isMobile = ref(false)

onMounted(() => {
    // Set initial value after component is mounted
    isMobile.value = window.innerWidth < 768
    
    // Add resize listener
    const handleResize = () => {
        isMobile.value = window.innerWidth < 768
    }
    
    window.addEventListener('resize', handleResize)
    
    // Cleanup
    onUnmounted(() => {
        window.removeEventListener('resize', handleResize)
    })
})
</script>