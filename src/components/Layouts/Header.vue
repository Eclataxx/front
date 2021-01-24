<template>
  <header class="text-white" onresize="resizeHandler()">
    <div
      id="nav"
      class="fixed w-full flex flex-col items-start px-2 bg-gray-900 z-20"
    >
      <div class="flex items-center justify-between w-full">
        <div class="flex">
          <img
            id="burger-icon"
            src="/images/menu.svg"
            class="block lg:hidden cursor-pointer mr-2"
            @click="triggerSideMenu"
          />
          <router-link to="/" class="text-xl lg:text-2xl hover:text-yellow-400">
            Eclatax
          </router-link>
        </div>
        <SearchBar id="search-bar" class="hidden lg:block p-2" style="width: 720px" />
        <div class="flex items-center">
          <img
            id="search-trigger"
            src="/images/search.svg"
            class="block lg:hidden cursor-pointer mr-2"
            @click="showSearchBar"
          />
          <div v-if="user" class="relative flex items-center mr-2 lg:mr-4">
            <div class="flex items-center w-full dropdown-trigger cursor-pointer py-3">
              <img src="/images/justin.png" width="32" class="rounded-full mr-2"/>
              <span>{{ user.email }}</span>
              <Dropdown :user="user" style="top: 3.5rem; left: 0" />
            </div>
          </div>
          <router-link v-if="!user" to="/sign-in" class="mr-2 lg:mr-4 py-4">
            <span class="hidden lg:block">Sign In</span>
            <img class="block lg:hidden" src="/images/account_circle.svg" />
          </router-link>
        </div>
      </div>
      <SearchBar
        id="responsive-search"
        placeholder="Rechercher un produit..."
        class="hidden lg:hidden mt-1 px-2 py-1 w-full mb-2"
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
          class="w-full lg:w-auto hover:text-yellow-400 border-b lg:border-b-0 py-2 border-gray-800
          lg:py-0 px-8 hover:bg-gray-800 transition duration-300"
          >MacBook</router-link
        >
        <router-link
          to="/search?q=iphone"
          class="w-full lg:w-auto border-b lg:border-b-0 py-2 border-gray-800
          lg:py-0 px-8 hover:bg-gray-800 transition duration-300 hover:text-yellow-400"
          >iPhone</router-link
        >
        <router-link
          to="/search?q=ipad"
          class="w-full lg:w-auto border-b lg:border-b-0 py-2 border-gray-800
          lg:py-0 px-8 hover:bg-gray-800 transition duration-300 hover:text-yellow-400"
          >iPad</router-link
        >
        <router-link
          to="/search?q=imac"
          class="w-full lg:w-auto border-b lg:border-b-0 py-2 hover:text-yellow-400
          border-gray-800 lg:py-0 px-8 hover:bg-gray-800 transition duration-300"
          >iMac</router-link
        >
        <router-link
          to="/search?q=computers"
          class="w-full lg:w-auto border-b lg:border-b-0 py-2 hover:text-yellow-400
          border-gray-800 lg:py-0 px-8 hover:bg-gray-800 transition duration-300"
        >
          Computers
        </router-link>
        <router-link
          to="/search?q=phones"
          class="w-full lg:w-auto border-b lg:border-b-0 py-2 hover:text-yellow-400
          border-gray-800 lg:py-0 px-8 hover:bg-gray-800 transition duration-300"
          >Phones</router-link
        >
        <router-link
          to="/search?q=tv"
          class="w-full lg:w-auto border-b lg:border-b-0 py-2 hover:text-yellow-400
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
import SearchBar from '../SearchBar.vue';
import Dropdown from './Dropdown.vue';

@Options({
  components: {
    SearchBar,
    Dropdown,
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
  watch: {
    $route(to, from) {
      const { q: name } = this.$route.query;
      if ((name && typeof name === 'string') || name === undefined) {
        const searchBar = document.getElementById('search-bar') as HTMLInputElement;
        const responsiveSearch = document.getElementById('responsive-search') as HTMLInputElement;

        searchBar.value = name || '';
        responsiveSearch.value = name || '';
      }
    },
  },
})
export default class Header extends Vue {
  mounted(): void {
    const { q: name } = this.$route.query;
    if (name && typeof name === 'string') {
      const searchBar = document.getElementById('search-bar') as HTMLInputElement;
      const responsiveSearch = document.getElementById('responsive-search') as HTMLInputElement;

      searchBar.value = name;
      responsiveSearch.value = name;
    }
  }

  showSearchBar(): boolean {
    const searchBar = document.getElementById(
      'responsive-search',
    ) as HTMLElement;
    const isHidden = Object.values(searchBar.classList).includes('hidden');
    const sideMenu = document.getElementById('side-menu') as HTMLElement;

    if (!isHidden) {
      searchBar.classList.add('hidden');
      sideMenu.style.marginTop = '56px';
      return true;
    }

    searchBar.classList.remove('hidden');
    sideMenu.style.marginTop = '100px';
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
  transition: all 0.3s;
}

#side-menu {
  margin-top: 56px;
}

// lg
@media (min-width: 1024px) {
  #side-menu {
    padding-top: 56px;
    margin-top: 0px;
  }
}
</style>
