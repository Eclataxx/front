<template>
  <div class="home">
    Search
    <ProductCard />
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
