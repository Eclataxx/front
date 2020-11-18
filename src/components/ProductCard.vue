<template>
  <div class="flex">
    <img src="/images/broken-iphone.jpg">
    <div>
      <h3>Smashed iPhone 6</h3>
      <p>blablabla ajldakzjld azdj l jkl dsjklq djkl</p>
      <span>123€</span>
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
