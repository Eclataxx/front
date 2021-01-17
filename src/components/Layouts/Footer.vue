<template>
  <footer class="bg-gray-900 text-white">
    <div class="h-full container flex flex-col lg:flex-row items-center justify-between mx-auto">
      <div class="flex flex-col sm:flex-row mb-4 lg:mb-0">
        <span class="mr-0 sm:mr-8">About us</span>
        <span class="mr-0 sm:mr-8">Terms of service</span>
        <span>Data protection</span>
      </div>
      <span>© 2020 Eclatax</span>
    </div>
  </footer>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class Footer extends Vue {}
</script>

<style lang="scss" scoped>
  footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 4rem;
  }
</style>
