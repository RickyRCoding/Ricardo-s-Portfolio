<template>
  <div class="content">
    <h3>{{ timeslot.year }}</h3>
    <h2>{{ timeslot.title }}</h2>
    <p>{{ timeslot.description }}</p>
    <div v-if="timeslot.image">
      <a :href="timeslot.link || '#'" target="_blank" rel="noopener noreferrer">
        <img :src="timeslot.image" :alt="timeslot.title" />
      </a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  timeslot: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.content {
  padding: 20px 30px;
  background-color: #ebebeb;
  position: relative;
  border-radius: 6px;
}

.content h3 {
  margin: 0 0 6px 0;
  font-size: 0.95rem;
  color: #666;
}

.content h2 {
  margin: 0 0 8px 0;
  font-size: 1.25rem;
}

.content p {
  margin: 0 0 10px 0;
  line-height: 1.45;
}

.content img {
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
  display: block;
}
</style>