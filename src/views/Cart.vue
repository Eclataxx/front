<template>
  <section v-if="loaded" class="cart pt-16 lg:pt-6">
    <h1 class="text-left text-3xl mb-4">Your Cart</h1>
    <div class="flex items-start justify-center">
      <div class="w-full mr-0 lg:mr-4">
        <ProductInCart
          v-for="product in cart.products"
          :key="product.id"
          :title="product.name"
          :seller="product.submittedBy.username"
          :price="product.price"
        />
        <Checkout class="flex items-center justify-between"
        :price="cart.price" :items="cart.products.length" />
      </div>
      <Checkout class="hidden lg:block text-left w-64"
      :price="cart.price" :items="cart.products.length" />
    </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ProductInCart from '../components/ProductInCart.vue';
import Checkout from '../components/Checkout.vue';
import { UserModel, CartModel } from '../models';
import * as axiosService from '../services/axiosMethods';

@Options({
  components: {
    ProductInCart,
    Checkout,
  },
})
export default class Cart extends Vue {
  cart: CartModel | null = null;

  loaded: boolean = false;

  async created() {
    const response = await axiosService.get<UserModel>(`/users/${this.$store.state.user.id}`)
    if (response) {
      this.cart = response.data.cart;
      console.log(response.data)
      this.loaded = true;
    }
  }
}
</script>

<style lang="scss" scoped>
.discover:hover {
  box-shadow: 0 0.6rem 0.6rem rgba(0, 0, 0, 0.1);
  transform: scale(1.1);
}
</style>
