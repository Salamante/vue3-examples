import { createRouter, createWebHistory } from 'vue-router'


const routes = [
    {
      path: "/",
      name: "root",
      component: () => import("./pages/examples.vue")
    },
    {
      path: "/smooth-scroll",
      name: "scroll",
      component: () => import("./components/smoothScroll.vue")
    }
  ]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router;