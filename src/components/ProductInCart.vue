<template>
  <div
    class="
      flex justify-between items-start lg:items-center product-in-cart p-4 transition duration-300
      border border-gray-400 p-6 rounded-sm bg-white mb-4 flex-col lg:flex-row
    "
  >
    <div class="flex items-center">
      <img src="/images/iphone.jpg" />
      <div class="flex flex-col text-left items-start pl-2 w-full">
        <router-link to="/product">
          <h3 class="font-bold mb-1 hover:underline">
            <span class="text-lg">{{ title }}</span>
          </h3>
        </router-link>
        <span class="text-gray-600 text-sm mb-1"
          >Selled by: <span class="text-black">{{ seller }}</span></span
        >
        <span class="text-xl">{{ price }}</span>
      </div>
    </div>
    <div class="flex flex-col">
      <Button to="/cart" class="bg-gray-300 hover:bg-gray-400 text-gray-800">
        Remove
      </Button>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Button from './Button.vue';

@Options({
  components: {
    Button,
  },
  props: {
    price: String,
    seller: String,
    title: String,
  },
})
export default class ProductInCart extends Vue {}
</script>

<style lang="scss" scoped>
img {
  max-width: 100px;
  max-height: 100px;
}
</style>
