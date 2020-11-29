<template>
  <div
    class="
      text-xs rounded-sm bg-gray-900
      text-white px-2 py-1 my-1 mr-1
    ">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

export default class Tag extends Vue {}
</script>
