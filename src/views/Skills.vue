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
        <img src="" alt="Music">
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
        <img src="/images/skills-sports.jpg" alt="Sports">
      </div>
      <div class="text-content">
        <h2>Sports</h2>
        <p>My journey with sports keeps me active and focused. I've developed my swimming skills through the
          Lifesaving Society's Swim for Life Program, where I've reached Level 8. But my favorite sport is
          biking. I love to spend time at the park perfecting tricks and building my strength. For a different kind
          of challenge, I enjoy racquet sports like badminton.</p>
      </div>
    </div>

    <hr>

    <div class="section reverse">
      <div class="image-placeholder-right">
        <img src="/images/skills-skill-toys.jpg" alt="Skill Toys">
      </div>
      <div class="text-content">
        <h2>Skill Toys</h2>
        <p>My fascination with skill toys started with the Rubik's Cube. Once I got the hang of it, I explored a
          variety of other challenges, such as fingerboarding, fingerspinning, and handboarding. My biggest
          passion, however, grew from watching videos of incredible yo-yo tricks. I dedicated a year to yo-yoing,
          becoming quite skilled before moving on to slinky manipulation. I love the creative freedom of slinkying
          and can now perform complex tricks, including flips and twists.</p>
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
}

.image-placeholder-left img,
.image-placeholder-right img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
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