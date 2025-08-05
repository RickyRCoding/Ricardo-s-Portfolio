<template>
  <nav>
    <router-link :to="{ name: 'home' }" class="main kumar router-link">Ricardo Rizk</router-link>
    <router-link :to="{ name: 'about' }" class="router-link">About</router-link>
    <router-link :to="{ name: 'skills' }" class="router-link">Skills</router-link>
    <router-link :to="{ name: 'projects' }" class="router-link">Projects</router-link>
    <div class="split">
      <p>Image1</p>
      <p>Image2</p>
      <p>Image3</p>
      <p>Image4</p>
    </div>
  </nav>
</template>

<script setup>

</script>

<style scoped>
nav {
  background-color: white;
  overflow: hidden;
  display: flex;
  align-items: center;
  height: 10vh;
  box-sizing: border-box;
  padding: 0 3rem;
  margin: 0;
  color: black;
}

nav .main {
  font-size: 2rem !important;
  font-weight: bold;
  padding: 0.9rem 1rem;
  color: black;
  text-decoration: none;
}

nav .router-link {
  color: black;
  text-align: center;
  padding: 0.9rem 1rem;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  transition: 0.5s;
}

nav .router-link:hover {
  background-color: #ddd;
  color: black;
  border-radius: 0.5rem;
}

nav .main:hover {
  background-color: white;
  color: black;
  border-radius: 0rem;
}

nav .split {
  margin-left: auto;
  display: flex;
  gap: 1rem;
  color: black;
}
</style>