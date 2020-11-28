<template>
  <div
    class="border-t border-gray-500 p-2 w-64 flex justify-between mr-4"
  >
    <span class="text-gray-600">{{ spec }}:</span>
    <span class="font-bold">{{ value }}</span>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    spec: String,
    value: String,
  },
})
export default class ProductSpec extends Vue {}
</script>
