<template>
  <div class="h-full">
    <Header />
    <main class="container mx-auto"><router-view /></main>
    <Footer class="mt-6" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import SearchBar from './components/SearchBar.vue';
import Header from './components/Layouts/Header.vue';
import Footer from './components/Layouts/Footer.vue';

@Options({
  components: {
    SearchBar,
    Header,
    Footer,
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

main {
  min-height: calc(100vh - 208px);
}
</style>
