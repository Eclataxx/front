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
          :url="cart['@id']"
          :iri="product['@id']"
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
import { Options, Vue, setup } from 'vue-class-component';
import { useToast } from 'vue-toastification';
import ProductInCart from '../components/ProductInCart.vue';
import Checkout from '../components/Checkout.vue';
import { CartModel } from '../models';
import * as axiosService from '../services/axiosMethods';
import useBackend from '../composables/useBackend';

@Options({
  components: {
    ProductInCart,
    Checkout,
  },
  provide() {
    return {
      removeFromCart: this.removeFromCart,
      orderCart: this.orderCart,
    }
  },
})

export default class Cart extends Vue {
  cart: CartModel | null = null;

  loaded: boolean = false;

  backend = setup(() => useBackend());

  async created() {
    await this.backend.get(localStorage.getItem('apiUrl') as string);
    await this.getCart();
    this.loaded = true;
  }

  async getCart() {
    const { getCart } = this.backend.api.methods;
    const userId = this.$store.state.user.id;
    const response = await getCart(userId);
    if (response) {
      this.cart = response.data;
    }
  }

  orderCart(): boolean {
    if (this.cart && this.cart.products.length) {
      const { createOrderFromCart } = this.backend.api.methods;
      const { user } = this.$store.state;
      if (user) {
        createOrderFromCart(user.id)
          .then(async () => {
            await this.getCart();
            this.$forceUpdate();
          });
      }
      this.showToast('Thanks for ordering.', false);
      return true;
    }
    this.showToast('An error occurred', true);
    return false;
  }

  showToast(message: string, error: boolean): void {
    const toast = useToast();
    if (error) {
      toast.error(message);
    } else {
      toast.success(message);
    }
  }

  removeFromCart(event: { target: HTMLAnchorElement }) {
    const { url, productIri } = event.target.dataset;
    const cartId = url!.split('/').reverse()[0];
    const { user } = this.$store.state;
    if (user && productIri) {
      if (this.cart) {
        const products = this.cart.products.map((product) => product['@id']);
        const productToRemoveIndex = products.indexOf(productIri);
        if (productToRemoveIndex > -1) {
          const { patchCartProducts } = this.backend.api.methods;
          products.splice(productToRemoveIndex, 1);
          patchCartProducts(cartId, products)
            .then(async () => {
              await this.getCart();
              this.$forceUpdate();
              this.showToast('This product has been removed from your cart.', false);
              return true;
            })
            .catch(() => false);
        }
      }
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
