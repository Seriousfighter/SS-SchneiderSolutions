<template>
  <NuxtLink :to="page"
    class="transition-all duration-300 border-b-2 border-green-ss  hover:border-[#8fff2d]"
    :class="{'pulse-effect': isActive}"
    @click="handleClick">
    <slot></slot>
  </NuxtLink>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps<{
  page: string
}>()

const emit = defineEmits(['click'])

const route = useRoute()
const isActive = computed(() => {
  // Handle special case for home page
  if (props.page === '/' && route.path === '/') {
    return true
  }
  // For other pages
  return route.path === props.page
})

const handleClick = (event: MouseEvent) => {
  emit('click', event)
}
</script>

<style scoped>
.pulse-effect {
  position: relative;
  animation: pulse 2s infinite;
  font-weight: bold;
  color: #E1FF2D; /* Your green-ss color */
  text-shadow: 0 0 8px rgba(225, 255, 45, 0.5);
  border-bottom-width: 4px;
  border-color: #8fff2d;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
}
</style>