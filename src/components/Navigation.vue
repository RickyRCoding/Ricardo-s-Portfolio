<template>
  <nav>
    <router-link :to="{ name: 'home' }" class="main kumar router-link">Ricardo Rizk</router-link>

    <div class="desktop-nav">
      <router-link :to="{ name: 'about' }" class="router-link">About</router-link>
      <router-link :to="{ name: 'skills' }" class="router-link">Skills</router-link>
      <router-link :to="{ name: 'projects' }" class="router-link">Projects</router-link>
      <div class="split contacts">
        <a href="https://github.com/RickyRCoding" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <img src="/images/github.png" alt="GitHub" style="width:40px; height:40px;">
        </a>
      </div>
    </div>

    <button class="hamburger" @click="toggleMobileMenu" :class="{ 'is-active': isMobileMenuOpen }" aria-label="menu"
      aria-controls="mobile-nav" :aria-expanded="isMobileMenuOpen">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <div class="mobile-nav" :class="{ 'is-active': isMobileMenuOpen }" id="mobile-nav">
      <router-link :to="{ name: 'about' }" class="router-link" @click="closeMobileMenu">About</router-link>
      <router-link :to="{ name: 'skills' }" class="router-link" @click="closeMobileMenu">Skills</router-link>
      <router-link :to="{ name: 'projects' }" class="router-link" @click="closeMobileMenu">Projects</router-link>
      <div class="contacts-mobile">
        <a href="https://github.com/RickyRCoding" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <img src="/images/github.png" alt="GitHub" style="width:24px; height:24px;">
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, watch } from 'vue';

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
}

// Watch for changes in isMobileMenuOpen and toggle a class on the body
watch(isMobileMenuOpen, (isOpen) => {
  if (isOpen) {
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll');
  }
});
</script>

<style>
body.no-scroll {
  overflow: hidden;
}
</style>

<style scoped>
nav {
  background-color: white;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  box-sizing: border-box;
  padding: 0 3rem;
  margin: 0;
  color: black;
  position: relative;
}

.desktop-nav {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

nav .main {
  font-size: 2rem !important;
  font-weight: bold;
  padding: 0.9rem 1rem;
  color: black;
  text-decoration: none;
  flex-shrink: 0;
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
  border-radius: 0.5rem;
  transition: background-color 0.3s, color 0.3s;
}

nav .router-link:hover {
  background-color: #ddd;
  color: black;
  border-radius: 0.5rem;
}

nav .main:hover {
  background-color: transparent;
  border-radius: 0;
}

nav .split {
  display: flex;
  gap: 1rem;
  color: black;
  margin-left: 2rem;
}

/* Style the contact links to vertically align the image */
.contacts a {
  display: flex;
  align-items: center;
  /* Vertically center content */
}

.contacts-mobile a {
  display: flex;
  align-items: center;
  /* Vertically center content */
}

.hamburger,
.mobile-nav {
  display: none;
}

@media (max-width: 850px) {
  nav {
    padding: 0 1.5rem;
  }

  .desktop-nav {
    display: none;
  }

  .hamburger {
    display: block;
    position: relative;
    z-index: 1001;
    background: none;
    border: none;
    cursor: pointer;
    padding: 10px;
  }

  .hamburger span {
    display: block;
    width: 30px;
    height: 3px;
    background-color: black;
    margin: 6px 0;
    transition: all 0.3s ease-in-out;
  }

  .hamburger.is-active span:nth-child(1) {
    transform: translateY(9px) rotate(45deg);
  }

  .hamburger.is-active span:nth-child(2) {
    opacity: 0;
  }

  .hamburger.is-active span:nth-child(3) {
    transform: translateY(-9px) rotate(-45deg);
  }

  .mobile-nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    position: fixed;
    top: 0;
    left: 100%;
    width: 100%;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(5px);
    transition: left 0.3s ease-in-out;
    z-index: 1000;
  }

  .mobile-nav.is-active {
    left: 0;
  }

  .mobile-nav .router-link {
    font-size: 2rem;
  }

  .contacts-mobile {
    display: flex;
    gap: 1.5rem;
    margin-top: 2rem;
  }

  .contacts a,
  .contacts-mobile a {
    color: black;
    text-decoration: none;
  }
}
</style>