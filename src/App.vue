<script setup>
import Navigation from './components/Navigation.vue'
</script>

<template>
  <Navigation />
  <router-view />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kumar+One+Outline&family=Pridi:wght@200;300;400;500;600;700&display=swap');

html,
body {
  margin: 0;
  padding: 0;
  font-family: "Pridi", serif;
}


.kumar {
  font-family: "Kumar One Outline", cursive;
}
</style>
