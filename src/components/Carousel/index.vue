<template>
  <div class="carousel bg-green-400">
  <div class="flex items-start">
    <div @click="prev"><span> PREEEEEEEEEEV </span></div>
    <CarouselItem
        :alt="currentItem.alt"
        :imgSrc="currentItem.imgSrc"
        :to="currentItem.to"
    />
    </div>
    <div @click="next"><span> NEEEEEEEEEEXT </span></div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { ItemModel } from '../../models/carousel/item.model';
import CarouselItem from './CarouselItem.vue';

const interval = (cb: Function) => setInterval(() => cb(), 10000);
@Options({
  components: {
    CarouselItem,
  },
})

export default class Carousel extends Vue {
  currentIndex: number = 0;

    items: ItemModel[] = [
      {
        alt: 'Broken Iphone',
        imgSrc: '/images/iphone.jpg',
        to: '/product',
      },
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
      interval(this.next);
    }

    get currentItem() {
      return this.items[this.currentIndex];
    }

    public next() {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
    //   restartInterval(this.next);
    }

    public prev() {
      this.currentIndex = (this.currentIndex ? this.currentIndex : this.items.length) - 1;
    //   restartInterval(this.next);
    }

    public goToItem(n: number) {
      this.currentIndex = n;
    //   restartInterval(this.next);
    }
}
</script>

<style lang="scss" scoped>
  .carousel {
    height: 400px;
  }
</style>
