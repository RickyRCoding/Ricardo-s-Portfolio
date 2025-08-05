import { createRouter, createWebHistory } from 'vue-router'

// Import the views for the routes
import Home from '@/views/Home.vue'
import Skills from '@/views/Skills.vue'
import Projects from '@/views/Projects.vue'
import About from '@/views/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // Define the routes for the application
  routes: [
    { path: '/', name: "home", component: Home },
    { path: '/about', name: "about", component: About },
    { path: '/skills', name: "skills", component: Skills },
    { path: '/projects', name: "projects", component: Projects },
  ],
})

export default router
