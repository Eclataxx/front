<template>
  <div class="carousel place-content-center bg-gray-300 cursor-pointer">
    <div class="grid grid-cols-3 pt-2 pr-2 items-center">
        <p class="col-span-2 carousel-text">{{ currentItem.alt }}</p>
        <img
          :alt="currentItem.alt"
          :src="currentItem.imgSrc"
          width="400" height="150"
          class="flex justify-between mx-auto"
          @click="$router.push(currentItem.to)"
        />
    </div>

    <div class="flex justify-between w-24 mx-auto">
      <button
        v-for="(_, index) of items"
        :key="`goto-${index}`"
        @click="goToItem(index)"
        class="rounded-full w-4 pb-2 transition duration-500 ease-in-out"
        :class="{
          'bg-gray-900': index === currentIndex,
          'bg-gray-400': index !== currentIndex,
        }"
      ></button>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { ItemModel } from '../models/carousel/item.model';

export default class Carousel extends Vue {
  currentIndex: number = 0;

  interval: number = 0;

  items: ItemModel[] = [
    {
      alt: 'Broken Ipad',
      imgSrc: '/images/ipad.jpg',
      to: '/product',
    },
    {
      alt: 'Broken Imac',
      imgSrc: '/images/imac.jpg',
      to: '/product',
    },
  ]

  mounted() {
    this.interval = window.setInterval(() => this.next(), 5 * 1000);
  }

  get currentItem() {
    return this.items[this.currentIndex];
  }

  public next() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
  }

  public prev() {
    this.currentIndex = (this.currentIndex ? this.currentIndex : this.items.length) - 1;
  }

  public goToItem(n: number) {
    window.clearInterval(this.interval);
    this.currentIndex = n;
    this.interval = window.setInterval(() => this.next(), 5 * 1000);
  }
}
</script>

<style scoped>
.carousel-text {
  font-weight: 900;
  font-size: 70px;
}
</style>
