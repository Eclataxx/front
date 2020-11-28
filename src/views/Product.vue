<template>
  <div class="sign-in flex flex-col mt-6">
    <div class="
      flex border border-gray-400 p-6 rounded bg-white
      justify-between items-start
    ">
      <img src="/images/iphone.jpg">
      <div class="text-left mx-10">
        <h1 class="text-2xl">iPhone X 64GB - Space Gray Unlocked</h1>
        <div class="flex flex-wrap items-center">
          <Tag>Broken glass</Tag>
          <Tag>Working OS</Tag>
        </div>
        <div class="my-1">
          <span class="font-bold">Price: </span>
          <span class="font-bold text-2xl">150€</span>
          <span class="line-through text-xl text-gray-500 pl-3">1000€</span>
        </div>
        <p class="my-1">
          <span class="font-bold">Seller notes:</span>
          Occaecat commodo sit incididunt ipsum ex deserunt laboris.
          Nulla velit nulla aliqua ut aliquip ut consectetur excepteur ea.
          Consequat nisi irure anim labore qui labore aute. Commodo qui ut
          irure veniam dolor enim enim consectetur velit occaecat cillum
          officia eu.
          Occaecat commodo sit incididunt ipsum ex deserunt laboris.
          Nulla velit nulla aliqua ut aliquip ut consectetur excepteur ea.
          Consequat nisi irure anim labore qui labore aute. Commodo qui ut
          irure veniam dolor enim enim consectetur velit occaecat cillum
          officia eu.
          Occaecat commodo sit incididunt ipsum ex deserunt laboris.
          Nulla velit nulla aliqua ut aliquip ut consectetur excepteur ea.
          Consequat nisi irure anim labore qui labore aute. Commodo qui ut
          irure veniam dolor enim enim consectetur velit occaecat cillum
          officia eu.
        </p>
        <div class="my-1"><span class="font-bold">Selled by: </span>Tom</div>
      </div>
      <div class="
        buy p-6 flex flex-col text-left
        border border-gray-400 rounded
      ">
        <InfoText>Free shipping</InfoText>
        <InfoText>12 months warranty</InfoText>
        <InfoText>Delivery in 6 business days</InfoText>
        <Button url="" @click.prevent
          class="
          bg-green-500 hover:bg-green-400 text-white w-64
          text-base py-3 px-2 mt-6
        ">
          <img src="/images/shopping_cart.svg" class="pr-2">
          <span>Ajouter au panier (150€)</span>
        </Button>
      </div>
    </div>
    <div class="mt-6 flex border border-gray-400 p-6 rounded bg-white
      justify-between items-center">
      <div class="text-left mx-10">
        <h1 class="text-2xl mb-4">Specifications</h1>
        <div class="text-sm flex flex-wrap justify-start">
          <ProductSpec spec="Release year" value="Early 2014"
          v-for="index in 22" :key="index" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Tag from '../components/Tag.vue';
import Button from '../components/Button.vue';
import InfoText from '../components/InfoText.vue';
import ProductSpec from '../components/ProductSpec.vue';

@Options({
  components: {
    InfoText,
    Tag,
    Button,
    ProductSpec,
  },
})
export default class Product extends Vue {}
</script>

<style lang="scss" scoped>
  img {
    max-width: 300px;
    max-height: 300px;
  }

  .buy {
    box-shadow: 0 0.6rem 0.6rem rgba(0,0,0,.1);
  }
</style>
