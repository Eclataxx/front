<template>
  <div class="
    order-card flex flex-col rounded-sm
    border border-gray-400
  ">
    <div class="flex bg-gray-200 justify-between p-4 text-sm">
      <div class="flex text-left">
        <div class="flex flex-col mr-10">
          <span class="font-bold">Order Number</span>
          <span>{{ orderId }}</span>
        </div>
        <div class="flex flex-col mr-10">
          <span class="font-bold">Order date</span>
          <span>{{ date }}</span>
        </div>
      </div>
      <div class="flex flex-col text-right text-base">
          <span>Total</span>
          <span class="font-bold">{{ total }}€</span>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    date: String,
    total: Number,
    orderId: Number,
  },
})

export default class OrderCard extends Vue {}
</script>
