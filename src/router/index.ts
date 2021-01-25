import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import * as axiosService from '../services/axiosMethods';
import store from '../store';
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
import { UserModel } from '../models';

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
    meta: { requiresAuth: true, role: 'ROLE_USER' },
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
    meta: { requiresAuth: true, role: 'ROLE_USER' },
  },
  {
    path: '/sign-in',
    components: {
      default: SignIn,
      header: Header,
      footer: Footer,
    },
    meta: { signPage: true },
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    components: {
      default: SignUp,
      header: Header,
      footer: Footer,
    },
    meta: { signPage: true },
  },
  {
    path: '/store',
    name: 'Store',
    components: {
      default: Store,
      header: DashboardHeader,
      footer: DashboardFooter,
    },
    meta: { requiresAuth: true, role: 'ROLE_SELLER' },
  },
  {
    path: '/admin/dashboard',
    name: 'Dashboard',
    components: {
      default: Dashboard,
      header: DashboardHeader,
      footer: DashboardFooter,
    },
    meta: { requiresAuth: true, role: 'ROLE_ADMIN' },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const jwt = localStorage.getItem('jwt');
  let userData: UserModel | null = null;
  if (jwt) {
    const response = await axiosService.whoIsLoggedIn();
    if (!response) {
      next({ path: '/' });
    } else {
      userData = response.data;
      store.dispatch('user', userData);
    }
  }

  if (to.matched.some((route) => route.meta.requiresAuth) && !jwt) {
    next({ path: '/sign-in' });
  } else if (jwt && to.matched.some((route) => route.meta.signPage)) {
    next({ path: '/' });
  } else if (to.matched.some((route) => route.meta.requiresAuth) && jwt) {
    const isAllowed = to.matched.some((route) => {
      if (userData && userData.roles.includes(route.meta.role)) {
        return true;
      }
      return false;
    });

    if (isAllowed) {
      next();
    } else {
      next({ path: '/' });
    }
  } else {
    next();
  }
});

export default router;
