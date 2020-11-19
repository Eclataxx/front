import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Cart from '../views/Cart.vue';
import Search from '../views/Search.vue';
import Product from '../views/Product.vue';
import SignIn from '../views/SignIn.vue';
import SignUp from '../views/SignUp.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
  },
  {
    path: '/product',
    name: 'Product',
    component: Product,
  },
  {
    path: '/sign-in',
    name: 'SignIn',
    component: SignIn,
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
