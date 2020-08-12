import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Pokemon from '../views/Pokemon.vue';
import Search from '../views/Search.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/pokemon/:id',
    name: 'Pokemon',
    component: Pokemon,
  },
  {
    path: '/search/',
    name: 'Search',
    component: Search,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
