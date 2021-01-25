import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Cart from '../views/Cart.vue';
import Search from '../views/Search.vue';
import Product from '../views/Product.vue';
import SignIn from '../views/SignIn.vue';
import SignUp from '../views/SignUp.vue';
import Orders from '../views/Orders.vue';
import Dashboard from '../views/Dashboard.vue';
import Store from '../views/Store.vue';
import Header from '../components/Layouts/Header.vue';
import Footer from '../components/Layouts/Footer.vue';
import DashboardHeader from '../components/Layouts/DashboardHeader.vue';
import DashboardFooter from '../components/Layouts/DashboardFooter.vue';
import MarketPlace from '../views/MarketPlace.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: Home,
      header: Header,
      footer: Footer,
    },
  },
  {
    path: '/cart',
    name: 'Cart',
    components: {
      default: Cart,
      header: Header,
      footer: Footer,
    },
  },
  {
    path: '/search',
    name: 'Search',
    components: {
      default: Search,
      header: Header,
      footer: Footer,
    },
  },
  {
    path: '/products/:id',
    name: 'Product',
    components: {
      default: Product,
      header: Header,
      footer: Footer,
    },
  },
  {
    path: '/orders',
    name: 'Orders',
    components: {
      default: Orders,
      header: Header,
      footer: Footer,
    },
  },
  {
    path: '/sign-in',
    components: {
      default: SignIn,
      header: Header,
      footer: Footer,
    },
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    components: {
      default: SignUp,
      header: Header,
      footer: Footer,
    },
  },
  {
    path: '/store',
    name: 'Store',
    components: {
      default: Store,
      header: DashboardHeader,
      footer: DashboardFooter,
    },
  },
  {
    path: '/admin/dashboard',
    name: 'Dashboard',
    components: {
      default: Dashboard,
      header: DashboardHeader,
      footer: DashboardFooter,
    },
  },
  {
    path: '/marketplace',
    name: 'MarketPlace',
    component: MarketPlace,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const auth = {
    isLogged: false,
  };
  console.log(to);
  if (to.matched.some((route) => route.meta.private) && auth.isLogged) {
    next({
      path: '/sign-in',
      params: {
        id: 'redirect',
      },
    });
  }
  next();
});

export default router;
