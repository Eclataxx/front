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
import { Options, Vue, setup } from 'vue-class-component';
import gql from 'graphql-tag'
import { ProductModel } from '../models';
import ProductCard from '../components/ProductCard.vue';
import * as axiosService from '../services/axiosMethods';
import useBackend from '../composables/useBackend';

@Options({
  components: {
    ProductCard,
  },
  watch: {
    async $route(to, from) {
      await this.setProducts();
      this.$forceUpdate();
    },
  },
})

export default class Search extends Vue {
  products: ProductModel[] = [];

  loaded: boolean = false;

  backend = setup(() => useBackend());

  async created() {
    await this.backend.get(localStorage.getItem('apiUrl') as string);
    this.setProducts();
    this.loaded = true;
  }

  async setProducts() {
    const { q: name } = this.$route.query;
    const { getVerifiedProducts } = this.backend.api.methods;
    this.products = await getVerifiedProducts(name);
  }
}
</script>
