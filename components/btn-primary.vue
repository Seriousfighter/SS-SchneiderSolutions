<template>
  <button class="secondary-button">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>

</script>

<style>
.secondary-button {
  background-color: transparent;
  color: #E1FF2D;
  border: 2px solid #E1FF2D;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.secondary-button:hover {
  background-color: rgba(225, 255, 45, 0.1);
  transform: translateY(-3px);
}
</style>