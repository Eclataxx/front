<template>
  <div class="h-full">
    <Header />
    <main class="container mx-auto px-2 lg:px-0"><router-view /></main>
    <div class="fixed inline-block mr-2 align-middle select-none transition
        duration-200 ease-in toggle-wrapper"
      >
      <span class="text-xs font-bold">Switch API</span>
        <input
          type="checkbox"
          name="toggle"
          id="toggle"
          :checked="api === 'api2'"
          @click="switchBackend()"
          class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4
          appearance-none cursor-pointer"
        />
        <label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full
        bg-gray-300 cursor-pointer"></label>
      </div>
    <Footer class="mt-6" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import SearchBar from './components/SearchBar.vue';
import Header from './components/Layouts/Header.vue';
import Footer from './components/Layouts/Footer.vue';

type localStorageApiValues = 'api1' | 'api2' | null;

@Options({
  components: {
    SearchBar,
    Header,
    Footer,
  },
})
export default class Home extends Vue {
  api: localStorageApiValues = localStorage.getItem('apiUrl') as localStorageApiValues || 'api1';

  mounted() {
    if (localStorage.getItem('apiUrl')) {
      return;
    }
    localStorage.setItem('apiUrl', 'api1');
    this.api = 'api1';
  }

  switchBackend() {
    if (localStorage.getItem('apiUrl') === 'api1') {
      localStorage.setItem('apiUrl', 'api2');
      this.api = 'api2';
    } else {
      localStorage.setItem('apiUrl', 'api1');
      this.api = 'api1';
    }
    window.location.reload();
  }
}
</script>

<style lang="postcss">
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

  .toggle-wrapper {
    bottom: 10px;
    right: 15px;
  }

  .toggle-checkbox:checked {
    @apply: right-0 border-green-400;
    right: 0;
    border-color: #68D391;
  }

  .toggle-checkbox:checked + .toggle-label {
    @apply: bg-green-400;
    background-color: #68D391;
  }
</style>
