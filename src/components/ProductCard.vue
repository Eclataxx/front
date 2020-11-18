<template>
  <div class="flex">
    <img src="/images/broken-iphone.jpg">
    <div class="flex flex-col text-left pl-2">
      <h3><slot class="text-lg" name="title"></slot></h3>
      <p><slot name="description"></slot></p>
      <span><slot name="price"></slot></span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class ProductCard extends Vue {}
</script>

<style lang="scss" scoped>
  img {
    max-width: 200px;
    max-height: 200px;
  }
</style>
