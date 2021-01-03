<template>
  <div>
    <img :alt="alt" :src="imgSrc" width="200" height="200" @click="$router.push(to)"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    alt: String,
    to: String,
    imgSrc: String,
  },
})

export default class CarouselItem extends Vue {}
</script>

<style lang="scss" scoped>
  .carousel {
    height: 400px;
  }
</style>
