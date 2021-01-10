<template>
  <header
    class="fixed w-full flex items-center bg-gray-900 z-20 text-white"
    onresize="resizeHandler()"
  >
    <div class="flex items-center justify-between w-full">
      <router-link to="/" class="text-xl lg:text-2xl ml-2">Eclatax</router-link>
      <div class="flex">
        <router-link to="/admin/dashboard" class="mr-2 lg:mr-4">
          <span>Dashboard</span>
        </router-link>
        <router-link to="/admin/dashboard" class="mr-2 lg:mr-4">
          <span>Sign out</span>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class DashboardHeader extends Vue {}
</script>

<style lang="scss" scoped>
header {
  height: 3rem;
}
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
