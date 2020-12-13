<template>
  <section class="cart pt-16 lg:pt-6">
    <h1 class="text-left text-3xl mb-4">Your Cart</h1>
    <div class="flex items-start justify-center">
      <div class="w-full mr-0 lg:mr-4">
        <ProductInCart
          v-for="index in 3"
          :key="index"
          title="iPhone X 64GB - Space Gray Unlocked"
          seller="Tom"
          price="100€"
        />
        <Checkout class="flex items-center justify-between" price="300€" items="3" />
      </div>
      <Checkout class="hidden lg:block flex flex-col items-start" price="300€" items="3" />
    </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ProductInCart from '../components/ProductInCart.vue';
import Button from '../components/Button.vue';
import Checkout from '../components/Checkout.vue';

@Options({
  components: {
    ProductInCart,
    Checkout,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.discover:hover {
  box-shadow: 0 0.6rem 0.6rem rgba(0, 0, 0, 0.1);
  transform: scale(1.1);
}
</style>
