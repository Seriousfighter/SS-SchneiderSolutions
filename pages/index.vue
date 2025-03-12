<template>
  <div class="w-full bg-gray-900 min-h-[200vh]">
    <hero />
    <weDoPortfolio /> 
    <cta />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';


// Reference to the hero component to access its isScrolled state
const heroComponent = ref(null);

// You can use the hero's isScrolled value if needed
onMounted(() => {
  // Example: You can watch for scroll changes to do additional effects
  /*
  watch(() => heroComponent.value?.isScrolled, (newValue) => {
    if (newValue) {
      console.log('User has scrolled down, hero is now in expanded mode');
      // Do something when user scrolls
    }
  });
  */
});
</script>