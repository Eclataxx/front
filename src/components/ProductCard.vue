<template>
  <router-link to="/product" class="
    flex product-card border border-gray-400 p-4 rounded-sm my-4
    transition duration-300 cursor-pointer
  ">
    <img src="/images/iphone.jpg">
    <div class="flex flex-col text-left pl-2 w-full">
      <h3 class="font-bold mb-1"><slot class="text-lg" name="title"></slot></h3>
      <div class="text-sm">
        <span class="text-gray-600">Price: </span>
        <slot name="price"></slot>
      </div>
      <span class="text-gray-600 text-sm">Selled by: <span class="text-black">Tom</span></span>
      <hr class="border-gray-400 my-2 w-full">
      <p class="description text-sm">
        <span class="text-gray-600">Seller notes: </span>
        <slot name="description"></slot>
      </p>
      <a v-on:click.stop.prevent v-on:click="readMoreOrLess"
      class="read-more hover:text-blue-700 text-sm underline">
        Read more
      </a>
    </div>
  </router-link>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class ProductCard extends Vue {
  expanded: boolean = false;

  readMoreOrLess(event: Event): void {
    const target = event.target as HTMLElement;
    const parent = target.parentNode!;
    const readMoreElement = parent.querySelector('.description') as HTMLParagraphElement;

    if (!this.expanded) {
      this.expanded = true;
      target.textContent = 'Read less';
      readMoreElement.style.webkitLineClamp = '99';
      return;
    }

    this.expanded = false;
    readMoreElement.style.webkitLineClamp = '3';
    target.textContent = 'Read more';
  }
}
</script>

<style lang="scss" scoped>
  img {
    max-width: 200px;
    max-height: 200px;
  }

  .product-card:hover {
    box-shadow: 0 0.6rem 0.6rem rgba(0,0,0,.1);
  }

  .description {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }

  .read-more {
    user-select: none;
  }
</style>
