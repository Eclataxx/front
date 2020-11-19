<template>
  <div class="search mt-6">
    <ProductCard v-for="index in 10" :key="index">
      <template v-slot:title>Smashed iPhone 6</template>
      <template v-slot:description>
        Consectetur reprehenderit cupidatat in dolor velit ex ea velit fugiat velit nostrud
        tempor consectetur aliqua. Magna sint officia laboris occaecat deserunt occaecat non
        occaecat magna laboris in ad occaecat non. Id ad laboris Lorem non. Sunt elit sint dolore
        officia ad sint.
        Consectetur reprehenderit cupidatat in dolor velit ex ea velit fugiat velit nostrud
        tempor consectetur aliqua. Magna sint officia laboris occaecat deserunt occaecat non
        occaecat magna laboris in ad occaecat non. Id ad laboris Lorem non. Sunt elit sint dolore
        officia ad sint.
        Consectetur reprehenderit cupidatat in dolor velit ex ea velit fugiat velit nostrud
        tempor consectetur aliqua. Magna sint officia laboris occaecat deserunt occaecat non
        occaecat magna laboris in ad occaecat non. Id ad laboris Lorem non. Sunt elit sint dolore
        officia ad sint.
        Consectetur reprehenderit cupidatat in dolor velit ex ea velit fugiat velit nostrud
        tempor consectetur aliqua. Magna sint officia laboris occaecat deserunt occaecat non
        occaecat magna laboris in ad occaecat non. Id ad laboris Lorem non. Sunt elit sint dolore
        officia ad sint.
      </template>
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
