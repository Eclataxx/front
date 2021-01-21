<template>
  <div v-if="loaded" class="search pt-16 lg:pt-6">
    <ProductCard v-for="p in products" :key="p.id" :product="p" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { ProductModel } from '../models';
import ProductCard from '../components/ProductCard.vue';
import * as axiosService from '../services/axiosMethods';
import Product from './Product.vue';

@Options({
  components: {
    ProductCard,
  },
})
export default class Search extends Vue {
  products: ProductModel[] = [];

  loaded: boolean = false;

  created() {
    axiosService
      .get<{ 'hydra:member': ProductModel[] }>('/products')
      .then((res) => {
        this.products = res.data['hydra:member'];
        this.loaded = true;
      });
  }
}
</script>
