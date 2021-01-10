<template>
  <div
    to="/product" class="
      flex flex-col lg:flex-row justify-between ordered-product-card
      p-4 transition duration-300 items-start lg:items-center
    "
  >
    <div class="flex items-center">
      <img src="/images/iphone.jpg" />
      <div class="flex flex-col text-left items-start pl-2 w-full">
        <router-link to="/product">
          <h3 class="font-bold mb-1 hover:underline">
            <slot class="text-lg" name="title"></slot>
          </h3>
        </router-link>
        <div class="text-sm">
          <span class="text-gray-600">Price: </span>
          <slot name="price"></slot>
        </div>
        <span class="text-gray-600 text-sm"
          >Selled by: <span class="text-black">Tom</span></span
        >
      </div>
    </div>
    <div class="flex flex-row lg:flex-col">
      <CustomButton
        to="/product"
        class="bg-gray-300 hover:bg-gray-400 text-gray-800 mr-2 lg:mr-0"
      >
        Issue invoice
      </CustomButton>
      <CustomButton
        to="/product"
        class="bg-gray-300 hover:bg-gray-400 text-gray-800"
      >
        Confirm receipt
      </CustomButton>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import CustomButton from './CustomButton.vue';

@Options({
  components: {
    CustomButton,
  },
})

export default class OrderedProductCard extends Vue {}
</script>

<style lang="scss" scoped>
img {
  max-width: 100px;
  max-height: 100px;
}
</style>
