<template>
  <div class="sign-in flex flex-col pt-16 lg:pt-6">
    <div v-if="loaded" class="
      flex flex-col lg:flex-row border border-gray-400 p-6 rounded-sm bg-white
      justify-between items-center lg:items-start
    ">
      <img src="/images/iphone.jpg">
      <div class="text-left mx-0 my-2 lg:my-0 lg:mx-10">
        <h1 class="text-2xl">{{ product.name }}</h1>
        <div class="my-1">
          <span class="font-bold">Price: </span>
          <span class="font-bold text-2xl">{{ product.price }}€</span>
        </div>
        <p class="my-1">
          <span class="font-bold">Seller notes:</span>
          {{ product.description }}
        </p>
        <div class="my-1"><span class="font-bold">Selled by: </span>
          {{ product.submittedBy.username }}
        </div>
      </div>
      <div class="
        buy p-6 flex flex-col text-left
        border border-gray-400 rounded-sm
      ">
        <InfoText>Free shipping</InfoText>
        <InfoText>12 months warranty</InfoText>
        <InfoText>Delivery in 6 business days</InfoText>
        <CustomButton url="" @click.prevent @click="addToCart"
          :data-url="product['@id']"
          class="
          bg-green-500 hover:bg-green-400 text-white w-64
          text-base py-3 px-2 mt-6
        ">
          <img src="/images/shopping_cart_white.svg" class="pointer-events-none pr-2">
          <span class="pointer-events-none">Ajouter au panier ({{ product.price }}€)</span>
        </CustomButton>
      </div>
    </div>
    <div class="mt-6 flex border border-gray-400 p-6 rounded-sm bg-white
      justify-between items-center">
      <div class="text-left mx-0 lg:mx-10">
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
import { mapGetters } from 'vuex';
import { useToast } from 'vue-toastification';
import Tag from '../components/Tag.vue';
import CustomButton from '../components/CustomButton.vue';
import InfoText from '../components/InfoText.vue';
import ProductSpec from '../components/ProductSpec.vue';
import * as axiosService from '../services/axiosMethods';
import { ProductModel, CartModel } from '../models';

@Options({
  components: {
    InfoText,
    Tag,
    CustomButton,
    ProductSpec,
  },
  computed: {
    ...mapGetters(['user']),
  },
})
export default class Product extends Vue {
  product: ProductModel | null = null;

  loaded: boolean = false;

  showToast(message: string, error: boolean): void {
    const toast = useToast();
    if (error) {
      toast.error(message);
    } else {
      toast.success(message);
    }
  }

  created() {
    axiosService
      .get<ProductModel>(`/products/${this.$route.params.id}`)
      .then((res) => {
        this.product = res.data;
        this.loaded = true;
      });
  }

  addToCart(event: { target: HTMLAnchorElement }) {
    const { url } = event.target.dataset;
    const { user } = this.$store.state;
    if (user) {
      const cartId = this.$store.state.user.cart['@id'];
      if (this.product) {
        const { carts } = this.product;
        carts.push(cartId);
        axiosService.patch<{ carts: string[] }>(`${url}`, { carts }, {
          headers: {
            'Content-Type': 'application/merge-patch+json',
            Authorization: `Bearer ${localStorage.getItem('jwt')}`,
          },
        })
          .then(() => {
            this.showToast('This product has been added to your cart.', false);
            return true;
          })
          .catch(() => {
            this.showToast('An error occurred.', true);
            return false;
          });
      }
    }
  }
}
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
