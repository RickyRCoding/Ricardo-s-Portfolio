<template>
  <h1>About</h1>
  <p>I was born in Dubai in 2012. Now, I live in Ontario, Canada with my family. I am a
    <i>mini</i> software developer and especially good at front end development. I also play music and like learning new
    things.
  </p>
  <p>I love coding, music, and biking and I enjoy playing with skill toys.</p>
  <div class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(img, index) in carouselImages" :key="index">
        <img :src="`/${img}`" alt="Carousel Image" />
      </div>
    </div>
    <div class="swiper-pagination"></div>

    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <div class="swiper-scrollbar"></div>
  </div>

</template>

<script setup>
import Swiper from 'swiper';
import 'swiper/css';

const carouselImages = [
  "image-c-1.jpg",
  "image-c-2.jpg",
  "image-c-3.jpg",
]

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
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

.swiper img {

  width: 40%;
  height: auto;
}
</style>