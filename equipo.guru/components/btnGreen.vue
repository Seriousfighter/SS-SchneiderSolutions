<template>
  <button
    :class="[
      'font-normal border rounded-[25px] px-[20px] py-[10px] transition-all duration-200',
      color === 'green' 
        ? 'bg-green-guru text-black-guru border-green-guru hover:bg-grey-shades-15 hover:border-green-guru hover:text-white-guru' 
        : 'border-grey-shades-25 text-green-guru bg-grey-shades-12 hover:bg-grey-shades-15 hover:border-green-guru hover:text-white-guru'
    ]"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
interface Props {
  color?: 'default' | 'green'
}

withDefaults(defineProps<Props>(), {
  color: 'default'
})

defineEmits(['click'])
</script>