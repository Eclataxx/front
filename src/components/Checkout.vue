<template>
  <div
    class="flex flex-col lg:flex-row border border-gray-400 p-6 rounded-sm bg-white"
  >
    <div class="flex flex-col items-center lg:items-start lg:mb-0">
      <h4 class="text-lg">CART TOTAL: {{ price }}€</h4>
      <span class="text-sm text-gray-600">{{ items }} items</span>
    </div>
    <CustomButton
      url=""
      @click.prevent
      class="bg-green-500 hover:bg-green-400 text-white text-base py-3 px-2"
    >
      <span class="font-bold">Checkout</span>
    </CustomButton>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import CustomButton from './CustomButton.vue';

@Options({
  props: {
    price: Number,
    items: Number,
  },
  components: {
    CustomButton,
  },
})

export default class Checkout extends Vue {
}
</script>

<style lang="scss" scoped>
.carousel {
  height: 400px;
}
</style>
