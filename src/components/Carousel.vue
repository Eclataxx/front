<template>
  <div class="carousel bg-green-400 flex flex-col items-center justify-center">
    <h1>Carousel</h1>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class Carousel extends Vue {}
</script>

<style lang="scss" scoped>
  .carousel {
    height: 400px;
  }
</style>
