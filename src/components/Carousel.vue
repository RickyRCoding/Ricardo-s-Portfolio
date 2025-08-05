<template>
  <div class="carousel">
    <slot :currentSlide="currentSlide" />
    <div class="pagination">
      <span v-for="index in totalSlides" :key="index" :class="{ active: currentSlide === index - 1 }"></span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const currentSlide = ref(0);
const totalSlides = ref(0);

onMounted(() => {
  // Get the number of slides from the default slot content
  const slides = document.querySelectorAll('.slide-info');
  totalSlides.value = slides.length;
  startAutoplay();
});

const startAutoplay = () => {
  setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % totalSlides.value;
  }, 5000); // Change slide every 4 seconds
};
</script>

<style scoped>
.carousel {
  position: relative;
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.pagination span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  margin: 0 5px;
  background-color: #ddd;
  aspect-ratio: 1/1;
  display: inline-block;
  /* Ensure perfect circle */
}

.pagination span.active {
  background-color: #333;
}
</style>