<template>
  <div class="flex flex-col bg-red-300 p-2 mb-2 w-full text-red-900
  rounded-sm border border-red-400">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class FormError extends Vue {}
</script>
