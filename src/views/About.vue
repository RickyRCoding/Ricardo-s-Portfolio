<template>
  <h1>About</h1>
  <p>I was born in Dubai on the 13th of September, 2012. Now, I live in Canada with my family in Ontario. I am a
    <i>mini</i> software developer and especially good at front end development. I also write music for my Youtube
    channel and like learning new things
  </p>
  <p>I love coding, music, and biking and I enjoy playing with skill toys.</p>

  <Carousel class="carousel" v-slot="{ currentSlide }">
    <Slide v-for="(slide, index) in carouselSlides" :key="index">
      <div v-show="currentSlide === index" class="slide-info">
        <img :src="`/public/${slide}`" alt="Carousel Image" />
      </div>
    </Slide>
  </Carousel>
</template>

<script setup>
import Carousel from '@/components/Carousel.vue';
import Slide from '@/components/Slide.vue';

const carouselSlides = [
  "image-c-1.jpg",
  "image-c-2.jpg"
];
</script>

<style lang="css" scoped>
h1 {
  text-align: center;
}

p {
  font-size: 1.2rem;
  max-width: 80%;
  margin: 1rem auto;
  text-align: center;
}

.carousel {
  position: relative;
  max-width: 80%;
  margin: 2rem auto;
}

.slide-info {
  position: relative;
  width: 100%;
  top: auto;
  left: auto;
  transform: none;
  display: flex;
  justify-content: center;
}

.slide-info img {

  width: 100%;
  height: auto;
  max-height: 500px;
  object-fit: contain;
}
</style>