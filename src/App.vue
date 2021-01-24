<template>
  <div id="app-container">
    <router-view name="header" />
    <main class="container mx-auto px-2 lg:px-0">
      <AppError v-if="error" class="m-10" />
      <router-view v-else />
    </main>
    <div
      class="fixed inline-block mr-2 align-middle select-none
      transition duration-200 ease-in toggle-wrapper z-50"
    >
      <span class="text-xs font-bold">Switch API</span>
      <input
        type="checkbox"
        name="toggle"
        id="toggle"
        :checked="api === 'api2'"
        @click="switchBackend()"
        class="toggle-checkbox absolute block w-6 h-6
        rounded-full bg-white border-4 appearance-none cursor-pointer"
      />
      <label
        for="toggle"
        class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
      ></label>
    </div>
    <router-view class="mt-6" name="footer" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import * as axiosService from './services/axiosMethods';
import { UserModel } from './models';
import AppError from './components/AppError.vue';
import SearchBar from './components/SearchBar.vue';

type localStorageApiValues = 'api1' | 'api2' | null;

@Options({
  components: {
    SearchBar,
    AppError,
  },
  watch: {
    $route(to, from) {
      this.error = false;
    },
  },
})

export default class App extends Vue {
  error: boolean = false;

  loaded: boolean = false;

  api: localStorageApiValues =
    (localStorage.getItem('apiUrl') as localStorageApiValues) || 'api1'

  async beforeCreate() {
    const response = await axiosService.whoIsLoggedIn();
    const userData = response ? response.data : null;
    this.$store.dispatch('user', userData);
    this.loaded = true;
  }

  errorCaptured(err: Error, instance: App, info: string): boolean {
    this.error = true;
    console.log('=============== ERROR CAPTURED ===============');
    console.log(err);
    console.log(instance);
    console.log(info);
    console.log('==============================================');
    return false;
  }

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

#app-container {
  min-height: 100%;
  position: relative;
}

.toggle-wrapper {
  bottom: 10px;
  right: 15px;
}

.toggle-checkbox:checked {
  @apply: right-0 border-green-400;
  right: 0;
  border-color: #68d391;
}

.toggle-checkbox:checked + .toggle-label {
  @apply: bg-green-400;
  background-color: #68d391;
}

main {
  padding-bottom: calc(4rem + 1.5rem);
}
</style>
