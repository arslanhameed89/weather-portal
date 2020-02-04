import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import search from "../views/search";
import details from "../views/details";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/search/:input',
    name: 'search',
    component: search
  },
  {
    path: '/weather-detail/:woeid',
    name: 'weather-detail',
    component: details
  }

]

const router = new VueRouter({
  routes
})

export default router
