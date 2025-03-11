<template>
  <NuxtLink :to="page"
  class="
  ">
    <slot></slot>
  </NuxtLink>
</template>

<script lang="ts" setup>
  const props = defineProps<{
    page: string
  }>()
</script>

<style>

</style>