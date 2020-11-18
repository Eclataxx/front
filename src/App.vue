<template>
  <div>
    <header class="text-white">
      <div id="nav" class="flex items-center justify-between p-2 bg-gray-900 ">
        <router-link to="/" class="text-2xl">Eclatax</router-link>
        <SearchBar />
        <div>
          <router-link to="/cart" class="mr-4">Cart</router-link>
          <router-link to="/about">About</router-link>
        </div>
      </div>
      <div class="p-1 bg-gray-800 flex justify-center">
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
    <router-view />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import SearchBar from '@/components/SearchBar.vue';

@Options({
  components: {
    SearchBar,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a:hover {
  color: #ecc94b !important;
  transition: all .3s;
}
</style>
