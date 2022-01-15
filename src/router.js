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
    },
    {
      path: "/css",
      name: "css",
      component: () => import("./components/css/test.vue")
    },
    {
      path: "/animate",
      name: "animate",
      component: () => import("./components/animate.css.vue")
    },
    {
      path: "/intersectionobs",
      name: "intersection",
      component: () => import("./components/IntersectionObserver.vue")
    }
  ]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router;