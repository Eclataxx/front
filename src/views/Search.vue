<template>
  <div v-if="loaded" class="search pt-16 lg:pt-6">
    <div class="text-left text-gray-700" v-if="products.length">
      <p>Found {{ products.length }} products</p>
      <ProductCard v-for="p in products" :key="p.id" :product="p" />
    </div>
    <div class="flex flex-col mt-10" v-else>
      <span class="text-xl">Your search did not match any products.</span>
      <span>Make sure that all words are spelled correctly or try more general keywords.</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { ProductModel } from '../models';
import ProductCard from '../components/ProductCard.vue';
import * as axiosService from '../services/axiosMethods';

@Options({
  components: {
    ProductCard,
  },
  watch: {
    async $route(to, from) {
      this.products = await this.getProducts();
    },
  },
})
export default class Search extends Vue {
  products: ProductModel[] = [];

  loaded: boolean = false;

  async getProducts(): Promise<ProductModel[] | []> {
    const { q: name } = this.$route.query;
    if (typeof name === 'string' || name === undefined) {
      const path = name && name !== '' ? `/products?name=${name}` : '/products';
      const res = await axiosService.get<{ 'hydra:member': ProductModel[] }>(path)
      if (res) {
        return res.data['hydra:member'];
      }

      return [];
    }

    return [];
  }

  async created() {
    this.products = await this.getProducts();
    this.loaded = true;
  }
}
</script>
