<template>
  <div class="home-container">
    <img src="/public/images/home.jpg" alt="Ricardo" class="hero-image" />
    <div class="text-content">
      <h1>Hi! I'm Ricardo!</h1>
      <p>
        Hello! I'm Ricardo, and I'm passionate about building, creating and learning. I
        enjoy diving into the world of coding and bringing websites to life.
        When I'm not on the computer, you'll find ame learning new things, like
        playing the piano and exploring new songs. I also love skill toys,
        practicing tricks with my yo-yo and creating shapes with a slinky. To
        add, I like biking and scootering at the park. I'm always eager to
        learn and take on new challenges, both on and offline.
      </p>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
* {
  font-family: "Pridi", serif;
}

.home-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* Changed to center items vertically */
  min-height: calc(100vh - 15vh);
  padding: 2rem;
  font-family: sans-serif;
  box-sizing: border-box;
}

.hero-image {
  width: 40%;
  max-width: 500px;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-right: 2rem;
  object-fit: cover;
  height: 100%;
}

.text-content {
  width: 40%;
  max-width: 800px;
  text-align: left;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
}

p {
  font-size: 1.2rem;
  line-height: 1.5;
  color: #555;
  margin-bottom: 0.5rem;
}
</style>