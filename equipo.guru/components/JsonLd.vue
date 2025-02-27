<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

const jsonString = computed(() => JSON.stringify(props.data))
</script>

<template>
  <script type="application/ld+json" v-html="jsonString"></script>
</template>