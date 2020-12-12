<template>
  <div class="search mt-6">
    <ProductCard v-for="product in products" :key="product">
      <template v-slot:title>{{ product.title }}</template>
      <template v-slot:description>
        {{ product.description }}
      </template>
      <template v-slot:price>141€</template>
    </ProductCard>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { ProductModel } from '../models/product/product.model';
import ProductCard from '../components/ProductCard.vue';
import * as axiosService from '../services/axiosMethods';

@Options({
  components: {
    ProductCard,
  },
})
export default class Home extends Vue {
  products: ProductModel[] = [];

  mounted() {
    axiosService.get<ProductModel[]>('/products').then((res) => {
      this.products = res.data;
    });
  }
}
</script>
