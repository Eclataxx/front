<template>
  <div class="orders pt-16 lg:pt-6">
    <h1 class="text-left text-3xl mb-4">Your Orders</h1>
    <OrderCard class="mb-4" date="25 novembre 2020" total="40,98" orderId="424-64923413-9323724">
      <OrderedProductCard class="border-t" v-for="index in 2" :key="index">
        <template v-slot:title>Smashed iPhone 6</template>
        <template v-slot:price>141€</template>
      </OrderedProductCard>
    </OrderCard>
    <OrderCard date="19 novembre 2020" total="140,98" orderId="424-642313-932314">
      <OrderedProductCard class="border-t" v-for="index in 5" :key="index">
        <template v-slot:title>Smashed iPhone 6</template>
        <template v-slot:price>141€</template>
      </OrderedProductCard>
    </OrderCard>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import OrderedProductCard from '../components/OrderedProductCard.vue';
import OrderCard from '../components/OrderCard.vue';

@Options({
  components: {
    OrderCard,
    OrderedProductCard,
  },
})
export default class Home extends Vue {}
</script>
