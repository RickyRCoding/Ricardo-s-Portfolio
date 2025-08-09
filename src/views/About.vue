<template>
  <h1>About</h1>
  <p>I was born in Dubai in 2012. Now, I live in Ontario, Canada with my family. I am a
    <i>mini</i> software developer and especially good at front end development.
    I also play music and like learning new things.
  </p>
  <p>I love coding, music, and biking and I enjoy playing with skill toys.</p>
  <div class="carousel-container">
    <div class="carousel-track" :style="trackStyle">
      <div v-for="(image, index) in slides" :key="index" class="carousel-slide">
        <img :src="image" class="carousel-image" />
      </div>
    </div>
    <button @click="prevSlide" class="carousel-btn prev-btn">
      &lt;
    </button>
    <button @click="nextSlide" class="carousel-btn next-btn">
      &gt;
    </button>
    <div class="pagination">
      <span v-for="(slide, index) in slides" :key="index" @click="goToSlide(index)"
        :class="{ 'active': index === currentSlideIndex }" class="dot"></span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const slides = ref([
  '/images/carousel-image-1.jpg',
  '/images/carousel-image-2.jpg',
  '/images/carousel-image-3.jpg',
  '/images/carousel-image-4.jpg',
]);

const currentSlideIndex = ref(0);
let intervalId = null;

const trackStyle = computed(() => {
  return {
    transform: `translateX(-${currentSlideIndex.value * 100}%)`
  };
});

const nextSlide = () => {
  currentSlideIndex.value = (currentSlideIndex.value + 1) % slides.value.length;
};

const prevSlide = () => {
  currentSlideIndex.value = (currentSlideIndex.value - 1 + slides.value.length) % slides.value.length;
};

const goToSlide = (index) => {
  currentSlideIndex.value = index;
};

const startAutoSlide = () => {
  intervalId = setInterval(nextSlide, 5000);
};

onMounted(() => {
  startAutoSlide();
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<style lang="css" scoped>
h1 {
  text-align: center;
}

p {
  font-size: 1.2rem;
  max-width: 50%;
  margin: 1rem auto;
  text-align: center;
}

.carousel-container {
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 8px;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease;


}

.carousel-slide {
  flex: 0 0 100%;


}

.carousel-image {

  width: 100%;
  height: auto;
  display: block;
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.812);
  color: white;
  border: none;
  cursor: pointer;
  z-index: 10;
  /* New styles for circular buttons */
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  line-height: 1;
}

.prev-btn {
  left: 10px;
}

.next-btn {
  right: 10px;
}

.pagination {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
}

.dot {
  width: 10px;
  height: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.dot.active {
  background-color: #fff;
}
</style>