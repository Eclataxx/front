<template>
  <header class="text-white">
    <div id="nav" class="fixed w-full flex items-center justify-between p-2 bg-gray-900">
      <router-link to="/" class="text-2xl">Eclatax</router-link>
      <SearchBar />
      <div>
        <router-link to="/sign-in" class="mr-4">
          Sign In
        </router-link>
        <router-link to="/cart" class="mr-4">Cart</router-link>
      </div>
    </div>
    <div class="p-1 bg-gray-800 flex justify-center" style="padding-top: 60px;">
      <router-link to="/search?q=macbook" class="px-8">MacBook</router-link>
      <router-link to="/search?q=iphone" class="px-8">iPhone</router-link>
      <router-link to="/search?q=ipad" class="px-8">iPad</router-link>
      <router-link to="/search?q=imac" class="px-8">iMac</router-link>
      <router-link to="/search?q=computers_and_laptops" class="px-8">
        Computers & Laptops
      </router-link>
      <router-link to="/search?q=phones" class="px-8">Phones</router-link>
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

export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
  a:hover {
    color: #ecc94b !important;
    transition: all .3s;
  }
</style>
