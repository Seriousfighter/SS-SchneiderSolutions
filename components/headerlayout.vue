<template>
  <div>
    <div>
      <h1>SS-SCHNEIDER SERVICES</h1>
    </div>
    <div>
      <nav>
        <navLink :page="home">Home</navLink>
        <navLink :page="about">About</navLink>
        <navLink :page="services">Services</navLink>
        <navLink :page="contact">Contact</navLink>
      </nav>
    </div>
  </div>
</template>

<script lang="ts" setup>
// Define the page routes
const home = "/"
const about = "/about"
const services = "/services"
const contact = "/contact"
</script>

<style>

</style>