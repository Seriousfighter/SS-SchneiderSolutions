<script setup lang="ts">
import { computed, watchEffect } from 'vue'

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

// Convert the data object to a JSON string
const jsonString = computed(() => JSON.stringify(props.data))

// Use useHead to inject the script tag into the document head
watchEffect(() => {
  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: jsonString.value
      }
    ]
  })
})
</script>

<template>
  <!-- Empty template, as we're injecting to head -->
</template>