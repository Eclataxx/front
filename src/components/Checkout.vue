<template>
  <div
    class="flex flex-col lg:flex-row border border-gray-400 p-6 rounded-sm-sm bg-white"
  >
    <div class="flex flex-col items-center lg:items-start mb-2 lg:mb-0">
      <h4 class="text-lg">CART TOTAL: {{ price }}</h4>
      <span class="text-sm text-gray-600">{{ items }} items</span>
    </div>
    <Button
      url=""
      @click.prevent
      class="bg-green-500 hover:bg-green-400 text-white w-64 text-base py-3 px-2"
    >
      <span class="font-bold">Checkout</span>
    </Button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    price: String,
    items: String,
  },
})

export default class Checkout extends Vue {}
</script>

<style lang="scss" scoped>
.carousel {
  height: 400px;
}
</style>
