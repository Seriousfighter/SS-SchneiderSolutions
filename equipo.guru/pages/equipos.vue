<template>
  <section class="pt-4 text-center">
    <h2 class="text-white-guru text-[64px] mt-20">Equipos</h2>
    <div class="text-white-guru text-[18px] mb-[-50px]">
      <button
        class="mx-2 backdrop-blur-md p-2 hover:text-green-guru rounded-full hover:bg-grey-shades-20"
        :class="{
          'bg-grey-shades-6  text-green-guru': activeTeam !== 'frontend',
          'bg-grey-shades-20': activeTeam === 'frontend'
        }"
        @click="showTeam('frontend')"
      >
        Frontend
      </button>
      <button
        class="mx-2 backdrop-blur-md p-2 hover:text-green-guru rounded-full hover:bg-grey-shades-20"
        :class="{
          'bg-grey-shades-6 text-green-guru': activeTeam !== 'backend',
          'bg-grey-shades-20': activeTeam === 'backend'
        }"
        @click="showTeam('backend')"
      >
        Backend
      </button>
      <button
        class="mx-2 backdrop-blur-md p-2 hover:text-green-guru rounded-full hover:bg-grey-shades-20"
        :class="{
          'bg-grey-shades-6 text-green-guru': activeTeam !== 'design',
          'bg-grey-shades-20': activeTeam === 'design'
        }"
        @click="showTeam('design')"
      >
        Diseño
      </button>
      <button
        class="mx-2 backdrop-blur-md p-2 hover:text-green-guru rounded-full hover:bg-grey-shades-20"
        :class="{
          'bg-grey-shades-6 text-green-guru': activeTeam !== 'support',
          'bg-grey-shades-20': activeTeam === 'support'
        }"
        @click="showTeam('support')"
      >
        Soporte
      </button>
    </div>
  </section>
  <div :class="{ hidden: activeTeam !== 'frontend' }">
    <frontendTeam />
  </div>
  <div :class="{ hidden: activeTeam !== 'backend' }">
    <backendTeam />
  </div>
  <div :class="{ hidden: activeTeam !== 'design' }">
    <desingTeam />
  </div>
  <div :class="{ hidden: activeTeam !== 'support' }">
    <supportTeam />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import frontendTeam from '~/components/frontendTeam.vue';
import backendTeam from '~/components/backendTeam.vue';
import desingTeam from '~/components/desingTeam.vue';
import supportTeam from '~/components/supportTeam.vue';  // Make sure this import exists

// Get the team from URL query parameter
const route = useRoute();
const activeTeam = ref('frontend');

onMounted(() => {
  const teamParam = route.query.team as string;
  if (teamParam && ['frontend', 'backend', 'design', 'support'].includes(teamParam)) {
    activeTeam.value = teamParam;
  }
});

const showTeam = (team: string) => {
  activeTeam.value = team;
};
</script>