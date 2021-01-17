<template>
  <footer class="bg-gray-900 text-white flex items-center justify-center">
      <span class="text-sm">© 2020 Eclatax</span>
  </footer>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class DashboardFooter extends Vue {}
</script>

<style lang="scss" scoped>
  footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2.5rem;
  }
</style>
