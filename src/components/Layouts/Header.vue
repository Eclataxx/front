<template>
  <header class="text-white">
    <div
      id="nav"
      class="fixed w-full flex flex-col items-start p-2 bg-gray-900"
    >
      <div class="flex items-center justify-between w-full">
        <div class="flex">
          <img
            src="images/menu.svg"
            class="block lg:hidden cursor-pointer mr-2"
          />
          <router-link to="/" class="text-xl lg:text-2xl">Eclatax</router-link>
        </div>
        <SearchBar class="hidden lg:block p-2" style="width:800px" />
        <div class="flex">
          <img
            id="search-trigger"
            src="images/search.svg"
            class="block lg:hidden cursor-pointer"
            @click="showSearchBar"
          />
          <router-link to="/orders" class="mr-2 lg:mr-4">
            <span class="hidden lg:block">Orders</span>
            <!-- <img class="block lg:hidden" src="images/shopping_bag.svg"> -->
          </router-link>
          <router-link to="/sign-in" class="mr-2 lg:mr-4">
            <span class="hidden lg:block">Sign In</span>
            <img class="block lg:hidden" src="images/account_circle.svg" />
          </router-link>
          <router-link to="/cart" class="mr-2 lg:mr-4">
            <span class="hidden lg:block">Cart</span>
            <img class="block lg:hidden" src="images/shopping_cart.svg" />
          </router-link>
        </div>
      </div>
      <SearchBar id="responsive-search" placeholder="Rechercher un produit..."
      class="hidden mt-1 px-2 py-1 w-full" />
    </div>
    <div
      style="padding-top: 60px"
      class="p-1 bg-gray-800 flex justify-center hidden lg:block"
    >
      <router-link to="/search?q=macbook" class="px-8">MacBook</router-link>
      <router-link to="/search?q=iphone" class="px-8">iPhone</router-link>
      <router-link to="/search?q=ipad" class="px-8">iPad</router-link>
      <router-link to="/search?q=imac" class="px-8">iMac</router-link>
      <router-link to="/search?q=computers%20and%20laptops" class="px-8">
        Computers & Laptops
      </router-link>
      <router-link to="/search?q=phones" class="px-8">Phones</router-link>
      <router-link to="/search?q=tv" class="px-8">TV</router-link>
    </div>
  </header>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import SearchBar from '../SearchBar.vue';

@Options({
  components: {
    SearchBar,
  },
})
export default class Header extends Vue {
  showSearchBar(): boolean {
    const searchBar = document.getElementById('responsive-search') as HTMLElement;
    const isHidden = Object.values(searchBar.classList).includes('hidden');

    if (!isHidden) {
      searchBar.classList.add('hidden');
      return true;
    }

    searchBar.classList.remove('hidden');
    return false;
  }
}
</script>

<style lang="scss" scoped>
a:hover {
  color: #ecc94b !important;
  transition: all 0.3s;
}
</style>
