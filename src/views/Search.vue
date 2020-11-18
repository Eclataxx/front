<template>
  <div class="home">
    Search
    <ProductCard>
      <template v-slot:title>Smashed iPhone 6</template>
      <template v-slot:description>I tried to eat my phone, didn't work.</template>
      <template v-slot:price>141€</template>
    </ProductCard>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ProductCard from '../components/ProductCard.vue';

@Options({
  components: {
    ProductCard,
  },
})
export default class Home extends Vue {}
</script>
