<template>
  <div class="container">
    <h1>Skills</h1>

    <div class="section">
      <div class="image-placeholder-left">
        <img src="/images/skills-coding.jpg" alt="Coding">
      </div>
      <div class="text-content">
        <h2>Coding</h2>
        <p>I love creating interactive web applications with JavaScript and Vue.js. My coding journey began at
          age six when my father gave me a book on Python. I quickly got the hang of it, but the console's user
          interface soon grew boring. This inspired me to learn Dart and the Flutter framework for mobile app
          development. From there, I moved on to the basics of web development and SQL. Today, I'm skilled at
          building front-end websites using modern frameworks such as Vue, React, Next.js, and Nuxt.js.
        </p>
      </div>
    </div>

    <hr>

    <div class="section reverse">
      <div class="image-placeholder-right">
        <img src="/images/skills-music.jpg" alt="Music">
      </div>
      <div class="text-content">
        <h2>Music</h2>
        <p>My passion for music was ignited by my dad when I was eight. I began with the Royal Conservatory of Music
          (RCM) books, working diligently until I reached Level 8. Since then, I've preferred to learn songs on my
          own, driven by my personal taste in music. This self-directed approach has helped me grow in my world of
          music. I’ve been fortunate enough to showcase my skills at several events, performing for talent shows, plays,
          and other school functions.</p>
      </div>
    </div>

    <hr>

    <div class="section">
      <div class="image-placeholder-left">
        <img src="/images/skills-maths.jpg" alt="Maths">
      </div>
      <div class="text-content">
        <h2>Maths</h2>
        <p>Maths has always been an important thing to keep up with. I've gone beyond what I learn in school, as my dad
          has taught me more advanced topics like algebra, geometry, and a little trigonometry. I find these subjects
          fascinating and they help me with a lot of my other interests, like coding and problem-solving.</p>
      </div>
    </div>

    <hr>

    <div class="section reverse">
      <div class="image-placeholder-right">
        <img class="half-left" src="/images/skills-skill-toys.jpg" alt="Skill Toys">
        <img class="half-right" src="/images/skills-sports.jpg" alt="Sports">
      </div>
      <div class="text-content">
        <h2>Other</h2>
        <p>I am a fast and dedicated learner, which is clear in how I've mastered a variety of skills, from sports to
          skill toys. I've advanced my swimming abilities, perfected biking tricks, and even taught myself complex yo-yo
          and slinky manipulation tricks. My passion for taking on new challenges and my commitment to practice allows
          me to quickly develop in any new activity I pursue.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="css" scoped>
.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

h1 {
  text-align: center;
  margin-bottom: 40px;
}

.section {
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 40px;
  text-align: left;
}

.section.reverse {
  flex-direction: row-reverse;
  text-align: right;
}

.text-content {
  flex: 1;
}

.image-placeholder-left,
.image-placeholder-right {
  flex-shrink: 0;
  width: 400px;
  height: 400px;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  gap: 10px;
}

.image-placeholder-left img,
.image-placeholder-right img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.image-placeholder-right .half-left,
.image-placeholder-right .half-right {
  width: 50%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

h2 {
  margin-top: 0;
}

p {
  line-height: 1.6;
}

hr {
  border: none;
  height: 1px;
  background-color: #e0e0e0;
  margin: 40px 0;
}



@media (max-width: 768px) {

  .section,
  .section.reverse {
    flex-direction: column;
    text-align: center;
  }

  .image-placeholder-left,
  .image-placeholder-right {
    margin-bottom: 20px;
  }
}
</style>