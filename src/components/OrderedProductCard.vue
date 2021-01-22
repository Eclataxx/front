<template>
  <div class="
      flex flex-col lg:flex-row justify-between ordered-product-card
      p-4 transition duration-300 items-start lg:items-center bg-white
    "
  >
    <div class="flex items-center">
      <img src="/images/iphone.jpg" />
      <div class="flex flex-col text-left items-start pl-2 w-full">
        <router-link :to="product['@id']">
          <h3 class="font-bold mb-1 hover:underline text-lg">
            {{ product.name }}
          </h3>
        </router-link>
        <div class="text-sm">
          <span class="text-gray-600">Price: </span>
          {{ product.price }}€
        </div>
        <span class="text-gray-600 text-sm"
          >Selled by: <span class="text-blue-900">{{ product.submittedBy.username }}</span></span
        >
      </div>
    </div>
    <div>
      <CustomButton
        to=""
        class="bg-gray-300 hover:bg-gray-400 text-gray-800"
      >
        Issue invoice
      </CustomButton>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import CustomButton from './CustomButton.vue';

@Options({
  props: {
    product: Object,
  },
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
