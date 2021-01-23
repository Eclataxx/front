<template>
  <header class="text-white" onresize="resizeHandler()">
    <div
      id="nav"
      class="fixed w-full flex flex-col items-start p-2 bg-gray-900 z-20"
    >
      <div class="flex items-center justify-between w-full">
        <div class="flex">
          <img
            id="burger-icon"
            src="images/menu.svg"
            class="block lg:hidden cursor-pointer mr-2"
            @click="triggerSideMenu"
          />
          <router-link to="/" class="text-xl lg:text-2xl">Eclatax</router-link>
        </div>
        <SearchBar class="hidden lg:block p-2" style="width: 720px" />
        <div class="flex items-center">
          <img
            id="search-trigger"
            src="images/search.svg"
            class="block lg:hidden cursor-pointer mr-2"
            @click="showSearchBar"
          />
          <div v-if="user" class="flex items-center mr-2 lg:mr-4">
            <img src="images/justin.png" width="32" class="rounded-full mr-2"/>
            <span class="hidden lg:block">{{ user.email }}</span>
          </div>
          <router-link v-if="user" to="/orders" class="mr-2 lg:mr-4">
            <span class="hidden lg:block">Orders</span>
            <img class="block lg:hidden" src="images/shopping_bag.svg">
          </router-link>
          <router-link v-if="!user" to="/sign-in" class="mr-2 lg:mr-4">
            <span class="hidden lg:block">Sign In</span>
            <img class="block lg:hidden" src="images/account_circle.svg" />
          </router-link>
          <router-link v-if="user" to="/cart" class="mr-2 lg:mr-4">
            <span class="hidden lg:block">Cart</span>
            <img class="block lg:hidden" src="images/shopping_cart.svg" />
          </router-link>
          <router-link v-if="user && user.roles.includes('ROLE_ADMIN')"
          to="/admin/dashboard" class="mr-2 lg:mr-4">
            <span class="hidden lg:block">Dashboard</span>
            <img class="block lg:hidden" src="images/shopping_cart.svg" />
          </router-link>
          <div v-if="user" @click="logout"
          class="mr-2 lg:mr-4 cursor-pointer hover:text-yellow-400">
            <span class="hidden lg:block">Logout</span>
            <img class="block lg:hidden" src="images/exit.svg" />
          </div>
        </div>
      </div>
      <SearchBar
        id="responsive-search"
        placeholder="Rechercher un produit..."
        class="hidden lg:hidden mt-1 px-2 py-1 w-full"
      />
    </div>
    <div
      id="side-menu"
      @click="triggerSideMenu"
      class="hidden z-10 absolute lg:static h-full lg:h-auto w-full
      lg:w-auto bg-black lg:bg-opacity-0 bg-opacity-50 flex lg:block"
    >
      <div
        class="p-0 lg:p-1 bg-gray-900 lg:bg-gray-800 flex justify-start
        lg:justify-center flex-col lg:flex-row lg:static items-start
        lg:items-center text-left lg:text-center h-full"
      >
        <router-link
          to="/search?q=macbook"
          class="w-full lg:w-auto border-b lg:border-b-0 py-2 border-gray-800
          lg:py-0 px-8 hover:bg-gray-800 transition duration-300"
          >MacBook</router-link
        >
        <router-link
          to="/search?q=iphone"
          class="w-full lg:w-auto border-b lg:border-b-0 py-2 border-gray-800
          lg:py-0 px-8 hover:bg-gray-800 transition duration-300"
          >iPhone</router-link
        >
        <router-link
          to="/search?q=ipad"
          class="w-full lg:w-auto border-b lg:border-b-0 py-2 border-gray-800
          lg:py-0 px-8 hover:bg-gray-800 transition duration-300"
          >iPad</router-link
        >
        <router-link
          to="/search?q=imac"
          class="w-full lg:w-auto border-b lg:border-b-0 py-2
          border-gray-800 lg:py-0 px-8 hover:bg-gray-800 transition duration-300"
          >iMac</router-link
        >
        <router-link
          to="/search?q=computers%20and%20laptops"
          class="w-full lg:w-auto border-b lg:border-b-0 py-2
          border-gray-800 lg:py-0 px-8 hover:bg-gray-800 transition duration-300"
        >
          Computers & Laptops
        </router-link>
        <router-link
          to="/search?q=phones"
          class="w-full lg:w-auto border-b lg:border-b-0 py-2
          border-gray-800 lg:py-0 px-8 hover:bg-gray-800 transition duration-300"
          >Phones</router-link
        >
        <router-link
          to="/search?q=tv"
          class="w-full lg:w-auto border-b lg:border-b-0 py-2
          border-gray-800 lg:py-0 px-8 hover:bg-gray-800 transition duration-300"
          >TV</router-link
        >
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { mapGetters } from 'vuex';
import * as axiosService from '../../services/axiosMethods';
import SearchBar from '../SearchBar.vue';
import { UserModel } from '../../models';

@Options({
  components: {
    SearchBar,
  },
  beforeMount() {
    window.addEventListener('resize', this.resizeHandler);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.resizeHandler);
  },
  computed: {
    ...mapGetters(['user']),
  },
})
export default class Header extends Vue {
  logout(): void {
    localStorage.removeItem('jwt');
    this.$store.dispatch('user', null);
    this.$router.push('/');
  }

  showSearchBar(): boolean {
    const searchBar = document.getElementById(
      'responsive-search',
    ) as HTMLElement;
    const isHidden = Object.values(searchBar.classList).includes('hidden');
    const sideMenu = document.getElementById('side-menu') as HTMLElement;

    if (!isHidden) {
      searchBar.classList.add('hidden');
      sideMenu.style.marginTop = '46px';
      return true;
    }

    searchBar.classList.remove('hidden');
    sideMenu.style.marginTop = '82px';
    return false;
  }

  resizeHandler(event: Event) {
    const sideMenu = document.getElementById('side-menu') as HTMLElement;
    const searchBar = document.getElementById(
      'responsive-search',
    ) as HTMLElement;
    const { marginTop } = sideMenu.style;

    if (window.innerWidth > 1024 && marginTop !== '') {
      sideMenu.style.marginTop = '';
      searchBar.classList.add('hidden');
      this.triggerSideMenu(event);
    }
  }

  triggerSideMenu(event: Event): boolean {
    if (window.innerWidth <= 1024) {
      const sideMenu = document.getElementById('side-menu') as HTMLElement;
      const isHidden = Object.values(sideMenu.classList).includes('hidden');
      const icon = document.getElementById('burger-icon') as HTMLImageElement;
      const html = document.querySelector('html') as HTMLElement;

      if (!isHidden) {
        sideMenu.classList.add('hidden');
        html.style.overflow = 'auto';
        icon.src = 'images/menu.svg';
        return true;
      }

      sideMenu.classList.remove('hidden');
      html.style.overflow = 'hidden';
      icon.src = 'images/menu_open.svg';
      return false;
    }
    return false;
  }
}
</script>

<style lang="scss" scoped>
a:hover {
  color: #ecc94b !important;
  transition: all 0.3s;
}

#side-menu {
  margin-top: 46px;
}

// lg
@media (min-width: 1024px) {
  #side-menu {
    padding-top: 56px;
    margin-top: 0px;
  }
}
</style>
