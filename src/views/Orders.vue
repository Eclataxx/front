<template>
  <div v-if="loaded" class="orders pt-16 lg:pt-6">
    <h1 class="text-left text-3xl mb-4">Your Orders</h1>
    <OrderCard class="mb-4"
    v-for="order in orders" :key="order.id"
    :date="order.date" :total="order.price" :orderId="order.id">
      <OrderedProductCard class="border-t"
      v-for="p in order.products" :key="p.id" :product="p" />
    </OrderCard>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import OrderedProductCard from '../components/OrderedProductCard.vue';
import OrderCard from '../components/OrderCard.vue';
import { OrderModel } from '../models';
import * as axiosService from '../services/axiosMethods';

@Options({
  components: {
    OrderCard,
    OrderedProductCard,
  },
})
export default class Home extends Vue {
  orders: OrderModel[] = [];

  loaded: boolean = false;

  created() {
    axiosService
      .get<{ 'hydra:member': OrderModel[] }>('/orders')
      .then((res) => {
        this.orders = res.data['hydra:member'];
        this.loaded = true;
      });
  }
}
</script>
